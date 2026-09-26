import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black text-[#0B2545] mb-4 tracking-tight">{data.title}</h2>
          <p className="text-lg text-[#64748B] font-medium max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {data.opportunities.map((opp, i) => (
            <div key={i} className="bg-white p-8 border border-[#E2E8F0] rounded-[8px] flex flex-col hover:shadow-md transition-shadow">
              <div className="text-[#D4A017] text-3xl font-black mb-2 opacity-50">{opp.num}</div>
              <h4 className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-2">{opp.category}</h4>
              <h3 className="text-[#0B2545] text-xl font-bold mb-4">{opp.title}</h3>
              <p className="text-[#64748B] text-sm font-medium leading-relaxed">{opp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}