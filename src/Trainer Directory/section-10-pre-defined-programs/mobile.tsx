import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Users, Clock, MonitorPlay, BookOpen } from "lucide-react";

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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Programs</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.programs.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] flex flex-col relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
              />

              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>{prog.format}</span>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${NAVY}08`,
                    color: `${NAVY}AA`,
                    border: `1px solid ${NAVY}10`,
                  }}
                >
                  {prog.skillLevel}
                </span>
              </div>

              <h3 className="text-[15px] font-black mb-1.5" style={{ color: NAVY }}>{prog.title}</h3>
              <p className="text-[12px] text-[#5A6B82] leading-[1.6] mb-4 font-medium">{prog.description}</p>

              <div className="flex flex-col gap-2 mb-4">
                {[
                  { icon: <Users size={12} strokeWidth={2.5} />, text: prog.audience, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
                  { icon: <Clock size={12} strokeWidth={2.5} />, text: prog.duration, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
                  { icon: <MonitorPlay size={12} strokeWidth={2.5} />, text: prog.mode, bg: "linear-gradient(135deg, #10B981, #059669)" },
                ].map((meta, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm shrink-0" style={{ background: meta.bg }}>
                      {meta.icon}
                    </div>
                    <span className="text-[11px] font-medium text-[#5A6B82]">{meta.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4 border-t border-[#0B1D3A]/[0.06] pt-3.5">
                <div className="text-[9px] text-[#7B8DAA] uppercase tracking-[0.15em] font-bold mb-2 flex items-center gap-1.5">
                  <BookOpen size={10} strokeWidth={2.5} />
                  Key Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {prog.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: `${GOLD}08`,
                        border: `1px solid ${GOLD}15`,
                        color: `${NAVY}BB`,
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
