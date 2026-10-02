import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Header from "../Home/00_header";
import Footer from "../Home/05_section";
import SidebarFilters from "./SidebarFilters";
import TrainerCard from "./TrainerCard";
import TrainerProfile from "./TrainerProfile";
import { trainersData } from "./listing_data";
import {
  Search,
  Sparkles,
  Users,
  Award,
  Layers,
  MonitorPlay,
  SlidersHorizontal,
  X,
} from "lucide-react";
import trainersHero from "../assets/re_trainers_hero.jpg";
import { CustomSelect } from "./section-17-corporate-request-form/FormControls";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

interface TrainerDirectoryProps {
  isMobile: boolean;
}

export default function TrainerDirectory({ isMobile }: TrainerDirectoryProps) {
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");

  const [visibleCount, setVisibleCount] = useState(12);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisibleCount((prev) => prev + 6);
    }
  }, [inView]);

  const isSearching = searchQuery.trim() !== "" || activeTag !== null;

  const filteredTrainers = trainersData.filter((trainer) => {
    const matchesSearch = searchQuery === "" || 
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      trainer.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = activeTag === null || 
      trainer.expertise.includes(activeTag) || 
      trainer.segments.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  const displayedTrainers = [];
  if (filteredTrainers.length > 0) {
    for (let i = 0; i < visibleCount; i++) {
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
    { icon: <Users size={18} strokeWidth={2.2} />, value: "40+", label: "Trainers", color: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
    { icon: <Award size={18} strokeWidth={2.2} />, value: "12+", label: "Expertise Areas", color: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
    { icon: <Layers size={18} strokeWidth={2.2} />, value: "4", label: "RE Segments", color: "#10B981", bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
    { icon: <MonitorPlay size={18} strokeWidth={2.2} />, value: "9+", label: "Training Formats", color: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
  ];

  if (selectedTrainerId) {
    return (
      <div className="w-full flex flex-col min-h-screen bg-[#F8FAFD] font-['Outfit']">
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
        className="w-full relative overflow-hidden flex items-center justify-between font-['Outfit']"
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] shadow-[0_2px_12px_rgba(201,154,46,0.12)] backdrop-blur-md">
                <Sparkles size={13} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                <span className="font-bold text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-[#C99A2E]">
                  Trainer Directory
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`font-black leading-[1.05] tracking-tight ${
                isMobile
                  ? "text-[1.85rem] mb-2 leading-[1.12] w-full max-w-[320px]"
                  : "text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] mb-2 lg:mb-4 w-[280px] sm:w-[80%] lg:w-full max-w-full"
              }`}
              style={{ color: NAVY }}
            >
              Find the Right{" "}
              <span className="text-[#C99A2E]">Trainer</span> for Your Real Estate Team
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`font-medium leading-[1.5] text-[#5A6B82] relative z-10 ${
                isMobile
                  ? "text-[14px] w-full max-w-[320px] mb-5"
                  : "text-[14px] sm:text-[16px] xl:text-[17px] w-[300px] sm:w-[85%] lg:max-w-[520px] mb-5 lg:mb-7"
              }`}
            >
              Discover trainers by expertise, real estate segment, training format, delivery mode and experience.
            </motion.p>

            {isMobile && (
              <motion.div
                variants={itemVariants}
                className="w-full rounded overflow-hidden shadow-[0_12px_40px_-10px_rgba(11,29,58,0.18)] mb-6"
              >
                <img
                  src={trainersHero}
                  alt="Trainer Directory"
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
                placeholder="Search trainers, expertise or training areas..."
                className="w-full pl-11 pr-4 py-3.5 bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded text-[14px] lg:text-[15px] text-[#0B1D3A] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 focus:border-[#C99A2E] transition-all duration-300 ease-out placeholder:text-[#7B8DAA]"
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
                      ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-[0_4px_12px_-2px_rgba(11,29,58,0.25)]"
                      : "bg-white/90 backdrop-blur-sm border-[#0B1D3A]/[0.06] text-[#0B1D3A]/70 hover:border-[#0B1D3A]/20 hover:text-[#0B1D3A] hover:shadow-sm"
                  }`}
                >
                  {activeTag === tag && (
                    <span className="inline-flex items-center gap-1">
                      {tag}
                      <X size={11} strokeWidth={3} />
                    </span>
                  )}
                  {activeTag !== tag && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                      {tag}
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
            >
              <div className="relative w-full h-full lg:h-[480px] xl:h-[510px] rounded-tl-[160px] lg:rounded-tl-[220px] xl:rounded-tl-[260px] lg:rounded-bl-[90px] xl:rounded-bl-[100px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(11,29,58,0.15)] lg:shadow-[0_25px_70px_-15px_rgba(11,29,58,0.22)] border-l border-t lg:border-b border-white/80">
                <motion.img
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  src={trainersHero}
                  alt="Trainer Directory"
                  className="w-full h-full object-cover object-[center_38%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F8FAFD]/60 lg:hidden" />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section
        className="w-full border-y border-[#0B1D3A]/[0.06]"
        style={{
          background: "linear-gradient(135deg, rgba(248,250,253,0.95) 0%, rgba(255,255,255,0.98) 100%)",
        }}
      >
        <div className={`max-w-[1400px] mx-auto w-full py-4 ${isMobile ? "px-5" : "px-6 lg:px-12 xl:px-16"}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 flex-wrap"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm"
                  style={{ background: stat.bg }}
                >
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[18px] font-black" style={{ color: NAVY }}>{stat.value}</span>
                  <span className="text-[13px] font-semibold text-[#5A6B82]">{stat.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-[3px] h-[3px] rounded-full bg-[#0B1D3A]/15 ml-2 hidden sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className={`flex-1 w-full max-w-[1400px] mx-auto px-5 py-6 flex flex-col gap-6 ${isMobile ? "" : "sm:px-6 lg:px-12 xl:px-16 sm:py-8 md:flex-row sm:gap-7 md:items-start"}`}>

        <SidebarFilters isMobile={isMobile} isOpen={showMobileFilters} onClose={() => setShowMobileFilters(false)} />

        <div className="flex-1 flex flex-col">
          {isMobile && (
            <div className="flex items-center gap-3 mb-5 w-full">
              <div className="flex-1 z-30 rounded transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-[#C99A2E]/50">
                <CustomSelect
                  options={["Relevance", "Experience (High to Low)", "A-Z"]}
                  value={sortBy}
                  onChange={setSortBy}
                  placeholder="Sort by"
                />
              </div>
              <button
                onClick={() => setShowMobileFilters(true)}
                className="flex-1 flex items-center justify-center gap-2 h-full min-h-[46px] bg-white border border-[#0B1D3A]/[0.06] rounded text-[13px] font-bold shadow-sm transition-all duration-300 ease-out hover:border-[#0B1D3A]/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                style={{ color: NAVY }}
              >
                <SlidersHorizontal size={15} strokeWidth={2.5} />
                Filters
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mb-5">
            {isSearching ? (
              <h2 className="text-[14px] sm:text-[15px] font-bold flex items-center gap-2" style={{ color: NAVY }}>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded ring-1 ring-black/5 bg-[#C99A2E]/10 text-[#C99A2E] text-[11px] font-black">
                  {filteredTrainers.length}
                </span>
                Trainers found
              </h2>
            ) : (
              <div />
            )}
            
            {!isMobile && (
              <div className="flex items-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] text-[#5A6B82] font-medium z-30 whitespace-nowrap">
                Sort by:
                <div className="w-[140px] sm:w-[220px] relative rounded transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-[#C99A2E]/50">
                  <CustomSelect
                    options={["Relevance", "Experience (High to Low)", "A-Z"]}
                    value={sortBy}
                    onChange={setSortBy}
                    placeholder="Sort by"
                  />
                </div>
              </div>
            )}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-40px" }}
            className={`grid grid-cols-1 ${isMobile ? "gap-4" : "md:grid-cols-6 xl:grid-cols-6 gap-5"}`}
          >
            {displayedTrainers.map((trainer, index) => {
              let spanClass = "col-span-1";
              let layoutVariant: "full" | "half" | "third" = "third";

              if (!isMobile) {
                spanClass = "col-span-1 md:col-span-2 xl:col-span-2";
                if (index === 0) {
                  spanClass = "col-span-1 md:col-span-6 xl:col-span-6";
                  layoutVariant = "full";
                } else if (index === 1 || index === 2) {
                  spanClass = "col-span-1 md:col-span-3 xl:col-span-3";
                  layoutVariant = "half";
                }
              }

              return (
                <motion.div key={trainer.uniqueId} variants={itemVariants} className={spanClass}>
                  <TrainerCard
                    isMobile={isMobile}
                    trainer={trainer}
                    onViewProfile={() => setSelectedTrainerId(trainer.id)}
                    layoutVariant={layoutVariant}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <div ref={ref} className="h-20 w-full" />
        </div>
      </div>

      <Footer isMobile={isMobile} />
    </div>
  );
}
