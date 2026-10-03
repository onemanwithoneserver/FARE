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

export default function Desktop() {
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
         <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[80px]" />
      </div>
      
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 w-full max-w-[1200px] text-center"
        >
          <h2 className="mb-4 whitespace-nowrap text-[32px] font-black leading-tight tracking-tight text-[#0B1D3A] md:text-[38px] lg:text-[40px]">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 rounded-full" />
          <p className="text-[17px] md:text-[18px] text-[#64748B] font-medium leading-relaxed max-w-3xl mx-auto">
            {sectionData.description}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sectionData.types.map((type, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[8px] p-8 luxury-shadow-float flex flex-col gap-6 group hover:border-[#C99A2E]/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/5 to-transparent blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center gap-5 border-b border-gray-100/80 pb-5">
                  <div className={`w-14 h-14 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white transition-all duration-300 shrink-0 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A] leading-tight group-hover:text-[#C99A2E] transition-colors duration-300">
                    {type.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-5">
                  <div className="bg-[#FAFBFF] rounded-[4px] p-5 border border-[#E2E8F0]/60 relative shadow-inner">
                    <div className="text-[11px] font-bold tracking-widest text-[#94A3B8] uppercase mb-2">Scenario</div>
                    <p className="text-[15.5px] text-[#334155] italic font-medium leading-relaxed">
                      "{type.scenario}"
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-[#C99A2E] uppercase mb-2">Practise Flow</div>
                    <div className="flex items-center gap-1.5 flex-nowrap w-full overflow-hidden">
                      {type.practise.split('→').map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-[10px] xl:text-[11px] text-white font-bold bg-[#0B1D3A] px-2 py-1 rounded-[4px] border border-white/10 shadow-sm hover:border-[#C99A2E]/50 hover:bg-[#102B63] transition-colors duration-200 cursor-default whitespace-nowrap truncate">
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
