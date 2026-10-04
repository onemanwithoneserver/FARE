import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronRight, X, ArrowDown } from "lucide-react";

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

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeDialog, setActiveDialog] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 px-6 font-['Outfit'] fare-noise-overlay relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.badge}
          </span>
          <h2 className="text-[#0B1D3A] text-[1.75rem] font-black tracking-tight leading-tight">
            {data.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.levels.map((level: any, i: number) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-6 rounded-[4px] border border-[#E2E8F0]/60 shadow-[0_2px_8px_rgba(11,29,58,0.02)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-[4px] flex shrink-0 items-center justify-center bg-gradient-to-br ${gradient} shadow-sm`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[17px] font-bold leading-snug" style={{ color: NAVY }}>
                  {level.title}
                </h3>
                </div>
                <p className="text-[14px] text-[#64748B] font-medium leading-relaxed">
                  {level.text}
                </p>

                {level.flow && (
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0]/80 flex flex-col items-center">
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
        </div>
      </div>

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
              className="bg-white rounded-[16px] shadow-2xl max-w-sm w-full relative overflow-hidden border border-[#E2E8F0]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover Image */}
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

              {/* Content Area */}
              <div className="p-6 pt-8 bg-[#FAFBFF] max-h-[60vh] overflow-y-auto">
                <div className="flex flex-col items-center justify-center gap-2">
                  {data.levels[activeDialog].flow.map((step: string, idx: number) => {
                    const isLast = idx === data.levels[activeDialog].flow.length - 1;
                    return (
                      <div key={idx} className="flex flex-col items-center w-full">
                        <div className={`flex items-center gap-2.5 px-4 py-3.5 w-full justify-center rounded-[10px] border shadow-sm ${isLast ? 'bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] border-[#F3E1A0] text-[#0B1D3A]' : 'bg-white border-[#E2E8F0] text-[#0B1D3A]'}`}>
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
    </section>
  );
}
