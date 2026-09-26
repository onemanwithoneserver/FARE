import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <h2 className="text-3xl font-black text-[#0B2545] text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-6">
        {data.categories.map((c, i) => (
          <div key={i} className="p-5 border border-[#E2E8F0] rounded-[8px]">
            <h3 className="text-[#0B2545] text-base font-bold mb-3">{c.name}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s, j) => (
                <span key={j} className="px-2.5 py-1 bg-[#E6F0FF] text-[#0B2545] text-[11px] font-semibold rounded-[4px]">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}