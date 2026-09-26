import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <h2 className="text-3xl font-black text-[#0B2545] text-center mb-3 tracking-tight">{data.title}</h2>
      <p className="text-base text-[#64748B] font-medium text-center mb-10">{data.subtitle}</p>
      <div className="flex flex-col gap-6 mb-10">
        {data.items.map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] p-6 rounded-[8px] border border-[#E2E8F0] flex flex-col items-center text-center">
            <h3 className="text-[#0B2545] text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-[#64748B] font-medium mb-6">{item.text}</p>
            <button className="bg-[#0B2545] text-white px-6 py-3 rounded-[4px] font-bold w-full">{item.cta}</button>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-[#D4A017] italic text-center">"{data.quote}"</div>
    </section>
  );
}