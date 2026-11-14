import DesktopSidebar, { type DesktopSidebarProps } from "./desktop";
import MobileSidebar, { type MobileSidebarProps } from "./mobile";

export interface SidebarProps extends DesktopSidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  isMobile = false,
  isOpen = false,
  onClose = () => {},
  ...props
}: SidebarProps) {
  if (isMobile) {
    return <MobileSidebar isOpen={isOpen} onClose={onClose} {...props} />;
  }

  return <DesktopSidebar {...props} />;
}

export { DesktopSidebar, MobileSidebar };
export type { DesktopSidebarProps, MobileSidebarProps };
