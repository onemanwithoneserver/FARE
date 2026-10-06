import { motion } from "motion/react";

import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { PrimaryButton, VIEWPORT, staggerContainer, fadeUp } from "../../../Practice/ui";
import freelancersResidentialHero from "../../../assets/freelancers_residential_hero.jpg";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] bg-[#FAFBFF]">
      <div className="py-12 px-5 relative z-10">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-6 max-w-full">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C99A2E]"></span>
              </span>
              <span className="font-bold text-[9.5px] tracking-[0.12em] uppercase text-[#C99A2E] leading-snug pt-0.5">
                {data.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] font-black text-[#0B1D3A] mb-4 tracking-tight leading-[1.12]"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[14.5px] text-[#475569] font-medium whitespace-pre-wrap leading-relaxed mb-8"
          >
            {data.description}
          </motion.p>

          <motion.div variants={fadeUp} className="w-full mb-8">
            <div className="w-full rounded-[16px] overflow-hidden border-2 border-white luxury-shadow-sm">
              <img
                src={freelancersResidentialHero}
                alt="Professional looking out window"
                className="w-full h-[240px] object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full flex flex-col gap-3">
            <PrimaryButton full mobile>
              {data.buttons.primary}
            </PrimaryButton>
            <button
              className="w-full text-[14px] font-bold px-5 py-3.5 rounded-[10px] border border-[#0B1D3A]/15 bg-white active:scale-[0.98] transition-all duration-300 ease-out text-[#0B1D3A]"
            >
              {data.buttons.secondary}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
