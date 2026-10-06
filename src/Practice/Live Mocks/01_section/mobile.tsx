import { motion } from "motion/react";
import { ChevronRight, Sparkles, ArrowRight, Video } from "lucide-react";
import { data } from "../data";
import liveMocksHero from "../../../assets/live_mocks_hero.jpg";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const s = data.hero;

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] mb-5 max-w-full">
            <Sparkles size={11} className="text-[#C99A2E] shrink-0" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.12em] uppercase text-[#C99A2E] leading-snug pt-0.5">
              {s.supportingLine}
            </span>
          </span>

          <h1 className="text-[1.85rem] font-black text-[#0B1D3A] mb-4 tracking-tight leading-[1.12]">
            {s.title}
          </h1>

          <p className="text-[15px] font-semibold text-[#0B1D3A]/80 mb-3">
            {s.subtitle}
          </p>

          <p className="text-[14px] text-[#475569] font-medium whitespace-pre-wrap leading-relaxed mb-6">
            {s.description}
          </p>

          <div className="w-full rounded-[16px] overflow-hidden luxury-shadow-float mb-6">
            <img
              src={liveMocksHero}
              alt="Live mock practice session with real estate expert"
              className="w-full h-[220px] object-cover object-center"
            />
          </div>

          <button
            className="group text-white text-[14px] font-semibold px-7 py-3.5 rounded-[8px] w-full flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300 mb-3"
            style={{
              background: NAVY,
              boxShadow: `0 4px 16px rgba(11,29,58,0.2)`,
            }}
          >
            🎯 {s.cta}
            <span className="relative inline-flex items-center justify-center shrink-0 w-[15px] h-[15px]">
              <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0" />
              <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0" />
            </span>
          </button>

          <button
            className="group text-[#0B1D3A] text-[14px] font-semibold px-7 py-3.5 rounded-[8px] w-full flex items-center justify-center gap-2.5 border-2 border-[#0B1D3A]/20 active:scale-[0.98] transition-all duration-300"
          >
            <Video size={16} strokeWidth={2.5} />
            {s.secondaryCta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
