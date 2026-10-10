import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
}

export default function Section06({ isMobile }: Props) {
  return isMobile ? <Mobile /> : <Desktop />;
}
