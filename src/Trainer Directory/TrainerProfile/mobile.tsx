import { useProfileText } from "../profileData";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import HeroMobile from "../section-01-hero/mobile";
import IntroVideoMobile from "../section-03-intro-video/mobile";
import TrainingExpertiseMobile from "../section-04-training-expertise/mobile";
import RESegmentExpertiseMobile from "../section-05-re-segment-expertise/mobile";
import TrainingModesFormatsMobile from "../section-07-training-modes-formats/mobile";
import OrganisationsTrainedMobile from "../section-08-organisations-trained/mobile";
import CaseStudiesMobile from "../section-09-case-studies/mobile";
import PreDefinedProgramsMobile from "../section-10-pre-defined-programs/mobile";

import TrainingImpactMobile from "../section-12-training-impact/mobile";
import TestimonialsMobile from "../section-13-testimonials/mobile";
import MediaShowcaseMobile from "../section-14-media-showcase/mobile";
import CredentialsVerificationMobile from "../section-15-credentials-verification/mobile";
import EngagementOptionsMobile from "../section-16-engagement-options/mobile";
import CorporateRequestFormMobile from "../section-17-corporate-request-form/mobile";

const GOLD_MID = "#D5AA45";

const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface TrainerProfileProps {
  isMobile: boolean;
  onBack: () => void;
  trainerId?: string;
}

export default function Mobile({ onBack }: TrainerProfileProps) {
  const t = useProfileText();
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#0B1D3A]/[0.02] flex flex-col font-['Outfit'] relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#8B5CF6]/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0 fixed" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0 fixed" />

      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={breadcrumbVariants}
        className="sticky top-0 z-30 backdrop-blur-2xl border-b px-4 py-2.5 flex items-center gap-3"
        style={{
          background: `linear-gradient(135deg, rgba(11,29,58,0.95) 0%, rgba(15,40,71,0.95) 100%)`,
          borderColor: "rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <button
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 rounded-[8px] transition-all duration-300 active:scale-90"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <ArrowLeft size={16} className="text-white/60" strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-1.5 text-[12px] font-medium overflow-hidden">
          <span
            onClick={onBack}
            className="text-white/35 cursor-pointer transition-colors duration-300 whitespace-nowrap"
          >
            {t("Directory")}
          </span>
          <ChevronRight size={11} className="text-white/20 shrink-0" strokeWidth={2} />
          <span
            className="font-bold truncate relative"
            style={{ color: GOLD_MID }}
          >
            {t("Rajesh Kumar")}
          </span>
        </div>
      </motion.div>

      <HeroMobile />
      <IntroVideoMobile />
      <TrainingExpertiseMobile />
      <RESegmentExpertiseMobile />
      <TrainingModesFormatsMobile />
      <OrganisationsTrainedMobile />
      <CaseStudiesMobile />
      <PreDefinedProgramsMobile />

      <TrainingImpactMobile />
      <TestimonialsMobile />
      <MediaShowcaseMobile />
      <CredentialsVerificationMobile />
      <EngagementOptionsMobile onRequestPricing={() => setIsRequestFormOpen(true)} />
      <CorporateRequestFormMobile isOpen={isRequestFormOpen} onClose={() => setIsRequestFormOpen(false)} />
    </div>
  );
}
