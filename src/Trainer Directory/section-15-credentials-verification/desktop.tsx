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
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-3xl p-8 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="w-full md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(11,29,58,0.3)] ring-1 ring-[#0B1D3A]/10 relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
             <img src="/credentials_badge.jpg" alt="Verified Credentials" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center w-full">
            <h3 className="text-[18px] font-black text-[#0B1D3A] mb-2">Verified Industry Credentials</h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed mb-6 max-w-[400px]">
              Rajesh's training programs and expertise are fully validated and recognized by top real estate institutions and FARE standards.
            </p>
            <ul className="flex flex-col gap-4">
              {data.credentials.map((cred, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#0B1D3A]/[0.06] bg-white shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out group"
                >
                  <div
                    className="w-10 h-10 shrink-0 rounded-full ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                  >
                    <Award size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[14px] font-bold text-[#0B1D3A]/90 leading-tight">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
