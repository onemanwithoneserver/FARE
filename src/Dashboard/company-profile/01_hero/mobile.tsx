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
      className="w-full relative overflow-hidden font-['Outfit'] py-10 px-5 scroll-mt-[96px] fare-noise-overlay"
      style={{ background: NAVY }}
    >
      <div
        className="absolute top-[-5%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Compact Visual Showcase */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/40 via-[#C99A2E]/40 to-[#06B6D4]/40 rounded-[4px] blur-lg transition-all duration-500 opacity-70" />
          <div className="relative w-full h-[320px] sm:h-[360px] rounded-[16px] overflow-hidden luxury-shadow-float border border-white/5">
            <img
              src={heroData.heroImage}
              alt={heroData.companyName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-[#0B1D3A]/20 to-transparent opacity-90" />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-[4px] px-2.5 py-1.5 flex items-center gap-2 luxury-shadow-sm">
              <img src={heroData.logo} alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-[9px] font-black text-[#0B1D3A] uppercase tracking-wider">
                Horizon Realty
              </span>
            </div>
          </div>
          {heroData.isVerified && (
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full luxury-shadow-float whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <ShieldCheck size={12} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-white text-[12px] font-bold tracking-wide">
                FARE Verified Company
              </span>
            </div>
          )}
        </div>

        <h1 className="text-[32px] sm:text-[38px] font-black text-white leading-tight tracking-[-0.02em] mb-2">
          {heroData.companyName}
        </h1>
        <p className="text-[14px] text-[#CBD5E1] leading-relaxed mb-5 max-w-[340px] font-light">
          {heroData.positioningStatement}
        </p>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {heroData.highlightChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-white/[0.04] border border-white/[0.08] text-[10px] font-semibold text-white/90"
            >
              <CheckCircle2 size={10} className="text-[#D5AA45]" />
              {chip}
            </span>
          ))}
        </div>

        {/* 2x2 KPI Stats */}
        <div className="grid grid-cols-2 gap-3 w-full mb-6 text-left">
          {heroData.stats.map((stat) => {
            const accent = statAccentMap[stat.accent];
            return (
              <div
                key={stat.id}
                className="rounded-[4px] p-4 relative overflow-hidden flex flex-col items-center text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.bar} opacity-80`}
                />
                <div
                  className={`w-8 h-8 rounded-[4px] bg-gradient-to-br ${accent.iconBg} flex items-center justify-center luxury-shadow-md mb-2.5`}
                >
                  {renderStatIcon(stat.id)}
                </div>
                <div className="text-[24px] font-black text-white mb-1 leading-none tracking-tight">
                  {stat.value}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-[14px] text-white/90 font-medium mb-6">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
            <MapPin size={15} className="text-[#F59E0B]" strokeWidth={2.5} />
          </div>
          <span>{heroData.location}</span>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <button
            type="button"
            onClick={onConnect}
            className="w-full py-3 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 luxury-shadow-float active:scale-[0.98] transition-all duration-300 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)" }}
          >
            <span>Connect With Partner Desk</span>
            <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={() => onJumpToSection("careers")}
            className="w-full py-3 rounded-[8px] bg-white/[0.08] border border-white/[0.1] text-white text-xs font-bold active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            Explore Open Roles
          </button>
        </div>
      </motion.div>
    </section>
  );
}
