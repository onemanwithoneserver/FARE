import { motion } from "motion/react";
import { CheckCircle2, UserCheck } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.whoIsThisFor;

  return (
    <Section tone="white" ariaLabel="Who is this for">
      <SectionHeader eyebrow="Who It's For" icon={UserCheck} accent={ACCENTS[4]} title={s.title} />

      <motion.ul
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1240px] mx-auto"
      >
        {s.roles.map((role) => (
          <motion.li
            key={role.title}
            variants={fadeScale}
            className="flex items-start gap-4 p-5 rounded-[12px] bg-[#F8F9FC] border border-[#E6EBF3] hover:border-[#C99A2E]/30 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <CheckCircle2 size={20} className="text-[#C99A2E] shrink-0 mt-0.5" strokeWidth={2.5} />
            <div className="flex flex-col gap-1.5">
              <span className="text-[15px] font-bold text-[#0B1D3A] leading-snug">{role.title}</span>
              <span className="text-[13.5px] text-[#475569] font-medium leading-relaxed">{role.desc}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
