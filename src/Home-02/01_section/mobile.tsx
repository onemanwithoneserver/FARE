import { useState } from "react";
import { GraduationCap, LayoutDashboard } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import VideoModal from "../../Components/Forms/VideoModal";
import HeroIntro from "./HeroIntro";
import { getData } from "./data";

export default function Mobile() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { language } = useLanguage();
  const data = getData(language);
  const course = data.dashboard.stats[0];
  const skills = data.dashboard.stats[2];
  const habits = data.dashboard.stats[3];

  return (
    <section className="fare-hero-mobile">
      <HeroIntro mobile onPlay={() => setIsVideoModalOpen(true)} />
      <figure className="fare-mobile-preview">
        <figcaption>
          <span><LayoutDashboard size={13} aria-hidden="true" />{language === "te" ? "మీ లెర్నింగ్ స్పేస్" : "Your learning space"}</span>
          <span>{language === "te" ? "ప్రివ్యూ" : "PLATFORM PREVIEW"}</span>
        </figcaption>
        <h2>{data.dashboard.greeting}</h2>
        <p className="fare-mobile-preview-caption">{language === "te" ? "ప్రతిరోజూ ఒక అడుగు ముందుకు." : "A little progress. Every single day."}</p>
        <div className="fare-mobile-progress">
          <div className="fare-mobile-progress-heading"><GraduationCap size={18} aria-hidden="true" /><span>{course.label}</span><strong>{course.val}</strong></div>
          <div className="fare-mobile-progress-track" aria-hidden="true"><span style={{ width: `${course.progress}%` }} /></div>
          <small>{course.subtitle}</small>
        </div>
        <div className="fare-mobile-stats">
          <div><strong>{skills.val}</strong><span>{skills.label}</span></div>
          <div><strong>{habits.val}</strong><span>{habits.label}</span></div>
        </div>
      </figure>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
