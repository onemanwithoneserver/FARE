import { motion } from "motion/react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, Reveal, PrimaryButton, VIEWPORT } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Booking Summary">
      <SectionHeader
        eyebrow="Review"
        icon={CreditCard}
        accent={ACCENTS[1]}
        title={s.title}
      />

      <div className="max-w-[800px] mx-auto w-full">
        <Reveal>
          <div className="bg-white rounded-[24px] border border-[#E6EBF3] luxury-shadow overflow-hidden">
            {/* Detail rows */}
            <div className="divide-y divide-[#E6EBF3]">
              {s.rows.map((row) => (
                <div key={row.label} className="flex items-start gap-6 px-10 py-6">
                  <span className="text-[13px] font-bold uppercase tracking-widest text-[#7B8DAA] w-28 shrink-0 pt-0.5">
                    {row.label}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-bold text-[#0B1D3A]">{row.value}</span>
                    {row.sub && <span className="text-[14px] font-medium text-[#475569] mt-0.5">{row.sub}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* What happens */}
            <div className="bg-[#F8F9FC] px-10 py-8 border-t border-[#E6EBF3]">
              <h3 className="text-[15px] font-bold uppercase tracking-widest text-[#0B1D3A] mb-6">What Happens</h3>
              <motion.ol
                variants={staggerContainer(0.1, 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {s.whatHappens.map((wh) => (
                  <motion.li
                    key={wh.phase}
                    variants={fadeUp}
                    className="flex items-start gap-3 bg-white rounded-[12px] p-5 border border-[#E6EBF3] shadow-sm"
                  >
                    <CheckCircle2 size={18} className="text-[#C99A2E] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-[#0B1D3A] mb-1">{wh.phase}</span>
                      <span className="text-[13px] font-medium text-[#475569] leading-snug">{wh.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>

            {/* Total + CTA */}
            <div className="flex items-center justify-between px-10 py-8 bg-gradient-to-r from-[#0B1D3A] to-[#16316A]">
              <div className="flex flex-col">
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/60 mb-1">Total</span>
                <span className="text-[32px] font-black text-white leading-none">{s.total}</span>
              </div>
              <PrimaryButton variant="gold">{s.cta}</PrimaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
