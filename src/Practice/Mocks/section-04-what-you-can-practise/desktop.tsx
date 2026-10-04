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

export default function Desktop() {
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[80px]" />
         <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] bg-gradient-radial from-[#0B1D3A]/5 to-transparent blur-[80px]" />
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className=" text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-4 leading-tight tracking-tight">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
          <p className="text-[17px] md:text-[18px] text-[#64748B] font-medium max-w-3xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        {/* Premium Tabs */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="inline-flex p-1.5 bg-[#0B1D3A] rounded-full shadow-lg relative">
            <button
              onClick={() => setActiveTab("mock")}
              className={`relative px-10 py-3.5 rounded-full text-[15px] font-bold transition-all duration-300 z-10 ${activeTab === "mock" ? "text-[#0B1D3A]" : "text-slate-300 hover:text-white"}`}
            >
              {activeTab === "mock" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`relative px-10 py-3.5 rounded-full text-[15px] font-bold transition-all duration-300 z-10 ${activeTab === "scenario" ? "text-[#0B1D3A]" : "text-slate-300 hover:text-white"}`}
            >
              {activeTab === "scenario" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Scenario Tests
            </button>
          </div>
        </div>

        <div className="w-full relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "mock" ? (
              <motion.div
                key="mock"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="flex flex-wrap justify-center items-stretch gap-6"
              >
                {sectionData.mockTests.map((group, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  const gradient = GRADIENTS[index % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-8 rounded-[8px] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/5 to-transparent blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex items-center gap-4 border-b border-gray-100/80 pb-5 mb-5">
                        <div className={`w-12 h-12 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 shrink-0`}>
                          <Icon size={22} strokeWidth={2.5} />
                        </div>
                        <h3 className=" text-[17px] font-bold text-[#0B1D3A] leading-tight group-hover:text-[#C99A2E] transition-colors duration-300">
                          {group.title.replace(/^\d{2}\s*—\s*/, '')}
                        </h3>
                      </div>
                      <ul className="space-y-3.5">
                        {group.items.slice(0, expandedCards.has(`mock-${index}`) ? group.items.length : 6).map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-[2px] shrink-0 text-[#C99A2E]/60 group-hover:text-[#C99A2E] transition-colors duration-300">
                              <CheckCircle2 size={16} strokeWidth={2.5} />
                            </div>
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                        {group.items.length > 6 && !expandedCards.has(`mock-${index}`) && (
                          <li className="pl-7 pt-1">
                            <a href="#more" onClick={(e) => { e.preventDefault(); toggleExpand(`mock-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              +{group.items.length - 6} more
                            </a>
                          </li>
                        )}
                        {group.items.length > 6 && expandedCards.has(`mock-${index}`) && (
                          <li className="pl-7 pt-1">
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
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="flex flex-wrap justify-center items-stretch gap-6"
              >
                {sectionData.scenarioTests.map((group, index) => {
                  const Icon = ICONS[(index + 5) % ICONS.length];
                  const gradient = GRADIENTS[(index + 3) % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-8 rounded-[8px] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/5 to-transparent blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex items-center gap-4 border-b border-gray-100/80 pb-5 mb-5">
                        <div className={`w-12 h-12 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 shrink-0`}>
                          <Icon size={22} strokeWidth={2.5} />
                        </div>
                        <h3 className=" text-[17px] font-bold text-[#0B1D3A] leading-tight group-hover:text-[#C99A2E] transition-colors duration-300">
                          {group.title.replace(/^\d{2}\s*—\s*/, '')}
                        </h3>
                      </div>
                      <ul className="space-y-3.5">
                        {group.items.slice(0, expandedCards.has(`scenario-${index}`) ? group.items.length : 6).map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-[2px] shrink-0 text-[#C99A2E]/60 group-hover:text-[#C99A2E] transition-colors duration-300">
                              <CheckCircle2 size={16} strokeWidth={2.5} />
                            </div>
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                        {group.items.length > 6 && !expandedCards.has(`scenario-${index}`) && (
                          <li className="pl-7 pt-1">
                            <a href="#more" onClick={(e) => { e.preventDefault(); toggleExpand(`scenario-${index}`); }} className="text-[13px] text-[#0B1D3A] font-bold underline underline-offset-4 decoration-[#0B1D3A]/30 hover:decoration-[#C99A2E] hover:text-[#C99A2E] transition-colors duration-300 inline-block">
                              +{group.items.length - 6} more
                            </a>
                          </li>
                        )}
                        {group.items.length > 6 && expandedCards.has(`scenario-${index}`) && (
                          <li className="pl-7 pt-1">
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
