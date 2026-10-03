import { useState } from "react";
import type { Trainer } from "../listing_data";
import {
  BadgeCheck,
  ArrowRight,
  ChevronRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Languages,
  Check,
  Send,
} from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
  layoutVariant?: "grid" | "list";
}

const AVAILABILITY: Record<Trainer["availability"], { dot: string; text: string; bg: string; label: string }> = {
  Available: { dot: "#10B981", text: "#047857", bg: "#ECFDF5", label: "Available" },
  "Limited Availability": { dot: "#F59E0B", text: "#B45309", bg: "#FFFBEB", label: "Limited" },
  "On Request": { dot: "#94A3B8", text: "#475569", bg: "#F1F5F9", label: "On Request" },
};

export default function Mobile({ trainer, onViewProfile }: TrainerCardProps) {
  const [requested, setRequested] = useState(false);
  const handleRequest = () => setRequested(true);
  const initials = trainer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  const avail = AVAILABILITY[trainer.availability];

  const stats = [
    { icon: <Briefcase size={12} strokeWidth={2.4} />, value: `${trainer.industryExperience}+`, label: "Industry", color: "#4F46E5", bg: "#EEF0FF" },
    { icon: <GraduationCap size={13} strokeWidth={2.4} />, value: `${trainer.trainingExperience}+`, label: "Training", color: GOLD, bg: "#FBF4E4" },
    { icon: <Languages size={12} strokeWidth={2.4} />, value: `${trainer.languages.length}`, label: "Languages", color: "#059669", bg: "#E7F7F0" },
  ];

  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] active:scale-[0.99] transition-transform duration-200 overflow-hidden">
      {/* Cover band */}
      <div
        className="relative h-[76px] shrink-0 overflow-hidden"
        style={{ background: `linear-gradient(120deg, ${NAVY} 0%, #15315C 55%, #1E3F72 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "12px 12px" }}
        />
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#C99A2E]/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D5AA45]/70 to-transparent" />
        <span
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 h-[22px] px-2 rounded-full text-[10px] font-bold"
          style={{ background: avail.bg, color: avail.text }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: avail.dot }} />
          {avail.label}
        </span>
      </div>

      <div className="flex flex-col flex-1 px-4 pb-4">
        {/* avatar + identity row */}
        <div className="flex items-end gap-3 -mt-9">
          <div className="relative w-[76px] h-[76px] shrink-0">
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{ background: `conic-gradient(from 210deg, ${GOLD_MID}, #F3DFA6, ${GOLD}, ${GOLD_MID})` }}
            />
            <div className="absolute inset-0 rounded-full bg-white p-[3px]">
              {trainer.image ? (
                <img src={trainer.image} alt={trainer.name} loading="lazy" className="w-full h-full rounded-full object-cover" />
              ) : (
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-white text-xl font-black"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E3A66 100%)` }}
                >
                  {initials}
                </div>
              )}
            </div>
            {trainer.verified && (
              <div className="absolute bottom-0 right-0 w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_10px_-2px_rgba(11,29,58,0.25)]">
                <BadgeCheck size={15} strokeWidth={2.4} style={{ color: GOLD }} />
              </div>
            )}
          </div>
          <div className="min-w-0 pb-1">
            <h3 className="text-[17px] font-black leading-tight tracking-tight truncate" style={{ color: NAVY }}>
              {trainer.name}
            </h3>
            <div className="flex items-center gap-1 mt-0.5 text-[11px] text-[#7B8DAA] font-medium">
              <MapPin size={11} strokeWidth={2.5} />
              <span className="truncate">{trainer.location}</span>
            </div>
          </div>
        </div>

        <p className="text-[13px] text-[#5A6B82] font-semibold leading-snug mt-3 line-clamp-1">{trainer.title}</p>
        <p className="text-[12px] text-[#5A6B82]/90 leading-relaxed mt-1 line-clamp-2">{trainer.positioning}</p>

        <div className="grid grid-cols-3 mt-3.5 rounded-xl bg-[#F7F9FC] border border-[#0B1D3A]/[0.05] divide-x divide-[#0B1D3A]/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-2.5 gap-1">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <div className="text-[14px] font-black leading-none" style={{ color: NAVY }}>
                {s.value}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7B8DAA]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mt-3.5">
          {trainer.expertise.slice(0, 2).map((e) => (
            <span
              key={e}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/20"
            >
              {e}
            </span>
          ))}
          {trainer.segments.slice(0, 2).map((s) => (
            <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F1F4F9] text-[#0B1D3A]/75">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3.5">
          <div className="flex items-center justify-between pt-3 mb-3 border-t border-dashed border-[#0B1D3A]/10">
            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">Engagement</span>
            <span className="text-[12px] font-bold" style={{ color: GOLD }}>{trainer.pricing}</span>
          </div>
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              onClick={onViewProfile}
              className="group/vp px-4 h-9 rounded-xl text-[13px] font-bold flex items-center justify-center gap-1 text-white shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
            >
              View Profile
              <span className="relative w-4 h-4 inline-flex items-center justify-center">
                <ChevronRight
                  size={15}
                  strokeWidth={2.6}
                  className="absolute transition-all duration-300 opacity-100 group-hover/vp:opacity-0 group-hover/vp:translate-x-1 group-active/vp:opacity-0"
                />
                <ArrowRight
                  size={15}
                  strokeWidth={2.6}
                  className="absolute transition-all duration-300 opacity-0 -translate-x-1 group-hover/vp:opacity-100 group-hover/vp:translate-x-0 group-active/vp:opacity-100 group-active/vp:translate-x-0"
                  style={{ color: GOLD_MID }}
                />
              </span>
            </button>
            <button
              onClick={() => !requested && handleRequest()}
              className={`group/rq px-4 h-9 rounded-xl text-[13px] font-bold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 ${
                requested
                  ? "bg-[#E7F7F0] border border-[#059669]/30 text-[#059669] cursor-default"
                  : "relative overflow-hidden border border-[#C99A2E]/40 bg-[#FBF4E4] hover:bg-gradient-to-br hover:from-[#D5AA45] hover:to-[#C99A2E] hover:border-transparent hover:shadow-[0_8px_18px_-8px_rgba(201,154,46,0.7)] active:scale-[0.98] text-[#0B1D3A]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1">
                {requested ? "Request Sent" : "Request"}
                {requested ? (
                  <Check size={14} strokeWidth={2.5} />
                ) : (
                  <span className="relative w-0 group-hover/rq:w-3.5 h-3.5 flex items-center justify-center transition-all duration-300 overflow-hidden opacity-0 group-hover/rq:opacity-100 group-hover/rq:ml-1">
                    <Send size={13} strokeWidth={2.5} className="shrink-0 transition-transform duration-300 -translate-x-1 translate-y-1 group-hover/rq:translate-x-0 group-hover/rq:translate-y-0" />
                  </span>
                )}
              </span>
              {!requested && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/rq:translate-x-full transition-transform duration-700 pointer-events-none" />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
