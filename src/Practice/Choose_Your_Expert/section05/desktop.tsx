import { useMemo } from "react";
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
            return (
              <motion.article
                layout
                key={expert.name}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`${CARD_BASE} ${CARD_HOVER} overflow-hidden flex flex-col group`}
              >
                <AccentHairline accent={a} />
                <HoverGlow accent={a} />

                <div className="p-6 pb-5 border-b border-[#E6EBF3] relative z-10 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#F4D068] to-[#0B1D3A] shadow-[0_8px_20px_rgba(201,154,46,0.18)] group-hover:scale-105 transition-transform duration-300">
                        <div className="w-[74px] h-[74px] rounded-full overflow-hidden bg-[#F8F9FC] border-2 border-white">
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
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

                  {expert.about && (
                    <p className="text-[13px] text-[#475569] leading-relaxed font-medium bg-[#F8FAFD] p-3 rounded-[12px] border border-[#E6EBF3]">
                      {expert.about}
                    </p>
                  )}
                </div>

                <div className="p-6 pt-5 flex flex-col gap-4 flex-1 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10.5px] font-black uppercase tracking-[0.12em] text-[#7B8DAA]">
                      Specialised In
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {expert.specialisedIn.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[11.5px] font-bold text-[#3B4D66]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {expert.sampleScenarios && expert.sampleScenarios.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-black uppercase tracking-[0.12em] text-[#C99A2E] flex items-center gap-1">
                          <Sparkles size={12} className="text-[#C99A2E]" />
                          Sample Practice Scenarios
                        </span>
                        <span className="text-[10.5px] font-bold text-[#7B8DAA]">1-on-1 Role-Play</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        {expert.sampleScenarios.slice(0, 2).map((sc, sIdx) => (
                          <div
                            key={sc.title}
                            className="p-2.5 rounded-[12px] bg-gradient-to-r from-[#FFFDF7] to-[#F8FAFD] border border-[#E6EBF3] hover:border-[#C99A2E]/40 transition-colors flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-6 h-6 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[10px] font-black shrink-0">
                                {sIdx + 1}
                              </span>
                              <div className="min-w-0">
                                <span className="block text-[12.5px] font-bold text-[#0B1D3A] truncate leading-tight">
                                  {sc.title}
                                </span>
                                <span className="block text-[10.5px] font-semibold text-[#7B8DAA] uppercase tracking-wider">
                                  {sc.category}
                                </span>
                              </div>
                            </div>
                            <span className="text-[11px] font-bold text-[#0891B2] bg-[#E8F8FC] px-2 py-0.5 rounded-[4px] border border-[#0891B2]/20 shrink-0 flex items-center gap-1">
                              <Clock size={11} />
                              {sc.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[12.5px] font-bold text-[#475569] pt-3.5 border-t border-[#E6EBF3] mt-auto">
                    <span className="flex items-center gap-1.5 text-[#5A6B82]">
                      <Globe2 size={13} className="text-[#7B8DAA]" />
                      {expert.languages.join(" · ")}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#06B6D4]">
                      <Target size={13} />
                      <span>{expert.sessionsCompleted} Sessions Completed</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-4 bg-[#F8FAFD] border-t border-[#E6EBF3] relative z-10 flex flex-col gap-3.5">
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

                  <PrimaryButton
                    full
                    variant="gold"
                    onClick={() => handleBook(expert)}
                    className="!h-11 !py-0 !px-4 text-[13.5px] !rounded-[12px] font-extrabold cursor-pointer shadow-md hover:shadow-lg transition-all"
                  >
                    Book Practice Session
                  </PrimaryButton>
                </div>
              </motion.article>
            );
          })
        )}
      </AnimatePresence>
    </motion.div>
  );
}
