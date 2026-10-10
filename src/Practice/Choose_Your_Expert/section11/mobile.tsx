import { motion } from "motion/react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton, VIEWPORT } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Booking Summary">
      <SectionHeader
        mobile
        eyebrow="Review"
        icon={CreditCard}
        accent={ACCENTS[1]}
        title={s.title}
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden"
      >
        <div className="divide-y divide-[#E6EBF3]">
          {s.rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1 px-5 py-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7B8DAA]">{row.label}</span>
              <span className="text-[15px] font-bold text-[#0B1D3A]">{row.value}</span>
              {row.sub && <span className="text-[12px] font-medium text-[#475569]">{row.sub}</span>}
            </div>
          ))}
        </div>

        <div className="bg-[#F8F9FC] px-5 py-6 border-t border-[#E6EBF3]">
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#0B1D3A] mb-4">What Happens</h3>
          <motion.ol
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex flex-col gap-3"
          >
            {s.whatHappens.map((wh) => (
              <motion.li
                key={wh.phase}
                variants={fadeUp}
                className="flex items-start gap-2.5 bg-white rounded-[8px] p-3.5 border border-[#E6EBF3] shadow-sm"
              >
                <CheckCircle2 size={15} className="text-[#C99A2E] shrink-0 mt-0.5" strokeWidth={2.5} />
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#0B1D3A] mb-0.5">{wh.phase}</span>
                  <span className="text-[12px] font-medium text-[#475569] leading-snug">{wh.desc}</span>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="flex items-center justify-between px-5 py-5 bg-gradient-to-r from-[#0B1D3A] to-[#16316A]">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-0.5">Total</span>
            <span className="text-[24px] font-black text-white leading-none">{s.total}</span>
          </div>
          <PrimaryButton variant="gold" mobile>{s.cta}</PrimaryButton>
        </div>
      </motion.div>
    </Section>
  );
}
