import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4 mb-10">
        {data.challenges.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-[#0B1D3A]/5">
            <h3 className="text-base font-bold text-[#C99A2E] mb-2">{c.title}</h3>
            <p className="text-sm text-[#475569] font-medium leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-lg font-bold text-[#0B1D3A] whitespace-pre-wrap">{data.closing}</div>
    </section>
  );
}