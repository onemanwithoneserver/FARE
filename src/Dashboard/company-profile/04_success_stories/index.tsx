import SuccessStoriesDesktop from "./desktop";
import SuccessStoriesMobile from "./mobile";

export interface SuccessStoriesSectionProps {
  isMobile?: boolean;
}

export default function SuccessStoriesSection({
  isMobile = false,
}: SuccessStoriesSectionProps) {
  return isMobile ? <SuccessStoriesMobile /> : <SuccessStoriesDesktop />;
}
