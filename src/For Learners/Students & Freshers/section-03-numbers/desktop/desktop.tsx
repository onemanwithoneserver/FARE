import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.title}</span>
        <h2 className="text-4xl font-black text-[#0B2545] mb-16 tracking-tight">{data.subtitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {data.stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 border border-[#E2E8F0] rounded-[8px] hover:bg-[#F8FAFC] transition-colors">
              <span className="text-5xl font-black text-[#0B2545] mb-4">{s.value}</span>
              <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}