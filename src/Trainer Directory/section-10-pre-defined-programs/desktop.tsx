import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Users, Clock, MonitorPlay, BookOpen } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
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
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Programs</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {data.programs.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col relative overflow-hidden"
            >
                            <div
                className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>{prog.format}</span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${NAVY}08`,
                    color: `${NAVY}AA`,
                    border: `1px solid ${NAVY}10`,
                  }}
                >
                  {prog.skillLevel}
                </span>
              </div>

              <h3 className="text-[17px] font-black mb-2" style={{ color: NAVY }}>{prog.title}</h3>
              <p className="text-[13px] text-[#5A6B82] leading-[1.65] mb-5 font-medium">{prog.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-5 mt-auto">
                {[
                  { icon: <Users size={13} strokeWidth={2.5} />, text: prog.audience, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
                  { icon: <Clock size={13} strokeWidth={2.5} />, text: prog.duration, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
                  { icon: <MonitorPlay size={13} strokeWidth={2.5} />, text: prog.mode, bg: "linear-gradient(135deg, #10B981, #059669)" },
                ].map((meta, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm" style={{ background: meta.bg }}>
                      {meta.icon}
                    </div>
                    <span className="text-[11px] font-medium text-[#5A6B82]">{meta.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4 border-t border-[#0B1D3A]/[0.06] pt-4">
                <div className="text-[9px] text-[#7B8DAA] uppercase tracking-[0.15em] font-bold mb-2 flex items-center gap-1.5">
                  <BookOpen size={10} strokeWidth={2.5} />
                  Key Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {prog.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold px-2 py-1 rounded-full"
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

              <a href={prog.link} className="text-[13px] font-bold flex items-center gap-1.5 mt-auto transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 rounded-xl" style={{ color: NAVY }}>
                <span className="group-hover/link:text-[#C99A2E] transition-colors">View Full Program</span>
                <ArrowRight size={13} strokeWidth={2.5} className="group-hover/link:translate-x-1 transition-transform duration-300" style={{ color: GOLD_MID }} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
