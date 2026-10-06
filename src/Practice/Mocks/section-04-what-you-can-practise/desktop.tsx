import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { CheckCircle2, ChevronDown, ChevronRight, Target } from "lucide-react";
import { ACCENTS, AccentHairline, Reveal, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
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
    <Section tone="white" ariaLabel="What you can practise">
      <SectionHeader eyebrow="Scenarios" icon={Target} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.description} />

      <div className="w-full max-w-[1240px] mx-auto mt-12 mb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {sectionData.categories.map((category, index) => {
            const a = accentAt(index);
            const active = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-[12px] text-[15px] font-bold transition-all duration-300 cursor-pointer border select-none active:scale-[0.97] ${
                  active
                    ? "border-transparent text-white luxury-shadow-sm"
                    : "bg-white text-[#475569] border-[#E6EBF3] hover:border-[#C99A2E]/40 hover:text-[#0B1D3A]"
                }`}
                style={active ? { background: `linear-gradient(135deg, ${a.from}, ${a.to})`, boxShadow: `0 8px 16px -6px ${a.glow}` } : undefined}
              >
                {category.title}
              </button>
            );
          })}
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {sectionData.categories.map((category, catIndex) => {
              if (catIndex !== activeTab) return null;
              
              return (
                <motion.div
                  key={catIndex}
                  variants={staggerContainer(0.06)}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.groups.map((group, index) => {
                    const cardId = `scenario-${index}`;
                    const isExpanded = expandedCards.has(cardId);
                    const visibleItems = isExpanded ? group.items : group.items.slice(0, 6);
                    const hasMore = group.items.length > 6;

                    return (
                      <motion.div
                        key={group.title}
                        variants={fadeScale}
                        className="bg-white rounded-[16px] p-7 border border-[#E6EBF3] luxury-shadow-sm hover:border-[#C99A2E]/30 transition-all duration-300 relative overflow-hidden"
                      >
                        <AccentHairline accent={activeAccent} />
                        
                        <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-5 border-b border-[#E6EBF3] pb-4 flex items-center gap-2">
                          <ChevronRight size={18} className="text-[#C99A2E]" strokeWidth={3} />
                          {group.title}
                        </h3>

                        <ul className="flex flex-col gap-3.5">
                          <AnimatePresence initial={false}>
                            {visibleItems.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <div className="mt-[2px] shrink-0 text-[#10B981]/50 group-hover/item:text-[#10B981] transition-colors duration-300">
                                  <CheckCircle2 size={16} strokeWidth={2.5} />
                                </div>
                                <span className="text-[14px] text-[#475569] font-medium leading-snug">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                          
                          {hasMore && (
                            <li className="pl-7 pt-2">
                              <button
                                onClick={() => toggleExpand(cardId)}
                                className="text-[13px] text-[#C99A2E] font-bold hover:text-[#0B1D3A] transition-colors flex items-center gap-1"
                              >
                                {isExpanded ? "Show less" : `+${group.items.length - 6} more`}
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
