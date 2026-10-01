import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Award, Users } from "lucide-react";

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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>About Trainer</h2>
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <p className="text-[14px] text-[#5A6B82] leading-[1.7] font-medium">
            {data.about.text}
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
          {data.expertise[0]?.skills.slice(0, 6).map((skill: any, idx: number) => (
            <span
              key={idx}
              className="text-[12px] font-semibold px-3 py-1.5 rounded bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/75 flex items-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.03)]"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
              {skill.name}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-3">
          {data.about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-4 flex items-center gap-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] relative overflow-hidden"
            >
              <div
                className="w-10 h-10 shrink-0 rounded flex items-center justify-center text-white shadow-sm"
                style={{
                  background: idx % 2 === 0
                    ? "linear-gradient(135deg, #3B82F6, #1D4ED8)"
                    : `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`
                }}
              >
                {idx === 0 ? <Users size={18} /> : idx === 1 ? <Target size={18} /> : <Award size={18} />}
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-black mb-0.5 leading-none" style={{ color: NAVY }}>{stat.value}</span>
                <span className="text-[11px] text-[#7B8DAA] font-semibold leading-tight">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
