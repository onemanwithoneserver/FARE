import HeroDesktop from "./desktop";
import HeroMobile from "./mobile";

export interface HeroSectionProps {
  isMobile?: boolean;
  companyName?: string;
  onConnect: () => void;
  onJumpToSection: (id: string) => void;
}

export default function HeroSection({
  isMobile = false,
  companyName,
  onConnect,
  onJumpToSection,
}: HeroSectionProps) {
  return isMobile ? (
    <HeroMobile
      companyName={companyName}
      onConnect={onConnect}
      onJumpToSection={onJumpToSection}
    />
  ) : (
    <HeroDesktop
      companyName={companyName}
      onConnect={onConnect}
      onJumpToSection={onJumpToSection}
    />
  );
}
