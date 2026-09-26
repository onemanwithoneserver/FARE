import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.title}</span>
        <h2 className="text-3xl font-black text-[#0B2545] tracking-tight">{data.subtitle}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-6 border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC]">
            <span className="text-3xl font-black text-[#0B2545] mb-2">{s.value}</span>
            <span className="text-[10px] text-center font-bold text-[#64748B] uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}