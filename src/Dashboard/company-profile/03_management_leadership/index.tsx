import ManagementLeadershipDesktop from "./desktop";
import ManagementLeadershipMobile from "./mobile";

export interface ManagementLeadershipSectionProps {
  isMobile?: boolean;
}

export default function ManagementLeadershipSection({
  isMobile = false,
}: ManagementLeadershipSectionProps) {
  return isMobile ? (
    <ManagementLeadershipMobile />
  ) : (
    <ManagementLeadershipDesktop />
  );
}
