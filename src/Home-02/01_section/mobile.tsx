import { useState } from "react";
import VideoModal from "../../Components/Forms/VideoModal";
import HeroIntro from "./HeroIntro";
import DashboardPreview from "./DashboardPreview";

export default function Mobile() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      className="w-full px-3.5 pt-3 pb-8 relative overflow-hidden font-['Outfit'] text-[#0B1D3A]"
      style={{
        background: "radial-gradient(ellipse at 90% 10%, rgba(238, 231, 212, 0.25), transparent 48%), linear-gradient(145deg, #FFFEFA, #F4F7FB)",
      }}
    >
      <HeroIntro mobile onPlay={() => setIsVideoModalOpen(true)} />
      <DashboardPreview mobile />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
