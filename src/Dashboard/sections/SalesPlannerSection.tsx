export interface SalesPlannerSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function SalesPlannerSection(_props: SalesPlannerSectionProps = {}) {
  return <div className="w-full min-h-screen bg-white" />;
}
