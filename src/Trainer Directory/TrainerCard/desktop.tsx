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

export default function Desktop({ trainer, onViewProfile, layoutVariant = "third" }: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2);
  };

  const availabilityConfig: Record<string, { bg: string; text: string; dot: string }> = {
    "Available": { bg: "rgba(16,185,129,0.08)", text: "#059669", dot: "#10B981" },
    "Limited Availability": { bg: "rgba(245,158,11,0.08)", text: "#B45309", dot: "#F59E0B" },
    "On Request": { bg: "rgba(99,102,241,0.08)", text: "#4338CA", dot: "#6366F1" },
  };

  const avail = availabilityConfig[trainer.availability] || availabilityConfig["Available"];

  const renderButtons = () => (
    <>
      <button
        onClick={onViewProfile}
        className={`${layoutVariant === 'full' ? 'px-8' : 'flex-1'} border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 font-bold text-[12.5px] py-2.5 rounded-xl transition-all duration-300 ease-out flex items-center justify-center gap-1.5 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50`}
        style={{ color: NAVY }}
      >
        View Profile <ArrowRight size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
      </button>
      <button
        className={`${layoutVariant === 'full' ? 'px-8' : 'flex-1'} text-white font-bold text-[12.5px] py-2.5 rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(11,29,58,0.3)] relative overflow-hidden group/btn hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50`}
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`,
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover/btn:-translate-x-1">
          Request
          <Send size={13} strokeWidth={2.5} className="opacity-0 w-0 -translate-x-2 group-hover/btn:w-auto group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" style={{ color: GOLD_MID }} />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
      </button>
    </>
  );

  const isFull = layoutVariant === 'full';

  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`group bg-white backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 rounded-2xl p-0 flex ${isFull ? 'flex-row' : 'flex-col'} h-full cursor-default shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out relative overflow-hidden font-['Outfit']`}
    >
      {/* Top/Left Image Section */}
      <div className={`relative overflow-hidden bg-gray-100 shrink-0 ${isFull ? 'w-[320px]' : 'w-full aspect-[4/3]'}`}>
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-5xl font-black group-hover:scale-105 transition-transform duration-700 ease-out"
               style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}>
            {getInitials(trainer.name)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
        
        {/* Availability badge removed as requested */}
      </div>

      {/* Content Section */}
      <div className={`p-6 flex flex-col flex-1 ${isFull ? 'gap-6' : 'gap-5'}`}>
        
        {/* Header: Name, Verified, Title */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-[20px] font-black leading-tight" style={{ color: NAVY }}>
              {trainer.name}
            </h3>
            {trainer.verified && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white shadow-sm"
                style={{ border: `1px solid ${GOLD}40` }}
              >
                <ShieldCheck size={12} strokeWidth={2.5} style={{ color: GOLD }} />
                <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color: GOLD }}>
                  Verified
                </span>
              </div>
            )}
          </div>
          <p className="text-[14px] text-[#5A6B82] leading-snug font-medium line-clamp-2">
            {trainer.title}
          </p>
        </div>

        {/* Experience section */}
        <div className="flex gap-3">
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-lg border border-[#0B1D3A]/[0.06] bg-[#F8FAFD]">
            <div className="w-7 h-7 rounded-lg ring-1 ring-black/5 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Briefcase size={14} strokeWidth={2.5} style={{ color: NAVY }} />
            </div>
            <div>
              <div className="text-[13px] font-black leading-none" style={{ color: NAVY }}>{trainer.industryExperience} Yrs</div>
              <div className="text-[10px] font-medium text-[#7B8DAA] uppercase tracking-wider mt-0.5">Industry Exp</div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`,
              border: `1px solid ${GOLD}20`,
            }}
          >
            <div className="w-7 h-7 rounded-lg ring-1 ring-black/5 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <GraduationCap size={14} strokeWidth={2.5} style={{ color: GOLD_MID }} />
            </div>
            <div>
              <div className="text-[13px] font-black leading-none" style={{ color: GOLD_MID }}>{trainer.trainingExperience} Yrs</div>
              <div className="text-[10px] font-medium text-[#7B8DAA] uppercase tracking-wider mt-0.5">Training Exp</div>
            </div>
          </div>
        </div>

        {/* Filters Section (RE Segment, Expertise, Language) */}
        <div className="flex flex-col gap-4 flex-1">
          {/* RE Segment */}
          <div>
            <div className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-2 flex items-center gap-1.5">
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.segments.map(e => (
                <div key={e} className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80">
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Specialization / Expertise */}
          <div>
            <div className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-2 flex items-center gap-1.5">
              Specialization
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.expertise.slice(0, 3).map(e => (
                <div key={e} className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#EEF4FF] border border-[#DDEAFF] text-[#1D4ED8]/80">
                  {e}
                </div>
              ))}
              {trainer.expertise.length > 3 && (
                <div className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-500">
                  +{trainer.expertise.length - 3}
                </div>
              )}
            </div>
          </div>

          {/* Languages section removed as requested */}
        </div>

        {/* Action Buttons */}
        <div className={`pt-4 border-t border-[#0B1D3A]/[0.06] flex gap-2.5 ${isFull ? 'mt-auto' : 'mt-2'}`}>
          {renderButtons()}
        </div>
      </div>
    </motion.div>
  );
}
