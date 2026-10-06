import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, HoverGlow, ACCENTS, AccentHairline,  Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="Career Opportunities">
      <SectionHeader eyebrow="Opportunities" icon={Briefcase} accent={ACCENTS[5]} title={data.title} />
      
      {data.subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 mt-[-20px]"
        >
          <p className="text-[17px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mb-16"
      >
        {data.opportunities.map((opp, i) => {
          const a = accentAt(i * 2 + 1); // Use distinct accents
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`bg-white rounded-[24px] p-10 flex flex-col relative overflow-hidden group luxury-shadow-sm border border-[#E6EBF3] hover:border-transparent hover:luxury-shadow-float transition-all duration-500`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="mb-8">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border mb-6 inline-block" style={{ color: a.to, backgroundColor: `${a.from}10`, borderColor: `${a.to}30` }}>
                  {opp.type}
                </span>
                <h3 className="text-[26px] font-bold text-[#0B1D3A] leading-tight mb-4">
                  {opp.title}
                </h3>
                <p className="text-[16px] text-[#475569] font-medium leading-relaxed">
                  {opp.description}
                </p>
              </div>
              
              <div className="space-y-6 flex-grow mb-10">
                {opp.categories.map((cat, j) => (
                  <div key={j} className="border-l-2 pl-4" style={{ borderColor: `${a.to}30` }}>
                    <h4 className="text-[14px] font-bold text-[#0B1D3A] mb-2">{cat.name}</h4>
                    <p className="text-[14.5px] text-[#475569] leading-relaxed">
                      {cat.items.split(' A ').join(' • ')}
                    </p>
                  </div>
                ))}
              </div>

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
          <div className="inline-block px-8 py-4 rounded-[12px] bg-white border border-[#E6EBF3] text-[#0B1D3A] text-[16px] font-bold tracking-wide luxury-shadow-sm">
            {data.closing}
          </div>
        </motion.div>
      )}
    </Section>
  );
}