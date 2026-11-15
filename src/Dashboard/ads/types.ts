export type AdSize =
  | "card"            // Medium Rectangle / In-Grid Card (~300-360px width, min-h-[290px])
  | "leaderboard"     // Wide horizontal page banner (~728x90 or full width x 88px)
  | "billboard"       // Prominent wide showcase banner (~970x160 or full width x 140px)
  | "banner-strip"    // Slim horizontal strip (~64px-76px height)
  | "sidebar-tower"   // Tall vertical tower (~300x600 or min-h-[380px])
  | "sidebar-widget"  // Medium vertical card (~160px-220px height)
  | "square"          // Symmetrical box (~260x260 or 300x300)
  | "compact-badge";  // Compact single-row widget (~42px-48px height)

export interface SponsoredCardProps {
  /** Dimension & layout preset */
  size?: AdSize;
  /** Explicit custom width override (e.g. 300, "320px", "100%") */
  width?: string | number;
  /** Explicit custom height override (e.g. 250, "160px", "100%") */
  height?: string | number;
  /** Badge text (defaults to "SPONSORED") */
  label?: string;
  /** Optional micro-tagline for wide/billboard formats */
  tagline?: string;
  /** Optional extra Tailwind classes */
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
  /** Alignment override for child elements */
  align?: "center" | "between" | "start" | "end";
}
