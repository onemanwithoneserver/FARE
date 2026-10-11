import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Sparkles,
  Check,
} from "lucide-react";
import {
  ACCENTS,
  CARD_BASE,
  CARD_HOVER,
  HoverGlow,
  IconBadge,
  PrimaryButton,
  SecondaryButton,
  accentAt,
  EASE,
} from "../../../ui";
import { data as expertData, getSortedAndFilteredExperts, type Expert } from "../data";
import { DIFFICULTY_STYLES } from "../../section04/data";
import {
  scenarioResultsLabels,
  type ScenarioResultsProps,
  type ScenarioCardProps,
} from "./data";

export default function Desktop({
  scenarios,
  searchQuery,
  onClearSearch,
  onFindExperts,
  onPractice,
}: ScenarioResultsProps) {
  return (
    <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-scenarios" className="font-['Outfit']">
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {scenarios.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="col-span-full py-16 px-6 bg-white rounded-[16px] border border-dashed border-[#CBD5E1] text-center flex flex-col items-center justify-center luxury-shadow-sm"
            >
              <IconBadge icon={SearchX} accent={ACCENTS[1]} size="md" interactive={false} />
              <h3 className="text-[20px] font-bold text-[#0B1D3A] mt-5 mb-2 tracking-tight">
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
            scenarios.map((sc, i) => (
              <ScenarioCard
                key={sc.id}
                scenario={sc}
                index={i}
                onFindExperts={onFindExperts}
                onPractice={onPractice}
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ScenarioCard({
  scenario: sc,
  index,
  onFindExperts,
  onPractice,
}: ScenarioCardProps) {
  const diff = DIFFICULTY_STYLES[sc.difficulty];
  const a = accentAt(index + 2);
  const matchedExperts = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, sc.expertKeyword, "Most Relevant"),
    [sc.expertKeyword]
  );
  const shownAvatars = matchedExperts.slice(0, 3);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25), ease: EASE }}
      className={`${CARD_BASE} ${CARD_HOVER} overflow-hidden flex flex-col`}
    >
      <HoverGlow accent={a} />
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${diff.color}, #C99A2E)` }}
      />

      <div className="relative z-10 flex flex-col gap-4 p-6 pb-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
            <span className="text-[11.5px] font-semibold text-[#5A6B82] bg-[#F1F5F9] px-3 py-1 rounded-full">
              {sc.segment}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0E7490] bg-[#E8F8FC] px-2.5 py-1 rounded-full shrink-0">
            <Clock size={13} strokeWidth={2.5} aria-hidden="true" />
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-bold text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#8A5A00] transition-colors text-[19px]">
          {sc.title}
        </h3>

        <p className="p-4 rounded-r-[12px] bg-[#FFFDF7] border-l-4 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[13.5px] text-[#475569] font-medium leading-relaxed italic">
          "{sc.summary}"
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-5 flex-1 px-6 pb-6">
        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <span aria-hidden="true" className="w-9 h-9 rounded-[10px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
            <Target size={16} />
          </span>
          <div className="min-w-0">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-0.5">
              Customer persona
            </span>
            <span className="block text-[13.5px] font-semibold text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-medium text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-2">
            <Sparkles size={13} className="text-[#C99A2E]" aria-hidden="true" />
            What you'll practise
          </span>
          <ul className="flex flex-wrap gap-2">
            {sc.skills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12.5px] font-semibold text-[#3B4D66]"
              >
                <span aria-hidden="true" className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                  <Check size={10} strokeWidth={3.2} />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-4 p-5 mt-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex -space-x-2">
              {shownAvatars.map((ex: Expert) => (
                <img
                  key={ex.name}
                  src={ex.image}
                  alt={ex.name}
                  title={ex.name}
                  loading="lazy"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ))}
            </div>
            <span className="text-[12.5px] font-semibold text-[#475569]">
              {matchedExperts.length} verified mentors ready
            </span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] bg-[#E9FBF3] px-3 py-1 rounded-full border border-[#A7F3D0] shrink-0">
            1-on-1 role-play
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-11 !py-0 !px-3 !text-[13.5px] !rounded-[12px] bg-white hover:bg-[#F8FAFD]"
          >
            {scenarioResultsLabels.viewExperts}
          </SecondaryButton>

          <PrimaryButton
            full
            variant="gold"
            onClick={() => {
              if (matchedExperts[0]) {
                onPractice(matchedExperts[0]);
              } else {
                document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="!h-11 !py-0 !px-3 !text-[13.5px] !rounded-[12px]"
          >
            Book drill
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
