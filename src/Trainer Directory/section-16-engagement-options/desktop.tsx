import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Check, Briefcase } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop({ onRequestPricing }: { onRequestPricing?: () => void }) {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-lg text-white">
            <Briefcase size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Investment</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Pricing Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] rounded p-8 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#6366F1]/10 to-transparent rounded-full blur-[20px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            
            <h4 className="text-[11px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-5">Pricing</h4>
            <h3 className="text-[22px] font-black mb-3 tracking-tight" style={{ color: NAVY }}>{data.investment.pricing.title}</h3>
            <p className="text-[14px] text-[#5A6B82] font-medium leading-relaxed">{data.investment.pricing.subtitle}</p>
          </motion.div>

          {/* Minimum Engagement Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] rounded p-8 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[20px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            
            <h4 className="text-[11px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-5">Minimum Engagement</h4>
            <h3 className="text-[22px] font-black mb-5 tracking-tight" style={{ color: NAVY }}>{data.investment.minimumEngagement.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {data.investment.minimumEngagement.options.map((opt, idx) => (
                <span
                  key={idx}
                  className="text-[12px] font-bold px-3.5 py-1.5 rounded transition-colors"
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

          {/* Pricing Basis Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] rounded p-8 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#10B981]/10 to-transparent rounded-full blur-[20px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            
            <h4 className="text-[11px] font-black text-[#7B8DAA] uppercase tracking-[0.15em] mb-5">Pricing Basis</h4>
            <ul className="flex flex-col gap-4">
              {data.investment.pricingBasis.map((basis, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px] font-bold text-[#5A6B82]">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 border border-[#10B981]/20">
                    <Check size={12} strokeWidth={3} className="text-[#10B981]" />
                  </div>
                  {basis}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Note and CTA */}
        <motion.div
          variants={item}
          className="bg-gradient-to-r from-[#0B1D3A] to-[#132A4D] rounded p-8 flex items-center justify-between shadow-[0_12px_40px_-12px_rgba(11,29,58,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          
          <p className="text-[14px] font-medium text-white/80 relative z-10 max-w-[600px] leading-relaxed">
            {data.investment.footerNote}
          </p>
          <button
            onClick={onRequestPricing}
            className="relative z-10 bg-white text-[#0B1D3A] px-8 py-3.5 rounded font-black text-[14px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] group"
          >
            Request Pricing
            <ArrowRight size={16} strokeWidth={2.5} className="text-[#C99A2E] group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C99A2E]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none rounded" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
