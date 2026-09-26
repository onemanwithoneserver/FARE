import Desktop from '../desktop/desktop';
import Mobile from '../mobile/mobile';

export default function Section07({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}