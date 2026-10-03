import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Award } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

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
        className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-[4px]-[4px]-[4px]-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-[4px]-[4px]-[4px]-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-4">
          <div className="w-[4px] h-7 rounded-[4px]-[4px]-[4px]-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Credentials \u0026 Qualifications")}</h2>
        </motion.div>
        
        <motion.div variants={item} className="mb-12">
          <p className="text-[15px] text-[#5A6B82] font-medium max-w-[500px]">
            {t("A selection of professional credentials and certifications listed on the trainer profile.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {data.credentials.map((cred) => (
            <motion.div
              key={cred}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="group rounded-[4px]-[4px]-[4px] p-7 flex flex-col relative overflow-hidden transition-all duration-300 border border-[#0B1D3A]/[0.08] hover:border-[#C99A2E]/[0.4] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] bg-white"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C99A2E] to-[#D5AA45]" />
              <div className="flex items-center justify-between mb-7 relative z-10">
                <div
                  className="w-12 h-12 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Award size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">{t("Credential")}</span>
              </div>

              <h3 className="text-[18px] font-black text-[#0B1D3A] tracking-tight leading-snug relative z-10">
                {cred}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
