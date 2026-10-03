import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { BookOpen, Users, PhoneCall, PenTool, Layout, MessageCircle, BarChart, Briefcase, Zap, Search, Key, Shield } from "lucide-react";

const NAVY = "#0B1D3A";

const ICONS = [BookOpen, Users, PhoneCall, PenTool, Layout, MessageCircle, BarChart, Briefcase, Zap, Search, Key, Shield];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState("mock");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
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
          <h2 className="text-[28px] font-black text-[#0B1D3A] mb-4 leading-tight tracking-tight">
            {sectionData.title}
          </h2>
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <div className="flex w-full p-1.5 bg-[#F8FAFD] rounded-[6px] border border-[#E2E8F0]/80 shadow-sm">
            <button
              onClick={() => setActiveTab("mock")}
              className={`flex-1 py-3 rounded-[4px] text-[14px] font-bold transition-all duration-300 ${activeTab === "mock" ? "bg-white text-[#0B1D3A] shadow-sm border border-[#E2E8F0]" : "text-[#64748B]"}`}
            >
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`flex-1 py-3 rounded-[4px] text-[14px] font-bold transition-all duration-300 ${activeTab === "scenario" ? "bg-white text-[#0B1D3A] shadow-sm border border-[#E2E8F0]" : "text-[#64748B]"}`}
            >
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
                      variants={item}
                      className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-5 rounded-[4px] border border-[#E2E8F0]/60 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 mb-4 border-b border-[#E2E8F0] pb-3.5">
                        <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-[14.5px] font-bold leading-tight" style={{ color: NAVY }}>
                            {group.title.replace(/^\d{2}\s*—\s*/, '')}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5 pl-1">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-[5px] shrink-0" />
                            <span className="text-[13.5px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
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
                      variants={item}
                      className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-5 rounded-[4px] border border-[#E2E8F0]/60 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 mb-4 border-b border-[#E2E8F0] pb-3.5">
                        <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-[14.5px] font-bold leading-tight" style={{ color: NAVY }}>
                            {group.title.replace(/^\d{2}\s*—\s*/, '')}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5 pl-1">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-[5px] shrink-0" />
                            <span className="text-[13.5px] text-[#475569] font-medium leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
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
