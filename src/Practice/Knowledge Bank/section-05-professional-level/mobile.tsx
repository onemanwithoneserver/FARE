import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronRight, X, ArrowDown, Users } from "lucide-react";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../ui";

import imgStudents from "../../../assets/students_hero.jpg";
import imgEmployees from "../../../assets/employees_hero.jpg";
import imgCompanies from "../../../assets/re_companies_hero.png";
import imgFreelancers from "../../../assets/freelancers_hero.jpg";
import imgCareerSwitchers from "../../../assets/career_switchers_hero.jpg";

const DIALOG_IMAGES = [
  imgStudents,
  imgEmployees,
  imgEmployees,
  imgCompanies,
  imgCompanies,
  imgFreelancers,
  imgCareerSwitchers
];

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeDialog, setActiveDialog] = useState<number | null>(null);

  return (
    <Section tone="soft" mobile ariaLabel="Professional Level">
      <SectionHeader mobile eyebrow={data.badge} icon={Users} accent={ACCENTS[4]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {data.levels.map((level: any, i: number) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 relative overflow-hidden flex flex-col"
            >
              <span aria-hidden="true" className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3 mb-4 pt-1">
                <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                <h3 className="text-[16px] font-bold leading-snug text-[#0B1D3A]">
                  {level.title}
                </h3>
              </div>
              <p className="text-[14px] text-[#475569] font-medium leading-relaxed mb-4">
                {level.text}
              </p>

              {level.flow && (
                <div className="mt-auto pt-4 border-t border-[#E6EBF3] flex flex-col items-center">
                  <button 
                    onClick={() => setActiveDialog(i)}
                    className="text-[13px] font-bold text-[#0B1D3A] flex items-center justify-between w-full hover:text-[#C99A2E] transition-colors group/btn"
                  >
                    View Practice Flow
                    <ChevronRight size={16} className="text-[#C99A2E] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {activeDialog !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B1D3A]/70 backdrop-blur-md"
            onClick={() => setActiveDialog(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[16px] shadow-2xl max-w-sm w-full relative overflow-hidden border border-[#E6EBF3]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[180px] relative">
                <img src={DIALOG_IMAGES[activeDialog]} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/70 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E]" />
                
                <button 
                  onClick={() => setActiveDialog(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm rounded-full p-1.5 z-20"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>

                <div className="absolute bottom-5 left-6 flex items-center gap-3 z-10">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm shrink-0">
                     {(() => {
                       const Icon = ICONS[activeDialog % ICONS.length];
                       return <Icon size={20} className="text-white" strokeWidth={2.5} />;
                     })()}
                   </div>
                   <div>
                     <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5 block drop-shadow-sm">
                       Practice Flow
                     </span>
                     <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md leading-tight">
                       {data.levels[activeDialog].title}
                     </h3>
                   </div>
                </div>
              </div>

              <div className="p-6 pt-8 bg-[#FAFBFF] max-h-[60vh] overflow-y-auto">
                <div className="flex flex-col items-center justify-center gap-2">
                  {data.levels[activeDialog].flow.map((step: string, idx: number) => {
                    const isLast = idx === data.levels[activeDialog].flow.length - 1;
                    return (
                      <div key={idx} className="flex flex-col items-center w-full">
                        <div className={`flex items-center gap-2.5 px-4 py-3.5 w-full justify-center rounded-[10px] border shadow-sm ${isLast ? 'bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] border-[#F3E1A0] text-[#0B1D3A]' : 'bg-white border-[#E6EBF3] text-[#0B1D3A]'}`}>
                          <div className={`w-2 h-2 rounded-full shrink-0 ${isLast ? 'bg-[#0B1D3A]' : 'bg-[#1E3F7D]'}`} />
                          <span className="text-[12px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                            {step}
                          </span>
                        </div>
                        {!isLast && (
                          <div className="py-2 text-[#94A3B8]/50">
                            <ArrowDown size={20} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
