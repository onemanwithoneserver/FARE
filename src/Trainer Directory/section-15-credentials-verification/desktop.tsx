import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award } from "lucide-react";

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

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
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
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Credentials & Verification</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-8 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
        >
          <ul className="grid grid-cols-2 gap-4">
            {data.credentials.map((cred, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-[#0B1D3A]/[0.06] bg-white shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out group"
              >
                <div
                  className="w-8 h-8 shrink-0 rounded-full ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mt-0.5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Award size={16} strokeWidth={2.5} />
                </div>
                <span className="text-[14px] font-semibold text-[#0B1D3A]/80 leading-snug mt-1">{cred}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
