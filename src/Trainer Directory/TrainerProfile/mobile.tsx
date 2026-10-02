import { motion, type Variants } from "motion/react";
import HeroMobile from "../section-01-hero/mobile";
import AboutMobile from "../section-02-about/mobile";
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

const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

interface TrainerProfileProps {
  isMobile: boolean;
  onBack: () => void;
  trainerId?: string;
}

export default function Mobile({ onBack }: TrainerProfileProps) {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFD] flex flex-col font-['Outfit'] relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={breadcrumbVariants}
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#0B1D3A]/[0.06] px-6 lg:px-12 py-3.5 flex items-center justify-between shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
      >
        <div className="flex items-center gap-2 text-[13px] text-[#7B8DAA] font-medium">
          <span onClick={onBack} className="hover:text-[#0B1D3A] cursor-pointer transition-all duration-300 ease-out">Home</span>
          <span className="text-[#0B1D3A]/20">/</span>
          <span onClick={onBack} className="hover:text-[#0B1D3A] cursor-pointer transition-all duration-300 ease-out">Trainer Directory</span>
          <span className="text-[#0B1D3A]/20">/</span>
          <span className="text-[#0B1D3A] font-bold">Rajesh Kumar</span>
        </div>
      </motion.div>

      <HeroMobile />
      <AboutMobile />
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
      <EngagementOptionsMobile />
      <CorporateRequestFormMobile />
    </div>
  );
}
