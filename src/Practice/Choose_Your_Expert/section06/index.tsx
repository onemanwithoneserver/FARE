import type { Expert } from "../section05/data";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  onBookExpert?: (expert: Expert) => void;
}

export default function Section06({ isMobile, onBookExpert }: Props) {
  return isMobile ? <Mobile onBookExpert={onBookExpert} /> : <Desktop onBookExpert={onBookExpert} />;
}
