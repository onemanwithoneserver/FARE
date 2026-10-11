import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Target,
  Calendar,
  Search,
  Building2,
  Sparkles,
  Clock,
  Globe2,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import { ACCENTS, fadeUp, staggerContainer, PrimaryButton, HoverGlow, CARD_BASE, CARD_HOVER, AccentHairline } from "../../ui";

interface Props {
  searchQuery?: string;
  sortBy?: string;
  onBookExpert?: (expert: Expert) => void;
}

export default function Desktop({ searchQuery = "", sortBy = "Most Relevant", onBookExpert }: Props) {
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
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Outfit']"
    >
      <AnimatePresence mode="popLayout">
        {displayedExperts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="col-span-full py-16 px-6 bg-white rounded-[24px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-[20px] font-black text-[#0B1D3A] mb-2 tracking-tight">No Experts Found</h3>
            <p className="text-[14px] text-[#7B8DAA] max-w-md font-medium">
              No experts matched your search query. Try searching for a different name, role, or skillset.
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
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`${CARD_BASE} ${CARD_HOVER} overflow-hidden flex flex-col group transition-all duration-300`}
              >
                <AccentHairline accent={a} />
                <HoverGlow accent={a} />

                <div className="p-6 pb-4 border-b border-[#F0F4FA] relative z-10 flex flex-col gap-3.5">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#F4D068] to-[#0B1D3A] shadow-[0_8px_20px_rgba(201,154,46,0.18)] group-hover:scale-105 transition-transform duration-300">
                        <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#F8F9FC] border-2 border-white">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {expert.verified && (
                        <div
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E6EBF3]"
                          title="Verified Real Estate Mentor"
                        >
                          <ShieldCheck size={14} className="text-[#10B981] fill-[#10B981]/20" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-[19px] font-black text-[#0B1D3A] group-hover:text-[#C99A2E] tracking-tight leading-snug transition-colors truncate">
                          {expert.name}
                        </h3>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
                          {expert.experience.split(" ")[0]} Exp
                        </span>
                      </div>

                      <p className="text-[13.5px] font-bold text-[#0B1D3A] leading-snug truncate">
                        {expert.role}
                      </p>

                      {expert.reExperience && (
                        <div className="flex items-center gap-1.5 mt-1.5 text-[11.5px] font-semibold text-[#5A6B82]">
                          <Building2 size={13} className="text-[#7C3AED] shrink-0" />
                          <span className="truncate">{expert.reExperience}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {expert.specialisedIn.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-[8px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11.5px] font-bold text-[#3B4D66] group-hover:border-[#C99A2E]/30 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                    {expert.specialisedIn.length > 3 && (
                      <span className="text-[11px] font-semibold text-[#7B8DAA] px-1.5">
                        +{expert.specialisedIn.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#FCFDFE] border-b border-[#F0F4FA] relative z-10 flex items-center justify-between text-[12px] font-semibold text-[#5A6B82]">
                  <span className="flex items-center gap-1.5">
                    <Globe2 size={13} className="text-[#7B8DAA]" />
                    <span>{expert.languages.join(" · ")}</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-[#0891B2]">
                    <Target size={13} />
                    <span>{expert.sessionsCompleted} Sessions</span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#FAFBFE] border-b border-[#E6EBF3] relative z-10"
                    >
                      <div className="p-6 flex flex-col gap-4 text-[13px]">
                        {expert.about && (
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                              Mentor Profile
                            </span>
                            <p className="text-[#475569] leading-relaxed font-medium bg-white p-3.5 rounded-[12px] border border-[#E6EBF3] italic">
                              "{expert.about}"
                            </p>
                          </div>
                        )}

                        {expert.sampleScenarios && expert.sampleScenarios.length > 0 && (
                          <div className="flex flex-col gap-2 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] flex items-center gap-1">
                                <Sparkles size={12} className="text-[#C99A2E]" />
                                Sample Practice Scenarios
                              </span>
                              <span className="text-[10.5px] font-bold text-[#7B8DAA]">1-on-1 Role-Play</span>
                            </div>

                            <div className="flex flex-col gap-2">
                              {expert.sampleScenarios.map((sc, sIdx) => (
                                <div
                                  key={sc.title}
                                  className="p-2.5 rounded-[10px] bg-white border border-[#E6EBF3] flex items-center justify-between gap-3 shadow-2xs"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="w-5 h-5 rounded-full bg-[#0B1D3A] text-[#D5AA45] flex items-center justify-center text-[9.5px] font-bold shrink-0">
                                      {sIdx + 1}
                                    </span>
                                    <span className="text-[12px] font-bold text-[#0B1D3A] truncate">
                                      {sc.title}
                                    </span>
                                  </div>
                                  <span className="text-[10.5px] font-semibold text-[#0891B2] bg-[#E8F8FC] px-2 py-0.5 rounded-[4px] shrink-0 flex items-center gap-1">
                                    <Clock size={10} />
                                    {sc.duration}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {expert.relevance && (
                          <div className="flex flex-col gap-1.5 pt-1">
                            <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                              Specialist Highlights
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {expert.relevance.map((rel) => (
                                <div key={rel} className="flex items-center gap-1.5 text-[11.5px] font-medium text-[#3B4D66]">
                                  <CheckCircle2 size={12} className="text-[#10B981] shrink-0" />
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

                <div className="p-5 pt-4 bg-white relative z-10 flex flex-col gap-3.5 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                        Session Fee
                      </span>
                      <span className="text-[20px] font-black text-[#0B1D3A] leading-none tracking-tight">
                        {expert.price}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                        Next Available
                      </span>
                      <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#0B1D3A]">
                        <Calendar size={13} className="text-[#10B981]" />
                        {expert.nextAvailable.split("·")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => toggleExpand(expert.name)}
                      className="h-11 px-3.5 rounded-[12px] bg-[#F8FAFD] hover:bg-[#EEF2F9] border border-[#E6EBF3] text-[12.5px] font-bold text-[#475569] hover:text-[#0B1D3A] transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    <PrimaryButton
                      full
                      variant="gold"
                      onClick={() => handleBook(expert)}
                      className="!h-11 !py-0 !px-4 text-[13.5px] !rounded-[12px] font-extrabold cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      Book Practice Session
                    </PrimaryButton>
                  </div>
                </div>
              </motion.article>
            );
          })
        )}
      </AnimatePresence>
    </motion.div>
  );
}
