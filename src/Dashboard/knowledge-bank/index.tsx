import Desktop from "./desktop";
import Mobile from "./mobile";

export interface KnowledgeBankProps {
  isMobile?: boolean;
}

export default function KnowledgeBank({ isMobile }: KnowledgeBankProps) {
  return isMobile ? <Mobile /> : <Desktop />;
}
