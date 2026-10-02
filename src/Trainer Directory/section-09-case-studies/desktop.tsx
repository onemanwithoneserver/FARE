import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Lightbulb, Trophy, Play } from "lucide-react";

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
              className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col md:flex-row"
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

              <div className="flex-1 p-6 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-[#0B1D3A]/[0.06]">
                {[study.challenge, study.approach].map((text, sIdx) => {
                  const cfg = stepConfig[sIdx];
                  return (
                    <div key={sIdx} className="flex items-start gap-3.5">
                      <div
                        className="w-8 h-8 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm shrink-0"
                        style={{ background: cfg.bg }}
                      >
                        {cfg.icon}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: NAVY }}>{cfg.label}</h4>
                        <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full md:w-[180px] shrink-0 p-6 flex items-center justify-center bg-[#F8FAFD]/30">
                <div className="w-full max-w-[200px] aspect-[9/16] rounded-xl overflow-hidden relative group cursor-pointer shadow-sm border border-[#0B1D3A]/10 bg-[#0B1D3A]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <Play size={16} fill="white" className="ml-0.5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                    <span className="text-[9px] text-white/90 font-bold tracking-widest uppercase">Watch Video</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
