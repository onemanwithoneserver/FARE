import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Users, Clock, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();
  const scrollRef = useRef<HTMLDivElement>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-[4px]-[4px]-[4px]-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[0%] w-[450px] h-[450px] rounded-[4px]-[4px]-[4px]-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <div className="flex items-end justify-between mb-12">
          <motion.div variants={item} className="flex items-center gap-4">
            <div className="w-[4px] h-7 rounded-[4px]-[4px]-[4px]-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Training Programs")}</h2>
          </motion.div>
          <motion.div variants={item} className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-[4px]-[8px]-[4px]-[8px]-[4px]-[8px] flex items-center justify-center bg-white border border-[#0B1D3A]/[0.08] text-[#0B1D3A] shadow-sm hover:border-[#0B1D3A]/20 hover:bg-[#F8FAFD] hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-[4px]-[8px]-[4px]-[8px]-[4px]-[8px] flex items-center justify-center bg-white border border-[#0B1D3A]/[0.08] text-[#0B1D3A] shadow-sm hover:border-[#0B1D3A]/20 hover:bg-[#F8FAFD] hover:shadow-md transition-all duration-300"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        
        <div className="relative -mx-10 px-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scroll-smooth"
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
                className="shrink-0 w-[400px] snap-start group bg-white/90 backdrop-blur-xl rounded-[4px]-[4px]-[4px] p-8 border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-400 ease-out flex flex-col relative overflow-hidden hover:-translate-y-1.5"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
                />

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-[4px]-[4px]-[4px]-full blur-[30px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] bg-clip-text text-transparent">
                    {prog.format}
                  </span>
                  <span
                    className="text-[11px] font-black px-3 py-1 rounded-[4px]-[4px]-[4px]-full shadow-sm"
                    style={{
                      background: `${NAVY}08`,
                      color: `${NAVY}CC`,
                      border: `1px solid ${NAVY}15`,
                    }}
                  >
                    {prog.skillLevel}
                  </span>
                </div>

                <h3 className="text-[20px] font-black mb-3 tracking-tight" style={{ color: NAVY }}>{prog.title}</h3>
                <p className="text-[14px] text-[#5A6B82] leading-[1.7] mb-6 font-medium relative z-10 line-clamp-3">{prog.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 mt-auto relative z-10">
                  {[
                    { icon: <Users size={14} strokeWidth={2.5} />, text: prog.audience, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
                    { icon: <Clock size={14} strokeWidth={2.5} />, text: prog.duration, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
                  ].map((meta, mIdx) => (
                    <div key={mIdx} className="flex flex-col gap-2 p-3 rounded-[4px]-[4px]-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] hover:bg-white hover:shadow-sm transition-colors group/meta cursor-default">
                      <div className="w-8 h-8 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-md group-hover/meta:scale-110 transition-transform duration-300" style={{ background: meta.bg }}>
                        {meta.icon}
                      </div>
                      <span className="text-[12px] font-bold text-[#3B4D66] truncate w-full" title={meta.text}>{meta.text}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#0B1D3A]/[0.06] pt-5 relative z-10">
                  <div className="text-[10px] text-[#7B8DAA] uppercase tracking-[0.15em] font-black mb-3 flex items-center gap-1.5">
                    <BookOpen size={12} strokeWidth={2.5} />
                    {t("Key Topics")}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {prog.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[12px] font-bold px-3 py-1.5 rounded-[4px]-[4px]-[4px] transition-colors hover:bg-white hover:shadow-sm cursor-default"
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
          
          
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
