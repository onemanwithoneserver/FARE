import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown, ArrowRight } from "lucide-react";

const icons = [MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.mockTypes;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
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
          className="mb-10 w-full text-center"
        >
          <h2 className="mb-4 whitespace-nowrap text-[clamp(10px,3vw,14px)] font-black leading-tight tracking-tight text-[#0B1D3A]">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 rounded-full" />
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-5"
        >
          {sectionData.types.map((type, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[4px] p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 border-b border-gray-100/80 pb-4">
                  <div className={`w-11 h-11 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white shrink-0`}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight">
                    {type.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-[#FAFBFF] rounded-[4px] p-4 border border-[#E2E8F0]/60 shadow-inner">
                    <div className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase mb-1.5">Scenario</div>
                    <p className="text-[14.5px] text-[#334155] italic font-medium leading-relaxed">
                      "{type.scenario}"
                    </p>
                  </div>
                  
                  <div className="w-full overflow-hidden">
                    <div className="text-[10px] font-bold tracking-widest text-[#C99A2E] uppercase mb-2">Practise Flow</div>
                    <div className="flex flex-nowrap gap-1.5 items-center overflow-x-auto pb-1 scrollbar-hide w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      {type.practise.split('→').map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-[10px] text-white font-bold bg-[#0B1D3A] px-2 py-1 rounded-[4px] border border-white/10 shadow-sm whitespace-nowrap shrink-0">
                            {step.trim()}
                          </span>
                          {i < arr.length - 1 && (
                            <ArrowRight size={10} strokeWidth={3} className="text-[#C99A2E] shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
