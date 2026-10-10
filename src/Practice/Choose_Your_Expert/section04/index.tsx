import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount?: number;
}

export default function Section04({
  isMobile,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  return isMobile ? (
    <Mobile
      searchQuery={searchQuery}
      onSearchChange={onSearchChange}
      sortBy={sortBy}
      onSortChange={onSortChange}
      totalCount={totalCount}
    />
  ) : (
    <Desktop
      searchQuery={searchQuery}
      onSearchChange={onSearchChange}
      sortBy={sortBy}
      onSortChange={onSortChange}
      totalCount={totalCount}
    />
  );
}
