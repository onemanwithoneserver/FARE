import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { CheckCircle2, ChevronDown, ChevronRight, Target } from "lucide-react";
import { ACCENTS, Reveal, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const activeAccent = accentAt(activeTab);

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <Section tone="white" mobile ariaLabel="What you can practise">
      <SectionHeader mobile eyebrow="Scenarios" icon={Target} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.description} />

      <div className="w-full mt-6 mb-4">
        {/* Horizontal scroll for tabs */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 pb-6 px-5 -mx-5 hide-scrollbar">
          {sectionData.categories.map((category, index) => {
            const a = accentAt(index);
            const active = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`snap-start shrink-0 px-4 py-2 rounded-[10px] text-[14px] font-bold transition-all duration-300 border select-none ${
                  active
                    ? "border-transparent text-white shadow-sm"
                    : "bg-white text-[#475569] border-[#E6EBF3]"
                }`}
                style={active ? { background: `linear-gradient(135deg, ${a.from}, ${a.to})` } : undefined}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {sectionData.categories.map((category, catIndex) => {
              if (catIndex !== activeTab) return null;
              
              return (
                <motion.div
                  key={catIndex}
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
                  className="flex flex-col gap-4"
                >
                  {category.groups.map((group, index) => {
                    const cardId = `scenario-${index}`;
                    const isExpanded = expandedCards.has(cardId);
                    const visibleItems = isExpanded ? group.items : group.items.slice(0, 4); // show fewer on mobile
                    const hasMore = group.items.length > 4;

                    return (
                      <motion.div
                        key={group.title}
                        variants={fadeUp}
                        className="bg-white rounded-[16px] p-5 border border-[#E6EBF3] relative overflow-hidden"
                      >
                        <span aria-hidden="true" className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${activeAccent.from}, ${activeAccent.to})` }} />
                        
                        <h3 className="text-[15.5px] font-bold text-[#0B1D3A] mb-4 pb-3 border-b border-[#E6EBF3] flex items-center gap-1.5 pt-1">
                          <ChevronRight size={16} className="text-[#C99A2E]" strokeWidth={3} />
                          {group.title}
                        </h3>

                        <ul className="flex flex-col gap-3">
                          <AnimatePresence initial={false}>
                            {visibleItems.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-2.5"
                              >
                                <div className="mt-0.5 shrink-0 text-[#10B981]/50">
                                  <CheckCircle2 size={15} strokeWidth={2.5} />
                                </div>
                                <span className="text-[13.5px] text-[#475569] font-medium leading-snug">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                          
                          {hasMore && (
                            <li className="pl-6 pt-1">
                              <button
                                onClick={() => toggleExpand(cardId)}
                                className="text-[13px] text-[#C99A2E] font-bold flex items-center gap-1"
                              >
                                {isExpanded ? "Show less" : `+${group.items.length - 4} more`}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                              </button>
                            </li>
                          )}
                        </ul>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
