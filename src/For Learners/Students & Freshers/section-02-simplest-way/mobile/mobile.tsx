import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 font-['Outfit']">
      <div className="text-center mb-10">
        <span className="text-[#D4A017] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B2545] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-base text-[#64748B] font-medium whitespace-pre-wrap">{data.intro}</p>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        {data.features.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-[8px] shadow-sm border border-[#E2E8F0]">
            <h3 className="text-[#0B2545] text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-[#D4A017] italic">"{data.quote}"</p>
      </div>
    </section>
  );
}