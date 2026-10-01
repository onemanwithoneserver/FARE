import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Check, Users } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const segmentColors = [
  { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { accent: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)" },
  { accent: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
];

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
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full grid grid-cols-2 gap-14 relative z-10"
      >
                <div>
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Real Estate Segment Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {data.segments.map((segment, idx) => {
              const colors = segmentColors[idx % segmentColors.length];
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                  className="bg-white/90 backdrop-blur-xl rounded p-5 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] transition-all duration-400 relative overflow-hidden group"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}60)` }}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-white shadow-sm"
                      style={{ background: colors.bg }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: colors.accent }}>{segment.name}</h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {segment.items.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-[13px] text-[#5A6B82] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: colors.accent }} />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

                <div>
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Learner Audience</h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {data.learnerAudience.map((audience, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -3, x: 3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="group bg-white/90 backdrop-blur-xl rounded p-5 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] transition-all duration-400 flex items-start gap-4"
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: segmentColors[idx % segmentColors.length].bg }}
                >
                  <Users size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold mb-1" style={{ color: NAVY }}>{audience.title}</h3>
                  <p className="text-[12px] text-[#7B8DAA] leading-relaxed font-medium">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
