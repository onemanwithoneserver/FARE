import type { Trainer } from "../listing_data";
import { motion } from "motion/react";
import {
  ShieldCheck,
  MapPin,
  Globe,
  ArrowRight,
  Briefcase,
  GraduationCap,
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

export default function Mobile({ trainer, onViewProfile }: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2);
  };

  const availabilityConfig: Record<string, { bg: string; text: string; dot: string }> = {
    "Available": { bg: "rgba(16,185,129,0.08)", text: "#059669", dot: "#10B981" },
    "Limited Availability": { bg: "rgba(245,158,11,0.08)", text: "#B45309", dot: "#F59E0B" },
    "On Request": { bg: "rgba(99,102,241,0.08)", text: "#4338CA", dot: "#6366F1" },
  };

  const avail = availabilityConfig[trainer.availability] || availabilityConfig["Available"];

  return (
    <motion.div
      className="bg-white/95 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-xl relative overflow-hidden shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 ease-out font-['Outfit']"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD}90)` }}
      />

      <div className="w-full p-4.5 sm:p-5 flex items-center gap-3.5">
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-11 h-11 rounded-lg object-cover shadow-sm shrink-0 border border-[#0B1D3A]/[0.06]"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center text-white shadow-sm shrink-0 font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            {getInitials(trainer.name)}
          </div>
        )}
        <div className="flex flex-col flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#0B1D3A] leading-tight truncate">
              {trainer.name}
            </h3>
            {trainer.verified && (
              <ShieldCheck size={14} strokeWidth={2.5} style={{ color: GOLD }} className="shrink-0" />
            )}
          </div>
          <div className="text-[12px] font-medium text-[#5A6B82] leading-tight mt-0.5 truncate">
            {trainer.title}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <div className="flex flex-col gap-4 pt-3.5 border-t border-[#0B1D3A]/[0.06] mb-4">

          {/* Availability */}
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold"
              style={{ background: avail.bg, color: avail.text, border: `1px solid ${avail.dot}20` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: avail.dot }} />
              {trainer.availability}
            </div>
          </div>

          {/* Experience Blocks */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-lg"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(59,130,246,0.02))", border: "1px solid rgba(59,130,246,0.12)" }}
            >
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.15)" }}>
                <Briefcase size={12} strokeWidth={2.5} className="text-[#3B82F6]" />
              </div>
              <div>
                <div className="text-[12px] font-black text-[#3B82F6] leading-none">{trainer.industryExperience}y</div>
                <div className="text-[9px] font-medium text-[#5A6B82]">Industry</div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`, border: `1px solid ${GOLD}15` }}
            >
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: `${GOLD}18` }}>
                <GraduationCap size={12} strokeWidth={2.5} style={{ color: GOLD }} />
              </div>
              <div>
                <div className="text-[12px] font-black leading-none" style={{ color: GOLD }}>{trainer.trainingExperience}y</div>
                <div className="text-[9px] font-medium text-[#5A6B82]">Training</div>
              </div>
            </div>
          </div>

          {/* Segments & Modes */}
          <div className="flex flex-col gap-3.5 pt-3 border-t border-[#0B1D3A]/[0.06]">
            <div>
              <div className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-1.5">RE Segment</div>
              <div className="flex flex-wrap gap-1.5">
                {trainer.segments.map(e => (
                  <div key={e} className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/70">
                    {e}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-1.5">Delivery Mode</div>
              <div className="flex flex-wrap gap-1.5">
                {trainer.delivery.map(e => (
                  <div key={e} className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EEF4FF] border border-[#DDEAFF] text-[#1D4ED8]/70">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Languages */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#0B1D3A]/[0.06]">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: `${GOLD}15` }}>
                <MapPin size={12} strokeWidth={2.5} style={{ color: GOLD }} />
              </div>
              <span className="text-[12px] font-medium text-[#5A6B82] leading-tight break-words">{trainer.location.split(',')[0]}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.10)" }}>
                <Globe size={12} strokeWidth={2.5} className="text-[#3B82F6]" />
              </div>
              <span className="text-[12px] font-medium text-[#5A6B82] leading-tight break-words">{trainer.languages.slice(0, 2).join(", ")}</span>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2.5 pt-1 relative">
          <button
            onClick={onViewProfile}
            className="flex-1 border border-[#0B1D3A]/[0.12] hover:border-[#0B1D3A]/30 font-bold text-[12px] py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-sm"
            style={{ color: NAVY }}
          >
            View Profile <ArrowRight size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
          </button>
          <button
            className="flex-1 text-white font-bold text-[12px] py-2.5 rounded transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(11,29,58,0.3)] relative overflow-hidden group/btn"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover/btn:-translate-x-1">
              Request
              <Send size={13} strokeWidth={2.5} className="opacity-0 w-0 -translate-x-2 group-hover/btn:w-auto group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" style={{ color: GOLD_MID }} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
