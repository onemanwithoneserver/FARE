import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Users } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const audienceColors = [
  { bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { bg: "linear-gradient(135deg, #10B981, #059669)" },
];

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
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative fare-noise-overlay"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className=" text-[#0B1D3A] text-[22px] font-black tracking-[-0.02em]">{t("Learner Audience")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 gap-5">
          {data.learnerAudience.map((audience, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white/90 backdrop-blur-xl rounded-[4px] p-6 border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/18 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] hover:luxury-shadow-float transition-all duration-400 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: audienceColors[idx % audienceColors.length].bg }}
              />
              <div
                className="w-10 h-10 rounded-[4px] flex items-center justify-center text-white luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: audienceColors[idx % audienceColors.length].bg }}
              >
                <Users size={18} strokeWidth={2.2} />
              </div>
              <h3 className=" text-[15px] font-bold mb-2" style={{ color: NAVY }}>{audience.title}</h3>
              <p className="text-[13px] text-[#7B8DAA] leading-[1.65] font-medium">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
