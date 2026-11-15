import SponsoredCard from "../ads/SponsoredCard";
import type { AdSize } from "../ads/types";

export type AdVariant =
  | "leaderboard" // wide horizontal banner (~728x90)
  | "banner"      // standard page banner
  | "inline"      // slim horizontal strip
  | "card"        // medium rectangle / card (~300x250)
  | "rectangle"   // flexible box
  | "sidebar"     // vertical tower for sidebars
  | "progress"    // tailored for progress milestones
  | "quiz-end";   // tailored for quiz finish screen

export interface AdBannerProps {
  /** Label shown in the badge: "SPONSORED", "SPONSORED AD", "ADVERTISEMENT", etc. */
  label?: string;
  /** Layout / dimension preset */
  variant?: AdVariant;
  /** Custom width (e.g. "100%", 300, "320px") */
  width?: string | number;
  /** Custom height (e.g. "100px", 90, "250px") */
  height?: string | number;
  /** Additional custom classes */
  className?: string;
  /** Whether to show CTA controls (defaults to true) */
  showControls?: boolean;
  /** Primary CTA button text (defaults to "Apply Now") */
  primaryCtaText?: string;
  /** Secondary CTA button text (defaults to "View Company") */
  secondaryCtaText?: string;
  /** Primary CTA click handler */
  onApply?: () => void;
  /** Secondary CTA click handler */
  onJoin?: () => void;
}

export default function AdBanner({
  variant = "banner",
  ...props
}: AdBannerProps) {
  const mapVariantToSize = (v: AdVariant): AdSize => {
    switch (v) {
      case "card":
      case "rectangle":
        return "card";
      case "sidebar":
        return "sidebar-widget";
      case "inline":
        return "banner-strip";
      case "leaderboard":
        return "leaderboard";
      case "banner":
      case "progress":
      case "quiz-end":
      default:
        return "leaderboard";
    }
  };

  return <SponsoredCard size={mapVariantToSize(variant)} {...props} />;
}
