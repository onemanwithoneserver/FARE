import FaqsDesktop from "./desktop";
import FaqsMobile from "./mobile";

export interface FaqsSectionProps {
  isMobile?: boolean;
  onConnectLiaison: () => void;
  onBack?: () => void;
}

export default function FaqsSection({
  isMobile = false,
  onConnectLiaison,
  onBack,
}: FaqsSectionProps) {
  return isMobile ? (
    <FaqsMobile onConnectLiaison={onConnectLiaison} onBack={onBack} />
  ) : (
    <FaqsDesktop onConnectLiaison={onConnectLiaison} onBack={onBack} />
  );
}
