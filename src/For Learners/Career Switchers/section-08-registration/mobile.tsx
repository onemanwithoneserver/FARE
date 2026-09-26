import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-16 px-6 text-center font-['Outfit']">
      <h2 className="text-4xl font-black mb-4 tracking-tight">{data.title}</h2>
      <p className="text-xl font-bold text-[#D4A017] mb-4 leading-snug">{data.subtitle}</p>
      <p className="text-base text-white/80 font-medium mb-10">{data.description}</p>
      <div className="flex flex-col gap-3 mb-12">
        <button className="bg-[#10B981] text-white px-6 py-3.5 rounded-[4px] font-bold shadow-md w-full">{data.buttons.primary}</button>
        <button className="bg-transparent border border-white/20 text-white px-6 py-3.5 rounded-[4px] font-bold w-full">{data.buttons.secondary}</button>
      </div>
      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">{data.footer}</div>
    </section>
  );
}