import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
        <h2 className="text-4xl font-black text-[#0B2545] mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {data.levels.map((lvl, i) => (
            <div key={i} className="bg-white p-6 rounded-[8px] border border-[#E2E8F0] hover:shadow-md transition-shadow flex flex-col justify-center min-h-[140px]">
              <h3 className="text-[#0B2545] text-lg font-bold mb-2">{lvl.title}</h3>
              <p className="text-[#64748B] text-sm font-medium">{lvl.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}