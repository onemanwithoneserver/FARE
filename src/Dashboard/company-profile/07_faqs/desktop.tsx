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

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface FaqsViewProps {
  onConnectLiaison: () => void;
  onBack?: () => void;
}

export default function FaqsDesktop({ onConnectLiaison, onBack }: FaqsViewProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(faqsData[0].id);

  return (
    <section
      id="company-sec-faqs"
      className="w-full py-16 px-10 bg-white font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="07 · Knowledge & Clarity"
          title="Frequently Asked Questions (FAQs)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white/90 backdrop-blur-xl rounded-[4px] border transition-all duration-400 overflow-hidden relative ${
                    isOpen
                      ? "border-[#C99A2E]/40 luxury-shadow-float"
                      : "border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] luxury-shadow-sm hover:luxury-shadow-float"
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
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded-[4px] shrink-0 transition-colors"
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
                      <span className="text-[15px] font-black text-[#0B1D3A] leading-snug tracking-tight">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#C99A2E] shrink-0"
                    >
                      <ChevronDown size={17} strokeWidth={2.5} />
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
                        <div className="px-5 pb-4 pt-3 text-[13px] text-[#5A6B82] font-medium leading-[1.65] border-t border-[#0B1D3A]/[0.06]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[4px] text-white p-6 pt-7 luxury-shadow-float border border-[#C99A2E]/40 flex flex-col gap-4 sticky top-20 relative overflow-hidden"
            style={{
              background: `linear-gradient(170deg, ${NAVY} 0%, #071A49 50%, #0D2240 100%)`,
            }}
          >
            {/* Top Gold Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
            />

            {/* Subtle 24px Grid Overlay matching Trainer Directory dark card */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Ambient Gold Glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[50px] pointer-events-none"
              style={{
                background: GOLD,
              }}
            />

            {/* Header Bar */}
            <div className="flex items-center justify-between gap-2 relative z-10">
              <div
                className="w-10 h-10 rounded-[4px] flex items-center justify-center text-white luxury-shadow-md"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
              >
                <ShieldCheck size={20} strokeWidth={2.2} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Direct Desk Online</span>
              </div>
            </div>

            {/* Eyebrow, Heading & Subtitle */}
            <div className="relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D5AA45] mb-1">
                Priority Liaison Desk
              </div>
              <h3 className="text-[18px] font-black tracking-tight leading-snug text-white">
                Need Direct Developer Clarification?
              </h3>
              <p className="text-[13px] text-[#CBD5E1] font-light mt-1.5 leading-relaxed">
                Speak directly with Horizon’s FARE-certified desk lead for verified dossiers, onboarding codes, and site visits.
              </p>
            </div>

            {/* 3 Structured Glassmorphic Deliverable Rows */}
            <div className="flex flex-col gap-2.5 relative z-10">
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
                    className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-[4px] p-3 flex items-start gap-2.5 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-[4px] flex items-center justify-center text-[#D5AA45] shrink-0 mt-0.5"
                      style={{
                        background: "rgba(201,154,46,0.14)",
                        border: "1px solid rgba(201,154,46,0.3)",
                      }}
                    >
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] font-medium mt-0.5 leading-snug">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions Side-by-Side (Back on left, Schedule Briefing on right) */}
            <div className={`grid ${onBack ? "grid-cols-2" : "grid-cols-1"} gap-2.5 relative z-10 pt-1`}>
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full py-2.5 px-3 rounded-[8px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white/85 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <ArrowLeft size={13} className="shrink-0" />
                  <span>Back</span>
                </button>
              )}
              <button
                type="button"
                onClick={onConnectLiaison}
                className="relative overflow-hidden group/cta w-full py-2.5 px-3 rounded-[8px] text-white text-xs font-bold flex items-center justify-center luxury-shadow-float hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
              >
                <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/cta:left-[130%] group-hover/cta:opacity-100" />
                <span className="relative">Schedule Briefing</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
