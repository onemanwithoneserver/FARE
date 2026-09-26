import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black mb-4 tracking-tight">{data.title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {data.categories.map((c, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-[8px] bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#D4A017] text-xl font-black">{c.num}</span>
                <h3 className="text-lg font-bold">{c.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.items.map((s, j) => (
                  <span key={j} className="px-2.5 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-[4px]">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}