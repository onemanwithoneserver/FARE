import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ShieldCheck, Award } from "lucide-react";

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
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-4">
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Credentials</h2>
        </motion.div>
        
        <motion.div variants={item} className="mb-8">
          <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed">
            Rajesh's training programs and expertise are fully validated and recognized by top real estate institutions.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group rounded p-6 flex flex-col relative overflow-hidden border border-[#0B1D3A]/[0.08] shadow-[0_8px_24px_-8px_rgba(11,29,58,0.06)] bg-white/90 backdrop-blur-xl"
            >
              {/* Paper Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
              />
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[20px] pointer-events-none" />
              
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Award size={18} strokeWidth={2.5} />
                </div>

                {/* FARE Verified Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-white shadow-sm" style={{ borderColor: `${GOLD}40` }}>
                   <ShieldCheck size={12} style={{ color: GOLD }} strokeWidth={2.5} />
                   <span className="text-[9px] font-black uppercase tracking-[0.15em] pt-[1px]" style={{ color: NAVY }}>Verified</span>
                </div>
              </div>

              <h3 className="text-[15px] font-black text-[#0B1D3A] mb-4 tracking-tight leading-snug relative z-10">
                {cred}
              </h3>

              <div className="mt-auto pt-4 border-t border-[#0B1D3A]/[0.06] relative z-10 flex items-center justify-between">
                 <span className="text-[9px] text-[#7B8DAA] uppercase tracking-[0.15em] font-bold">Credential ID</span>
                 <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/60">
                   {`FR-${String(idx + 1).padStart(4, '0')}-${new Date().getFullYear()}`}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
