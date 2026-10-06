import { motion } from "motion/react";
import { data } from "../data";
import { FlowStrip, PrimaryButton, Reveal, Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const sectionData = data.finalCta;
  const flowSteps = sectionData.coreMessage.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="white" mobile ariaLabel="Get Started" className="border-t border-[#E6EBF3]">
      <Reveal className="text-center mb-12">
        <FlowStrip steps={flowSteps} mobile highlight="PRACTICE" className="mb-8" />
        <h2 className="text-[#0B1D3A] text-[28px] font-black mb-5 leading-tight tracking-tight">
          {sectionData.title}
        </h2>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E4C46A] mx-auto mb-5" />
        <p className="text-[15px] text-[#475569] font-medium whitespace-pre-line leading-relaxed">
          {sectionData.description}
        </p>
      </Reveal>
      
      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {sectionData.sections.map((sec, index) => {
          const isFeatured = index === 2;
          return (
            <motion.div
              key={sec.title}
              variants={fadeUp}
              className={`p-6 rounded-[16px] flex flex-col relative overflow-hidden ${
                isFeatured
                  ? "bg-[#0B1D3A] text-white luxury-shadow-lg"
                  : "bg-[#F8F9FC] border border-[#E6EBF3]"
              }`}
            >
              {isFeatured && (
                <div aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 bg-[#C99A2E]/20 rounded-full blur-[30px]" />
              )}
              <div className="relative z-10 mb-8">
                <div className={`text-[11px] font-bold tracking-widest uppercase mb-2 ${isFeatured ? "text-[#E2C068]" : "text-[#0B1D3A]/50"}`}>
                  {sec.title}
                </div>
                <h3 className={`text-[18px] font-bold leading-snug mb-2.5 ${isFeatured ? "text-white" : "text-[#0B1D3A]"}`}>
                  {sec.subtitle}
                </h3>
                <p className={`text-[14px] leading-relaxed font-medium ${isFeatured ? "text-white/70" : "text-[#475569]"}`}>
                  {sec.desc}
                </p>
              </div>
              <PrimaryButton full mobile variant={isFeatured ? "gold" : "navy"} className="relative z-10">
                {sec.cta}
              </PrimaryButton>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
