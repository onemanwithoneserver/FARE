import Desktop from './desktop';
import Mobile from './mobile';

export default function Section07({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}