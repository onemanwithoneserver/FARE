import { motion } from "motion/react";
import { Target, Users, Clock, CheckCircle, Sparkles } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, PrimaryButton, Reveal, Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data.scenarioDetail;

  return (
    <Section tone="soft" mobile ariaLabel="Scenario Detail">
      <Reveal className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-4">
          <Target size={12} className="text-[#E11D48]" strokeWidth={2.5} />
          <span className="text-[10px] font-bold text-[#E11D48] tracking-wider uppercase">{s.scenarioType}</span>
        </div>
        <h2 className="text-[#0B1D3A] text-[26px] font-black mb-4 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E4C46A]" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-[#E6EBF3]">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] text-[11px] font-bold">
                <Users size={13} strokeWidth={2.5} />
                Role: {s.practiceRole}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#C99A2E]/10 text-[#B8871F] text-[11px] font-bold">
                <Clock size={13} strokeWidth={2.5} />
                {s.duration}
              </span>
            </div>

            <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2">The Situation</h3>
            <p className="text-[14px] text-[#475569] leading-relaxed font-medium mb-6 italic border-l-2 border-[#C99A2E] pl-3">
              "{s.situation}"
            </p>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h3 className="text-[13px] font-bold text-[#0B1D3A] mb-1.5 uppercase tracking-wide">The Expert Will</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">{s.expertWill}</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#0B1D3A] mb-1.5 uppercase tracking-wide">You Will</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">{s.youWill}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FC] p-5">
            <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-4 flex items-center gap-2">
              <IconBadge icon={Sparkles} accent={ACCENTS[1]} size="sm" interactive={false} />
              What You Will Practise
            </h3>
            <motion.ul variants={staggerContainer(0.06, 0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-2.5 mb-6">
              {s.whatYouWillPractise.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5 bg-white rounded-[8px] p-3 border border-[#E6EBF3] shadow-sm">
                  <CheckCircle size={16} className="text-[#10B981] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[13px] text-[#0B1D3A] font-semibold leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <PrimaryButton full mobile>{s.cta}</PrimaryButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
