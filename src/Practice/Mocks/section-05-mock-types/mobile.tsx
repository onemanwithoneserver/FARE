import React from "react";
import { motion } from "motion/react";
import { data } from "../data";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function Mobile() {
  const sectionData = data.mockTypes;
  return (
    <section className="w-full bg-[#f8fafc] py-16 relative overflow-hidden">
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
        
        <div className="flex flex-col gap-5">
          {sectionData.types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-[4px] p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#0B1D3A] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MessageSquare size={18} strokeWidth={2.5} />
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">
                  {type.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 rounded-[4px] p-3.5 border border-gray-100">
                  <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Scenario</div>
                  <p className="text-[14px] text-gray-700 italic font-medium leading-relaxed">
                    "{type.scenario}"
                  </p>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#C99A2E] uppercase mb-2">Practise Flow</div>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {type.practise.split('→').map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="text-[13px] text-[#0B1D3A] font-medium bg-[#C99A2E]/10 px-2 py-1 rounded-[2px] border border-[#C99A2E]/20">
                          {step.trim()}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight size={12} className="text-[#C99A2E] shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
