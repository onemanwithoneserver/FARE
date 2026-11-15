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
      className={compact ? "mb-5" : "mb-8 sm:mb-10"}
    >
      <div className="flex items-center gap-3.5">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-[4px] h-7 rounded-full shrink-0 origin-top"
          style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }}
        />
        <div>
          {eyebrow && (
            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C99A2E] mb-0.5">
              {eyebrow}
            </div>
          )}
          <h2
            className={`text-[#0B1D3A] font-black tracking-[-0.02em] leading-tight ${
              compact ? "text-xl" : "text-2xl sm:text-[28px]"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
