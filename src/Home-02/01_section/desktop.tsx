import { motion } from "motion/react";
import { useState } from "react";
import HeroIntro from "./HeroIntro";
import DashboardPreview from "./DashboardPreview";
import VideoModal from "../../Components/Forms/VideoModal";

const GOLD = "#C99A2E";

export default function Desktop() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <section
      className="w-full flex items-center justify-center overflow-hidden relative shrink-0 font-['Outfit'] text-[#0B1D3A] py-6 sm:py-8"
      style={{
        background: "radial-gradient(ellipse at 90% 10%, rgba(238, 231, 212, 0.25), transparent 48%), linear-gradient(145deg, #FFFEFA, #F4F7FB)",
      }}
    >
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>
      
      <motion.div 
        className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-[#C99A2E] blur-[1px] animate-float-delayed z-0 pointer-events-none"
        style={{ boxShadow: '0 0 10px rgba(201,154,46,0.6)' }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-[#6366F1] blur-[1px] animate-float-delayed-2 z-0 pointer-events-none"
        style={{ boxShadow: '0 0 8px rgba(99,102,241,0.6)' }}
      />
      <svg
        className="absolute top-20 left-[10%] w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M50 350 Q200 50 350 350"
          stroke={GOLD}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-20 right-[5%] w-[300px] h-[300px] opacity-[0.04] pointer-events-none z-0"
        viewBox="0 0 300 300"
        fill="none"
      >
        <circle
          cx="150"
          cy="150"
          r="140"
          stroke={GOLD}
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(390px,0.92fr)_minmax(0,1.2fr)] items-center gap-8 xl:gap-12 w-full max-w-[1440px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        <HeroIntro onPlay={() => setIsVideoModalOpen(true)} />
        <DashboardPreview />
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}