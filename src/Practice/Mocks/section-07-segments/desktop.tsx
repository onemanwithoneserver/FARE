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

export default function Desktop() {
  const sectionData = data.segments;

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
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-24 relative overflow-hidden text-white font-['Outfit'] fare-noise-overlay">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[80px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[60px]" />
      </div>
      
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] font-black mb-4 leading-tight tracking-tight lg:whitespace-nowrap">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
          <p className="text-[17px] text-white/70 font-medium leading-relaxed">
            {sectionData.note}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sectionData.items.map((segment, index) => {
            const Icon = icons[index % icons.length];
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white/5 border border-white/10 p-7 rounded-[8px] backdrop-blur-md hover:bg-white/10 hover:border-[#C99A2E]/30 transition-all duration-300 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-5 border-b border-white/10 pb-4">
                  <div className={`w-12 h-12 rounded-[4px] bg-gradient-to-br ${gradient} shadow-md flex items-center justify-center text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6 shrink-0`}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-white leading-snug group-hover:text-[#E2C068] transition-colors duration-300">
                    {segment.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mt-2 flex-grow">
                  {segment.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2C068] mt-[6px] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[14px] text-white/70 font-medium leading-relaxed group-hover:text-white/90 transition-colors">
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
