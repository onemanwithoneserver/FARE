import { ArrowRight, BookOpen, ChartNoAxesCombined, CheckCheck, GraduationCap, HelpCircle, Play, Target } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import { getData } from "./data";
import "./hero.css";

const capabilityIcons = [
  { icon: GraduationCap, color: "#2563EB" },
  { icon: BookOpen, color: "#0891B2" },
  { icon: HelpCircle, color: "#7C3AED" },
  { icon: Target, color: "#0F766E" },
  { icon: CheckCheck, color: "#4F46E5" },
  { icon: ChartNoAxesCombined, color: "#334155" },
];

export default function HeroIntro({ mobile = false, onPlay }: { mobile?: boolean; onPlay: () => void }) {
  const { language } = useLanguage();
  const data = getData(language);
  const explore = () => {
    document.getElementById(mobile ? "section-02-coming-soon-mobile" : "section-02-coming-soon")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <div className={`fare-hero-intro${language === "te" ? " fare-hero-telugu" : ""}`}>
      <div className="fare-hero-brand">
        <img src={primaryLogo} alt="FARE — Skill Enhancement for Real Estate" />
      </div>
      <div className="fare-hero-eyebrow"><span />{language === "te" ? "మీ ఎదుగుదలకు తదుపరి అడుగు" : "YOUR NEXT CHAPTER STARTS HERE"}</div>
      <h1 className="fare-hero-title">
        <span>{data.headline.line1}</span>{" "}
        <span className="fare-hero-gold">{data.headline.line2}</span>
      </h1>
      <p className="fare-hero-subtitle">{data.subtitle}</p>
      <div className="fare-hero-toolkit">
        <p>{language === "te" ? "మీ ఎదుగుదలకు కావలసినవన్నీ" : "ONE PLATFORM. EVERY STEP OF YOUR GROWTH."}</p>
        <ul className="fare-hero-capabilities">
          {data.capabilities.map((capability, index) => {
            const { icon: Icon, color } = capabilityIcons[index];
            return (
              <li key={capability}>
                <span className="fare-hero-capability-icon" style={{ backgroundColor: color }} aria-hidden="true">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <span>{capability}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fare-hero-actions">
        <button type="button" className="fare-hero-primary" onClick={explore}>{data.buttons.primary}<ArrowRight size={18} aria-hidden="true" /></button>
        <button type="button" className="fare-hero-video" onClick={onPlay}><span><Play size={12} fill="currentColor" aria-hidden="true" /></span>{data.buttons.secondary}</button>
      </div>
    </div>
  );
}
