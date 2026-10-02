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
                className={`group bg-white/90 backdrop-blur-xl rounded-2xl p-5 border transition-all duration-300 ease-out relative overflow-hidden flex flex-col ${
                  mode.disabled
                    ? "opacity-40 border-[#0B1D3A]/[0.04]"
                    : "border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] hover:-translate-y-1"
                }`}
              >
                {!mode.disabled && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}60)` }}
                  />
                )}
                <div
                  className="w-9 h-9 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-3 group-hover:scale-110 transition-all duration-300 ease-out"
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

        <div className="flex flex-col gap-6">
          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 flex flex-col gap-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
          >
            <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Training Formats</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.methodology.formats.map((fmt, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-xl border border-[#0B1D3A]/[0.04] bg-[#F8FAFD]/50">
                  <h5 className="text-[14px] font-bold" style={{ color: NAVY }}>{fmt.name}</h5>
                  <p className="text-[12px] text-[#5A6B82] leading-relaxed font-medium">{fmt.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
          >
            <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Training Durations</h4>
            <div className="flex flex-wrap gap-2">
              {data.delivery.durations.map((dur, idx) => (
                <span
                  key={idx}
                  className="text-[13px] font-semibold px-4 py-2 rounded-full bg-white border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/80 hover:border-[#0B1D3A]/[0.20] transition-all duration-300 ease-out"
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
