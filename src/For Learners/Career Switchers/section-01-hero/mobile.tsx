import { motion } from "motion/react";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import careerSwitchersHero from "../../../assets/career_switchers_hero.jpg";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section
      className="w-full relative overflow-hidden font-['Outfit']"
      style={{
        background: `linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)`,
      }}
    >
      <div className="py-10 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] mb-5">
            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">
            {data.badge}
            </span>
          </span>

          <h1 className="text-[1.85rem] font-black text-[#0B1D3A] mb-5 tracking-tight leading-[1.12]">
            {data.headline}
          </h1>

          <p className="text-[14px] text-[#475569] font-medium whitespace-pre-wrap leading-relaxed mb-6">
            {data.description}
          </p>

          <div className="w-full rounded-[16px] overflow-hidden luxury-shadow-float mb-6">
            <img
              src={careerSwitchersHero}
              alt="Professional looking out window"
              className="w-full h-[220px] object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button
              className="text-white text-[14px] font-semibold px-7 py-3.5 rounded-[8px] w-full flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300"
              style={{
                background: NAVY,
                boxShadow: `0 4px 16px rgba(11,29,58,0.2)`,
              }}
            >
              🚀 {data.buttons.primary}
              <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${""}`} style={{ fontSize: `${15}px` }}>
      <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
            </button>
            <button
              className="text-[14px] font-semibold px-7 py-3.5 rounded-[8px] w-full border border-[#0B1D3A]/15 bg-white active:scale-[0.98] transition-all duration-300"
              style={{ color: NAVY }}
            >
              {data.buttons.secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}