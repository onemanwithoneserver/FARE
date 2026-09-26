import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black tracking-tight">{data.title}</h2>
      </div>
      <div className="flex flex-col gap-5">
        {data.categories.map((c, i) => (
          <div key={i} className="p-5 border border-white/10 rounded-[8px] bg-white/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#D4A017] text-lg font-black">{c.num}</span>
              <h3 className="text-base font-bold">{c.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {c.items.map((s, j) => (
                <span key={j} className="px-2 py-1 bg-white/10 text-white/90 text-[10px] font-semibold rounded-[4px]">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}