import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Users, Heart, Sparkles, Briefcase, MessageCircle, Zap } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const t = useProfileText();
  const getCategoryIcon = (category: string, size: number, strokeWidth: number) => {
    const cat = category.toLowerCase();
    if (cat.includes("sales")) return <Target size={size} strokeWidth={strokeWidth} />;
    if (cat.includes("leadership") || cat.includes("management")) return <Users size={size} strokeWidth={strokeWidth} />;
    if (cat.includes("customer")) return <Heart size={size} strokeWidth={strokeWidth} />;
    if (cat.includes("communication")) return <MessageCircle size={size} strokeWidth={strokeWidth} />;
    if (cat.includes("digital") || cat.includes("tech")) return <Zap size={size} strokeWidth={strokeWidth} />;
    if (cat.includes("product")) return <Briefcase size={size} strokeWidth={strokeWidth} />;
    return <Sparkles size={size} strokeWidth={strokeWidth} />;
  };
  const data = useProfileData();

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
      className="w-full py-8 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-5">
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-white text-[24px] font-black tracking-[-0.02em]">{t("Training Expertise")}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {data.expertise.map((categoryObj, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/90 backdrop-blur-xl rounded-[4px] p-4 border border-[#0B1D3A]/[0.06] luxury-shadow-float relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
                style={{ background: domainColors[idx % domainColors.length].bg }}
              />
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-9 h-9 rounded-[4px] flex items-center justify-center text-white shadow-md"
                  style={{ background: domainColors[idx % domainColors.length].bg }}
                >
                  {getCategoryIcon(categoryObj.category, 14, 2.5)}
                </div>
                <h3 className="text-[15px] font-black tracking-tight" style={{ color: NAVY }}>{categoryObj.category}</h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                {categoryObj.skills.map((skill, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-[13px] text-[#5A6B82] font-medium leading-[1.4] p-2 rounded-[4px] bg-[#0B1D3A]/[0.02]">
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
