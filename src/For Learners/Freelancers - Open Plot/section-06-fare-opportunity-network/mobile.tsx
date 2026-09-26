import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B2545] mb-3 tracking-tight">{data.title}</h2>
        <p className="text-base text-[#64748B] font-medium">{data.subtitle}</p>
      </div>
      <div className="flex flex-col gap-6">
        {data.opportunities.map((opp, i) => (
          <div key={i} className="bg-white p-6 border border-[#E2E8F0] rounded-[8px] flex flex-col shadow-sm">
            <div className="text-[#D4A017] text-2xl font-black mb-1 opacity-50">{opp.num}</div>
            <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-wider mb-2">{opp.category}</h4>
            <h3 className="text-[#0B2545] text-lg font-bold mb-3">{opp.title}</h3>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">{opp.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}