import Desktop, { type ToolbarProps } from "./desktop";
import Mobile from "./mobile";

interface Props extends ToolbarProps {
  isMobile: boolean;
}

export default function Section04({ isMobile, ...props }: Props) {
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}
