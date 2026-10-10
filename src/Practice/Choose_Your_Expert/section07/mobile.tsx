import { motion } from "motion/react";
import { RefreshCw, ArrowDown, ChevronRight } from "lucide-react";
import { FLOW_PHASES } from "./data";
import {
  ACCENTS,
  Section,
  SectionHeader,
  Reveal,
  staggerContainer,
  fadeUp,
  VIEWPORT,
} from "../../ui";

export default function Mobile() {
  return (
    <Section tone="soft" mobile ariaLabel="Recommended Final Flow" className="!py-14">
      <SectionHeader
        mobile
        eyebrow="Candidate Journey"
        icon={RefreshCw}
        accent={ACCENTS[1]}
        title="Recommended Final Flow"
        description="A structured 9-stage progression from scenario selection to live role-play and continuous skill mastery."
      />

      <div className="w-full flex flex-col gap-10 px-1">
        {FLOW_PHASES.map((phaseGroup, phaseIndex) => (
          <div key={phaseGroup.phase} className="flex flex-col gap-4">
            {/* Phase Header */}
            <Reveal delay={phaseIndex * 0.1}>
              <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 shadow-xs">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-black text-[12px]">
                    {phaseIndex + 1}
                  </span>
                  <h3 className="text-[15px] font-black text-[#0B1D3A]">
                    {phaseGroup.phase}
                  </h3>
                </div>
                <p className="text-[11.5px] font-medium text-[#7B8DAA] pl-10">
                  {phaseGroup.desc}
                </p>
              </div>
            </Reveal>

            {/* Mobile Cards */}
            <motion.div
              variants={staggerContainer(0.06, 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="flex flex-col gap-3.5"
            >
              {phaseGroup.steps.map((step) => {
                const IconComponent = step.icon;
                const a = step.accent;

                return (
                  <motion.div
                    key={step.stepNumber}
                    variants={fadeUp}
                    className="bg-white rounded-[18px] border border-[#E6EBF3] p-5 shadow-xs flex flex-col gap-3 relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-3">
                      {/* Icon Badge with Distinct Color + White Shade */}
                      <div className="p-1.5 rounded-[16px] bg-white ring-4 ring-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#E6EBF3] shrink-0">
                        <div
                          className="w-11 h-11 rounded-[12px] flex items-center justify-center text-white relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                            boxShadow: `0 8px 18px -4px ${a.glow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
                          }}
                        >
                          <IconComponent
                            size={20}
                            strokeWidth={2.4}
                            className="text-white drop-shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Step Number and Tag */}
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                          style={{
                            background: a.soft,
                            color: a.ink,
                          }}
                        >
                          Step {step.stepNumber}
                        </span>
                        <span className="text-[10px] font-bold text-[#7B8DAA] uppercase">
                          {step.tag}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[16px] font-black text-[#0B1D3A] tracking-tight">
                        {step.title}
                      </h4>
                      <span className="text-[12px] font-bold text-[#C99A2E] block mt-0.5 mb-1.5">
                        {step.subtitle}
                      </span>
                      <p className="text-[12.5px] font-medium text-[#475569] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E6EBF3] flex items-center justify-between text-[11px] text-[#7B8DAA]">
                      <span className="font-semibold">{step.phase}</span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#0B1D3A]">
                        Next <ChevronRight size={12} className="text-[#C99A2E]" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Connecting Arrow */}
            {phaseIndex < FLOW_PHASES.length - 1 && (
              <div className="flex justify-center my-1" aria-hidden="true">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] text-[10px] font-bold">
                  <span>Next Phase</span>
                  <ArrowDown size={11} className="text-[#C99A2E]" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
