import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Lightbulb, Trophy } from "lucide-react";

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

  const stepConfig = [
    { icon: <Target size={14} strokeWidth={2.5} />, label: "The Challenge", bg: "linear-gradient(135deg, #EF4444, #DC2626)", accent: "#EF4444" },
    { icon: <Lightbulb size={14} strokeWidth={2.5} />, label: "The Approach", bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, accent: GOLD },
    { icon: <Trophy size={14} strokeWidth={2.5} />, label: "The Outcome", bg: "linear-gradient(135deg, #10B981, #059669)", accent: "#10B981" },
  ];

  return (
    <section
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Case Studies</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {data.caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] flex flex-col"
            >
              <div
                className="w-full p-5 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`,
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5" style={{ color: GOLD_MID }}>{study.client}</div>
                  <h3 className="text-[15px] font-black text-white mb-4 leading-snug">{study.title}</h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-3">
                    {[
                      { label: "Segment", value: study.segment },
                      { label: "Audience", value: study.audience },
                      { label: "Duration", value: study.duration },
                    ].map((meta, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[9px] text-white/40 uppercase tracking-[0.15em] font-bold mb-0.5">{meta.label}</div>
                        <div className="text-[12px] font-semibold text-white/80">{meta.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-5">
                {[study.challenge, study.approach, study.outcome].map((text, sIdx) => {
                  const cfg = stepConfig[sIdx];
                  return (
                    <div key={sIdx} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm shrink-0"
                        style={{ background: cfg.bg }}
                      >
                        {cfg.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: NAVY }}>{cfg.label}</h4>
                        <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">{text}</p>
                        {sIdx === 2 && study.metrics && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {study.metrics.map((metric, mIdx) => (
                              <span
                                key={mIdx}
                                className="text-[10px] font-bold px-2 py-1 rounded-full"
                                style={{
                                  background: "rgba(16,185,129,0.08)",
                                  color: "#059669",
                                  border: "1px solid rgba(16,185,129,0.2)",
                                }}
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
