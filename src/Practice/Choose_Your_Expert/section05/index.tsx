import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  searchQuery?: string;
  sortBy?: string;
}

export default function Section05({ isMobile, searchQuery, sortBy }: Props) {
  return isMobile ? (
    <Mobile searchQuery={searchQuery} sortBy={sortBy} />
  ) : (
    <Desktop searchQuery={searchQuery} sortBy={sortBy} />
  );
}
