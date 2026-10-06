import { motion } from "motion/react";

import { data } from "../data";
import { PrimaryButton, VIEWPORT, staggerContainer, fadeUp } from "../../ui";
import mocksHero from "../../../assets/mocks_hero.jpg";

export default function Desktop() {
  const sectionData = data.hero;

  return (
    <section className="w-full flex items-center justify-between overflow-x-clip relative font-['Outfit'] fare-noise-overlay bg-[#FAFBFF]">
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[800px] h-[800px] bg-gradient-radial from-[#C5D9FF] to-transparent rounded-full blur-[140px] pointer-events-none z-0"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)`,
          backgroundSize: "60px 60px" }}
      />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 pt-16 pb-20 pl-6 sm:pl-10 lg:pl-14 xl:pl-20 pr-0 max-w-[1500px] mx-auto min-h-[85vh]">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="w-full lg:w-[48%] xl:w-[45%] flex flex-col items-start text-left shrink-0 pr-6 lg:pr-10"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-[#E6EBF3] luxury-shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="font-bold text-[11px] tracking-[0.15em] uppercase text-[#10B981] leading-none pt-0.5">
                {sectionData.supportingLine}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[42px] lg:text-[48px] xl:text-[56px] font-black mb-5 tracking-tight leading-[1.08] text-[#0B1D3A]"
          >
            {sectionData.title}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-[19px] xl:text-[21px] font-bold text-[#C99A2E] mb-4 tracking-wide"
          >
            {sectionData.subtitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[16px] xl:text-[17px] font-medium text-[#475569] leading-relaxed mb-10 max-w-[540px] whitespace-pre-line"
          >
            {sectionData.description}
          </motion.p>

          <motion.div variants={fadeUp}>
            <PrimaryButton className="px-8 py-4 text-[15px]">
              {sectionData.cta}
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[52%] xl:w-[55%] flex items-center justify-end pl-0 relative"
        >
          <div className="relative w-full h-[400px] lg:h-[550px] xl:h-[600px] rounded-tl-[120px] lg:rounded-tl-[240px] rounded-bl-[60px] lg:rounded-bl-[100px] overflow-hidden luxury-shadow-float border-l-4 border-t-4 border-b-4 border-white">
            <motion.img
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              src={mocksHero}
              alt="Trainer-led real estate mock practice session"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
