import AdBanner, { type AdVariant } from "./AdBanner";

export interface CourseAdBannerProps {
  variant?: "breakout" | "card" | "inline";
  badge?: string;
  subBadge?: string;
  commissionBadge?: string;
  partnerName?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  primaryActionText?: string;
  secondaryActionText?: string;
  onApplyNow?: () => void;
  onJoinNow?: () => void;
  className?: string;
}

export default function CourseAdBanner({
  variant = "breakout",
  badge = "SPONSORED",
  primaryActionText = "Apply Now",
  secondaryActionText = "Join Now",
  onApplyNow,
  onJoinNow,
  className = "",
}: CourseAdBannerProps) {
  const adVariant: AdVariant =
    variant === "card" ? "card" : variant === "inline" ? "inline" : "banner";

  return (
    <AdBanner
      variant={adVariant}
      label={badge && badge.toUpperCase().includes("SPONSORED") ? "SPONSORED" : "SPONSORED"}
      primaryCtaText={primaryActionText}
      secondaryCtaText={secondaryActionText}
      onApply={onApplyNow}
      onJoin={onJoinNow}
      className={className}
    />
  );
}
