import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import studentsHero from "../../../assets/students_hero.jpg";

const GOLD = "#C99A2E";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section
      className="w-full relative overflow-hidden font-['Outfit']"
      style={{
        background: `linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 40%, #EDF4FF 75%, #F0F4FF 100%)`,
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

          <div className="w-full rounded-xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(11,29,58,0.18)] mb-6">
            <img
              src={studentsHero}
              alt="Students learning real estate"
              className="w-full h-[220px] object-cover object-center rounded-[4px]"
            />
          </div>

          <button
            className="text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] w-full flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #B8892A)`,
              boxShadow: `0 4px 16px rgba(201,154,46,0.2)`,
            }}
          >
            {data.buttons.primary}
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>

          <span className="text-[9px] font-semibold text-[#0B1D3A]/30 uppercase tracking-[0.15em] mt-5 leading-relaxed self-center">
            {data.supporting}
          </span>
        </motion.div>
      </div>
    </section>
  );
}