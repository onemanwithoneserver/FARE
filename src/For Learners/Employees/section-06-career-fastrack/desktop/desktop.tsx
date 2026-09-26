import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
          <p className="text-lg text-[#475569] font-medium max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {data.items.map((item, i) => (
            <div key={i} className="p-8 border border-[#0B1D3A]/10 rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-4">{item.title}</h3>
              <p className="text-[#475569] font-medium mb-8 leading-relaxed">{item.text}</p>
              <button className="text-[#0B1D3A] font-bold border-b-2 border-[#C99A2E] self-start pb-1 hover:text-[#C99A2E] transition-colors mt-auto">{item.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}