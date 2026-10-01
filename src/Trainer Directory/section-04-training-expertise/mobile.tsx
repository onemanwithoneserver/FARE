import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Sparkles } from "lucide-react";

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

  const domainColors = [
    { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { accent: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)" },
    { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
    { accent: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  ];

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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Expertise</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.expertise.map((categoryObj, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded-lg p-5 border border-[#0B1D3A]/[0.08] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: domainColors[idx % domainColors.length].bg }}
              />
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center text-white shadow-sm"
                  style={{ background: domainColors[idx % domainColors.length].bg }}
                >
                  <Sparkles size={14} strokeWidth={2.5} />
                </div>
                <h3 className="text-[14px] font-black" style={{ color: NAVY }}>{categoryObj.category}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {categoryObj.skills.map((skill, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2 text-[12px] text-[#5A6B82] font-medium leading-[1.4]">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                      style={{ background: domainColors[idx % domainColors.length].accent }}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
