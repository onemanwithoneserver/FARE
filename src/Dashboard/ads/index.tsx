import SponsoredCard from "./SponsoredCard";
import BrandLogoTile from "./BrandLogoTile";
import { SPONSOR_BRANDS, type SponsorBrandId, type SponsorBrandConfig } from "./sponsorBrands";
import type { SponsoredCardProps, AdSize } from "./types";

export type { SponsoredCardProps, AdSize, SponsorBrandId, SponsorBrandConfig };
export { SponsoredCard, BrandLogoTile, SPONSOR_BRANDS };
export default SponsoredCard;

// Convenience size wrappers for clean semantic usage across pages
export const InGridCardAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="card" {...props} />
);

export const LeaderboardAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="leaderboard" {...props} />
);

export const BillboardAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="billboard" {...props} />
);

export const BannerStripAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="banner-strip" {...props} />
);

export const SidebarTowerAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="sidebar-tower" {...props} />
);

export const SidebarWidgetAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="sidebar-widget" {...props} />
);

export const SidebarLogoGridAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="sidebar-grid" {...props} />
);

export const HiringPartnersWallAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="hiring-wall" {...props} />
);

export const HeroSponsorTileAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="hero-tile" {...props} />
);

export const ProgramTitleSponsorAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="program-sponsor" {...props} />
);

export const QuizPassCardsAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="quiz-pass" {...props} />
);

export const InGridHorizontalLogoAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="in-grid-horizontal" {...props} />
);

export const SquareAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="square" {...props} />
);

export const CompactBadgeAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="compact-badge" {...props} />
);
