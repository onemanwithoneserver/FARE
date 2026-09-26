import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-20 px-10 font-['Outfit']">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B2545] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-lg text-[#64748B] font-medium mb-16">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 mb-16">
          {data.items.map((item, i) => (
            <div key={i} className="bg-[#F8FAFC] p-10 rounded-[8px] border border-[#E2E8F0] flex flex-col items-center">
              <h3 className="text-[#0B2545] text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#64748B] font-medium mb-8 text-center">{item.text}</p>
              <button className="bg-[#0B2545] text-white px-8 py-3.5 rounded-[4px] font-bold hover:bg-[#153B6E] transition-colors mt-auto w-full">{item.cta}</button>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold text-[#D4A017] italic">"{data.quote}"</div>
      </div>
    </section>
  );
}