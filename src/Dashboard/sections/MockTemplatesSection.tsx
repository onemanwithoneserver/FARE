export interface MockTemplatesSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function MockTemplatesSection(_props: MockTemplatesSectionProps = {}) {
  return <div className="w-full min-h-screen bg-white" />;
}
