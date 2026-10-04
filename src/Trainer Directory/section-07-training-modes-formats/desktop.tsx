import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Video, Building2, Layers, PlayCircle, Clock, Sparkles, Presentation, MessagesSquare, UserCheck } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

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
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }}
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em]">{t("Training Delivery")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {data.delivery.modes.map((mode, idx) => {
            const colors = modeColors[idx % modeColors.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                className={`group bg-white/90 backdrop-blur-xl rounded-[4px] p-6 border transition-all duration-400 ease-out relative overflow-hidden flex flex-col ${
                  mode.disabled
                    ? "opacity-50 border-[#0B1D3A]/[0.04]"
                    : "border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-1"
                }`}
              >
                {!mode.disabled && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: colors.bg }}
                  />
                )}
                <div
                  className="w-11 h-11 rounded-[4px] flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-all duration-400 ease-out"
                  style={{ background: mode.disabled ? "#CBD5E1" : colors.bg }}
                >
                  {getIcon(mode.icon)}
                </div>
                <h4 className="text-[16px] font-black mb-2 tracking-tight" style={{ color: NAVY }}>{mode.name}</h4>
                <p className="text-[13px] text-[#5A6B82] leading-relaxed font-medium">{mode.description}</p>
                {mode.disabled && (
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">{t("Coming Soon")}</span>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            variants={item}
            className="w-full mt-6"
          >
            <h4 className="text-[13px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-4">{t("Training Formats")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {data.methodology.formats.map((fmt, idx) => {
                const styles = [
                  { color: "#2563EB", icon: <Presentation size={18} strokeWidth={2} /> },
                  { color: "#10B981", icon: <MessagesSquare size={18} strokeWidth={2} /> },
                  { color: "#D97706", icon: <Clock size={18} strokeWidth={2} /> },
                  { color: "#8B5CF6", icon: <UserCheck size={18} strokeWidth={2} /> },
                  { color: "#F97316", icon: <Sparkles size={18} strokeWidth={2} /> }
                ];
                const s = styles[idx % styles.length];
                return (
                  <div key={idx} className="bg-white rounded-[4px] border border-[#0B1D3A]/[0.04] shadow-sm relative overflow-hidden flex flex-col p-5 group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: s.color }}
                    />
                    <div className="w-9 h-9 rounded-[4px] mb-4 flex items-center justify-center text-white" style={{ background: s.color }}>
                      {s.icon}
                    </div>
                    <h5 className="text-[14px] font-black tracking-tight leading-tight mb-2" style={{ color: NAVY }}>{fmt.name}</h5>
                    <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">{fmt.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="w-full mt-8"
          >
            <h4 className="text-[13px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em] mb-4">{t("Training Durations")}</h4>
            <div className="flex flex-wrap gap-3">
              {data.delivery.durations.map((dur, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-[4px] border border-[#0B1D3A]/[0.06] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <Clock size={14} strokeWidth={2.5} className="text-[#3B82F6]" />
                  <span className="text-[13px] font-bold text-[#0B1D3A]/90">{dur}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
