import { motion, useReducedMotion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { SecondaryButton, PrimaryButton, EASE, fadeUp, staggerContainer } from "../../../Practice/ui";
import openPlotHero from "../../../assets/openplot_hero.jpg";

export default function Desktop() {
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
    <section
      aria-label={headline}
      className="w-full relative overflow-x-clip font-['Outfit'] fare-noise-overlay bg-[#FAFBFF]"
    >
      {/* ambient light */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[4%] right-[8%] w-[680px] h-[680px] rounded-full blur-[140px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.18)" }} />
        <div className="absolute bottom-[6%] left-[2%] w-[460px] h-[460px] rounded-full blur-[120px] animate-pulse-glow" style={{ background: "rgba(201,154,46,0.1)", animationDelay: "1.2s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(90deg, black 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(90deg, black 0%, transparent 60%)" }}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 pt-6 lg:pt-10 pb-12 lg:pb-16 pl-6 sm:pl-10 lg:pl-14 xl:pl-20 pr-0 max-w-[1500px] mx-auto">
        {/* Copy */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start text-left shrink-0 py-4 lg:py-6 pr-6 lg:pr-10"
        >
          {badge && (
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-6"
          >
            <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full text-white" style={{ background: "linear-gradient(135deg,#FB7185,#E11D48)" }}>
              <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping bg-[#E11D48]/40" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B1D3A]/75 leading-none mt-[1px]">{badge}</span>
          </motion.span>
          )}

          <motion.h1
            variants={fadeUp}
            className="text-[2.75rem] lg:text-[3.2rem] xl:text-[3.6rem] font-black tracking-[-0.025em] leading-[1.04] text-[#0B1D3A] mb-5"
          >
            {headline}
          </motion.h1>

          {subheadline && (
          <motion.p variants={fadeUp} className="text-[20px] xl:text-[22px] font-bold leading-snug mb-5">
            <span className="gold-gradient-text">{subheadline}</span>
          </motion.p>
          )}

          <motion.p variants={fadeUp} className="text-[16px] xl:text-[17.5px] font-medium text-[#475569] leading-[1.7] max-w-[540px] mb-8 whitespace-pre-line">
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-9">
            {primaryBtn && <PrimaryButton>{primaryBtn}</PrimaryButton>}
            {secondaryBtn && <SecondaryButton>{secondaryBtn}</SecondaryButton>}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 48, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-end relative mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[450px] lg:h-[550px] xl:h-[600px] rounded-tl-[160px] lg:rounded-tl-[240px] xl:rounded-tl-[280px] rounded-bl-[70px] lg:rounded-bl-[100px] overflow-hidden luxury-shadow-float border-l border-t border-b border-white/80">
            <motion.img
              animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              src={openPlotHero}
              alt="Hero image"
              className="w-full h-full object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/35 via-[#0B1D3A]/5 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
