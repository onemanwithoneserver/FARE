import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Target,
  Calendar,
  Search,
  Building2,
  Sparkles,
  Globe2,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, PrimaryButton, HoverGlow, CARD_BASE, AccentHairline } from "../../ui";

interface Props {
  searchQuery?: string;
  sortBy?: string;
  onBookExpert?: (expert: Expert) => void;
}

export default function Mobile({ searchQuery = "", sortBy = "Most Relevant", onBookExpert }: Props) {
  const s = data;
  const [expandedExpert, setExpandedExpert] = useState<string | null>(null);

  const displayedExperts = useMemo(() => {
    return getSortedAndFilteredExperts(s.experts, searchQuery, sortBy);
  }, [s.experts, searchQuery, sortBy]);

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
    <Section tone="white" mobile ariaLabel="Expert Cards" className="!pt-3 !pb-10 bg-[#F8FAFD] font-['Outfit']">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="flex flex-col gap-4"
      >
        <AnimatePresence mode="popLayout">
          {displayedExperts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-12 px-5 bg-white rounded-[22px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-3">
                <Search size={24} />
              </div>
              <h3 className="text-[18px] font-black text-[#0B1D3A] mb-1.5 tracking-tight">No Experts Found</h3>
              <p className="text-[13px] text-[#7B8DAA] max-w-xs font-medium">
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
                  className={`${CARD_BASE} overflow-hidden flex flex-col shadow-sm`}
                >
                  <AccentHairline accent={a} />
                  <HoverGlow accent={a} />

                  <div className="p-4.5 pb-3.5 border-b border-[#F0F4FA] relative z-10 flex flex-col gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="relative shrink-0">
                        <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#F4D068] to-[#0B1D3A] shadow-md">
                          <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-[#F8F9FC] border-2 border-white">
                            <img
                              src={expert.image}
                              alt={expert.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {expert.verified && (
                          <div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow-xs flex items-center justify-center border border-[#E6EBF3]"
                            title="Verified"
                          >
                            <ShieldCheck size={12} className="text-[#10B981] fill-[#10B981]/20" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5 mb-0.5">
                          <h3 className="text-[17px] font-black text-[#0B1D3A] tracking-tight leading-snug truncate">
                            {expert.name}
                          </h3>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
                            {expert.experience.split(" ")[0]}
                          </span>
                        </div>

                        <p className="text-[12.5px] font-bold text-[#0B1D3A] leading-snug truncate">
                          {expert.role}
                        </p>

                        {expert.reExperience && (
                          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-[#5A6B82]">
                            <Building2 size={12} className="text-[#7C3AED] shrink-0" />
                            <span className="truncate">{expert.reExperience}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {expert.specialisedIn.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 rounded-[6px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11px] font-bold text-[#3B4D66]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-4.5 py-2.5 bg-[#FCFDFE] border-b border-[#F0F4FA] relative z-10 flex items-center justify-between text-[11.5px] font-semibold text-[#5A6B82]">
                    <span className="flex items-center gap-1.5">
                      <Globe2 size={12} className="text-[#7B8DAA]" />
                      <span>{expert.languages.join(" · ")}</span>
                    </span>
                    <div className="flex items-center gap-1 text-[#0891B2]">
                      <Target size={12} />
                      <span>{expert.sessionsCompleted} Sessions</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-[#FAFBFE] border-b border-[#E6EBF3] relative z-10"
                      >
                        <div className="p-4 flex flex-col gap-3.5 text-[12px]">
                          {expert.about && (
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                                Bio
                              </span>
                              <p className="text-[#475569] leading-relaxed font-medium bg-white p-3 rounded-[10px] border border-[#E6EBF3] italic">
                                "{expert.about}"
                              </p>
                            </div>
                          )}

                          {expert.sampleScenarios && expert.sampleScenarios.length > 0 && (
                            <div className="flex flex-col gap-2 pt-1">
                              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#C99A2E] flex items-center gap-1">
                                <Sparkles size={11} className="text-[#C99A2E]" />
                                Sample Scenarios
                              </span>
                              <div className="flex flex-col gap-1.5">
                                {expert.sampleScenarios.map((sc, sIdx) => (
                                  <div
                                    key={sc.title}
                                    className="p-2 rounded-[8px] bg-white border border-[#E6EBF3] flex items-center justify-between gap-2"
                                  >
                                    <span className="text-[11.5px] font-bold text-[#0B1D3A] truncate">
                                      {sIdx + 1}. {sc.title}
                                    </span>
                                    <span className="text-[10px] font-semibold text-[#0891B2] bg-[#E8F8FC] px-1.5 py-0.5 rounded-[4px] shrink-0">
                                      {sc.duration}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {expert.relevance && (
                            <div className="flex flex-col gap-1 pt-1">
                              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                                Highlights
                              </span>
                              <div className="flex flex-col gap-1">
                                {expert.relevance.map((rel) => (
                                  <div key={rel} className="flex items-center gap-1.5 text-[11px] text-[#3B4D66]">
                                    <CheckCircle2 size={11} className="text-[#10B981] shrink-0" />
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

                  <div className="p-4 pt-3.5 bg-white relative z-10 flex flex-col gap-3 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                          Fee
                        </span>
                        <span className="text-[18px] font-black text-[#0B1D3A] leading-none">
                          {expert.price}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[9.5px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                          Next Slot
                        </span>
                        <span className="flex items-center gap-1 text-[12px] font-bold text-[#0B1D3A]">
                          <Calendar size={12} className="text-[#10B981]" />
                          {expert.nextAvailable.split("·")[0]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(expert.name)}
                        className="h-10 px-3 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11.5px] font-bold text-[#475569] flex items-center gap-1 shrink-0"
                      >
                        <span>{isExpanded ? "Less" : "Details"}</span>
                        <ChevronDown size={13} className={isExpanded ? "rotate-180" : ""} />
                      </button>

                      <PrimaryButton
                        full
                        variant="gold"
                        onClick={() => handleBook(expert)}
                        className="!h-10 !py-0 !px-3 text-[12.5px] !rounded-[10px] font-extrabold cursor-pointer shadow-sm"
                      >
                        Book Practice
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
