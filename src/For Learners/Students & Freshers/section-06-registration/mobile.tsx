import { motion } from "motion/react";
import { ChevronRight, FileText } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { PrimaryButton, Section, VIEWPORT } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="Registration">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="bg-[#0B1D3A] rounded-[20px] p-8 text-center relative overflow-hidden border border-[#C99A2E]/20"
        >
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[40px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-radial from-[#38BDF8]/10 to-transparent rounded-full blur-[40px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-white text-[28px] font-black tracking-tight leading-tight mb-4">
              {data.title}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
            <p className="text-[14.5px] text-white/80 font-medium mb-8 leading-relaxed whitespace-pre-wrap">
              {data.subtitle}
            </p>
            
            <div className="flex flex-col gap-4">
              <PrimaryButton full mobile className="group">
                <FileText size={16} strokeWidth={2.5} className="mr-2 inline-block" />
                {data.buttons.primary}
              </PrimaryButton>
              <button className="w-full px-6 py-3.5 bg-white/10 text-white rounded-[10px] font-bold text-[14.5px] border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group backdrop-blur-sm">
                {data.buttons.secondary}
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "16px" }}>
                  <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}