import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Home, Map, Building2, Landmark } from "lucide-react";

const icons = [Home, Map, Building2, Landmark];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.segments;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-16 relative overflow-hidden text-white font-['Outfit'] fare-noise-overlay">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[60px]" />
      </div>
      
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center w-full"
        >
          <h2 className="text-[#0B1D3A] text-[26px] sm:text-[28px] font-black mb-4 leading-tight tracking-tight max-w-[90%] mx-auto">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <p className="text-[15px] text-white/70 font-medium leading-relaxed">
            {sectionData.note}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4"
        >
          {sectionData.items.map((segment, index) => {
            const Icon = icons[index % icons.length];
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white/5 border border-white/10 p-5 rounded-[4px] backdrop-blur-md shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 mb-4 border-b border-white/10 pb-4">
                  <div className={`w-10 h-10 rounded-[4px] bg-gradient-to-br ${gradient} shadow-md flex items-center justify-center text-white shrink-0`}>
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[16px] font-bold text-white leading-snug">
                    {segment.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mt-2 pl-1">
                  {segment.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2C068] mt-[6px] shrink-0 opacity-70" />
                      <span className="text-[14px] text-white/70 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
