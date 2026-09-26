import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import logo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import {
  Search,
  ArrowRight,
  X,
  ChevronDown,
  Building2,
  MapPin,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
  RefreshCw,
  Globe,
  Check,
} from "lucide-react";
import Modal from "../../Forms/Modal";
import RECompaniesForm from "../../Forms/Desktop/RECompaniesForm";
const subIconMap: Record<string, React.ElementType> = {
  "Residential & Commercial": Building2,
  "రెసిడెన్షియల్ & కమర్షియల్": Building2,
  "Open Plots": MapPin,
  "ఓపెన్ ప్లాట్స్": MapPin,
  "Students & Freshers": GraduationCap,
  "విద్యార్థులు & ఫ్రెషర్స్": GraduationCap,
  Employees: Briefcase,
  ఉద్యోగులు: Briefcase,
  "Freelancers - Open Plot": MapPin,
  "ఫ్రీలాన్సర్లు - ఓపెన్ ప్లాట్": MapPin,
  "Freelancers - Residential": HomeIcon,
  "ఫ్రీలాన్సర్లు - రెసిడెన్షియల్": HomeIcon,
  "Career Switchers": RefreshCw,
  "కెరీర్ స్విచ్చర్స్": RefreshCw,
};
const subColorMap: Record<string, string> = {
  "Residential & Commercial": "#34D399",
  "రెసిడెన్షియల్ & కమర్షియల్": "#34D399",
  "Open Plots": "#E2C068",
  "ఓపెన్ ప్లాట్స్": "#E2C068",
  "Students & Freshers": "#E2C068",
  "విద్యార్థులు & ఫ్రెషర్స్": "#E2C068",
  Employees: "#60A5FA",
  ఉద్యోగులు: "#60A5FA",
  "Freelancers - Open Plot": "#34D399",
  "ఫ్రీలాన్సర్లు - ఓపెన్ ప్లాట్": "#34D399",
  "Freelancers - Residential": "#A78BFA",
  "ఫ్రీలాన్సర్లు - రెసిడెన్షియల్": "#A78BFA",
  "Career Switchers": "#F472B6",
  "కెరీర్ స్విచ్చర్స్": "#F472B6",
};
export default function Desktop() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobileMode = location.pathname.startsWith("/mobile");
  const currentMode = isMobileMode ? "mobile" : "desktop";
  const { language, setLanguage } = useLanguage();
  const data = getData(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [activeLearnerItem, setActiveLearnerItem] = useState<string | null>(
    null,
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = (e?: Event) => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      if (e && e.target && (e.target as HTMLElement).scrollTop !== undefined) {
        scrollTop = (e.target as HTMLElement).scrollTop;
      }
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll, { capture: true });
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);
  const LogoElement = (
    <div
      onClick={() => navigate(`/${currentMode}/home`)}
      className="flex items-center justify-center cursor-pointer group py-0 shrink-0"
    >
      <img
        src={logo}
        alt="FARE"
        className={`w-auto max-w-none transition-all duration-300 group-hover:scale-[1.04] ${isScrolled ? "brightness-0 invert" : ""} ${
          isScrolled
            ? "h-[70px] my-[-8px] scale-[1.25] origin-center"
            : "h-[74px] my-[-8px]"
        }`}
      />
    </div>
  );
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentRoute = pathSegments[1] || "home";
  const getRouteForHref = (href: string, title?: string): string => {
    if (href === "#") return "#";
    if (href === "home" || href === "#platform") return "home";
    if (href === "open-plots" || href === "#open-plots") return "open-plots";
    if (
      href === "re-companies" ||
      href === "#for-companies" ||
      href === "#residential-commercial"
    )
      return "re-companies";
    if (href === "re-trainers-coaches" || href === "#for-trainers")
      return "re-trainers-coaches";
    if (href === "contact-us" || href === "#contact") return "contact-us";
    if (title === "Trainer Directory" || title === "ట్రైనర్ డైరెక్టరీ")
      return "#";
    if (title === "About" || title === "మా గురించి") return "#";
    if (title === "Contact Us" || title === "సంప్రదించండి") return "contact-us";
    if (title === "For Trainers" || title === "ట్రైనర్ల కోసం")
      return "re-trainers-coaches";
    if (
      title === "For Companies" ||
      title === "కంపెనీల కోసం" ||
      title === "Residential & Commercial" ||
      title === "రెసిడెన్షియల్ & కమర్షియల్"
    )
      return "re-companies";
    if (title === "Open Plots" || title === "ఓపెన్ ప్లాట్స్")
      return "open-plots";
    if (title === "Platform" || title === "ప్లాట్‌ఫారమ్") return "home";
    return href.replace("#", "") || "home";
  };
  const renderNavLink = (link: (typeof data.navLinks)[0], idx: number) => {
    const hasSubItems = link.subItems && link.subItems.length > 0;
    const isDropdownOpen = activeDropdown === link.title;
    const targetRoute = getRouteForHref(link.href, link.title);
    const subItemsList = (link.subItems ?? []) as Array<{
      title: string;
      href: string;
      formKey?: string;
    }>;
    const hasFormSubItems = subItemsList.some((sub) => !!sub.formKey);
    const subRoutes = subItemsList
      .map((sub) => getRouteForHref(sub.href, sub.title))
      .filter((r) => r !== "#");
    const isActive = !hasSubItems
      ? currentRoute === targetRoute
      : subRoutes.includes(currentRoute) ||
        (hasFormSubItems && activeLearnerItem !== null);
    if (hasSubItems) {
      return (
        <div
          key={idx}
          className="relative"
          onMouseEnter={() => setActiveDropdown(link.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            onClick={() => {
              if (targetRoute !== "#") {
                setActiveLearnerItem(null);
                navigate(`/${currentMode}/${targetRoute}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setActiveDropdown(null);
            }}
            className={`flex items-center gap-1 text-[13px] lg:text-[13.5px] xl:text-[14px] font-medium transition-colors duration-300 cursor-pointer py-1.5 group whitespace-nowrap ${
              isActive
                ? "text-[#C99A2E] font-bold"
                : isScrolled
                  ? "text-white/90 hover:text-[#C99A2E]"
                  : "text-[#0B1D3A]/90 hover:text-[#C99A2E]"
            }`}
          >
            <span className="relative inline-block py-0.5">
              <span
                className={`transition-colors duration-300 ${isDropdownOpen || isActive ? "text-[#C99A2E]" : ""}`}
              >
                {link.title}
              </span>
              <span
                className={`absolute -bottom-[2px] left-0 h-[2px] bg-[#C99A2E] rounded-full transition-all duration-300 ease-out ${
                  isDropdownOpen || isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </span>
            <ChevronDown
              size={13}
              strokeWidth={2.5}
              className={`transition-transform duration-300 ${isScrolled ? "text-white/60 group-hover:text-[#C99A2E]" : "text-[#0B1D3A]/60 group-hover:text-[#C99A2E]"} ${
                isDropdownOpen ? "rotate-180 text-[#C99A2E]" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 mt-2 w-[270px] bg-[#071738]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[4px] p-1.5 z-50 pointer-events-auto hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out"
              >
                <div className="flex flex-col gap-1">
                  {subItemsList.map((sub, sIdx) => {
                    const subRoute = getRouteForHref(sub.href, sub.title);
                    const isSubActive = sub.formKey
                      ? activeLearnerItem === sub.formKey
                      : currentRoute === subRoute;
                    const SubIcon = subIconMap[sub.title] ?? MapPin;
                    const subColor = subColorMap[sub.title] ?? "#E2C068";
                    return (
                      <a
                        key={sIdx}
                        href={`#${subRoute}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(null);
                          if (sub.formKey) {
                            setActiveLearnerItem(sub.formKey);
                            setActiveForm(sub.formKey);
                          } else {
                            setActiveLearnerItem(null);
                            navigate(`/${currentMode}/${subRoute}`);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className={`w-full p-2.5 rounded-[4px] border transition-all duration-200 flex items-center justify-between gap-2.5 text-left cursor-pointer group/sub ${
                          isSubActive
                            ? "bg-white/15 border-white/20"
                            : "border-transparent hover:border-white/10 hover:bg-white/[0.08]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className="w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/sub:scale-105"
                            style={{
                              backgroundColor: `${subColor}33`,
                              color: subColor,
                            }}
                          >
                            <SubIcon size={16} strokeWidth={2.2} />
                          </div>
                          <span
                            className={`text-[13px] font-bold transition-colors leading-tight whitespace-nowrap ${
                              isSubActive
                                ? "text-[#E2C068]"
                                : "text-white group-hover/sub:text-[#E2C068]"
                            }`}
                          >
                            {sub.title}
                          </span>
                        </div>
                        <ArrowRight
                          size={14}
                          strokeWidth={2.5}
                          className={`shrink-0 transition-all duration-200 ml-1 ${
                            isSubActive
                              ? "text-[#E2C068] translate-x-0.5"
                              : "text-[#10B981] group-hover/sub:text-[#E2C068] group-hover/sub:translate-x-0.5"
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
    return (
      <a
        key={idx}
        href={`#${targetRoute}`}
        onClick={(e) => {
          e.preventDefault();
          setActiveLearnerItem(null);
          navigate(`/${currentMode}/${targetRoute}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`relative inline-flex items-center text-[13px] lg:text-[13.5px] xl:text-[14px] font-medium transition-colors duration-300 whitespace-nowrap py-1.5 group cursor-pointer ${
          isActive
            ? "text-[#C99A2E] font-bold"
            : isScrolled
              ? "text-white/90 hover:text-[#C99A2E]"
              : "text-[#0B1D3A]/90 hover:text-[#C99A2E]"
        }`}
      >
        <span className="relative inline-block py-0.5">
          {link.title}
          <span
            className={`absolute -bottom-[2px] left-0 h-[2px] bg-[#C99A2E] rounded-full transition-all duration-300 ease-out ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </span>
      </a>
    );
  };
  const RightControls = (
    <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0">
      <button
        onClick={() => setIsSearchExpanded(!isSearchExpanded)}
        aria-label="Toggle search dialog"
        className={`flex items-center justify-center w-9 h-9 transition-all duration-200 cursor-pointer ${
          isSearchExpanded
            ? (isScrolled
                ? "bg-white text-[#0B1D3A]"
                : "bg-[#0B1D3A] text-white") + " shadow-md rounded-full"
            : (isScrolled
                ? "text-white/75 hover:text-white hover:bg-white/10"
                : "text-[#0B1D3A]/75 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06]") +
              ` ${isScrolled ? "rounded-full" : "rounded"}`
        }`}
        title="Search platform"
      >
        {isSearchExpanded ? (
          <X size={18} strokeWidth={2.5} />
        ) : (
          <Search size={19} strokeWidth={2} />
        )}
      </button>
      <div className="relative" ref={langDropdownRef}>
        <button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
            isLangDropdownOpen
              ? (isScrolled
                  ? "bg-white text-[#0B1D3A]"
                  : "bg-[#0B1D3A] text-white") + " shadow-sm"
              : isScrolled
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-[#0B1D3A]/80 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06]"
          } ${isScrolled ? "rounded-full" : "rounded"}`}
          title="Change language / భాషను మార్చండి"
          aria-label="Change language"
        >
          <Globe
            size={16}
            className={
              isLangDropdownOpen
                ? "text-[#E2C068]"
                : isScrolled
                  ? "text-white/70"
                  : "text-[#0B1D3A]/70"
            }
          />
          <span className="text-[11.5px] font-bold uppercase tracking-wider">
            {language === "te" ? "తెలుగు" : "EN"}
          </span>
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180 text-[#E2C068]" : isScrolled ? "text-white/50" : "text-[#0B1D3A]/50"}`}
          />
        </button>
        <AnimatePresence>
          {isLangDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute top-[calc(100%+8px)] right-0 w-[170px] ${isScrolled ? "bg-[#0B1D3A]/95 border-white/10" : "bg-white/98 border-[#0B1D3A]/15"} backdrop-blur-xl border shadow-[0_14px_36px_-6px_rgba(11,29,58,0.2)] rounded p-1.5 z-50 pointer-events-auto`}
            >
              <div
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${isScrolled ? "text-white/70" : "text-[#0B1D3A]/70"}`}
              >
                {language === "te" ? "భాషను ఎంచుకోండి" : "Select Language"}
              </div>
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[13px] transition-all cursor-pointer ${
                  language === "en"
                    ? isScrolled
                      ? "bg-white text-[#0B1D3A] font-bold shadow-xs"
                      : "bg-[#0B1D3A] text-white font-bold shadow-xs"
                    : isScrolled
                      ? "text-white/90 hover:bg-white/10 font-medium"
                      : "text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`text-[10.5px] font-extrabold px-1.5 py-0.5 rounded ${
                      language === "en"
                        ? isScrolled
                          ? "bg-[#0B1D3A] text-white"
                          : "bg-white/20 text-white"
                        : isScrolled
                          ? "bg-white/15 text-white"
                          : "bg-[#0B1D3A]/10 text-[#0B1D3A]"
                    }`}
                  >
                    EN
                  </span>
                  <span>English</span>
                </span>
                {language === "en" && (
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className={isScrolled ? "text-[#0B1D3A]" : "text-[#E2C068]"}
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setLanguage("te");
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[13px] transition-all cursor-pointer mt-1 ${
                  language === "te"
                    ? isScrolled
                      ? "bg-white text-[#0B1D3A] font-bold shadow-xs"
                      : "bg-[#0B1D3A] text-white font-bold shadow-xs"
                    : isScrolled
                      ? "text-white/90 hover:bg-white/10 font-medium"
                      : "text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`text-[10.5px] font-extrabold px-1.5 py-0.5 rounded ${
                      language === "te"
                        ? isScrolled
                          ? "bg-[#0B1D3A] text-white"
                          : "bg-white/20 text-white"
                        : isScrolled
                          ? "bg-white/15 text-white"
                          : "bg-[#0B1D3A]/10 text-[#0B1D3A]"
                    }`}
                  >
                    TE
                  </span>
                  <span>తెలుగు</span>
                </span>
                {language === "te" && (
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className={isScrolled ? "text-[#0B1D3A]" : "text-[#E2C068]"}
                  />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`w-[1px] h-4 shrink-0 hidden sm:block ${isScrolled ? "bg-white/20" : "bg-[#0B1D3A]/10"}`}
      ></div>
      <a
        href="#login"
        className={`text-[13.5px] font-medium px-1.5 py-1 transition-colors duration-300 shrink-0 hidden xl:inline-block ${isScrolled ? "text-white hover:text-[#C99A2E]" : "text-[#0B1D3A] hover:text-[#C99A2E]"}`}
      >
        Login
      </a>
      <button
        onClick={() => {
          navigate(`/${currentMode}/contact-us`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`text-[13px] lg:text-[13.5px] font-semibold px-4 lg:px-5 py-2 hover:shadow-[0_8px_24px_rgba(11,29,58,0.25),0_0_0_1px_rgba(201,154,46,0.2)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(11,29,58,0.15)] flex items-center gap-1.5 shrink-0 cursor-pointer ${isScrolled ? "bg-white text-[#0B1D3A] hover:bg-[#E2C068] rounded-full" : "bg-[#0B1D3A] text-white hover:bg-[#102B63] rounded"}`}
      >
        <span>{language === "te" ? "ప్రారంభించండి" : "Get Started"}</span>
        <ArrowRight size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
  return (
    <>
    <div className="w-full sticky top-0 z-50 pointer-events-auto">
      <div
        className={`w-full transition-all duration-300 ease-out ${
          isScrolled
            ? "pt-2.5 pb-1 flex justify-center px-4 lg:px-6"
            : "py-0 w-full"
        }`}
      >
        <header
          className={`transition-all duration-300 pointer-events-auto flex items-center justify-between relative ${
            isScrolled
              ? "w-full max-w-[1320px] h-[58px] px-5 lg:px-7 bg-[#0B1D3A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_32px_-10px_rgba(11,29,58,0.12),0_1px_3px_rgba(11,29,58,0.05)] rounded-full mx-auto"
              : "w-full h-[68px] px-8 lg:px-14 bg-white/90 backdrop-blur-md border-b border-[#0B1D3A]/[0.07] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)] rounded-none"
          }`}
        >
          {isScrolled ? (
            <>
              <div className="hidden md:flex flex-1 items-center justify-start gap-2.5 lg:gap-3.5 xl:gap-5">
                {data.navLinks.map((link, idx) => renderNavLink(link, idx))}
              </div>
              <div className="flex items-center justify-center shrink-0 px-2 lg:px-5">
                {LogoElement}
              </div>
              <div className="flex-1 flex items-center justify-end gap-2.5 lg:gap-3.5 xl:gap-5">
                {RightControls}
              </div>
            </>
          ) : (
            <>
              <nav className="hidden md:flex items-center justify-start flex-1 gap-4 lg:gap-6 xl:gap-7">
                {data.navLinks.map((link, idx) => renderNavLink(link, idx))}
              </nav>
              <div className="flex items-center shrink-0 mx-4">{LogoElement}</div>
              {RightControls}
            </>
          )}
          <AnimatePresence>
            {isSearchExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute top-[calc(100%+10px)] right-4 lg:right-10 w-[420px] max-w-[90vw] ${isScrolled ? "bg-[#0B1D3A]/95 border-white/10" : "bg-white/98 border-[#0B1D3A]/15"} backdrop-blur-2xl border shadow-[0_20px_50px_-10px_rgba(11,29,58,0.22)] p-4 z-50 pointer-events-auto rounded`}
              >
                <div
                  className={`flex items-center gap-3 ${isScrolled ? "bg-[#040C1E] border-white/10" : "bg-[#F8FAFD] border-[#0B1D3A]/15"} border focus-within:border-[#C99A2E] focus-within:ring-2 focus-within:ring-[#C99A2E]/20 px-3.5 py-2.5 rounded transition-all shadow-inner`}
                >
                  <Search size={18} className="text-[#C99A2E] shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setIsSearchExpanded(false);
                    }}
                    placeholder="Search courses, skills, benchmarks..."
                    className={`bg-transparent text-[14px] ${isScrolled ? "text-white" : "text-[#0B1D3A]"} placeholder-[#0B1D3A]/40 outline-none w-full font-medium`}
                  />
                  <button
                    onClick={() => {
                      if (searchQuery) setSearchQuery("");
                      else setIsSearchExpanded(false);
                    }}
                    aria-label="Close search"
                    className={`${isScrolled ? "text-white/40 hover:text-white hover:bg-white/10" : "text-[#0B1D3A]/40 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/10"} p-1 rounded-full transition-colors cursor-pointer shrink-0`}
                  >
                    <X size={15} strokeWidth={2.5} />
                  </button>
                </div>
                <div
                  className={`mt-3.5 pt-3 border-t ${isScrolled ? "border-white/10" : "border-[#0B1D3A]/[0.07]"}`}
                >
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${isScrolled ? "text-white/50" : "text-[#0B1D3A]/50"}`}
                  >
                    Popular Searches
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "RERA Compliance",
                      "Negotiation Labs",
                      "Capability Diagnostic",
                      "Peer Benchmarks",
                    ].map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchQuery(tag)}
                        className={`text-[11.5px] font-medium bg-[#0B1D3A]/[0.04] px-2.5 py-1 rounded transition-colors cursor-pointer ${isScrolled ? "text-white/75 hover:bg-[#C99A2E]/15 hover:text-white" : "text-[#0B1D3A]/75 hover:bg-[#C99A2E]/15 hover:text-[#0B1D3A]"}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </div>
    <Modal isOpen={activeForm !== null} onClose={() => setActiveForm(null)}>
      {activeForm === "freelancer-open-plot" && <RECompaniesForm />}
    </Modal>
    </>
  );
}
