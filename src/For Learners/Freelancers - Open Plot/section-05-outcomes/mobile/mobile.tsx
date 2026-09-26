import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <h2 className="text-3xl font-black text-[#0B2545] mb-10 text-center tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4 mb-12">
        {data.outcomes.map((o, i) => (
          <div key={i} className="p-5 border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC]">
            <h3 className="text-[#0B2545] text-base font-bold mb-2">{o.title}</h3>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">{o.text}</p>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-[#D4A017] italic text-center">"{data.quote}"</div>
    </section>
  );
}