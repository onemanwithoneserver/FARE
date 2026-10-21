import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Mail,
  Phone,
  Clock,
  Bot,
  ShieldCheck,
  Award,
  Check,
  Copy,
} from "lucide-react";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import coursesHero from "../../assets/courses_hero.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { getSection02Data } from "./data";

const NAVY = "#0B1D3A";

const featureIconMap = {
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
};

export default function Section02Desktop() {
  const { language } = useLanguage();
  const data = getSection02Data(language);
  const [copiedType, setCopiedType] = useState<"mail" | "phone" | null>(null);

  const handleCopy = (text: string, type: "mail" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section
      id="section-02-coming-soon"
      aria-label="FARE Coming Soon Section"
      className="w-full relative overflow-hidden font-['Outfit'] fare-noise-overlay py-8 lg:py-10 flex flex-col justify-center"
      style={{
        background:
          "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-0"
        style={{
          backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col pr-0 lg:pr-6"
          >
            <h2 className="text-3xl sm:text-4xl xl:text-[3.2rem] font-black text-[#0B1D3A] tracking-tight leading-[1.12] mb-4">
              {data.headline}
            </h2>

            <p className="text-base sm:text-lg font-normal text-[#475569] leading-relaxed mb-6 max-w-[620px]">
              {data.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[620px] rounded-[10px] p-[1.5px] overflow-hidden mb-2.5"
            >
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[200%]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0 60%, #C99A2E 80%, #E2C068 90%, transparent 100%)",
                }}
              />
              <div className="relative rounded-[9px] bg-white/95 backdrop-blur-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-[#C99A2E]"
                    />
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0B1D3A] to-[#1E3A6E] shadow-md">
                      <motion.div
                        animate={{ y: [0, -3, 0], rotate: [0, -6, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Rocket size={18} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#C99A2E]">
                        {data.offer.tag}
                      </span>
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"
                      />
                    </div>
                    <p className="text-[13px] font-semibold text-[#0B1D3A] leading-snug">
                      {data.offer.title}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${data.contact.email}?subject=Early%20Launch%20Inquiry%20-%20FARE`}
                  className="relative overflow-hidden shrink-0 text-white text-[13px] font-bold px-4 py-2.5 rounded-[8px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#0B1D3A] to-[#1E3A6E] hover:from-[#15315C] hover:to-[#0B1D3A] shadow-md hover:shadow-lg transition-all"
                >
                  <span>{data.offer.cta}</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[620px] flex flex-col gap-2"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#64748B]">
                {data.contact.title}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="relative flex items-center justify-between bg-white hover:bg-slate-50 active:bg-slate-100/80 p-3 rounded-xl border border-slate-200 shadow-xs transition-all group">
                  <a
                    href={`mailto:${data.contact.email}?subject=FARE%20Early%20Inquiry`}
                    className="flex items-center gap-3 flex-1 min-w-0 after:absolute after:inset-0"
                    aria-label={`Send email to ${data.contact.email}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C99A2E] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Mail size={18} strokeWidth={2.4} className="text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0B1D3A] truncate">
                      {data.contact.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(data.contact.email, "mail");
                    }}
                    className="relative z-10 p-2 rounded-lg text-slate-400 hover:text-[#0B1D3A] hover:bg-slate-50 active:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copiedType === "mail" ? (
                      <Check size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                <div className="relative flex items-center justify-between bg-white hover:bg-slate-50 active:bg-slate-100/80 p-3 rounded-xl border border-slate-200 shadow-xs transition-all group">
                  <a
                    href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 flex-1 min-w-0 after:absolute after:inset-0"
                    aria-label={`Call ${data.contact.phone}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Phone size={18} strokeWidth={2.4} className="text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0B1D3A] truncate">
                      {data.contact.phone}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(data.contact.phone, "phone");
                    }}
                    className="relative z-10 p-2 rounded-lg text-slate-400 hover:text-[#0B1D3A] hover:bg-slate-50 active:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedType === "phone" ? (
                      <Check size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-[#64748B] flex items-center gap-2 pt-2 border-t border-slate-200/70">
                <span className="w-5 h-5 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock size={11} strokeWidth={2.4} className="text-white" />
                </span>
                <span>{data.contact.hours}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full h-[510px] xl:h-[540px] rounded-tl-[180px] xl:rounded-tl-[220px] rounded-bl-[70px] xl:rounded-bl-[90px] rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-2xl border-l-2 border-t-2 border-white/90">
              <motion.img
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                src={coursesHero}
                alt="FARE Real Estate Professionals Learning"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/25 via-transparent to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 0.6 },
                  y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-4 right-4 xl:top-5 xl:right-5 bg-white/95 backdrop-blur-xl rounded-[12px] px-3.5 py-2 border border-white shadow-xl flex items-center gap-2.5 z-40"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C99A2E] to-[#E2C068] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles size={15} strokeWidth={2.4} className="text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-extrabold tracking-[0.16em] uppercase text-[#64748B] leading-none mb-0.5">
                    {data.comingSoonCard.floatingBadge.tag}
                  </div>
                  <div className="text-xs font-extrabold text-[#0B1D3A] leading-tight">
                    {data.comingSoonCard.floatingBadge.title}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-30 max-w-[350px] sm:max-w-[375px] xl:max-w-[385px] sm:left-4 md:left-5 lg:left-5 xl:left-7 sm:top-1/2 sm:-translate-y-1/2 rounded-2xl border border-white/85 bg-white/90 p-5 sm:p-6 text-center shadow-[0_20px_50px_rgba(11,29,58,0.25)] backdrop-blur-xl overflow-hidden"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0_60%,#C99A2E_80%,#E2C068_90%,transparent_100%)] opacity-20"
              />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full flex items-center justify-center mb-2"
                >
                  <img
                    src={primaryLogo}
                    alt="FARE Logo"
                    className="w-[240px] sm:w-[260px] max-w-[90%] h-auto object-contain filter drop-shadow-xs"
                  />
                </motion.div>
                <h3 className="text-2xl sm:text-[25px] font-black tracking-tight text-[#0B1D3A] mb-3">
                  {data.comingSoonCard.title}
                </h3>

                <div className="w-full pt-3 border-t border-slate-200/80 flex flex-col gap-2.5 text-left">
                  {data.comingSoonCard.features.map((feat, idx) => {
                    const IconComponent = featureIconMap[feat.iconName] || Bot;
                    return (
                      <div
                        key={idx}
                        className="text-xs sm:text-[13px] font-semibold text-[#0B1D3A] flex items-center gap-2.5 p-1 rounded-md hover:bg-white/80 transition-colors"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white shadow-xs"
                          style={{ backgroundColor: feat.color }}
                        >
                          <IconComponent size={14} strokeWidth={2.4} className="text-white" />
                        </div>
                        <span className="truncate">{feat.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
