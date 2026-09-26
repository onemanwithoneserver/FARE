import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B2545] text-white py-24 px-10 relative overflow-hidden font-['Outfit']">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
        <h1 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">{data.headline}</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto whitespace-pre-wrap leading-relaxed mb-10">{data.description}</p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#D4A017] text-[#0F172A] px-8 py-4 rounded-[4px] font-bold hover:bg-[#B5850E] transition-colors shadow-lg">{data.buttons.primary}</button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-[4px] font-bold hover:bg-white/10 transition-colors">{data.buttons.secondary}</button>
        </div>
      </div>
    </section>
  );
}