import { motion } from "motion/react";
import { UserPlus, CheckCircle2, UserCheck } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, PrimaryButton, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.forExperts;

  return (
    <Section tone="white" ariaLabel="For Experts">
      <SectionHeader eyebrow="Become an Expert" icon={UserPlus} accent={ACCENTS[5]} title={s.title} description={s.description} />

      <Reveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto bg-[#F8F9FC] border border-[#E6EBF3] rounded-[24px] p-10 lg:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-5 uppercase tracking-wide flex items-center gap-2">
                <UserCheck size={18} className="text-[#C99A2E]" />
                You Decide:
              </h3>
              <motion.ul variants={staggerContainer(0.08, 0.2)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mb-8">
                {s.youDecide.map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-[15px] font-semibold text-[#0B1D3A]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto inline-flex items-start gap-2.5 px-4 py-3 rounded-[12px] bg-white border border-[#E6EBF3] shadow-sm">
                <span className="text-[16px]">💡</span>
                <p className="text-[13.5px] text-[#475569] font-medium leading-relaxed italic">{s.note}</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-5 uppercase tracking-wide">Areas of Expertise Needed:</h3>
              <motion.div variants={staggerContainer(0.06, 0.3)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-wrap gap-2.5 mb-10">
                {s.expertise.map((item, i) => (
                  <motion.div key={item} variants={fadeUp}>
                    <Chip accent={ACCENTS[(i + 3) % ACCENTS.length]}>{item}</Chip>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-auto">
                <PrimaryButton full>{s.cta}</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
