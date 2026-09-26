import Desktop from '../desktop/desktop';
import Mobile from '../mobile/mobile';

export default function Section04({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}