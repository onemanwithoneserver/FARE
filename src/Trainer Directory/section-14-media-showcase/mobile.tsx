import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-12 px-6 border-b border-[#e2e8f0] font-['Outfit'] flex flex-col items-center">
      <div className="w-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
          <p className="text-base text-[#475569]">{data.content}</p>
        </div>
      </div>
    </section>
  );
}
