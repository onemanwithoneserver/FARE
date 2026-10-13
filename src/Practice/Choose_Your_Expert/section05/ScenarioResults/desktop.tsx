import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  SearchX,
  Target,
  Sparkles,
  Check,
  Star,
  Globe2,
  Building2,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  ACCENTS,
  CARD_BASE,
  CARD_HOVER,
  HoverGlow,
  IconBadge,
  PrimaryButton,
  SecondaryButton,
  VerifiedBadge,
  accentAt,
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
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenarios[0]?.id ?? "");

  const activeScenario = useMemo(() => {
    return scenarios.find((s) => s.id === selectedScenarioId) ?? scenarios[0] ?? null;
  }, [scenarios, selectedScenarioId]);

  const matchedExperts = useMemo(() => {
    if (!activeScenario) return [];
    const matched = getSortedAndFilteredExperts(expertData.experts, activeScenario.expertKeyword, "Most Relevant");
    return matched.length > 0 ? matched : expertData.experts;
  }, [activeScenario]);

  return (
    <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-scenarios" className="font-['Outfit']">
      <AnimatePresence mode="popLayout">
        {scenarios.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="w-full py-16 px-6 bg-white rounded-[16px] border border-dashed border-[#CBD5E1] text-center flex flex-col items-center justify-center luxury-shadow-sm"
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left side: Scenarios list */}
            <div className="w-full lg:col-span-5 flex flex-col gap-5">
              {scenarios.map((sc, i) => (
                <ScenarioCard
                  key={sc.id}
                  scenario={sc}
                  index={i}
                  isSelected={sc.id === activeScenario?.id}
                  onSelect={() => setSelectedScenarioId(sc.id)}
                  onPractice={onPractice}
                />
              ))}
            </div>

            {/* Right side: Adjacent Card showing matched experts */}
            {activeScenario && (
              <motion.aside
                key={activeScenario.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: EASE }}
                aria-label={`Experts ready for ${activeScenario.title}`}
                className="w-full lg:col-span-7 lg:sticky lg:top-24 z-10"
              >
                <AdjacentExpertsCard
                  scenario={activeScenario}
                  experts={matchedExperts}
                  onPractice={onPractice}
                />
              </motion.aside>
            )}
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
      onClick={onSelect}
      className={`${CARD_BASE} ${CARD_HOVER} overflow-hidden flex flex-col cursor-pointer transition-all ${
        isSelected
          ? "!border-[#C99A2E] ring-2 ring-[#C99A2E]/30 !bg-[#FFFDF9] shadow-[0_20px_40px_-16px_rgba(201,154,46,0.25)]"
          : "hover:border-[#CBD5E1]"
      }`}
    >
      <HoverGlow accent={a} />
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{
          background: isSelected
            ? "linear-gradient(90deg, #C99A2E, #E4C46A, #0B1D3A)"
            : `linear-gradient(90deg, ${diff.color}, #C99A2E)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3.5 p-5 pb-4">
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
            <span className="text-[11.5px] font-semibold text-[#5A6B82] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
              {sc.segment}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0E7490] bg-[#E8F8FC] px-2.5 py-1 rounded-full shrink-0">
            <Clock size={13} strokeWidth={2.5} aria-hidden="true" />
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-bold text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#8A5A00] transition-colors text-[18px]">
          {sc.title}
        </h3>

        <p className="p-3.5 rounded-r-[12px] bg-[#FFFDF7] border-l-4 border-[#C99A2E] border-y border-r border-[#F5EED9] text-[13px] text-[#475569] font-medium leading-relaxed italic">
          "{sc.summary}"
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 flex-1 px-5 pb-5">
        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <span aria-hidden="true" className="w-8 h-8 rounded-[8px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
            <Target size={15} />
          </span>
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-0.5">
              Customer persona
            </span>
            <span className="block text-[13px] font-semibold text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-medium text-[#5A6B82]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#C99A2E]" aria-hidden="true" />
            What you'll practise
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {sc.skills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12px] font-semibold text-[#3B4D66]"
              >
                <span aria-hidden="true" className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                  <Check size={9} strokeWidth={3.2} />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 bg-[#FAFBFE] border-t border-[#E6EBF3] flex flex-col gap-3.5 p-4 mt-auto">
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
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                />
              ))}
            </div>
            <span className="text-[12px] font-semibold text-[#475569]">
              {matchedExperts.length} verified mentors ready
            </span>
          </div>

          <span
            className={`text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shrink-0 transition-colors ${
              isSelected
                ? "bg-[#C99A2E] text-white border-[#C99A2E]"
                : "text-[#059669] bg-[#E9FBF3] border-[#A7F3D0]"
            }`}
          >
            {isSelected ? "Selected" : "1-on-1 role-play"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <SecondaryButton
            full
            onClick={onSelect}
            className={`!h-10 !py-0 !px-3 !text-[13px] !rounded-[10px] ${
              isSelected ? "!bg-[#0B1D3A] !text-white !border-[#0B1D3A]" : "bg-white hover:bg-[#F8FAFD]"
            }`}
          >
            {isSelected ? "Viewing Mentors" : scenarioResultsLabels.viewExperts}
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
            className="!h-10 !py-0 !px-3 !text-[13px] !rounded-[10px]"
          >
            Book Session
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}

interface AdjacentExpertsCardProps {
  scenario: Scenario;
  experts: Expert[];
  onPractice: (expert: Expert) => void;
}

function AdjacentExpertsCard({ scenario, experts, onPractice }: AdjacentExpertsCardProps) {
  return (
    <div className="w-full bg-white rounded-[16px] border border-[#E6EBF3] shadow-[0_24px_50px_-18px_rgba(11,29,58,0.25)] overflow-hidden flex flex-col font-['Outfit']">
      <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

      {/* Header */}
      <div
        className="p-5 text-white relative shrink-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0B1D3A 0%,#122A50 55%,#1B3A6B 100%)" }}
      >
        <span
          aria-hidden="true"
          className="absolute -top-10 -right-8 w-40 h-40 rounded-full blur-[44px]"
          style={{ background: "rgba(201,154,46,0.3)" }}
        />

        <div className="relative flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4C46A] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#E4C46A]" />
              1-on-1 Role-Play Specialists
            </span>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white/95">
              {experts.length} Verified Mentors Available
            </span>
          </div>

          <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug line-clamp-2">
            Mentors for: "{scenario.title}"
          </h3>

          <div className="flex items-center gap-2 mt-1 flex-wrap text-[12px] text-white/80">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
              <Clock size={12} className="text-[#E4C46A]" />
              {scenario.durationMin} min live session
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
              <Target size={12} className="text-[#E4C46A]" />
              {scenario.persona.name}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
              <Building2 size={12} className="text-[#E4C46A]" />
              {scenario.segment}
            </span>
          </div>
        </div>
      </div>

      {/* Experts List */}
      <div className="p-4 flex flex-col gap-3.5 max-h-[calc(100vh-220px)] overflow-y-auto bg-[#FAFAFA]">
        {experts.map((expert) => {
          return (
            <div
              key={expert.name}
              className="group p-4 rounded-[14px] bg-white border border-[#E6EBF3] hover:border-[#C99A2E]/60 hover:shadow-md transition-all flex flex-col gap-3.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <div
                      className="p-[2px] rounded-full"
                      style={{ background: "linear-gradient(135deg,#C99A2E,#F4D068)" }}
                    >
                      <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-white border-2 border-white">
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
                      <h4 className="text-[15.5px] font-bold text-[#0B1D3A] tracking-tight truncate">
                        {expert.name}
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3FF] text-[#2563EB]">
                        {expert.experience}
                      </span>
                    </div>
                    <p className="text-[12.5px] font-medium text-[#5A6B82] truncate mt-0.5">
                      {expert.role}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11.5px] font-semibold text-[#475569]">
                      <span className="flex items-center gap-1 text-[#8A5A00]">
                        <Star size={12} className="fill-[#C99A2E] text-[#C99A2E]" />
                        4.9 ({expert.sessionsCompleted} sessions)
                      </span>
                      <span className="flex items-center gap-1 text-[#5A6B82]">
                        <Globe2 size={12} />
                        {expert.languages.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialization Tags */}
              {expert.specialisedIn && expert.specialisedIn.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {expert.specialisedIn.slice(0, 3).map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

              {/* Price & Action Row */}
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#F1F5F9]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA]">
                    Live 1-on-1 Session
                  </span>
                  <span className="text-[14px] font-bold text-[#0B1D3A]">
                    ₹{expert.price || "1,299"}{" "}
                    <span className="text-[11.5px] font-normal text-[#5A6B82]">/ {scenario.durationMin} min</span>
                  </span>
                </div>

                <PrimaryButton
                  variant="gold"
                  onClick={() => onPractice(expert)}
                  className="!h-9 !py-0 !px-4 !text-[12.5px] !rounded-[10px] shrink-0"
                >
                  Book Session
                </PrimaryButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3.5 bg-[#F8FAFD] border-t border-[#E6EBF3] text-center">
        <p className="text-[11.5px] font-medium text-[#5A6B82] flex items-center justify-center gap-1.5">
          <Award size={13} className="text-[#C99A2E]" />
          Includes realistic objection simulation, instant feedback & performance scoring sheet.
        </p>
      </div>
    </div>
  );
}

