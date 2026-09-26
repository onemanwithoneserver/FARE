import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black text-[#0B2545] mb-4 tracking-tight">{data.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-10">
          {data.paths.map((p, i) => (
            <div key={i} className="bg-[#F8FAFC] p-10 border border-[#E2E8F0] rounded-[8px] flex flex-col hover:shadow-md transition-shadow group">
              <h3 className="text-[#0B2545] text-2xl font-black mb-4">{p.title}</h3>
              <p className="text-[#64748B] font-medium mb-8 leading-relaxed">{p.text}</p>
              <button className="text-[#8B5CF6] font-bold uppercase tracking-wider text-sm self-start group-hover:text-[#6D28D9] transition-colors mt-auto">{p.cta}</button>
            </div>
          ))}
        </div>
        <div className="bg-[#0B2545] text-white p-8 rounded-[8px] text-center">
          <h4 className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-3">{data.more.title}</h4>
          <p className="text-white/80 font-medium tracking-wide">{data.more.text}</p>
        </div>
      </div>
    </section>
  );
}