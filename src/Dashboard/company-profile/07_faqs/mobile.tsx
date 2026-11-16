import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  FileCheck2,
  Building2,
  CalendarCheck,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import SectionHeader from "../SectionHeader";
import { faqsData } from "./data";
import type { FaqsViewProps } from "./desktop";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function FaqsMobile({ onConnectLiaison, onBack }: FaqsViewProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(faqsData[0].id);

  return (
    <section
      id="company-sec-faqs"
      className="w-full py-12 px-5 bg-white font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="relative z-10">
        <SectionHeader
          compact
          eyebrow="07 · Knowledge & Clarity"
          title="Frequently Asked Questions"
        />

        <div className="flex flex-col gap-3 mb-7">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.55, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white/90 backdrop-blur-xl rounded-[4px] border transition-all duration-400 overflow-hidden relative ${
                  isOpen
                    ? "border-[#C99A2E]/40 luxury-shadow-float"
                    : "border-[#0B1D3A]/[0.06] luxury-shadow-sm"
                }`}
              >
                {isOpen && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
                  />
                )}

                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                  className="w-full p-4 flex items-start justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span
                      className="self-start text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[4px]"
                      style={
                        isOpen
                          ? {
                              background: `${GOLD}18`,
                              color: GOLD,
                              border: `1px solid ${GOLD}30`,
                            }
                          : {
                              background: "#F8FAFD",
                              color: "#7B8DAA",
                              border: "1px solid rgba(11,29,58,0.06)",
                            }
                      }
                    >
                      {faq.tag}
                    </span>
                    <span className="text-[14px] font-black text-[#0B1D3A] leading-snug tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#C99A2E] shrink-0 mt-1"
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2.5 text-[12.5px] text-[#5A6B82] font-medium leading-[1.6] border-t border-[#0B1D3A]/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Liaison Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[4px] text-white p-5 pt-6 luxury-shadow-float border border-[#C99A2E]/40 flex flex-col gap-3.5 relative overflow-hidden"
          style={{
            background: `linear-gradient(170deg, ${NAVY} 0%, #071A49 50%, #0D2240 100%)`,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div
            className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[50px] pointer-events-none opacity-25"
            style={{
              background: GOLD,
            }}
          />

          <div className="flex items-center justify-between gap-2 relative z-10">
            <div
              className="w-9 h-9 rounded-[4px] flex items-center justify-center text-white luxury-shadow-md"
              style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
            >
              <ShieldCheck size={18} strokeWidth={2.2} />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[9px] font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Desk Online</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#D5AA45] mb-1">
              Priority Liaison Desk
            </div>
            <h3 className="text-[16px] font-black leading-snug text-white tracking-tight">
              Need Direct Developer Clarification?
            </h3>
            <p className="text-[12px] text-[#CBD5E1] font-light mt-1 leading-relaxed">
              Speak directly with Horizon’s FARE-certified desk lead for verified dossiers, onboarding codes, and site visits.
            </p>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            {[
              {
                icon: FileCheck2,
                title: "Link-Document & Title Dossier",
                subtitle: "30-yr EC, LP number & bank legal opinions",
              },
              {
                icon: Building2,
                title: "Partner Sub-Code Onboarding",
                subtitle: "Direct token desk & 48-hr payout SLA",
              },
              {
                icon: CalendarCheck,
                title: "VIP Site Inspection & Briefing",
                subtitle: "Dedicated closing manager on-site",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-[4px] p-2.5 flex items-start gap-2.5"
                >
                  <div
                    className="w-7 h-7 rounded-[4px] flex items-center justify-center text-[#D5AA45] shrink-0 mt-0.5"
                    style={{
                      background: "rgba(201,154,46,0.14)",
                      border: "1px solid rgba(201,154,46,0.3)",
                    }}
                  >
                    <Icon size={13} strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-[#94A3B8] font-medium mt-0.5 leading-snug">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions Side-by-Side (Back on left, Schedule Briefing on right) */}
          <div className={`grid ${onBack ? "grid-cols-2" : "grid-cols-1"} gap-2 relative z-10 pt-1`}>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="w-full py-2.5 px-2 rounded-[8px] bg-white/[0.06] border border-white/[0.1] text-white/85 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap transition-colors"
              >
                <ArrowLeft size={12} className="shrink-0" />
                <span>Back</span>
              </button>
            )}
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={onConnectLiaison}
              className="w-full py-2.5 px-2 rounded-[8px] text-white text-xs font-bold flex items-center justify-center luxury-shadow-float cursor-pointer whitespace-nowrap"
              style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
            >
              <span>Schedule Briefing</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
