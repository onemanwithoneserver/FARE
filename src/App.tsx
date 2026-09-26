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
import { useLanguage } from "./context/LanguageContext";
import Home from "./Home";
import OpenPlot from "./OpenPlot";
import RE_Companies from "./RE_Companies";
import RE_Trainers_and_Coaches from "./RE_Trainers_and_Coaches";
import ContactUs from "./ContactUs";
import FAREForEmployees from "./FARE for Employees";
export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
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
  const currentViewFromUrl = pathSegments[1] || "home";
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
        className={`flex-1 w-full overflow-hidden bg-[#f0f2f5] relative ${isHeaderVisible ? "h-[calc(100vh-60px)]" : "h-screen"}`}
      >
        <MobileViewport isMobile={isMobile}>
          <Routes key={language}>
            <Route
              path="/"
              element={<Navigate to={`/${defaultInitialMode}/home`} replace />}
            />
            <Route
              path="/:mode"
              element={<Navigate to={`/${viewMode}/home`} replace />}
            />
            <Route path="/:mode/home" element={<Home isMobile={isMobile} />} />
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
            <Route path="/:mode/forms" element={<Home isMobile={isMobile} />} />
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
