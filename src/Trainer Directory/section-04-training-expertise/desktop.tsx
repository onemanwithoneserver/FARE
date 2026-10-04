import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Target, Users, Heart, Star, Briefcase, MessageCircle, Zap } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const categoryColors = [
  { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
  { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
  { accent: "#10B981", bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
];

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  "Expert": { bg: `${GOLD}12`, text: GOLD, border: `${GOLD}25` },
  "Advanced": { bg: "rgba(59,130,246,0.08)", text: "#3B82F6", border: "rgba(59,130,246,0.2)" },
  "Intermediate": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "Beginner": { bg: "rgba(107,114,128,0.08)", text: "#6B7280", border: "rgba(107,114,128,0.2)" },
  "నిపుణ స్థాయి": { bg: `${GOLD}12`, text: GOLD, border: `${GOLD}25` },
  "అధునాతన స్థాయి": { bg: "rgba(59,130,246,0.08)", text: "#3B82F6", border: "rgba(59,130,246,0.2)" },
  "మధ్యంతర స్థాయి": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "ప్రారంభ స్థాయి": { bg: "rgba(107,114,128,0.08)", text: "#6B7280", border: "rgba(107,114,128,0.2)" },
};

const getCategoryIcon = (category: string, size: number, strokeWidth: number) => {
  const cat = category.toLowerCase();
  if (cat.includes("sales")) return <Target size={size} strokeWidth={strokeWidth} />;
  if (cat.includes("leadership") || cat.includes("management")) return <Users size={size} strokeWidth={strokeWidth} />;
  if (cat.includes("customer")) return <Heart size={size} strokeWidth={strokeWidth} />;
  if (cat.includes("communication")) return <MessageCircle size={size} strokeWidth={strokeWidth} />;
  if (cat.includes("digital") || cat.includes("tech")) return <Zap size={size} strokeWidth={strokeWidth} />;
  if (cat.includes("product")) return <Briefcase size={size} strokeWidth={strokeWidth} />;
  return <Star size={size} strokeWidth={strokeWidth} />;
};

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-12 px-8 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[8%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 40, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em]">{t("Areas of Expertise")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {data.expertise.map((expertiseItem, idx) => {
            const colors = categoryColors[idx % categoryColors.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded-[4px] p-5 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-400 relative overflow-hidden flex flex-col h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: colors.bg }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-[4px] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-400"
                    style={{ background: colors.bg }}
                  >
                    {getCategoryIcon(expertiseItem.category, 18, 3)}
                  </div>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.1em]" style={{ color: NAVY }}>
                    {expertiseItem.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {expertiseItem.skills.map((skill, sIdx) => {
                    const lc = levelColors[skill.level] || levelColors["Intermediate"];
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-3 py-2 rounded-[4px] text-[13px] font-semibold transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent}0A, ${colors.accent}04)`,
                          border: `1px solid ${colors.accent}20`,
                          color: `${NAVY}E6`,
                        }}
                      >
                        {skill.name}
                        <span
                          className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-[4px] ml-1"
                          style={{ background: lc.bg, color: lc.text, border: `1px solid ${lc.border}` }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
