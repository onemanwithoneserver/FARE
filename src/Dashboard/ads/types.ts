import type { SponsorBrandId } from "./sponsorBrands";

export type AdSize =
  | "card"                // C: Course-card size logo thumbnail card
  | "leaderboard"         // J: Full-width horizontal leaderboard (220x100 logo)
  | "billboard"           // A: Dark navy logo billboard (160x110 logo)
  | "banner-strip"        // Slim horizontal sponsored bar
  | "sidebar-tower"       // Tall vertical brand card
  | "sidebar-widget"      // B: Warm cream sidebar logo card (full-width logo)
  | "sidebar-grid"        // G: Sidebar 2x2 logo grid
  | "hiring-wall"         // E: Hiring partners logo wall (5 x 150x80)
  | "hero-tile"           // F: Hero right course hiring partner tile
  | "program-sponsor"     // H: Program title sponsor (240x130 logo + partner row)
  | "quiz-pass"           // I: Quiz pass 3 logo cards
  | "in-grid-horizontal"  // K: In-grid horizontal logo card (160x130 logo)
  | "square"              // Symmetrical brand card
  | "compact-badge";      // Compact single-row inline widget

export interface SponsoredCardProps {
  /** Dimension & layout preset */
  size?: AdSize;
  /** Optional sponsor brand identity */
  brand?: SponsorBrandId;
  /** Explicit custom width override (e.g. 300, "320px", "100%") */
  width?: string | number;
  /** Explicit custom min-height override */
  height?: string | number;
  /** Badge / eyebrow text (defaults to "HIRING · SPONSORED") */
  label?: string;
  /** Headline override */
  title?: string;
  /** Optional micro-tagline / subtitle */
  tagline?: string;
  /** Optional extra Tailwind classes */
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
  /** Alignment override for child elements */
  align?: "center" | "between" | "start" | "end";
}
