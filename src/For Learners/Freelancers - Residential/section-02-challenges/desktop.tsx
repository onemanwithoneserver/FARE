import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { AlertCircle, Users, TrendingDown, Search, ShieldCheck, Workflow, UserPlus } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const ICONS = [Users, AlertCircle, TrendingDown, Search, ShieldCheck, Workflow, UserPlus];
const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

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
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] text-center tracking-tight leading-tight max-w-4xl mx-auto">
            {data.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {data.challenges.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-7 rounded-2xl shadow-[0_4px_16px_rgba(11,29,58,0.03)] border border-[#E2E8F0]/80 hover:shadow-[0_12px_32px_rgba(11,29,58,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-3 leading-tight">{c.title}</h3>
                <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed flex-grow">{c.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-4"
        >
          {data.quotes.map((quote, i) => (
            <p key={i} className={`text-[19px] font-bold ${i === 0 ? "text-[#C99A2E]" : "text-[#0B1D3A]"} leading-relaxed max-w-3xl mx-auto`}>
              {i === 0 ? `"${quote}"` : quote}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}