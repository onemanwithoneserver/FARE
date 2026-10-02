import type { Trainer } from "../listing_data";
import { motion } from "motion/react";
import {
  ShieldCheck,
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





  return (
    <motion.div
      className="group bg-white backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 rounded flex flex-col h-full relative overflow-hidden shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] transition-all duration-300 ease-out hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] hover:-translate-y-1 font-['Outfit']"
    >
      {/* Top Image Section */}
      <div className="relative overflow-hidden bg-gray-100 shrink-0 w-full aspect-[4/3]">
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-black"
               style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}>
            {getInitials(trainer.name)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
        
        {/* Availability badge removed as requested */}
      </div>

      <div className="p-4 flex flex-col flex-1 gap-4">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[17px] font-black tracking-tight text-[#0B1D3A] leading-tight truncate">
              {trainer.name}
            </h3>
            {trainer.verified && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white shadow-sm"
                style={{ border: `1px solid ${GOLD}40` }}
              >
                <ShieldCheck size={10} strokeWidth={2.5} style={{ color: GOLD }} />
                <span className="text-[8px] font-bold tracking-wider uppercase" style={{ color: GOLD }}>
                  Verified
                </span>
              </div>
            )}
          </div>
          <div className="text-[13px] font-medium text-[#5A6B82] leading-tight mt-0.5 line-clamp-2">
            {trainer.title}
          </div>
        </div>

        {/* Experience Blocks */}
        <div className="flex gap-2">
          <div className="flex items-center gap-2 flex-1 px-2.5 py-2 rounded border border-[#0B1D3A]/[0.06] bg-[#F8FAFD]">
            <div className="w-6 h-6 rounded ring-1 ring-black/5 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Briefcase size={12} strokeWidth={2.5} style={{ color: NAVY }} />
            </div>
            <div>
              <div className="text-[12px] font-black leading-none" style={{ color: NAVY }}>{trainer.industryExperience}y</div>
              <div className="text-[9px] font-medium text-[#7B8DAA] uppercase tracking-wider mt-0.5">Ind Exp</div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1 px-2.5 py-2 rounded"
            style={{ background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`, border: `1px solid ${GOLD}20` }}
          >
            <div className="w-6 h-6 rounded ring-1 ring-black/5 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <GraduationCap size={12} strokeWidth={2.5} style={{ color: GOLD_MID }} />
            </div>
            <div>
              <div className="text-[12px] font-black leading-none" style={{ color: GOLD_MID }}>{trainer.trainingExperience}y</div>
              <div className="text-[9px] font-medium text-[#7B8DAA] uppercase tracking-wider mt-0.5">Trn Exp</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <div className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.segments.map(e => (
                <div key={e} className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80">
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
              Specialization
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.expertise.slice(0, 3).map(e => (
                <div key={e} className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EEF4FF] border border-[#DDEAFF] text-[#1D4ED8]/80">
                  {e}
                </div>
              ))}
              {trainer.expertise.length > 3 && (
                <div className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-50 border border-gray-200 text-gray-500">
                  +{trainer.expertise.length - 3}
                </div>
              )}
            </div>
          </div>

          {/* Languages section removed as requested */}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pt-3 mt-1 border-t border-[#0B1D3A]/[0.06] relative">
          <button
            onClick={onViewProfile}
            className="flex-1 border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 font-bold text-[12px] py-2 rounded transition-all duration-300 ease-out flex items-center justify-center gap-1.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            style={{ color: NAVY }}
          >
            Profile <ArrowRight size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
          </button>
          <button
            className="flex-1 text-white font-bold text-[12px] py-2 rounded transition-all duration-300 ease-out shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(11,29,58,0.3)] relative overflow-hidden group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
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
