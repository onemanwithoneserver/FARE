import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  CheckCircle2,
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
    <Section tone="white" mobile ariaLabel="Practice scenarios" className="!pt-3 !pb-10 bg-[#F8FAFD] font-['Outfit']">
      <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-mobile-scenarios" className="flex flex-col gap-4">
        <motion.div layout className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {scenarios.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 px-5 bg-white rounded-[20px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-3.5">
                  <SearchX size={24} />
                </div>
                <h3 className="text-[18px] font-black text-[#0B1D3A] mb-1.5 tracking-tight">
                  {scenarioResultsLabels.emptyTitle}
                </h3>
                <p className="text-[13px] text-[#7B8DAA] max-w-xs font-medium mb-4">
                  {scenarioResultsLabels.getEmptyDescription(searchQuery)}
                </p>
                <SecondaryButton
                  onClick={onClearSearch}
                  className="!h-9 !py-0 !px-4 text-[12.5px] !rounded-[10px] font-bold"
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
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-xs overflow-hidden flex flex-col relative group"
    >
      <HoverGlow accent={ACCENTS[index % ACCENTS.length]} />
      <div
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${diff.color}, #C99A2E)` }}
      />

      <div className="relative z-10 flex flex-col gap-3 p-4.5 pb-3">
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#0891B2] bg-[#E8F8FC] border border-[#0891B2]/20 px-2 py-0.5 rounded-[5px]">
            <Clock size={10} strokeWidth={2.5} />
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-black text-[#0B1D3A] tracking-tight leading-snug text-[17px]">
          {sc.title}
        </h3>

        <div className="p-3 rounded-r-[10px] bg-[#FFFDF7] border-l-2 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[12px] text-[#475569] font-medium leading-relaxed italic">
          "{sc.summary}"
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 px-4.5 pb-4">
        <div className="flex items-center gap-2.5 p-2 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#1E3A74] text-[#D5AA45] flex items-center justify-center shrink-0">
            <Target size={13} />
          </div>
          <div className="min-w-0">
            <span className="block text-[9.5px] font-black uppercase tracking-wider text-[#7B8DAA]">
              Persona
            </span>
            <span className="block text-[12px] font-bold text-[#0B1D3A] truncate">
              {sc.persona.name} · <span className="font-medium text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {sc.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-[#F8F9FC] border border-[#E6EBF3] text-[11px] font-bold text-[#3B4D66]"
            >
              <CheckCircle2 size={10} className="text-[#10B981] shrink-0" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-3 p-4 mt-auto">
        <div className="flex items-center justify-between text-[11.5px] font-bold text-[#475569]">
          <div className="flex items-center gap-2">
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
            <span>{matchedExperts.length} mentors ready</span>
          </div>
          <span className="text-[10px] font-bold text-[#059669]">Role-Play</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-9.5 !py-0 !px-2 text-[12px] !rounded-[9px] font-bold bg-white"
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
            className="!h-9.5 !py-0 !px-2 text-[12px] !rounded-[9px] font-extrabold cursor-pointer"
          >
            Book Drill
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
