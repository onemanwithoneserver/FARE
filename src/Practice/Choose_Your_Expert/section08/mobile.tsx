import { motion } from "motion/react";
import { Check, Users } from "lucide-react";
import { data } from "./data";
import { ACCENTS, staggerContainer, Section, SectionHeader, SecondaryButton } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="soft" mobile ariaLabel="Compare Experts">
      <SectionHeader 
        mobile
        eyebrow="Compare" 
        icon={Users} 
        accent={ACCENTS[0]} 
        title={s.title}
        description={s.subtitle}
      />

      <div className="-mx-5 px-5 overflow-x-auto pb-4 scrollbar-hide">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="min-w-[600px] bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-[#F8F9FC] border-b border-r border-[#E6EBF3] w-[25%]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#475569]">Criteria</span>
                </th>
                {s.experts.map((exp) => (
                  <th key={exp.name} className="p-4 bg-[#F8F9FC] border-b border-[#E6EBF3] text-center w-[25%]">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-white shadow-sm mb-2">
                        <img src={`https://i.pravatar.cc/150?u=${exp.name.replace(' ', '')}`} alt={exp.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0B1D3A] leading-tight">{exp.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.criteria.map((crit, i) => (
                <tr key={crit}>
                  <td className="p-3 border-b border-r border-[#E6EBF3] bg-[#F8F9FC]">
                    <span className="text-[12px] font-bold text-[#475569]">{crit}</span>
                  </td>
                  {s.experts.map((exp) => (
                    <td key={`${exp.name}-${crit}`} className="p-3 border-b border-[#E6EBF3] text-center">
                      {exp.values[i] === "✓" ? (
                        <Check size={16} className="text-[#10B981] mx-auto" strokeWidth={3} />
                      ) : (
                        <span className="text-[13px] font-medium text-[#0B1D3A]">{exp.values[i]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4 bg-[#F8F9FC] border-r border-[#E6EBF3]"></td>
                {s.experts.map((exp) => (
                  <td key={`cta-${exp.name}`} className="p-4 text-center">
                    <SecondaryButton mobile className="!px-3 !py-2 text-[11px] w-full">Choose</SecondaryButton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}
