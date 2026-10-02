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
    { icon: <Target size={18} strokeWidth={2.5} />, label: "The Challenge", bg: "linear-gradient(135deg, #EF4444, #DC2626)", accent: "#EF4444" },
    { icon: <Lightbulb size={18} strokeWidth={2.5} />, label: "The Approach", bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, accent: GOLD },
    { icon: <Trophy size={18} strokeWidth={2.5} />, label: "The Outcome", bg: "linear-gradient(135deg, #10B981, #059669)", accent: "#10B981" },
  ];

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg text-white">
            <Trophy size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Case Studies</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {data.caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded overflow-hidden border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] shadow-[0_8px_32px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out hover:-translate-y-1.5 flex flex-col md:flex-row group"
            >
              <div
                className="w-full md:w-[280px] shrink-0 p-8 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`,
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[40px] pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:translate-x-4" />
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10">
                  <div className="text-[12px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: GOLD_MID }}>{study.client}</div>
                  <h3 className="text-[20px] font-black text-white mb-8 leading-tight tracking-tight">{study.title}</h3>

                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Segment", value: study.segment },
                      { label: "Audience", value: study.audience },
                      { label: "Duration", value: study.duration },
                    ].map((meta, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-bold mb-1">{meta.label}</div>
                        <div className="text-[14px] font-bold text-white/90">{meta.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 p-8 flex flex-col justify-center gap-7 border-b md:border-b-0 md:border-r border-[#0B1D3A]/[0.06] bg-[#FAFCFF]/50 relative">
                <div className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
                
                {[study.challenge, study.approach].map((text, sIdx) => {
                  const cfg = stepConfig[sIdx];
                  return (
                    <div key={sIdx} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: cfg.bg }}
                      >
                        {cfg.icon}
                      </div>
                      <div>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.12em] mb-1.5" style={{ color: NAVY }}>{cfg.label}</h4>
                        <p className="text-[14px] text-[#5A6B82] leading-[1.7] font-medium">{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full md:w-[220px] shrink-0 p-2 flex items-center justify-center bg-white">
                <div className="w-full max-w-[200px] aspect-[9/16] rounded overflow-hidden relative group/video cursor-pointer shadow-lg border border-[#0B1D3A]/10 bg-[#0B1D3A]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover/video:scale-110 group-hover/video:opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover/video:scale-110 group-hover/video:bg-white/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                      <Play size={18} fill="white" className="ml-1 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                    <span className="text-[10px] text-white font-black tracking-widest uppercase shadow-sm">Watch Video</span>
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
