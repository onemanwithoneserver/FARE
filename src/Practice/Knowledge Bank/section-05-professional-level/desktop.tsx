import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { useState } from "react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronRight, X } from "lucide-react";

import imgStudents from "../../../assets/students_hero.jpg";
import imgEmployees from "../../../assets/employees_hero.jpg";
import imgCompanies from "../../../assets/re_companies_hero.png";
import imgFreelancers from "../../../assets/freelancers_hero.jpg";
import imgCareerSwitchers from "../../../assets/career_switchers_hero.jpg";
import imgKnowledge from "../../../assets/knowledge_bank_hero.jpg";
import imgTrainers from "../../../assets/re_trainers_hero.jpg";

const DIALOG_IMAGES = [
  imgStudents,       // Students & Freshers
  imgEmployees,      // Entry-Level
  imgKnowledge,      // Experienced
  imgTrainers,       // Managers
  imgCompanies,      // Leaders
  imgFreelancers,    // Freelancers & Channel Partners
  imgCareerSwitchers // Career Switchers
];

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeDialog, setActiveDialog] = useState<number | null>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 px-10 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-[#0B1D3A] text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-6 relative z-10"
        >
          {data.levels.map((level: any, i: number) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-[#F8FAFD] p-7 rounded-[4px] border border-[#E2E8F0] hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-[4px] flex shrink-0 items-center justify-center bg-gradient-to-br ${gradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold leading-snug" style={{ color: NAVY }}>
                  {level.title}
                </h3>
                </div>
                <p className="text-[15px] text-[#64748B] font-medium leading-relaxed flex-grow">
                  {level.text}
                </p>

                {level.flow && (
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/80 flex flex-col items-center">
                    <button 
                      onClick={() => setActiveDialog(i)}
                      className="text-[13px] font-bold text-[#0B1D3A] flex items-center justify-between w-full hover:text-[#C99A2E] transition-colors group/btn"
                    >
                      View Practice Flow
                      <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeDialog !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B1D3A]/60 backdrop-blur-sm"
            onClick={() => setActiveDialog(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[20px] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] max-w-4xl w-full relative overflow-hidden border border-[#E2E8F0]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover Image Area */}
              <div className="w-full h-[220px] relative">
                <img src={DIALOG_IMAGES[activeDialog]} className="w-full h-full object-cover object-center" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/60 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E]" />
                
                <button 
                  onClick={() => setActiveDialog(null)}
                  className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-20"
                >
                  <X size={22} strokeWidth={2.5} />
                </button>

                <div className="absolute bottom-7 left-10 flex items-center gap-5 z-10">
                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm shrink-0">
                     {(() => {
                       const Icon = ICONS[activeDialog % ICONS.length];
                       return <Icon size={28} className="text-white" strokeWidth={2} />;
                     })()}
                   </div>
                   <div>
                     <span className="text-[#C99A2E] text-[12px] font-bold tracking-[0.25em] uppercase mb-1.5 block drop-shadow-sm">
                       Practice Flow
                     </span>
                     <h3 className="text-[32px] font-black text-white tracking-tight drop-shadow-md leading-tight">
                       {data.levels[activeDialog].title}
                     </h3>
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="px-10 py-10 bg-gradient-to-b from-[#0B1D3A] to-[#102A52]">
                <p className="text-[16px] text-white/75 mb-10 leading-relaxed font-medium max-w-2xl">
                  The recommended path to master your domain knowledge and advance your career. Follow this structured journey for optimal results.
                </p>

                {/* One-row stepper */}
                <div className="relative grid grid-flow-col auto-cols-fr gap-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-white/20 via-[#C99A2E]/70 to-[#C99A2E]"
                  />
                  {data.levels[activeDialog].flow.map((step: string, idx: number) => {
                    const isLast = idx === data.levels[activeDialog].flow.length - 1;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + idx * 0.12, duration: 0.4 }}
                        className="relative z-10 flex flex-col items-center text-center gap-3 group"
                      >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-black border-2 transition-all duration-300 group-hover:-translate-y-1 ${isLast ? 'bg-gradient-to-br from-[#F3E1A0] to-[#C99A2E] border-[#F3E1A0] text-[#0B1D3A] shadow-[0_0_28px_rgba(201,154,46,0.55)]' : 'bg-[#0B1D3A] border-white/30 text-white group-hover:border-[#C99A2E]'}`}>
                          {idx + 1}
                        </div>
                        <span className={`text-[13px] font-bold tracking-[0.12em] uppercase whitespace-nowrap ${isLast ? 'text-[#F3E1A0]' : 'text-white'}`}>
                          {step}
                        </span>
                      </motion.div>
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
