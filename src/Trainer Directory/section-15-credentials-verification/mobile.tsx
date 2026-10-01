import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award } from "lucide-react";

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

  return (
    <section
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Credentials & Verification</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
        >
          <ul className="flex flex-col gap-3">
            {data.credentials.map((cred, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 p-3 rounded bg-white border border-[#0B1D3A]/[0.04]"
              >
                <div
                  className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Award size={12} strokeWidth={2.5} />
                </div>
                <span className="text-[12px] font-semibold text-[#0B1D3A]/80 leading-[1.4] mt-0.5">{cred}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
