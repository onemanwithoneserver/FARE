import { motion } from "motion/react";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  compact?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  compact = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={compact ? "mb-6" : "mb-10"}
    >
      <div className={`flex items-center ${compact ? "gap-3" : "gap-4"}`}>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`${compact ? "w-[3px] h-6" : "w-[4px] h-7"} rounded-full shrink-0 origin-top`}
          style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }}
        />
        <div>
          {eyebrow && (
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C99A2E] mb-0.5">
              {eyebrow}
            </div>
          )}
          <h2
            className={`text-[#0B1D3A] font-black tracking-[-0.02em] leading-tight ${
              compact ? "text-[22px] sm:text-[24px]" : "text-[28px]"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
