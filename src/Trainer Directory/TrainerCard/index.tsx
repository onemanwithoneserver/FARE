import type { Trainer } from '../listing_data';
import Desktop from './desktop';
import Mobile from './mobile';

export interface TrainerCardProps {
  isMobile?: boolean;
  trainer: Trainer;
  onViewProfile: () => void;
  layoutVariant?: "grid" | "list";
}

export default function TrainerCard(props: TrainerCardProps) {
  return props.isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}
