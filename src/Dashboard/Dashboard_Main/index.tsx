import Desktop from "./desktop";
import Mobile from "./mobile";

export interface DashboardMainProps {
  isMobile?: boolean;
  hideSidebar?: boolean;
}

export default function DashboardMain({
  isMobile = false,
  hideSidebar = false,
}: DashboardMainProps) {
  return isMobile ? <Mobile /> : <Desktop hideSidebar={hideSidebar} />;
}

export { Desktop as DashboardMainDesktop, Mobile as DashboardMainMobile };
export type { MetricCardData, ZoneSummary, QuickActionItem } from "./data";
