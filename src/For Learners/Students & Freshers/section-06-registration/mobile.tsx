import { motion } from "motion/react";
import { UserPlus, ArrowRight, Sparkles } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const GOLD = "#C99A2E";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-20 px-5 font-['Outfit'] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[480px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,29,58,0.3)] group"
        >

          <div className="absolute inset-0 bg-[#0B1D3A]" />
          

          <motion.div 
            animate={{ 
              x: ["-10%", "10%", "-10%"], 
              y: ["-10%", "10%", "-10%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[100px] -right-[100px] w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/35 to-transparent rounded-full blur-[60px]"
          />
          <motion.div 
            animate={{ 
              x: ["10%", "-10%", "10%"], 
              y: ["10%", "-10%", "10%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[80px] -left-[80px] w-[200px] h-[200px] bg-gradient-radial from-[#38BDF8]/25 to-transparent rounded-full blur-[60px]"
          />
          

          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 p-8 py-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm"
            >
              <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="font-bold text-[10px] tracking-[0.15em] uppercase text-white/90">
                Join the Future
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-black text-white tracking-tight leading-[1.15] mb-4"
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[15px] text-white/70 font-medium leading-relaxed whitespace-pre-wrap mb-10"
            >
              {data.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-4 w-full"
            >
              <button 
                className="w-full h-14 rounded-[6px] font-bold text-[15px] text-[#0B1D3A] flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-[0_8px_20px_rgba(201,154,46,0.25)]"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #E5C370)` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {data.buttons.primary}
                  <UserPlus size={16} strokeWidth={2.5} />
                </span>
              </button>
              
              <button className="w-full h-14 bg-white/5 border border-white/20 text-white rounded-[6px] font-bold text-[15px] active:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm active:scale-[0.98]">
                {data.buttons.secondary}
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>
          
          <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}