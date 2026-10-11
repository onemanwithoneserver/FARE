import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Check,
} from "lucide-react";
import { ACCENTS, HoverGlow, PrimaryButton, SecondaryButton, Section } from "../../../ui";
import { data as expertData, getSortedAndFilteredExperts, type Expert } from "../data";
import { DIFFICULTY_STYLES } from "../../section04/data";
import {
  scenarioResultsLabels,
  type ScenarioResultsProps,
  type ScenarioCardProps,
} from "./data";

export default function Mobile({
  scenarios,
  searchQuery,
  onClearSearch,
  onFindExperts,
  onPractice,
}: ScenarioResultsProps) {
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
    </Section>
  );
}

function ScenarioCard({
  scenario: sc,
  index,
  onFindExperts,
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

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-2 p-2.5 mt-auto">
        <div className="flex items-center justify-between text-[11px] font-medium text-[#475569]">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
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
            <span>{matchedExperts.length} mentors ready</span>
          </div>
          <span className="text-[9.5px] font-medium text-[#059669]">Role-Play</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-8.5 !py-0 !px-2 text-[11.5px] !rounded-[8px] font-medium bg-white"
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
            className="!h-8.5 !py-0 !px-2 text-[11.5px] !rounded-[8px] font-medium cursor-pointer"
          >
            Book Drill
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
