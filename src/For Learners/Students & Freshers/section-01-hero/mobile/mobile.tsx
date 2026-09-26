import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-16 px-6 relative overflow-hidden text-center font-['Outfit']">
      <span className="text-[#D4A017] text-xs font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
      <h1 className="text-4xl font-black mb-5 tracking-tight leading-tight">{data.headline}</h1>
      <p className="text-base text-white/80 whitespace-pre-wrap leading-relaxed mb-8">{data.description}</p>
      <div className="flex flex-col items-center gap-3">
        <button className="bg-[#D4A017] text-[#0F172A] px-8 py-3.5 rounded-[4px] font-bold shadow-lg w-full text-base">{data.buttons.primary}</button>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-3 leading-relaxed">{data.supporting}</span>
      </div>
    </section>
  );
}