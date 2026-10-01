import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Lightbulb, Trophy } from "lucide-react";

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

  const stepConfig = [
    { icon: <Target size={16} strokeWidth={2.5} />, label: "The Challenge", bg: "linear-gradient(135deg, #EF4444, #DC2626)", accent: "#EF4444" },
    { icon: <Lightbulb size={16} strokeWidth={2.5} />, label: "The Approach", bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, accent: GOLD },
    { icon: <Trophy size={16} strokeWidth={2.5} />, label: "The Outcome", bg: "linear-gradient(135deg, #10B981, #059669)", accent: "#10B981" },
  ];

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Case Studies</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {data.caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded overflow-hidden border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] hover:shadow-[0_12px_36px_-12px_rgba(11,29,58,0.1)] transition-all duration-400 flex flex-col md:flex-row"
            >
                            <div
                className="w-full md:w-[260px] shrink-0 p-6 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`,
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: GOLD_MID }}>{study.client}</div>
                  <h3 className="text-[17px] font-black text-white mb-6 leading-tight">{study.title}</h3>

                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Segment", value: study.segment },
                      { label: "Audience", value: study.audience },
                      { label: "Duration", value: study.duration },
                    ].map((meta, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[9px] text-white/40 uppercase tracking-[0.15em] font-bold mb-0.5">{meta.label}</div>
                        <div className="text-[13px] font-semibold text-white/80">{meta.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                            <div className="flex-1 p-6 flex flex-col gap-5">
                {[study.challenge, study.approach, study.outcome].map((text, sIdx) => {
                  const cfg = stepConfig[sIdx];
                  return (
                    <div key={sIdx} className="flex items-start gap-3.5">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm shrink-0"
                        style={{ background: cfg.bg }}
                      >
                        {cfg.icon}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: NAVY }}>{cfg.label}</h4>
                        <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">{text}</p>
                        {sIdx === 2 && study.metrics && (
                          <div className="flex flex-wrap gap-2 mt-2.5">
                            {study.metrics.map((metric, mIdx) => (
                              <span
                                key={mIdx}
                                className="text-[11px] font-bold px-2.5 py-1 rounded"
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
