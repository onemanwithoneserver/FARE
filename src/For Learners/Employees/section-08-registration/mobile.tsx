import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 text-center">
      <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
      <p className="text-xl font-bold text-[#C99A2E] mb-4 leading-snug">{data.subtitle}</p>
      <p className="text-base text-[#475569] font-medium mb-10">{data.description}</p>
      <div className="flex flex-col gap-3 mb-12">
        <button className="bg-[#0B1D3A] text-white px-6 py-3.5 rounded font-bold shadow-md w-full">{data.buttons.primary}</button>
        <button className="bg-transparent border border-[#0B1D3A]/20 text-[#0B1D3A] px-6 py-3.5 rounded font-bold w-full">{data.buttons.secondary}</button>
      </div>
      <div className="text-[10px] font-bold text-[#0B1D3A]/40 uppercase tracking-widest leading-relaxed">{data.footer}</div>
    </section>
  );
}