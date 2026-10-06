import { useState, useEffect, useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import Header from "../Home/00_header";
import Footer from "../Home/05_section";
import SidebarFilters, { emptyFilters } from "./SidebarFilters";
import type { FilterKey, FilterState } from "./SidebarFilters";
import TrainerCard from "./TrainerCard";
import TrainerProfile from "./TrainerProfile";
import { trainersData } from "./listing_data";
import type { Trainer } from "./listing_data";
import {
  Search,
  Sparkles,
  Users,
  Award,
  Layers,
  MonitorPlay,
  SlidersHorizontal,
  X,
  SearchX,
  RotateCcw,
} from "lucide-react";
import trainersHero from "../assets/re_trainers_hero.jpg";
import { CustomSelect } from "./section-17-corporate-request-form/FormControls";
import { useLanguage } from "../context/LanguageContext";
import { translateDirectoryText } from "./translations";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const SORT_OPTIONS = ["Relevance", "Experience (High to Low)", "Training Years (High to Low)", "A-Z"];
const DEMO_LISTING_CAP = 36;

interface TrainerDirectoryProps {
  isMobile: boolean;
}

const matchesText = (trainer: Trainer, q: string, language: "en" | "te") => {
  const values = [
    trainer.name,
    trainer.title,
    trainer.location,
    ...trainer.location.split(",").map((part) => part.trim()),
    trainer.positioning,
    ...trainer.expertise,
    ...trainer.segments,
    ...trainer.formats,
  ];
  const haystack = [...values, ...values.map((value) => translateDirectoryText(value, language))]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
};

export default function TrainerDirectory({ isMobile }: TrainerDirectoryProps) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);
  const profileContainerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");
  const [filters, setFilters] = useState<FilterState>(emptyFilters);

  const [visibleCount, setVisibleCount] = useState(12);
  const { ref, inView } = useInView({ threshold: 0 });

  const toggleFilter = (key: FilterKey, option: string) =>
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(option) ? prev[key].filter((o) => o !== option) : [...prev[key], option],
    }));

  const clearAll = () => {
    setFilters(emptyFilters);
    setActiveTag(null);
    setSearchQuery("");
  };

  const activeChips = useMemo(
    () =>
      (Object.keys(filters) as FilterKey[]).flatMap((key) => filters[key].map((value) => ({ key, value }))),
    [filters]
  );

  const isFiltering = searchQuery.trim() !== "" || activeTag !== null || activeChips.length > 0;

  const filteredTrainers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = trainersData.filter((t) => {
      if (q && !matchesText(t, q, language)) return false;
      if (activeTag && !matchesText(t, activeTag.toLowerCase(), language)) return false;
      if (filters.segments.length && !filters.segments.some((s) => t.segments.includes(s))) return false;
      if (filters.expertise.length && !filters.expertise.some((s) => t.expertise.includes(s))) return false;
      if (filters.delivery.length && !filters.delivery.some((s) => t.delivery.includes(s))) return false;
      if (filters.availability.length && !filters.availability.includes(t.availability)) return false;
      if (filters.languages.length) {
        const known = ["English", "Telugu", "Hindi"];
        const ok = filters.languages.some((l) =>
          l === "Other" ? t.languages.some((tl) => !known.includes(tl)) : t.languages.includes(l)
        );
        if (!ok) return false;
      }
      return true;
    });

    const sorted = [...list];
    if (sortBy === "Experience (High to Low)") sorted.sort((a, b) => b.industryExperience - a.industryExperience);
    else if (sortBy === "Training Years (High to Low)") sorted.sort((a, b) => b.trainingExperience - a.trainingExperience);
    else if (sortBy === "A-Z") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [searchQuery, activeTag, filters, sortBy, language]);

  // Demo listing: repeat sample trainers to simulate a full directory when no filters are applied.
  const totalListing = isFiltering ? filteredTrainers.length : Math.min(DEMO_LISTING_CAP, Math.max(filteredTrainers.length, DEMO_LISTING_CAP));
  const hasMore = visibleCount < totalListing;

  useEffect(() => {
    if (inView && hasMore) setVisibleCount((prev) => prev + 6);
  }, [inView, hasMore]);

  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, activeTag, filters, sortBy]);

  useEffect(() => {
    if (selectedTrainerId) {
      profileContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedTrainerId]);

  const displayedTrainers: (Trainer & { uniqueId: string })[] = [];
  if (filteredTrainers.length > 0) {
    const count = Math.min(visibleCount, totalListing);
    for (let i = 0; i < count; i++) {
      const originalTrainer = filteredTrainers[i % filteredTrainers.length];
      displayedTrainers.push({ ...originalTrainer, uniqueId: `${originalTrainer.id}-${i}` });
    }
  }

  const quickTags = ["Sales", "Digital", "Communication", "Leadership", "Residential", "Plotted", "Commercial", "Workshops", "Mocks"];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { icon: <Users size={18} strokeWidth={2.2} />, value: "40+", label: "Verified Trainers", color: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
    { icon: <Award size={18} strokeWidth={2.2} />, value: "12+", label: "Expertise Areas", color: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
    { icon: <Layers size={18} strokeWidth={2.2} />, value: "4", label: "RE Segments", color: "#10B981", bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
    { icon: <MonitorPlay size={18} strokeWidth={2.2} />, value: "9+", label: "Training Formats", color: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
  ];

  if (selectedTrainerId) {
    return (
      <div ref={profileContainerRef} className="w-full flex flex-col min-h-screen bg-[#F8FAFD] font-['Outfit']">
        <Header isMobile={isMobile} />
        <TrainerProfile isMobile={isMobile} onBack={() => setSelectedTrainerId(null)} trainerId={selectedTrainerId} />
        <Footer isMobile={isMobile} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8FAFD] flex flex-col font-['Outfit']">
      <Header isMobile={isMobile} />

      <section
        className="w-full relative overflow-hidden flex items-center justify-between font-['Outfit'] fare-noise-overlay"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)",
        }}
      >
        <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] bg-gradient-radial from-[#DDEAFF]/50 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none z-0" />
        <svg
          className="absolute top-8 right-[8%] w-[280px] h-[280px] opacity-[0.04] pointer-events-none z-0"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle cx="150" cy="150" r="140" stroke={GOLD} strokeWidth="0.8" fill="none" />
        </svg>

        <div
          className={`w-full flex relative z-10 max-w-[1400px] mx-auto ${
            isMobile
              ? "flex-col justify-start pt-8 pb-8 px-5"
              : "flex-row justify-between overflow-hidden lg:overflow-visible pt-10 pb-8 lg:pt-16 lg:pb-16 px-6 sm:px-10 lg:pl-14 xl:pl-20 min-h-[480px] lg:min-h-0"
          }`}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className={`flex flex-col items-start text-left z-10 relative ${
              isMobile ? "w-full" : "w-full lg:w-[48%] xl:w-[46%]"
            }`}
          >
            <motion.div variants={itemVariants} className={isMobile ? "mb-3" : "mb-3 lg:mb-4"}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 backdrop-blur-md">
                <Sparkles size={13} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                <span className="font-bold text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-[#C99A2E]">
                  {t("Trainer Directory")}
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`font-black leading-[1.05] tracking-tight ${
                isMobile
                  ? "text-[1.45rem] mb-2 leading-[1.12] w-full max-w-[320px]"
                  : "text-[2.2rem] sm:text-[clamp(1.5rem,3.4vw,2.8rem)] mb-2 lg:mb-4 w-[280px] sm:w-[80%] lg:w-full max-w-full"
              }`}
              style={{ color: NAVY }}
            >
              {language === "te" ? (
                <>
                  <span className="block whitespace-nowrap">మీ రియల్ ఎస్టేట్ బృందం కోసం</span>
                  <span className="block whitespace-nowrap text-[#C99A2E] underline decoration-[#C99A2E] decoration-2 underline-offset-4">సరైన ట్రైనర్‌ను కనుగొనండి</span>
                </>
              ) : (
                <>
                  <span className="block whitespace-nowrap">
                    Find the <span className="text-[#C99A2E] underline decoration-[#C99A2E] decoration-2 underline-offset-4">Right Trainer</span>
                  </span>
                  <span className="block whitespace-nowrap">for Your Real Estate Team</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`font-medium leading-[1.5] text-[#5A6B82] relative z-10 ${
                isMobile
                  ? "text-[14px] w-full max-w-[320px] mb-5"
                  : "text-[14px] sm:text-[16px] xl:text-[17px] w-[300px] sm:w-[85%] lg:max-w-[520px] mb-5 lg:mb-7"
              }`}
            >
              {t("Discover trainers by expertise, real estate segment, training format, delivery mode and experience.")}
            </motion.p>

            {isMobile && (
              <motion.div
                variants={itemVariants}
                className="w-full rounded-[8px] overflow-hidden luxury-shadow-float mb-6"
              >
                <img
                  src={trainersHero}
                  alt={t("Trainer Directory")}
                  className="w-full h-[200px] object-cover object-[center_38%]"
                />
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="relative w-full max-w-[520px] mb-5 lg:mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Search size={18} className="text-[#7B8DAA]" strokeWidth={2.2} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search trainers, expertise or training areas...")}
                className="w-full pl-11 pr-4 py-3.5 bg-white/90 backdrop-blur-xl border border-[#E2E8F0] rounded-[8px] text-[14px] lg:text-[15px] text-[#0B1D3A] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 focus:border-[#C99A2E] transition-all duration-300 ease-out placeholder:text-[#7B8DAA]"
                style={{
                  boxShadow: "0 2px 8px -2px rgba(11, 29, 58, 0.05), 0 4px 12px -4px rgba(11, 29, 58, 0.03)",
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 max-w-[520px] relative z-20">
              {quickTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full text-[11px] lg:text-[12px] font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 border ${
                    activeTag === tag
                      ? "bg-[#0B1D3A] text-white border-[#0B1D3A] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                      : "bg-white/90 backdrop-blur-sm border-[#0B1D3A]/[0.06] text-[#0B1D3A]/70 hover:border-[#0B1D3A]/20 hover:text-[#0B1D3A] hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                  }`}
                >
                  {activeTag === tag && (
                    <span className="inline-flex items-center gap-1">
                      {t(tag)}
                      <X size={11} strokeWidth={3} />
                    </span>
                  )}
                  {activeTag !== tag && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                      {t(tag)}
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:relative w-[65%] sm:w-[50%] lg:w-[52%] xl:w-[54%] h-[260px] sm:h-[360px] lg:h-auto flex items-end lg:items-center justify-end z-0"
              style={{ marginRight: "calc(50% - 50vw)" }}
            >
              <div className="relative w-full h-full lg:h-[480px] xl:h-[510px] rounded-tl-[160px] lg:rounded-tl-[220px] xl:rounded-tl-[260px] lg:rounded-bl-[90px] xl:rounded-bl-[100px] overflow-hidden luxury-shadow-float lg:luxury-shadow-float border-l border-t lg:border-b border-white/80">
                <motion.img
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  src={trainersHero}
                  alt={t("Trainer Directory")}
                  className="w-full h-full object-cover object-[center_38%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F8FAFD]/60 lg:hidden" />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="w-full relative z-10 fare-noise-overlay">
        <div className={`max-w-[1400px] mx-auto w-full ${isMobile ? "px-5 -mt-2" : "px-6 lg:px-12 xl:px-16 -mt-6"}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`grid ${isMobile ? "grid-cols-2 gap-2.5" : "grid-cols-4 gap-4"}`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`group flex items-center bg-white rounded-[8px] border border-[#E2E8F0] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 hover:-translate-y-1 hover:border-[#C99A2E]/50 hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 transition-all duration-300 ${
                  isMobile ? "gap-2.5 p-3" : "gap-4 p-5"
                }`}
              >
                <div
                  className={`${isMobile ? "w-9 h-9" : "w-12 h-12"} shrink-0 rounded-[8px] flex items-center justify-center text-white luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 transition-transform duration-500 group-hover:scale-110`}
                  style={{ background: stat.bg }}
                >
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <div className={`${isMobile ? "text-[18px]" : "text-[26px]"} font-black leading-none`} style={{ color: NAVY }}>
                    {stat.value}
                  </div>
                  <div className={`${isMobile ? "text-[10.5px]" : "text-[12.5px]"} font-semibold text-[#5A6B82] mt-1 truncate`}>
                    {t(stat.label)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div
        className={`flex-1 w-full max-w-[1400px] mx-auto flex ${
          isMobile ? "flex-col px-5 pt-6 pb-4 gap-4" : "flex-row items-start gap-7 px-6 lg:px-12 xl:px-16 pt-10 pb-8"
        }`}
      >
        <SidebarFilters
          isMobile={isMobile}
          isOpen={showMobileFilters}
          onClose={() => setShowMobileFilters(false)}
          selected={filters}
          onToggle={toggleFilter}
          onClear={() => setFilters(emptyFilters)}
          resultCount={filteredTrainers.length}
        />

        <div className="flex-1 min-w-0 flex flex-col">
          {/* ───── Results toolbar ───── */}
          <div className="relative z-30 flex flex-col gap-3 mb-6">
            {!isMobile && (
              <div className="flex items-center justify-end gap-3 shrink-0">
                <span className="text-[12.5px] text-[#5A6B82] font-medium whitespace-nowrap">{t("Sort by")}</span>
                <div className="w-[220px]">
                  <CustomSelect
                    options={SORT_OPTIONS.map(t)}
                    value={t(sortBy)}
                    onChange={(value: string) => {
                      const selectedOption = SORT_OPTIONS.find((option) => t(option) === value);
                      if (selectedOption) setSortBy(selectedOption);
                    }}
                    placeholder={t("Sort by")}
                  />
                </div>
              </div>
              )}
            {isMobile && (
              <div className="flex items-center gap-2.5">
                <div className="flex-1 min-w-0">
                  <CustomSelect
                    options={SORT_OPTIONS.map(t)}
                    value={t(sortBy)}
                    onChange={(value: string) => {
                      const selectedOption = SORT_OPTIONS.find((option) => t(option) === value);
                      if (selectedOption) setSortBy(selectedOption);
                    }}
                    placeholder={t("Sort by")}
                  />
                </div>
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="relative shrink-0 flex items-center justify-center gap-2 h-[42px] px-4 rounded-[8px] text-[13px] font-bold text-white luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
                >
                  <SlidersHorizontal size={15} strokeWidth={2.5} style={{ color: GOLD_MID }} />
                  {t("Filters")}
                  {activeChips.length > 0 && (
                    <span
                      className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-black"
                      style={{ background: GOLD_MID, color: NAVY }}
                    >
                      {activeChips.length}
                    </span>
                  )}
                </button>
              </div>
            )}

            <AnimatePresence initial={false}>
              {(activeChips.length > 0 || activeTag || searchQuery.trim()) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-dashed border-[#0B1D3A]/10">
                    {searchQuery.trim() && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="inline-flex items-center gap-1.5 h-7 pl-3 pr-2 rounded-full text-[12px] font-semibold bg-[#0B1D3A] text-white hover:bg-[#1A3463] transition-colors"
                      >
                        “{searchQuery.trim()}”
                        <X size={12} strokeWidth={3} className="text-[#D5AA45]" />
                      </button>
                    )}
                    {activeTag && (
                      <button
                        onClick={() => setActiveTag(null)}
                        className="inline-flex items-center gap-1.5 h-7 pl-3 pr-2 rounded-full text-[12px] font-semibold bg-[#0B1D3A] text-white hover:bg-[#1A3463] transition-colors"
                      >
                        {t(activeTag)}
                        <X size={12} strokeWidth={3} className="text-[#D5AA45]" />
                      </button>
                    )}
                    {activeChips.map((chip) => (
                      <button
                        key={`${chip.key}-${chip.value}`}
                        onClick={() => toggleFilter(chip.key, chip.value)}
                        className="inline-flex items-center gap-1.5 h-7 pl-3 pr-2 rounded-full text-[12px] font-semibold bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/25 hover:border-[#C99A2E]/60 transition-colors"
                      >
                        {t(chip.value)}
                        <X size={12} strokeWidth={3} />
                      </button>
                    ))}
                    <button
                      onClick={clearAll}
                      className="inline-flex items-center gap-1 h-7 px-2 text-[12px] font-bold text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors"
                    >
                      <RotateCcw size={12} strokeWidth={2.5} />
                      {t("Clear all")}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ───── Results ───── */}
          {displayedTrainers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center bg-white rounded-[8px] border border-dashed border-[#E2E8F0] py-16 px-6 luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-[8px] flex items-center justify-center mb-4" style={{ background: "#FBF4E4", color: GOLD }}>
                <SearchX size={26} strokeWidth={2.2} />
              </div>
              <h3 className="text-[18px] font-black" style={{ color: NAVY }}>{t("No trainers match these filters")}</h3>
              <p className="text-[13.5px] text-[#5A6B82] mt-1.5 max-w-[360px]">
                {t("Try removing a filter or broadening your search to discover more trainers.")}
              </p>
              <button
                onClick={clearAll}
                className="mt-5 h-10 px-5 rounded-[8px] text-[13px] font-bold text-white luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
              >
                {t("Reset all filters")}
              </button>
            </motion.div>
          ) : (
            <div className={`grid gap-5 auto-rows-fr ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 min-[1360px]:grid-cols-3"}`}>
              {displayedTrainers.map((trainer, index) => (
                <motion.div
                  key={trainer.uniqueId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <TrainerCard
                    isMobile={isMobile}
                    trainer={trainer}
                    onViewProfile={() => setSelectedTrainerId(trainer.id)}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {hasMore && displayedTrainers.length > 0 && (
            <div ref={ref} className="flex items-center justify-center gap-2 py-10 text-[12px] font-semibold text-[#7B8DAA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-bounce [animation-delay:-0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-bounce [animation-delay:-0.1s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-bounce" />
            </div>
          )}
          {!hasMore && displayedTrainers.length > 0 && (
            <div className="flex items-center gap-4 py-10">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#0B1D3A]/10" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7B8DAA]">{t("You've seen all trainers")}</span>
              <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#0B1D3A]/10" />
            </div>
          )}
        </div>
      </div>

      <Footer isMobile={isMobile} />
    </div>
  );
}
