import { useState } from "react";
import VideoModal from "../../Components/Forms/VideoModal";
import HeroIntro from "./HeroIntro";
import DashboardPreview from "./DashboardPreview";

export default function Mobile() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="fare-hero-mobile">
      <HeroIntro mobile onPlay={() => setIsVideoModalOpen(true)} />
      <DashboardPreview mobile />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
