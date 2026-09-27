import { motion } from "motion/react";
import { UserPlus, MessageCircle } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-5 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[60px] pointer-events-none" />
      
      <div className="max-w-[480px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight leading-tight mb-5">
            {data.title}
          </h2>
          <p className="text-[15.5px] text-[#475569] font-medium leading-relaxed whitespace-pre-wrap mb-10">
            {data.subtitle}
          </p>
          
          <div className="flex flex-col gap-4">
            <button className="w-full h-14 bg-[#0B1D3A] text-white rounded-[4px] font-bold text-[15px] active:bg-[#152B4D] transition-colors flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(11,29,58,0.15)]">
              {data.buttons.primary}
              <UserPlus size={18} strokeWidth={2.5} />
            </button>
            <button className="w-full h-14 bg-white text-[#0B1D3A] border border-[#E2E8F0] rounded-[4px] font-bold text-[15px] active:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              {data.buttons.secondary}
              <MessageCircle size={18} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}