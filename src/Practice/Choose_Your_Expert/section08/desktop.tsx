import { motion } from "motion/react";
import { Check, Users } from "lucide-react";
import { data } from "./data";
import { ACCENTS, staggerContainer, Section, SectionHeader, SecondaryButton } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="soft" ariaLabel="Compare Experts">
      <SectionHeader 
        eyebrow="Compare" 
        icon={Users} 
        accent={ACCENTS[0]} 
        title={s.title}
        description={s.subtitle}
      />

      <div className="max-w-[1000px] mx-auto w-full overflow-x-auto pb-4 scrollbar-hide">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="min-w-[800px] bg-white rounded-[20px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 bg-[#F8F9FC] border-b border-r border-[#E6EBF3] w-[20%]">
                  <span className="text-[13px] font-bold uppercase tracking-widest text-[#475569]">Criteria</span>
                </th>
                {s.experts.map((exp) => (
                  <th key={exp.name} className="p-6 bg-[#F8F9FC] border-b border-[#E6EBF3] w-[26.6%] text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm mb-3">
                        <img src={`https://i.pravatar.cc/150?u=${exp.name}`} alt={exp.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[18px] font-bold text-[#0B1D3A]">{exp.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.criteria.map((crit, i) => (
                <tr key={crit} className="group">
                  <td className="p-5 border-b border-r border-[#E6EBF3] bg-[#F8F9FC] transition-colors">
                    <span className="text-[14px] font-bold text-[#475569]">{crit}</span>
                  </td>
                  {s.experts.map((exp) => (
                    <td key={`${exp.name}-${crit}`} className="p-5 border-b border-[#E6EBF3] text-center group-hover:bg-[#F8F9FC]/50 transition-colors">
                      {exp.values[i] === "✓" ? (
                        <Check size={20} className="text-[#10B981] mx-auto" strokeWidth={3} />
                      ) : (
                        <span className="text-[15px] font-medium text-[#0B1D3A]">{exp.values[i]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6 bg-[#F8F9FC] border-r border-[#E6EBF3]"></td>
                {s.experts.map((exp) => (
                  <td key={`cta-${exp.name}`} className="p-6 text-center">
                    <SecondaryButton full>Choose Expert</SecondaryButton>
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
