import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play, Target, Lightbulb, Clock, Users } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  { bar: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`, tag: `${GOLD}18`, tagText: GOLD, metricBg: `${GOLD}10`, metricBorder: `${GOLD}28` },
  { bar: "linear-gradient(90deg, #3B82F6, #6366F1)", tag: "rgba(59,130,246,0.1)", tagText: "#3B82F6", metricBg: "rgba(59,130,246,0.06)", metricBorder: "rgba(59,130,246,0.2)" },
  { bar: "linear-gradient(90deg, #10B981, #059669)", tag: "rgba(16,185,129,0.1)", tagText: "#059669", metricBg: "rgba(16,185,129,0.06)", metricBorder: "rgba(16,185,129,0.2)" },
];

const videoBgs = [
  "linear-gradient(135deg, #0B1D3A 0%, #162E56 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
  "linear-gradient(135deg, #0B1D3A 0%, #0d3520 100%)",
];

export default function Mobile() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full py-12 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white">
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[-15%] w-[280px] h-[280px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.15) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        
        <motion.div variants={item} className="flex items-center gap-3 mb-2">
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Case Studies</h2>
        </motion.div>
        <motion.div variants={item} className="mb-8">
          <p className="text-[13px] text-[#7B8DAA] font-medium leading-relaxed">Real outcomes from real engagements.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {data.caseStudies.map((study, idx) => {
            const accent = cardAccents[idx % cardAccents.length];
            const vidBg = videoBgs[idx % videoBgs.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                className="group rounded overflow-hidden border border-[#0B1D3A]/[0.07] bg-white luxury-shadow-float relative"
              >
                
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: accent.bar }} />

                
                <div className="w-full h-[110px] relative cursor-pointer overflow-hidden" style={{ background: vidBg }}>
                  
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[60px] font-black leading-none opacity-[0.06] text-white select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center pl-5 gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center border border-white/25 shrink-0"
                      style={{ background: "rgba(255,255,255,0.12)" }}
                    >
                      <Play size={16} fill="white" className="ml-0.5 text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">{study.domain}</div>
                      <div className="text-[13px] font-black text-white leading-snug max-w-[200px]">{study.client}</div>
                    </div>
                  </div>
                </div>

                
                <div className="p-5">
                  
                  <div className="mb-4">
                    <h3 className="text-[16px] font-black leading-snug tracking-tight mb-3" style={{ color: NAVY }}>{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-[#7B8DAA]">
                        <Clock size={10} strokeWidth={2.5} />{study.duration}
                      </div>
                      <div className="w-px h-3 bg-[#E2E8F0] self-center" />
                      <div className="flex items-center gap-1 text-[10px] font-bold text-[#7B8DAA]">
                        <Users size={10} strokeWidth={2.5} />{study.teamSize}
                      </div>
                      <div className="w-px h-3 bg-[#E2E8F0] self-center" />
                      <div className="text-[10px] font-bold text-[#7B8DAA]">{study.segment}</div>
                    </div>
                  </div>

                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-white shrink-0 mt-0.5" style={{ background: "#EF4444" }}>
                      <Target size={12} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.14em] mb-1 text-[#EF4444]">The Challenge</div>
                      <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">{study.challenge}</p>
                    </div>
                  </div>

                  
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-white shrink-0 mt-0.5" style={{ background: GOLD }}>
                      <Lightbulb size={12} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: GOLD }}>The Approach</div>
                      <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">{study.approach}</p>
                    </div>
                  </div>

                  
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#0B1D3A]/[0.06]">
                    {study.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex flex-col items-center py-2.5 px-1 rounded border text-center"
                        style={{ background: accent.metricBg, borderColor: accent.metricBorder }}
                      >
                        <span className="text-[17px] font-black leading-none" style={{ color: NAVY }}>{m.value}</span>
                        <span className="text-[9px] font-bold text-[#7B8DAA] mt-1 leading-tight text-center">{m.sub}</span>
                      </div>
                    ))}
                  </div>

                  
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded"
                        style={{ background: accent.tag, color: accent.tagText }}
                      >
                        {tag}
                      </span>
                    ))}
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
