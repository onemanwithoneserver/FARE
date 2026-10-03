import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";

export default function Mobile() {
  const sectionData = data.whatYouCanPractise;
  const [activeTab, setActiveTab] = useState("mock");
  
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[28px] font-bold text-[#0B1D3A] mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mx-auto mb-5 rounded-[2px]" />
          <p className="text-[15px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <div className="flex w-full p-1 bg-[#f1f5f9] rounded-[4px]">
            <button
              onClick={() => setActiveTab("mock")}
              className={`flex-1 py-2.5 rounded-[2px] text-[14px] font-semibold transition-all duration-300 ${activeTab === "mock" ? "bg-white text-[#0B1D3A] shadow-sm" : "text-gray-500"}`}
            >
              Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`flex-1 py-2.5 rounded-[2px] text-[14px] font-semibold transition-all duration-300 ${activeTab === "scenario" ? "bg-white text-[#0B1D3A] shadow-sm" : "text-gray-500"}`}
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {sectionData.mockTests.map((group, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-[4px] p-5 shadow-sm">
                    <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3 pb-2 border-b border-gray-100">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="inline-block px-2.5 py-1.5 bg-gray-50 text-gray-600 text-[12.5px] rounded-[4px] border border-gray-100">
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {sectionData.scenarioTests.map((group, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-[4px] p-5 shadow-sm">
                    <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3 pb-2 border-b border-gray-100">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="inline-block px-2.5 py-1.5 bg-[#f1f5f9] text-[#0B1D3A] text-[12.5px] rounded-[4px]">
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
