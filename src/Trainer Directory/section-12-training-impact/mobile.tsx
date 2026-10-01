import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { TrendingUp, Star, Award } from "lucide-react";

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
    { icon: <TrendingUp size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <Star size={16} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
    { icon: <Award size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
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
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Impact</h2>
        </motion.div>

        <div className="flex flex-col gap-4">

          <div className="grid grid-cols-2 gap-3">
            {data.trainingImpact.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                />
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm mb-3"
                  style={{ background: metricIcons[idx]?.bg || metricIcons[0].bg }}
                >
                  {metricIcons[idx]?.icon || metricIcons[0].icon}
                </div>
                <div className="text-[24px] font-black mb-0.5" style={{ color: NAVY }}>{metric.value}</div>
                <p className="text-[11px] font-bold text-[#5A6B82] mb-3">{metric.name}</p>
                <div
                  className="text-[9px] text-[#7B8DAA] uppercase tracking-[0.12em] font-bold mt-auto pt-2.5 border-t border-[#0B1D3A]/[0.06]"
                >
                  Source: {metric.source}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-1">
            {data.trainingImpact.counts.map((count, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-4 flex items-center justify-between shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
              >
                <div className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.12em]">{count.label}</div>
                <div className="text-[20px] font-black" style={{ color: GOLD }}>{count.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
