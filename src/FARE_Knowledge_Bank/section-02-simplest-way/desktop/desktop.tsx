import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black text-[#0B2545] mb-6 tracking-tight">{data.title}</h2>
          <p className="text-lg text-[#64748B] font-medium max-w-3xl mx-auto whitespace-pre-wrap">{data.intro}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {data.features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-[8px] shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow">
              <h3 className="text-[#0B2545] text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#D4A017] italic">"{data.quote}"</p>
        </div>
      </div>
    </section>
  );
}