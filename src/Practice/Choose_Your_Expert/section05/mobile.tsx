import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Calendar,
  Search,
  Building2,
  Sparkles,
  Globe2,
  ChevronDown,
  Check,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, PrimaryButton, HoverGlow, CARD_BASE, AccentHairline, VerifiedBadge } from "../../ui";

interface Props {
  searchQuery?: string;
  sortBy?: string;
  filters?: ReadonlySet<string>;
  onBookExpert?: (expert: Expert) => void;
}

const NO_FILTERS: ReadonlySet<string> = new Set();

export default function Mobile({ searchQuery = "", sortBy = "Most Relevant", filters = NO_FILTERS, onBookExpert }: Props) {
  const s = data;
  const [expandedExpert, setExpandedExpert] = useState<string | null>(null);

  const displayedExperts = useMemo(() => {
    return getSortedAndFilteredExperts(s.experts, searchQuery, sortBy, filters);
  }, [s.experts, searchQuery, sortBy, filters]);

  const handleBook = (expert: Expert) => {
    if (onBookExpert) {
      onBookExpert(expert);
    } else {
      const el = document.getElementById("booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleExpand = (expertName: string) => {
    setExpandedExpert((prev) => (prev === expertName ? null : expertName));
  };

  return (
    <Section tone="white" mobile ariaLabel="Expert Cards" className="!pt-2.5 !pb-8 bg-[#F8FAFD] font-['Outfit']">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="flex flex-col gap-3"
      >
        <AnimatePresence mode="popLayout">
          {displayedExperts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-10 px-4 bg-white rounded-[18px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#C99A2E] text-white flex items-center justify-center mb-2.5 shadow-xs">
                <Search size={22} />
              </div>
              <h3 className="text-[16px] font-medium text-[#0B1D3A] mb-1 tracking-tight">No Experts Found</h3>
              <p className="text-[12.5px] text-[#7B8DAA] max-w-xs font-normal">
                No experts matched your search query. Try adjusting your search keywords.
              </p>
            </motion.div>
          ) : (
            displayedExperts.map((expert, i) => {
              const a = ACCENTS[i % ACCENTS.length];
              const isExpanded = expandedExpert === expert.name;

              return (
                <motion.article
                  layout
                  key={expert.name}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`${CARD_BASE} overflow-hidden flex flex-col shadow-xs`}
                >
                  <AccentHairline accent={a} />
                  <HoverGlow accent={a} />

                  <div className="p-3.5 pb-2.5 border-b border-[#F0F4FA] relative z-10 flex flex-col gap-2.5">
                    <div className="flex items-start gap-3">
                      <div className="relative shrink-0">
                        <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#F4D068] to-[#0B1D3A] shadow-xs">
                          <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-[#F8F9FC] border-2 border-white">
                            <img
                              src={expert.image}
                              alt={expert.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {expert.verified && (
                          <VerifiedBadge
                            size={18}
                            className="absolute -bottom-1 -right-1 ring-1.5 ring-white rounded-full shadow-xs"
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5 mb-0.5">
                          <h3 className="text-[15px] font-medium text-[#0B1D3A] tracking-tight leading-snug truncate">
                            {expert.name}
                          </h3>
                          <span className="text-[9.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
                            {expert.experience.split(" ")[0]}
                          </span>
                        </div>

                        <p className="text-[12px] font-medium text-[#0B1D3A] leading-snug truncate">
                          {expert.role}
                        </p>

                        {expert.reExperience && (
                          <div className="flex items-center gap-1.5 mt-1 text-[11px] font-normal text-[#5A6B82]">
                            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#7C3AED] text-white flex items-center justify-center shrink-0">
                              <Building2 size={8.5} />
                            </span>
                            <span className="truncate">{expert.reExperience}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {expert.specialisedIn.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 rounded-[5px] bg-[#F8FAFD] border border-[#E6EBF3] text-[10.5px] font-medium text-[#3B4D66]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 bg-[#FCFDFE] border-b border-[#F0F4FA] relative z-10 flex items-center justify-between text-[11px] font-medium text-[#5A6B82]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
                        <Globe2 size={8.5} />
                      </span>
                      <span>{expert.languages.join(" · ")}</span>
                    </span>
                    <div className="flex items-center gap-1.5 text-[#0891B2]">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                        <Target size={8.5} />
                      </span>
                      <span>{expert.sessionsCompleted} Sessions</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden bg-[#FAFBFE] border-b border-[#E6EBF3] relative z-10"
                      >
                        <div className="p-3.5 flex flex-col gap-3 text-[11.5px]">
                          {expert.about && (
                            <div className="flex flex-col gap-1">
                              <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#7B8DAA]">
                                Bio
                              </span>
                              <p className="text-[#475569] leading-relaxed font-normal bg-white p-2.5 rounded-[8px] border border-[#E6EBF3] italic">
                                "{expert.about}"
                              </p>
                            </div>
                          )}

                          {expert.sampleScenarios && expert.sampleScenarios.length > 0 && (
                            <div className="flex flex-col gap-1.5 pt-0.5">
                              <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#C99A2E] flex items-center gap-1.5">
                                <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                                  <Sparkles size={8.5} />
                                </span>
                                Sample Scenarios
                              </span>
                              <div className="flex flex-col gap-1">
                                {expert.sampleScenarios.map((sc, sIdx) => (
                                  <div
                                    key={sc.title}
                                    className="p-2 rounded-[7px] bg-white border border-[#E6EBF3] flex items-center justify-between gap-2"
                                  >
                                    <span className="text-[11px] font-medium text-[#0B1D3A] truncate">
                                      {sIdx + 1}. {sc.title}
                                    </span>
                                    <span className="text-[9.5px] font-medium text-[#0891B2] bg-[#E8F8FC] px-1.5 py-0.5 rounded-[4px] shrink-0">
                                      {sc.duration}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {expert.relevance && (
                            <div className="flex flex-col gap-1 pt-0.5">
                              <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#7B8DAA]">
                                Highlights
                              </span>
                              <div className="flex flex-col gap-1">
                                {expert.relevance.map((rel) => (
                                  <div key={rel} className="flex items-center gap-1.5 text-[11px] text-[#3B4D66]">
                                    <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                                      <Check size={8} strokeWidth={3} />
                                    </span>
                                    <span className="truncate">{rel}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-3 pt-2.5 bg-white relative z-10 flex flex-col gap-2 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-medium text-[#7B8DAA] uppercase tracking-wider">
                          Fee
                        </span>
                        <span className="text-[16px] font-medium text-[#0B1D3A] leading-tight">
                          {expert.price}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] font-medium text-[#7B8DAA] uppercase tracking-wider">
                          Next Slot
                        </span>
                        <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-[#0B1D3A]">
                          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#10B981] text-white flex items-center justify-center shrink-0">
                            <Calendar size={8.5} />
                          </span>
                          {expert.nextAvailable.split("·")[0]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(expert.name)}
                        className="h-9 px-3 rounded-[9px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11.5px] font-medium text-[#475569] flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <span>{isExpanded ? "Less" : "Details"}</span>
                        <ChevronDown size={12} className={isExpanded ? "rotate-180" : ""} />
                      </button>

                      <PrimaryButton
                        variant="gold"
                        onClick={() => handleBook(expert)}
                        className="!h-9 !py-0 !px-3 text-[12px] !rounded-[9px] font-medium cursor-pointer shadow-xs shrink-0 !w-auto"
                      >
                        Book Session
                      </PrimaryButton>
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
