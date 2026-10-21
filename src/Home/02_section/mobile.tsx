import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bot,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  Clock,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
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
  TrendingUp: Sparkles,
  Zap: Bot,
};

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>(
    data.features[0]?.id || null
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
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#C99A2E", "#D5AA45", "#0B1D3A", "#3B82F6", "#10B981"],
        });
      } catch {
      }
    }, 600);
  };

  const toggleFeature = (id: string) => {
    setExpandedFeatureId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="section-02-coming-soon-mobile"
      aria-label="FARE Coming Soon Section"
      className="w-full relative font-['Outfit'] py-12 px-4 overflow-hidden fare-noise-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 40%, #F1F5FD 100%)",
      }}
    >
      <div className="absolute top-[5%] left-[-10%] w-[320px] h-[320px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[90px] pointer-events-none -z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="w-full relative z-10 flex flex-col space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#C99A2E]/30 shadow-xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C99A2E]" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#0B1D3A]">
              {data.eyebrow}
            </span>
            <span className="h-2.5 w-[1px] bg-[#0B1D3A]/20" />
            <span className="text-[11px] font-semibold text-[#C99A2E] tracking-wider uppercase">
              {data.badgeText}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-[#0B1D3A] tracking-tight leading-tight">
            {data.headline.line1}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#B8871F]">
              {data.headline.highlight}
            </span>{" "}
            {data.headline.line2}
          </h2>
        </div>

        <div
          className="relative rounded-2xl p-6 overflow-hidden border border-[#C99A2E]/30 shadow-xl"
          style={{
            background:
              "linear-gradient(155deg, #071A49 0%, #0B1D3A 60%, #050E24 100%)",
            boxShadow:
              "0 14px 40px -8px rgba(11,29,58,0.35), 0 0 25px -4px rgba(201,154,46,0.15)",
          }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/15 rounded-full blur-[50px] pointer-events-none" />

          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-semibold">
              <Star size={11} className="text-[#C99A2E] fill-[#C99A2E]" />
              <span>{data.logoCard.experienceBadge}</span>
            </div>
            <span className="text-[10px] font-bold text-[#F3E5AB] bg-[#C99A2E]/20 border border-[#C99A2E]/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {data.logoCard.status}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-44 h-44 rounded-full bg-[#C99A2E]/20 blur-xl pointer-events-none" />

              <div className="relative z-10 w-44 h-44 rounded-2xl bg-white/95 backdrop-blur-xl p-4 flex flex-col items-center justify-center shadow-lg border-2 border-[#C99A2E]/40">
                <img
                  src={primaryLogo}
                  alt="FARE Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
            </div>

            <p className="text-[#C99A2E] text-xs font-bold tracking-[0.14em] uppercase mt-4 text-center">
              {data.logoCard.tagline}
            </p>
            <p className="text-white/60 text-[11px] text-center mt-0.5">
              {data.logoCard.brandSubtitle}
            </p>
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
            {data.logoCard.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.06]"
              >
                <div className="text-sm font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[9px] text-white/60 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B1D3A]">
              Upcoming Features
            </span>
            <span className="text-[10px] font-semibold text-[#C99A2E] bg-[#C99A2E]/10 px-2 py-0.5 rounded-full border border-[#C99A2E]/30">
              Phase II Roadmap
            </span>
          </div>

          {data.features.map((feature: FeatureItem) => {
            const IconComponent = iconMap[feature.iconName] || Bot;
            const isExpanded = expandedFeatureId === feature.id;

            return (
              <div
                key={feature.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white border-[#C99A2E] shadow-md ring-1 ring-[#C99A2E]/30"
                    : "bg-white/85 border-[#E2E8F0] shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: feature.accentBg,
                        color: feature.color,
                      }}
                    >
                      <IconComponent size={20} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#7B8DAA] block">
                        {feature.tag}
                      </span>
                      <h4 className="text-sm font-bold text-[#0B1D3A] tracking-tight">
                        {feature.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase"
                      style={{
                        background: `${feature.color}15`,
                        color: feature.color,
                      }}
                    >
                      {feature.badge}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={16} className="text-[#0B1D3A]" />
                    ) : (
                      <ChevronDown size={16} className="text-[#7B8DAA]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 border-t border-[#F1F5F9]">
                        <p className="text-xs text-[#475569] leading-relaxed mb-3">
                          {feature.description}
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-semibold text-[#0B1D3A]/80 bg-[#F8FAFD] p-2 rounded-lg">
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: feature.color }}
                            />
                            {feature.stats}
                          </span>
                          <span className="text-[#C99A2E] font-bold">
                            Preview Available
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div
          className="rounded-2xl p-5 border border-[#C99A2E]/30 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1D3A 0%, #071A49 100%)",
            boxShadow: "0 10px 25px -5px rgba(11,29,58,0.3)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full bg-[#C99A2E]/25 border border-[#C99A2E]/50 text-[#F3E5AB] text-[9px] font-bold uppercase tracking-wider">
              {data.earlyAccess.badge}
            </span>
            <span className="text-white/60 text-[10px] flex items-center gap-1">
              <Clock size={11} className="text-[#60A5FA]" />
              Launch: 88% Ready
            </span>
          </div>

          <h3 className="text-base font-bold text-white tracking-tight mb-1">
            {data.earlyAccess.title}
          </h3>
          <p className="text-white/70 text-[11px] mb-4 leading-relaxed">
            {data.earlyAccess.subtitle}
          </p>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center gap-2.5 text-white"
              >
                <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <div className="text-[11px]">
                  <span className="font-bold text-white block">
                    You're on the VIP list!
                  </span>
                  <span className="text-white/80">
                    We will notify you on launch.
                  </span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-2.5">
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={data.earlyAccess.placeholder}
                    required
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C99A2E]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#C99A2E] text-[#0B1D3A] font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#0B1D3A] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{data.earlyAccess.buttonText}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-2.5 mt-3 pt-3 border-t border-white/10 text-[10px] text-white/60">
            {data.earlyAccess.perks.slice(0, 2).map((perk, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <CheckCircle2 size={11} className="text-[#C99A2E]" />
                <span>{perk}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
