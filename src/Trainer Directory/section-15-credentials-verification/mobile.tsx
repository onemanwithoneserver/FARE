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
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-3xl p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] flex flex-col gap-6"
        >
          <div className="w-full shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(11,29,58,0.3)] ring-1 ring-[#0B1D3A]/10 relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
             <img src="/credentials_badge.jpg" alt="Verified Credentials" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>

          <div className="flex-1 flex flex-col w-full">
            <h3 className="text-[16px] font-black text-[#0B1D3A] mb-2">Verified Credentials</h3>
            <p className="text-[12px] text-[#5A6B82] font-medium leading-relaxed mb-5">
              Rajesh's training programs and expertise are fully validated and recognized.
            </p>
            <ul className="flex flex-col gap-3">
              {data.credentials.map((cred, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out"
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-full ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                  >
                    <Award size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-[12px] font-bold text-[#0B1D3A]/90 leading-tight">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
