export interface FilterPanelProps {
  selected?: ReadonlySet<string>;
  onToggle?: (option: string) => void;
  onClear?: () => void;
  resultCount?: number;
  compact?: boolean;
}

export default function FilterPanel(_props: FilterPanelProps) {
  return null;
}
