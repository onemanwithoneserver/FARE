import { motion } from "motion/react";
import { Briefcase, ChevronRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="Career Opportunities">
      <SectionHeader mobile eyebrow="Opportunities" icon={Briefcase} accent={ACCENTS[5]} title={data.title} />
      
      {data.subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 mt-[-10px]"
        >
          <p className="text-[15px] text-[#475569] font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      )}

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-5 mb-10">
        {data.opportunities.map((opp, i) => {
          const a = accentAt(i * 2 + 1); // Use distinct accents
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-[20px] p-6 flex flex-col relative overflow-hidden luxury-shadow-sm border border-[#E6EBF3]"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="mb-6 pt-1">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1.5 rounded-full border mb-4 inline-block" style={{ color: a.to, backgroundColor: `${a.from}10`, borderColor: `${a.to}30` }}>
                  {opp.type}
                </span>
                <h3 className="text-[20px] font-bold text-[#0B1D3A] leading-tight mb-3">
                  {opp.title}
                </h3>
                <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed">
                  {opp.description}
                </p>
              </div>
              
              <div className="space-y-5 flex-grow mb-8">
                {opp.categories.map((cat, j) => (
                  <div key={j} className="border-l-2 pl-3" style={{ borderColor: `${a.to}30` }}>
                    <h4 className="text-[13.5px] font-bold text-[#0B1D3A] mb-1.5">{cat.name}</h4>
                    <p className="text-[14px] text-[#475569] leading-relaxed">
                      {cat.items.split(' A ').join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-auto text-[14px] font-bold py-3.5 rounded-[10px] flex items-center justify-center gap-2 transition-all duration-300" style={{ color: a.to, backgroundColor: `${a.from}10` }}>
                <span>{opp.button}</span>
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "16px" }}>
                  <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0" />
                </span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>
      
      {data.closing && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-5 py-3 rounded-[10px] bg-white border border-[#E6EBF3] text-[#0B1D3A] text-[14.5px] font-bold tracking-wide shadow-sm">
            {data.closing}
          </div>
        </motion.div>
      )}
    </Section>
  );
}