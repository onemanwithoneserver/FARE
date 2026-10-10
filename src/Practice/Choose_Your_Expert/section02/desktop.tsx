import { motion } from "motion/react";
import { Clock, Video } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, IconBadge } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="soft" ariaLabel="Quick Summary" className="!py-12 border-y border-[#E6EBF3]">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex items-center justify-between gap-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white border-[3px] border-[#C99A2E]/20 luxury-shadow-sm text-[#0B1D3A] shrink-0">
              <span className="text-[32px] font-black leading-none">{s.expertCount}</span>
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#475569]">{s.expertLabel}</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[22px] font-bold text-[#0B1D3A] mb-1.5">{s.title}</h2>
              <p className="text-[15px] font-medium text-[#475569]">{s.description}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-[10px] border border-[#E6EBF3] luxury-shadow-sm">
              <IconBadge icon={Clock} accent={ACCENTS[1]} size="sm" interactive={false} />
              <span className="text-[14px] font-semibold text-[#0B1D3A]">{s.tags[0]}</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-[10px] border border-[#E6EBF3] luxury-shadow-sm">
              <IconBadge icon={Video} accent={ACCENTS[3]} size="sm" interactive={false} />
              <span className="text-[14px] font-semibold text-[#0B1D3A]">{s.tags[1]}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
