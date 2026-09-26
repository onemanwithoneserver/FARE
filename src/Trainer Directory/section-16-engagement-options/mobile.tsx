import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white text-[#0F172A] py-12 px-6 border-b border-[#e2e8f0] font-['Outfit'] flex items-center justify-center min-h-[250px] text-center">
      <h2 className="text-3xl font-bold">{data.title} - Mobile</h2>
    </section>
  );
}
