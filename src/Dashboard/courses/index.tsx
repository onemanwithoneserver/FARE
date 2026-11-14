import Desktop from "./desktop";
import Mobile from "./mobile";

export interface CoursesDashboardProps {
  isMobile?: boolean;
}

export default function CoursesDashboard({ isMobile }: CoursesDashboardProps) {
  return isMobile ? <Mobile /> : <Desktop />;
}
