import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";
import AdActionModal from "../components/AdActionModal";
import PartnerBrochureModal from "./PartnerBrochureModal";
import { companyHeroData, aboutUsData, type CompanyVideoItem } from "./data";
import HeroSection from "./01_hero";
import AboutUsSection from "./02_about_us";
import ManagementLeadershipSection from "./03_management_leadership";
import SuccessStoriesSection from "./04_success_stories";
import ProjectsSection from "./05_projects";
import CareersSection from "./06_careers";
import FaqsSection from "./07_faqs";

export interface CompanyProfileProps {
  isMobile?: boolean;
  companyName?: string;
  onBack?: () => void;
}

const sectionNavItems = [
  { id: "about-us", label: "About Us" },
  { id: "leadership", label: "Leadership" },
  { id: "success-stories", label: "Success Stories" },
  { id: "projects", label: "Projects" },
  { id: "careers", label: "Careers" },
  { id: "faqs", label: "FAQs" },
];

export function CompanyProfile({
  isMobile = false,
  companyName,
  onBack,
}: CompanyProfileProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const programScrollTimerRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  const [showSectionTabs, setShowSectionTabs] = useState(false);
  const [activeNavId, setActiveNavId] = useState(sectionNavItems[0].id);

  // Video Modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<CompanyVideoItem>(
    aboutUsData.videos[0]
  );

  // Apply / Enquire Modal state
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [actionModalTitle, setActionModalTitle] = useState("");

  // Priority Channel Partner Brochure Modal state
  const [partnerBrochureOpen, setPartnerBrochureOpen] = useState(false);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (typeof window !== "undefined") {
      let returnUrl = `/${isMobile ? "mobile" : "desktop"}/dashboard/courses`;
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
      if (returnUrl.startsWith("/mobile/") && !isMobile) {
        returnUrl = returnUrl.replace("/mobile/", "/desktop/");
      } else if (returnUrl.startsWith("/desktop/") && isMobile) {
        returnUrl = returnUrl.replace("/desktop/", "/mobile/");
      }
      window.location.href = returnUrl;
    }
  };

  const updateScrollState = useCallback(() => {
    const headerRect = stickyHeaderRef.current?.getBoundingClientRect();
    const headerBottom = headerRect?.bottom ?? 120;

    // Show section tab control only once user scrolls past Hero into 02_about_us or deeper
    const aboutEl = document.getElementById("company-sec-about-us");
    const passedHero = aboutEl
      ? aboutEl.getBoundingClientRect().top <= headerBottom + 160
      : false;

    setShowSectionTabs(passedHero);

    // Compute whether scrolled to bottom for scroll-spy
    let scrollEl: HTMLElement | null = rootRef.current?.parentElement ?? null;
    while (scrollEl && scrollEl.scrollHeight <= scrollEl.clientHeight + 8) {
      scrollEl = scrollEl.parentElement;
    }

    let atBottom = false;
    if (scrollEl) {
      atBottom =
        scrollEl.scrollTop + scrollEl.clientHeight >=
        scrollEl.scrollHeight - 28;
    } else {
      atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 28;
    }

    if (isProgrammaticScrollRef.current) return;

    // Scroll-spy: switch active tab based on the current section in view
    if (atBottom && passedHero) {
      setActiveNavId(sectionNavItems[sectionNavItems.length - 1].id);
      return;
    }

    let currentSection = sectionNavItems[0].id;
    for (const item of sectionNavItems) {
      const el = document.getElementById(`company-sec-${item.id}`);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= headerBottom + 190) {
        currentSection = item.id;
      }
    }
    setActiveNavId(currentSection);
  }, []);

  useEffect(() => {
    const rootEl = rootRef.current;
    const targets: (HTMLElement | Window)[] = [window];
    let node = rootEl?.parentElement ?? null;
    while (node) {
      targets.push(node);
      node = node.parentElement;
    }
    if (rootEl) {
      targets.push(rootEl);
    }

    const onScrollOrResize = () => updateScrollState();
    targets.forEach((target) => {
      target.addEventListener("scroll", onScrollOrResize, { passive: true });
    });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateScrollState();

    return () => {
      targets.forEach((target) => {
        target.removeEventListener("scroll", onScrollOrResize);
      });
      window.removeEventListener("resize", onScrollOrResize);
      if (programScrollTimerRef.current) {
        window.clearTimeout(programScrollTimerRef.current);
      }
    };
  }, [updateScrollState]);

  const scrollToSection = (id: string) => {
    isProgrammaticScrollRef.current = true;
    if (programScrollTimerRef.current) {
      window.clearTimeout(programScrollTimerRef.current);
    }

    if (id !== "hero") {
      setActiveNavId(id);
      setShowSectionTabs(true);
    }

    const el = document.getElementById(`company-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    programScrollTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      updateScrollState();
    }, 680);
  };

  const scrollToTop = () => {
    isProgrammaticScrollRef.current = true;
    if (programScrollTimerRef.current) {
      window.clearTimeout(programScrollTimerRef.current);
    }
    const heroEl = document.getElementById("company-sec-hero");
    heroEl?.scrollIntoView({ behavior: "smooth", block: "start" });
    programScrollTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      updateScrollState();
    }, 680);
  };

  const handleOpenVideo = (video: CompanyVideoItem) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  const handleOpenAction = (title: string) => {
    setActionModalTitle(title);
    setActionModalOpen(true);
  };

  return (
    <div
      ref={rootRef}
      className="w-full min-h-full bg-[#F8FAFD] flex flex-col font-['Outfit'] relative overflow-x-clip select-text"
    >
      {/* Sticky Navy Glassmorphic Top Breadcrumb & Scroll-Triggered Section Tab Bar */}
      <motion.div
        ref={stickyHeaderRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-30 backdrop-blur-2xl border-b relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,29,58,0.96) 0%, rgba(15,40,71,0.96) 100%)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow:
            "0 8px 32px -8px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Left Back Arrow Control */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleBackClick}
              className="flex items-center justify-center w-8 h-8 rounded-[8px] transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              title="Back"
              aria-label="Go back"
            >
              <ArrowLeft size={16} className="text-white/80" strokeWidth={2.5} />
            </button>
          </div>

          {/* Center Dynamic Content: Section Tabs (appears ONLY after scrolling past Hero) */}
          <div className="flex-1 flex items-center justify-center min-w-0 px-2 sm:px-4">
            <AnimatePresence>
              {!isMobile && showSectionTabs && (
                <motion.nav
                  key="desktop-section-tabs"
                  aria-label="Company sections"
                  initial={{ opacity: 0, y: -12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:flex items-center gap-1 bg-white/[0.06] p-1 rounded-[10px] border border-white/10 shadow-inner"
                >
                  {sectionNavItems.map((item) => {
                    const isActive = activeNavId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`relative px-3 py-1.5 rounded-[7px] text-[11px] font-bold transition-colors cursor-pointer whitespace-nowrap z-10 ${
                          isActive ? "text-white" : "text-white/65 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="companyDesktopActiveTab"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 34,
                            }}
                            className="absolute inset-0 rounded-[7px] -z-10 shadow-[0_4px_12px_rgba(201,154,46,0.35)]"
                            style={{
                              background:
                                "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)",
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    );
                  })}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>

          {/* Right Spacer to symmetrically balance the Left Back Button */}
          <div className="w-8 shrink-0" aria-hidden="true" />
        </div>

        {/* Mobile / Narrow Viewport Horizontal Section Tab Bar — appears ONLY after scrolling past Hero */}
        <AnimatePresence>
          {showSectionTabs && (
            <motion.div
              key="mobile-section-tabs"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`${isMobile ? "block" : "lg:hidden"} overflow-hidden border-t border-white/10 bg-[#08152B]/90`}
            >
              <div className="px-4 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                {sectionNavItems.map((item) => {
                  const isActive = activeNavId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 z-10 ${
                        isActive ? "text-white" : "text-white/65 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="companyMobileActiveTab"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                          className="absolute inset-0 rounded-full -z-10"
                          style={{
                            background:
                              "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)",
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 01 · Hero Banner & Corporate Stats */}
      <HeroSection
        isMobile={isMobile}
        companyName={companyName}
        onConnect={() =>
          handleOpenAction(`${companyHeroData.companyName} — Direct Partner Inquiry`)
        }
        onJumpToSection={scrollToSection}
      />

      {/* 02 · About Us (Overview, Logos, Gallery & Videos) */}
      <AboutUsSection isMobile={isMobile} onOpenVideo={handleOpenVideo} />

      {/* 03 · Management & Leadership */}
      <ManagementLeadershipSection isMobile={isMobile} />

      {/* 04 · Success Stories */}
      <SuccessStoriesSection isMobile={isMobile} />

      {/* 05 · Ongoing & Completed Projects (with Priority Channel Partner Slider & Brochure) */}
      <ProjectsSection
        isMobile={isMobile}
        onInquireProject={(projectTitle) =>
          handleOpenAction(`Project Dossier: ${projectTitle}`)
        }
        onOpenBrochure={() => setPartnerBrochureOpen(true)}
      />

      {/* 06 · Careers & Open Positions */}
      <CareersSection
        isMobile={isMobile}
        onApplyCareer={(jobTitle) =>
          handleOpenAction(`Career Application: ${jobTitle}`)
        }
      />

      {/* 07 · Frequently Asked Questions (FAQs) */}
      <FaqsSection
        isMobile={isMobile}
        onConnectLiaison={() =>
          handleOpenAction(`${companyHeroData.companyName} — Partner Onboarding Desk`)
        }
        onBack={handleBackClick}
      />

      {/* Floating Scroll-to-Top Control (appears alongside section tabs) */}
      <AnimatePresence>
        {showSectionTabs && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-[0_8px_24px_rgba(11,29,58,0.35)] border border-[#D5AA45]/40 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)",
            }}
            title="Back to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} className="text-[#E5C158]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={selectedVideo.videoSrc}
        title={selectedVideo.title}
      />

      {/* Interactive Apply / Enquire Modal */}
      <AdActionModal
        isOpen={actionModalOpen}
        onClose={() => setActionModalOpen(false)}
        actionType="apply"
        mandateTitle={actionModalTitle}
      />

      {/* Priority Channel Partner Official Brochure Modal */}
      <PartnerBrochureModal
        isOpen={partnerBrochureOpen}
        onClose={() => setPartnerBrochureOpen(false)}
        companyName={companyHeroData.companyName}
        onApplyCode={() =>
          handleOpenAction(
            `${companyHeroData.companyName} — Priority Partner Token Desk Onboarding`
          )
        }
      />
    </div>
  );
}

export default CompanyProfile;
