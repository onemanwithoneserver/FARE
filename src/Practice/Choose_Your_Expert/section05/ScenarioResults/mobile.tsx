import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Check,
  ChevronDown,
} from "lucide-react";
import { ACCENTS, HoverGlow, PrimaryButton, SecondaryButton, Section } from "../../../ui";
import { data as expertData, getSortedAndFilteredExperts, type Expert } from "../data";
import { DIFFICULTY_STYLES, type Scenario } from "../../section04/data";
import {
  scenarioResultsLabels,
  type ScenarioResultsProps,
  type ScenarioCardProps,
} from "./data";
import { AdjacentExpertsCard } from "./desktop";

export default function Mobile({
  scenarios,
  searchQuery,
  onClearSearch,
  onPractice,
}: ScenarioResultsProps) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [bookingScenario, setBookingScenario] = useState<Scenario | null>(null);

  useEffect(() => {
    setVisibleCount(4);
  }, [searchQuery]);

  useEffect(() => {
    if (!bookingScenario) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [bookingScenario]);

  const displayedScenarios = useMemo(() => {
    return scenarios.slice(0, Math.max(4, visibleCount));
  }, [scenarios, visibleCount]);

  const matchedExperts = useMemo(() => {
    if (!bookingScenario) return [];
    const matched = getSortedAndFilteredExperts(
      expertData.experts,
      bookingScenario.expertKeyword,
      "Most Relevant"
    );
    return matched.length > 0 ? matched : expertData.experts;
  }, [bookingScenario]);

  return (
    <Section tone="white" mobile ariaLabel="Practice scenarios" className="!pt-2.5 !pb-8 bg-[#F8FAFD] font-['Outfit']">
      <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-mobile-scenarios" className="flex flex-col gap-3">
        <motion.div layout className="grid grid-cols-1 gap-3">
          <AnimatePresence mode="popLayout">
            {scenarios.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 px-4 bg-white rounded-[18px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#C99A2E] text-white flex items-center justify-center mb-3 shadow-xs">
                  <SearchX size={22} />
                </div>
                <h3 className="text-[16px] font-medium text-[#0B1D3A] mb-1 tracking-tight">
                  {scenarioResultsLabels.emptyTitle}
                </h3>
                <p className="text-[12.5px] text-[#7B8DAA] max-w-xs font-normal mb-3.5">
                  {scenarioResultsLabels.getEmptyDescription(searchQuery)}
                </p>
                <SecondaryButton
                  onClick={onClearSearch}
                  className="!h-8.5 !py-0 !px-3.5 text-[12px] !rounded-[8px] font-medium"
                >
                  {scenarioResultsLabels.clearSearch}
                </SecondaryButton>
              </motion.div>
            ) : (
              displayedScenarios.map((sc, i) => (
                <ScenarioCard
                  key={sc.id}
                  scenario={sc}
                  index={i}
                  onBookSession={(scenario) => setBookingScenario(scenario)}
                  onPractice={onPractice}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {visibleCount < scenarios.length && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 4, scenarios.length))}
              className="h-9 px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0B1D3A] font-bold text-[12px] flex items-center gap-1.5 shadow-2xs"
            >
              <span>Load More Scenarios</span>
              <ChevronDown size={14} className="text-[#64748B]" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {bookingScenario && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center p-0 "
            role="dialog"
            aria-modal="true"
            aria-label={`Specialists ready for ${bookingScenario.title}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingScenario(null)}
              className="fixed inset-0 bg-[#0B1D3A]/65 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-h-[88vh] bg-white rounded-t-[22px] shadow-2xl overflow-hidden flex flex-col"
            >
              <AdjacentExpertsCard
                scenario={bookingScenario}
                experts={matchedExperts}
                onPractice={(expert) => {
                  setBookingScenario(null);
                  onPractice(expert);
                }}
                onClose={() => setBookingScenario(null)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function ScenarioCard({
  scenario: sc,
  index,
  onBookSession,
  onPractice,
}: ScenarioCardProps) {
  const diff = DIFFICULTY_STYLES[sc.difficulty];
  const matchedExperts = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, sc.expertKeyword, "Most Relevant"),
    [sc.expertKeyword]
  );
  const shownAvatars = matchedExperts.slice(0, 3);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[18px] border border-[#E6EBF3] shadow-xs overflow-hidden flex flex-col relative group"
    >
      <HoverGlow accent={ACCENTS[index % ACCENTS.length]} />
      <div
        className="absolute top-0 inset-x-0 h-[2.5px]"
        style={{ background: `linear-gradient(90deg, ${diff.color}, #C99A2E)` }}
      />

      <div className="relative z-10 flex flex-col gap-2 p-3.5 pb-2">
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[9.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[9.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#0891B2] bg-[#E8F8FC] border border-[#0891B2]/20 px-1.5 py-0.5 rounded-[4px]">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
              <Clock size={8} strokeWidth={2.5} />
            </span>
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-medium text-[#0B1D3A] tracking-tight leading-snug text-[15px]">
          {sc.title}
        </h3>

        <div className="p-2.5 rounded-r-[8px] bg-[#FFFDF7] border-l-2 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[11.5px] text-[#475569] font-normal leading-relaxed italic">
          "{sc.summary}"
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-2 px-3.5 pb-2.5">
        <div className="flex items-center gap-2 p-1.5 rounded-[8px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <div className="w-6 h-6 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
            <Target size={11} />
          </div>
          <div className="min-w-0">
            <span className="block text-[9px] font-medium uppercase tracking-wider text-[#7B8DAA]">
              Persona
            </span>
            <span className="block text-[11.5px] font-medium text-[#0B1D3A] truncate">
              {sc.persona.name} · <span className="font-normal text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {sc.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] bg-[#F8F9FC] border border-[#E6EBF3] text-[10.5px] font-medium text-[#3B4D66]"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                <Check size={7.5} strokeWidth={3} />
              </span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex items-center justify-between gap-2.5 p-3 mt-auto">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="flex -space-x-1.5 shrink-0">
            {shownAvatars.map((ex: Expert) => (
              <img
                key={ex.name}
                src={ex.image}
                alt={ex.name}
                title={ex.name}
                loading="lazy"
                className="w-5.5 h-5.5 rounded-full object-cover border-2 border-white shadow-2xs"
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-[#475569] truncate">
            {matchedExperts.length} mentors ready
          </span>
        </div>

        <PrimaryButton
          variant="gold"
          onClick={() => (onBookSession ? onBookSession(sc) : onPractice(matchedExperts[0]))}
          className="!h-8 !py-0 !px-3.5 !w-auto text-[11.5px] !rounded-[8px] font-bold cursor-pointer shrink-0"
        >
          Book Session
        </PrimaryButton>
      </div>
    </motion.article>
  );
}
