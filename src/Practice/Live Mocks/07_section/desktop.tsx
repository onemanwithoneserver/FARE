import { motion } from "motion/react";
import { Briefcase, Users, Crown, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const ICONS = [Briefcase, Users, Crown, Award];

export default function Desktop() {
  const s = data.meetExperts;

  return (
    <Section tone="white" ariaLabel="Meet Experts">
      <SectionHeader eyebrow="Mock Experts" icon={Users} accent={ACCENTS[0]} title={s.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mb-16"
      >
        {s.categories.map((cat, i) => {
          const a = ACCENTS[i % ACCENTS.length];
          return (
            <motion.div key={cat.title} variants={fadeUp} className={`${CARD_BASE} ${CARD_HOVER} p-7 flex flex-col items-start text-left overflow-hidden`}>
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <IconBadge icon={ICONS[i] || Users} accent={a} className="mb-5" />
              <h3 className="relative text-[17px] font-bold text-[#0B1D3A] leading-snug mb-2.5">{cat.title}</h3>
              <p className="relative text-[14px] text-[#475569] leading-[1.65] font-medium">{cat.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="max-w-[900px] mx-auto rounded-[16px] bg-[#0B1D3A] text-white overflow-hidden luxury-shadow-float flex flex-col md:flex-row relative"
      >
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[80px] bg-[#C99A2E]/20 pointer-events-none" />
        
        <div className="w-full md:w-2/5 bg-white/5 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 w-max">
            <ShieldCheck size={14} className="text-[#C99A2E]" />
            <span className="text-[11px] font-bold tracking-widest text-[#E2C068] uppercase">Expert Profile Includes</span>
          </div>
          <p className="text-[15px] text-white/70 leading-relaxed font-medium">
            {s.verificationNote}
          </p>
        </div>

        <div className="w-full md:w-3/5 p-10 relative z-10">
          <ul className="flex flex-wrap gap-2.5 mb-8">
            {s.expertCard.fields.map((field) => (
              <li key={field} className="px-3.5 py-1.5 rounded-[6px] bg-white/10 border border-white/15 text-[13px] font-semibold text-white/90">
                {field}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            {s.expertCard.ctas.map((cta, i) => (
              <button
                key={cta}
                className={`flex items-center gap-2 px-6 py-3 rounded-[8px] font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  i === 1
                    ? "bg-[#C99A2E] text-[#0B1D3A] hover:bg-[#D5AA45] shadow-[0_4px_14px_rgba(201,154,46,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40"
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
