import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6">
          {data.experiences.map((exp, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 transition-colors">
              <span className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3 block">{exp.label}</span>
              <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
              <p className="text-white/70 font-medium leading-relaxed">{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}