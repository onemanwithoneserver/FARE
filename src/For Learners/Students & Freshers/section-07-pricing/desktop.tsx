import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-24 px-10 text-center font-['Outfit']">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-5xl font-black mb-6 tracking-tight">{data.title}</h2>
        <p className="text-lg text-white/80 font-medium mb-16 max-w-2xl mx-auto">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 mb-16 max-w-[800px] mx-auto text-left">
          {data.plans.map((p, i) => (
            <div key={i} className={`p-8 rounded-[8px] flex flex-col ${p.bestValue ? 'bg-white text-[#0B2545] border-2 border-[#D4A017] shadow-xl relative transform -translate-y-2' : 'bg-white/10 border border-white/20 text-white'}`}>
              {p.bestValue && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4A017] text-[#0F172A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{p.highlight}</span>}
              <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${p.bestValue ? 'text-[#64748B]' : 'text-[#D4A017]'}`}>{p.title}</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black">{p.price}</span>
              </div>
              <span className={`text-sm font-semibold mb-6 ${p.bestValue ? 'text-[#8B5CF6]' : 'text-white/60'}`}>{p.daily}</span>
              <p className={`font-medium mb-8 ${p.bestValue ? 'text-[#0B2545]' : 'text-white/80'}`}>{p.text}</p>
              <button className={`w-full py-4 rounded-[4px] font-bold transition-colors mt-auto ${p.bestValue ? 'bg-[#0B2545] text-white hover:bg-[#153B6E]' : 'bg-white/20 text-white hover:bg-white/30'}`}>{p.cta}</button>
              {p.bestValue && <p className="text-xs text-[#64748B] font-medium text-center mt-4">{p.highlightDesc}</p>}
            </div>
          ))}
        </div>
        <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-12">{data.footer}</div>
        <button className="bg-[#D4A017] text-[#0F172A] px-10 py-5 rounded-[4px] font-black hover:bg-[#B5850E] transition-colors shadow-lg text-xl mb-16">{data.cta}</button>
        <p className="text-2xl font-bold text-[#D4A017] italic">"{data.quote}"</p>
      </div>
    </section>
  );
}