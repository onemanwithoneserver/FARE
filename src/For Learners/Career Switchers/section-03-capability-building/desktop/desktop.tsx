import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white py-20 px-10 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B2545] mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-2 gap-8 text-left">
          {data.categories.map((c, i) => (
            <div key={i} className="p-6 border border-[#E2E8F0] rounded-[8px] hover:shadow-sm transition-shadow">
              <h3 className="text-[#0B2545] text-lg font-bold mb-4">{c.name}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s, j) => (
                  <span key={j} className="px-3 py-1 bg-[#E6F0FF] text-[#0B2545] text-xs font-semibold rounded-[4px]">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}