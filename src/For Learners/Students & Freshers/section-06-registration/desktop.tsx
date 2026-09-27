import { motion } from "motion/react";
import { UserPlus, ArrowRight, Sparkles } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const GOLD = "#C99A2E";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-32 px-10 font-['Outfit'] relative overflow-hidden flex items-center justify-center">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#0B1D3A]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(11,29,58,0.3)] group"
        >

          <div className="absolute inset-0 bg-[#0B1D3A]" />
          

          <motion.div 
            animate={{ 
              x: ["-20%", "20%", "-20%"], 
              y: ["-20%", "20%", "-20%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/30 to-transparent rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              x: ["20%", "-20%", "20%"], 
              y: ["20%", "-20%", "20%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[150px] -left-[150px] w-[400px] h-[400px] bg-gradient-radial from-[#38BDF8]/20 to-transparent rounded-full blur-[100px]"
          />
          

          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-16 md:p-20 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            >
              <Sparkles size={14} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="font-bold text-[12px] tracking-[0.2em] uppercase text-white/90">
                Join the Future
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-[3.5rem] font-black text-white tracking-tight leading-[1.1] mb-6 max-w-3xl"
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[18px] md:text-[20px] text-white/70 font-medium leading-relaxed whitespace-pre-wrap mb-12 max-w-2xl"
            >
              {data.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
            >
              <button 
                className="w-full sm:w-auto h-[60px] px-10 rounded-[8px] font-bold text-[16px] text-[#0B1D3A] flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgba(201,154,46,0.3)]"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #E5C370)` }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {data.buttons.primary}
                  <UserPlus size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="w-full sm:w-auto h-[60px] px-10 bg-white/5 border border-white/20 text-white rounded-[8px] font-bold text-[16px] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]">
                {data.buttons.secondary}
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          

          <div className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}