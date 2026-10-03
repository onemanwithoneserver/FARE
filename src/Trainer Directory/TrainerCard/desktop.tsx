import { useState } from "react";
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
  MonitorPlay,
  Check,
  Send,
} from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export type TrainerCardLayout = "grid" | "list";

export interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
  layoutVariant?: TrainerCardLayout;
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

function Avatar({ trainer, size }: { trainer: Trainer; size: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {/* gold ring */}
      <div
        className="absolute -inset-[3px] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `conic-gradient(from 210deg, ${GOLD_MID}, #F3DFA6, ${GOLD}, ${GOLD_MID})` }}
      />
      <div className="absolute inset-0 rounded-full bg-white p-[3px]">
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            loading="lazy"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-white font-black"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E3A66 100%)`, fontSize: size / 3 }}
          >
            {getInitials(trainer.name)}
          </div>
        )}
      </div>
      {trainer.verified && (
        <div
          className="absolute bottom-0 right-0 w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_10px_-2px_rgba(11,29,58,0.25)]"
          title="FARE Verified"
        >
          <BadgeCheck size={18} strokeWidth={2.4} style={{ color: GOLD }} />
        </div>
      )}
    </div>
  );
}

function AvailabilityPill({ value }: { value: Trainer["availability"] }) {
  const s = AVAILABILITY_STYLES[value];
  return (
    <span
      className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full text-[11px] font-bold tracking-wide whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}
    >
      <span className="relative flex w-1.5 h-1.5">
        {value === "Available" && (
          <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping" style={{ background: s.dot }} />
        )}
        <span className="relative inline-flex w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
      </span>
      {s.label}
    </span>
  );
}

