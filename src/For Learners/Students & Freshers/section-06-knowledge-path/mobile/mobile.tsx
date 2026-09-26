import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B2545] mb-3 tracking-tight">{data.title}</h2>
      </div>
      <div className="flex flex-col gap-6 mb-8">
        {data.paths.map((p, i) => (
          <div key={i} className="bg-[#F8FAFC] p-6 border border-[#E2E8F0] rounded-[8px] flex flex-col shadow-sm">
            <h3 className="text-[#0B2545] text-xl font-black mb-3">{p.title}</h3>
            <p className="text-[#64748B] text-sm font-medium mb-6 leading-relaxed">{p.text}</p>
            <button className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider self-start">{p.cta}</button>
          </div>
        ))}
      </div>
      <div className="bg-[#0B2545] text-white p-6 rounded-[8px] text-center">
        <h4 className="text-[#D4A017] text-[10px] font-bold tracking-widest uppercase mb-2">{data.more.title}</h4>
        <p className="text-white/80 text-sm font-medium">{data.more.text}</p>
      </div>
    </section>
  );
}