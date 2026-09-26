import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-3 tracking-tight">{data.title}</h2>
      <p className="text-base text-[#475569] font-medium text-center mb-10">{data.subtitle}</p>
      <div className="flex flex-col gap-6 mb-10">
        {data.items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-[#0B1D3A]/5 flex flex-col items-center text-center">
            <h3 className="text-[#C99A2E] text-[11px] font-bold tracking-widest uppercase mb-3">{item.title}</h3>
            <p className="text-sm text-[#475569] font-medium mb-6">{item.text}</p>
            <button className="bg-[#0B1D3A] text-white px-6 py-3 rounded font-bold w-full">{item.cta}</button>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-[#0B1D3A] text-center">{data.closing}</div>
    </section>
  );
}