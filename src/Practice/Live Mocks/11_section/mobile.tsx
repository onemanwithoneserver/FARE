import { motion } from "motion/react";
import { CheckCircle2, UserCheck } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data.whoIsThisFor;

  return (
    <Section tone="white" mobile ariaLabel="Who is this for">
      <SectionHeader mobile eyebrow="Who It's For" icon={UserCheck} accent={ACCENTS[4]} title={s.title} />

      <motion.ul variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-3">
        {s.roles.map((role) => (
          <motion.li
            key={role.title}
            variants={fadeScale}
            className="flex items-start gap-3 p-4 rounded-[12px] bg-[#F8F9FC] border border-[#E6EBF3]"
          >
            <CheckCircle2 size={18} className="text-[#C99A2E] shrink-0 mt-0.5" strokeWidth={2.5} />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-[#0B1D3A] leading-snug">{role.title}</span>
              <span className="text-[13px] text-[#475569] font-medium leading-relaxed">{role.desc}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
