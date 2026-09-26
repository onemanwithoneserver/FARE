import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit']">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1D3A] rounded-[32px] p-16 text-center relative overflow-hidden shadow-[0_20px_40px_rgba(11,29,58,0.15)]"
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[60px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-[#38BDF8]/10 to-transparent rounded-full blur-[60px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
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
              <button className="w-full sm:w-auto px-8 py-4 bg-[#C99A2E] text-[#0B1D3A] rounded-xl font-bold text-[15px] hover:bg-[#B8892A] hover:shadow-[0_8px_20px_rgba(201,154,46,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group">
                <FileText size={18} strokeWidth={2.5} />
                {data.buttons.primary}
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-[15px] hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group">
                {data.buttons.secondary}
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
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