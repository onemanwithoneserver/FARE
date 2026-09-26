import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Quote } from "lucide-react";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-16 px-6 border-b border-[#e2e8f0] font-['Outfit'] flex flex-col items-center">
      
      {/* Philosophy Card (Mobile optimized) */}
      <div className="w-full bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(11,29,58,0.06)] border border-[#e2e8f0] relative mb-12">
        <Quote size={40} className="text-[#C99A2E]/10 absolute top-4 right-4 rotate-180" />
        
        <h3 className="text-xs font-bold tracking-widest text-[#94a3b8] uppercase mb-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"></div>
          {data.philosophy.title}
        </h3>
        
        <p className="text-lg font-medium text-[#0B1D3A] leading-snug italic mb-6 relative z-10">
          "{data.philosophy.quote}"
        </p>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-0.5 bg-[#C99A2E]"></div>
          <span className="font-bold text-[#475569] text-sm tracking-wide">{data.philosophy.author}</span>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight">{data.about.title}</h2>
        </div>
        
        <div className="text-base text-[#334155] leading-relaxed whitespace-pre-wrap">
          {data.about.content}
        </div>
      </div>

    </section>
  );
}
