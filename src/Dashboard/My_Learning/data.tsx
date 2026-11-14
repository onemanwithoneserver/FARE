export interface MyLearningCourse {
  id: string;
  category: string;
  program: string;
  title: string;
  coverTitle: string;
  coverSubtitle: string;
  instructorName: string;
  instructorTitle: string;
  progressPercent: number;
  currentLesson: string;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  lastActivity: string;
  status: "in-progress" | "completed" | "saved";
  visualType?: "cityscape" | "photo";
}

export interface CertificateItem {
  id: string;
  title: string;
  issueDate: string;
  credentialId: string;
  instructor: string;
  grade: string;
  skills: string[];
}

export const myLearningHeader = {
  title: "My Learning",
  subtitle: "Personal learning tracks and enrolled courses will appear here once published.",
};

// Only enable data when shared by user; empty until content is provided
export const myCoursesData: MyLearningCourse[] = [];
export const certificatesData: CertificateItem[] = [];
