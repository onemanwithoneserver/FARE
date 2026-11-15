import { motion, type Variants } from "motion/react";
import {
  ShieldCheck,
  MapPin,
  Building2,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  Globe,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";
import { heroData, statAccentMap } from "./data";

const NAVY = "#0B1D3A";

export interface HeroViewProps {
  companyName?: string;
  onConnect: () => void;
  onJumpToSection: (id: string) => void;
}

const rightStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function renderStatIcon(id: string) {
  switch (id) {
    case "exp":
      return <Briefcase size={15} className="text-white" strokeWidth={2.5} />;
    case "ventures":
      return <Building2 size={15} className="text-white" strokeWidth={2.5} />;
    case "families":
      return <Users size={15} className="text-white" strokeWidth={2.5} />;
    default:
      return <Award size={15} className="text-white" strokeWidth={2.5} />;
  }
}

export default function HeroDesktop({
  onConnect,
  onJumpToSection,
}: HeroViewProps) {
  return (
    <section
      id="company-sec-hero"
      className="w-full relative overflow-hidden py-14 px-8 lg:px-10 scroll-mt-[72px]"
      style={{ background: NAVY }}
    >
      {/* Ambient Animated Orbs */}
      <motion.div
        animate={{ x: [0, 32, 0], y: [0, -25, 0], scale: [1, 1.09, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[5%] w-[460px] h-[460px] rounded-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1.08, 1, 1.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-12%] left-[0%] w-[520px] h-[520px] rounded-full blur-[130px] pointer-events-none z-0 opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.26) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.16) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1240px] mx-auto w-full relative z-10">
        <div className="flex flex-row items-center gap-10 lg:gap-14">
          {/* Left Company Visual & Official Logo Card */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="w-[380px] lg:w-[430px] xl:w-[460px] shrink-0 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/45 via-[#C99A2E]/45 to-[#06B6D4]/45 rounded-[18px] blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-90" />

            <div className="relative w-full h-[440px] lg:h-[490px] xl:h-[510px] rounded-[18px] overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={heroData.heroImage}
                alt={heroData.companyName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-[#0B1D3A]/20 to-transparent" />

              {/* Floating Brand Emblem Top-Left */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-[10px] px-3.5 py-2.5 shadow-lg border border-white flex items-center gap-2.5"
              >
                <img
                  src={heroData.logo}
                  alt="Company Logo"
                  className="w-7 h-7 object-contain"
                />
                <div className="leading-none">
                  <div className="text-[10px] font-black text-[#0B1D3A] tracking-wider uppercase">
                    Horizon Realty
                  </div>
                  <div className="text-[8px] font-bold text-[#C99A2E] uppercase tracking-widest mt-0.5">
                    {heroData.reraMasterId}
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-8 left-5 right-5 text-left">
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                  {heroData.established}
                </div>
                <div className="text-sm font-extrabold text-white mt-0.5">
                  {heroData.category}
                </div>
              </div>
            </div>

            {heroData.isVerified && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full shadow-xl whitespace-nowrap"
                style={{
                  background: "rgba(15, 36, 70, 0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-sm">
                  <ShieldCheck size={12} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-xs font-bold tracking-wide">
                  FARE Verified Company
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Narrative & Glassmorphic Stats */}
          <motion.div
            variants={rightStagger}
            initial="hidden"
            animate="show"
            className="flex-1 text-left"
          >
            <motion.h1
              variants={fadeUpItem}
              className="text-4xl lg:text-[44px] leading-[1.1] font-black text-white mb-3 tracking-[-0.02em]"
            >
              {heroData.companyName}
            </motion.h1>
            <motion.h2
              variants={fadeUpItem}
              className="text-lg lg:text-[20px] font-semibold text-[#94A3B8] mb-4"
            >
            </motion.h2>
            <motion.p
              variants={fadeUpItem}
              className="text-[#CBD5E1] text-[15px] leading-relaxed mb-5 max-w-[660px] font-light"
            >
              {heroData.positioningStatement}
            </motion.p>

            {/* Highlight Chips */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap gap-2 mb-6">
              {heroData.highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-white/[0.06] hover:bg-white/[0.11] border border-white/10 text-xs font-semibold text-white/90 transition-colors"
                >
                  <CheckCircle2 size={12} className="text-[#E5C158]" />
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* 4 KPI Stat Boxes matching Trainer Profile */}
            <motion.div variants={fadeUpItem} className="grid grid-cols-4 gap-3.5 mb-7">
              {heroData.stats.map((stat) => {
                const accent = statAccentMap[stat.accent];
                return (
                  <motion.div
                    key={stat.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-[6px] p-4 relative overflow-hidden group/stat transition-colors duration-300 hover:bg-white/[0.09] text-left cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.bar} opacity-75 group-hover/stat:opacity-100 transition-opacity`}
                    />
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                        {stat.label}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-[4px] bg-gradient-to-br ${accent.iconBg} flex items-center justify-center shadow-md group-hover/stat:scale-110 transition-transform duration-300`}
                      >
                        {renderStatIcon(stat.id)}
                      </div>
                    </div>
                    <div className="text-[24px] lg:text-[26px] font-black text-white leading-none tracking-tight">
                      {stat.value}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-wrap items-center justify-between gap-4 pt-2"
            >
              <div className="flex flex-wrap items-center gap-5 text-white/90 font-medium text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <MapPin size={14} className="text-[#F59E0B]" />
                  </div>
                  <span>{heroData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/75 text-xs">
                  <Globe size={14} className="text-[#06B6D4]" />
                  <span>{heroData.website}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onJumpToSection("careers")}
                  className="px-4 py-2.5 rounded-[8px] bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Explore Open Roles</span>
                  <ArrowDown size={13} className="text-[#E5C158]" />
                </button>
                <button
                  type="button"
                  onClick={onConnect}
                  className="relative overflow-hidden group/cta px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(201,154,46,0.35)] hover:shadow-[0_8px_22px_rgba(201,154,46,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
                >
                  <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/cta:left-[130%] group-hover/cta:opacity-100" />
                  <span className="relative">Connect With Partner Desk</span>
                  <ArrowRight size={14} className="relative" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
