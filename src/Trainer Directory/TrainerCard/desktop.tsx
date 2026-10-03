import { useState } from "react";
import type { Trainer } from "../listing_data";
import { motion } from "motion/react";
import ambientTrainerVideo from "../../assets/FARE_Video.mp4";
import { useLanguage } from "../../context/LanguageContext";
import { translateDirectoryText } from "../translations";
import {
  BadgeCheck,
  ArrowRight,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Languages,
  MapPin,
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

const AVAILABILITY_STYLES: Record<Trainer["availability"], { dot: string; text: string; bg: string; label: string }> = {
  Available: { dot: "#10B981", text: "#047857", bg: "#ECFDF5", label: "Available" },
  "Limited Availability": { dot: "#F59E0B", text: "#B45309", bg: "#FFFBEB", label: "Limited" },
  "On Request": { dot: "#94A3B8", text: "#475569", bg: "#F1F5F9", label: "On Request" },
};

export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

function AvailabilityPill({ value }: { value: Trainer["availability"] }) {
  const { language } = useLanguage();
  const s = AVAILABILITY_STYLES[value];
  return (
    <span
      className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full text-[10.5px] font-bold tracking-wide whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}
    >
      <span className="relative flex w-1.5 h-1.5">
        {value === "Available" && (
          <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping" style={{ background: s.dot }} />
        )}
        <span className="relative inline-flex w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
      </span>
      {translateDirectoryText(s.label, language)}
    </span>
  );
}

function TrainerPhotoHero({
  trainer,
  className,
  isIntroVideoOpen,
  onToggleIntroVideo,
}: {
  trainer: Trainer;
  className: string;
  isIntroVideoOpen: boolean;
  onToggleIntroVideo: () => void;
}) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  return (
    <div className={`relative shrink-0 overflow-hidden bg-[#0B1D3A] ${className}`}>
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
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
          />
          <button
            type="button"
            onClick={onToggleIntroVideo}
            aria-label={`${t("Play introduction video")}: ${trainer.name}`}
            className="absolute inset-0 z-10 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D5AA45]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0B1D3A] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] ring-4 ring-white/25 transition-transform group-hover:scale-110">
              <Play size={18} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
          <div className="pointer-events-none absolute left-4 top-4 z-20">
            <AvailabilityPill value={trainer.availability} />
          </div>
        </>
      )}
      {isIntroVideoOpen && (
        <button
          type="button"
          onClick={onToggleIntroVideo}
          aria-label={t("Close video")}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/65 p-2 text-white shadow"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

function TrainerPortrait({ trainer, size }: { trainer: Trainer; size: number }) {
  return (
    <div className="relative shrink-0     rounded-[4px] bg-white p-0.5 shadow-[0_12px_28px_-10px_rgba(11,29,58,0.5)] ring-1 ring-[#C99A2E]/40" style={{ width: size, height: size }}>
          <div className="h-full w-full overflow-hidden rounded-[2px] bg-[#0B1D3A]">
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} loading="lazy" className="h-full w-full object-cover object-[center_30%]" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-black text-white">
            {getInitials(trainer.name)}
          </div>
        )}
      </div>
      {trainer.verified && (
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] shadow-sm ring-1 ring-white">
          <BadgeCheck size={13} strokeWidth={2.8} style={{ color: "#FFFFFF" }} />
        </span>
      )}
    </div>
  );
}

function Actions({ onViewProfile, onRequest, requested }: { onViewProfile: () => void; onRequest?: () => void; requested?: boolean }) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  return (
    <div className="flex items-center gap-2 justify-between mt-2">
      <button
        onClick={onViewProfile}
        className="group/vp px-4 h-9 rounded-lg text-[12.5px] font-bold flex items-center justify-center gap-1 text-white transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.6)]"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
      >
        {t("View Profile")}
        <span className="relative w-3.5 h-3.5 inline-flex items-center justify-center">
          <ChevronRight
            size={14}
            strokeWidth={2.6}
            className="absolute transition-all duration-300 opacity-100 translate-x-0 group-hover/vp:opacity-0 group-hover/vp:translate-x-1"
          />
          <ArrowRight
            size={14}
            strokeWidth={2.6}
            className="absolute transition-all duration-300 opacity-0 -translate-x-1 group-hover/vp:opacity-100 group-hover/vp:translate-x-0.5"
            style={{ color: GOLD_MID }}
          />
        </span>
      </button>

      <button
        onClick={() => !requested && onRequest?.()}
        className={`group/rq px-4 h-9 rounded-lg text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 ${
          requested
            ? "bg-[#E7F7F0] border border-[#059669]/30 text-[#059669] cursor-default"
            : "relative overflow-hidden border border-[#C99A2E]/40 bg-[#FBF4E4] hover:bg-gradient-to-br hover:from-[#D5AA45] hover:to-[#C99A2E] hover:border-transparent hover:shadow-[0_8px_18px_-8px_rgba(201,154,46,0.7)] active:scale-[0.98] text-[#0B1D3A]"
        }`}
      >
        <span className="relative z-10 flex items-center gap-1">
          {requested ? t("Request Sent") : t("Request")}
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
  );
}

