import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Users, Clock, BookOpen } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const t = useProfileText();
  const data = useProfileData();

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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <div className="flex items-end justify-between mb-8">
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[#0B1D3A] text-[24px] font-black tracking-[-0.02em]">{t("Training Programs")}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          </motion.div>
        </div>

        
        <div className="relative -mx-6 px-6">
          <div
            className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {data.programs.map((prog, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="shrink-0 w-[85%] snap-center group bg-white/90 backdrop-blur-xl rounded-[4px] p-6 border border-[#0B1D3A]/[0.08] luxury-shadow-float flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
                />

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[20px] pointer-events-none transition-transform duration-700 group-active:scale-150" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] bg-clip-text text-transparent">
                    {prog.format}
                  </span>
                  <span
                    className="text-[10px] font-black px-2.5 py-1 rounded-full luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                    style={{
                      background: `${NAVY}08`,
                      color: `${NAVY}CC`,
                      border: `1px solid ${NAVY}15`,
                    }}
                  >
                    {prog.skillLevel}
                  </span>
                </div>

                <h3 className="text-[18px] font-black mb-2.5 tracking-tight" style={{ color: NAVY }}>{prog.title}</h3>
                <p className="text-[13px] text-[#5A6B82] leading-[1.65] mb-5 font-medium relative z-10 line-clamp-3">{prog.description}</p>

                <div className="flex flex-col gap-3 mb-5 mt-auto relative z-10">
                  {[
                    { icon: <Users size={12} strokeWidth={2.5} />, text: prog.audience, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
                    { icon: <Clock size={12} strokeWidth={2.5} />, text: prog.duration, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
                  ].map((meta, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-3 p-2.5 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
                      <div className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 shrink-0" style={{ background: meta.bg }}>
                        {meta.icon}
                      </div>
                      <span className="text-[12px] font-bold text-[#3B4D66] truncate w-full" title={meta.text}>{meta.text}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#0B1D3A]/[0.06] pt-4 relative z-10">
                  <div className="text-[10px] text-[#7B8DAA] uppercase tracking-[0.15em] font-black mb-2.5 flex items-center gap-1.5">
                    <BookOpen size={11} strokeWidth={2.5} />
                    {t("Key Topics")}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {prog.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-[4px]"
                        style={{
                          background: `${GOLD}0A`,
                          border: `1px solid ${GOLD}20`,
                          color: `${NAVY}E6`,
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
          
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
