import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award, ShieldCheck } from "lucide-react";

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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
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
            <ShieldCheck size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Credentials & Verification</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-6 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] flex flex-col gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-radial from-[#10B981]/10 to-transparent rounded-full blur-[30px] pointer-events-none" />

          <div className="w-full shrink-0 rounded overflow-hidden shadow-[0_12px_40px_-12px_rgba(11,29,58,0.25)] ring-1 ring-[#0B1D3A]/10 relative group bg-[#0B1D3A]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/40 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
             <img src="/credentials_badge.jpg" alt="Verified Credentials" className="w-full h-auto aspect-[4/3] object-cover mix-blend-luminosity opacity-80" />
          </div>

          <div className="flex-1 flex flex-col w-full relative z-10">
            <h3 className="text-[18px] font-black text-[#0B1D3A] mb-2 tracking-tight">Verified Credentials</h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed mb-6">
              Rajesh's training programs and expertise are fully validated and recognized.
            </p>
            <ul className="flex flex-col gap-3">
              {data.credentials.map((cred, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded border border-[#0B1D3A]/[0.06] bg-[#F8FAFD]/50 backdrop-blur-sm shadow-sm transition-all duration-300 ease-out"
                >
                  <div
                    className="w-10 h-10 shrink-0 rounded flex items-center justify-center text-white shadow-md relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                    <Award size={18} strokeWidth={2.5} className="relative z-10" />
                  </div>
                  <span className="text-[13px] font-bold text-[#0B1D3A]/90 leading-snug">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
