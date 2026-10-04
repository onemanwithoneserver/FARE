import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { TrendingUp, Star, Award } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const metricIcons = [
    { icon: <TrendingUp size={24} strokeWidth={2} />, accent: "#3B82F6" },
    { icon: <Star size={24} strokeWidth={2} />, accent: GOLD },
    { icon: <Award size={24} strokeWidth={2} />, accent: "#10B981" },
  ];

  return (
    <section
      className="w-full py-20 px-10 font-['Outfit'] flex justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(170deg, ${NAVY} 0%, #071A49 50%, #0D2240 100%)` }}
    >
      
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 opacity-40"
        style={{ background: `radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)` }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0 opacity-30"
        style={{ background: `radial-gradient(circle, rgba(201,154,46,0.15) 0%, transparent 70%)` }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 opacity-25"
        style={{ background: `radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)` }}
      />

      
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-4">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD_MID}, ${GOLD})` }} />
          <h2 className="whitespace-nowrap text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em] ">{t("Training Impact")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>
        <motion.div variants={item} className="mb-12">
          <p className="text-[15px] text-white/50 font-medium max-w-[500px]">{t("Measurable outcomes from completed training engagements.")}</p>
        </motion.div>

        
        <div className="grid grid-cols-3 gap-6 mb-8">
          {data.trainingImpact.metrics.map((metric, idx) => {
            const m = metricIcons[idx] || metricIcons[0];
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group rounded-[4px] p-8 flex flex-col relative overflow-hidden transition-all duration-400 ease-out border border-white/[0.08] hover:border-white/[0.2]"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}
              >
                
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 blur-[40px] transition-opacity duration-700 pointer-events-none"
                  style={{ background: m.accent }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.accent}, transparent)` }}
                />

                <div
                  className="w-12 h-12 rounded-[4px] flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-400"
                  style={{ background: m.accent }}
                >
                  {m.icon}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-[48px] font-black mb-2 tracking-tighter leading-none"
                  style={{ color: GOLD }}
                >
                  {metric.value}
                </motion.div>

                <p className="text-[15px] font-bold text-white/70 mb-6 leading-snug">{metric.name}</p>

                <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-bold">{t("Source")}</span>
                  <span className="text-[11px] text-white/60 font-semibold bg-white/[0.06] px-2.5 py-1 rounded-[4px]">{metric.source}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        
        <div className="grid grid-cols-2 gap-6">
          {data.trainingImpact.counts.map((count, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group rounded-[4px] p-6 flex items-center justify-between relative overflow-hidden border border-white/[0.1] hover:border-white/[0.2] transition-all duration-400"
              style={{ background: `linear-gradient(135deg, rgba(201,154,46,0.08) 0%, rgba(201,154,46,0.02) 100%)` }}
            >
              <div
                className="absolute -left-10 -top-10 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: GOLD }}
              />
              <div className="text-[14px] font-black text-white/70 uppercase tracking-[0.15em] relative z-10">{count.label}</div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-[40px] font-black tracking-tighter relative z-10"
                style={{ color: GOLD }}
              >
                {count.value}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
