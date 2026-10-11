import { useState, useMemo, useRef, useEffect } from "react";
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
  ChevronRight,
  CheckCircle2,
  X,
  Check,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import {
  ACCENTS,
  fadeUp,
  PrimaryButton,
  HoverGlow,
  CARD_BASE,
  CARD_HOVER,
  AccentHairline,
} from "../../ui";

interface Props {
  searchQuery?: string;
  sortBy?: string;
  onBookExpert?: (expert: Expert) => void;
}

export default function Desktop({
  searchQuery = "",
  sortBy = "Most Relevant",
  onBookExpert,
}: Props) {
  const s = data;
  const [selectedExpertName, setSelectedExpertName] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  const displayedExperts = useMemo(() => {
    return getSortedAndFilteredExperts(s.experts, searchQuery, sortBy);
  }, [s.experts, searchQuery, sortBy]);

  const selectedExpert = useMemo(() => {
    if (!selectedExpertName) return null;
    return displayedExperts.find((e) => e.name === selectedExpertName) || null;
  }, [displayedExperts, selectedExpertName]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleWheel = (e: WheelEvent) => {
      const scrollEl = scrollBodyRef.current;
      if (!scrollEl) return;

      e.stopPropagation();

      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        e.preventDefault();
        return;
      }

      if (!scrollEl.contains(e.target as Node)) {
        scrollEl.scrollTop += e.deltaY;
        e.preventDefault();
        return;
      }

      const atTop = scrollTop <= 0 && e.deltaY < 0;
      const atBottom = scrollTop >= maxScroll - 1 && e.deltaY > 0;
      if (atTop || atBottom) {
        e.preventDefault();
      }
    };

    dialog.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      dialog.removeEventListener("wheel", handleWheel);
    };
  }, [selectedExpert]);

  const handleBook = (expert: Expert) => {
    if (onBookExpert) {
      onBookExpert(expert);
    } else {
      const el = document.getElementById("booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleToggleDetails = (expertName: string) => {
    setSelectedExpertName((prev) => (prev === expertName ? null : expertName));
  };

  const isSplit = Boolean(selectedExpert);

  return (
    <div className="w-full font-['Outfit']">
      <AnimatePresence mode="popLayout">
        {displayedExperts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full py-16 px-6 bg-white rounded-[24px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-[20px] font-black text-[#0B1D3A] mb-2 tracking-tight">
              No Experts Found
            </h3>
            <p className="text-[14px] text-[#7B8DAA] max-w-md font-medium">
              No experts matched your search query. Try searching for a different name, role, or skillset.
            </p>
          </motion.div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <motion.div
              layout
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full transition-all duration-300 ${
                isSplit ? "lg:col-span-5 xl:col-span-5" : "lg:col-span-12"
              }`}
            >
              <div
                className={`grid gap-5 transition-all duration-300 ${
                  isSplit ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {displayedExperts.map((expert, i) => {
                  const a = ACCENTS[i % ACCENTS.length];
                  const isSelected = selectedExpertName === expert.name;

                  return (
                    <motion.article
                      layout
                      key={expert.name}
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={`${CARD_BASE} ${CARD_HOVER} overflow-hidden flex flex-col group transition-all duration-300 ${
                        isSelected
                          ? "!border-[#C99A2E] ring-2 ring-[#C99A2E]/30 bg-[#FFFDF9] shadow-[0_12px_32px_-8px_rgba(201,154,46,0.18)]"
                          : ""
                      }`}
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
                            onClick={() => handleToggleDetails(expert.name)}
                            className={`h-11 px-3.5 rounded-[12px] border text-[12.5px] font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-[#D5AA45] border-[#0B1D3A] shadow-xs"
                                : "bg-[#F8FAFD] hover:bg-[#EEF2F9] border-[#E6EBF3] text-[#475569] hover:text-[#0B1D3A]"
                            }`}
                          >
                            <span>{isSelected ? "Viewing Details" : "View Details"}</span>
                            {isSelected ? (
                              <Check size={14} className="text-[#D5AA45]" strokeWidth={2.8} />
                            ) : (
                              <ChevronRight size={14} className="text-[#7B8DAA]" />
                            )}
                          </button>

                          <PrimaryButton
                            full
                            variant="gold"
                            onClick={() => handleBook(expert)}
                            className="!h-11 !py-0 !px-4 text-[13.5px] !rounded-[12px] font-extrabold cursor-pointer shadow-md hover:shadow-lg transition-all"
                          >
                            Book Session
                          </PrimaryButton>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedExpert && (
                <motion.aside
                  key={selectedExpert.name}
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:col-span-7 xl:col-span-7 lg:sticky lg:top-24 z-20"
                >
                  <div
                    ref={dialogRef}
                    className="w-full bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_20px_50px_-12px_rgba(11,29,58,0.14)] overflow-hidden flex flex-col max-h-[calc(100vh-120px)] h-[calc(100vh-130px)]"
                  >
                    <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

                    <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-white relative shrink-0">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 border-2 border-[#C99A2E] shadow-md">
                              <img
                                src={selectedExpert.image}
                                alt={selectedExpert.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {selectedExpert.verified && (
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center">
                                <ShieldCheck size={12} className="text-[#10B981] fill-[#10B981]/20" />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className="text-[20px] font-black text-white tracking-tight truncate">
                                {selectedExpert.name}
                              </h3>
                            </div>
                            <p className="text-[12.5px] font-bold text-[#E0B550] leading-snug line-clamp-2">
                              {selectedExpert.role}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-white/90">
                                {selectedExpert.experience}
                              </span>
                              {selectedExpert.reExperience && (
                                <span className="text-[11px] text-white/80 truncate flex items-center gap-1">
                                  <Building2 size={11} className="text-[#F5C451] shrink-0" />
                                  <span className="truncate">{selectedExpert.reExperience.split("—")[0]}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedExpertName(null)}
                          aria-label="Close details"
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3 border-t border-white/10 text-[11.5px]">
                        <div className="flex items-center gap-1.5 bg-white/5 rounded-[10px] p-2 min-w-0">
                          <Globe2 size={13} className="text-[#F5C451] shrink-0" />
                          <span className="truncate">{selectedExpert.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 rounded-[10px] p-2 min-w-0">
                          <Target size={13} className="text-[#38BDF8] shrink-0" />
                          <span className="truncate">{selectedExpert.sessionsCompleted} Sessions</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 bg-white/5 rounded-[10px] p-2 min-w-0">
                          <ShieldCheck size={13} className="text-[#10B981] shrink-0" />
                          <span className="truncate">Verified 1-on-1 Coach</span>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={scrollBodyRef}
                      className="p-5 sm:p-6 flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto overscroll-contain"
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}
                    >
                      {selectedExpert.about && (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                            About The Mentor
                          </span>
                          <div className="p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] text-[13px] text-[#334155] leading-relaxed font-medium italic">
                            "{selectedExpert.about}"
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-2">
                        <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                          Core Domains & Specialization
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedExpert.specialisedIn.map((spec) => (
                            <span
                              key={spec}
                              className="px-2.5 py-1 rounded-[8px] bg-[#FFFDF7] border border-[#C99A2E]/40 text-[12px] font-bold text-[#0B1D3A]"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedExpert.sampleScenarios && selectedExpert.sampleScenarios.length > 0 && (
                        <div className="flex flex-col gap-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] flex items-center gap-1.5">
                              <Sparkles size={12} className="text-[#C99A2E]" />
                              Sample Practice Scenarios
                            </span>
                            <span className="text-[10.5px] font-bold text-[#7B8DAA]">1-on-1 Simulation</span>
                          </div>

                          <div className="flex flex-col gap-2">
                            {selectedExpert.sampleScenarios.map((sc, idx) => (
                              <div
                                key={sc.title}
                                className="p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex items-center justify-between gap-3 shadow-2xs hover:border-[#C99A2E]/50 transition-colors"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span className="w-5 h-5 rounded-full bg-[#0B1D3A] text-[#D5AA45] flex items-center justify-center text-[10px] font-black shrink-0">
                                    {idx + 1}
                                  </span>
                                  <span className="text-[12.5px] font-bold text-[#0B1D3A] truncate">
                                    {sc.title}
                                  </span>
                                </div>
                                <span className="text-[10.5px] font-bold text-[#0891B2] bg-[#E8F8FC] px-2 py-0.5 rounded-[6px] shrink-0 flex items-center gap-1">
                                  <Clock size={11} />
                                  {sc.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedExpert.relevance && selectedExpert.relevance.length > 0 && (
                        <div className="flex flex-col gap-2">
                          <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                            Why Practice With {selectedExpert.name.split(" ")[0]}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedExpert.relevance.map((rel) => (
                              <div key={rel} className="flex items-start gap-2 text-[12px] font-medium text-[#334155] bg-[#F8FAFD] p-2 rounded-[10px] border border-[#E6EBF3]">
                                <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                                <span>{rel}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5 bg-white border-t border-[#F0F4FA] flex items-center justify-between gap-3 shadow-[0_-8px_20px_rgba(0,0,0,0.03)] shrink-0 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider">
                          Fee
                        </span>
                        <span className="text-[20px] font-black text-[#0B1D3A] leading-none">
                          {selectedExpert.price}
                        </span>
                      </div>

                      <PrimaryButton
                        variant="gold"
                        onClick={() => handleBook(selectedExpert)}
                        className="!h-11 !py-0 !px-5 text-[13px] !rounded-[12px] font-extrabold cursor-pointer shadow-md hover:shadow-lg transition-all"
                      >
                        Book Session
                      </PrimaryButton>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
