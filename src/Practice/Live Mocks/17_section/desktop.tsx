import { motion } from "motion/react";
import { data } from "../data";
import { FlowStrip, PrimaryButton, Reveal, Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.finalCta;
  const flowSteps = s.coreJourney.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="white" ariaLabel="Get Started" className="border-t border-[#E6EBF3]">
      <Reveal className="text-center max-w-4xl mx-auto mb-16">
        <FlowStrip steps={flowSteps} highlight="PRACTISE" className="mb-10" />
        <h2 className="text-[#0B1D3A] text-[34px] md:text-[40px] lg:text-[46px] font-black mb-6 leading-[1.1] tracking-tight">
          {s.title}
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E4C46A] mx-auto mb-6" />

      </Reveal>
      
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto"
      >
        {s.sections.map((sec, index) => {
          const featured = index === 0;
          return (
            <motion.div
              key={sec.title}
              variants={fadeUp}
              className={`p-8 rounded-[16px] flex flex-col justify-between group relative overflow-hidden transition-transform duration-500 hover:-translate-y-1.5 ${
                featured
                  ? "bg-[#0B1D3A] text-white luxury-shadow-lg"
                  : "bg-[#F8F9FC] border border-[#E6EBF3] luxury-shadow-sm hover:border-[#C99A2E]/30"
              }`}
            >
              {featured && (
                <div aria-hidden="true" className="absolute -right-16 -top-16 w-56 h-56 bg-[#C99A2E]/20 rounded-full blur-[40px] group-hover:bg-[#C99A2E]/30 transition-colors duration-500" />
              )}
              <div className="relative z-10 mb-10">
                <div className={`text-[12px] font-bold tracking-widest uppercase mb-4 ${featured ? "text-[#E2C068]" : "text-[#0B1D3A]/50"}`}>
                  {sec.title}
                </div>
                <h3 className={`text-[22px] font-bold leading-snug ${featured ? "text-white" : "text-[#0B1D3A]"}`}>
                  {sec.subtitle}
                </h3>
              </div>
              <div className="relative z-10 mt-auto">
                <PrimaryButton full variant={featured ? "gold" : "navy"}>
                  {sec.cta.replace('→', '')}
                </PrimaryButton>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
