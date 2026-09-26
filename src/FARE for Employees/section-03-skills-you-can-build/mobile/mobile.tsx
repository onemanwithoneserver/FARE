import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-4 tracking-tight">{data.title}</h2>
      <p className="text-base text-[#475569] font-medium text-center mb-10">{data.subtitle}</p>
      <div className="flex flex-col gap-6">
        {data.categories.map((c, i) => (
          <div key={i} className="pb-6 border-b border-[#0B1D3A]/10">
            <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3">{c.name}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s, j) => (
                <span key={j} className="px-2.5 py-1 bg-[#F8FAFD] text-[#0B1D3A] text-[11px] font-bold rounded-full">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}