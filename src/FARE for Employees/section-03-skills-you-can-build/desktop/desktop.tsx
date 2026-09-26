import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-lg text-[#475569] font-medium max-w-3xl mx-auto mb-16">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 text-left">
          {data.categories.map((c, i) => (
            <div key={i} className="p-6 border-b border-[#0B1D3A]/10">
              <h3 className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4">{c.name}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s, j) => (
                  <span key={j} className="px-3 py-1 bg-[#F8FAFD] text-[#0B1D3A] text-xs font-bold rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}