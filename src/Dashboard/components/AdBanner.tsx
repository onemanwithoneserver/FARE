import SponsoredCard from "../ads/SponsoredCard";
import type { SponsorBrandId } from "../ads/sponsorBrands";
import type { AdSize } from "../ads/types";

export type AdVariant =
  | "leaderboard"        // Format J: wide horizontal dark banner with Kalpavana logo
  | "banner"             // standard leaderboard / billboard banner
  | "billboard"          // Format A: dark navy billboard with Northstone logo
  | "inline"             // compact strip
  | "card"               // Format C: course-card size logo thumbnail card
  | "rectangle"          // flexible box
  | "sidebar"            // Format B: warm cream sidebar logo card
  | "sidebar-grid"       // Format G: 2x2 sidebar logo grid
  | "hiring-wall"        // Format E: 5-logo hiring partners wall
  | "hero-tile"          // Format F: white hero sponsor tile
  | "program-sponsor"    // Format H: program title sponsor (240x130 logo + partner row)
  | "quiz-pass"          // Format I: quiz pass 3 logo cards
  | "in-grid-horizontal" // Format K: horizontal in-grid logo card
  | "progress"           // tailored for progress milestones
  | "quiz-end";          // tailored for quiz finish screen (Format I)

export interface AdBannerProps {
  /** Label shown in eyebrow / badge */
  label?: string;
  /** Optional headline text */
  title?: string;
  /** Optional sponsor brand override */
  brand?: SponsorBrandId;
  /** Optional subtitle / micro-tagline */
  tagline?: string;
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
  /** Primary CTA button text */
  primaryCtaText?: string;
  /** Secondary CTA button text */
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
      case "sidebar-grid":
        return "sidebar-grid";
      case "hiring-wall":
        return "hiring-wall";
      case "hero-tile":
        return "hero-tile";
      case "program-sponsor":
        return "program-sponsor";
      case "quiz-pass":
      case "quiz-end":
        return "quiz-pass";
      case "in-grid-horizontal":
        return "in-grid-horizontal";
      case "billboard":
        return "billboard";
      case "inline":
        return "banner-strip";
      case "leaderboard":
      case "banner":
      case "progress":
      default:
        return "leaderboard";
    }
  };

  return <SponsoredCard size={mapVariantToSize(variant)} {...props} />;
}
