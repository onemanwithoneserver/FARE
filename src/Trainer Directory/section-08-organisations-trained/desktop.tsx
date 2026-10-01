import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

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

  const statIcons = [
    { icon: <Briefcase size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
    { icon: <GraduationCap size={18} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  ];

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#DDEAFF]/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience & Track Record</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3 flex flex-col gap-3">
            {data.about.stats.slice(0, 2).map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 flex flex-col shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.1)] transition-all duration-400 group"
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: statIcons[idx]?.bg || statIcons[0].bg }}
                >
                  {statIcons[idx]?.icon || statIcons[0].icon}
                </div>
                <div className="text-[22px] font-black mb-0.5" style={{ color: NAVY }}>{stat.value}</div>
                <div className="text-[11px] text-[#7B8DAA] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

                    <div className="col-span-9">
            <motion.div variants={item} className="mb-5">
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
            </motion.div>

            <div className="relative ml-8 pl-8 flex flex-col gap-5" style={{ borderLeft: `2px solid ${GOLD}20` }}>
              {data.experienceTimeline.map((timelineItem, idx) => (
                <motion.div key={idx} variants={item} className="relative group">
                                    <div
                    className="absolute -left-[42px] top-4 w-3 h-3 rounded-full ring-4 ring-white shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                  />
                                    <div
                    className="absolute -left-[100px] top-3 text-[13px] font-black w-12 text-right"
                    style={{ color: GOLD }}
                  >
                    {timelineItem.year}
                  </div>

                  <div className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] transition-all duration-400 group-hover:-translate-y-0.5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="w-7 h-7 rounded flex items-center justify-center text-white shadow-sm"
                        style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
                      >
                        <Building2 size={13} strokeWidth={2.5} />
                      </div>
                      <h4 className="text-[14px] font-bold" style={{ color: NAVY }}>{timelineItem.company}</h4>
                    </div>
                    <p className="text-[12px] text-[#7B8DAA] font-medium mb-3">{timelineItem.team}</p>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded"
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
