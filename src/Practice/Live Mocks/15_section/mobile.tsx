import { motion } from "motion/react";
import { UserPlus, CheckCircle2, UserCheck } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, PrimaryButton, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data.forExperts;

  return (
    <Section tone="white" mobile ariaLabel="For Experts">
      <SectionHeader mobile eyebrow="Become an Expert" icon={UserPlus} accent={ACCENTS[5]} title={s.title} description={s.description} />

      <Reveal delay={0.1}>
        <div className="bg-[#F8F9FC] border border-[#E6EBF3] rounded-[20px] p-6 flex flex-col">
          <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-4 uppercase tracking-wide flex items-center gap-2">
            <UserCheck size={16} className="text-[#C99A2E]" />
            You Decide:
          </h3>
          <motion.ul variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-3 mb-6">
            {s.youDecide.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span className="text-[14px] font-semibold text-[#0B1D3A] leading-snug">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex items-start gap-2.5 p-3.5 rounded-[12px] bg-white border border-[#E6EBF3] shadow-sm mb-8">
            <span className="text-[16px]">💡</span>
            <p className="text-[13px] text-[#475569] font-medium leading-relaxed italic">{s.note}</p>
          </div>

          <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-4 uppercase tracking-wide">Areas of Expertise Needed:</h3>
          <motion.div variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-wrap gap-2 mb-8">
            {s.expertise.map((item, i) => (
              <motion.div key={item} variants={fadeUp}>
                <Chip accent={ACCENTS[(i + 3) % ACCENTS.length]} mobile>{item}</Chip>
              </motion.div>
            ))}
          </motion.div>

          <PrimaryButton full mobile>{s.cta}</PrimaryButton>
        </div>
      </Reveal>
    </Section>
  );
}
