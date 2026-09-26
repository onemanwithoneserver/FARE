import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 font-['Outfit']">
      <h2 className="text-3xl font-black text-[#0B2545] text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4">
        {data.challenges.map((c, i) => (
          <div key={i} className="bg-white p-5 rounded-[8px] shadow-sm border border-[#E2E8F0]">
            <h3 className="text-sm font-bold text-[#D4A017] mb-2">{c.title}</h3>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}