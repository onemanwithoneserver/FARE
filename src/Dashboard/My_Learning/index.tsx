import MyLearningDesktop, { type MyLearningDesktopProps } from "./desktop";
import MyLearningMobile, { type MyLearningMobileProps } from "./mobile";

export interface MyLearningProps extends MyLearningDesktopProps, MyLearningMobileProps {
  isMobile?: boolean;
}

export default function MyLearning({
  isMobile = false,
  ...props
}: MyLearningProps) {
  if (isMobile) {
    return <MyLearningMobile {...props} />;
  }

  return <MyLearningDesktop {...props} />;
}

export { MyLearningDesktop, MyLearningMobile };
export type { MyLearningDesktopProps, MyLearningMobileProps };
