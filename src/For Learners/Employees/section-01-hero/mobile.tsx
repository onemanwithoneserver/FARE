import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-16 px-6 relative overflow-hidden text-center">
      <span className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
      <h1 className="text-4xl font-black mb-4 tracking-tight leading-tight">{data.headline}</h1>
      <p className="text-xl font-semibold mb-5 text-white/90">{data.subheadline}</p>
      <p className="text-base text-white/70 whitespace-pre-wrap leading-relaxed mb-8">{data.description}</p>
      <div className="flex flex-col gap-3">
        <button className="bg-[#C99A2E] text-white px-6 py-3.5 rounded font-bold shadow-lg w-full">{data.buttons.primary}</button>
        <button className="bg-transparent border border-white/20 text-white px-6 py-3.5 rounded font-bold w-full">{data.buttons.secondary}</button>
      </div>
    </section>
  );
}