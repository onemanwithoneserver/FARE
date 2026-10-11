import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Target,
  Calendar,
  Building2,
  Sparkles,
  Clock,
  Globe2,
  ChevronRight,
  X,
  Check,
  Star,
  SearchX,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import {
  ACCENTS,
  EASE,
  FOCUS_RING,
  PrimaryButton,
  HoverGlow,
  CARD_BASE,
  CARD_HOVER,
  AccentHairline,
  Chip,
  IconBadge,
  accentAt,
  accentGradient,
  VerifiedBadge,
} from "../../ui";

interface Props {
  searchQuery?: string;
  sortBy?: string;
  filters?: ReadonlySet<string>;
  onClearFilters?: () => void;
  onBookExpert?: (expert: Expert) => void;
}

const NO_FILTERS: ReadonlySet<string> = new Set();

export default function Desktop({
  searchQuery = "",
  sortBy = "Most Relevant",
  filters = NO_FILTERS,
  onClearFilters,
  onBookExpert,
}: Props) {
  const s = data;
  const [selectedExpertName, setSelectedExpertName] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  const displayedExperts = useMemo(() => {
    return getSortedAndFilteredExperts(s.experts, searchQuery, sortBy, filters);
  }, [s.experts, searchQuery, sortBy, filters]);

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

  useEffect(() => {
    if (!selectedExpert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedExpertName(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="w-full py-16 px-6 bg-white rounded-[16px] border border-dashed border-[#CBD5E1] text-center flex flex-col items-center justify-center luxury-shadow-sm"
          >
            <IconBadge icon={SearchX} accent={ACCENTS[1]} size="md" interactive={false} />
            <h3 className="text-[20px] font-bold text-[#0B1D3A] mt-5 mb-2 tracking-tight">No experts found</h3>
            <p className="text-[14px] text-[#5A6B82] max-w-md font-medium leading-relaxed">
              Nothing matches your current search and filters. Try a different keyword or loosen a filter.
            </p>
            {filters.size > 0 && onClearFilters && (
              <button
                type="button"
                onClick={onClearFilters}
                className={`mt-6 h-11 px-5 rounded-[12px] bg-[#0B1D3A] text-white text-[13.5px] font-semibold hover:bg-[#122A50] transition-colors cursor-pointer ${FOCUS_RING}`}
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <motion.div
              layout
              transition={{ duration: 0.35, ease: EASE }}
              className={`w-full ${isSplit ? "lg:col-span-5" : "lg:col-span-12"}`}
            >
              <ul
                className={`grid gap-5 ${isSplit ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
                aria-label="Mock experts"
              >
                {displayedExperts.map((expert, i) => {
                  const a = accentAt(i + 2);
                  const isSelected = selectedExpertName === expert.name;
                  const years = expert.experience.split(" ")[0];

                  return (
                    <motion.li
                      layout
                      key={expert.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.4, ease: EASE, delay: Math.min(i * 0.05, 0.25) }}
                      className="list-none flex"
                    >
                      <article
                        className={`${CARD_BASE} ${CARD_HOVER} w-full overflow-hidden flex flex-col ${
                          isSelected ? "!border-[#C99A2E] ring-2 ring-[#C99A2E]/25 !bg-[#FFFDF8]" : ""
                        }`}
                      >
                        <AccentHairline accent={a} />
                        <HoverGlow accent={a} />

                        <div className="relative z-10 p-5 pb-4 flex flex-col gap-4">
                          <div className="flex items-start gap-4">
                            <div className="relative shrink-0">
                              <div
                                className="p-[2.5px] rounded-full transition-transform duration-500 group-hover:scale-105"
                                style={{
                                  background: "linear-gradient(135deg,#C99A2E,#F4D068 50%,#0B1D3A)",
                                  boxShadow: "0 10px 22px -10px rgba(201,154,46,0.6)",
                                }}
                              >
                                <div className="w-[64px] h-[64px] rounded-full overflow-hidden bg-[#F8F9FC] border-2 border-white">
                                  <img
                                    src={expert.image}
                                    alt={`Portrait of ${expert.name}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              {expert.verified && (
                                <VerifiedBadge
                                  size={20}
                                  className="absolute -bottom-0.5 -right-0.5 ring-2 ring-white rounded-full shadow-xs"
                                />
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="text-[19px] font-bold text-[#0B1D3A] tracking-tight leading-tight truncate group-hover:text-[#8A5A00] transition-colors">
                                  {expert.name}
                                </h3>
                                <span
                                  className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-bold"
                                  style={{ background: ACCENTS[1].soft, color: ACCENTS[1].ink, boxShadow: "inset 0 0 0 1px rgba(201,154,46,0.25)" }}
                                >
                                  <Star size={11} strokeWidth={2.6} className="fill-current" aria-hidden="true" />
                                  {years} yrs
                                </span>
                              </div>
                              <p className="text-[13.5px] font-semibold text-[#3B4D66] leading-snug mt-1 line-clamp-2">
                                {expert.role}
                              </p>
                            </div>
                          </div>

                          {expert.reExperience && (
                            <div
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-[12px]"
                              style={{ background: a.soft }}
                            >
                              <span
                                aria-hidden="true"
                                className="w-7 h-7 rounded-[8px] flex items-center justify-center text-white shrink-0"
                                style={{ background: accentGradient(a), boxShadow: `0 6px 12px -6px ${a.glow}` }}
                              >
                                <Building2 size={14} strokeWidth={2.3} />
                              </span>
                              <span className="text-[12.5px] font-semibold leading-snug line-clamp-2" style={{ color: a.ink }}>
                                {expert.reExperience}
                              </span>
                            </div>
                          )}

                          <div className="flex flex-wrap items-center gap-1.5">
                            {expert.specialisedIn.slice(0, 3).map((spec, si) => (
                              <Chip key={spec} accent={accentAt(i + si + 3)}>
                                {spec}
                              </Chip>
                            ))}
                            {expert.specialisedIn.length > 3 && (
                              <span className="text-[12px] font-semibold text-[#7B8DAA] px-1">
                                +{expert.specialisedIn.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 border-y border-[#F0F4FA] bg-[#FAFBFE]">
                          <div className="flex items-center gap-2.5 px-5 py-3 border-r border-[#F0F4FA] min-w-0">
                            <span aria-hidden="true" className="w-7 h-7 rounded-[8px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
                              <Globe2 size={14} strokeWidth={2.3} />
                            </span>
                            <span className="text-[12.5px] font-semibold text-[#3B4D66] truncate">
                              {expert.languages.join(" · ")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5 px-5 py-3 min-w-0">
                            <span aria-hidden="true" className="w-7 h-7 rounded-[8px] text-white flex items-center justify-center shrink-0" style={{ background: accentGradient(ACCENTS[3]) }}>
                              <Target size={14} strokeWidth={2.3} />
                            </span>
                            <span className="text-[12.5px] font-semibold text-[#3B4D66] truncate">
                              {expert.sessionsCompleted} sessions
                            </span>
                          </div>
                        </div>

                        <div className="relative z-10 p-5 pt-4 flex flex-col gap-4 mt-auto">
                          <div className="flex items-end justify-between gap-3">
                            <div className="flex flex-col">
                              <span className="text-[10.5px] font-bold text-[#7B8DAA] uppercase tracking-[0.14em] mb-1">
                                Session fee
                              </span>
                              <span className="text-[22px] font-extrabold text-[#0B1D3A] leading-none tracking-tight">
                                {expert.price}
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[10.5px] font-bold text-[#7B8DAA] uppercase tracking-[0.14em] mb-1">
                                Next available
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E9FBF3] text-[#047857] text-[12.5px] font-bold">
                                <Calendar size={12} strokeWidth={2.6} aria-hidden="true" />
                                {expert.nextAvailable.split("·")[0].trim()}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <button
                              type="button"
                              onClick={() => handleToggleDetails(expert.name)}
                              aria-pressed={isSelected}
                              aria-label={`${isSelected ? "Hide" : "View"} details for ${expert.name}`}
                              className={`group/btn flex-1 h-11 px-4 rounded-[12px] border text-[13.5px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${FOCUS_RING} ${
                                isSelected
                                  ? "bg-[#0B1D3A] text-[#E4C46A] border-[#0B1D3A]"
                                  : "bg-white hover:bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#C99A2E] text-[#0B1D3A]"
                              }`}
                            >
                              {isSelected ? "Viewing" : "View details"}
                              {isSelected ? (
                                <Check size={14} strokeWidth={3} aria-hidden="true" />
                              ) : (
                                <ChevronRight size={15} strokeWidth={2.6} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-0.5" />
                              )}
                            </button>

                            <PrimaryButton
                              variant="gold"
                              onClick={() => handleBook(expert)}
                              className="!h-11 !py-0 !px-4 !text-[13.5px] !rounded-[12px] flex-1 !w-auto"
                            >
                              Book session
                            </PrimaryButton>
                          </div>
                        </div>
                      </article>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedExpert && (
                <motion.aside
                  key={selectedExpert.name}
                  aria-label={`${selectedExpert.name} details`}
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="w-full lg:col-span-7 lg:sticky lg:top-24 z-20"
                >
                  <div
                    ref={dialogRef}
                    className="w-full bg-white rounded-[16px] border border-[#E6EBF3] shadow-[0_28px_56px_-20px_rgba(11,29,58,0.3)] overflow-hidden flex flex-col max-h-[calc(100vh-130px)] h-[calc(100vh-140px)]"
                  >
                    <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

                    <div
                      className="p-5 text-white relative shrink-0 overflow-hidden"
                      style={{ background: "linear-gradient(135deg,#0B1D3A 0%,#122A50 55%,#1B3A6B 100%)" }}
                    >
                      <span aria-hidden="true" className="absolute -top-12 -right-10 w-44 h-44 rounded-full blur-[48px]" style={{ background: "rgba(201,154,46,0.28)" }} />
                      <div className="relative flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="relative shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 border-2 border-[#C99A2E]">
                              <img src={selectedExpert.image} alt={`Portrait of ${selectedExpert.name}`} className="w-full h-full object-cover" />
                            </div>
                            {selectedExpert.verified && (
                              <VerifiedBadge
                                size={22}
                                className="absolute -bottom-0.5 -right-0.5 ring-2 ring-[#0B1D3A] rounded-full shadow-md"
                              />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-[21px] font-bold text-white tracking-tight truncate">{selectedExpert.name}</h3>
                            <p className="text-[13.5px] font-semibold text-[#E4C46A] leading-snug line-clamp-1 mt-0.5">{selectedExpert.role}</p>
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white">
                                {selectedExpert.experience}
                              </span>
                              {selectedExpert.reExperience && (
                                <span className="text-[12px] text-white/80 truncate flex items-center gap-1.5 font-medium">
                                  <Building2 size={12} aria-hidden="true" className="text-[#E4C46A]" />
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
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4C46A]"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-2 text-[12.5px] font-semibold">
                        {[
                          { icon: Globe2, label: selectedExpert.languages.join(", "), bg: "#C99A2E" },
                          { icon: Target, label: `${selectedExpert.sessionsCompleted} sessions`, bg: "#0891B2" },
                          { icon: ShieldCheck, label: "Verified coach", bg: "#2563EB" },
                        ].map(({ icon: Icon, label, bg }) => (
                          <div key={label} className="flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-[12px] p-2 min-w-0">
                            <span aria-hidden="true" className="w-7 h-7 rounded-[8px] text-white flex items-center justify-center shrink-0" style={{ background: bg }}>
                              <Icon size={14} />
                            </span>
                            <span className="truncate">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      ref={scrollBodyRef}
                      className="p-5 flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto overscroll-contain"
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}
                    >
                      {selectedExpert.about && (
                        <section className="flex flex-col gap-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">About the mentor</h4>
                          <p className="p-4 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] border-l-4 border-l-[#C99A2E] text-[14px] text-[#334155] leading-relaxed font-medium italic">
                            "{selectedExpert.about}"
                          </p>
                        </section>
                      )}

                      <section className="flex flex-col gap-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">Core domains &amp; specialization</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedExpert.specialisedIn.map((spec, i) => (
                            <Chip key={spec} accent={accentAt(i + 2)}>{spec}</Chip>
                          ))}
                        </div>
                      </section>

                      {selectedExpert.sampleScenarios && selectedExpert.sampleScenarios.length > 0 && (
                        <section className="flex flex-col gap-2.5">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A5A00] flex items-center gap-2">
                              <Sparkles size={13} aria-hidden="true" />
                              Sample practice scenarios
                            </h4>
                            <span className="text-[12px] font-semibold text-[#7B8DAA]">1-on-1 simulation</span>
                          </div>
                          <ul className="flex flex-col gap-2">
                            {selectedExpert.sampleScenarios.map((sc, idx) => (
                              <li
                                key={sc.title}
                                className="p-3 rounded-[12px] bg-white border border-[#E6EBF3] flex items-center justify-between gap-3 hover:border-[#C99A2E]/50 hover:shadow-[0_10px_24px_-14px_rgba(201,154,46,0.5)] transition-all"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
                                    {idx + 1}
                                  </span>
                                  <div className="min-w-0">
                                    <span className="block text-[13.5px] font-semibold text-[#0B1D3A] truncate">{sc.title}</span>
                                    <span className="block text-[12px] font-medium text-[#7B8DAA]">{sc.category}</span>
                                  </div>
                                </div>
                                <span className="text-[12px] font-bold text-[#0E7490] bg-[#E8F8FC] px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1.5">
                                  <Clock size={12} aria-hidden="true" />
                                  {sc.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {selectedExpert.relevance && selectedExpert.relevance.length > 0 && (
                        <section className="flex flex-col gap-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">
                            Why practice with {selectedExpert.name.split(" ")[0]}
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedExpert.relevance.map((rel) => (
                              <li key={rel} className="flex items-start gap-2.5 text-[13px] font-medium text-[#334155] bg-[#F8FAFD] p-3 rounded-[12px] border border-[#E6EBF3]">
                                <span aria-hidden="true" className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 mt-px">
                                  <Check size={11} strokeWidth={3.2} />
                                </span>
                                <span>{rel}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </div>

                    <div className="p-4 bg-white border-t border-[#F0F4FA] flex items-center justify-between gap-3 shadow-[0_-8px_20px_rgba(11,29,58,0.04)] shrink-0 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold text-[#7B8DAA] uppercase tracking-[0.14em] mb-1">Fee</span>
                        <span className="text-[22px] font-extrabold text-[#0B1D3A] leading-none">{selectedExpert.price}</span>
                      </div>
                      <PrimaryButton
                        variant="gold"
                        onClick={() => handleBook(selectedExpert)}
                        className="!h-11 !py-0 !px-6 !text-[14px] !rounded-[12px] !w-auto"
                      >
                        Book session
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
