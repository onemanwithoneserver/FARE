import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { Target, ChevronDown, CheckCircle2, BookOpen, TrendingUp, Users, PenTool, Award, MessageCircle, Briefcase, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { ACCENTS, Section, SectionHeader, accentAt, fadeScale, staggerContainer } from "../../ui";

const ICONS = [BookOpen, TrendingUp, Users, PenTool, Award, MessageCircle, Briefcase, FileText, HeartHandshake, ShieldCheck];

export default function Mobile() {
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
    <Section tone="white" mobile ariaLabel="What you can practise">
      <SectionHeader mobile eyebrow="Scenarios" icon={Target} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.description} />

      <div className="max-w-full mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#0B1D3A] border border-white/10 shadow-sm w-full max-w-sm">
            {["Mock Tests", "Scenario Tests"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative flex-1 py-2.5 rounded-full text-[13.5px] font-bold transition-all duration-300 ${
                  activeTab === i ? "text-white" : "text-white/60"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activePractiseTabMobile"
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
            className="flex flex-col gap-4"
          >
            {currentGroups.map((group, index) => {
              const a = accentAt(index + activeTab * 4);
              const Icon = ICONS[index % ICONS.length];
              const isExpanded = expandedCards.has(`${activeTab}-${index}`);
              const visibleItems = isExpanded ? group.items : group.items.slice(0, 4);
              const hiddenCount = group.items.length - 4;
              const cleanTitle = group.title.replace(/^\d{2}\s*[^a-zA-Z]+/, '');

              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={fadeScale}
                  className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 relative overflow-hidden flex flex-col"
                >
                  <span aria-hidden="true" className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
                  
                  <div className="flex items-center gap-2.5 mb-4 border-b border-[#E6EBF3] pb-3 pt-1">
                    <div className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})`, color: 'white' }}>
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[14.5px] font-bold leading-tight text-[#0B1D3A]">
                      {cleanTitle}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2.5">
                    {visibleItems.map((item, itemIdx) => (
                      <motion.li
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        key={itemIdx}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: a.to }} />
                        <span className="text-[13px] text-[#475569] font-medium leading-snug">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {hiddenCount > 0 && (
                    <div className="mt-4 pt-2.5 border-t border-[#E6EBF3]/50">
                      <button
                        onClick={() => toggleExpand(`${activeTab}-${index}`)}
                        className="text-[12.5px] font-bold transition-colors flex items-center justify-between w-full"
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
