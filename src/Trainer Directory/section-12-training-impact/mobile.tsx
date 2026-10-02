import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { TrendingUp, Star, Award, Zap } from "lucide-react";

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

  const metricIcons = [
    { icon: <TrendingUp size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <Star size={18} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
    { icon: <Award size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  ];

  return (
    <section
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center shadow-lg text-white shrink-0">
            <Zap size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Impact</h2>
        </motion.div>

        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-2 gap-4">
            {data.trainingImpact.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] flex flex-col relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.15] blur-xl pointer-events-none" style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }} />
                
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-white shadow-md mb-4 relative z-10"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                >
                  {metricIcons[idx]?.icon || metricIcons[0].icon}
                </div>
                <div className="text-[26px] font-black mb-1 tracking-tight relative z-10" style={{ color: NAVY }}>{metric.value}</div>
                <p className="text-[12px] font-bold text-[#5A6B82] mb-4 relative z-10">{metric.name}</p>
                
                <div className="mt-auto pt-3 border-t border-[#0B1D3A]/[0.06] flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-black text-[#7B8DAA] uppercase tracking-[0.15em]">Source</span>
                  <span className="text-[10px] font-bold text-[#3B4D66] bg-[#F8FAFD] px-2 py-0.5 rounded border border-[#0B1D3A]/[0.04]">{metric.source}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {data.trainingImpact.counts.map((count, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-gradient-to-r from-[#0B1D3A] to-[#132A4D] rounded p-6 flex items-center justify-between shadow-[0_8px_32px_-8px_rgba(11,29,58,0.15)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[20px] pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="text-[12px] font-black text-white/80 uppercase tracking-[0.15em] relative z-10">{count.label}</div>
                <div className="text-[24px] font-black tracking-tight relative z-10" style={{ color: GOLD }}>{count.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
