import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { TrendingUp, Star, Award } from "lucide-react";

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

  const metricIcons = [
    { icon: <TrendingUp size={20} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <Star size={20} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
    { icon: <Award size={20} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  ];

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <div className="absolute top-[30%] left-[8%] w-[400px] h-[400px] bg-gradient-radial from-[#DDEAFF]/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Impact</h2>
        </motion.div>

        <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-3 gap-5">
            {data.trainingImpact.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] rounded-2xl p-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                />
                <div
                  className="w-10 h-10 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-all duration-300 ease-out"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                >
                  {metricIcons[idx]?.icon || metricIcons[0].icon}
                </div>
                <div className="text-[32px] font-black mb-1" style={{ color: NAVY }}>{metric.value}</div>
                <p className="text-[13px] font-bold text-[#5A6B82] mb-3">{metric.name}</p>
                <div
                  className="text-[10px] text-[#7B8DAA] uppercase tracking-[0.12em] font-bold mt-auto pt-3 border-t border-[#0B1D3A]/[0.06]"
                >
                  Source: {metric.source}
                </div>
              </motion.div>
            ))}
          </div>

                    <div className="grid grid-cols-2 gap-5">
            {data.trainingImpact.counts.map((count, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
              >
                <div className="text-[13px] font-bold text-[#7B8DAA] uppercase tracking-[0.12em]">{count.label}</div>
                <div className="text-[24px] font-black" style={{ color: GOLD }}>{count.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
