import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-24 px-10 relative overflow-hidden font-['Outfit']">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
        <h1 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">{data.headline}</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto whitespace-pre-wrap leading-relaxed mb-10">{data.description}</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="bg-[#D4A017] text-[#0F172A] px-10 py-4 rounded-[4px] font-bold hover:bg-[#B5850E] transition-colors shadow-lg text-lg">{data.buttons.primary}</button>
          <span className="text-sm font-bold text-white/40 uppercase tracking-widest mt-4">{data.supporting}</span>
        </div>
      </div>
    </section>
  );
}