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

export default function Desktop() {
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-black text-[#0B1D3A] mb-4 leading-tight tracking-tight">
            {sectionData.title}
          </h2>
          <p className="text-[17px] text-[#64748B] font-medium max-w-3xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-[#F8FAFD] rounded-[8px] border border-[#E2E8F0]/80 shadow-sm">
            <button
              onClick={() => setActiveTab("mock")}
              className={`px-10 py-3.5 rounded-[6px] text-[15px] font-bold transition-all duration-300 ${activeTab === "mock" ? "bg-white text-[#0B1D3A] shadow-md border border-[#E2E8F0]" : "text-[#64748B] hover:text-[#0B1D3A]"}`}
            >
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`px-10 py-3.5 rounded-[6px] text-[15px] font-bold transition-all duration-300 ${activeTab === "scenario" ? "bg-white text-[#0B1D3A] shadow-md border border-[#E2E8F0]" : "text-[#64748B] hover:text-[#0B1D3A]"}`}
            >
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
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {sectionData.mockTests.map((group, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  const gradient = GRADIENTS[index % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-6 rounded-[4px] border border-[#E2E8F0]/60 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-5 border-b border-[#E2E8F0] pb-4">
                        <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                          <Icon size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-bold leading-tight" style={{ color: NAVY }}>
                            {group.title.replace(/^\d{2}\s*—\s*/, '')}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
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
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {sectionData.scenarioTests.map((group, index) => {
                  const Icon = ICONS[(index + 5) % ICONS.length];
                  const gradient = GRADIENTS[(index + 3) % GRADIENTS.length];
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-6 rounded-[4px] border border-[#E2E8F0]/60 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-5 border-b border-[#E2E8F0] pb-4">
                        <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                          <Icon size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-bold leading-tight" style={{ color: NAVY }}>
                            {group.title.replace(/^\d{2}\s*—\s*/, '')}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                            <span className="text-[14px] text-[#475569] font-medium leading-snug">
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
