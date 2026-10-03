import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play, Target, Lightbulb, Users, Clock, BookOpen } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  { orb: "rgba(201,154,46,0.15)", bar: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`, tag: `${GOLD}18`, tagText: GOLD, metricBg: `${GOLD}10`, metricBorder: `${GOLD}25` },
  { orb: "rgba(59,130,246,0.12)", bar: "linear-gradient(90deg, #3B82F6, #6366F1)", tag: "rgba(59,130,246,0.1)", tagText: "#3B82F6", metricBg: "rgba(59,130,246,0.06)", metricBorder: "rgba(59,130,246,0.18)" },
  { orb: "rgba(16,185,129,0.12)", bar: "linear-gradient(90deg, #10B981, #059669)", tag: "rgba(16,185,129,0.1)", tagText: "#059669", metricBg: "rgba(16,185,129,0.06)", metricBorder: "rgba(16,185,129,0.18)" },
];

const videoBgs = [
  "linear-gradient(135deg, #0B1D3A 0%, #162E56 60%, #1E3A6B 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
  "linear-gradient(135deg, #0B1D3A 0%, #1a3a2e 60%, #0d3520 100%)",
];

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white">
      
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-25"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.07) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        
        <motion.div variants={item} className="flex items-center gap-4 mb-3">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Case Studies")}</h2>
        </motion.div>
        <motion.div variants={item} className="mb-12">
          <p className="text-[15px] text-[#7B8DAA] font-medium max-w-[500px]">{t("Real outcomes from real training engagements — anonymised with client consent.")}</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {data.caseStudies.map((study, idx) => {
            const accent = cardAccents[idx % cardAccents.length];
            const vidBg = videoBgs[idx % videoBgs.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group flex rounded overflow-hidden border border-[#0B1D3A]/[0.07] bg-white/90 backdrop-blur-xl luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-500 relative"
              >
                
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{ background: accent.bar }}
                />

                
                <div className="w-[220px] shrink-0 relative cursor-pointer overflow-hidden" style={{ background: vidBg }}>
                  
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${accent.orb} 0%, transparent 70%)` }}
                  />
                  
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  
                  <div
                    className="absolute top-4 left-4 text-[72px] font-black leading-none opacity-[0.07] select-none"
                    style={{ color: "white" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-md luxury-shadow-float transition-all duration-300 group-hover:border-white/50"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      <Play size={22} fill="white" className="ml-1 text-white" />
                    </motion.div>
                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.15em]">{t("Watch Case Study")}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/40 to-transparent">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded"
                      style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}
                    >
                      {study.domain}
                    </span>
                  </div>
                </div>

                
                <div className="flex-1 p-7 flex flex-col justify-between min-w-0">
                  
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-black uppercase tracking-[0.18em] mb-2" style={{ color: GOLD_MID }}>{study.client}</div>
                        <h3 className="text-[19px] font-black leading-snug tracking-tight" style={{ color: NAVY }}>{study.title}</h3>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7B8DAA]">
                          <Clock size={12} strokeWidth={2.5} />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7B8DAA]">
                          <Users size={12} strokeWidth={2.5} />
                          {study.teamSize}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7B8DAA]">
                          <BookOpen size={12} strokeWidth={2.5} />
                          {study.segment}
                        </div>
                      </div>
                    </div>

                    
                    <div className="grid grid-cols-2 gap-5 mb-6">
                      
                      <div className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded flex items-center justify-center text-white shrink-0 mt-0.5"
                          style={{ background: "#EF4444" }}
                        >
                          <Target size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.14em] mb-1.5 text-[#EF4444]">{t("The Challenge")}</div>
                          <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">{study.challenge}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded flex items-center justify-center text-white shrink-0 mt-0.5"
                          style={{ background: GOLD }}
                        >
                          <Lightbulb size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.14em] mb-1.5" style={{ color: GOLD }}>{t("The Approach")}</div>
                          <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">{study.approach}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="flex items-end justify-between gap-6 pt-5 border-t border-[#0B1D3A]/[0.06]">
                    
                    <div className="flex gap-3">
                      {study.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex flex-col items-center px-4 py-2.5 rounded border text-center min-w-[90px]"
                          style={{ background: accent.metricBg, borderColor: accent.metricBorder }}
                        >
                          <span className="text-[20px] font-black leading-none tracking-tight" style={{ color: NAVY }}>{m.value}</span>
                          <span className="text-[10px] font-bold text-[#7B8DAA] mt-1 leading-tight">{m.sub}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-end">
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-bold px-2.5 py-1 rounded"
                          style={{ background: accent.tag, color: accent.tagText }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
