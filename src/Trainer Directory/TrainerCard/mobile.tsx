import type { Trainer } from "../listing_data";
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

export default function Mobile({ trainer, onViewProfile }: TrainerCardProps) {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);

  const stats = [
    {
      icon: <Briefcase size={12} strokeWidth={2.4} />,
      value: `${trainer.industryExperience}+`,
      label: "Industry",
      color: "#4F46E5",
      bg: "#EEF0FF",
    },
    {
      icon: <GraduationCap size={13} strokeWidth={2.4} />,
      value: `${trainer.trainingExperience}+`,
      label: "Training",
      color: GOLD,
      bg: "#FBF4E4",
    },
    {
      icon: <Languages size={12} strokeWidth={2.4} />,
      value: `${trainer.languages.length}`,
      label: "Languages",
      color: "#059669",
      bg: "#E7F7F0",
    },
  ];

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-2xl p-2 font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] active:scale-[0.99] transition-transform duration-200">
      <div className="relative overflow-hidden rounded-xl w-full aspect-[16/11] bg-[#EEF2F8]">
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-black"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E3A66 100%)` }}
          >
            {getInitials(trainer.name)}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/45 via-transparent to-transparent" />

        {trainer.verified && (
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 pl-1 pr-2 py-0.5 rounded-full bg-white/95 shadow-[0_4px_12px_-2px_rgba(11,29,58,0.2)]">
            <BadgeCheck size={12} strokeWidth={2.5} style={{ color: GOLD }} />
            <span className="text-[9px] font-bold tracking-[0.08em] uppercase" style={{ color: NAVY }}>
              FARE Verified
            </span>
          </div>
        )}

        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
          <MapPin size={10} strokeWidth={2.5} className="text-white" />
          <span className="text-[9.5px] font-semibold text-white">{trainer.location}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-2 pt-3.5 pb-1 gap-3.5">
        <div>
          <h3 className="text-[17px] font-black leading-tight tracking-tight truncate" style={{ color: NAVY }}>
            {trainer.name}
          </h3>
          <p className="text-[12.5px] text-[#5A6B82] font-medium leading-snug mt-0.5 line-clamp-1">
            {trainer.title}
          </p>
        </div>

        <div className="grid grid-cols-3 rounded-xl bg-[#F7F9FC] border border-[#0B1D3A]/[0.05] divide-x divide-[#0B1D3A]/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-2.5 gap-1">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="text-[14px] font-black leading-none" style={{ color: NAVY }}>
                {s.value}
              </div>
              <div className="text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[#7B8DAA]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 flex-1">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-1.5">
              Specialization
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.expertise.slice(0, 3).map((e) => (
                <span
                  key={e}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/20"
                >
                  {e}
                </span>
              ))}
              {trainer.expertise.length > 3 && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F1F4F9] text-[#5A6B82]">
                  +{trainer.expertise.length - 3}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-1.5">
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.segments.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F1F4F9] text-[#0B1D3A]/75"
                >
                  <span className="w-1 h-1 rounded-full bg-[#4F46E5]/60" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-dashed border-[#0B1D3A]/10">
          <button
            onClick={onViewProfile}
            className="group/vp flex-1 h-9 rounded-xl text-[12px] font-bold flex items-center justify-center gap-1 bg-white border border-[#0B1D3A]/10 hover:bg-[#0B1D3A] hover:text-white active:bg-[#0B1D3A] active:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            style={{ color: NAVY }}
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
            className="flex-1 h-9 rounded-xl text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-[0_6px_16px_-6px_rgba(201,154,46,0.6)] active:scale-[0.97] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`, color: NAVY }}
          >
            Request
            <Send size={12} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
