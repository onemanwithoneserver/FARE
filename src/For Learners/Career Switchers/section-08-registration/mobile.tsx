import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 font-['Outfit']">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B1D3A] rounded-[24px] p-8 text-center relative overflow-hidden shadow-lg"
        >
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[40px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-[1.75rem] font-black text-white tracking-tight leading-tight mb-3">
              {data.title}
            </h2>
            <p className="text-[15px] font-bold text-[#C99A2E] mb-4 tracking-wide leading-snug">
              {data.subtitle}
            </p>
            <p className="text-[14px] text-white/80 font-medium mb-8 leading-relaxed">
              {data.description}
            </p>
            
            <div className="flex flex-col gap-3.5 mb-8">
              <button className="w-full py-3.5 bg-[#C99A2E] text-[#0B1D3A] rounded-xl font-bold text-[14px] shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                <FileText size={16} strokeWidth={2.5} />
                {data.buttons.primary}
              </button>
              <button className="w-full py-3.5 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                {data.buttons.secondary}
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </div>
            
            <p className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.1em] leading-relaxed">
              {data.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}