import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Video, Building2, Layers, PlayCircle } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'video': return <Video size={16} strokeWidth={2.2} />;
      case 'building': return <Building2 size={16} strokeWidth={2.2} />;
      case 'blend': return <Layers size={16} strokeWidth={2.2} />;
      case 'play': return <PlayCircle size={16} strokeWidth={2.2} />;
      default: return <Video size={16} strokeWidth={2.2} />;
    }
  };

  const modeColors = [
    { bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)", accent: "#3B82F6" },
    { bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, accent: GOLD },
    { bg: "linear-gradient(135deg, #10B981, #059669)", accent: "#10B981" },
    { bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)", accent: "#8B5CF6" },
  ];

  return (
    <section
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full flex flex-col gap-8"
      >
        <div>
          <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Delivery</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {data.delivery.modes.map((mode, idx) => {
              const colors = modeColors[idx % modeColors.length];
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className={`bg-white/90 backdrop-blur-xl rounded-2xl p-4 border relative overflow-hidden flex flex-col shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] ${
                    mode.disabled
                      ? "opacity-50 border-[#0B1D3A]/[0.04]"
                      : "border-[#0B1D3A]/[0.06]"
                  }`}
                >
                  {!mode.disabled && (
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: colors.bg }}
                    />
                  )}
                  <div
                    className="w-8 h-8 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-2"
                    style={{ background: mode.disabled ? "#CBD5E1" : colors.bg }}
                  >
                    {getIcon(mode.icon)}
                  </div>
                  <h4 className="text-[12px] font-bold mb-1" style={{ color: NAVY }}>{mode.name}</h4>
                  <p className="text-[10px] text-[#7B8DAA] leading-relaxed font-medium">{mode.description}</p>
                  {mode.disabled && (
                    <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]">Coming Soon</span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            <motion.div
              variants={item}
              className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-4 flex flex-col gap-2.5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
            >
              <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Formats</h4>
              <div className="flex flex-wrap gap-1.5">
                {data.delivery.formats.map((fmt, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/75"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={item}
              className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-4 flex flex-col gap-2.5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
            >
              <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Durations</h4>
              <div className="flex flex-wrap gap-1.5">
                {data.delivery.durations.map((dur, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/75"
                  >
                    {dur}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
