import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-24 px-10 text-center font-['Outfit']">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-5xl font-black mb-6 tracking-tight">{data.title}</h2>
        <p className="text-2xl font-bold text-[#D4A017] mb-6">{data.subtitle}</p>
        <p className="text-lg text-white/80 font-medium mb-12">{data.description}</p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-[#10B981] text-white px-8 py-4 rounded-[4px] font-bold hover:bg-[#059669] transition-colors shadow-md">{data.buttons.primary}</button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-[4px] font-bold hover:bg-white/10 transition-colors">{data.buttons.secondary}</button>
        </div>
        <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{data.footer}</div>
      </div>
    </section>
  );
}