import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Video, Building2, Layers, PlayCircle } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'video': return <Video size={18} strokeWidth={2.2} />;
      case 'building': return <Building2 size={18} strokeWidth={2.2} />;
      case 'blend': return <Layers size={18} strokeWidth={2.2} />;
      case 'play': return <PlayCircle size={18} strokeWidth={2.2} />;
      default: return <Video size={18} strokeWidth={2.2} />;
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
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Delivery</h2>
        </motion.div>

                <div className="grid grid-cols-4 gap-4 mb-6">
          {data.delivery.modes.map((mode, idx) => {
            const colors = modeColors[idx % modeColors.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={mode.disabled ? undefined : { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className={`group bg-white/90 backdrop-blur-xl rounded p-5 border transition-all duration-400 relative overflow-hidden flex flex-col ${
                  mode.disabled
                    ? "opacity-40 border-[#0B1D3A]/[0.04]"
                    : "border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/18 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)]"
                }`}
              >
                {!mode.disabled && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}60)` }}
                  />
                )}
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: mode.disabled ? "#CBD5E1" : colors.bg }}
                >
                  {getIcon(mode.icon)}
                </div>
                <h4 className="text-[14px] font-bold mb-1.5" style={{ color: NAVY }}>{mode.name}</h4>
                <p className="text-[12px] text-[#7B8DAA] leading-relaxed font-medium">{mode.description}</p>
                {mode.disabled && (
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Coming Soon</span>
                )}
              </motion.div>
            );
          })}
        </div>

                <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 flex flex-col gap-3"
          >
            <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Training Formats</h4>
            <div className="flex flex-wrap gap-2">
              {data.delivery.formats.map((fmt, idx) => (
                <span
                  key={idx}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded bg-white border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/70 hover:border-[#0B1D3A]/20 transition-colors"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 flex flex-col gap-3"
          >
            <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Training Durations</h4>
            <div className="flex flex-wrap gap-2">
              {data.delivery.durations.map((dur, idx) => (
                <span
                  key={idx}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded bg-white border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/70 hover:border-[#0B1D3A]/20 transition-colors"
                >
                  {dur}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
