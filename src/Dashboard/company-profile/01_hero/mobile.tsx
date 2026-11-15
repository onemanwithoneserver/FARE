import { motion } from "motion/react";
import {
  ShieldCheck,
  MapPin,
  Building2,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { heroData, statAccentMap } from "./data";
import type { HeroViewProps } from "./desktop";

const NAVY = "#0B1D3A";

function renderStatIcon(id: string) {
  switch (id) {
    case "exp":
      return <Briefcase size={13} className="text-white" strokeWidth={2.5} />;
    case "ventures":
      return <Building2 size={13} className="text-white" strokeWidth={2.5} />;
    case "families":
      return <Users size={13} className="text-white" strokeWidth={2.5} />;
    default:
      return <Award size={13} className="text-white" strokeWidth={2.5} />;
  }
}

export default function HeroMobile({
  onConnect,
  onJumpToSection,
}: HeroViewProps) {
  return (
    <section
      id="company-sec-hero"
      className="w-full relative overflow-hidden py-8 px-4 scroll-mt-[96px]"
      style={{ background: NAVY }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-15%] w-[260px] h-[260px] rounded-full blur-[90px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.3) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Compact Visual Showcase */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] relative mb-6">
          <div className="relative w-full h-[320px] sm:h-[360px] rounded-[16px] overflow-hidden border border-white/15 shadow-xl">
            <img
              src={heroData.heroImage}
              alt={heroData.companyName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-[#0B1D3A]/20 to-transparent" />
            <div className="absolute top-3 left-3 bg-white/95 rounded-[8px] px-2.5 py-1.5 flex items-center gap-2 shadow-md">
              <img src={heroData.logo} alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-[9px] font-black text-[#0B1D3A] uppercase tracking-wider">
                Horizon Realty
              </span>
            </div>
          </div>
          {heroData.isVerified && (
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
              style={{
                background: "rgba(15, 36, 70, 0.92)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <ShieldCheck size={12} className="text-emerald-400" />
              <span className="text-white text-[10px] font-bold">FARE Verified Company</span>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-black text-white leading-tight tracking-tight mb-1.5">
          {heroData.companyName}
        </h1>
        <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
          {heroData.positioningStatement}
        </p>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-5">
          {heroData.highlightChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-white/[0.06] border border-white/10 text-[10px] font-semibold text-white/90"
            >
              <CheckCircle2 size={10} className="text-[#E5C158]" />
              {chip}
            </span>
          ))}
        </div>

        {/* 2x2 KPI Stats */}
        <div className="grid grid-cols-2 gap-2.5 w-full mb-5 text-left">
          {heroData.stats.map((stat) => {
            const accent = statAccentMap[stat.accent];
            return (
              <div
                key={stat.id}
                className="rounded-[6px] p-3 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.bar}`}
                />
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    {stat.label}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-[4px] bg-gradient-to-br ${accent.iconBg} flex items-center justify-center`}
                  >
                    {renderStatIcon(stat.id)}
                  </div>
                </div>
                <div className="text-lg font-black text-white leading-none">{stat.value}</div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-white/80 mb-5">
          <MapPin size={13} className="text-[#F59E0B] shrink-0" />
          <span>{heroData.location}</span>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <button
            type="button"
            onClick={onConnect}
            className="w-full py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
          >
            <span>Connect With Partner Desk</span>
            <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={() => onJumpToSection("careers")}
            className="w-full py-2.5 rounded-[8px] bg-white/10 border border-white/15 text-white text-xs font-bold active:scale-[0.98] transition-transform cursor-pointer"
          >
            Explore Open Roles
          </button>
        </div>
      </motion.div>
    </section>
  );
}
