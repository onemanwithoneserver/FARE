import { motion } from "motion/react";
import { data } from "../data";
import { FlowStrip, PrimaryButton, Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const sectionData = data.finalCta;
  const flowSteps = sectionData.coreMessage.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="white" ariaLabel="Get Started" className="border-t border-[#E6EBF3]">
      <motion.div variants={fadeUp}>
        <FlowStrip steps={flowSteps} highlight="PRACTICE" className="mb-10" />
        <h2 className="text-[#0B1D3A] text-[34px] md:text-[40px] lg:text-[46px] font-black mb-6 leading-[1.1] tracking-tight">
          {sectionData.title}
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E4C46A] mx-auto mb-6" />
        <p className="text-[18px] text-[#475569] font-medium whitespace-pre-line leading-[1.7]">
          {sectionData.description}
        </p>
      </motion.div>
      
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto"
      >
        {sectionData.sections.map((sec, index) => {
          const isFeatured = index === 2;
          return (
            <motion.div
              key={sec.title}
              variants={fadeUp}
              className={`p-8 rounded-[16px] flex flex-col justify-between group relative overflow-hidden transition-transform duration-500 hover:-translate-y-1.5 ${
                isFeatured
                  ? "bg-[#0B1D3A] text-white luxury-shadow-lg"
                  : "bg-[#F8F9FC] border border-[#E6EBF3] luxury-shadow-sm hover:border-[#C99A2E]/30"
              }`}
            >
              {isFeatured && (
                <div aria-hidden="true" className="absolute -right-16 -top-16 w-56 h-56 bg-[#C99A2E]/20 rounded-full blur-[40px] group-hover:bg-[#C99A2E]/30 transition-colors duration-500" />
              )}
              <div className="relative z-10 mb-10">
                <div className={`text-[12px] font-bold tracking-widest uppercase mb-4 ${isFeatured ? "text-[#E2C068]" : "text-[#0B1D3A]/50"}`}>
                  {sec.title}
                </div>
                <h3 className={`text-[22px] font-bold leading-snug mb-3 ${isFeatured ? "text-white" : "text-[#0B1D3A]"}`}>
                  {sec.subtitle}
                </h3>
                <p className={`text-[15px] leading-relaxed font-medium ${isFeatured ? "text-white/70" : "text-[#475569]"}`}>
                  {sec.desc}
                </p>
              </div>
              <div className="relative z-10 mt-auto">
                <PrimaryButton full variant={isFeatured ? "gold" : "navy"}>
                  {sec.cta}
                </PrimaryButton>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
