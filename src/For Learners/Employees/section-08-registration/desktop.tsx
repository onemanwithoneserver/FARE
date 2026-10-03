import { motion } from "motion/react";
import { ChevronRight, ArrowRight, FileText } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 px-10 font-['Outfit'] fare-noise-overlay">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1D3A] rounded-[4px]-[20px] p-16 text-center relative overflow-hidden luxury-shadow-float"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-[4px]-full blur-[60px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-[#38BDF8]/10 to-transparent rounded-[4px]-full blur-[60px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight mb-4">
              {data.title}
            </h2>
            <p className="text-[19px] font-bold text-[#C99A2E] mb-6 tracking-wide">
              {data.subtitle}
            </p>
            <p className="text-[16px] text-white/80 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              {data.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#C99A2E] text-[#0B1D3A] rounded-[4px]-[8px]-[8px] font-bold text-[15px] hover:bg-[#B8892A] hover:luxury-shadow-float transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group">
                <FileText size={18} strokeWidth={2.5} />
                {data.buttons.primary}
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-[4px]-[8px]-[8px] font-bold text-[15px] hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group">
                {data.buttons.secondary}
                <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${"group-hover:translate-x-1"}`} style={{ fontSize: `${18}px` }}>
      <ChevronRight size={18} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={18} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
              </button>
            </div>
            
            <p className="text-[13px] font-semibold text-white/50 uppercase tracking-[0.1em]">
              {data.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}