import { motion } from "motion/react";
import { ChevronRight, ArrowRight, FileText } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { PrimaryButton, Section, VIEWPORT } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="Registration">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="bg-[#0B1D3A] rounded-[24px] p-16 text-center relative overflow-hidden luxury-shadow-float border border-[#C99A2E]/20"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#38BDF8]/10 to-transparent rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-white text-[40px] lg:text-[48px] font-black tracking-tight leading-tight mb-5">
              {data.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
            <p className="text-[20px] font-bold text-[#C99A2E] mb-6 tracking-wide">
              {data.subtitle}
            </p>
            <p className="text-[17px] text-white/80 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              {data.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
              <PrimaryButton className="px-8 py-4 text-[15px] group">
                <FileText size={18} strokeWidth={2.5} className="mr-2 inline-block" />
                {data.buttons.primary}
              </PrimaryButton>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-[12px] font-bold text-[15px] hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group cursor-pointer backdrop-blur-sm">
                {data.buttons.secondary}
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "18px" }}>
                  <ChevronRight size={18} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={18} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </div>
            
            <p className="text-[13px] font-bold text-white/50 uppercase tracking-[0.15em]">
              {data.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}