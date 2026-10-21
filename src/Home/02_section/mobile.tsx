import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Rocket,
  Mail,
  Phone,
  Bot,
  ShieldCheck,
  Award,
} from "lucide-react";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import coursesHero from "../../assets/courses_hero.jpg";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";

const featureIconMap = {
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
};

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);


  return (
    <section
      id="section-02-coming-soon-mobile"
      aria-label="FARE Coming Soon Section"
      className="w-full relative overflow-hidden font-['Outfit'] fare-noise-overlay py-12 px-4"
      style={{
        background:
          "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)",
      }}
    >
      <div className="w-full flex flex-col space-y-3 relative z-10">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight leading-tight mb-2">
            {data.headline}
          </h2>

          <p className="text-xs sm:text-sm font-normal text-[#475569] leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="relative rounded-[10px] p-[1.5px] overflow-hidden">
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
          <div className="relative rounded-[9px] bg-white/95 backdrop-blur-xl p-3 flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0B1D3A] to-[#1E3A6E] shrink-0 shadow-sm">
                <Rocket size={16} className="text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[9px] font-extrabold tracking-wider uppercase text-[#C99A2E]">
                    {data.offer.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse" />
                </div>
                <p className="text-xs font-bold text-[#0B1D3A] leading-tight">
                  {data.offer.title}
                </p>
              </div>
            </div>

            <a
              href={`mailto:${data.contact.email}?subject=Early%20Launch%20Inquiry`}
              className="w-full text-white text-xs font-bold py-2 rounded-md flex items-center justify-center gap-1.5 bg-[#0B1D3A]"
            >
              <span>{data.offer.cta}</span>
              <ArrowRight size={13} className="text-white" />
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#64748B]">
            {data.contact.title}
          </span>

          <div className="grid grid-cols-2 gap-2 w-full">
            <a
              href={`mailto:${data.contact.email}?subject=FARE%20Early%20Inquiry`}
              aria-label={`Send email to ${data.contact.email}`}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100/80 px-2.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs transition-colors min-w-0"
            >
              <div className="w-7 h-7 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Mail size={13} strokeWidth={2.4} className="text-white" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0B1D3A] tracking-tight truncate">
                {data.contact.email}
              </span>
            </a>

            <a
              href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
              aria-label={`Call ${data.contact.phone}`}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100/80 px-2.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs transition-colors min-w-0"
            >
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Phone size={13} strokeWidth={2.4} className="text-white" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0B1D3A] tracking-tight truncate">
                {data.contact.phone}
              </span>
            </a>
          </div>

          <p className="text-[10px] font-medium text-[#64748B] text-center pt-0.5">
            {data.contact.hours}
          </p>
        </div>

        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/90 flex flex-col items-center justify-end p-4 pt-16 pb-4 min-h-[500px] sm:min-h-[530px]">
          <img
            src={coursesHero}
            alt="FARE Experts"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-[#0B1D3A]/40 to-black/20" />

          <div className="absolute top-3 right-3 z-40 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white shadow-lg flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C99A2E] to-[#E2C068] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles size={13} strokeWidth={2.4} className="text-white" />
            </div>
            <div>
              <div className="text-[8px] font-extrabold tracking-[0.14em] uppercase text-[#64748B] leading-none mb-0.5">
                {data.comingSoonCard.floatingBadge.tag}
              </div>
              <div className="text-[11px] font-extrabold text-[#0B1D3A] leading-tight">
                {data.comingSoonCard.floatingBadge.title}
              </div>
            </div>
          </div>

          <div className="relative z-30 w-full max-w-[360px] mb-6 sm:mb-8 rounded-2xl border border-white/85 bg-white/95 backdrop-blur-xl p-5 sm:p-6 text-center shadow-[0_16px_40px_rgba(11,29,58,0.25)]">
            <div className="w-full flex items-center justify-center overflow-hidden h-22 sm:h-24 mb-1">
              <img
                src={primaryLogo}
                alt="FARE Logo"
                className="w-[250px] sm:w-[270px] max-w-[92%] h-auto object-contain filter drop-shadow-xs"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1D3A] tracking-tight mb-3">
              {data.comingSoonCard.title}
            </h3>

            <div className="pt-3 border-t border-slate-200/80 flex flex-col gap-2 text-left">
              {data.comingSoonCard.features.map((feat, idx) => {
                const IconComponent = featureIconMap[feat.iconName] || Bot;
                return (
                  <div
                    key={idx}
                    className="text-xs font-semibold text-[#0B1D3A] flex items-center gap-2.5 p-1 rounded-lg"
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-white shadow-xs"
                      style={{ backgroundColor: feat.color }}
                    >
                      <IconComponent size={13} strokeWidth={2.4} className="text-white" />
                    </div>
                    <span className="truncate">{feat.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
