import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black text-[#0B2545] text-center mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.challenges.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-[8px] shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow group">
              <h3 className="text-sm font-bold text-[#D4A017] mb-3 group-hover:text-[#0B2545] transition-colors">{c.title}</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center space-y-4">
          {data.quotes.map((q, i) => (
            <p key={i} className="text-xl font-bold text-[#0B2545]">"{q}"</p>
          ))}
        </div>
      </div>
    </section>
  );
}