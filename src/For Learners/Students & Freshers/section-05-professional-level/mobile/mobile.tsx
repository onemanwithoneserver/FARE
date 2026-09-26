import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B2545] tracking-tight">{data.title}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {data.levels.map((lvl, i) => (
          <div key={i} className="bg-white p-5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
            <h3 className="text-[#0B2545] text-base font-bold mb-2">{lvl.title}</h3>
            <p className="text-[#64748B] text-sm font-medium">{lvl.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}