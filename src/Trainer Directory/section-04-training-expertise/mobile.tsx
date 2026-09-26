import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-12 px-5 border-b border-[#e2e8f0] font-['Outfit']">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-1 bg-[#C99A2E] rounded-full"></div>
        <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {data.domains.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F0F4FA] text-[#0B1D3A] flex items-center justify-center">
                <TrendingUp size={20} strokeWidth={2} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#059669] bg-[#D1FAE5] px-2 py-0.5 rounded">
                {item.level}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-[#0B1D3A] mb-3">{item.domain}</h3>
            
            <ul className="flex flex-col gap-2.5">
              {item.subDomains.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2 text-[14px] text-[#475569] font-medium">
                  <CheckCircle2 size={16} className="text-[#C99A2E] shrink-0 mt-0.5" />
                  <span className="leading-snug">{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
