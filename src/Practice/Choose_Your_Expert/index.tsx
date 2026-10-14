import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "../../Home/00_header";
import Footer from "../../Home/05_section";
import Section01 from "./section01";
import Section02 from "./section02";
import Section04 from "./section04";
import Section05 from "./section05";
import ScenarioResults from "./section05/ScenarioResults";
import Section06 from "./section06";
import Section08 from "./section08";
import { type Expert, data as expertData, getSortedAndFilteredExperts } from "./section05/data";
import {
  SCENARIOS,
  getSortedAndFilteredScenarios,
  type ViewMode,
} from "./section04/data";

interface Props {
  isMobile: boolean;
}

export default function ChooseYourExpert({ isMobile }: Props) {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>("experts");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam === "scenarios" || location.hash === "#scenarios" || location.hash === "#cye-tab-scenarios") {
      setViewMode("scenarios");
      setTimeout(() => {
        const el = document.getElementById("cye-toolbar") || document.getElementById("cye-results");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    } else if (tabParam === "experts" || location.hash === "#experts") {
      setViewMode("experts");
      setTimeout(() => {
        const el = document.getElementById("cye-toolbar") || document.getElementById("cye-results");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  }, [location.search, location.hash]);
  const [expertSearch, setExpertSearch] = useState("");
  const [expertSortBy, setExpertSortBy] = useState("Most Relevant");
  const [scenarioSearch, setScenarioSearch] = useState("");
  const [scenarioSortBy, setScenarioSortBy] = useState("Most Relevant");
  const [selectedBookingExpert, setSelectedBookingExpert] = useState<Expert | null>(null);
  const [filters, setFilters] = useState<ReadonlySet<string>>(new Set());

  const toggleFilter = (option: string) =>
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  const clearFilters = () => setFilters(new Set());

  const expertCount = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, expertSearch, expertSortBy, filters).length,
    [expertSearch, expertSortBy, filters]
  );

  const handleBookExpert = (expert: Expert) => {
    setSelectedBookingExpert(expert);
    const bookingEl = document.getElementById("booking-section");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredScenarios = useMemo(() => {
    return getSortedAndFilteredScenarios(SCENARIOS, scenarioSearch, scenarioSortBy);
  }, [scenarioSearch, scenarioSortBy]);

  const handleFindExperts = (keyword: string) => {
    setExpertSearch(keyword);
    setExpertSortBy("Most Relevant");
    setViewMode("experts");
    document.getElementById("cye-toolbar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isExperts = viewMode === "experts";

  const toolbar = (
    <div id="cye-toolbar" className="scroll-mt-24">
      <Section04
        isMobile={isMobile}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={isExperts ? expertSearch : scenarioSearch}
        onSearchChange={isExperts ? setExpertSearch : setScenarioSearch}
        sortBy={isExperts ? expertSortBy : scenarioSortBy}
        onSortChange={isExperts ? setExpertSortBy : setScenarioSortBy}
        activeFilters={Array.from(filters)}
        onRemoveFilter={toggleFilter}
        onClearFilters={clearFilters}
        resultCount={expertCount}
      />
    </div>
  );

  const results = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={viewMode}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {isExperts ? (
          <div id="cye-results" role="tabpanel" aria-labelledby={isMobile ? "cye-tab-mobile-experts" : "cye-tab-experts"}>
            <Section05
              isMobile={isMobile}
              searchQuery={expertSearch}
              sortBy={expertSortBy}
              filters={filters}
              onClearFilters={clearFilters}
              onBookExpert={handleBookExpert}
            />
          </div>
        ) : (
          <ScenarioResults
            isMobile={isMobile}
            scenarios={filteredScenarios}
            searchQuery={scenarioSearch}
            onClearSearch={() => setScenarioSearch("")}
            onFindExperts={handleFindExperts}
            onPractice={handleBookExpert}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#FAFAFA]">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
      <section className="bg-[#FAFAFA] w-full pt-8 pb-6 lg:pb-8">
        <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-6 px-4 xl:px-0">
          {toolbar}
          {results}
        </div>
      </section>
      <Section06 isMobile={isMobile} onBookExpert={handleBookExpert} />
      <Section08 
        isMobile={isMobile} 
        selectedExpert={selectedBookingExpert}
        onSelectExpert={setSelectedBookingExpert}
      />
      <Footer isMobile={isMobile} />
    </div>
  );
}
