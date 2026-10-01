import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Check } from "lucide-react";

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
};

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

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <div className="absolute top-[30%] right-[8%] w-[400px] h-[400px] bg-gradient-radial from-[#DDEAFF]/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Areas of Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5">
          {data.expertise.map((expertiseItem, idx) => {
            const colors = categoryColors[idx % categoryColors.length];
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/18 rounded p-6 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] hover:shadow-[0_12px_36px_-12px_rgba(11,29,58,0.1)] transition-all duration-400 relative overflow-hidden"
              >
                                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}80)` }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ background: colors.bg }}
                  >
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.12em]" style={{ color: NAVY }}>
                    {expertiseItem.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {expertiseItem.skills.map((skill, sIdx) => {
                    const lc = levelColors[skill.level] || levelColors["Intermediate"];
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] font-semibold transition-all duration-200 hover:translate-x-0.5"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent}08, ${colors.accent}03)`,
                          border: `1px solid ${colors.accent}18`,
                          color: `${NAVY}CC`,
                        }}
                      >
                        {skill.name}
                        <span
                          className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded"
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
