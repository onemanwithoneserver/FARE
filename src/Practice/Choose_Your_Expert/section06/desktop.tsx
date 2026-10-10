import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Star } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, Reveal, VIEWPORT, CARD_BASE, HoverGlow } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="tint" ariaLabel="Make the Relevance Obvious">
      <SectionHeader
        eyebrow="Relevance"
        icon={Sparkles}
        accent={ACCENTS[1]}
        title={s.title}
        description={s.subtitle}
      />

      <div className="max-w-[680px] mx-auto w-full">
        <Reveal>
          <div className={`${CARD_BASE} p-8 overflow-hidden`}>
            <HoverGlow accent={ACCENTS[1]} />

            <div className="relative z-10 flex items-center gap-5 mb-7">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white luxury-shadow-sm shrink-0">
                <img
                  src={`https://i.pravatar.cc/150?u=${s.example.name}`}
                  alt={s.example.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-[#0B1D3A] leading-tight">{s.example.name}</h3>
                <span className="text-[13px] font-medium text-[#475569]">Sales Manager · Residential Real Estate</span>
              </div>
            </div>

            <div className="relative z-10 bg-[#FBF5E7] rounded-[14px] p-6 border border-[#E4C46A]/30">
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#8A5A00] mb-5 flex items-center gap-2">
                <Sparkles size={16} className="text-[#C99A2E]" />
                Why this expert?
              </h4>

              <motion.ul
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="flex flex-col gap-4"
              >
                {s.example.reasons.map((reason) => (
                  <motion.li
                    key={reason}
                    variants={fadeUp}
                    className="flex items-center gap-3.5 bg-white rounded-[10px] px-5 py-3.5 border border-[#E6EBF3] shadow-sm"
                  >
                    <CheckCircle2 size={18} className="text-[#10B981] shrink-0" strokeWidth={2.5} />
                    <span className="text-[15px] font-semibold text-[#0B1D3A]">{reason}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative z-10 mt-6 flex items-start gap-3 bg-[#F8F9FC] rounded-[10px] p-4 border border-[#E6EBF3]">
              <Star size={16} className="text-[#C99A2E] shrink-0 mt-0.5" />
              <p className="text-[14px] font-medium text-[#475569] leading-relaxed italic">
                {s.subtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
