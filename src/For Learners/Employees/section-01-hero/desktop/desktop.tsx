import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-24 px-10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <span className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
        <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">{data.headline}</h1>
        <p className="text-2xl font-semibold mb-6 text-white/90">{data.subheadline}</p>
        <p className="text-lg text-white/70 max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed mb-10">{data.description}</p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#C99A2E] text-white px-8 py-4 rounded font-bold hover:bg-[#B38725] transition-colors shadow-lg">{data.buttons.primary}</button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">{data.buttons.secondary}</button>
        </div>
      </div>
    </section>
  );
}