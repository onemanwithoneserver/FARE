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
import CompanyProfile from "./Dashboard/company-profile";

function CompanyProfileRoute({
  isMobile,
  viewMode,
}: {
  isMobile: boolean;
  viewMode: ViewMode;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const routeState = location.state as {
    companyName?: string;
    returnUrl?: string;
  } | null;
  let storedCompanyName: string | undefined;
  try {
    storedCompanyName =
      sessionStorage.getItem("fare_company_profile_name") ||
      localStorage.getItem("fare_company_profile_name") ||
      undefined;
  } catch {
    // ignore
  }
  const companyName =
    routeState?.companyName ||
    searchParams.get("company") ||
    storedCompanyName ||
    undefined;

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, {
        replace: true,
        state: { companyName, returnUrl: routeState?.returnUrl },
      });
    }
  }, [location.pathname, location.search, companyName, routeState?.returnUrl, navigate]);

  const handleBack = () => {
    // 1. Check history state returnUrl
    let returnUrl = routeState?.returnUrl;

    // 2. Check storage for the respective page where company profile was invoked from
    if (!returnUrl || returnUrl.includes("company-profile")) {
      try {
        const stored =
          sessionStorage.getItem("fare_company_profile_return_url") ||
          localStorage.getItem("fare_company_profile_return_url");
        if (stored && !stored.includes("company-profile")) {
          returnUrl = stored;
        }
      } catch {
        // ignore
      }
    }

    // 3. Fallback to dashboard courses
    if (!returnUrl || returnUrl.includes("company-profile")) {
      returnUrl = `/${viewMode}/dashboard/courses`;
    }

    // Strip Vite base prefix (/FARE) if stored with full pathname
    const rawBase = import.meta.env.BASE_URL || "/";
    const basePrefix = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
    if (basePrefix && returnUrl.startsWith(basePrefix)) {
      returnUrl = returnUrl.slice(basePrefix.length) || "/";
    }

    // Adapt mode prefix if current mode differs
    if (returnUrl.startsWith("/mobile/") && viewMode === "desktop") {
      returnUrl = returnUrl.replace("/mobile/", "/desktop/");
    } else if (returnUrl.startsWith("/desktop/") && viewMode === "mobile") {
      returnUrl = returnUrl.replace("/desktop/", "/mobile/");
    }

    navigate(returnUrl);
  };

  return (
    <CompanyProfile
      isMobile={isMobile}
      companyName={companyName}
      onBack={handleBack}
    />
  );
}

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

  const isCompanyProfilePath = location.pathname.includes("company-profile");
  const isStandaloneWindow =
    isCompanyProfilePath &&
    typeof window !== "undefined" &&
    (window.opener !== null || window.history.length <= 2);
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
  useEffect(() => {
    const openCompanyPage = (companyName?: string) => {
      const currentPath = location.pathname + location.search;
      if (!currentPath.includes("company-profile")) {
        try {
          sessionStorage.setItem("fare_company_profile_return_url", currentPath);
          localStorage.setItem("fare_company_profile_return_url", currentPath);
        } catch {
          // ignore
        }
      }
      navigate(`/${viewMode}/company-profile`, {
        state: { companyName, returnUrl: currentPath },
      });
    };
    const handleOpenCompany = (e: Event) => {
      const custom = e as CustomEvent<{ companyName?: string }>;
      openCompanyPage(custom.detail?.companyName);
    };
    const handleAdAction = (e: Event) => {
      const custom = e as CustomEvent<{ action?: "apply" | "join"; title?: string }>;
      if (custom.detail?.action === "join") {
        openCompanyPage(custom.detail?.title);
      }
    };
    window.addEventListener("open-fare-company-profile", handleOpenCompany);
    window.addEventListener("open-fare-ad-action", handleAdAction);
    return () => {
      window.removeEventListener("open-fare-company-profile", handleOpenCompany);
      window.removeEventListener("open-fare-ad-action", handleAdAction);
    };
  }, [navigate, viewMode, location.pathname, location.search]);
  const handleViewModeChange = (newMode: ViewMode) => {
    navigate(`/${newMode}/${currentViewFromUrl}`);
  };
  const handleViewChange = (newView: string) => {
    navigate(`/${viewMode}/${newView}`);
  };
  return (
    <div className="flex flex-col h-screen w-full bg-[#eef2f6] font-sans relative">
      {isHeaderVisible && !isStandaloneWindow && (
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
              path="/dashboard-company-profile"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-company-profile`} replace />}
            />
            <Route
              path="/dashboard/company-profile"
              element={<Navigate to={`/${defaultInitialMode}/dashboard-company-profile`} replace />}
            />
            <Route
              path="/company-profile"
              element={<Navigate to={`/${defaultInitialMode}/company-profile`} replace />}
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
              path="/:mode/dashboard-company-profile"
              element={<Dashboard isMobile={isMobile} initialSection="company-profile" />}
            />
            <Route
              path="/:mode/dashboard/company-profile"
              element={<Dashboard isMobile={isMobile} initialSection="company-profile" />}
            />
            <Route
              path="/:mode/company-profile"
              element={<CompanyProfileRoute isMobile={isMobile} viewMode={viewMode} />}
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
