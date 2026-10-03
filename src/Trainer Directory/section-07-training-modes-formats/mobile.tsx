import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Video, Building2, Layers, PlayCircle, Clock, Sparkles, Presentation, MessagesSquare, UserCheck } from "lucide-react";

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
    switch (iconName) {
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
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Delivery</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {data.delivery.modes.map((mode, idx) => {
              const colors = modeColors[idx % modeColors.length];
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className={`bg-white/90 backdrop-blur-xl rounded p-4 border relative overflow-hidden flex flex-col luxury-shadow-float ${mode.disabled
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
                    className="w-8 h-8 rounded ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-2"
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

          <div className="flex flex-col gap-5">
            <motion.div
              variants={item}
              className="w-full mt-2"
            >
              <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-3">Training Formats</h4>
              <div className="flex flex-col gap-3">
                {data.methodology.formats.map((fmt, idx) => {
                  const styles = [
                    { color: "#2563EB", icon: <Presentation size={16} strokeWidth={2} /> },
                    { color: "#10B981", icon: <MessagesSquare size={16} strokeWidth={2} /> },
                    { color: "#D97706", icon: <Clock size={16} strokeWidth={2} /> },
                    { color: "#8B5CF6", icon: <UserCheck size={16} strokeWidth={2} /> },
                    { color: "#F97316", icon: <Sparkles size={16} strokeWidth={2} /> }
                  ];
                  const s = styles[idx % styles.length];
                  return (
                    <div key={idx} className="bg-white rounded border border-[#0B1D3A]/[0.06] shadow-sm relative overflow-hidden flex flex-col p-4">
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{ background: s.color }}
                      />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded flex items-center justify-center text-white shrink-0" style={{ background: s.color }}>
                          {s.icon}
                        </div>
                        <h5 className="text-[14px] font-black tracking-tight" style={{ color: NAVY }}>{fmt.name}</h5>
                      </div>
                      <p className="text-[11.5px] text-[#5A6B82] leading-relaxed font-medium">{fmt.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full mt-2"
            >
              <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-3">Training Durations</h4>
              <div className="flex flex-wrap gap-2.5">
                {data.delivery.durations.map((dur, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded border border-[#0B1D3A]/[0.06] bg-white shadow-sm"
                  >
                    <Clock size={14} strokeWidth={2.5} className="text-[#3B82F6]" />
                    <span className="text-[13px] font-bold text-[#0B1D3A]/90">{dur}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
