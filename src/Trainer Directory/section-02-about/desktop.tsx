import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Quote } from "lucide-react";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-24 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-12 gap-16">
        
        {/* About Column */}
        <div className="col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-1 bg-[#C99A2E] rounded-full"></div>
            <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight">{data.about.title}</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#334155] leading-relaxed whitespace-pre-wrap">
            {data.about.content}
          </div>
        </div>

        {/* Philosophy Column */}
        <div className="col-span-5 flex flex-col justify-center">
          <div className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgba(11,29,58,0.06)] border border-[#e2e8f0] relative">
            <Quote size={60} className="text-[#C99A2E]/10 absolute top-6 right-8 rotate-180" />
            
            <h3 className="text-sm font-bold tracking-widest text-[#94a3b8] uppercase mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"></div>
              {data.philosophy.title}
            </h3>
            
            <p className="text-2xl font-medium text-[#0B1D3A] leading-snug italic mb-8 relative z-10">
              "{data.philosophy.quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-[#C99A2E]"></div>
              <span className="font-bold text-[#475569] tracking-wide">{data.philosophy.author}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
