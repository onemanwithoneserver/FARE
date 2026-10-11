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

export default function Desktop() {
  const allSteps = FLOW_PHASES.flatMap((p) => p.steps);

  return (
    <Section tone="soft" ariaLabel="Recommended Final Flow" className="!py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C99A2E]/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0B1D3A]/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <SectionHeader
        eyebrow="Candidate Journey"
        icon={RefreshCw}
        accent={ACCENTS[1]}
        title="Recommended Final Flow"
        description="A structured 9-stage progression designed to eliminate anxiety, provide realistic role-play simulations, and guarantee measurable skill improvement."
      />

      <div className="max-w-[1200px] mx-auto w-full relative mt-16 px-4 xl:px-0">
        
        <div className="absolute inset-0 pointer-events-none hidden md:block z-0" aria-hidden="true">
          <div className="absolute top-[160px] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-transparent via-[#C99A2E]/30 to-transparent shadow-[0_0_8px_rgba(201,154,46,0.5)]" />
          <div className="absolute top-[480px] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-transparent via-[#0B1D3A]/20 to-transparent" />
          <div className="absolute top-[800px] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-transparent via-[#C99A2E]/30 to-transparent shadow-[0_0_8px_rgba(201,154,46,0.5)]" />
          
        </div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          {allSteps.map((step, index) => {
            const IconComponent = step.icon;
            const a = step.accent;
            const isGold = index % 2 === 0;

            return (
              <motion.div
                key={step.stepNumber}
                variants={fadeUp}
                className="group relative bg-white rounded-[16px] border border-[#0B1D3A]/[0.07] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.12)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden flex flex-col h-full"
              >
                <div
                  className="relative flex items-center justify-between px-6 py-5 overflow-hidden shrink-0"
                  style={{
                    background: isGold 
                      ? "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)"
                      : "linear-gradient(120deg, #F8FAFC 0%, #FFFFFF 100%)",
                    borderBottom: isGold ? "none" : "1px solid rgba(11, 29, 58, 0.05)",
                  }}
                >
                  {isGold && (
                    <div className="absolute -top-8 -right-6 w-32 h-32 rounded-full bg-[#C99A2E]/30 blur-2xl pointer-events-none" />
                  )}
                  
                  <div className="relative flex items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${
                        isGold ? "bg-white/10 border border-white/15" : "bg-white shadow-sm border border-[#E6EBF3]"
                      }`}
                    >
                      <div className={`p-0.5 rounded-[10px] ${isGold ? '' : 'ring-2 ring-[#F5F7FB]'} transition-transform duration-300 group-hover:scale-105`}>
                        <div
                          className="w-10 h-10 rounded-[8px] flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45)`,
                          }}
                        >
                          <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 pointer-events-none" />
                          <IconComponent
                            size={18}
                            strokeWidth={2.5}
                            className="text-white drop-shadow-sm relative z-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-black tracking-wider uppercase ${isGold ? 'text-[#D5AA45]' : 'text-[#0B1D3A]/60'}`}>
                          Step {step.stepNumber}
                        </span>
                      </div>
                      <h4 className={`text-[17px] font-black tracking-tight leading-none ${isGold ? 'text-white' : 'text-[#0B1D3A]'}`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 bg-white">
                  <div className="mb-3">
                    <span className="text-[13px] font-bold text-[#C99A2E] leading-snug block">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-[14px] font-medium text-[#475569] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-[#0B1D3A]/[0.06] flex items-center justify-between">
                    <span
                      className="px-3 py-1.5 rounded-[8px] text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        background: a.soft,
                        color: a.ink,
                      }}
                    >
                      {step.tag}
                    </span>
                    <span className="text-[11.5px] font-bold text-[#7B8DAA] flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#C99A2E]" />
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
