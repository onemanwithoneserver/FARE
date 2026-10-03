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

export default function Desktop({
  trainer,
  onViewProfile,
  layoutVariant = "third",
}: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);
  };

  const isFull = layoutVariant === "full";

  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`group relative flex ${
        isFull ? "flex-row" : "flex-col"
      } h-full cursor-default overflow-hidden rounded-2xl font-['Outfit']`}
      style={{
        background: `linear-gradient(145deg, ${NAVY} 0%, ${NAVY_DEEP} 60%, ${NAVY_MID} 100%)`,
      }}
    >
      
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-[1px]"
        style={{
          background: `linear-gradient(135deg, ${GOLD}80, ${GOLD_LIGHT}60, ${GOLD}40, transparent 60%)`,
        }}
      />

      
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${GOLD}50, transparent 70%)`,
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, #6366F150, transparent 70%)`,
        }}
      />

      
      <div
        className={`relative overflow-hidden shrink-0 ${
          isFull ? "w-[300px]" : "w-full aspect-[4/3]"
        }`}
      >
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white/80 text-5xl font-black group-hover:scale-110 transition-transform duration-[900ms] ease-out"
            style={{
              background: `linear-gradient(135deg, ${NAVY_MID} 0%, ${NAVY} 100%)`,
            }}
          >
            {getInitials(trainer.name)}
          </div>
        )}

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#071428]/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/40 to-transparent opacity-60" />

        
        <div
          className="absolute bottom-0 right-0 w-[200%] h-[3px] origin-bottom-right rotate-[-25deg] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />

        
        {trainer.verified && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "rgba(201, 154, 46, 0.15)",
              border: `1px solid ${GOLD}40`,
            }}
          >
            <ShieldCheck
              size={12}
              strokeWidth={2.5}
              style={{ color: GOLD_LIGHT }}
            />
            <span
              className="text-[9px] font-bold tracking-[0.12em] uppercase"
              style={{ color: GOLD_LIGHT }}
            >
              Verified
            </span>
          </div>
        )}

        
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <MapPin size={10} strokeWidth={2.5} className="text-[#F59E0B]" />
          <span className="text-[9px] font-semibold text-white/70 tracking-wide">
            {trainer.location}
          </span>
        </div>
      </div>

      
      <div
        className={`relative z-10 p-5 flex flex-col flex-1 ${
          isFull ? "gap-5 p-7" : "gap-4"
        }`}
      >
        
        <div>
          <h3
            className={`font-black leading-tight tracking-tight text-white ${
              isFull ? "text-[22px]" : "text-[18px]"
            }`}
          >
            {trainer.name}
          </h3>
          <p className="text-[13px] text-white/50 leading-snug font-medium line-clamp-2 mt-1">
            {trainer.title}
          </p>
        </div>

        
        <div className="flex gap-2.5">
          <div
            className="flex items-center gap-2.5 flex-1 px-3 py-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/[0.06]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
              style={{
                background: `linear-gradient(135deg, #6366F1, #4F46E5)`,
              }}
            >
              <Briefcase size={14} strokeWidth={2.5} className="text-white" />
            </div>
            <div>
              <div className="text-[15px] font-black leading-none text-white tracking-tight">
                {trainer.industryExperience}{" "}
                <span className="text-[11px] font-bold text-white/40">Yrs</span>
              </div>
              <div className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.12em] mt-0.5">
                Industry
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-2.5 flex-1 px-3 py-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/[0.06]"
            style={{
              background: `rgba(201, 154, 46, 0.06)`,
              border: `1px solid ${GOLD}15`,
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
              }}
            >
              <GraduationCap
                size={14}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>
            <div>
              <div
                className="text-[15px] font-black leading-none tracking-tight"
                style={{ color: GOLD_LIGHT }}
              >
                {trainer.trainingExperience}{" "}
                <span className="text-[11px] font-bold" style={{ color: `${GOLD_LIGHT}70` }}>
                  Yrs
                </span>
              </div>
              <div className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.12em] mt-0.5">
                Training
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-3 flex-1">
          
          <div>
            <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: GOLD }}
              />
              RE Segment
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.segments.map((e) => (
                <div
                  key={e}
                  className="text-[10px] font-bold px-2.5 py-[3px] rounded-md text-white/60 transition-colors duration-300 group-hover:text-white/80"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "#6366F1" }}
              />
              Specialization
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trainer.expertise.slice(0, 3).map((e) => (
                <div
                  key={e}
                  className="text-[10px] font-bold px-2.5 py-[3px] rounded-md transition-colors duration-300 group-hover:text-white/80"
                  style={{
                    background: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    color: "rgba(165, 168, 255, 0.7)",
                  }}
                >
                  {e}
                </div>
              ))}
              {trainer.expertise.length > 3 && (
                <div
                  className="text-[10px] font-bold px-2.5 py-[3px] rounded-md text-white/30"
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
          className={`pt-4 flex gap-2.5 ${isFull ? "mt-auto" : "mt-1"}`}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <button
            onClick={onViewProfile}
            className={`${
              isFull ? "px-8" : "flex-1"
            } font-bold text-[12px] py-2.5 rounded-lg transition-all duration-300 ease-out flex items-center justify-center gap-1.5 hover:bg-white/[0.08] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 relative overflow-hidden`}
            style={{
              color: "rgba(255,255,255,0.7)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            View Profile{" "}
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
              style={{ color: GOLD_MID }}
            />
          </button>
          <button
            className={`${
              isFull ? "px-8" : "flex-1"
            } text-[${NAVY}] font-bold text-[12px] py-2.5 rounded-lg transition-all duration-300 ease-out shadow-[0_4px_16px_-4px_rgba(201,154,46,0.4)] hover:shadow-[0_8px_24px_-4px_rgba(201,154,46,0.5)] relative overflow-hidden group/btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50`}
            style={{
              background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 100%)`,
              color: NAVY,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover/btn:-translate-x-0.5">
              Request
              <Send
                size={12}
                strokeWidth={2.5}
                className="opacity-0 w-0 -translate-x-2 group-hover/btn:w-auto group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300"
              />
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </div>
      </div>

      
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        }}
      />
    </motion.div>
  );
}
