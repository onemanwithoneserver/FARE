import HeroDesktop from "./section-01-hero/desktop";
import HeroMobile from "./section-01-hero/mobile";
import AboutDesktop from "./section-02-about/desktop";
import AboutMobile from "./section-02-about/mobile";
import IntroVideoDesktop from "./section-03-intro-video/desktop";
import IntroVideoMobile from "./section-03-intro-video/mobile";
import TrainingExpertiseDesktop from "./section-04-training-expertise/desktop";
import TrainingExpertiseMobile from "./section-04-training-expertise/mobile";
import RESegmentExpertiseDesktop from "./section-05-re-segment-expertise/desktop";
import RESegmentExpertiseMobile from "./section-05-re-segment-expertise/mobile";
import TrainingModesFormatsDesktop from "./section-07-training-modes-formats/desktop";
import TrainingModesFormatsMobile from "./section-07-training-modes-formats/mobile";
import OrganisationsTrainedDesktop from "./section-08-organisations-trained/desktop";
import OrganisationsTrainedMobile from "./section-08-organisations-trained/mobile";
import CaseStudiesDesktop from "./section-09-case-studies/desktop";
import CaseStudiesMobile from "./section-09-case-studies/mobile";
import PreDefinedProgramsDesktop from "./section-10-pre-defined-programs/desktop";
import PreDefinedProgramsMobile from "./section-10-pre-defined-programs/mobile";
import TrainingMethodologyDesktop from "./section-11-training-methodology/desktop";
import TrainingMethodologyMobile from "./section-11-training-methodology/mobile";
import TrainingImpactDesktop from "./section-12-training-impact/desktop";
import TrainingImpactMobile from "./section-12-training-impact/mobile";
import TestimonialsDesktop from "./section-13-testimonials/desktop";
import TestimonialsMobile from "./section-13-testimonials/mobile";
import MediaShowcaseDesktop from "./section-14-media-showcase/desktop";
import MediaShowcaseMobile from "./section-14-media-showcase/mobile";
import CredentialsVerificationDesktop from "./section-15-credentials-verification/desktop";
import CredentialsVerificationMobile from "./section-15-credentials-verification/mobile";
import EngagementOptionsDesktop from "./section-16-engagement-options/desktop";
import EngagementOptionsMobile from "./section-16-engagement-options/mobile";
import CorporateRequestFormDesktop from "./section-17-corporate-request-form/desktop";
import CorporateRequestFormMobile from "./section-17-corporate-request-form/mobile";

interface TrainerProfileProps {
  isMobile: boolean;
  onBack: () => void;
  trainerId?: string;
}

export default function TrainerProfile({ isMobile, onBack }: TrainerProfileProps) {
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

      {isMobile ? <HeroMobile /> : <HeroDesktop />}
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
      {isMobile ? <IntroVideoMobile /> : <IntroVideoDesktop />}
      {isMobile ? <TrainingExpertiseMobile /> : <TrainingExpertiseDesktop />}
      {isMobile ? <RESegmentExpertiseMobile /> : <RESegmentExpertiseDesktop />}
      {isMobile ? <TrainingModesFormatsMobile /> : <TrainingModesFormatsDesktop />}
      {isMobile ? <OrganisationsTrainedMobile /> : <OrganisationsTrainedDesktop />}
      {isMobile ? <CaseStudiesMobile /> : <CaseStudiesDesktop />}
      {isMobile ? <PreDefinedProgramsMobile /> : <PreDefinedProgramsDesktop />}
      {isMobile ? <TrainingMethodologyMobile /> : <TrainingMethodologyDesktop />}
      {isMobile ? <TrainingImpactMobile /> : <TrainingImpactDesktop />}
      {isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />}
      {isMobile ? <MediaShowcaseMobile /> : <MediaShowcaseDesktop />}
      {isMobile ? <CredentialsVerificationMobile /> : <CredentialsVerificationDesktop />}
      {isMobile ? <EngagementOptionsMobile /> : <EngagementOptionsDesktop />}
      {isMobile ? <CorporateRequestFormMobile /> : <CorporateRequestFormDesktop />}
    </div>
  );
}
