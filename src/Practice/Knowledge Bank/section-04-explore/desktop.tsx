import { motion } from "motion/react";
import { useState } from "react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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
    <section className="w-full bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-24 px-10 font-['Outfit'] fare-noise-overlay">
      <div className="max-w-[1300px] mx-auto">
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
          <h2 className=" text-[#0B1D3A] text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {data.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white p-6 rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5 border-b border-[#F1F5F9] pb-4">
                  <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className=" text-[17px] font-bold leading-tight" style={{ color: NAVY }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>
                {(() => {
                  const isExpanded = expandedCards.has(i);
                  const visibleItems = isExpanded ? cat.items : cat.items.slice(0, 5);
                  const hiddenCount = cat.items.length - 5;
                  
                  return (
                    <>
                      <ul className="space-y-2.5">
                        {visibleItems.map((itemStr, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-[4px] bg-[#CBD5E1] mt-1.5 shrink-0" />
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
                              {itemStr}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {hiddenCount > 0 && (
                        <div className="mt-3">
                          <button
                            onClick={() => toggleCard(i)}
                            className="text-[13px] font-bold text-[#C99A2E] hover:text-[#0B1D3A] transition-colors inline-block cursor-pointer outline-none"
                          >
                            {isExpanded ? "- Show less" : `+${hiddenCount} more`}
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}