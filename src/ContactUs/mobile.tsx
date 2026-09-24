import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Clock,
  MapPin,
  Building2,
  Mail,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getData } from "./data";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function ContactUsMobile() {
  const { language } = useLanguage();
  const fullData = getData(language);
  const heroData = fullData.hero;
  const sidebarData = fullData.sidebar;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(sidebarData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };
  return (
    <div className="w-full font-['Outfit'] relative overflow-hidden">
      <section
        className="relative w-full pt-28 pb-20 flex flex-col items-center px-5"
        style={{
          background: `linear-gradient(180deg, #0B1D3A 0%, #102647 60%, #1A3460 100%)`,
        }}
      >
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[80px] pointer-events-none"
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] backdrop-blur-sm mb-4"
          >
            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#C99A2E] leading-none pt-0.5">
              FARE FOR
            </span>
          </motion.span>
          <motion.h1
            variants={item}
            className="font-black text-[2.5rem] leading-[1.08] tracking-[-0.01em] uppercase mb-3"
          >
            <span className="text-white">CONTACT & </span>
            <span className="text-[#C99A2E]">ADVISORY</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-white/55 text-[14px] max-w-xs font-medium leading-relaxed"
          >
            {heroData.footerText}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-5 flex items-center justify-center"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[11px] text-white/45 font-medium">
                {sidebarData.hours}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative w-full bg-[#F8FAFD] pb-10 px-4">
        <div className="-mt-10 relative z-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-30px" }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.div
              variants={item}
              className="col-span-2 bg-white rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_16px_-4px_rgba(11,29,58,0.08)]"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shrink-0 shadow-md">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1"
                    style={{ color: GOLD }}
                  >
                    {sidebarData.directTitle}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[14px] font-bold truncate"
                      style={{ color: NAVY }}
                    >
                      {sidebarData.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="w-6 h-6 rounded-md bg-[#0B1D3A]/[0.04] flex items-center justify-center shrink-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
                    >
                      {copiedEmail ? (
                        <Check size={11} className="text-[#10B981]" />
                      ) : (
                        <Copy size={11} className="text-[#0B1D3A]/40" />
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-[#475569]/60 font-medium mt-1">
                    {sidebarData.responseTime}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_16px_-4px_rgba(11,29,58,0.08)]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center mb-3 shadow-md">
                <MapPin size={18} className="text-white" />
              </div>
              <h4
                className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1"
                style={{ color: GOLD }}
              >
                {sidebarData.locationTitle}
              </h4>
              <p className="text-[13px] font-bold" style={{ color: NAVY }}>
                {sidebarData.city}
              </p>
              <p className="text-[11px] text-[#475569]/60 font-medium mt-0.5">
                {sidebarData.center}
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_16px_-4px_rgba(11,29,58,0.08)]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center mb-3 shadow-md">
                <Clock size={18} className="text-white" />
              </div>
              <h4
                className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1"
                style={{ color: GOLD }}
              >
                {sidebarData.deskBadge}
              </h4>
              <p className="text-[13px] font-bold" style={{ color: NAVY }}>
                {sidebarData.hours}
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] text-[#475569]/50">Online</span>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="col-span-2 bg-white rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_16px_-4px_rgba(11,29,58,0.08)]"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center shrink-0 shadow-md">
                  <Building2 size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4
                    className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1"
                    style={{ color: GOLD }}
                  >
                    {sidebarData.officeTitle}
                  </h4>
                  <p
                    className="text-[13px] font-semibold leading-relaxed"
                    style={{ color: NAVY }}
                  >
                    {sidebarData.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 bg-gradient-to-r from-[#0B1D3A] to-[#132D5F] rounded-2xl px-5 py-4 shadow-lg border border-white/5"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#C99A2E]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles size={13} className="text-[#C99A2E]" />
              </div>
              <p className="text-[11px] text-white/60 font-medium leading-relaxed">
                {sidebarData.partnersNote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
