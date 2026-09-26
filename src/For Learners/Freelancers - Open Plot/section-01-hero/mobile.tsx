import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import freelancersHero from "../../../assets/freelancers_hero.jpg";

const NAVY = "#0B1D3A";

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
              src={freelancersHero}
              alt="Freelancer at real estate site"
              className="w-full h-[220px] object-cover object-center rounded-[4px]"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button
              className="text-white text-[14px] font-semibold px-7 py-3.5 rounded-[4px] w-full flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300"
              style={{
                background: NAVY,
                boxShadow: `0 4px 16px rgba(11,29,58,0.2)`,
              }}
            >
              {data.buttons.primary}
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
            <button
              className="text-[14px] font-semibold px-7 py-3.5 rounded-[4px] w-full border border-[#0B1D3A]/15 bg-white active:scale-[0.98] transition-all duration-300"
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