function ExpertiseTags({ trainer, max = 2 }: { trainer: Trainer; max?: number }) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-nowrap gap-1.5 overflow-hidden">
      {trainer.expertise.slice(0, max).map((e) => (
        <span
          key={e}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/20 whitespace-nowrap truncate max-w-[60%]"
        >
          {translateDirectoryText(e, language)}
        </span>
      ))}
      {trainer.expertise.length > max && (
        <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F1F4F9] text-[#5A6B82]">
          +{trainer.expertise.length - max}
        </span>
      )}
    </div>
  );
}

function TrainerStats({ trainer }: { trainer: Trainer }) {
  const { language } = useLanguage();
  const stats = [
    { icon: <Briefcase size={13} strokeWidth={2.4} />, value: `${trainer.industryExperience}+`, label: "Yrs Industry", color: "#4F46E5", bg: "#EEF0FF" },
    { icon: <GraduationCap size={14} strokeWidth={2.4} />, value: `${trainer.trainingExperience}+`, label: "Yrs Training", color: GOLD, bg: "#FBF4E4" },
    { icon: <Languages size={13} strokeWidth={2.4} />, value: `${trainer.languages.length}`, label: "Languages", color: "#059669", bg: "#E7F7F0" },
  ];

  return (
    <div className="grid grid-cols-3 rounded-lg border border-[#0B1D3A]/[0.06] bg-[#F7F9FC] divide-x divide-[#0B1D3A]/[0.06]">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center justify-center gap-2 py-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md shadow-sm" style={{ background: stat.color, color: "#FFFFFF" }}>
            {stat.icon}
          </span>
          <span className="min-w-0">
            <span className="block text-[14px] font-black leading-none" style={{ color: NAVY }}>{stat.value}</span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.08em] text-[#7B8DAA]">{translateDirectoryText(stat.label, language)}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function SegmentLine({ trainer }: { trainer: Trainer }) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-[#475569]">
      {trainer.segments.map((segment, index) => (
        <span key={segment} className="inline-flex items-center gap-2">
          {index > 0 && <span className="h-1 w-1 rounded-full bg-[#C99A2E]" />}
          {translateDirectoryText(segment, language)}
        </span>
      ))}
    </div>
  );
}

const cardShell =
  "group relative h-full bg-white rounded-2xl font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] hover:shadow-[0_4px_10px_-4px_rgba(11,29,58,0.08),0_28px_56px_-18px_rgba(11,29,58,0.25)] hover:border-[#C99A2E]/35 transition-[box-shadow,border-color] duration-500 overflow-hidden";

export default function Desktop({ trainer, onViewProfile }: TrainerCardProps) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  const [requested, setRequested] = useState(false);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);
  const handleRequest = () => setRequested(true);
  const toggleIntroVideo = () => setIsIntroVideoOpen((open) => !open);

  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`${cardShell} flex flex-col`}
    >
      <TrainerPhotoHero
        trainer={trainer}
        className="w-full h-[180px]"
        isIntroVideoOpen={isIntroVideoOpen}
        onToggleIntroVideo={toggleIntroVideo}
      />

      <div className="relative flex flex-col flex-1 px-5 py-4">
        <div className="-mt-[64px] mb-3 relative z-10 flex items-end gap-4">
          <TrainerPortrait trainer={trainer} size={128} />
          <div className="min-w-0 flex-1 pb-0.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10.5px] font-semibold text-[#5A6B82]">
              <MapPin size={11} strokeWidth={2.5} style={{ color: GOLD }} />
              {t(trainer.location.split(",")[0])}
            </span>
            <h3 className="mt-1.5 text-[20px] font-black leading-tight tracking-tight truncate" style={{ color: NAVY }}>
              {trainer.name}
            </h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-snug mt-0.5 line-clamp-1">{t(trainer.title)}</p>
          </div>
        </div>

        <p className="text-[13px] text-[#5A6B82]/90 leading-relaxed mt-2 line-clamp-2">{t(trainer.positioning)}</p>
        <div className="mt-3">
          <TrainerStats trainer={trainer} />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div>
            <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">{t("Specialization")}</div>
            <ExpertiseTags trainer={trainer} max={2} />
          </div>
          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">{t("RE Segment")}</div>
            <SegmentLine trainer={trainer} />
          </div>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between pt-3 mb-3 border-t border-dashed border-[#0B1D3A]/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">{t("Engagement")}</span>
            <span className="text-[12px] font-bold" style={{ color: GOLD }}>{t(trainer.pricing)}</span>
          </div>
          <Actions onViewProfile={onViewProfile} onRequest={handleRequest} requested={requested} />
        </div>
      </div>
    </motion.article>
  );
}
