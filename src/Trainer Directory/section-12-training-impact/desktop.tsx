import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { TrendingUp, Star, Award, Zap } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const metricIcons = [
    { icon: <TrendingUp size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <Star size={22} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
    { icon: <Award size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  ];

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center shadow-lg text-white">
            <Zap size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Impact</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-8">
            {data.trainingImpact.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] rounded p-8 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out hover:-translate-y-1.5 flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                />
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }} />
                
                <div
                  className="w-14 h-14 rounded flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-400 ease-out"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                >
                  {metricIcons[idx]?.icon || metricIcons[0].icon}
                </div>
                <div className="text-[40px] font-black mb-2 tracking-tighter" style={{ color: NAVY }}>{metric.value}</div>
                <p className="text-[15px] font-bold text-[#5A6B82] mb-6">{metric.name}</p>
                <div
                  className="text-[11px] text-[#7B8DAA] uppercase tracking-[0.15em] font-black mt-auto pt-4 border-t border-[#0B1D3A]/[0.06] flex items-center justify-between"
                >
                  <span>Source</span>
                  <span className="text-[#3B4D66] bg-[#F8FAFD] px-2 py-1 rounded">{metric.source}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {data.trainingImpact.counts.map((count, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group bg-gradient-to-r from-[#0B1D3A] to-[#132A4D] rounded p-8 flex items-center justify-between shadow-[0_12px_40px_-12px_rgba(11,29,58,0.15)] relative overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(11,29,58,0.25)] transition-shadow duration-400"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none transition-transform duration-700 group-hover:scale-125" />
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                
                <div className="text-[14px] font-black text-white/80 uppercase tracking-[0.15em] relative z-10">{count.label}</div>
                <div className="text-[36px] font-black tracking-tighter relative z-10" style={{ color: GOLD }}>{count.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
