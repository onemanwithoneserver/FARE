import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Home02({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
