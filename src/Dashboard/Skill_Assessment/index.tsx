import Desktop from "./desktop";
import Mobile from "./mobile";

export interface SkillAssessmentProps {
  isMobile?: boolean;
  hideSidebar?: boolean;
}

export default function SkillAssessment({
  isMobile = false,
  hideSidebar = false,
}: SkillAssessmentProps) {
  return isMobile ? <Mobile /> : <Desktop hideSidebar={hideSidebar} />;
}

export { Desktop as SkillAssessmentDesktop, Mobile as SkillAssessmentMobile };
export type { SkillSpecialization, SkillStat, SkillFilterOption } from "./data";
