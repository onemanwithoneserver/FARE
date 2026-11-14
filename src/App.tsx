import { useState, useEffect } from "react";
import MobileViewport from "./Components/MobileViewport";
import Header, { type ViewMode } from "./Components/Header";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Home02 from "./Home-02";
import OpenPlot from "./For Companies/Open Plots";
import RE_Companies from "./For Companies/Residential & Commercial";
import RE_Trainers_and_Coaches from "./RE_Trainers_and_Coaches";
import ContactUs from "./ContactUs";
import FAREForEmployees from "./For Learners/Employees";
import FAREForFreelancersOpenPlot from "./For Learners/Freelancers - Open Plot";
import FAREForFreelancersResidential from "./For Learners/Freelancers - Residential";
import FAREForCareerSwitchers from "./For Learners/Career Switchers";
import FAREForStudentsFreshers from "./For Learners/Students & Freshers";
import FAREKnowledgeBank from "./Practice/Knowledge Bank";
import FAREMocks from "./Practice/Mocks";
import FARELiveMocks from "./Practice/Live Mocks";
import FAREChooseYourExpert from "./Practice/Choose_Your_Expert";
import TrainerDirectory from "./Trainer Directory";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 768;
  const defaultInitialMode: ViewMode = isSmallScreen ? "mobile" : "desktop";
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentModeFromUrl: ViewMode =
    pathSegments[0] === "mobile"
      ? "mobile"
      : pathSegments[0] === "desktop"
        ? "desktop"
        : defaultInitialMode;
  const currentViewFromUrl =
    pathSegments[0] === "mobile" || pathSegments[0] === "desktop"
      ? pathSegments[1] || "home"
      : pathSegments[0] || "home";
  const viewMode: ViewMode = currentModeFromUrl;
  const isMobile = viewMode === "mobile";
  const view = currentViewFromUrl;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m") {
        e.preventDefault();
        setIsHeaderVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const handleViewModeChange = (newMode: ViewMode) => {
    navigate(`/${newMode}/${currentViewFromUrl}`);
  };
  const handleViewChange = (newView: string) => {
    navigate(`/${viewMode}/${newView}`);
  };
  return (
    <div className="flex flex-col h-screen w-full bg-[#eef2f6] font-sans relative">
      {isHeaderVisible && (
        <Header
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          view={view}
          onViewChange={handleViewChange}
          onClose={() => setIsHeaderVisible(false)}
        />
      )}
      <main
        className="flex-1 min-h-0 w-full overflow-hidden bg-fare-bg relative"
      >
        <MobileViewport isMobile={isMobile}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${defaultInitialMode}/home`} replace />}
            />
            {/* Direct top-level routes without mode prefix */}
            <Route
              path="/courses"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-courses`} replace />}
            />
            <Route
              path="/dashboard"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-courses`} replace />}
            />
            <Route
              path="/dashboard-courses"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-courses`} replace />}
            />
            <Route
              path="/dashboard/courses"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-courses`} replace />}
            />
            <Route
              path="/dashboard/main"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-main`} replace />}
            />
            <Route
              path="/dashboard-main"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-main`} replace />}
            />
            <Route
              path="/dashboard-programs"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-programs`} replace />}
            />
            <Route
              path="/dashboard/programs"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-programs`} replace />}
            />
            <Route
              path="/dashboard-skill-assessment"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-skill-assessment`} replace />}
            />
            <Route
              path="/dashboard/skill-assessment"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-skill-assessment`} replace />}
            />
            <Route
              path="/dashboard-knowledge-bank"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-knowledge-bank`} replace />}
            />
            <Route
              path="/dashboard/knowledge-bank"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-knowledge-bank`} replace />}
            />
            <Route
              path="/dashboard-my-learning"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-my-learning`} replace />}
            />
            <Route
              path="/dashboard/my-learning"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-my-learning`} replace />}
            />
            <Route
              path="/:mode"
              element={<Navigate to={`/${viewMode}/home`} replace />}
            />
            <Route path="/:mode/home" element={<Home isMobile={isMobile} />} />
            <Route
              path="/:mode/home-02"
              element={<Home02 isMobile={isMobile} />}
            />
            <Route
              path="/:mode/open-plots"
              element={<OpenPlot isMobile={isMobile} />}
            />
            <Route
              path="/:mode/re-companies"
              element={<RE_Companies isMobile={isMobile} />}
            />
            <Route
              path="/:mode/re-trainers-coaches"
              element={<RE_Trainers_and_Coaches isMobile={isMobile} />}
            />
            <Route
              path="/:mode/contact-us"
              element={<ContactUs isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-for-employees"
              element={<FAREForEmployees isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-for-freelancers-open-plot"
              element={<FAREForFreelancersOpenPlot isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-for-freelancers-residential"
              element={<FAREForFreelancersResidential isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-for-career-switchers"
              element={<FAREForCareerSwitchers isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-for-students-freshers"
              element={<FAREForStudentsFreshers isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-knowledge-bank"
              element={<FAREKnowledgeBank isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-mocks"
              element={<FAREMocks isMobile={isMobile} />}
            />
            <Route
              path="/:mode/fare-live-mocks"
              element={<FARELiveMocks isMobile={isMobile} />}
            />
            <Route
              path="/:mode/choose-your-expert"
              element={<FAREChooseYourExpert isMobile={isMobile} />}
            />
            <Route
              path="/:mode/trainer-directory"
              element={<TrainerDirectory isMobile={isMobile} />}
            />
            <Route
              path="/:mode/courses"
              element={<Courses isMobile={isMobile} />}
            />
            <Route
              path="/:mode/dashboard-main"
              element={<Dashboard isMobile={isMobile} initialSection="dashboard" />}
            />
            <Route
              path="/:mode/dashboard/main"
              element={<Dashboard isMobile={isMobile} initialSection="dashboard" />}
            />
            <Route
              path="/:mode/dashboard-programs"
              element={<Dashboard isMobile={isMobile} initialSection="programs" />}
            />
            <Route
              path="/:mode/dashboard/programs"
              element={<Dashboard isMobile={isMobile} initialSection="programs" />}
            />
            <Route
              path="/:mode/dashboard-skill-assessment"
              element={<Dashboard isMobile={isMobile} initialSection="skill-assessment" />}
            />
            <Route
              path="/:mode/dashboard/skill-assessment"
              element={<Dashboard isMobile={isMobile} initialSection="skill-assessment" />}
            />
            <Route
              path="/:mode/dashboard-my-learning"
              element={<Dashboard isMobile={isMobile} initialSection="my-learning" />}
            />
            <Route
              path="/:mode/dashboard/my-learning"
              element={<Dashboard isMobile={isMobile} initialSection="my-learning" />}
            />
            <Route
              path="/:mode/dashboard-courses"
              element={<Dashboard isMobile={isMobile} initialSection="courses" />}
            />
            <Route
              path="/:mode/dashboard/courses"
              element={<Dashboard isMobile={isMobile} initialSection="courses" />}
            />
            <Route
              path="/:mode/dashboard-knowledge-bank"
              element={<Dashboard isMobile={isMobile} initialSection="knowledge-bank" />}
            />
            <Route
              path="/:mode/dashboard/knowledge-bank"
              element={<Dashboard isMobile={isMobile} initialSection="knowledge-bank" />}
            />
            <Route
              path="/:mode/dashboard/:section"
              element={<Dashboard isMobile={isMobile} />}
            />
            <Route
              path="/:mode/dashboard"
              element={<Dashboard isMobile={isMobile} initialSection="courses" />}
            />
            <Route
              path="*"
              element={<Navigate to={`/${defaultInitialMode}/home`} replace />}
            />
          </Routes>
        </MobileViewport>
      </main>
    </div>
  );
}
