import CareersDesktop from "./desktop";
import CareersMobile from "./mobile";

export interface CareersSectionProps {
  isMobile?: boolean;
  onApplyCareer: (jobTitle: string) => void;
}

export default function CareersSection({
  isMobile = false,
  onApplyCareer,
}: CareersSectionProps) {
  return isMobile ? (
    <CareersMobile onApplyCareer={onApplyCareer} />
  ) : (
    <CareersDesktop onApplyCareer={onApplyCareer} />
  );
}
