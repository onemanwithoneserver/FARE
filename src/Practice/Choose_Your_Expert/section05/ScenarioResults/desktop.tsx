import { useState, useMemo } from "react";
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
                className="w-full lg:col-span-7 lg:sticky lg:top-20 z-10"
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
  const matchedExperts = useMemo(
    () => getSortedAndFilteredExperts(expertData.experts, sc.expertKeyword, "Most Relevant"),
    [sc.expertKeyword]
  );
  const shownAvatars = matchedExperts.slice(0, 3);
  const cleanTitle = sc.title.replace(/^[“"']+|[”"']+$/g, "").trim();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25), ease: EASE }}
      onClick={onSelect}
      className={`w-full bg-white rounded-[22px] border transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${
        isSelected
          ? "border-[#C99A2E] ring-2 ring-[#C99A2E]/30 bg-[#FFFDF9] shadow-[0_22px_48px_-14px_rgba(201,154,46,0.25)]"
          : "border-[#E2E8F0] shadow-[0_4px_24px_rgba(11,29,58,0.04)] hover:shadow-[0_20px_40px_-14px_rgba(11,29,58,0.12)] hover:border-[#CBD5E1] hover:-translate-y-1"
      }`}
    >
      {/* Top Accent Hairline */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{
          background: isSelected
            ? "linear-gradient(90deg, #C99A2E, #F4D068, #0B1D3A)"
            : `linear-gradient(90deg, ${diff.color}, #C99A2E)`,
        }}
      />

      {/* Header Info */}
      <div className="p-6 pb-4 flex flex-col gap-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs"
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

          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0E7490] bg-[#E8F8FC] px-3 py-1 rounded-full shrink-0 border border-[#BAE6FD]">
            <Clock size={12} strokeWidth={2.5} aria-hidden="true" />
            {sc.durationMin} min
          </span>
        </div>

        <h3 className="font-extrabold text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#8A5A00] transition-colors text-[19px]">
          “{cleanTitle}”
        </h3>

        {/* Buyer Objection Quotation Card */}
        <div className="p-4 rounded-[14px] bg-[#FFFDF8] border-l-4 border-[#C99A2E] border-y border-r border-[#F3ECD9] shadow-2xs flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A5A00]">
            Customer Objection
          </span>
          <p className="text-[13.5px] text-[#475569] font-medium leading-relaxed italic">
            "{sc.summary}"
          </p>
        </div>
      </div>

      {/* Body: Buyer Persona & Skills */}
      <div className="flex flex-col gap-4 flex-1 px-6 pb-5">
        <div className="flex items-center gap-3 p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E2E8F0]">
          <span aria-hidden="true" className="w-8 h-8 rounded-[8px] bg-[#0B1D3A] text-[#E4C46A] flex items-center justify-center shrink-0 shadow-2xs">
            <Target size={15} />
          </span>
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-0.5">
              Target Buyer Persona
            </span>
            <span className="block text-[13px] font-bold text-[#0B1D3A] truncate">
              {sc.persona.name} — <span className="font-medium text-[#64748B]">{sc.persona.profile}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#C99A2E]" aria-hidden="true" />
            Skills Evaluated in this Drill
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {sc.skills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] bg-[#F1F5F9] border border-[#E2E8F0] text-[11.5px] font-semibold text-[#334155]"
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

      {/* Footer & Actions */}
      <div className="bg-[#FAFBFE] border-t border-[#EEF2F6] flex flex-col gap-3.5 p-5 mt-auto">
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
            <span className="text-[12px] font-bold text-[#475569]">
              {matchedExperts.length} verified mentors ready
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onSelect}
            title={`View verified specialists matched for “${cleanTitle}”`}
            className={`h-10 px-3 text-[12.5px] font-bold rounded-[10px] border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${FOCUS_RING} ${
              isSelected
                ? "bg-[#0B1D3A] text-white border-[#0B1D3A]"
                : "bg-white hover:bg-[#F8FAFD] border-[#CBD5E1] text-[#0B1D3A]"
            }`}
          >
            {isSelected ? "Viewing Mentors →" : "View Mentors"}
          </button>

          <button
            type="button"
            onClick={() => {
              if (matchedExperts[0]) {
                onPractice(matchedExperts[0]);
              } else {
                document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            title={`Book a live session for “${cleanTitle}”`}
            className={`h-10 px-3 text-[12.5px] font-bold rounded-[10px] bg-gradient-to-r from-[#C99A2E] via-[#D8AB3A] to-[#B8871F] hover:from-[#B8871F] hover:to-[#C99A2E] text-white shadow-xs transition-all flex items-center justify-center cursor-pointer ${FOCUS_RING}`}
          >
            Book Session
          </button>
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
  const cleanTitle = scenario.title.replace(/^[“"']+|[”"']+$/g, "").trim();

  return (
    <div className="w-full bg-white rounded-[22px] border border-[#E2E8F0] shadow-[0_24px_50px_-18px_rgba(11,29,58,0.25)] overflow-hidden flex flex-col font-['Outfit']">
      <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

      {/* Luxury Dark Header */}
      <div
        className="p-6 text-white relative shrink-0 overflow-hidden"
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
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/15 text-white/95 border border-white/10 shadow-2xs">
              {experts.length} Verified Mentors Available
            </span>
          </div>

          <h3 className="text-[21px] font-extrabold text-white tracking-tight leading-snug">
            Specialists for: “{cleanTitle}”
          </h3>

          <div className="flex items-center gap-2 mt-1 flex-wrap text-[12px] text-white/85">
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
      <div className="p-5 flex flex-col gap-4 max-h-[calc(100vh-210px)] overflow-y-auto bg-[#FAFAFA]">
        {experts.map((expert) => {
          return (
            <div
              key={expert.name}
              className="group p-5 rounded-[18px] bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/60 hover:shadow-lg transition-all flex flex-col gap-3.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <div
                      className="p-[2.5px] rounded-full"
                      style={{ background: "linear-gradient(135deg, #C99A2E, #F4D068)" }}
                    >
                      <div className="w-[58px] h-[58px] rounded-full overflow-hidden bg-white border-2 border-white">
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
                        size={19}
                        className="absolute -bottom-0.5 -right-0.5 ring-2 ring-white rounded-full shadow-xs"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-[16.5px] font-black text-[#0B1D3A] tracking-tight truncate">
                        {expert.name}
                      </h4>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                        ⭐ {expert.experience.split(" ")[0]} Yrs Experience
                      </span>
                    </div>
                    <p className="text-[12.5px] font-semibold text-[#64748B] truncate mt-0.5">
                      {expert.role}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11.5px] font-semibold text-[#475569]">
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <Globe2 size={12} />
                        {expert.languages.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Highlight Pill */}
              <div className="px-3 py-1.5 rounded-[10px] bg-[#FBF5E7] border border-[#F1DFB0] text-[12px] font-semibold text-[#8A5A00] flex items-center gap-2">
                <Sparkles size={13} className="text-[#C99A2E] shrink-0" />
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
                      className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-[6px] bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

              {/* Price & Action Row */}
              <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-[#F1F5F9]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA]">
                    Live 1-on-1 Simulation
                  </span>
                  <span className="text-[16px] font-black text-[#0B1D3A]">
                    {expert.price || "₹999"}{" "}
                    <span className="text-[11.5px] font-normal text-[#64748B]">/ {scenario.durationMin} min</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onPractice(expert)}
                  title={`Book live simulation with ${expert.name}`}
                  className={`h-9 px-4 text-[12.5px] font-bold rounded-[9px] bg-gradient-to-r from-[#C99A2E] via-[#D8AB3A] to-[#B8871F] hover:from-[#B8871F] hover:to-[#C99A2E] text-white shadow-xs transition-all flex items-center justify-center cursor-pointer shrink-0 ${FOCUS_RING}`}
                >
                  Book Session
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 bg-[#F8FAFD] border-t border-[#E2E8F0] text-center">
        <p className="text-[12px] font-medium text-[#5A6B82] flex items-center justify-center gap-2">
          <Award size={14} className="text-[#C99A2E] shrink-0" />
          Includes realistic objection simulation, instant coach feedback & structured score sheet.
        </p>
      </div>
    </div>
  );
}
