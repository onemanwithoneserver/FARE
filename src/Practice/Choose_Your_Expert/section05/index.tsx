import type { Expert } from "./data";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  searchQuery?: string;
  sortBy?: string;
  onBookExpert?: (expert: Expert) => void;
}

export default function Section05({ isMobile, searchQuery, sortBy, onBookExpert }: Props) {
  return isMobile ? (
    <Mobile searchQuery={searchQuery} sortBy={sortBy} onBookExpert={onBookExpert} />
  ) : (
    <Desktop searchQuery={searchQuery} sortBy={sortBy} onBookExpert={onBookExpert} />
  );
}
