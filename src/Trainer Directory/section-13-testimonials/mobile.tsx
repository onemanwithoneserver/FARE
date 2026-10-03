import { useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Building2, Link2 } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const t = useProfileText();
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
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-[4px]-[4px]-[4px]-full blur-[80px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-[4px]-[4px]-[4px]-full blur-[90px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-[3px] h-6 rounded-[4px]-[4px]-[4px]-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Company Feedback")}</h2>
        </motion.div>

        <motion.div variants={item} className="w-full">
          <div className="rounded-[4px]-[4px]-[4px] border border-[#0B1D3A]/[0.08] bg-gradient-to-br from-white via-[#FBFCFE] to-[#F3F6FB] p-5 shadow-[0_12px_32px_-20px_rgba(11,29,58,0.35)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[4px]-[4px]-[4px] border border-[#C99A2E]/20 bg-[#FBF4E4] text-[#A87918]">
                <Building2 size={23} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-[4px]-[4px]-[4px]-full border border-[#64748B]/15 bg-[#F1F5F9] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#64748B]">
                <span className="h-1.5 w-1.5 rounded-[4px]-[4px]-[4px]-full bg-[#94A3B8]" />
                {t("Live source not connected")}
              </span>
            </div>
            <h3 className="text-[17px] font-black leading-snug tracking-tight text-[#0B1D3A]">
              {t("No verified company feedback yet")}
            </h3>
            <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-[#5A6B82]">
              {t("Real company feedback will appear here when a verifiable source is connected. No sample or unverified reviews are shown.")}
            </p>
            <div className="mt-4 flex items-start gap-2 border-t border-[#0B1D3A]/[0.07] pt-3 text-[11px] font-medium leading-relaxed text-[#64748B]">
              <Link2 size={15} className="mt-0.5 shrink-0 text-[#C99A2E]" aria-hidden="true" />
              <span>{t("Each review will include the company name, reviewer attribution, and a verifiable source link.")}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
