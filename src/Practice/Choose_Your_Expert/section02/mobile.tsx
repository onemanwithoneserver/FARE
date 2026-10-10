import { motion } from "motion/react";
import { Clock, Video } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, IconBadge } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="soft" mobile ariaLabel="Quick Summary" className="!py-8 border-y border-[#E6EBF3]">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#C99A2E]/20 luxury-shadow-sm text-[#0B1D3A] shrink-0">
            <span className="text-[22px] font-black leading-none">{s.expertCount}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#475569]">{s.expertLabel}</span>
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-[18px] font-bold text-[#0B1D3A] mb-1 leading-tight">{s.title}</h2>
            <p className="text-[13px] font-medium text-[#475569] leading-snug">{s.description}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-[8px] border border-[#E6EBF3] luxury-shadow-sm">
            <IconBadge icon={Clock} accent={ACCENTS[1]} size="xs" interactive={false} />
            <span className="text-[13px] font-semibold text-[#0B1D3A]">{s.tags[0]}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-[8px] border border-[#E6EBF3] luxury-shadow-sm">
            <IconBadge icon={Video} accent={ACCENTS[3]} size="xs" interactive={false} />
            <span className="text-[13px] font-semibold text-[#0B1D3A]">{s.tags[1]}</span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
