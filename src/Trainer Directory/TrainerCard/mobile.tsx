import { useState } from "react";
import type { Trainer } from "../listing_data";
import ambientTrainerVideo from "../../assets/FARE_Video.mp4";
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
  Play,
  X,
} from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
}

const AVAILABILITY: Record<Trainer["availability"], { dot: string; text: string; bg: string; label: string }> = {
  Available: { dot: "#10B981", text: "#047857", bg: "#ECFDF5", label: "Available" },
  "Limited Availability": { dot: "#F59E0B", text: "#B45309", bg: "#FFFBEB", label: "Limited" },
  "On Request": { dot: "#94A3B8", text: "#475569", bg: "#F1F5F9", label: "On Request" },
};

function TrainerPhotoHero({
  trainer,
  isIntroVideoOpen,
  onToggleIntroVideo,
}: {
  trainer: Trainer;
  isIntroVideoOpen: boolean;
  onToggleIntroVideo: () => void;
}) {
  const availability = AVAILABILITY[trainer.availability];

  return (
    <div className="relative h-[150px] shrink-0 overflow-hidden bg-[#0B1D3A]">
      {isIntroVideoOpen ? (
        <video
          src={trainer.introVideoUrl ?? ambientTrainerVideo}
          poster={trainer.image}
          controls
          autoPlay
          playsInline
          aria-label={`${trainer.name} introduction video`}
          className="absolute inset-0 h-full w-full object-cover"
          onEnded={onToggleIntroVideo}
        />
      ) : (
        <>
          {trainer.image ? (
            <img
              src={trainer.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] to-[#1E3F72]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030816]/50 via-[#030816]/15 to-[#030816]/60" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "12px 12px" }}
          />
          <button
            type="button"
            onClick={onToggleIntroVideo}
            aria-label={`Play ${trainer.name}'s introduction video`}
            className="absolute inset-0 z-10 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D5AA45]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0B1D3A] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] ring-4 ring-white/25 transition-transform group-active:scale-95">
              <Play size={16} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
          <span
            className="pointer-events-none absolute left-3 top-3 z-20 inline-flex h-[22px] items-center gap-1.5 rounded-full px-2 text-[10px] font-bold"
            style={{ background: availability.bg, color: availability.text }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: availability.dot }} />
            {availability.label}
          </span>
        </>
      )}
      {isIntroVideoOpen && (
        <button
          type="button"
          onClick={onToggleIntroVideo}
          aria-label="Close video"
          className="absolute right-2 top-2 z-20 rounded-full bg-black/65 p-1.5 text-white shadow"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

function TrainerPortrait({ trainer, size }: { trainer: Trainer; size: number }) {
  const initials = trainer.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

  return (
    <div className="relative shrink-0 rounded-[4px] bg-white p-0.5 shadow-[0_12px_28px_-10px_rgba(11,29,58,0.5)] ring-1 ring-[#C99A2E]/40" style={{ width: size, height: size }}>
          <div className="h-full w-full overflow-hidden rounded-[2px] bg-[#0B1D3A]">
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} loading="lazy" className="h-full w-full object-cover object-[center_30%]" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xl font-black text-white">{initials}</div>
        )}
      </div>
      {trainer.verified && (
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB] shadow-sm ring-1 ring-white">
          <BadgeCheck size={11} strokeWidth={2.8} style={{ color: "#FFFFFF" }} />
        </span>
      )}
    </div>
  );
}

export default function Mobile({ trainer, onViewProfile }: TrainerCardProps) {
  const [requested, setRequested] = useState(false);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);
  const handleRequest = () => setRequested(true);
  const toggleIntroVideo = () => setIsIntroVideoOpen((open) => !open);
  const stats = [
    { icon: <Briefcase size={12} strokeWidth={2.4} />, value: `${trainer.industryExperience}+`, label: "Yrs Industry", color: "#4F46E5", bg: "#EEF0FF" },
    { icon: <GraduationCap size={13} strokeWidth={2.4} />, value: `${trainer.trainingExperience}+`, label: "Yrs Training", color: GOLD, bg: "#FBF4E4" },
    { icon: <Languages size={12} strokeWidth={2.4} />, value: `${trainer.languages.length}`, label: "Languages", color: "#059669", bg: "#E7F7F0" },
  ];

  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] active:scale-[0.99] transition-transform duration-200 overflow-hidden">
      <TrainerPhotoHero
        trainer={trainer}
        isIntroVideoOpen={isIntroVideoOpen}
        onToggleIntroVideo={toggleIntroVideo}
      />

      <div className="flex flex-col flex-1 p-4">
        <div className="-mt-12 mb-3 relative z-10 flex items-end gap-3">
          <TrainerPortrait trainer={trainer} size={96} />
          <div className="min-w-0 flex-1 pb-0.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-semibold text-[#5A6B82]">
              <MapPin size={10} strokeWidth={2.5} style={{ color: GOLD }} />
              {trainer.location.split(",")[0]}
            </span>
            <h3 className="mt-1.5 truncate text-[18px] font-black leading-tight tracking-tight" style={{ color: NAVY }}>
              {trainer.name}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-[12px] font-medium leading-snug text-[#5A6B82]">{trainer.title}</p>
          </div>
        </div>

        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-[#5A6B82]/90">{trainer.positioning}</p>

        <div className="mt-3 grid grid-cols-3 rounded-lg border border-[#0B1D3A]/[0.05] bg-[#F7F9FC] divide-x divide-[#0B1D3A]/[0.06]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md shadow-sm" style={{ background: stat.color, color: "#FFFFFF" }}>
                {stat.icon}
              </span>
              <span className="text-[13px] font-black leading-none" style={{ color: NAVY }}>{stat.value}</span>
              <span className="text-[7px] font-semibold uppercase tracking-[0.08em] text-[#7B8DAA]">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-3.5">
          <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">Specialization</div>
          <div className="flex flex-wrap gap-1">
            {trainer.expertise.slice(0, 2).map((expertise) => (
              <span
                key={expertise}
                className="rounded-full border border-[#C99A2E]/20 bg-[#FBF4E4] px-2 py-0.5 text-[10px] font-semibold text-[#8A6516]"
              >
                {expertise}
              </span>
            ))}
            {trainer.expertise.length > 2 && (
              <span className="rounded-full bg-[#F1F4F9] px-2 py-0.5 text-[10px] font-semibold text-[#5A6B82]">
                +{trainer.expertise.length - 2}
              </span>
            )}
          </div>
        </div>

        <div className="mt-3">
          <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">RE Segment</div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold text-[#475569]">
            {trainer.segments.map((segment, index) => (
              <span key={segment} className="inline-flex items-center gap-2">
                {index > 0 && <span className="h-1 w-1 rounded-full bg-[#C99A2E]" />}
                {segment}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-3.5">
          <div className="flex items-center justify-between pt-3 mb-3 border-t border-dashed border-[#0B1D3A]/10">
            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">Engagement</span>
            <span className="text-[11.5px] font-bold" style={{ color: GOLD }}>{trainer.pricing}</span>
          </div>
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              onClick={onViewProfile}
              className="group/vp px-4 h-9 rounded-xl text-[12.5px] font-bold flex items-center justify-center gap-1 text-white shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
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
              className={`group/rq px-4 h-9 rounded-xl text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 ${
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
