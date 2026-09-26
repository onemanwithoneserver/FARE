import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Briefcase, Users, UserPlus, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

const ICONS = [Briefcase, Users, UserPlus];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", 
  "from-[#A78BFA] to-[#7C3AED]", 
  "from-[#F472B6] to-[#DB2777]"
];

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[17px] text-[#64748B] font-medium max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {data.items.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-8 rounded-2xl border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:shadow-[0_16px_40px_rgba(11,29,58,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-4 tracking-wide">
                  {itemData.title}
                </h3>
                
                <p className="text-[15px] text-[#475569] font-medium leading-relaxed mb-8 flex-grow">
                  {itemData.text}
                </p>
                
                <button 
                  className="mt-auto self-start text-[14px] font-bold tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{ color: NAVY }}
                >
                  {itemData.cta}
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}