import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {data.outcomes.map((o, i) => (
            <div key={i}>
              <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3">{o.title}</h3>
              <p className="text-white/80 font-medium leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold text-center text-white">{data.closing}</div>
      </div>
    </section>
  );
}