import Desktop from './desktop';
import Mobile from './mobile';

export interface TrainerProfileProps {

  isMobile: boolean;
  onBack: () => void;
  trainerId?: string;
}

export default function TrainerProfile(props: TrainerProfileProps) {
  return props.isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}
