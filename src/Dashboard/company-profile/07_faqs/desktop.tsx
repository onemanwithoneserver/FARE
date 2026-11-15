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

export interface FaqsViewProps {
  onConnectLiaison: () => void;
  onBack?: () => void;
}

export default function FaqsDesktop({ onConnectLiaison, onBack }: FaqsViewProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(faqsData[0].id);

  return (
    <section
      id="company-sec-faqs"
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-[#F8FAFD] relative overflow-hidden scroll-mt-[72px]"
    >
      <div className="max-w-[1160px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="07 · Knowledge & Clarity"
          title="Frequently Asked Questions (FAQs)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white rounded-[8px] border transition-all duration-200 overflow-hidden relative ${
                    isOpen
                      ? "border-[#C99A2E]/60 shadow-[0_8px_24px_rgba(11,29,58,0.06)]"
                      : "border-[#E2E8F0] hover:border-slate-300"
                  }`}
                >
                  {isOpen && (
                    <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#C99A2E] to-[#0B1D3A]" />
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-[4px] shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#C99A2E]/15 text-[#A87A18]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {faq.tag}
                      </span>
                      <span className="text-sm font-bold text-[#0B1D3A] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#C99A2E] shrink-0"
                    >
                      <ChevronDown size={17} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pt-2 text-[13px] text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[12px] bg-gradient-to-br from-[#0B1D3A] via-[#0F274D] to-[#1A3463] text-white p-6 pt-7 shadow-[0_20px_50px_rgba(11,29,58,0.22)] border border-white/15 flex flex-col gap-4 sticky top-20 relative overflow-hidden"
          >
            {/* Top Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#E5C158] to-[#0B1D3A]" />

            {/* Subtle Dot-Grid Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.22) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Ambient Gold Glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(201,154,46,0.45) 0%, transparent 70%)",
              }}
            />

            {/* Header Bar */}
            <div className="flex items-center justify-between gap-2 relative z-10">
              <div className="w-10 h-10 rounded-[9px] bg-[#C99A2E]/15 border border-[#C99A2E]/35 flex items-center justify-center text-[#E5C158] shadow-inner">
                <ShieldCheck size={20} strokeWidth={2.2} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Direct Desk Online</span>
              </div>
            </div>

            {/* Eyebrow, Heading & Subtitle */}
            <div className="relative z-10">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#E5C158] mb-1">
                Priority Liaison Desk
              </div>
              <h3 className="text-[17px] font-black tracking-tight leading-snug text-white">
                Need Direct Developer Clarification?
              </h3>
              <p className="text-xs text-slate-300/90 mt-1.5 leading-relaxed">
                Speak directly with Horizon’s FARE-certified desk lead for verified dossiers, onboarding codes, and site visits.
              </p>
            </div>

            {/* 3 Structured Glassmorphic Deliverable Rows */}
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
                    className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-[8px] p-3 flex items-start gap-2.5 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-[6px] bg-[#C99A2E]/15 border border-[#C99A2E]/30 flex items-center justify-center text-[#E5C158] shrink-0 mt-0.5">
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-300/85 mt-0.5 leading-snug">
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
                  className="w-full py-2.5 px-3 rounded-[8px] bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <ArrowLeft size={13} className="shrink-0" />
                  <span>Back</span>
                </button>
              )}
              <button
                type="button"
                onClick={onConnectLiaison}
                className="relative overflow-hidden group/cta w-full py-2.5 px-3 rounded-[8px] text-white text-xs font-bold flex items-center justify-center shadow-[0_4px_14px_rgba(201,154,46,0.35)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
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
