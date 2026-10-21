import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import {
  Bot,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  Users,
  Zap,
  TrendingUp,
  Clock,
  ChevronRight,
  Star,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import { getData, type FeatureItem } from "./data";
import { useLanguage } from "../../context/LanguageContext";

const iconMap = {
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Zap: Zap,
};

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const [activeFeatureId, setActiveFeatureId] = useState<string>(
    data.features[0]?.id || "ai-simulator"
  );
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ["#C99A2E", "#D5AA45", "#0B1D3A", "#3B82F6", "#10B981"],
        });
      } catch {
      }
    }, 600);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="section-02-coming-soon"
      aria-label="FARE Coming Soon Section"
      className="w-full relative font-['Outfit'] py-20 px-6 sm:px-10 lg:px-16 overflow-hidden fare-noise-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 35%, #F4F8FD 70%, #EDF3FC 100%)",
      }}
    >
      <div className="absolute top-[8%] left-[5%] w-[550px] h-[550px] bg-gradient-radial from-[#DDEAFF]/70 to-transparent rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#6366F1]/[0.03] to-transparent rounded-full blur-[160px] pointer-events-none -z-0" />

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-0"
        style={{
          backgroundImage:
            "linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C99A2E]/30 shadow-sm mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C99A2E]" />
            </span>
            <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#0B1D3A]">
              {data.eyebrow}
            </span>
            <span className="h-3 w-[1px] bg-[#0B1D3A]/20" />
            <span className="text-[12px] font-semibold text-[#C99A2E] tracking-wider uppercase">
              {data.badgeText}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1D3A] tracking-tight max-w-4xl leading-[1.18]">
            {data.headline.line1}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#B8871F]">
              {data.headline.highlight}
            </span>{" "}
            {data.headline.line2}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div
              className="relative flex-1 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden border border-[#C99A2E]/25 shadow-2xl transition-all duration-500 hover:shadow-[0_24px_60px_-12px_rgba(201,154,46,0.22)]"
              style={{
                background:
                  "linear-gradient(155deg, #071A49 0%, #0B1D3A 55%, #050E24 100%)",
                boxShadow:
                  "0 20px 50px -10px rgba(11,29,58,0.4), 0 0 35px -5px rgba(201,154,46,0.15)",
              }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-[#3B82F6]/15 to-transparent rounded-full blur-[70px] pointer-events-none" />

              <div className="flex items-center justify-between relative z-10 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-wide">
                  <Star size={13} className="text-[#C99A2E] fill-[#C99A2E]" />
                  <span>{data.logoCard.experienceBadge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99A2E]/20 border border-[#C99A2E]/40 text-[#F3E5AB] text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse" />
                  <span>{data.logoCard.status}</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-[#C99A2E]/25 pointer-events-none"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 45,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[330px] h-[330px] rounded-full border border-[#DDEAFF]/10 pointer-events-none"
                  />

                  <div className="absolute w-56 h-56 rounded-full bg-gradient-radial from-[#C99A2E]/20 via-[#C99A2E]/5 to-transparent blur-2xl pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-64 sm:w-72 h-64 sm:h-72 rounded-3xl bg-white/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-2 border-[#C99A2E]/40"
                  >
                    <img
                      src={primaryLogo}
                      alt="FARE - Finishing Academy for Real Estate Logo"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </motion.div>

                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-1.5 bg-[#0B1D3A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C99A2E]/50 shadow-lg text-[#F3E5AB] text-xs font-semibold"
                  >
                    <Zap size={13} className="text-[#C99A2E]" />
                    <span>Real Estate AI</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-3 -left-3 z-20 hidden sm:flex items-center gap-1.5 bg-[#0B1D3A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#3B82F6]/50 shadow-lg text-white text-xs font-semibold"
                  >
                    <ShieldCheck size={13} className="text-[#60A5FA]" />
                    <span>RERA Certified</span>
                  </motion.div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-[#C99A2E] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-1">
                    {data.logoCard.tagline}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm font-light">
                    {data.logoCard.brandSubtitle}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                {data.logoCard.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-white/[0.04] rounded-xl p-2.5 border border-white/[0.06]"
                  >
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-white/60 font-medium">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature: FeatureItem) => {
                const IconComponent = iconMap[feature.iconName] || Bot;
                const isActive = feature.id === activeFeatureId;

                return (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    onClick={() => setActiveFeatureId(feature.id)}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className={`relative rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                      isActive
                        ? "bg-white shadow-[0_16px_36px_-8px_rgba(11,29,58,0.12)] border-[#C99A2E] ring-2 ring-[#C99A2E]/20"
                        : "bg-white/80 hover:bg-white border-[#E2E8F0] hover:border-[#CBD5E1] shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                          style={{
                            background: feature.accentBg,
                            color: feature.color,
                          }}
                        >
                          <IconComponent size={22} strokeWidth={2.2} />
                        </div>
                        <span
                          className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                          style={{
                            background: `${feature.color}15`,
                            color: feature.color,
                            border: `1px solid ${feature.color}35`,
                          }}
                        >
                          {feature.badge}
                        </span>
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7B8DAA] block mb-1">
                        {feature.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1D3A] tracking-tight mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0B1D3A]/80 flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: feature.color }}
                        />
                        {feature.stats}
                      </span>
                      <span
                        className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                          isActive ? "text-[#C99A2E]" : "text-[#7B8DAA]"
                        }`}
                      >
                        {isActive ? "Active Preview" : "View"}
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 sm:p-7 border border-[#C99A2E]/30 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0B1D3A 0%, #071A49 100%)",
                boxShadow:
                  "0 12px 30px -6px rgba(11,29,58,0.25), 0 0 20px -4px rgba(201,154,46,0.15)",
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C99A2E]/25 border border-[#C99A2E]/50 text-[#F3E5AB] text-[10px] font-bold uppercase tracking-wider">
                      {data.earlyAccess.badge}
                    </span>
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <Users size={12} className="text-[#C99A2E]" />
                      {data.earlyAccess.waitlistCount}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white/80 text-xs">
                    <Clock size={12} className="text-[#60A5FA]" />
                    <span>Phase II Launch Progress: 88%</span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
                  {data.earlyAccess.title}
                </h4>
                <p className="text-white/70 text-xs sm:text-sm mb-5 leading-relaxed">
                  {data.earlyAccess.subtitle}
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center gap-3 text-white"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                        <Check size={18} className="text-white" />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-bold text-white block">
                          Priority Access Confirmed!
                        </span>
                        <span className="text-white/80">
                          {data.earlyAccess.successMessage}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleWaitlistSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="relative flex-1">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={data.earlyAccess.placeholder}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A2E] focus:border-transparent transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#C99A2E] hover:from-[#D5AA45] hover:to-[#B8871F] text-[#0B1D3A] font-bold text-sm tracking-wide shadow-lg shadow-[#C99A2E]/25 hover:shadow-[#C99A2E]/40 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-[#0B1D3A] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>{data.earlyAccess.buttonText}</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-[11px] text-white/60">
                  {data.earlyAccess.perks.map((perk, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#C99A2E]" />
                      <span>{perk}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
