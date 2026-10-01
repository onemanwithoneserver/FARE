import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

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

  const statIcons = [
    { icon: <Briefcase size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <GraduationCap size={16} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience & Track Record</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {data.about.stats.slice(0, 2).map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-4 flex flex-col shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] relative overflow-hidden"
            >
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm mb-2"
                style={{ background: statIcons[idx]?.bg || statIcons[0].bg }}
              >
                {statIcons[idx]?.icon || statIcons[0].icon}
              </div>
              <div className="text-[20px] font-black mb-0.5" style={{ color: NAVY }}>{stat.value}</div>
              <div className="text-[10px] text-[#7B8DAA] font-semibold leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mb-4">
          <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
        </motion.div>

        <div className="relative ml-[34px] pl-[18px] flex flex-col gap-4" style={{ borderLeft: `2px solid ${GOLD}20` }}>
          {data.experienceTimeline.map((timelineItem, idx) => (
            <motion.div key={idx} variants={item} className="relative group">
              <div
                className="absolute -left-[25px] top-4 w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
              />
              <div
                className="absolute -left-[76px] top-3.5 text-[11px] font-black w-9 text-right"
                style={{ color: GOLD }}
              >
                {timelineItem.year}
              </div>

              <div className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center text-white shadow-sm"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
                  >
                    <Building2 size={11} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[13px] font-bold leading-tight" style={{ color: NAVY }}>{timelineItem.company}</h4>
                </div>
                <p className="text-[11px] text-[#7B8DAA] font-medium mb-2.5">{timelineItem.team}</p>
                <span
                  className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded"
                  style={{
                    background: `${GOLD}08`,
                    border: `1px solid ${GOLD}18`,
                    color: `${NAVY}BB`,
                  }}
                >
                  {timelineItem.program}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
