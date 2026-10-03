import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";

export default function Desktop() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState("mock");
  
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#0B1D3A] mb-6 leading-[1.2]">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-[#C99A2E] mx-auto mb-6 rounded-[2px]" />
          <p className="text-[16px] md:text-[18px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#f1f5f9] rounded-[8px]">
            <button
              onClick={() => setActiveTab("mock")}
              className={`px-8 py-3 rounded-[4px] text-[15px] font-semibold transition-all duration-300 ${activeTab === "mock" ? "bg-white text-[#0B1D3A] shadow-sm" : "text-gray-500 hover:text-[#0B1D3A]"}`}
            >
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`px-8 py-3 rounded-[4px] text-[15px] font-semibold transition-all duration-300 ${activeTab === "scenario" ? "bg-white text-[#0B1D3A] shadow-sm" : "text-gray-500 hover:text-[#0B1D3A]"}`}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sectionData.mockTests.map((group, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-[8px] p-6 hover:shadow-lg transition-shadow duration-300 group">
                    <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-4 pb-3 border-b border-gray-100 group-hover:text-[#C99A2E] transition-colors">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="inline-block px-3 py-1.5 bg-gray-50 text-gray-600 text-[13px] rounded-[4px] font-medium border border-gray-100 group-hover:bg-[#f8fafc] transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="scenario"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sectionData.scenarioTests.map((group, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-[8px] p-6 hover:shadow-lg transition-shadow duration-300 group">
                    <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-4 pb-3 border-b border-gray-100 group-hover:text-[#C99A2E] transition-colors">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="inline-block px-3 py-1.5 bg-[#f1f5f9] text-[#0B1D3A] text-[13px] rounded-[4px] font-medium border border-transparent">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
