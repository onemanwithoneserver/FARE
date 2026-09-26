import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="text-center mb-10">
        <span className="text-[#C99A2E] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B1D3A] mb-3 tracking-tight">{data.title}</h2>
        <p className="text-base text-[#475569] font-medium">{data.subtitle}</p>
      </div>
      <div className="flex flex-col gap-4">
        {data.items.map((item, i) => (
          <div key={i} className="p-6 border border-[#0B1D3A]/10 rounded-xl flex flex-col">
            <h3 className="text-[#C99A2E] text-[10px] font-bold tracking-widest uppercase mb-3">{item.title}</h3>
            <p className="text-sm text-[#475569] font-medium mb-6 leading-relaxed">{item.text}</p>
            <button className="text-[#0B1D3A] text-sm font-bold border-b-2 border-[#C99A2E] self-start pb-0.5">{item.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}