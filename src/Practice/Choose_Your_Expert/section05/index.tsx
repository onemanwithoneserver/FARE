import type { Expert } from "./data";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  searchQuery?: string;
  sortBy?: string;
  filters?: ReadonlySet<string>;
  onClearFilters?: () => void;
  onBookExpert?: (expert: Expert) => void;
}

export default function Section05({ isMobile, searchQuery, sortBy, filters, onClearFilters, onBookExpert }: Props) {
  return isMobile ? (
    <Mobile searchQuery={searchQuery} sortBy={sortBy} filters={filters} onBookExpert={onBookExpert} />
  ) : (
    <Desktop
      searchQuery={searchQuery}
      sortBy={sortBy}
      filters={filters}
      onClearFilters={onClearFilters}
      onBookExpert={onBookExpert}
    />
  );
}
