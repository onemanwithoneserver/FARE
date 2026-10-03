import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Users } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const audienceColors = [
  { bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { bg: "linear-gradient(135deg, #10B981, #059669)" },
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
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
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
          <h2 className="text-[1.75rem] font-black tracking-tight leading-tight" style={{ color: NAVY }}>Learner Audience</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.learnerAudience.map((audience, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded p-5 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: audienceColors[idx % audienceColors.length].bg }}
              />
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm mb-3"
                style={{ background: audienceColors[idx % audienceColors.length].bg }}
              >
                <Users size={16} strokeWidth={2.2} />
              </div>
              <h3 className="text-[14px] font-bold mb-1.5" style={{ color: NAVY }}>{audience.title}</h3>
              <p className="text-[12px] text-[#7B8DAA] leading-[1.6] font-medium">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
