import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { Target, ChevronDown, CheckCircle2, BookOpen, TrendingUp, Users, PenTool, Award, MessageCircle, Briefcase, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { ACCENTS, AccentHairline, HoverGlow, CARD_BASE, CARD_HOVER, Section, SectionHeader, accentAt, fadeScale, staggerContainer } from "../../ui";

const ICONS = [BookOpen, TrendingUp, Users, PenTool, Award, MessageCircle, Briefcase, FileText, HeartHandshake, ShieldCheck];

export default function Desktop() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());



  const toggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const currentGroups = activeTab === 0 ? sectionData.mockTests : sectionData.scenarioTests;

  return (
    <Section tone="white" ariaLabel="What you can practise">
      <SectionHeader eyebrow="Scenarios" icon={Target} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.description} />

      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-[#0B1D3A] border border-white/10 luxury-shadow-float">
            {["Mock Tests", "Scenario Tests"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${
                  activeTab === i ? "text-white" : "text-white/60 hover:text-white/90"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activePractiseTab"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap justify-center gap-6 items-start"
          >
            {currentGroups.map((group, index) => {
              const a = accentAt(index + activeTab * 4);
              const Icon = ICONS[index % ICONS.length];
              const isExpanded = expandedCards.has(`${activeTab}-${index}`);
              const visibleItems = isExpanded ? group.items : group.items.slice(0, 5);
              const hiddenCount = group.items.length - 5;
              const cleanTitle = group.title.replace(/^\d{2}\s*[^a-zA-Z]+/, '');

              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={fadeScale}
                  className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-6 flex flex-col relative overflow-hidden group`}
                >
                  <AccentHairline accent={a} />
                  <HoverGlow accent={a} />
                  
                  <div className="flex items-center gap-3 mb-5 border-b border-[#E6EBF3] pb-4">
                    <div className="w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})`, color: 'white' }}>
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[15px] font-bold leading-tight text-[#0B1D3A]">
                      {cleanTitle}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {visibleItems.map((item, itemIdx) => (
                      <motion.li
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        key={itemIdx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: a.to }} />
                        <span className="text-[13.5px] text-[#475569] font-medium leading-snug">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {hiddenCount > 0 && (
                    <div className="mt-5 pt-3 border-t border-[#E6EBF3]/50">
                      <button
                        onClick={() => toggleExpand(`${activeTab}-${index}`)}
                        className="text-[13px] font-bold transition-colors flex items-center justify-between w-full cursor-pointer hover:text-[#0B1D3A]"
                        style={{ color: a.to }}
                      >
                        {isExpanded ? "Show less" : `+${hiddenCount} more items`}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
