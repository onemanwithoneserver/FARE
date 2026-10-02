import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Lightbulb, Trophy, Play } from "lucide-react";

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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg text-white shrink-0">
            <Trophy size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Case Studies</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {data.caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded overflow-hidden border border-[#0B1D3A]/[0.08] shadow-[0_8px_32px_-8px_rgba(11,29,58,0.1)] flex flex-col group"
            >
              <div
                className="w-full p-6 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`,
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none transition-transform duration-700 group-active:scale-125" />
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: GOLD_MID }}>{study.client}</div>
                  <h3 className="text-[18px] font-black text-white mb-6 leading-snug tracking-tight">{study.title}</h3>

                  <div className="flex flex-wrap gap-x-5 gap-y-4">
                    {[
                      { label: "Segment", value: study.segment },
                      { label: "Audience", value: study.audience },
                      { label: "Duration", value: study.duration },
                    ].map((meta, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-bold mb-1">{meta.label}</div>
                        <div className="text-[13px] font-bold text-white/90">{meta.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-6 bg-[#FAFCFF]/50 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-80" />
                <div className="flex-1 flex flex-col gap-5">
                  {[study.challenge, study.approach].map((text, sIdx) => {
                    const cfg = stepConfig[sIdx];
                    return (
                      <div key={sIdx} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded flex items-center justify-center text-white shadow-md shrink-0"
                          style={{ background: cfg.bg }}
                        >
                          {cfg.icon}
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black uppercase tracking-[0.12em] mb-1.5" style={{ color: NAVY }}>{cfg.label}</h4>
                          <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">{text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="w-full flex items-center justify-center mt-2">
                  <div className="w-full max-w-[280px] h-[160px] rounded overflow-hidden relative group/video cursor-pointer shadow-md border border-[#0B1D3A]/10 bg-[#0B1D3A]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-active/video:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                        <Play size={16} fill="white" className="ml-0.5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                      <span className="text-[10px] text-white font-black tracking-widest uppercase shadow-sm">Watch Video</span>
                    </div>
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
