import AboutUsDesktop from "./desktop";
import AboutUsMobile from "./mobile";
import type { CompanyVideoItem } from "./data";

export interface AboutUsSectionProps {
  isMobile?: boolean;
  onOpenVideo: (video: CompanyVideoItem) => void;
}

export default function AboutUsSection({
  isMobile = false,
  onOpenVideo,
}: AboutUsSectionProps) {
  return isMobile ? (
    <AboutUsMobile onOpenVideo={onOpenVideo} />
  ) : (
    <AboutUsDesktop onOpenVideo={onOpenVideo} />
  );
}
