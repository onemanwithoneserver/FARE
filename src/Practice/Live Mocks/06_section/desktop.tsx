import { motion } from "motion/react";
import { Target, Users, Clock, CheckCircle, Sparkles } from "lucide-react";
import { data } from "../data";
import { ACCENTS, CARD_BASE, HoverGlow, IconBadge, PrimaryButton, Reveal, Section, VIEWPORT, fadeUp, staggerContainer } from "../ui";

export default function Desktop() {
  const s = data.scenarioDetail;

  return (
    <Section tone="soft" ariaLabel="Scenario Detail">
      <Reveal className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-6">
          <Target size={14} className="text-[#E11D48]" strokeWidth={2.5} />
          <span className="text-[12px] font-bold text-[#E11D48] tracking-wider uppercase">{s.scenarioType}</span>
        </div>
        <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-[1.1] tracking-tight">
          {s.title}
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E4C46A] mx-auto" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className={`${CARD_BASE} max-w-[1000px] mx-auto p-10 overflow-hidden`}>
          <HoverGlow accent={ACCENTS[0]} />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#0B1D3A]/5 text-[#0B1D3A] text-[13px] font-bold">
                  <Users size={15} strokeWidth={2.5} />
                  Role: {s.practiceRole}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#C99A2E]/10 text-[#B8871F] text-[13px] font-bold">
                  <Clock size={15} strokeWidth={2.5} />
                  {s.duration}
                </span>
              </div>

              <h3 className="text-[19px] font-bold text-[#0B1D3A] mb-3">The Situation</h3>
              <p className="text-[16px] text-[#475569] leading-relaxed font-medium mb-7 italic border-l-2 border-[#C99A2E] pl-4">
                "{s.situation}"
              </p>

              <div className="grid grid-cols-2 gap-6 mt-auto">
                <div>
                  <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">The Expert Will</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed font-medium">{s.expertWill}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">You Will</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed font-medium">{s.youWill}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#F8F9FC] -m-10 p-10 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#E6EBF3]">
              <h3 className="text-[19px] font-bold text-[#0B1D3A] mb-6 flex items-center gap-2.5">
                <IconBadge icon={Sparkles} accent={ACCENTS[1]} size="sm" interactive={false} />
                What You Will Practise
              </h3>
              <motion.ul variants={staggerContainer(0.08, 0.2)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 flex-1">
                {s.whatYouWillPractise.map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3.5 bg-white rounded-[10px] p-4 border border-[#E6EBF3] shadow-sm">
                    <CheckCircle size={20} className="text-[#10B981] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[15px] text-[#0B1D3A] font-semibold leading-snug">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <PrimaryButton full className="mt-8">
                {s.cta}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
