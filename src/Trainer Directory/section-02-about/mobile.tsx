import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award, Users, Briefcase, GraduationCap } from "lucide-react";

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
    { icon: <Briefcase size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
    { icon: <GraduationCap size={16} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
    { icon: <Users size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
    { icon: <Award size={16} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
  ];

  return (
    <section
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }}
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg text-white shrink-0">
            <Users size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>About Trainer</h2>
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <p className="text-[15px] text-[#5A6B82] leading-[1.7] font-light">
            {data.about.text}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="relative p-6 rounded overflow-hidden mb-10 group"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(24px) saturate(1.6)",
            border: "1px solid rgba(11,29,58,0.08)",
            boxShadow: "0 8px 32px -8px rgba(11,29,58,0.06)",
          }}
        >
          <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C99A2E] to-[#D5AA45] opacity-80" />
          <p className="text-[15px] font-medium leading-[1.65] relative z-10 text-[#0B1D3A] italic">
            "{data.about.quote}"
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {data.about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded p-4 flex flex-col justify-center shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60" style={{ background: statIcons[idx]?.bg || statIcons[0].bg }} />
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white shadow-md mb-3"
                style={{ background: statIcons[idx]?.bg || statIcons[0].bg }}
              >
                {statIcons[idx]?.icon || statIcons[0].icon}
              </div>
              <div className="text-[22px] font-black mb-1 tracking-tight" style={{ color: NAVY }}>{stat.value}</div>
              <div className="text-[10px] text-[#7B8DAA] font-bold uppercase tracking-[0.1em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
