import { motion } from "motion/react";
import { RefreshCw, Sparkles } from "lucide-react";
import { FLOW_PHASES } from "./data";
import {
  ACCENTS,
  Section,
  SectionHeader,
  staggerContainer,
  fadeUp,
  VIEWPORT,
} from "../../ui";

export default function Mobile() {
  const allSteps = FLOW_PHASES.flatMap((p) => p.steps);

  return (
    <Section tone="soft" mobile ariaLabel="Recommended Final Flow" className="!py-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-3/4 h-64 bg-[#C99A2E]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <SectionHeader
        mobile
        eyebrow="Candidate Journey"
        icon={RefreshCw}
        accent={ACCENTS[1]}
        title="Recommended Final Flow"
        description="A structured 9-stage progression from scenario selection to live role-play and continuous skill mastery."
      />

      <div className="w-full relative mt-8 px-2">
        <div className="absolute top-10 bottom-10 left-8 w-px bg-gradient-to-b from-transparent via-[#C99A2E]/30 to-transparent shadow-[0_0_8px_rgba(201,154,46,0.3)] z-0 hidden sm:block" aria-hidden="true" />
        
        <motion.div
          variants={staggerContainer(0.06, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-col gap-5 relative z-10"
        >
          {allSteps.map((step, index) => {
            const IconComponent = step.icon;
            const a = step.accent;
            const isGold = index % 2 === 0;

            return (
              <motion.div
                key={step.stepNumber}
                variants={fadeUp}
                className="group relative bg-white rounded-[16px] border border-[#0B1D3A]/[0.07] shadow-xs overflow-hidden flex flex-col"
              >
                <div
                  className="relative flex items-center justify-between px-4 py-3.5 overflow-hidden shrink-0"
                  style={{
                    background: isGold 
                      ? "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)"
                      : "linear-gradient(120deg, #F8FAFC 0%, #FFFFFF 100%)",
                    borderBottom: isGold ? "none" : "1px solid rgba(11, 29, 58, 0.05)",
                  }}
                >
                  {isGold && (
                    <div className="absolute -top-8 -right-6 w-24 h-24 rounded-full bg-[#C99A2E]/30 blur-2xl pointer-events-none" />
                  )}
                  
                  <div className="relative flex items-center gap-3">
                    <div 
                      className={`w-9 h-9 rounded-[8px] flex items-center justify-center ${
                        isGold ? "bg-white/10 border border-white/15" : "bg-white shadow-sm border border-[#E6EBF3]"
                      }`}
                    >
                      <div className={`p-0.5 rounded-[6px] ${isGold ? '' : 'ring-2 ring-[#F5F7FB]'}`}>
                        <div
                          className="w-7 h-7 rounded-[4px] flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45)`,
                          }}
                        >
                          <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 pointer-events-none" />
                          <IconComponent
                            size={14}
                            strokeWidth={2.5}
                            className="text-white drop-shadow-sm relative z-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`text-[9px] font-black tracking-wider uppercase ${isGold ? 'text-[#D5AA45]' : 'text-[#0B1D3A]/60'}`}>
                          Step {step.stepNumber}
                        </span>
                      </div>
                      <h4 className={`text-[15px] font-black tracking-tight leading-none ${isGold ? 'text-white' : 'text-[#0B1D3A]'}`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1 bg-white">
                  <div className="mb-2">
                    <span className="text-[12px] font-bold text-[#C99A2E] leading-snug block">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-[12.5px] font-medium text-[#475569] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#0B1D3A]/[0.06] flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: a.soft,
                        color: a.ink,
                      }}
                    >
                      {step.tag}
                    </span>
                    <span className="text-[10.5px] font-bold text-[#7B8DAA] flex items-center gap-1">
                      <Sparkles size={11} className="text-[#C99A2E]" />
                      {step.phase}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
