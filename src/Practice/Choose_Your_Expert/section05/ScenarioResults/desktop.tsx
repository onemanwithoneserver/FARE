import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Sparkles,
  CheckCircle2,
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
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {scenarios.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="col-span-full py-16 px-6 bg-white rounded-[24px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-4">
                <SearchX size={28} />
              </div>
              <h3 className="text-[20px] font-black text-[#0B1D3A] mb-2 tracking-tight">
                {scenarioResultsLabels.emptyTitle}
              </h3>
              <p className="text-[14px] text-[#7B8DAA] max-w-md font-medium mb-5">
                {scenarioResultsLabels.getEmptyDescription(searchQuery)}
              </p>
              <SecondaryButton
                onClick={onClearSearch}
                className="!h-10 !py-0 !px-5 text-[13px] !rounded-[10px] font-bold"
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
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_6px_20px_rgba(11,29,58,0.03)] hover:shadow-[0_20px_44px_-16px_rgba(11,29,58,0.18)] hover:-translate-y-1 hover:border-[#C99A2E]/40 transition-all duration-300 overflow-hidden flex flex-col relative group"
    >
      <HoverGlow accent={ACCENTS[index % ACCENTS.length]} />
      <div
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${diff.color}, #C99A2E)` }}
      />

      <div className="relative z-10 flex flex-col gap-3.5 p-6 pb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
            <span className="text-[10.5px] font-bold text-[#5A6B82] bg-[#F1F5F9] px-2 py-0.5 rounded-full">
              {sc.segment}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0891B2] bg-[#E8F8FC] border border-[#0891B2]/20 px-2 py-0.5 rounded-[6px]">
            <Clock size={11} strokeWidth={2.5} />
            {sc.durationMin} min drill
          </span>
        </div>

        <h3 className="font-black text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#C99A2E] transition-colors text-[19px]">
          {sc.title}
        </h3>

        <div className="p-3.5 rounded-r-[12px] bg-[#FFFDF7] border-l-3 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[13px] text-[#475569] font-medium leading-relaxed italic">
          "{sc.summary}"
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3.5 flex-1 px-6 pb-5">
        <div className="flex items-center gap-3 p-2.5 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#1E3A74] text-[#D5AA45] flex items-center justify-center shrink-0 shadow-xs">
            <Target size={14} />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
              Customer Persona
            </span>
            <span className="block text-[12.5px] font-bold text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-medium text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10.5px] font-black uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1">
            <Sparkles size={11} className="text-[#C99A2E]" />
            What You'll Practise:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {sc.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[11.5px] font-bold text-[#3B4D66]"
              >
                <CheckCircle2 size={11} className="text-[#10B981] shrink-0" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-3.5 p-5 mt-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex -space-x-2">
              {shownAvatars.map((ex: Expert) => (
                <img
                  key={ex.name}
                  src={ex.image}
                  alt={ex.name}
                  title={ex.name}
                  loading="lazy"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                />
              ))}
            </div>
            <span className="text-[11.5px] font-bold text-[#475569]">
              {matchedExperts.length} verified mentors ready
            </span>
          </div>

          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#059669] bg-[#E9FBF3] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
            1-on-1 Role-Play
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-10.5 !py-0 !px-2 text-[12.5px] !rounded-[11px] font-bold bg-white hover:bg-[#F8FAFD]"
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
            className="!h-10.5 !py-0 !px-2 text-[12.5px] !rounded-[11px] font-extrabold cursor-pointer shadow-sm"
          >
            Book Drill
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
