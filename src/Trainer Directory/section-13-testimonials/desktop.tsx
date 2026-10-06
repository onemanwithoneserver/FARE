import { useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Building2, Link2 } from "lucide-react";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
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
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className=" text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em]">{t("Company Feedback")}</h2>
        </motion.div>

        <motion.div variants={item} className="w-full max-w-[900px] mx-auto">
          <div className="grid gap-6 rounded-[16px] border border-[#0B1D3A]/[0.08] bg-gradient-to-br from-white via-[#FBFCFE] to-[#F3F6FB] p-8 luxury-shadow-float md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-[16px] border border-[#C99A2E]/20 bg-[#FBF4E4] text-[#A87918] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400">
              <Building2 size={32} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#64748B]/15 bg-[#F1F5F9] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                {t("Live source not connected")}
              </div>
              <h3 className=" text-[20px] font-black tracking-tight text-[#0B1D3A]">
                {t("No verified company feedback yet")}
              </h3>
              <p className="mt-2 max-w-[650px] text-[14px] font-medium leading-relaxed text-[#5A6B82]">
                {t("Real company feedback will appear here when a verifiable source is connected. No sample or unverified reviews are shown.")}
              </p>
              <div className="mt-5 flex items-start gap-2.5 border-t border-[#0B1D3A]/[0.07] pt-4 text-[12px] font-medium leading-relaxed text-[#64748B]">
                <Link2 size={16} className="mt-0.5 shrink-0 text-[#C99A2E]" aria-hidden="true" />
                <span>{t("Each review will include the company name, reviewer attribution, and a verifiable source link.")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
