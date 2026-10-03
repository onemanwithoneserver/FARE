import { useProfileText } from "../profileData";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import HeroDesktop from "../section-01-hero/desktop";
import IntroVideoDesktop from "../section-03-intro-video/desktop";
import TrainingExpertiseDesktop from "../section-04-training-expertise/desktop";
import RESegmentExpertiseDesktop from "../section-05-re-segment-expertise/desktop";
import TrainingModesFormatsDesktop from "../section-07-training-modes-formats/desktop";
import OrganisationsTrainedDesktop from "../section-08-organisations-trained/desktop";
import CaseStudiesDesktop from "../section-09-case-studies/desktop";
import PreDefinedProgramsDesktop from "../section-10-pre-defined-programs/desktop";

import TrainingImpactDesktop from "../section-12-training-impact/desktop";
import TestimonialsDesktop from "../section-13-testimonials/desktop";
import MediaShowcaseDesktop from "../section-14-media-showcase/desktop";
import CredentialsVerificationDesktop from "../section-15-credentials-verification/desktop";
import EngagementOptionsDesktop from "../section-16-engagement-options/desktop";
import CorporateRequestFormDesktop from "../section-17-corporate-request-form/desktop";

const GOLD = "#C99A2E";
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

export default function Desktop({ onBack }: TrainerProfileProps) {
  const t = useProfileText();
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#0B1D3A]/[0.02] flex flex-col font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#8B5CF6]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-0 fixed" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-0 fixed" />

      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={breadcrumbVariants}
        className="sticky top-0 z-30 backdrop-blur-2xl border-b px-6 lg:px-12 py-3 flex items-center justify-between"
        style={{
          background: `linear-gradient(135deg, rgba(11,29,58,0.95) 0%, rgba(15,40,71,0.95) 100%)`,
          borderColor: "rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)",
        }}
      >
        
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-8 h-8 rounded-[8px] transition-all duration-300 hover:bg-white/10 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ArrowLeft size={16} className="text-white/60" strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span
              onClick={onBack}
              className="text-white/40 hover:text-white/70 cursor-pointer transition-all duration-300 ease-out"
            >
              {t("Home")}
            </span>
            <ChevronRight size={12} className="text-white/20" strokeWidth={2} />
            <span
              onClick={onBack}
              className="text-white/40 hover:text-white/70 cursor-pointer transition-all duration-300 ease-out"
            >
              {t("Trainer Directory")}
            </span>
            <ChevronRight size={12} className="text-white/20" strokeWidth={2} />
            <span
              className="font-bold relative"
              style={{ color: GOLD_MID }}
            >
              {t("Rajesh Kumar")}
              
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_MID}, ${GOLD}80, transparent)`,
                }}
              />
            </span>
          </div>
        </div>

        
        <div
          className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em]"
          style={{
            background: `rgba(201,154,46,0.08)`,
            border: `1px solid ${GOLD}20`,
            color: `${GOLD_MID}`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD_MID }} />
          {t("Trainer Profile")}
        </div>
      </motion.div>

      <HeroDesktop />
      <IntroVideoDesktop />
      <TrainingExpertiseDesktop />
      <RESegmentExpertiseDesktop />
      <TrainingModesFormatsDesktop />
      <OrganisationsTrainedDesktop />
      <CaseStudiesDesktop />
      <PreDefinedProgramsDesktop />

      <TrainingImpactDesktop />
      <TestimonialsDesktop />
      <MediaShowcaseDesktop />
      <CredentialsVerificationDesktop />
      <EngagementOptionsDesktop onRequestPricing={() => setIsRequestFormOpen(true)} />
      <CorporateRequestFormDesktop isOpen={isRequestFormOpen} onClose={() => setIsRequestFormOpen(false)} />
    </div>
  );
}
