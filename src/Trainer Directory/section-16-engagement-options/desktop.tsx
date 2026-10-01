import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Investment</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5 mb-5">
                    <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out"
          >
            <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-4">Pricing</h4>
            <h3 className="text-[18px] font-black mb-2" style={{ color: NAVY }}>{data.investment.pricing.title}</h3>
            <p className="text-[12px] text-[#5A6B82] font-medium leading-relaxed">{data.investment.pricing.subtitle}</p>
          </motion.div>

                    <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out"
          >
            <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-4">Minimum Engagement</h4>
            <h3 className="text-[18px] font-black mb-4" style={{ color: NAVY }}>{data.investment.minimumEngagement.title}</h3>
            <div className="flex flex-wrap gap-2">
              {data.investment.minimumEngagement.options.map((opt, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-semibold px-2.5 py-1.5 rounded-full transition-colors"
                  style={opt === data.investment.minimumEngagement.selected ? {
                    background: `${GOLD}15`,
                    color: GOLD_MID,
                    border: `1px solid ${GOLD}30`
                  } : {
                    background: "white",
                    color: "#7B8DAA",
                    border: "1px solid rgba(11,29,58,0.08)"
                  }}
                >
                  {opt}
                </span>
              ))}
            </div>
          </motion.div>

                    <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out"
          >
            <h4 className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-4">Pricing Basis</h4>
            <ul className="flex flex-col gap-3">
              {data.investment.pricingBasis.map((basis, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#5A6B82]">
                  <div className="w-4 h-4 rounded-full ring-1 ring-black/5 flex items-center justify-center shrink-0" style={{ background: `${NAVY}10`, color: NAVY }}>
                    <Check size={10} strokeWidth={3} />
                  </div>
                  {basis}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

                <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-6 flex items-center justify-between shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
        >
          <p className="text-[13px] font-medium text-[#7B8DAA]">{data.investment.footerNote}</p>
          <button
            className="text-white px-6 py-2.5 rounded-xl font-bold text-[13px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 flex items-center gap-2 shadow-[0_4px_16px_-4px_rgba(11,29,58,0.25)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            Request Pricing
            <ArrowRight size={14} strokeWidth={2.5} style={{ color: GOLD_MID }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
