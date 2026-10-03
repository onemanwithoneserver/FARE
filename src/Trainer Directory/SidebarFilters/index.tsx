import Desktop from './desktop';
import Mobile from './mobile';
import type { SidebarFiltersProps } from './desktop';

export type { FilterKey, FilterState, SidebarFiltersProps } from './desktop';
export { emptyFilters, filterSections } from './desktop';

export default function SidebarFilters(props: SidebarFiltersProps & { isMobile?: boolean }) {
  return props.isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}
