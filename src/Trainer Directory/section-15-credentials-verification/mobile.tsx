import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const t = useProfileText();
  const data = useProfileData();

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
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-[4px]-[4px]-[4px]-full blur-[90px] pointer-events-none z-0 opacity-40"
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
          <div className="w-[3px] h-6 rounded-[4px]-[4px]-[4px]-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Credentials")}</h2>
        </motion.div>
        
        <motion.div variants={item} className="mb-8">
          <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed">
            {t("A selection of professional credentials and certifications listed on the trainer profile.")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.credentials.map((cred) => (
            <motion.div
              key={cred}
              variants={item}
              className="group rounded-[4px]-[4px]-[4px] p-5 flex flex-col relative overflow-hidden border border-[#0B1D3A]/[0.08] luxury-shadow-float bg-white"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C99A2E] to-[#D5AA45]" />
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div
                  className="w-10 h-10 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Award size={18} strokeWidth={2.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">{t("Credential")}</span>
              </div>

              <h3 className="text-[15px] font-black text-[#0B1D3A] tracking-tight leading-snug relative z-10">
                {cred}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
