import { motion } from "motion/react";
import { MessageCircle, GraduationCap, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#0B1D3A] py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-[1.75rem] font-black text-white tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[15px] text-white/70 font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 mb-10">
          {data.items.map((itemData, i) => {
            const isFirst = i === 0;
            const Icon = isFirst ? MessageCircle : GraduationCap;
            const gradient = isFirst 
              ? "from-[#10B981] to-[#047857]" 
              : "from-[#FBBF24] to-[#D97706]";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md mb-5`}>
                  <Icon size={26} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wider uppercase">
                  {itemData.title}
                </h3>
                <p className="text-[14px] text-white/70 font-medium leading-relaxed mb-6">
                  {itemData.text}
                </p>
                
                <button 
                  className={`w-full py-3.5 rounded-lg font-bold text-[13px] transition-all duration-300 flex items-center justify-center gap-2 ${
                    isFirst
                      ? "bg-[#10B981] text-white"
                      : "bg-[#C99A2E] text-[#0B1D3A]"
                  }`}
                >
                  {itemData.cta}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-bold italic text-[#C99A2E]">
            "{data.closing}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}