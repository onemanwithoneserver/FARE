import SponsoredCard from "./SponsoredCard";
import type { SponsoredCardProps, AdSize } from "./types";

export type { SponsoredCardProps, AdSize };
export { SponsoredCard };
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

export const SquareAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="square" {...props} />
);

export const CompactBadgeAd = (props: Omit<SponsoredCardProps, "size">) => (
  <SponsoredCard size="compact-badge" {...props} />
);
