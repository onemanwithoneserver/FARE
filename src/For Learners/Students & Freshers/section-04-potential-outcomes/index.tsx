import Desktop from './desktop';
import Mobile from './mobile';

export default function Section04({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}