import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFD] py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black text-[#0B1D3A] text-center mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6 mb-16">
          {data.challenges.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-[#0B1D3A]/5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#C99A2E] mb-3">{c.title}</h3>
              <p className="text-[#475569] font-medium leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center text-xl font-bold text-[#0B1D3A] whitespace-pre-wrap leading-relaxed">{data.closing}</div>
      </div>
    </section>
  );
}