import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ChevronRight, ArrowRight, Check } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile({ onRequestPricing }: { onRequestPricing?: () => void }) {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Training Investment")}</h2>
        </motion.div>

        <div className="flex flex-col gap-5 mb-6">

          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-6 luxury-shadow-float relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#6366F1]/10 to-transparent rounded-full blur-[20px] pointer-events-none" />
            <h4 className="text-[10px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-3 relative z-10">{t("Pricing")}</h4>
            <h3 className="text-[18px] font-black mb-2 tracking-tight relative z-10" style={{ color: NAVY }}>{data.investment.pricing.title}</h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed relative z-10">{data.investment.pricing.subtitle}</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-6 luxury-shadow-float relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[20px] pointer-events-none" />
            <h4 className="text-[10px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-3 relative z-10">{t("Minimum Engagement")}</h4>
            <h3 className="text-[18px] font-black mb-4 tracking-tight relative z-10" style={{ color: NAVY }}>{data.investment.minimumEngagement.title}</h3>
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {data.investment.minimumEngagement.options.map((opt, idx) => (
                <span
                  key={idx}
                  className="text-[12px] font-bold px-3 py-1.5 rounded-[4px]"
                  style={opt === data.investment.minimumEngagement.selected ? {
                    background: `${GOLD}15`,
                    color: GOLD_MID,
                    border: `1px solid ${GOLD}40`
                  } : {
                    background: "#F8FAFD",
                    color: "#7B8DAA",
                    border: "1px solid rgba(11,29,58,0.06)"
                  }}
                >
                  {opt}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-6 luxury-shadow-float relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#10B981]/10 to-transparent rounded-full blur-[20px] pointer-events-none" />
            <h4 className="text-[10px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-4 relative z-10">{t("Pricing Basis")}</h4>
            <ul className="flex flex-col gap-3 relative z-10">
              {data.investment.pricingBasis.map((basis, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-[13px] font-bold text-[#5A6B82]">
                  <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 border border-[#10B981]/20">
                    <Check size={10} strokeWidth={3} className="text-[#10B981]" />
                  </div>
                  {basis}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="bg-gradient-to-r from-[#0B1D3A] to-[#132A4D] rounded-[4px] p-6 flex flex-col gap-5 luxury-shadow-float relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[20px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          
          <p className="text-[12px] font-medium text-white/80 text-center relative z-10 leading-relaxed">{data.investment.footerNote}</p>
          <button
            onClick={onRequestPricing}
            className="w-full bg-white text-[#0B1D3A] px-6 py-3.5 rounded-[8px] font-black text-[14px] transition-transform duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center justify-center gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98] relative z-10 group"
          >
            {t("Request Pricing")}
            <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${"text-[#C99A2E]"}`} style={{ fontSize: `${15}px` }}>
      <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
