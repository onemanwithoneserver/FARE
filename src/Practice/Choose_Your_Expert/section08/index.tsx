import type { Expert } from "../section05/data";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isMobile: boolean;
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

export default function Section08({ isMobile, selectedExpert, onSelectExpert }: Props) {
  return isMobile ? (
    <Mobile selectedExpert={selectedExpert} onSelectExpert={onSelectExpert} />
  ) : (
    <Desktop selectedExpert={selectedExpert} onSelectExpert={onSelectExpert} />
  );
}
