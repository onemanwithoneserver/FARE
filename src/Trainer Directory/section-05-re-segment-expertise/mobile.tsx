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
        className="relative z-10 w-full flex flex-col gap-8"
      >

        <div>
          <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Real Estate Segments</h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {data.segments.map((segment, idx) => {
              const colors = segmentColors[idx % segmentColors.length];
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="bg-white/90 backdrop-blur-xl rounded-lg p-4 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: colors.bg }}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-white shadow-sm"
                      style={{ background: colors.bg }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: colors.accent }}>{segment.name}</h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {segment.items.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-[12px] text-[#5A6B82] font-medium">
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
          <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
            <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Learner Audience</h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {data.learnerAudience.map((audience, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl rounded-lg p-4 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] flex items-start gap-3"
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm shrink-0 mt-0.5"
                  style={{ background: segmentColors[idx % segmentColors.length].bg }}
                >
                  <Users size={14} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold mb-1" style={{ color: NAVY }}>{audience.title}</h3>
                  <p className="text-[12px] text-[#7B8DAA] leading-[1.6] font-medium">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
