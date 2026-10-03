import type { Trainer } from "../listing_data";
import { motion } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Send,
  MapPin,
} from "lucide-react";

const NAVY = "#0B1D3A";
const NAVY_DEEP = "#071428";
const NAVY_MID = "#0F2847";
const GOLD = "#C99A2E";
const GOLD_LIGHT = "#E8C469";
const GOLD_MID = "#D5AA45";

export interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
  layoutVariant?: "full" | "half" | "third";
}

export default function Mobile({ trainer, onViewProfile }: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <motion.div
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl font-['Outfit'] transition-all duration-300 ease-out active:scale-[0.99]"
      style={{
        background: `linear-gradient(145deg, ${NAVY} 0%, ${NAVY_DEEP} 60%, ${NAVY_MID} 100%)`,
      }}
    >
      
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      
      <div
        className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, ${GOLD}50, transparent 70%)`,
        }}
      />

      
      <div className="relative overflow-hidden shrink-0 w-full aspect-[4/3]">
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white/80 text-4xl font-black"
            style={{
              background: `linear-gradient(135deg, ${NAVY_MID} 0%, ${NAVY} 100%)`,
            }}
          >
            {getInitials(trainer.name)}
          </div>
        )}

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#071428]/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/30 to-transparent opacity-50" />

        
        <div
          className="absolute bottom-0 right-0 w-[200%] h-[2px] origin-bottom-right rotate-[-25deg] opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />

        
        {trainer.verified && (
          <div
            className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full shadow-lg backdrop-blur-md"
            style={{
              background: "rgba(201, 154, 46, 0.15)",
              border: `1px solid ${GOLD}40`,
            }}
          >
            <ShieldCheck
              size={10}
              strokeWidth={2.5}
              style={{ color: GOLD_LIGHT }}
            />
            <span
              className="text-[8px] font-bold tracking-[0.12em] uppercase"
              style={{ color: GOLD_LIGHT }}
            >
              Verified
            </span>
          </div>
        )}

        
        <div
          className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <MapPin size={9} strokeWidth={2.5} className="text-[#F59E0B]" />
          <span className="text-[8px] font-semibold text-white/70 tracking-wide">
            {trainer.location}
          </span>
        </div>
      </div>

      
      <div className="relative z-10 p-4 flex flex-col flex-1 gap-3.5">
        
        <div>
          <h3 className="text-[16px] font-black leading-tight tracking-tight text-white truncate">
            {trainer.name}
          </h3>
          <p className="text-[12px] text-white/45 leading-snug font-medium line-clamp-2 mt-0.5">
            {trainer.title}
          </p>
        </div>

        
        <div className="flex gap-2">
          <div
            className="flex items-center gap-2 flex-1 px-2.5 py-2 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-md"
              style={{
                background: `linear-gradient(135deg, #6366F1, #4F46E5)`,
              }}
            >
              <Briefcase size={12} strokeWidth={2.5} className="text-white" />
            </div>
            <div>
              <div className="text-[13px] font-black leading-none text-white tracking-tight">
                {trainer.industryExperience}
                <span className="text-[10px] font-bold text-white/40">y</span>
              </div>
              <div className="text-[8px] font-semibold text-white/30 uppercase tracking-[0.12em] mt-0.5">
                Industry
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-2 flex-1 px-2.5 py-2 rounded-xl"
            style={{
              background: `rgba(201, 154, 46, 0.06)`,
              border: `1px solid ${GOLD}15`,
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-md"
              style={{
                background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
              }}
            >
              <GraduationCap
                size={12}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>
            <div>
              <div
                className="text-[13px] font-black leading-none tracking-tight"
                style={{ color: GOLD_LIGHT }}
              >
                {trainer.trainingExperience}
                <span
                  className="text-[10px] font-bold"
                  style={{ color: `${GOLD_LIGHT}70` }}
                >
                  y
                </span>
              </div>
              <div className="text-[8px] font-semibold text-white/30 uppercase tracking-[0.12em] mt-0.5">
                Training
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-2.5 flex-1">
          <div>
            <div className="text-[8px] font-bold text-white/25 uppercase tracking-[0.15em] mb-1 flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: GOLD }}
              />
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.segments.map((e) => (
                <div
                  key={e}
                  className="text-[9px] font-bold px-2 py-[2px] rounded-md text-white/55"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[8px] font-bold text-white/25 uppercase tracking-[0.15em] mb-1 flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "#6366F1" }}
              />
              Specialization
            </div>
            <div className="flex flex-wrap gap-1">
              {trainer.expertise.slice(0, 3).map((e) => (
                <div
                  key={e}
                  className="text-[9px] font-bold px-2 py-[2px] rounded-md"
                  style={{
                    background: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    color: "rgba(165, 168, 255, 0.65)",
                  }}
                >
                  {e}
                </div>
              ))}
              {trainer.expertise.length > 3 && (
                <div
                  className="text-[9px] font-bold px-2 py-[2px] rounded-md text-white/25"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  +{trainer.expertise.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>

        
        <div
          className="flex items-center gap-2 pt-3 mt-1"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <button
            onClick={onViewProfile}
            className="flex-1 font-bold text-[11px] py-2 rounded-lg transition-all duration-300 ease-out flex items-center justify-center gap-1.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            style={{
              color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            Profile{" "}
            <ArrowRight
              size={12}
              strokeWidth={2.5}
              style={{ color: GOLD_MID }}
            />
          </button>
          <button
            className="flex-1 font-bold text-[11px] py-2 rounded-lg transition-all duration-300 ease-out shadow-[0_4px_16px_-4px_rgba(201,154,46,0.35)] relative overflow-hidden group/btn active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            style={{
              background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 100%)`,
              color: NAVY,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover/btn:-translate-x-0.5">
              Request
              <Send
                size={11}
                strokeWidth={2.5}
                className="opacity-0 w-0 -translate-x-2 group-hover/btn:w-auto group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </div>
      </div>

      
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-40"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}80, transparent)`,
        }}
      />
    </motion.div>
  );
}
