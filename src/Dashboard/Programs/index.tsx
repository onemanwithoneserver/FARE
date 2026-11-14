import Desktop from "./desktop";
import Mobile from "./mobile";

export interface ProgramsProps {
  isMobile?: boolean;
  hideSidebar?: boolean;
}

export default function Programs({
  isMobile = false,
  hideSidebar = false,
}: ProgramsProps) {
  return isMobile ? <Mobile /> : <Desktop hideSidebar={hideSidebar} />;
}

export { Desktop as ProgramsDesktop, Mobile as ProgramsMobile };
export { default as ProgramDetail } from "./ProgramDetail";
export type { ProgramItem, ProgramStep } from "./data";
