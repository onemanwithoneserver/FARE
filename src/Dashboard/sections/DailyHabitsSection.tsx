export interface DailyHabitsSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function DailyHabitsSection(_props: DailyHabitsSectionProps = {}) {
  return <div className="w-full min-h-screen bg-white" />;
}
