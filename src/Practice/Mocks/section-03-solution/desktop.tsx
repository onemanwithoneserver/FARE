import { motion } from "motion/react";

import { data } from "../data";
import { MousePointerClick, Calendar, User, MessageCircle, PlayCircle } from "lucide-react";

const flowIcons = [MousePointerClick, Calendar, User, MessageCircle, PlayCircle];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Desktop() {
  const sectionData = data.solution;
  
  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[80px]" />
      </div>
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className=" text-white text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-[1.2] tracking-tight">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
          <p className="text-[16px] md:text-[18px] text-white/70 font-medium">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="relative flex justify-between items-start">
          {/* Faint Background Line */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/10 hidden lg:block" />
          
          {/* Animated Gold Fill Line */}
          <motion.div 
            className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C99A2E] via-[#FBBF24] to-[#C99A2E] hidden lg:block origin-left z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {sectionData.flow.map((item, index) => {
            const Icon = flowIcons[index];
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const delay = index * 0.4; // Synced with the 2s line animation (5 items -> 4 intervals of 0.5s roughly)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: delay }}
                className="relative flex flex-col items-center flex-1 px-4 group"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: delay + 0.1, type: "spring", stiffness: 200 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border-2 border-white/20 flex items-center justify-center text-white mb-6 relative z-10 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(201,154,46,0.15)] group-hover:shadow-[0_0_30px_rgba(201,154,46,0.4)] group-hover:border-[#C99A2E]`}
                >
                  <Icon size={24} strokeWidth={2.5} />
                  
                  {/* Number Badge */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: delay + 0.4, type: "spring" }}
                    className={`absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#0B1D3A] border-2 border-[#C99A2E] flex items-center justify-center text-[11px] font-black text-white shadow-md z-20`}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                
                <div className="text-[11px] font-bold tracking-widest text-[#E2C068] uppercase mb-3">
                  {item.step}
                </div>
                <h3 className=" text-[17px] font-bold text-white mb-3 leading-snug group-hover:text-[#E2C068] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed max-w-[220px] font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
