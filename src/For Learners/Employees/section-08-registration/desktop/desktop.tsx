import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-5xl font-black text-[#0B1D3A] mb-6 tracking-tight">{data.title}</h2>
        <p className="text-2xl font-bold text-[#C99A2E] mb-6">{data.subtitle}</p>
        <p className="text-lg text-[#475569] font-medium mb-12">{data.description}</p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-[#0B1D3A] text-white px-8 py-4 rounded font-bold hover:bg-[#102B63] transition-colors shadow-md">{data.buttons.primary}</button>
          <button className="bg-transparent border border-[#0B1D3A]/20 text-[#0B1D3A] px-8 py-4 rounded font-bold hover:bg-[#0B1D3A]/5 transition-colors">{data.buttons.secondary}</button>
        </div>
        <div className="text-sm font-bold text-[#0B1D3A]/40 uppercase tracking-widest">{data.footer}</div>
      </div>
    </section>
  );
}