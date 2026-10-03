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
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }}
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-10">
          <div className="w-[4px] h-10 lg:h-12 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight" style={{ color: NAVY }}>About the Trainer</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-7 flex flex-col">
            <motion.p variants={item} className="text-[17px] text-[#5A6B82] mb-10 leading-[1.8] font-medium">
              {data.about.text}
            </motion.p>

            <motion.div
              variants={item}
              className="relative p-8 rounded overflow-hidden mt-auto group"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(24px) saturate(1.6)",
                border: "1px solid rgba(11,29,58,0.08)",
                boxShadow: "0 8px 32px -8px rgba(11,29,58,0.06)",
              }}
            >
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-[#C99A2E] to-[#D5AA45] opacity-80" />
              <Quote size={40} className="absolute top-6 right-6 rotate-180 opacity-[0.04]" style={{ color: NAVY }} />
              <p className="text-[18px] font-medium leading-[1.65] relative z-10 text-[#0B1D3A]">
                {data.about.quote}
              </p>
            </motion.div>
          </div>

          <div className="col-span-5 grid grid-cols-2 gap-4">
            {data.about.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded p-6 flex flex-col justify-center luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-300 group/stat relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover/stat:opacity-100 transition-opacity" style={{ background: statIcons[idx]?.bg || statIcons[0].bg }} />
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-white shadow-md mb-4 group-hover/stat:scale-110 transition-transform duration-300"
                  style={{ background: statIcons[idx]?.bg || statIcons[0].bg }}
                >
                  {statIcons[idx]?.icon || statIcons[0].icon}
                </div>
                <div className="text-[26px] font-black mb-1 tracking-tight" style={{ color: NAVY }}>{stat.value}</div>
                <div className="text-[12px] text-[#7B8DAA] font-bold uppercase tracking-[0.1em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
