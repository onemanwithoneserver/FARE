import Desktop from './desktop';
import Mobile from './mobile';

export default function SidebarFilters(props: any) {
  return props.isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}
