import type { Trainer } from "../listing_data";
import { motion } from "motion/react";
import {
  BadgeCheck,
  ArrowRight,
  ChevronRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Languages,
  Send,
} from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
  layoutVariant?: "full" | "half" | "third";
}

export default function Desktop({
  trainer,
  onViewProfile,
  layoutVariant = "third",
}: TrainerCardProps) {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);

  const isFull = layoutVariant === "full";

  const stats = [
    {
      icon: <Briefcase size={14} strokeWidth={2.4} />,
      value: `${trainer.industryExperience}+`,
      label: "Yrs Industry",
      color: "#4F46E5",
      bg: "#EEF0FF",
    },
    {
      icon: <GraduationCap size={15} strokeWidth={2.4} />,
      value: `${trainer.trainingExperience}+`,
      label: "Yrs Training",
      color: GOLD,
      bg: "#FBF4E4",
    },
    {
      icon: <Languages size={14} strokeWidth={2.4} />,
      value: `${trainer.languages.length}`,
      label: "Languages",
      color: "#059669",
      bg: "#E7F7F0",
    },
  ];

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`group relative flex ${isFull ? "flex-row" : "flex-col"} h-full bg-white rounded-2xl p-2.5 font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] hover:shadow-[0_4px_10px_-4px_rgba(11,29,58,0.08),0_24px_50px_-16px_rgba(11,29,58,0.22)] hover:border-[#C99A2E]/30 transition-[box-shadow,border-color] duration-500`}
    >
      <div
        className={`relative overflow-hidden rounded-xl shrink-0 bg-[#EEF2F8] ${
          isFull ? "w-[300px] self-stretch" : "w-full aspect-[16/11]"
        }`}
      >
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-5xl font-black"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E3A66 100%)` }}
          >
            {getInitials(trainer.name)}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/45 via-transparent to-transparent" />

        {trainer.verified && (
          <div className="absolute top-3 left-3 flex items-center gap-1 pl-1.5 pr-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_12px_-2px_rgba(11,29,58,0.2)]">
            <BadgeCheck size={14} strokeWidth={2.5} style={{ color: GOLD }} />
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase" style={{ color: NAVY }}>
              FARE Verified
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
          <MapPin size={11} strokeWidth={2.5} className="text-white" />
          <span className="text-[10.5px] font-semibold text-white tracking-wide">
            {trainer.location}
          </span>
        </div>
      </div>

      <div className={`flex flex-col flex-1 ${isFull ? "px-6 py-4 gap-5" : "px-2.5 pt-4 pb-1.5 gap-4"}`}>
        <div>
          <h3
            className={`font-black leading-tight tracking-tight ${isFull ? "text-[24px]" : "text-[19px]"}`}
            style={{ color: NAVY }}
          >
            {trainer.name}
          </h3>
          <p className="text-[13.5px] text-[#5A6B82] font-medium leading-snug mt-1 line-clamp-1">
            {trainer.title}
          </p>
          {isFull && (
            <p className="text-[14px] text-[#5A6B82]/90 leading-relaxed mt-3 max-w-[620px] line-clamp-2">
              {trainer.positioning}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 rounded-xl bg-[#F7F9FC] border border-[#0B1D3A]/[0.05] divide-x divide-[#0B1D3A]/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-3 px-1 gap-1.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="text-[16px] font-black leading-none" style={{ color: NAVY }}>
                {s.value}
              </div>
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#7B8DAA] whitespace-nowrap">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-2">
              Specialization
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.expertise.slice(0, 3).map((e) => (
                <span
                  key={e}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/20"
                >
                  {e}
                </span>
              ))}
              {trainer.expertise.length > 3 && (
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F1F4F9] text-[#5A6B82]">
                  +{trainer.expertise.length - 3}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-2">
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.segments.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F1F4F9] text-[#0B1D3A]/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]/60" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-2.5 pt-4 border-t border-dashed border-[#0B1D3A]/10 ${isFull ? "mt-auto justify-start" : ""}`}>
          <button
            onClick={onViewProfile}
            className={`group/vp ${isFull ? "px-6" : "flex-1"} h-10 rounded-xl text-[13px] font-bold flex items-center justify-center gap-1.5 bg-white border border-[#0B1D3A]/10 hover:border-[#0B1D3A] hover:bg-[#0B1D3A] hover:text-white transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50`}
            style={{ color: NAVY }}
          >
            View Profile
            <span className="relative w-4 h-4 inline-flex items-center justify-center">
              <ChevronRight
                size={16}
                strokeWidth={2.6}
                className="absolute transition-all duration-300 opacity-100 translate-x-0 group-hover/vp:opacity-0 group-hover/vp:translate-x-1"
              />
              <ArrowRight
                size={16}
                strokeWidth={2.6}
                className="absolute transition-all duration-300 opacity-0 -translate-x-1 group-hover/vp:opacity-100 group-hover/vp:translate-x-0.5"
                style={{ color: GOLD_MID }}
              />
            </span>
          </button>

          <button
            className={`group/rq ${isFull ? "px-6" : "flex-1"} h-10 rounded-xl text-[13px] font-bold flex items-center justify-center gap-1.5 relative overflow-hidden transition-all duration-300 shadow-[0_6px_16px_-6px_rgba(201,154,46,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(201,154,46,0.7)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50`}
            style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`, color: NAVY }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Request
              <Send size={13} strokeWidth={2.5} className="transition-transform duration-300 group-hover/rq:translate-x-0.5 group-hover/rq:-translate-y-0.5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/rq:translate-x-full transition-transform duration-700 pointer-events-none" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
