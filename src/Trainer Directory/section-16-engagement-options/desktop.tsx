import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ChevronRight, ArrowRight, Check, Clock, CreditCard, Sparkles } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

export default function Desktop({ onRequestPricing }: { onRequestPricing?: () => void }) {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const cards = [
    {
      title: "Pricing",
      subtitle: data.investment.pricing.title,
      desc: data.investment.pricing.subtitle,
      icon: <CreditCard size={20} strokeWidth={2} />,
      accent: "#3B82F6",
      featured: false,
    },
    {
      title: "Minimum Engagement",
      subtitle: data.investment.minimumEngagement.title,
      desc: "Flexible engagement options to match your team size and goals.",
      icon: <Clock size={20} strokeWidth={2} />,
      accent: GOLD,
      featured: true,
      options: data.investment.minimumEngagement.options,
      selected: data.investment.minimumEngagement.selected,
    },
    {
      title: "Pricing Basis",
      subtitle: "Flexible Models",
      desc: "Choose the pricing structure that best fits your program needs.",
      icon: <Sparkles size={20} strokeWidth={2} />,
      accent: "#10B981",
      featured: false,
      list: data.investment.pricingBasis,
    },
  ];

  return (
    <section
      className="w-full py-16 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
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
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-4">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, #D5AA45)` }} />
          <h2 className=" text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em]">{t("Training Investment")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>
        <motion.div variants={item} className="mb-10">
          <p className="text-[15px] text-[#7B8DAA] font-medium max-w-[500px]">{t("Transparent engagement models tailored to your team\u0027s requirements.")}</p>
        </motion.div>

        
        <div className="grid grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className={`rounded-[4px] p-8 flex flex-col relative overflow-hidden transition-all duration-400 ease-out group ${
                card.featured
                  ? "border-2 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)]"
                  : "border border-[#0B1D3A]/[0.06] luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:border-[#0B1D3A]/[0.15]"
              }`}
              style={{
                background: card.featured
                  ? `linear-gradient(170deg, ${NAVY} 0%, #071A49 100%)`
                  : "rgba(255,255,255,0.8)",
                backdropFilter: card.featured ? undefined : "blur(20px)",
                borderColor: card.featured ? `${GOLD}60` : undefined,
              }}
            >
              
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ background: card.accent }}
              />

              {card.featured && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[50px] pointer-events-none"
                    style={{ background: GOLD }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full z-10" style={{ background: GOLD, color: NAVY }}>
                    {t("Popular")}
                  </div>
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="w-11 h-11 rounded-[4px] flex items-center justify-center text-white shadow-lg mb-5"
                  style={{ background: card.accent }}
                >
                  {card.icon}
                </div>

                <h4 className={`text-[11px] font-black uppercase tracking-[0.15em] mb-4 ${card.featured ? "text-white/50" : "text-[#7B8DAA]"}`}>
                  {card.title}
                </h4>
                <h3 className={`text-[24px] font-black mb-3 tracking-tight ${card.featured ? "text-white" : ""}`} style={card.featured ? {} : { color: NAVY }}>
                  {card.subtitle}
                </h3>
                <p className={`text-[14px] font-medium leading-relaxed mb-6 ${card.featured ? "text-white/60" : "text-[#5A6B82]"}`}>
                  {card.desc}
                </p>

                
                {card.options && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.options.map((opt, oIdx) => (
                      <span
                        key={oIdx}
                        className="text-[12px] font-bold px-3 py-1.5 rounded-[4px] transition-colors"
                        style={opt === card.selected ? {
                          background: `${GOLD}25`,
                          color: GOLD,
                          border: `1px solid ${GOLD}50`
                        } : {
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.6)",
                          border: "1px solid rgba(255,255,255,0.1)"
                        }}
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                )}

                
                {card.list && (
                  <ul className="flex flex-col gap-3 mt-auto">
                    {card.list.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-center gap-3 text-[14px] font-semibold text-[#5A6B82]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}>
                          <Check size={11} strokeWidth={3} style={{ color: card.accent }} />
                        </div>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          variants={item}
          className="rounded-[4px] p-6 flex items-center justify-between relative overflow-hidden border border-[#0B1D3A]/[0.06] bg-[#F8FAFD]"
        >
          <p className="text-[14px] font-medium text-[#5A6B82] relative z-10 max-w-[600px] leading-relaxed">
            {data.investment.footerNote}
          </p>
          <button
            onClick={onRequestPricing}
            className="relative z-10 px-8 py-3 rounded-[8px] font-black text-[14px] text-white transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center gap-2.5 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group/btn"
            style={{ background: `linear-gradient(135deg, ${NAVY}, #132A4D)` }}
          >
            {t("Request Pricing")}
            <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${""}`} style={{ fontSize: `${16}px`, color: GOLD }}>
      <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={16} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
