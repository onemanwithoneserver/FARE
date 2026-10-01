import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const data = profileData;

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
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Investment</h2>
        </motion.div>

        <div className="flex flex-col gap-4 mb-4">

          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
          >
            <h4 className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-2.5">Pricing</h4>
            <h3 className="text-[16px] font-black mb-1.5" style={{ color: NAVY }}>{data.investment.pricing.title}</h3>
            <p className="text-[11px] text-[#5A6B82] font-medium leading-relaxed">{data.investment.pricing.subtitle}</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
          >
            <h4 className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-2.5">Minimum Engagement</h4>
            <h3 className="text-[16px] font-black mb-3" style={{ color: NAVY }}>{data.investment.minimumEngagement.title}</h3>
            <div className="flex flex-wrap gap-2">
              {data.investment.minimumEngagement.options.map((opt, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold px-2.5 py-1 rounded"
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
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-5 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
          >
            <h4 className="text-[9px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em] mb-3">Pricing Basis</h4>
            <ul className="flex flex-col gap-2.5">
              {data.investment.pricingBasis.map((basis, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[12px] font-semibold text-[#5A6B82]">
                  <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${NAVY}10`, color: NAVY }}>
                    <Check size={8} strokeWidth={3} />
                  </div>
                  {basis}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-5 flex flex-col gap-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
        >
          <p className="text-[11px] font-medium text-[#7B8DAA] text-center">{data.investment.footerNote}</p>
          <button
            className="w-full text-white px-5 py-3 rounded font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_4px_12px_-4px_rgba(11,29,58,0.25)] relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            Request Pricing
            <ArrowRight size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
