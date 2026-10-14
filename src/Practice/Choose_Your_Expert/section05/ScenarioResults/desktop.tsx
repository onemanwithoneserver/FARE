import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Sparkles,
  Check,
  Globe2,
  Building2,
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import {
  ACCENTS,
  IconBadge,
  SecondaryButton,
  VerifiedBadge,
  FOCUS_RING,
  EASE,
} from "../../../ui";
import { data as expertData, getSortedAndFilteredExperts, type Expert } from "../data";
import { DIFFICULTY_STYLES, type Scenario } from "../../section04/data";
import {
  scenarioResultsLabels,
  type ScenarioResultsProps,
  type ScenarioCardProps,
} from "./data";

export default function Desktop({
  scenarios,
  searchQuery,
  onClearSearch,
  onPractice,
}: ScenarioResultsProps) {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // Reset count and close split view on search query change
  useEffect(() => {
    setVisibleCount(4);
    setSelectedScenarioId(null);
  }, [searchQuery]);

  // Handle Escape key to close split view
  useEffect(() => {
    if (!selectedScenarioId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedScenarioId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedScenarioId]);

  const activeScenario = useMemo(() => {
    if (!selectedScenarioId) return null;
    return scenarios.find((s) => s.id === selectedScenarioId) ?? null;
  }, [scenarios, selectedScenarioId]);

  const isSplit = Boolean(activeScenario);

  const displayedScenarios = useMemo(() => {
    return scenarios.slice(0, Math.max(4, visibleCount));
  }, [scenarios, visibleCount]);

  const matchedExperts = useMemo(() => {
    if (!activeScenario) return [];
    const matched = getSortedAndFilteredExperts(expertData.experts, activeScenario.expertKeyword, "Most Relevant");
    return matched.length > 0 ? matched : expertData.experts;
  }, [activeScenario]);

  const handleToggleScenario = (sc: Scenario) => {
    setSelectedScenarioId((prev) => (prev === sc.id ? null : sc.id));
  };

  const handleActivateBookSession = (sc: Scenario) => {
    setSelectedScenarioId(sc.id);
  };

  return (
    <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-scenarios" className="font-['Outfit']">
      <AnimatePresence mode="popLayout">
        {scenarios.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="w-full py-16 px-6 bg-white rounded-[20px] border border-dashed border-[#CBD5E1] text-center flex flex-col items-center justify-center luxury-shadow-sm"
          >
            <IconBadge icon={SearchX} accent={ACCENTS[1]} size="md" interactive={false} />
            <h3 className="text-[20px] font-black text-[#0B1D3A] mt-5 mb-2 tracking-tight">
              {scenarioResultsLabels.emptyTitle}
            </h3>
            <p className="text-[14px] text-[#5A6B82] max-w-md font-medium leading-relaxed mb-6">
              {scenarioResultsLabels.getEmptyDescription(searchQuery)}
            </p>
            <SecondaryButton
              onClick={onClearSearch}
              className="!h-11 !py-0 !px-5 !text-[13.5px] !rounded-[12px]"
            >
              {scenarioResultsLabels.clearSearch}
            </SecondaryButton>
          </motion.div>
        ) : (
          <div className={`w-full ${isSplit ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : ""}`}>
            {/* Left side: Scenario Cards (2-column grid initially, 1-column when split) */}
            <motion.div
              layout
              transition={{ duration: 0.35, ease: EASE }}
              className={`w-full ${isSplit ? "lg:col-span-5" : ""}`}
            >
              <div
                className={`grid gap-5 ${
                  isSplit ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {displayedScenarios.map((sc, i) => (
                  <ScenarioCard
                    key={sc.id}
                    scenario={sc}
                    index={i}
                    isSelected={sc.id === selectedScenarioId}
                    onSelect={() => handleToggleScenario(sc)}
                    onBookSession={() => handleActivateBookSession(sc)}
                    onPractice={onPractice}
                  />
                ))}
              </div>

              {/* Load More Button - keeps at least 4 initially */}
              {visibleCount < scenarios.length && (
                <div className="flex flex-col items-center justify-center gap-2 pt-6 pb-2">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => Math.min(prev + 4, scenarios.length))}
                    className={`h-11 px-6 rounded-[12px] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFD] hover:border-[#C99A2E] text-[#0B1D3A] font-bold text-[13.5px] transition-all shadow-2xs hover:shadow-sm flex items-center gap-2.5 cursor-pointer ${FOCUS_RING}`}
                  >
                    <span>Load More Scenarios</span>
                    <span className="text-[11.5px] font-bold text-[#8A5A00] px-2 py-0.5 rounded-full bg-[#FBF5E7] border border-[#F1DFB0]">
                      +{Math.min(4, scenarios.length - visibleCount)} more
                    </span>
                    <ChevronDown size={15} className="text-[#64748B]" />
                  </button>
                  <span className="text-[12px] font-medium text-[#7B8DAA]">
                    Showing {displayedScenarios.length} of {scenarios.length} practice scenarios
                  </span>
                </div>
              )}
            </motion.div>

            {/* Right side: Matched specialists panel upon activating Book Session */}
            <AnimatePresence mode="wait">
              {activeScenario && (
                <motion.aside
                  key={activeScenario.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  aria-label={`Specialists ready for ${activeScenario.title}`}
                  className="w-full lg:col-span-7 lg:sticky lg:top-24 z-10"
                >
                  <AdjacentExpertsCard
                    scenario={activeScenario}
                    experts={matchedExperts}
                    onPractice={onPractice}
                    onClose={() => setSelectedScenarioId(null)}
                  />
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScenarioCard({
  scenario: sc,
  index,
  isSelected,
  onSelect,
  onBookSession,
}: ScenarioCardProps) {
  const diff = DIFFICULTY_STYLES[sc.difficulty];
  const matchedExperts = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, sc.expertKeyword, "Most Relevant"),
    [sc.expertKeyword]
  );
  const shownAvatars = matchedExperts.slice(0, 3);
  const cleanTitle = sc.title.replace(/^[“"']+|[”"']+$/g, "").trim();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2), ease: EASE }}
      onClick={onSelect}
      className={`w-full bg-white rounded-[22px] border transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${
        isSelected
          ? "border-[#C99A2E] ring-2 ring-[#C99A2E]/35 bg-[#FFFDF9] shadow-[0_20px_45px_-12px_rgba(201,154,46,0.25)]"
          : "border-[#E2E8F0] shadow-[0_4px_24px_rgba(11,29,58,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(11,29,58,0.1)] hover:border-[#CBD5E1] hover:-translate-y-0.5"
      }`}
    >
      {/* Top Accent Hairline */}
      <div
        aria-hidden="true"
        className="h-[3.5px] w-full"
        style={{
          background: isSelected
            ? "linear-gradient(90deg, #C99A2E, #F4D068, #0B1D3A)"
            : `linear-gradient(90deg, ${diff.color}, #C99A2E)`,
        }}
      />

      {/* Header Info */}
      <div className="p-5 pb-3.5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
            <span className="text-[11px] font-semibold text-[#5A6B82] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
              {sc.segment}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#0E7490] bg-[#E8F8FC] px-2.5 py-0.5 rounded-full shrink-0 border border-[#BAE6FD]">
            <Clock size={11} strokeWidth={2.5} aria-hidden="true" />
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-extrabold text-[#0B1D3A] tracking-tight leading-snug text-[18.5px]">
          “{cleanTitle}”
        </h3>

        {/* Buyer Objection Quotation Card */}
        <div className="p-3.5 rounded-[12px] bg-[#FFFDF8] border-l-3 border-[#C99A2E] border-y border-r border-[#F3ECD9] shadow-2xs flex flex-col gap-1">
          <span className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#8A5A00]">
            Customer Objection
          </span>
          <p className="text-[13px] text-[#475569] font-medium leading-relaxed italic">
            "{sc.summary}"
          </p>
        </div>
      </div>

      {/* Body: Buyer Persona & Skills */}
      <div className="flex flex-col gap-3.5 flex-1 px-5 pb-4">
        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E2E8F0]">
          <span aria-hidden="true" className="w-7 h-7 rounded-[7px] bg-[#0B1D3A] text-[#E4C46A] flex items-center justify-center shrink-0 shadow-2xs">
            <Target size={14} />
          </span>
          <div className="min-w-0">
            <span className="block text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-0.5">
              Target Buyer Persona
            </span>
            <span className="block text-[12.5px] font-bold text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-medium text-[#64748B]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-1.5">
            <Sparkles size={11} className="text-[#C99A2E]" aria-hidden="true" />
            Skills Evaluated in this Drill
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {sc.skills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[7px] bg-[#F1F5F9] border border-[#E2E8F0] text-[11px] font-semibold text-[#334155]"
              >
                <span aria-hidden="true" className="w-3 h-3 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                  <Check size={8} strokeWidth={3.2} />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer & Actions: "View Mentors" REMOVED, Reduced-width Book Session button beside avatars */}
      <div className="bg-[#FAFBFE] border-t border-[#EEF2F6] flex items-center justify-between gap-3 p-3.5 px-5 mt-auto">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex -space-x-2 shrink-0">
            {shownAvatars.map((ex: Expert) => (
              <img
                key={ex.name}
                src={ex.image}
                alt={ex.name}
                title={ex.name}
                loading="lazy"
                className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
              />
            ))}
          </div>
          <span className="text-[12px] font-bold text-[#475569] truncate">
            {matchedExperts.length} verified mentors ready
          </span>
        </div>

        {/* Reduced width Book Session button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onBookSession ? onBookSession(sc) : onSelect?.();
          }}
          title={`Activate specialists view for “${cleanTitle}”`}
          className={`h-9 px-4 text-[12.5px] font-bold rounded-[9px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 w-auto ${FOCUS_RING} ${
            isSelected
              ? "bg-[#0B1D3A] text-white shadow-xs hover:bg-[#122A50]"
              : "bg-gradient-to-r from-[#C99A2E] via-[#D8AB3A] to-[#B8871F] hover:from-[#B8871F] hover:to-[#C99A2E] text-white shadow-xs hover:shadow-[0_4px_14px_rgba(201,154,46,0.32)]"
          }`}
        >
          <span>{isSelected ? "Specialists Open →" : "Book Session"}</span>
          <ChevronRight size={13} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

export interface AdjacentExpertsCardProps {
  scenario: Scenario;
  experts: Expert[];
  onPractice: (expert: Expert) => void;
  onClose?: () => void;
}

export function AdjacentExpertsCard({ scenario, experts, onPractice, onClose }: AdjacentExpertsCardProps) {
  const cleanTitle = scenario.title.replace(/^[“"']+|[”"']+$/g, "").trim();

  return (
    <div className="w-full bg-white rounded-[22px] border border-[#E2E8F0] shadow-[0_12px_40px_-10px_rgba(11,29,58,0.1)] overflow-hidden flex flex-col font-['Outfit']">
      <div className="h-[3.5px] w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

      {/* Luxury Dark Header */}
      <div
        className="p-5 sm:p-6 text-white relative shrink-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #07152B 0%, #0F254B 50%, #17376D 100%)" }}
      >
        <span
          aria-hidden="true"
          className="absolute -top-10 -right-8 w-44 h-44 rounded-full blur-[48px]"
          style={{ background: "rgba(201,154,46,0.32)" }}
        />

        <div className="relative flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4C46A] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#E4C46A]" />
              1-on-1 Role-Play Specialists
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/15 text-white/95 border border-white/10 shadow-2xs">
                {experts.length} Verified Mentors Available
              </span>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close specialists view"
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={15} strokeWidth={2.4} />
                </button>
              )}
            </div>
          </div>

          <h3 className="text-[19px] sm:text-[21px] font-extrabold text-white tracking-tight leading-snug">
            Specialists for: “{cleanTitle}”
          </h3>

          <div className="flex items-center gap-2 mt-1 flex-wrap text-[11.5px] sm:text-[12px] text-white/85">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">
              <Clock size={12} className="text-[#E4C46A]" />
              {scenario.durationMin} min live session
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">
              <Target size={12} className="text-[#E4C46A]" />
              Buyer: {scenario.persona.name}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">
              <Building2 size={12} className="text-[#E4C46A]" />
              {scenario.segment}
            </span>
          </div>
        </div>
      </div>

      {/* Experts List inside Adjacent Card */}
      <div className="p-4 sm:p-5 flex flex-col gap-3.5 max-h-[calc(100vh-210px)] overflow-y-auto bg-[#FAFAFA]">
        {experts.map((expert) => {
          return (
            <div
              key={expert.name}
              className="group p-4 sm:p-5 rounded-[16px] bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/60 hover:shadow-md transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <div
                      className="p-[2px] rounded-full"
                      style={{ background: "linear-gradient(135deg, #C99A2E, #F4D068)" }}
                    >
                      <div className="w-[54px] h-[54px] rounded-full overflow-hidden bg-white border-2 border-white">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {expert.verified && (
                      <VerifiedBadge
                        size={18}
                        className="absolute -bottom-0.5 -right-0.5 ring-2 ring-white rounded-full shadow-xs"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-[16px] font-black text-[#0B1D3A] tracking-tight truncate">
                        {expert.name}
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                        ⭐ {expert.experience.split(" ")[0]} Yrs Exp
                      </span>
                    </div>
                    <p className="text-[12px] font-semibold text-[#64748B] truncate mt-0.5">
                      {expert.role}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-[11px] font-semibold text-[#475569]">
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <Globe2 size={11} />
                        {expert.languages.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Highlight Pill */}
              <div className="px-3 py-1.5 rounded-[9px] bg-[#FBF5E7] border border-[#F1DFB0] text-[11.5px] font-semibold text-[#8A5A00] flex items-center gap-2">
                <Sparkles size={12} className="text-[#C99A2E] shrink-0" />
                <span className="truncate">
                  Recommended for {scenario.skills[0] || "Objection Handling"} & Real-world Negotiation
                </span>
              </div>

              {/* Specialization Tags */}
              {expert.specialisedIn && expert.specialisedIn.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {expert.specialisedIn.slice(0, 3).map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-[6px] bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

              {/* Price & Action Row */}
              <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-[#F1F5F9]">
                <div className="flex flex-col">
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA]">
                    Live 1-on-1 Simulation
                  </span>
                  <span className="text-[15px] font-black text-[#0B1D3A]">
                    {expert.price || "₹999"}{" "}
                    <span className="text-[11px] font-normal text-[#64748B]">/ {scenario.durationMin} min</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onPractice(expert)}
                  title={`Book live simulation with ${expert.name}`}
                  className={`h-8.5 px-3.5 text-[12px] font-bold rounded-[8px] bg-gradient-to-r from-[#C99A2E] via-[#D8AB3A] to-[#B8871F] hover:from-[#B8871F] hover:to-[#C99A2E] text-white shadow-xs transition-all flex items-center justify-center cursor-pointer shrink-0 ${FOCUS_RING}`}
                >
                  Book Session
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3.5 bg-[#F8FAFD] border-t border-[#E2E8F0] text-center">
        <p className="text-[11.5px] font-medium text-[#5A6B82] flex items-center justify-center gap-1.5">
          <Award size={13} className="text-[#C99A2E] shrink-0" />
          Includes realistic objection simulation, instant coach feedback & structured score sheet.
        </p>
      </div>
    </div>
  );
}
