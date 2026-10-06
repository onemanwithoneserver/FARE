import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronRight, X, Users } from "lucide-react";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../ui";

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

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeDialog, setActiveDialog] = useState<number | null>(null);

  return (
    <Section tone="soft" ariaLabel="Professional Level">
      <SectionHeader eyebrow={data.badge} icon={Users} accent={ACCENTS[4]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center gap-6 max-w-[1300px] mx-auto"
      >
        {data.levels.map((level: any, i: number) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-6 flex flex-col relative overflow-hidden group`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center gap-3.5 mb-5">
                <IconBadge icon={Icon} accent={a} size="sm" />
                <h3 className="text-[17px] font-bold leading-snug text-[#0B1D3A]">
                  {level.title}
                </h3>
              </div>
              <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed mb-6">
                {level.text}
              </p>

              {level.flow && (
                <div className="mt-auto pt-5 border-t border-[#E6EBF3] flex flex-col items-center">
                  <button 
                    onClick={() => setActiveDialog(i)}
                    className="text-[13.5px] font-bold text-[#0B1D3A] flex items-center justify-between w-full hover:text-[#C99A2E] transition-colors group/btn cursor-pointer"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0B1D3A]/60 backdrop-blur-md"
            onClick={() => setActiveDialog(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[24px] shadow-2xl max-w-4xl w-full relative overflow-hidden border border-[#E6EBF3]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[220px] relative">
                <img src={DIALOG_IMAGES[activeDialog]} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/50 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E]" />
                
                <button 
                  onClick={() => setActiveDialog(null)}
                  className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 z-20 cursor-pointer"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>

                <div className="absolute bottom-6 left-10 flex items-center gap-5 z-10">
                   <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm shrink-0">
                     {(() => {
                       const Icon = ICONS[activeDialog % ICONS.length];
                       return <Icon size={24} className="text-white" strokeWidth={2.5} />;
                     })()}
                   </div>
                   <div>
                     <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-1 block drop-shadow-sm">
                       Practice Flow
                     </span>
                     <h3 className="text-3xl font-black text-white tracking-tight drop-shadow-md">
                       {data.levels[activeDialog].title}
                     </h3>
                   </div>
                </div>
              </div>

              <div className="px-10 py-10 bg-gradient-to-b from-[#0B1D3A] to-[#102A52]">
                <p className="text-[16px] text-white/75 mb-10 leading-relaxed font-medium max-w-2xl">
                  The recommended path to master your domain knowledge and advance your career. Follow this structured journey for optimal results.
                </p>

                <div className="relative grid grid-flow-col auto-cols-fr gap-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    style={{ originX: 0, left: `${50 / data.levels[activeDialog].flow.length}%`, right: `${50 / data.levels[activeDialog].flow.length}%` }}
                    className="absolute top-7 h-[2px] bg-gradient-to-r from-white/20 via-[#C99A2E]/70 to-[#C99A2E]"
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
                        <span className={`text-[12px] font-bold tracking-[0.08em] uppercase leading-snug ${isLast ? 'text-[#F3E1A0]' : 'text-white'}`}>
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
    </Section>
  );
}
