import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0]">
          <p className="text-lg text-[#475569]">{data.content}</p>
        </div>
      </div>
    </section>
  );
}
