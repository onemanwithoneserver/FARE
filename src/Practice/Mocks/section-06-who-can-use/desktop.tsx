import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Users, Building, Laptop, BarChart2, Briefcase, Network, UserCheck } from "lucide-react";



const icons = [UserCheck, BarChart2, Network, Laptop, Users, Briefcase, Building];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Desktop() {
  const sectionData = data.whoCanUse;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-white via-[#FEFAF3] to-[#FFF8EC] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
         <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[80px]" />
      </div>
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="whitespace-nowrap text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-4 leading-tight tracking-tight">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center items-stretch gap-6"
        >
          {sectionData.roles.map((role, index) => {
            const Icon = icons[index % icons.length];
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
              <motion.div
                key={index}
                variants={item}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-6 rounded-[8px] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:border-[#C99A2E]/30 transition-all duration-300 group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/5 to-transparent blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`w-12 h-12 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 shrink-0`}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="whitespace-nowrap text-[17px] font-bold text-[#0B1D3A] mb-3 leading-snug group-hover:text-[#C99A2E] transition-colors duration-300">
                  {role.title}
                </h3>
                <p className="text-[14.5px] text-[#64748B] leading-relaxed font-medium">
                  {role.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
