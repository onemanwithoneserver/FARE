import { motion } from "motion/react";
import { Briefcase, Users, Crown, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

const ICONS = [Briefcase, Users, Crown, Award];

export default function Mobile() {
  const s = data.meetExperts;

  return (
    <Section tone="white" mobile ariaLabel="Meet Experts">
      <SectionHeader mobile eyebrow="Mock Experts" icon={Users} accent={ACCENTS[0]} title={s.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="grid grid-cols-1 gap-4 mb-10">
        {s.categories.map((cat, i) => {
          const a = ACCENTS[i % ACCENTS.length];
          return (
            <motion.div key={cat.title} variants={fadeUp} className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-5 overflow-hidden flex flex-col relative">
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              <div className="flex items-center gap-3.5 mb-3 pt-1">
                <IconBadge icon={ICONS[i] || Users} accent={a} size="sm" interactive={false} />
                <h3 className="text-[15.5px] font-bold text-[#0B1D3A] leading-snug">{cat.title}</h3>
              </div>
              <p className="text-[13.5px] text-[#475569] leading-[1.65] font-medium">{cat.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="rounded-[16px] bg-[#0B1D3A] text-white overflow-hidden luxury-shadow-float flex flex-col relative"
      >
        <div aria-hidden="true" className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[50px] bg-[#C99A2E]/25 pointer-events-none" />
        
        <div className="p-6 bg-white/5 border-b border-white/10 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/10 border border-white/20 mb-3 w-max">
            <ShieldCheck size={12} className="text-[#C99A2E]" />
            <span className="text-[10px] font-bold tracking-widest text-[#E2C068] uppercase">Expert Profile Includes</span>
          </div>
          <p className="text-[13px] text-white/70 leading-[1.6] font-medium">
            {s.verificationNote}
          </p>
        </div>

        <div className="p-6 relative z-10">
          <ul className="flex flex-wrap gap-2 mb-6">
            {s.expertCard.fields.map((field) => (
              <li key={field} className="px-2.5 py-1 rounded-[4px] bg-white/10 border border-white/15 text-[12px] font-semibold text-white/90">
                {field}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            {s.expertCard.ctas.map((cta, i) => (
              <button
                key={cta}
                className={`w-full flex justify-center items-center gap-2 px-5 py-3.5 rounded-[8px] font-semibold text-[14px] active:scale-[0.98] transition-transform ${
                  i === 1
                    ? "bg-[#C99A2E] text-[#0B1D3A] shadow-[0_4px_14px_rgba(201,154,46,0.4)]"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                {cta.replace('→', '')}
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
