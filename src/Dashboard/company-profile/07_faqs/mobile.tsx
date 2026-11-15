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

export default function FaqsMobile({ onConnectLiaison, onBack }: FaqsViewProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(faqsData[0].id);

  return (
    <section
      id="company-sec-faqs"
      className="w-full py-10 px-4 bg-[#F8FAFD] scroll-mt-[96px]"
    >
      <SectionHeader
        compact
        eyebrow="07 · Knowledge & Clarity"
        title="Frequently Asked Questions"
      />

      <div className="flex flex-col gap-2.5 mb-6">
        {faqsData.map((faq, idx) => {
          const isOpen = openFaqId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white rounded-[8px] border transition-colors overflow-hidden relative ${
                isOpen ? "border-[#C99A2E]/60 shadow-2xs" : "border-[#E2E8F0]"
              }`}
            >
              {isOpen && (
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#C99A2E] to-[#0B1D3A]" />
              )}

              <button
                type="button"
                onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                className="w-full p-3.5 flex items-start justify-between gap-3 text-left cursor-pointer"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <span
                    className={`self-start text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-[4px] ${
                      isOpen
                        ? "bg-[#C99A2E]/15 text-[#A87A18]"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {faq.tag}
                  </span>
                  <span className="text-xs font-bold text-[#0B1D3A] leading-snug">
                    {faq.question}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#C99A2E] shrink-0 mt-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-3.5 pb-3.5 pt-2 text-xs text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[12px] bg-gradient-to-br from-[#0B1D3A] via-[#0F274D] to-[#1A3463] text-white p-5 pt-6 shadow-[0_16px_40px_rgba(11,29,58,0.2)] border border-white/15 flex flex-col gap-3.5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#E5C158] to-[#0B1D3A]" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.22) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />

        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[50px] pointer-events-none opacity-45"
          style={{
            background: "radial-gradient(circle, rgba(201,154,46,0.45) 0%, transparent 70%)",
          }}
        />

        <div className="flex items-center justify-between gap-2 relative z-10">
          <div className="w-9 h-9 rounded-[8px] bg-[#C99A2E]/15 border border-[#C99A2E]/35 flex items-center justify-center text-[#E5C158]">
            <ShieldCheck size={18} strokeWidth={2.2} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[9px] font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Desk Online</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#E5C158] mb-1">
            Priority Liaison Desk
          </div>
          <h3 className="text-base font-black leading-snug text-white">
            Need Direct Developer Clarification?
          </h3>
          <p className="text-xs text-slate-300/90 mt-1 leading-relaxed">
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
                className="bg-white/[0.05] border border-white/10 rounded-[8px] p-2.5 flex items-start gap-2.5"
              >
                <div className="w-6 h-6 rounded-[5px] bg-[#C99A2E]/15 border border-[#C99A2E]/30 flex items-center justify-center text-[#E5C158] shrink-0 mt-0.5">
                  <Icon size={13} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-white leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-300/85 mt-0.5 leading-snug">
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
              className="w-full py-2.5 px-2 rounded-[8px] bg-white/[0.08] border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft size={12} className="shrink-0" />
              <span>Back</span>
            </button>
          )}
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onConnectLiaison}
            className="w-full py-2.5 px-2 rounded-[8px] text-white text-xs font-bold flex items-center justify-center shadow-[0_4px_14px_rgba(201,154,46,0.3)] cursor-pointer whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
          >
            <span>Schedule Briefing</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
