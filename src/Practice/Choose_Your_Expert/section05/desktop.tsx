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
            className="w-full py-12 px-5 bg-white rounded-[20px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-full bg-[#C99A2E] text-white flex items-center justify-center mb-3">
              <Search size={20} />
            </div>
            <h3 className="text-[17px] font-medium text-[#0B1D3A] mb-1.5 tracking-tight">
              No Experts Found
            </h3>
            <p className="text-[13px] text-[#7B8DAA] max-w-md font-normal">
              No experts matched your search query. Try searching for a different name, role, or skillset.
            </p>
          </motion.div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <motion.div
              layout
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full transition-all duration-300 ${
                isSplit ? "lg:col-span-5 xl:col-span-5" : "lg:col-span-12"
              }`}
            >
              <div
                className={`grid gap-4 transition-all duration-300 ${
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
                          ? "!border-[#C99A2E] ring-1 ring-[#C99A2E]/30 bg-[#FFFDF9] shadow-xs"
                          : ""
                      }`}
                    >
                      <AccentHairline accent={a} />
                      <HoverGlow accent={a} />

                      <div className="p-3.5 pb-2.5 border-b border-[#F0F4FA] relative z-10 flex flex-col gap-2.5">
                        <div className="flex items-start gap-3">
                          <div className="relative shrink-0">
                            <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#F4D068] to-[#0B1D3A] shadow-xs group-hover:scale-105 transition-transform duration-300">
                              <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-[#F8F9FC] border border-white">
                                <img
                                  src={expert.image}
                                  alt={expert.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                            </div>

                            {expert.verified && (
                              <div
                                className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#10B981] shadow-xs flex items-center justify-center text-white"
                                title="Verified Real Estate Mentor"
                              >
                                <Check size={10} strokeWidth={3} className="text-white" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5 mb-0.5">
                              <h3 className="text-[16px] font-medium text-[#0B1D3A] group-hover:text-[#C99A2E] tracking-tight leading-snug transition-colors truncate">
                                {expert.name}
                              </h3>
                              <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
                                {expert.experience.split(" ")[0]} Exp
                              </span>
                            </div>

                            <p className="text-[12.5px] font-medium text-[#3B4D66] leading-snug truncate">
                              {expert.role}
                            </p>

                            {expert.reExperience && (
                              <div className="flex items-center gap-1.5 mt-1 text-[11px] font-normal text-[#5A6B82]">
                                <span className="w-3.5 h-3.5 rounded-[4px] bg-[#6366F1] text-white flex items-center justify-center shrink-0">
                                  <Building2 size={9} />
                                </span>
                                <span className="truncate">{expert.reExperience}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-1">
                          {expert.specialisedIn.slice(0, 3).map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 rounded-[6px] bg-[#F8FAFD] border border-[#E6EBF3] text-[10.5px] font-normal text-[#3B4D66]"
                            >
                              {spec}
                            </span>
                          ))}
                          {expert.specialisedIn.length > 3 && (
                            <span className="text-[10px] font-normal text-[#7B8DAA] px-1">
                              +{expert.specialisedIn.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="px-3.5 py-1.5 bg-[#FCFDFE] border-b border-[#F0F4FA] relative z-10 flex items-center justify-between text-[11px] font-medium text-[#5A6B82]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-[4px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
                            <Globe2 size={9} />
                          </span>
                          <span>{expert.languages.join(" · ")}</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-[#0891B2]">
                          <span className="w-4 h-4 rounded-[4px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                            <Target size={9} />
                          </span>
                          <span>{expert.sessionsCompleted} Sessions</span>
                        </div>
                      </div>

                      <div className="p-3 pt-2 bg-white relative z-10 flex flex-col gap-2.5 mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[9.5px] font-medium text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                              Session Fee
                            </span>
                            <span className="text-[17px] font-medium text-[#0B1D3A] leading-none tracking-tight">
                              {expert.price}
                            </span>
                          </div>

                          <div className="flex flex-col items-end">
                            <span className="text-[9.5px] font-medium text-[#7B8DAA] uppercase tracking-wider mb-0.5">
                              Next Available
                            </span>
                            <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-[#0B1D3A]">
                              <span className="w-4 h-4 rounded-[4px] bg-[#10B981] text-white flex items-center justify-center shrink-0">
                                <Calendar size={9} />
                              </span>
                              {expert.nextAvailable.split("·")[0]}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleToggleDetails(expert.name)}
                            className={`h-9 px-3 rounded-[10px] border text-[11.5px] font-medium transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-[#D5AA45] border-[#0B1D3A]"
                                : "bg-[#F8FAFD] hover:bg-[#EEF2F9] border-[#E6EBF3] text-[#475569] hover:text-[#0B1D3A]"
                            }`}
                          >
                            <span>{isSelected ? "Viewing" : "View Details"}</span>
                            {isSelected ? (
                              <span className="w-3.5 h-3.5 rounded-[3px] bg-[#D5AA45] text-[#0B1D3A] flex items-center justify-center">
                                <Check size={9} strokeWidth={3} />
                              </span>
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0B1D3A] text-white flex items-center justify-center">
                                <ChevronRight size={9} />
                              </span>
                            )}
                          </button>

                          <PrimaryButton
                            full
                            variant="gold"
                            onClick={() => handleBook(expert)}
                            className="!h-9 !py-0 !px-3.5 text-[12px] !rounded-[10px] font-medium cursor-pointer shadow-xs transition-all"
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
                  initial={{ opacity: 0, x: 20, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:col-span-7 xl:col-span-7 lg:sticky lg:top-24 z-20"
                >
                  <div
                    ref={dialogRef}
                    className="w-full bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_16px_40px_-10px_rgba(11,29,58,0.12)] overflow-hidden flex flex-col max-h-[calc(100vh-130px)] h-[calc(100vh-140px)]"
                  >
                    <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

                    <div className="p-4 bg-gradient-to-br from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-white relative shrink-0">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-[#C99A2E] shadow-xs">
                              <img
                                src={selectedExpert.image}
                                alt={selectedExpert.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {selectedExpert.verified && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#10B981] shadow flex items-center justify-center text-white">
                                <Check size={8} strokeWidth={3} />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className="text-[17px] font-medium text-white tracking-tight truncate">
                                {selectedExpert.name}
                              </h3>
                            </div>
                            <p className="text-[12px] font-medium text-[#E0B550] leading-snug line-clamp-1">
                              {selectedExpert.role}
                            </p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <span className="text-[9.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-white/90">
                                {selectedExpert.experience}
                              </span>
                              {selectedExpert.reExperience && (
                                <span className="text-[10.5px] text-white/80 truncate flex items-center gap-1 font-normal">
                                  <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center">
                                    <Building2 size={8} />
                                  </span>
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
                          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-2.5 border-t border-white/10 text-[11px] font-medium">
                        <div className="flex items-center gap-1.5 bg-white/5 rounded-[8px] p-1.5 min-w-0">
                          <span className="w-4.5 h-4.5 rounded-[4px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                            <Globe2 size={10} />
                          </span>
                          <span className="truncate">{selectedExpert.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 rounded-[8px] p-1.5 min-w-0">
                          <span className="w-4.5 h-4.5 rounded-[4px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                            <Target size={10} />
                          </span>
                          <span className="truncate">{selectedExpert.sessionsCompleted} Sessions</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 bg-white/5 rounded-[8px] p-1.5 min-w-0">
                          <span className="w-4.5 h-4.5 rounded-[4px] bg-[#10B981] text-white flex items-center justify-center shrink-0">
                            <ShieldCheck size={10} />
                          </span>
                          <span className="truncate">Verified Coach</span>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={scrollBodyRef}
                      className="p-3.5 sm:p-4 flex flex-col gap-3.5 flex-1 min-h-0 overflow-y-auto overscroll-contain"
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}
                    >
                      {selectedExpert.about && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA]">
                            About The Mentor
                          </span>
                          <div className="p-3 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3] text-[12.5px] text-[#334155] leading-relaxed font-normal italic">
                            "{selectedExpert.about}"
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA]">
                          Core Domains & Specialization
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {selectedExpert.specialisedIn.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 rounded-[6px] bg-[#FFFDF7] border border-[#C99A2E]/30 text-[11px] font-medium text-[#0B1D3A]"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedExpert.sampleScenarios && selectedExpert.sampleScenarios.length > 0 && (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C99A2E] flex items-center gap-1">
                              <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center">
                                <Sparkles size={8} />
                              </span>
                              Sample Practice Scenarios
                            </span>
                            <span className="text-[10px] font-normal text-[#7B8DAA]">1-on-1 Simulation</span>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            {selectedExpert.sampleScenarios.map((sc, idx) => (
                              <div
                                key={sc.title}
                                className="p-2.5 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3] flex items-center justify-between gap-2.5 shadow-2xs hover:border-[#C99A2E]/40 transition-colors"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="w-4 h-4 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[9px] font-medium shrink-0">
                                    {idx + 1}
                                  </span>
                                  <span className="text-[12px] font-medium text-[#0B1D3A] truncate">
                                    {sc.title}
                                  </span>
                                </div>
                                <span className="text-[10px] font-medium text-[#0891B2] bg-[#E8F8FC] px-1.5 py-0.5 rounded-[4px] shrink-0 flex items-center gap-1">
                                  <span className="w-3 h-3 rounded-[2px] bg-[#0891B2] text-white flex items-center justify-center">
                                    <Clock size={7} />
                                  </span>
                                  {sc.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedExpert.relevance && selectedExpert.relevance.length > 0 && (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA]">
                            Why Practice With {selectedExpert.name.split(" ")[0]}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {selectedExpert.relevance.map((rel) => (
                              <div key={rel} className="flex items-start gap-1.5 text-[11.5px] font-normal text-[#334155] bg-[#F8FAFD] p-2 rounded-[8px] border border-[#E6EBF3]">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 mt-0.5">
                                  <Check size={8} strokeWidth={3} />
                                </span>
                                <span>{rel}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-3 sm:p-3.5 bg-white border-t border-[#F0F4FA] flex items-center justify-between gap-3 shadow-[0_-6px_16px_rgba(0,0,0,0.02)] shrink-0 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-medium text-[#7B8DAA] uppercase tracking-wider">
                          Fee
                        </span>
                        <span className="text-[18px] font-medium text-[#0B1D3A] leading-none">
                          {selectedExpert.price}
                        </span>
                      </div>

                      <PrimaryButton
                        variant="gold"
                        onClick={() => handleBook(selectedExpert)}
                        className="!h-9.5 !py-0 !px-4 text-[12px] !rounded-[10px] font-medium cursor-pointer shadow-xs transition-all"
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
