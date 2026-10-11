import Desktop from "./desktop";
import Mobile from "./mobile";
import type { FilterPanelProps } from "./panel";

interface Props extends FilterPanelProps {
  isMobile: boolean;
}

export default function Section03({ isMobile, ...panel }: Props) {
  return isMobile ? <Mobile {...panel} /> : <Desktop {...panel} />;
}
