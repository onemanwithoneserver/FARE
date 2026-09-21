import Desktop from './desktop';
import Mobile from './mobile';

export default function Footer({ isMobile }: { isMobile?: boolean }) {
    return isMobile ? <Mobile /> : <Desktop />;
}
