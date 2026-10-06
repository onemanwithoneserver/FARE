import { motion } from "motion/react";
import { data } from "../data";
import { PrimaryButton, Reveal, VIEWPORT, staggerContainer, fadeUp } from "../../ui";
import mocksHero from "../../../assets/mocks_hero.jpg";

export default function Mobile() {
  const sectionData = data.hero;

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
              </span>
              <span className="font-bold text-[9.5px] tracking-[0.12em] uppercase text-[#10B981] leading-snug pt-0.5">
                {sectionData.supportingLine}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] font-black text-[#0B1D3A] mb-4 tracking-tight leading-[1.12]"
          >
            {sectionData.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[16px] font-bold text-[#C99A2E] mb-3 leading-snug"
          >
            {sectionData.subtitle}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[14.5px] text-[#475569] font-medium whitespace-pre-wrap leading-relaxed mb-8"
          >
            {sectionData.description}
          </motion.p>

          <motion.div variants={fadeUp} className="w-full mb-8">
            <div className="w-full rounded-[16px] overflow-hidden border-2 border-white luxury-shadow-sm">
              <img
                src={mocksHero}
                alt="Trainer-led real estate mock practice session"
                className="w-full h-[240px] object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            <PrimaryButton full mobile>{sectionData.cta}</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
