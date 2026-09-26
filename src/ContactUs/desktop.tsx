import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Clock,
  MapPin,
  Building2,
  Mail,
  Phone,
  Sparkles,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getData } from "./data";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function ContactUsDesktop() {
  const { language } = useLanguage();
  const fullData = getData(language);
  const heroData = fullData.hero;
  const sidebarData = fullData.sidebar;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(sidebarData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };
  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(sidebarData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };
  return (
    <div className="w-full font-['Outfit'] relative overflow-hidden">
      <section
        className="relative w-full pt-12 pb-20 flex flex-col items-center"
        style={{
          background: `linear-gradient(180deg, #0B1D3A 0%, #102647 60%, #1A3460 100%)`,
        }}
      >
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.06, 0.14, 0.06], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-[5%] w-[500px] h-[500px] bg-gradient-radial from-[#3B82F6]/15 to-transparent rounded-full blur-[100px] pointer-events-none"
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] backdrop-blur-sm mb-5"
          >
            <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#C99A2E] leading-none pt-0.5">
              FARE FOR
            </span>
          </motion.span>
          <motion.h1
            variants={item}
            className="font-black text-[3.2rem] lg:text-[4rem] leading-[1.05] tracking-[-0.02em] uppercase mb-4"
          >
            <span className="text-white">CONTACT </span>
          </motion.h1>
          {heroData.footerText && (
            <motion.p
              variants={item}
              className="text-white/60 text-[17px] max-w-lg font-medium leading-relaxed"
            >
              {heroData.footerText}
            </motion.p>
          )}
          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
              <span className="text-[12px] text-white/50 font-medium">
                {sidebarData.hours}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative w-full bg-[#F8FAFD] py-14 px-6">
        <div className="max-w-[1060px] mx-auto -mt-16 relative z-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-5 border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-4px_rgba(11,29,58,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(11,29,58,0.14)] transition-all duration-400 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Mail size={19} className="text-white" />
                </div>
                <h4
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5"
                  style={{ color: GOLD }}
                >
                  {sidebarData.directTitle}
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#0B1D3A]/[0.03] border border-[#0B1D3A]/[0.05] hover:bg-[#3B82F6]/[0.06] hover:border-[#3B82F6]/20 transition-all duration-200">
                    <a
                      href={`mailto:${sidebarData.email}`}
                      className="flex items-center gap-2 text-[12px] font-bold text-[#0B1D3A] hover:text-[#2563EB] transition-colors truncate"
                      title="Send Email"
                    >
                      <Mail size={13} className="text-[#3B82F6] shrink-0" />
                      <span className="truncate">{sidebarData.email}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="w-5 h-5 rounded-md bg-white shadow-xs hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 ml-1"
                      title={sidebarData.copyLabel}
                    >
                      {copiedEmail ? (
                        <Check size={10} className="text-[#10B981]" />
                      ) : (
                        <Copy size={10} className="text-[#0B1D3A]/50" />
                      )}
                    </button>
                  </div>

                  {sidebarData.phone && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#0B1D3A]/[0.03] border border-[#0B1D3A]/[0.05] hover:bg-[#10B981]/[0.06] hover:border-[#10B981]/20 transition-all duration-200">
                      <a
                        href={`tel:${sidebarData.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 text-[12px] font-bold text-[#0B1D3A] hover:text-[#059669] transition-colors truncate"
                        title="Call Phone"
                      >
                        <Phone size={13} className="text-[#10B981] shrink-0" />
                        <span className="truncate">{sidebarData.phone}</span>
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="w-5 h-5 rounded-md bg-white shadow-xs hover:bg-[#10B981] hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 ml-1"
                        title={sidebarData.copyLabel}
                      >
                        {copiedPhone ? (
                          <Check size={10} className="text-[#10B981]" />
                        ) : (
                          <Copy size={10} className="text-[#0B1D3A]/50" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {sidebarData.responseTime && (
                <p className="text-[11px] text-[#475569]/70 font-medium mt-3">
                  {sidebarData.responseTime}
                </p>
              )}
            </motion.div>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-6 border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-4px_rgba(11,29,58,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(11,29,58,0.14)] transition-all duration-400 group hover:-translate-y-1 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <MapPin size={20} className="text-white" />
              </div>
              <h4
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5"
                style={{ color: GOLD }}
              >
                {sidebarData.locationTitle}
              </h4>
              <p
                className="text-[15px] font-bold mb-0.5"
                style={{ color: NAVY }}
              >
                {sidebarData.city}
              </p>
              {sidebarData.center && (
                <p className="text-[12px] text-[#475569]/70 font-medium mt-auto">
                  {sidebarData.center}
                </p>
              )}
            </motion.div>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-6 border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-4px_rgba(11,29,58,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(11,29,58,0.14)] transition-all duration-400 group hover:-translate-y-1 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Building2 size={20} className="text-white" />
              </div>
              <h4
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5"
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
            </motion.div>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-6 border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-4px_rgba(11,29,58,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(11,29,58,0.14)] transition-all duration-400 group hover:-translate-y-1 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Clock size={20} className="text-white" />
              </div>
              <h4
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5"
                style={{ color: GOLD }}
              >
                {sidebarData.deskBadge}
              </h4>
              <p
                className="text-[14px] font-bold mb-0.5"
                style={{ color: NAVY }}
              >
                {sidebarData.hours}
              </p>

            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 bg-gradient-to-r from-[#0B1D3A] to-[#132D5F] rounded-2xl px-8 py-5 flex items-center justify-between shadow-lg border border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C99A2E]/15 flex items-center justify-center">
                <Sparkles size={15} className="text-[#C99A2E]" />
              </div>
              <p className="text-[13px] text-white/70 font-medium">
                {sidebarData.partnersNote}
              </p>
            </div>
            <a
              href={`mailto:${sidebarData.email}`}
              className="flex items-center gap-1.5 text-[#C99A2E] text-[13px] font-bold hover:gap-2.5 transition-all duration-300 shrink-0 ml-6"
            >
              {sidebarData.email}
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
