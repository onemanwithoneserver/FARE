import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {data.domains.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F0F4FA] text-[#0B1D3A] flex items-center justify-center group-hover:bg-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors">
                  <TrendingUp size={24} strokeWidth={2} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#059669] bg-[#D1FAE5] px-2.5 py-1 rounded">
                  {item.level}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-4">{item.domain}</h3>
              
              <ul className="flex flex-col gap-3">
                {item.subDomains.map((sub, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-[15px] text-[#475569] font-medium">
                    <CheckCircle2 size={18} className="text-[#C99A2E] shrink-0 mt-0.5" />
                    <span className="leading-snug">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
