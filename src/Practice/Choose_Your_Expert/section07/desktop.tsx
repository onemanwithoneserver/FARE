import { motion } from "motion/react";
import { RefreshCw, ArrowDown, ChevronRight, Sparkles } from "lucide-react";
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

export default function Desktop() {
  return (
    <Section tone="soft" ariaLabel="Recommended Final Flow" className="!py-24">
      <SectionHeader
        eyebrow="Candidate Journey"
        icon={RefreshCw}
        accent={ACCENTS[1]}
        title="Recommended Final Flow"
        description="A structured 9-stage progression designed to eliminate anxiety, provide realistic role-play simulations, and guarantee measurable skill improvement."
      />

      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-14">
        {FLOW_PHASES.map((phaseGroup, phaseIndex) => (
          <div key={phaseGroup.phase} className="flex flex-col gap-6">
            {/* Phase Header Strip */}
            <Reveal delay={phaseIndex * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white rounded-[18px] border border-[#E6EBF3] px-6 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
                <div className="flex items-center gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-black text-[13px] shadow-sm">
                    {phaseIndex + 1}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-black text-[#0B1D3A] tracking-tight">
                      {phaseGroup.phase}
                    </h3>
                    <p className="text-[12.5px] font-medium text-[#7B8DAA]">
                      {phaseGroup.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#F5D98B] text-[#8A5A00] text-[11px] font-bold">
                    <Sparkles size={12} className="text-[#C99A2E]" />
                    Stages {phaseIndex * 3 + 1} – {phaseIndex * 3 + 3} of 9
                  </span>
                </div>
              </div>
            </Reveal>

            {/* 3 Expanded Cards in this Phase */}
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {phaseGroup.steps.map((step) => {
                const IconComponent = step.icon;
                const a = step.accent;

                return (
                  <motion.div
                    key={step.stepNumber}
                    variants={fadeUp}
                    className="group relative bg-white rounded-[22px] border border-[#E6EBF3] p-7 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Accent Hairline on Hover */}
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${a.from} 0%, ${a.to} 100%)`,
                      }}
                    />

                    <div>
                      {/* Step Number Badge & Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider"
                          style={{
                            background: a.soft,
                            color: a.ink,
                          }}
                        >
                          Step {step.stepNumber}
                        </span>
                        <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider">
                          {step.tag}
                        </span>
                      </div>

                      {/* Icon Badge with Distinct Color + White Shade */}
                      <div className="mb-6 flex items-center justify-start">
                        {/* Outer White Shade / Frosted Halo Container */}
                        <div className="p-2 rounded-[20px] bg-white ring-4 ring-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#E6EBF3] transition-transform duration-300 group-hover:scale-105">
                          {/* Vibrant Jewel Tone Gradient Tile */}
                          <div
                            className="w-13 h-13 rounded-[15px] flex items-center justify-center text-white relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                              boxShadow: `0 10px 22px -6px ${a.glow}, inset 0 1px 0 rgba(255,255,255,0.45)`,
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 pointer-events-none"
                            />
                            {/* Crisp White Icon */}
                            <IconComponent
                              size={24}
                              strokeWidth={2.4}
                              className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] relative z-10"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Step Title */}
                      <h4 className="text-[18px] font-black text-[#0B1D3A] tracking-tight mb-1.5 group-hover:text-[#1E3A74] transition-colors">
                        {step.title}
                      </h4>

                      {/* Subtitle Pill / Context */}
                      <div className="mb-3">
                        <span className="text-[12px] font-bold text-[#C99A2E] leading-snug block">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Expanded Description */}
                      <p className="text-[13.5px] font-medium text-[#475569] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Status / Progression Footer */}
                    <div className="pt-5 mt-6 border-t border-[#E6EBF3]/80 flex items-center justify-between text-[11.5px]">
                      <span className="font-semibold text-[#7B8DAA]">
                        {step.phase}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#0B1D3A] group-hover:translate-x-0.5 transition-transform">
                        Explore <ChevronRight size={13} strokeWidth={2.6} className="text-[#C99A2E]" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Connecting Flow Arrow Between Phases */}
            {phaseIndex < FLOW_PHASES.length - 1 && (
              <div className="flex justify-center my-2" aria-hidden="true">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-xs text-[#7B8DAA] text-[11px] font-bold">
                  <span>Proceed to Next Phase</span>
                  <ArrowDown size={13} className="text-[#C99A2E] animate-bounce" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
