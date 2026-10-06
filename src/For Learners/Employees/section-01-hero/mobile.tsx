import { motion, useReducedMotion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { SecondaryButton, PrimaryButton, EASE, fadeUp, staggerContainer } from "../../../Practice/ui";
import employeesHero from "../../../assets/employees_hero.jpg";

export default function Mobile() {
  const reduce = useReducedMotion();
  const { language } = useLanguage();
  const sectionData = getData(language) as any;

  const badge = sectionData.badge;
  const headline = sectionData.headline || sectionData.title;
  const subheadline = sectionData.subheadline || sectionData.subtitle;
  const description = sectionData.description;
  const primaryBtn = sectionData.buttons ? sectionData.buttons.primary : sectionData.cta;
  const secondaryBtn = sectionData.buttons ? sectionData.buttons.secondary : sectionData.secondaryCta;

  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] fare-noise-overlay bg-[#FAFBFF] pt-28 pb-16 px-6">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.18)" }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] animate-pulse-glow" style={{ background: "rgba(201,154,46,0.12)", animationDelay: "1s" }} />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {badge && (
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-6"
          >
            <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#FB7185,#E11D48)" }}>
              <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping bg-[#E11D48]/40" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B1D3A]/75 leading-none mt-[1px]">{badge}</span>
          </motion.span>
          )}

          <motion.h1
            variants={fadeUp}
            className="text-[2.25rem] xs:text-[2.5rem] font-black tracking-tight leading-[1.05] text-[#0B1D3A] mb-4"
          >
            {headline}
          </motion.h1>

          {subheadline && (
          <motion.p variants={fadeUp} className="text-[17px] font-bold leading-snug mb-4">
            <span className="gold-gradient-text">{subheadline}</span>
          </motion.p>
          )}

          <motion.p variants={fadeUp} className="text-[15px] font-medium text-[#475569] leading-relaxed max-w-[400px] mb-8 whitespace-pre-line">
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 w-full max-w-[400px] mb-10">
            {primaryBtn && <PrimaryButton>{primaryBtn}</PrimaryButton>}
            {secondaryBtn && <SecondaryButton>{secondaryBtn}</SecondaryButton>}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="w-full relative mt-4 px-2"
        >
          <div className="relative w-full aspect-[4/3] rounded-tl-[80px] rounded-br-[60px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden luxury-shadow-sm border border-[#E6EBF3]">
            <img src={employeesHero} alt="Hero" className="w-full h-full object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
