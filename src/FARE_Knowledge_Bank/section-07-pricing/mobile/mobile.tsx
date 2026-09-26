import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#0B2545] text-white py-16 px-6 text-center font-['Outfit']">
      <h2 className="text-4xl font-black mb-4 tracking-tight">{data.title}</h2>
      <p className="text-base text-white/80 font-medium mb-12 leading-relaxed">{data.subtitle}</p>
      <div className="flex flex-col gap-6 mb-12 text-left">
        {data.plans.map((p, i) => (
          <div key={i} className={`p-6 rounded-[8px] flex flex-col ${p.bestValue ? 'bg-white text-[#0B2545] border-2 border-[#D4A017] shadow-lg relative' : 'bg-white/10 border border-white/20 text-white'}`}>
            {p.bestValue && <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4A017] text-[#0F172A] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{p.highlight}</span>}
            <h3 className={`text-xs font-bold tracking-widest uppercase mb-3 ${p.bestValue ? 'text-[#64748B]' : 'text-[#D4A017]'}`}>{p.title}</h3>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-4xl font-black">{p.price}</span>
            </div>
            <span className={`text-sm font-semibold mb-5 ${p.bestValue ? 'text-[#8B5CF6]' : 'text-white/60'}`}>{p.daily}</span>
            <p className={`text-sm font-medium mb-6 ${p.bestValue ? 'text-[#0B2545]' : 'text-white/80'}`}>{p.text}</p>
            <button className={`w-full py-3.5 rounded-[4px] font-bold transition-colors mt-auto ${p.bestValue ? 'bg-[#0B2545] text-white' : 'bg-white/20 text-white'}`}>{p.cta}</button>
            {p.bestValue && <p className="text-[11px] text-[#64748B] font-medium text-center mt-3">{p.highlightDesc}</p>}
          </div>
        ))}
      </div>
      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-10 leading-relaxed">{data.footer}</div>
      <button className="bg-[#D4A017] text-[#0F172A] px-8 py-4 rounded-[4px] font-black shadow-lg text-lg w-full mb-12">{data.cta}</button>
      <p className="text-xl font-bold text-[#D4A017] italic">"{data.quote}"</p>
    </section>
  );
}