import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFD] py-20 px-10">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-lg text-[#475569] font-medium mb-16">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 mb-16">
          {data.items.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-[#0B1D3A]/5 flex flex-col items-center">
              <h3 className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4">{item.title}</h3>
              <p className="text-[#475569] font-medium mb-8 text-center">{item.text}</p>
              <button className="bg-[#0B1D3A] text-white px-8 py-3.5 rounded font-bold hover:bg-[#102B63] transition-colors mt-auto w-full">{item.cta}</button>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold text-[#0B1D3A]">{data.closing}</div>
      </div>
    </section>
  );
}