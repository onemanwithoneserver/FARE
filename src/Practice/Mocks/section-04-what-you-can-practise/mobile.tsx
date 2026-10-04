import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { BookOpen, Users, PhoneCall, PenTool, Layout, MessageCircle, BarChart, Briefcase, Zap, Search, Key, Shield, CheckCircle2 } from "lucide-react";

const ICONS = [BookOpen, Users, PhoneCall, PenTool, Layout, MessageCircle, BarChart, Briefcase, Zap, Search, Key, Shield];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState("mock");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[#0B1D3A] text-[28px] font-black mb-4 leading-tight tracking-tight max-w-[95%] mx-auto">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        {/* Premium Tabs */}
        <div className="flex justify-center mb-8 relative z-20">
          <div className="flex w-full p-1.5 bg-[#0B1D3A] rounded-[8px] shadow-lg relative">
            <button
              onClick={() => setActiveTab("mock")}
              className={`relative flex-1 py-3 rounded-[6px] text-[14px] font-bold transition-all duration-300 z-10 ${activeTab === "mock" ? "text-[#0B1D3A]" : "text-slate-300 hover:text-white"}`}
            >
              {activeTab === "mock" && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-white rounded-[6px] shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`relative flex-1 py-3 rounded-[6px] text-[14px] font-bold transition-all duration-300 z-10 ${activeTab === "scenario" ? "text-[#0B1D3A]" : "text-slate-300 hover:text-white"}`}
            >
              {activeTab === "scenario" && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-white rounded-[6px] shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Scenarios
            </button>
          </div>
        </div>

        <div className="w-full relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "mock" ? (
              <motion.div
                key="mock"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
              >
                {sectionData.mockTests.map((group, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  const gradient = GRADIENTS[index % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[4px] p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 mb-4 border-b border-gray-100/80 pb-4">
                        <div className={`w-11 h-11 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white shrink-0`}>
                          <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">
                          {group.title.replace(/^\d{2}\s*—\s*/, '')}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {group.items.slice(0, expandedCards.has(`mock-${index}`) ? group.items.length : 6).map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="mt-[2px] shrink-0 text-[#C99A2E]/70">
                              <CheckCircle2 size={15} strokeWidth={2.5} />
                            </div>
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                        {group.items.length > 6 && !expandedCards.has(`mock-${index}`) && (
                          <li className="pl-[26px] pt-1">
                            <a href="#more" onClick={(e) => { e.preventDefault(); toggleExpand(`mock-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              +{group.items.length - 6} more
                            </a>
                          </li>
                        )}
                        {group.items.length > 6 && expandedCards.has(`mock-${index}`) && (
                          <li className="pl-[26px] pt-1">
                            <a href="#less" onClick={(e) => { e.preventDefault(); toggleExpand(`mock-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              Show less
                            </a>
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="scenario"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
              >
                {sectionData.scenarioTests.map((group, index) => {
                  const Icon = ICONS[(index + 5) % ICONS.length];
                  const gradient = GRADIENTS[(index + 3) % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[4px] p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 mb-4 border-b border-gray-100/80 pb-4">
                        <div className={`w-11 h-11 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white shrink-0`}>
                          <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">
                          {group.title.replace(/^\d{2}\s*—\s*/, '')}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {group.items.slice(0, expandedCards.has(`scenario-${index}`) ? group.items.length : 6).map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="mt-[2px] shrink-0 text-[#C99A2E]/70">
                              <CheckCircle2 size={15} strokeWidth={2.5} />
                            </div>
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                        {group.items.length > 6 && !expandedCards.has(`scenario-${index}`) && (
                          <li className="pl-[26px] pt-1">
                            <a href="#more" onClick={(e) => { e.preventDefault(); toggleExpand(`scenario-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              +{group.items.length - 6} more
                            </a>
                          </li>
                        )}
                        {group.items.length > 6 && expandedCards.has(`scenario-${index}`) && (
                          <li className="pl-[26px] pt-1">
                            <a href="#less" onClick={(e) => { e.preventDefault(); toggleExpand(`scenario-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              Show less
                            </a>
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