function Actions({ onViewProfile, onRequest, requested }: { onViewProfile: () => void; onRequest?: () => void; requested?: boolean }) {
  return (
    <div className="flex items-center gap-2 justify-between mt-2">
      <button
        onClick={onViewProfile}
        className="group/vp px-4 h-9 rounded-lg text-[13px] font-bold flex items-center justify-center gap-1 text-white transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.6)]"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
      >
        View Profile
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
        className={`group/rq px-4 h-9 rounded-lg text-[13px] font-bold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 ${
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
  );
}

function Stats({ trainer }: { trainer: Trainer }) {
  const stats = [
    { icon: <Briefcase size={13} strokeWidth={2.4} />, value: `${trainer.industryExperience}+`, label: "Yrs Industry", color: "#4F46E5", bg: "#EEF0FF" },
    { icon: <GraduationCap size={14} strokeWidth={2.4} />, value: `${trainer.trainingExperience}+`, label: "Yrs Training", color: GOLD, bg: "#FBF4E4" },
    { icon: <Languages size={13} strokeWidth={2.4} />, value: `${trainer.languages.length}`, label: "Languages", color: "#059669", bg: "#E7F7F0" },
  ];
  return (
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
          <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7B8DAA] whitespace-nowrap">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExpertiseTags({ trainer, max = 2 }: { trainer: Trainer; max?: number }) {
  return (
    <div className="flex flex-nowrap gap-1.5 overflow-hidden">
      {trainer.expertise.slice(0, max).map((e) => (
        <span
          key={e}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FBF4E4] text-[#8A6516] border border-[#C99A2E]/20 whitespace-nowrap truncate max-w-[60%]"
        >
          {e}
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

function SegmentLine({ trainer }: { trainer: Trainer }) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-semibold text-[#0B1D3A]/70 truncate">
      {trainer.segments.map((s, i) => (
        <span key={s} className="flex items-center gap-2 whitespace-nowrap">
          {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C99A2E]/60" />}
          {s}
        </span>
      ))}
    </div>
  );
}

const cardShell =
  "group relative h-full bg-white rounded-2xl font-['Outfit'] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] hover:shadow-[0_4px_10px_-4px_rgba(11,29,58,0.08),0_28px_56px_-18px_rgba(11,29,58,0.25)] hover:border-[#C99A2E]/35 transition-[box-shadow,border-color] duration-500 overflow-hidden";

export default function Desktop({ trainer, onViewProfile, layoutVariant = "grid" }: TrainerCardProps) {
  const [requested, setRequested] = useState(false);
  const handleRequest = () => setRequested(true);

  /* ───────────────────────── LIST VIEW ───────────────────────── */
  if (layoutVariant === "list") {
    return (
      <motion.article
        whileHover={{ y: -3, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
        className={`${cardShell} flex items-stretch`}
      >
        <span aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-gradient-to-b from-[#D5AA45] to-[#C99A2E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* identity */}
        <div className="flex items-center gap-5 p-6 w-[38%] min-w-0">
          <Avatar trainer={trainer} size={84} />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <AvailabilityPill value={trainer.availability} />
            </div>
            <h3 className="text-[19px] font-black leading-tight tracking-tight truncate" style={{ color: NAVY }}>
              {trainer.name}
            </h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-snug mt-0.5 line-clamp-1">{trainer.title}</p>
            <div className="flex items-center gap-1.5 mt-2 text-[12px] text-[#7B8DAA] font-medium">
              <MapPin size={12} strokeWidth={2.5} />
              <span className="truncate">{trainer.location}</span>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-3 py-6 pr-6 border-l border-dashed border-[#0B1D3A]/10 pl-6">
          <p className="text-[13px] text-[#5A6B82] leading-relaxed line-clamp-2">{trainer.positioning}</p>
          <ExpertiseTags trainer={trainer} max={3} />
          <SegmentLine trainer={trainer} />
        </div>

        {/* meta + actions */}
        <div className="w-[260px] shrink-0 flex flex-col justify-center gap-4 p-6 bg-[#F9FAFC] border-l border-[#0B1D3A]/[0.05]">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[18px] font-black leading-none" style={{ color: NAVY }}>{trainer.industryExperience}+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] mt-1">Yrs Industry</div>
            </div>
            <div>
              <div className="text-[18px] font-black leading-none" style={{ color: NAVY }}>{trainer.trainingExperience}+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] mt-1">Yrs Training</div>
            </div>
          </div>
          <div className="text-[12px] font-bold" style={{ color: GOLD }}>{trainer.pricing}</div>
          <div className="flex flex-col gap-2">
            <Actions onViewProfile={onViewProfile} onRequest={handleRequest} requested={requested} />
          </div>
        </div>
      </motion.article>
    );
  }

  /* ───────────────────────── GRID VIEW ───────────────────────── */
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`${cardShell} flex flex-col`}
    >
      {/* Cover band */}
      <div
        className="relative h-[92px] shrink-0 overflow-hidden"
        style={{ background: `linear-gradient(120deg, ${NAVY} 0%, #15315C 55%, #1E3F72 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
        />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C99A2E]/30 blur-3xl group-hover:bg-[#C99A2E]/45 transition-colors duration-700" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D5AA45]/70 to-transparent" />

        <div className="absolute top-3.5 right-3.5">
          <AvailabilityPill value={trainer.availability} />
        </div>
        {trainer.verified && (
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1 h-6 pl-1.5 pr-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <BadgeCheck size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/90">FARE Verified</span>
          </div>
        )}
      </div>

      <div className="relative flex flex-col flex-1 px-5 pb-5">
        {/* avatar overlapping band */}
        <div className="-mt-11 mb-3">
          <Avatar trainer={trainer} size={88} />
        </div>

        {/* identity — fixed heights keep every card aligned */}
        <div className="min-h-[64px]">
          <h3 className="text-[19px] font-black leading-tight tracking-tight truncate" style={{ color: NAVY }}>
            {trainer.name}
          </h3>
          <p className="text-[13px] text-[#5A6B82] font-medium leading-snug mt-0.5 line-clamp-1">{trainer.title}</p>
          <div className="flex items-center gap-3 mt-1.5 text-[12px] text-[#7B8DAA] font-medium">
            <span className="flex items-center gap-1 truncate">
              <MapPin size={12} strokeWidth={2.5} />
              {trainer.location}
            </span>
            <span className="flex items-center gap-1 shrink-0">
              <MonitorPlay size={12} strokeWidth={2.5} />
              {trainer.delivery.length > 2 ? "Hybrid" : trainer.delivery.join(" · ")}
            </span>
          </div>
        </div>

        <p className="text-[13px] text-[#5A6B82]/90 leading-relaxed mt-3 line-clamp-2 min-h-[40px]">{trainer.positioning}</p>

        <div className="mt-4">
          <Stats trainer={trainer} />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-1.5">Specialization</div>
            <ExpertiseTags trainer={trainer} />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-1.5">RE Segment</div>
            <SegmentLine trainer={trainer} />
          </div>
        </div>

        {/* footer pinned to bottom */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between pt-4 mb-3 border-t border-dashed border-[#0B1D3A]/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">Engagement</span>
            <span className="text-[12px] font-bold" style={{ color: GOLD }}>{trainer.pricing}</span>
          </div>
          <Actions onViewProfile={onViewProfile} onRequest={handleRequest} requested={requested} />
        </div>
      </div>
    </motion.article>
  );
}
