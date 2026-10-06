import { motion } from "motion/react";

import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { PrimaryButton, VIEWPORT, staggerContainer, fadeUp } from "../../../Practice/ui";
import studentsHero from "../../../assets/students_hero.jpg";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full flex items-center justify-between overflow-x-clip relative font-['Outfit'] fare-noise-overlay bg-[#FAFBFF]">
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[800px] h-[800px] bg-gradient-radial from-[#C5D9FF] to-transparent rounded-full blur-[140px] pointer-events-none z-0"
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C99A2E]"></span>
              </span>
              <span className="font-bold text-[11px] tracking-[0.15em] uppercase text-[#C99A2E] leading-none pt-0.5">
                {data.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[42px] lg:text-[48px] xl:text-[56px] font-black mb-5 tracking-tight leading-[1.08] text-[#0B1D3A]"
          >
            {data.headline}
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="text-[18px] font-semibold text-[#0B1D3A]/85 mb-4"
          >
            {data.subheadline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[16px] xl:text-[17px] font-medium text-[#475569] leading-relaxed mb-10 max-w-[540px] whitespace-pre-wrap"
          >
            {data.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <PrimaryButton className="px-8 py-4 text-[15px]">
              {data.buttons.primary}
            </PrimaryButton>
            <button
              className="text-[15px] font-bold px-8 py-4 rounded-[12px] border border-[#0B1D3A]/15 bg-white hover:bg-[#F8FAFD] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-[#0B1D3A]"
            >
              {data.buttons.secondary}
            </button>
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
              src={studentsHero}
              alt="Students and freshers"
              className="w-full h-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}