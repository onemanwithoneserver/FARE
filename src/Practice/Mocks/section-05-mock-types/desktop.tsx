import React from "react";
import { motion } from "motion/react";
import { data } from "../data";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function Desktop() {
  const sectionData = data.mockTypes;
  return (
    <section className="w-full bg-[#f8fafc] py-24 relative overflow-hidden">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionData.types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-[8px] p-8 luxury-shadow-float flex flex-col gap-5 group hover:border-[#C99A2E]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/5 to-transparent blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                <div className="w-12 h-12 rounded-[4px] bg-[#0B1D3A] flex items-center justify-center text-white transition-all duration-300 shrink-0 group-hover:bg-[#C99A2E] group-hover:rotate-6 group-hover:scale-110 shadow-md">
                  <MessageSquare size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0B1D3A] leading-tight">
                  {type.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 rounded-[4px] p-4 border border-gray-100 relative">
                  <div className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-2">Scenario</div>
                  <p className="text-[15px] text-gray-700 italic font-medium leading-relaxed">
                    "{type.scenario}"
                  </p>
                </div>
                
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-[#C99A2E] uppercase mb-2">Practise Flow</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {type.practise.split('→').map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="text-[14px] text-[#0B1D3A] font-medium bg-[#C99A2E]/10 px-2 py-1 rounded-[4px] border border-[#C99A2E]/20">
                          {step.trim()}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight size={14} className="text-[#C99A2E] shrink-0" />
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
