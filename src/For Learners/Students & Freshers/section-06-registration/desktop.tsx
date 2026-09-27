import { motion } from "motion/react";
import { UserPlus, MessageCircle } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-8">
            {data.title}
          </h2>
          <p className="text-[18px] text-[#475569] font-medium leading-relaxed whitespace-pre-wrap mb-12">
            {data.subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <button className="h-14 px-8 bg-[#0B1D3A] text-white rounded-[4px] font-bold text-[15px] hover:bg-[#152B4D] transition-colors flex items-center justify-center gap-2 group shadow-[0_4px_16px_rgba(11,29,58,0.15)]">
              {data.buttons.primary}
              <UserPlus size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="h-14 px-8 bg-white text-[#0B1D3A] border border-[#E2E8F0] rounded-[4px] font-bold text-[15px] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group shadow-sm">
              {data.buttons.secondary}
              <MessageCircle size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}