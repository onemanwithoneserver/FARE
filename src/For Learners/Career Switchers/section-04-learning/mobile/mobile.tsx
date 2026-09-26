import { getData } from "../data/data";
import { useLanguage } from "../../../../context/LanguageContext";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-[#0B2545] text-white py-16 px-6 font-['Outfit']">
      <h2 className="text-3xl font-black text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4">
        {data.experiences.map((exp, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-[8px] p-6 text-left">
            <span className="text-[#D4A017] text-[10px] font-bold tracking-widest uppercase mb-2 block">{exp.label}</span>
            <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
            <p className="text-sm text-white/70 font-medium leading-relaxed">{exp.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}