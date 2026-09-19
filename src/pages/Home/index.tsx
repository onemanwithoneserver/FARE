import HomeDesktop from "./desktop";
import HomeMobile from "./mobile";

export default function Home({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
