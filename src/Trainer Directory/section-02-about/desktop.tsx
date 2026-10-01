import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Briefcase, GraduationCap, Users, Award } from "lucide-react";

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
    { icon: <Briefcase size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
    { icon: <GraduationCap size={18} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
    { icon: <Users size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
    { icon: <Award size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
  ];

  return (
    <section
      className="w-full py-14 px-10 font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
            <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#DDEAFF]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
                <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>About the Trainer</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-8">
            <motion.p variants={item} className="text-[15px] text-[#5A6B82] mb-8 leading-[1.75]">
              {data.about.text}
            </motion.p>

                        <motion.div
              variants={item}
              className="relative rounded p-7 border-l-[3px]"
              style={{
                background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`,
                borderLeftColor: GOLD,
                border: `1px solid ${GOLD}18`,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <Quote size={32} className="absolute top-4 right-4 rotate-180 opacity-[0.08]" style={{ color: GOLD }} />
              <p className="text-[16px] italic font-medium leading-[1.65] relative z-10" style={{ color: NAVY }}>
                {data.about.quote}
              </p>
            </motion.div>
          </div>

                    <div className="col-span-4 grid grid-cols-2 gap-3">
            {data.about.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-4 flex flex-col justify-center shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.1)] transition-all duration-400 group"
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: statIcons[idx]?.bg || statIcons[0].bg }}
                >
                  {statIcons[idx]?.icon || statIcons[0].icon}
                </div>
                <div className="text-[20px] font-black mb-0.5" style={{ color: NAVY }}>{stat.value}</div>
                <div className="text-[11px] text-[#7B8DAA] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
