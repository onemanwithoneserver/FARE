import HeroDesktop from "../section-01-hero/desktop";
import AboutDesktop from "../section-02-about/desktop";
import IntroVideoDesktop from "../section-03-intro-video/desktop";
import TrainingExpertiseDesktop from "../section-04-training-expertise/desktop";
import RESegmentExpertiseDesktop from "../section-05-re-segment-expertise/desktop";
import TrainingModesFormatsDesktop from "../section-07-training-modes-formats/desktop";
import OrganisationsTrainedDesktop from "../section-08-organisations-trained/desktop";
import CaseStudiesDesktop from "../section-09-case-studies/desktop";
import PreDefinedProgramsDesktop from "../section-10-pre-defined-programs/desktop";
import TrainingMethodologyDesktop from "../section-11-training-methodology/desktop";
import TrainingImpactDesktop from "../section-12-training-impact/desktop";
import TestimonialsDesktop from "../section-13-testimonials/desktop";
import MediaShowcaseDesktop from "../section-14-media-showcase/desktop";
import CredentialsVerificationDesktop from "../section-15-credentials-verification/desktop";
import EngagementOptionsDesktop from "../section-16-engagement-options/desktop";
import CorporateRequestFormDesktop from "../section-17-corporate-request-form/desktop";

interface TrainerProfileProps {
  isMobile: boolean;
  onBack: () => void;
  trainerId?: string;
}

export default function Desktop({ onBack }: TrainerProfileProps) {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFD] flex flex-col font-['Outfit'] relative">
      <div
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#0B1D3A]/[0.06] px-6 lg:px-12 py-3.5 flex items-center justify-between"
        style={{
          boxShadow: "0 2px 8px -2px rgba(11, 29, 58, 0.05), 0 4px 12px -4px rgba(11, 29, 58, 0.03)",
        }}
      >
        <div className="flex items-center gap-2 text-[13px] text-[#7B8DAA] font-medium">
          <span onClick={onBack} className="hover:text-[#0B1D3A] cursor-pointer transition-colors duration-200">Home</span>
          <span className="text-[#0B1D3A]/20">/</span>
          <span onClick={onBack} className="hover:text-[#0B1D3A] cursor-pointer transition-colors duration-200">Trainer Directory</span>
          <span className="text-[#0B1D3A]/20">/</span>
          <span className="text-[#0B1D3A] font-bold">Rajesh Kumar</span>
        </div>
      </div>

      <HeroDesktop />
      <AboutDesktop />
      <IntroVideoDesktop />
      <TrainingExpertiseDesktop />
      <RESegmentExpertiseDesktop />
      <TrainingModesFormatsDesktop />
      <OrganisationsTrainedDesktop />
      <CaseStudiesDesktop />
      <PreDefinedProgramsDesktop />
      <TrainingMethodologyDesktop />
      <TrainingImpactDesktop />
      <TestimonialsDesktop />
      <MediaShowcaseDesktop />
      <CredentialsVerificationDesktop />
      <EngagementOptionsDesktop />
      <CorporateRequestFormDesktop />
    </div>
  );
}
