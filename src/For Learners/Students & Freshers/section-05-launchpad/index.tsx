import Desktop from './desktop';
import Mobile from './mobile';

export default function Section05({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}