import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Building2, MapPin, Briefcase } from "lucide-react";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'building': return <Building2 size={24} strokeWidth={2} />;
      case 'map': return <MapPin size={24} strokeWidth={2} />;
      case 'briefcase': return <Briefcase size={24} strokeWidth={2} />;
      default: return <Building2 size={24} strokeWidth={2} />;
    }
  };
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {data.segments.map((item, idx) => (
            <div key={idx} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] flex flex-col items-center text-center group hover:bg-[#0B1D3A] transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-white text-[#C99A2E] flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#C99A2E] group-hover:text-[#0B1D3A] transition-colors">
                {getIcon(item.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-4 group-hover:text-white transition-colors">{item.segment}</h3>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {item.subSegments.map((sub, sIdx) => (
                  <span key={sIdx} className="bg-white border border-[#cbd5e1] text-[#475569] text-sm font-medium px-3 py-1 rounded-full group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/90 transition-colors">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
