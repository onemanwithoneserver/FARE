import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex items-center justify-center min-h-[300px]">
      <h2 className="text-4xl font-bold">{data.title} - Desktop</h2>
    </section>
  );
}
