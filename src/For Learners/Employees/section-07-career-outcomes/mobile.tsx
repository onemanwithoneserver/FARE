import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-16 px-6">
      <h2 className="text-3xl font-black mb-10 text-center tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-8 mb-12">
        {data.outcomes.map((o, i) => (
          <div key={i}>
            <h3 className="text-[#C99A2E] text-[10px] font-bold tracking-widest uppercase mb-2">{o.title}</h3>
            <p className="text-sm text-white/80 font-medium leading-relaxed">{o.text}</p>
          </div>
        ))}
      </div>
      <div className="text-lg font-bold text-center text-white">{data.closing}</div>
    </section>
  );
}