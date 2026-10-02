import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award, ShieldCheck } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg text-white">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Credentials & Verification</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-10 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] flex flex-col md:flex-row gap-12 items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-[#10B981]/10 to-transparent rounded-full blur-[40px] pointer-events-none" />

          <div className="w-full md:w-[450px] shrink-0 rounded overflow-hidden shadow-[0_12px_40px_-12px_rgba(11,29,58,0.25)] ring-1 ring-[#0B1D3A]/10 relative group bg-[#0B1D3A]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
             <img src="/credentials_badge.jpg" alt="Verified Credentials" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center w-full relative z-10">
            <h3 className="text-[22px] font-black text-[#0B1D3A] mb-3 tracking-tight">Verified Industry Credentials</h3>
            <p className="text-[15px] text-[#5A6B82] font-medium leading-relaxed mb-8 max-w-[450px]">
              Rajesh's training programs and expertise are fully validated and recognized by top real estate institutions and FARE standards.
            </p>
            <ul className="flex flex-col gap-4">
              {data.credentials.map((cred, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                  className="flex items-center gap-4 p-5 rounded border border-[#0B1D3A]/[0.06] bg-[#F8FAFD]/50 backdrop-blur-sm hover:bg-white shadow-sm hover:shadow-[0_8px_24px_-8px_rgba(11,29,58,0.12)] hover:border-[#0B1D3A]/[0.15] transition-all duration-400 ease-out group cursor-default"
                >
                  <div
                    className="w-12 h-12 shrink-0 rounded flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-400 ease-out relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Award size={22} strokeWidth={2.5} className="relative z-10" />
                  </div>
                  <span className="text-[15px] font-bold text-[#0B1D3A]/90 leading-snug">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
