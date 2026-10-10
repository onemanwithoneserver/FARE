import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Star } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, VIEWPORT } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="tint" mobile ariaLabel="Make the Relevance Obvious">
      <SectionHeader
        mobile
        eyebrow="Relevance"
        icon={Sparkles}
        accent={ACCENTS[1]}
        title={s.title}
        description={s.subtitle}
      />

      <div className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden">
        <div className="flex items-center gap-3.5 p-5 border-b border-[#E6EBF3]">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img
              src={`https://i.pravatar.cc/150?u=${s.example.name.replace(' ', '')}`}
              alt={s.example.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">{s.example.name}</h3>
            <span className="text-[12px] font-medium text-[#475569]">Sales Manager · Residential</span>
          </div>
        </div>

        <div className="bg-[#FBF5E7] p-5">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8A5A00] mb-4 flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#C99A2E]" />
            Why this expert?
          </h4>

          <motion.ul
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex flex-col gap-2.5"
          >
            {s.example.reasons.map((reason) => (
              <motion.li
                key={reason}
                variants={fadeUp}
                className="flex items-center gap-2.5 bg-white rounded-[8px] px-3.5 py-2.5 border border-[#E6EBF3] shadow-sm"
              >
                <CheckCircle2 size={15} className="text-[#10B981] shrink-0" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0B1D3A]">{reason}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="flex items-start gap-2.5 p-4 bg-[#F8F9FC] border-t border-[#E6EBF3]">
          <Star size={14} className="text-[#C99A2E] shrink-0 mt-0.5" />
          <p className="text-[12px] font-medium text-[#475569] leading-relaxed italic">
            {s.subtitle}
          </p>
        </div>
      </div>
    </Section>
  );
}
