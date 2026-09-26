import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Building2, MapPin, Briefcase } from "lucide-react";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'building': return <Building2 size={20} strokeWidth={2} />;
      case 'map': return <MapPin size={20} strokeWidth={2} />;
      case 'briefcase': return <Briefcase size={20} strokeWidth={2} />;
      default: return <Building2 size={20} strokeWidth={2} />;
    }
  };
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-12 px-5 border-b border-[#e2e8f0] font-['Outfit']">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-1 bg-[#C99A2E] rounded-full"></div>
        <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {data.segments.map((item, idx) => (
          <div key={idx} className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0] flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white text-[#C99A2E] flex items-center justify-center mb-4 shadow-sm border border-[#e2e8f0]">
              {getIcon(item.icon)}
            </div>
            
            <h3 className="text-lg font-bold text-[#0B1D3A] mb-3">{item.segment}</h3>
            
            <div className="flex flex-wrap justify-center gap-1.5">
              {item.subSegments.map((sub, sIdx) => (
                <span key={sIdx} className="bg-white border border-[#cbd5e1] text-[#475569] text-xs font-medium px-2.5 py-1 rounded-full">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
