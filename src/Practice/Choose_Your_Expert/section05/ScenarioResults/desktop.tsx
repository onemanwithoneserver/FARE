import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Sparkles,
  Check,
} from "lucide-react";
import { ACCENTS, HoverGlow, PrimaryButton, SecondaryButton } from "../../../ui";
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
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {scenarios.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="col-span-full py-12 px-5 bg-white rounded-[20px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#C99A2E] text-white flex items-center justify-center mb-3 shadow-xs">
                <SearchX size={22} />
              </div>
              <h3 className="text-[17px] font-medium text-[#0B1D3A] mb-1.5 tracking-tight">
                {scenarioResultsLabels.emptyTitle}
              </h3>
              <p className="text-[13px] text-[#7B8DAA] max-w-md font-normal mb-4">
                {scenarioResultsLabels.getEmptyDescription(searchQuery)}
              </p>
              <SecondaryButton
                onClick={onClearSearch}
                className="!h-9 !py-0 !px-4 text-[12px] !rounded-[9px] font-medium"
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
  const matchedExperts = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, sc.expertKeyword, "Most Relevant"),
    [sc.expertKeyword]
  );
  const shownAvatars = matchedExperts.slice(0, 3);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:shadow-[0_12px_28px_-12px_rgba(11,29,58,0.12)] hover:-translate-y-0.5 hover:border-[#C99A2E]/40 transition-all duration-300 overflow-hidden flex flex-col relative group"
    >
      <HoverGlow accent={ACCENTS[index % ACCENTS.length]} />
      <div
        className="absolute top-0 inset-x-0 h-[2.5px]"
        style={{ background: `linear-gradient(90deg, ${diff.color}, #C99A2E)` }}
      />

      <div className="relative z-10 flex flex-col gap-2.5 p-4 pb-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
            <span className="text-[10px] font-medium text-[#5A6B82] bg-[#F1F5F9] px-2 py-0.5 rounded-full">
              {sc.segment}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-[#0891B2] bg-[#E8F8FC] border border-[#0891B2]/20 px-2 py-0.5 rounded-[5px]">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
              <Clock size={8.5} strokeWidth={2.5} />
            </span>
            {sc.durationMin} min drill
          </span>
        </div>

        <h3 className="font-medium text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#C99A2E] transition-colors text-[16px]">
          {sc.title}
        </h3>

        <div className="p-2.5 rounded-r-[10px] bg-[#FFFDF7] border-l-2 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[12px] text-[#475569] font-normal leading-relaxed italic">
          "{sc.summary}"
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-2.5 flex-1 px-4 pb-3">
        <div className="flex items-center gap-2.5 p-2 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <div className="w-6.5 h-6.5 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Target size={11} />
          </div>
          <div className="min-w-0">
            <span className="block text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#7B8DAA]">
              Customer Persona
            </span>
            <span className="block text-[12px] font-medium text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-normal text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
              <Sparkles size={8.5} />
            </span>
            What You'll Practise:
          </span>
          <div className="flex flex-wrap gap-1">
            {sc.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[5px] bg-[#F8F9FC] border border-[#E6EBF3] text-[11px] font-medium text-[#3B4D66]"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                  <Check size={8} strokeWidth={3} />
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-2.5 p-3 mt-auto">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex -space-x-1.5">
              {shownAvatars.map((ex: Expert) => (
                <img
                  key={ex.name}
                  src={ex.image}
                  alt={ex.name}
                  title={ex.name}
                  loading="lazy"
                  className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-2xs"
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-[#475569]">
              {matchedExperts.length} verified mentors ready
            </span>
          </div>

          <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#059669] bg-[#E9FBF3] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
            1-on-1 Role-Play
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-9 !py-0 !px-2 text-[11.5px] !rounded-[9px] font-medium bg-white hover:bg-[#F8FAFD]"
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
            className="!h-9 !py-0 !px-2 text-[11.5px] !rounded-[9px] font-medium cursor-pointer shadow-xs"
          >
            Book Drill
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
