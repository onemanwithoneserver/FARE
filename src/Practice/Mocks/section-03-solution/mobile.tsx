import { motion } from "motion/react";
import { data } from "../data";
import { MousePointerClick, Calendar, User, MessageCircle, PlayCircle } from "lucide-react";

const flowIcons = [MousePointerClick, Calendar, User, MessageCircle, PlayCircle];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.solution;
  
  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-16 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[#0B1D3A] text-[28px] font-black mb-4 leading-tight tracking-tight">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <p className="text-[15px] text-white/70 font-medium">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="relative flex flex-col gap-8 ml-2">
          {/* Faint Background Line */}
          <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-white/10" />
          
          {/* Animated Gold Fill Line */}
          <motion.div 
            className="absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-gradient-to-b from-[#C99A2E] via-[#FBBF24] to-[#C99A2E] origin-top z-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {sectionData.flow.map((item, index) => {
            const Icon = flowIcons[index];
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const delay = index * 0.3; // Synced with the 1.5s line animation
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: delay }}
                className="flex gap-5 relative z-10 group"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: delay + 0.1, type: "spring" }}
                  className={`w-12 h-12 shrink-0 rounded-full bg-gradient-to-br ${gradient} border-2 border-white/20 flex items-center justify-center text-white mt-1 shadow-md z-10`}
                >
                  <Icon size={20} strokeWidth={2.5} />
                  
                  {/* Number Badge */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: delay + 0.3, type: "spring" }}
                    className={`absolute -left-2 -top-1 w-6 h-6 rounded-full bg-[#0B1D3A] border-2 border-[#C99A2E] flex items-center justify-center text-[10px] font-black text-white shadow-sm z-20`}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                
                <div className="pt-1">
                  <div className="text-[10px] font-bold tracking-widest text-[#E2C068] uppercase mb-1.5">
                    {item.step}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
