import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
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
  Home,
  MapPin,
  Briefcase,
  Crown,
} from "lucide-react";
import { data, getSortedAndFilteredExperts, type Expert } from "./data";
import {
  ACCENTS,
  EASE,
  FOCUS_RING,
  PrimaryButton,
  Chip,
  IconBadge,
  accentAt,
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

const getDomainIcon = (expert: Expert) => {
  const text = `${expert.reExperience || ""} ${expert.role || ""}`.toLowerCase();
  if (text.includes("luxury")) return Crown;
  if (text.includes("plot") || text.includes("land") || text.includes("farmland")) return MapPin;
  if (text.includes("commercial") || text.includes("retail") || text.includes("tech park")) return Briefcase;
  if (text.includes("residential") || text.includes("apartment") || text.includes("home") || text.includes("villa")) return Home;
  return Building2;
};

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
            className="w-full py-14 px-6 bg-white rounded-[16px] border border-dashed border-[#CBD5E1] text-center flex flex-col items-center justify-center luxury-shadow-sm max-w-[640px] mx-auto"
          >
            <IconBadge icon={SearchX} accent={ACCENTS[1]} size="md" interactive={false} />
            <h3 className="text-[19px] font-bold text-[#0B1D3A] mt-4 mb-2 tracking-tight">No experts found</h3>
            <p className="text-[13.5px] text-[#5A6B82] max-w-sm font-medium leading-relaxed">
              Nothing matches your current search. Try a different keyword or name.
            </p>
            {filters.size > 0 && onClearFilters && (
              <button
                type="button"
                onClick={onClearFilters}
                className={`mt-5 h-10 px-5 rounded-[10px] bg-[#0B1D3A] text-white text-[13px] font-semibold hover:bg-[#122A50] transition-colors cursor-pointer ${FOCUS_RING}`}
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        ) : (
          <div className={`w-full ${isSplit ? "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" : ""}`}>
            
            <motion.div
              layout
              transition={{ duration: 0.35, ease: EASE }}
              className={`w-full ${isSplit ? "lg:col-span-5" : ""}`}
            >
              <ul
                className={`grid gap-5 lg:gap-6 ${isSplit ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
                aria-label="Verified experts list"
              >
                {displayedExperts.map((expert, i) => {
                  const isSelected = selectedExpertName === expert.name;
                  const years = expert.experience.split(" ")[0];
                  const shortDomain = expert.reExperience
                    ? expert.reExperience.split("—")[0].trim()
                    : "";
                  const subDomain = expert.reExperience && expert.reExperience.includes("—")
                    ? expert.reExperience.split("—")[1].trim()
                    : "";
                  const DomainIcon = getDomainIcon(expert);
                  const isAvailableToday = expert.nextAvailable.toLowerCase().includes("today");

                  return (
                    <motion.li
                      layout
                      key={expert.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.35, ease: EASE, delay: Math.min(i * 0.04, 0.2) }}
                      className="list-none flex"
                    >
                      <article
                        className={`w-full bg-white rounded-[22px] border transition-all duration-300 flex flex-col overflow-hidden group/card ${
                          isSelected
                            ? "border-[#C99A2E] ring-2 ring-[#C99A2E]/30 bg-[#FFFDF9] shadow-[0_20px_45px_-12px_rgba(201,154,46,0.22)]"
                            : "border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(11,29,58,0.06)] hover:shadow-[0_22px_45px_-12px_rgba(11,29,58,0.13)] hover:border-[#CBD5E1] hover:-translate-y-1"
                        }`}
                      >
                        <div className="p-5 pb-4 flex flex-col gap-3.5">
                          <div className="flex items-start gap-4">
                            <div className="relative shrink-0">
                              <div
                                className="p-[2.5px] rounded-[22px] transition-transform duration-300 group-hover/card:scale-102"
                                style={{
                                  background: "linear-gradient(135deg, #C99A2E, #F4D068 50%, #0B1D3A)",
                                }}
                              >
                                <div className="w-[88px] h-[88px] rounded-[19px] overflow-hidden bg-[#F8F9FC] border-2 border-white shadow-xs">
                                  <img
                                    src={expert.image}
                                    alt={`Portrait of ${expert.name}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              {expert.verified && (
                                <VerifiedBadge
                                  size={22}
                                  className="absolute -bottom-1 -right-1 ring-2 ring-white rounded-full shadow-sm"
                                />
                              )}
                            </div>

                            <div className="flex-1 min-w-0 flex flex-col gap-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0] shrink-0">
                                  <Star size={11} className="fill-[#C99A2E] text-[#C99A2E]" aria-hidden="true" />
                                  {years} Yrs
                                </span>

                                <span
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border shrink-0 ${
                                    isAvailableToday
                                      ? "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]"
                                      : "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]"
                                  }`}
                                >
                                  <Calendar size={11} strokeWidth={2.4} aria-hidden="true" />
                                  {expert.nextAvailable.split("·")[0].trim()}
                                </span>
                              </div>

                              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0B1D3A] tracking-tight leading-snug truncate mt-0.5">
                                {expert.name}
                              </h3>

                              <p className="text-[12.5px] font-medium text-[#64748B] leading-snug line-clamp-2">
                                {expert.role}
                              </p>
                            </div>
                          </div>

                          {shortDomain && (
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#F8FAFD] border border-[#E9EFF8] text-[12px] font-semibold text-[#0B1D3A]">
                              <span className="w-5 h-5 rounded-[6px] bg-[#C99A2E]/15 text-[#C99A2E] flex items-center justify-center shrink-0">
                                <DomainIcon size={12} strokeWidth={2.4} />
                              </span>
                              <span className="font-bold text-[#0B1D3A]">{shortDomain}</span>
                              {subDomain && (
                                <span className="text-[#64748B] font-medium truncate text-[11.5px]">
                                  · {subDomain}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="flex flex-wrap items-center gap-1.5">
                            {expert.specialisedIn.slice(0, 3).map((spec) => (
                              <span
                                key={spec}
                                className="px-2.5 py-1 rounded-[7px] bg-[#F1F5F9] border border-[#E2E8F0] text-[11px] font-semibold text-[#334155]"
                              >
                                {spec}
                              </span>
                            ))}
                            {expert.specialisedIn.length > 3 && (
                              <span className="text-[10.5px] font-semibold text-[#7B8DAA] px-2 py-1 rounded-[7px] bg-[#F8FAFC] border border-[#E2E8F0]">
                                +{expert.specialisedIn.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-[11px] font-medium text-[#64748B] pt-1.5 border-t border-[#F1F5F9]">
                            <span className="inline-flex items-center gap-1.5">
                              <Sparkles size={12} className="text-[#C99A2E] shrink-0" />
                              <strong className="text-[#0B1D3A] font-bold">{expert.sessionsCompleted}</strong> sessions completed
                            </span>
                            <span className="inline-flex items-center gap-1 text-[#64748B]">
                              <Globe2 size={11} className="text-[#7B8DAA] shrink-0" />
                              <span className="truncate max-w-[130px]">{expert.languages.join(", ")}</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-5 pt-3.5 mt-auto border-t border-[#F1F5F9] flex flex-col gap-3 bg-[#FAFBFE]">
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#7B8DAA]">
                                Starting from
                              </span>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="text-[19px] sm:text-[20px] font-black text-[#0B1D3A] leading-none">
                                  {expert.price}
                                </span>
                                <span className="text-[11.5px] font-medium text-[#64748B]">/ 45 min</span>
                              </div>
                            </div>

                            {expert.nextAvailable.includes("·") && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0B1D3A] bg-white px-2.5 py-1 rounded-[8px] border border-[#E2E8F0] shadow-2xs">
                                <Clock size={11} className="text-[#C99A2E]" />
                                <span>{expert.nextAvailable.split("·")[1]?.trim()}</span>
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            <button
                              type="button"
                              onClick={() => handleToggleDetails(expert.name)}
                              aria-pressed={isSelected}
                              aria-label={`${isSelected ? "Hide" : "View"} details for ${expert.name}`}
                              title={`View full profile and scenarios for ${expert.name}`}
                              className={`h-10 px-3.5 rounded-[11px] border text-[12.5px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${FOCUS_RING} ${
                                isSelected
                                  ? "bg-[#0B1D3A] text-[#E4C46A] border-[#0B1D3A] shadow-xs"
                                  : "bg-white hover:bg-[#F8FAFD] border-[#CBD5E1] hover:border-[#94A3B8] text-[#0B1D3A]"
                              }`}
                            >
                              <span>{isSelected ? "Viewing Profile" : "View Profile"}</span>
                              <ChevronRight size={13} strokeWidth={2.4} aria-hidden="true" />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleBook(expert)}
                              title={`Book a live session with ${expert.name}`}
                              className={`h-10 px-3.5 rounded-[11px] bg-gradient-to-r from-[#C99A2E] via-[#D8AB3A] to-[#B8871F] hover:from-[#B8871F] hover:to-[#C99A2E] text-white text-[12.5px] font-bold shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer hover:shadow-[0_4px_14px_rgba(201,154,46,0.35)] active:scale-[0.98] ${FOCUS_RING}`}
                            >
                              <span>Book Session</span>
                            </button>
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
                  aria-label={`${selectedExpert.name} profile details`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="w-full lg:col-span-7 lg:sticky lg:top-20 z-20"
                >
                  <div
                    ref={dialogRef}
                    className="w-full bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_24px_50px_-16px_rgba(11,29,58,0.22)] overflow-hidden flex flex-col max-h-[calc(100vh-110px)]"
                  >
                    <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

                    <div
                      className="p-5 text-white relative shrink-0 overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #07152B 0%, #0F254B 50%, #17376D 100%)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-12 -right-8 w-44 h-44 rounded-full blur-[48px]"
                        style={{ background: "rgba(201,154,46,0.28)" }}
                      />

                      <div className="relative flex items-start justify-between gap-3 mb-3.5">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative shrink-0">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 border-2 border-[#C99A2E]">
                              <img
                                src={selectedExpert.image}
                                alt={`Portrait of ${selectedExpert.name}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {selectedExpert.verified && (
                              <VerifiedBadge
                                size={19}
                                className="absolute -bottom-0.5 -right-0.5 ring-2 ring-[#0B1D3A] rounded-full shadow-xs"
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-[19px] font-black text-white tracking-tight truncate">
                                {selectedExpert.name}
                              </h3>
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-white shrink-0">
                                ⭐ {selectedExpert.experience.split(" ")[0]} Yrs
                              </span>
                            </div>
                            <p className="text-[12.5px] font-semibold text-[#E4C46A] leading-snug line-clamp-1 mt-0.5">
                              {selectedExpert.role}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedExpertName(null)}
                          aria-label="Close profile panel"
                          title="Close profile panel"
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4C46A]"
                        >
                          <X size={15} />
                        </button>
                      </div>

                      <div className="relative grid grid-cols-2 gap-2 text-[11.5px] font-semibold">
                        <div className="flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-[10px] p-2 min-w-0">
                          <Globe2 size={13} className="text-[#E4C46A] shrink-0" />
                          <span className="truncate">{selectedExpert.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-[10px] p-2 min-w-0">
                          <ShieldCheck size={13} className="text-[#34D399] shrink-0" />
                          <span className="truncate">Verified Executive Coach</span>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={scrollBodyRef}
                      className="p-5 flex flex-col gap-4.5 flex-1 min-h-0 overflow-y-auto overscroll-contain bg-[#FAFAFA]"
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}
                    >
                      {selectedExpert.about && (
                        <section className="flex flex-col gap-1.5">
                          <h4 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">
                            About the Mentor
                          </h4>
                          <p className="p-3.5 rounded-[12px] bg-white border border-[#E2E8F0] border-l-4 border-l-[#C99A2E] text-[13px] text-[#334155] leading-relaxed font-medium italic">
                            "{selectedExpert.about}"
                          </p>
                        </section>
                      )}

                      <section className="flex flex-col gap-1.5">
                        <h4 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">
                          Specialization Domains
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedExpert.specialisedIn.map((spec, i) => (
                            <Chip key={spec} accent={accentAt(i + 2)} className="!text-[12px] !py-1">
                              {spec}
                            </Chip>
                          ))}
                        </div>
                      </section>

                      {selectedExpert.sampleScenarios && selectedExpert.sampleScenarios.length > 0 && (
                        <section className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#8A5A00] flex items-center gap-1.5">
                              <Sparkles size={12} aria-hidden="true" />
                              Sample Practice Scenarios
                            </h4>
                            <span className="text-[11px] font-semibold text-[#7B8DAA]">1-on-1 Simulation</span>
                          </div>
                          <ul className="flex flex-col gap-2">
                            {selectedExpert.sampleScenarios.map((sc, idx) => (
                              <li
                                key={sc.title}
                                className="p-3 rounded-[12px] bg-white border border-[#E2E8F0] flex items-center justify-between gap-3 hover:border-[#C99A2E]/50 transition-all"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span
                                    aria-hidden="true"
                                    className="w-6 h-6 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[11px] font-bold shrink-0"
                                  >
                                    {idx + 1}
                                  </span>
                                  <div className="min-w-0">
                                    <span className="block text-[13px] font-bold text-[#0B1D3A] truncate">
                                      {sc.title}
                                    </span>
                                    <span className="block text-[11.5px] font-medium text-[#7B8DAA]">
                                      {sc.category}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-[11px] font-bold text-[#0E7490] bg-[#E8F8FC] px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1">
                                  <Clock size={11} aria-hidden="true" />
                                  {sc.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {selectedExpert.relevance && selectedExpert.relevance.length > 0 && (
                        <section className="flex flex-col gap-1.5">
                          <h4 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">
                            Why Practice with {selectedExpert.name.split(" ")[0]}
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedExpert.relevance.map((rel) => (
                              <li
                                key={rel}
                                className="flex items-start gap-2 text-[12px] font-medium text-[#334155] bg-white p-2.5 rounded-[10px] border border-[#E2E8F0]"
                              >
                                <span
                                  aria-hidden="true"
                                  className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 mt-0.5"
                                >
                                  <Check size={9} strokeWidth={3.2} />
                                </span>
                                <span>{rel}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </div>

                    <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between gap-3 shrink-0 shadow-xs">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.14em]">
                          Session Fee
                        </span>
                        <span className="text-[20px] font-black text-[#0B1D3A] leading-tight">
                          {selectedExpert.price}{" "}
                          <span className="text-[12px] font-normal text-[#64748B]">/ 45 min</span>
                        </span>
                      </div>
                      <PrimaryButton
                        variant="gold"
                        onClick={() => handleBook(selectedExpert)}
                        className="!h-10 !py-0 !px-5 !text-[13px] !rounded-[10px] !w-auto"
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
