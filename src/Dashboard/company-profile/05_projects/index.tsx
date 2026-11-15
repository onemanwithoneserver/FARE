import ProjectsDesktop from "./desktop";
import ProjectsMobile from "./mobile";

export interface ProjectsSectionProps {
  isMobile?: boolean;
  onInquireProject: (projectTitle: string) => void;
  onOpenBrochure?: () => void;
}

export default function ProjectsSection({
  isMobile = false,
  onInquireProject,
  onOpenBrochure,
}: ProjectsSectionProps) {
  return isMobile ? (
    <ProjectsMobile
      onInquireProject={onInquireProject}
      onOpenBrochure={onOpenBrochure}
    />
  ) : (
    <ProjectsDesktop
      onInquireProject={onInquireProject}
      onOpenBrochure={onOpenBrochure}
    />
  );
}
