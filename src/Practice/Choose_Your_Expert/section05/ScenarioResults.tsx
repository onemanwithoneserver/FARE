import { useMemo, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Users,
  Star,
  UserRound,
  SearchX,
  Building2,
} from "lucide-react";
import { ACCENTS, HoverGlow, PrimaryButton, SecondaryButton, Section } from "../../ui";
import { data as expertData, getSortedAndFilteredExperts, type Expert } from "./data";
import { DIFFICULTY_STYLES, type Scenario } from "../section04/data";

interface Props {
  isMobile: boolean;
  scenarios: Scenario[];
  searchQuery: string;
  onClearSearch: () => void;
  onFindExperts: (keyword: string) => void;
  onPractice: (expert: Expert) => void;
}

export default function ScenarioResults({
  isMobile,
  scenarios,
  searchQuery,
  onClearSearch,
  onFindExperts,
  onPractice,
}: Props) {
  const content = (
    <div className={`flex flex-col ${isMobile ? "gap-4" : "gap-6"}`}>
      {/* Scenario grid */}
      <motion.div layout className={`grid gap-5 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 gap-6"}`}>
        <AnimatePresence mode="popLayout">
          {scenarios.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="col-span-full py-14 px-6 bg-white rounded-[24px] border border-[#E6EBF3] text-center flex flex-col items-center justify-center shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E] mb-4">
                <SearchX size={28} />
              </div>
              <h3 className="text-[20px] font-black text-[#0B1D3A] mb-2 tracking-tight">No Scenarios Found</h3>
              <p className="text-[14px] text-[#7B8DAA] max-w-md font-medium mb-5">
                No scenarios for this question match “{searchQuery}”. Try a different keyword or pick another question.
              </p>
              <SecondaryButton onClick={onClearSearch} className="!h-10 !py-0 !px-5 text-[13px] !rounded-[10px] font-bold">
                Clear Search
              </SecondaryButton>
            </motion.div>
          ) : (
            scenarios.map((sc, i) => (
              <ScenarioCard
                key={sc.id}
                scenario={sc}
                index={i}
                isMobile={isMobile}
                onFindExperts={onFindExperts}
                onPractice={onPractice}
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );

  if (isMobile) {
    return (
      <Section tone="white" mobile ariaLabel="Practice scenarios" className="!pt-4 !pb-12 bg-[#F8FAFD]">
        <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-mobile-scenarios">
          {content}
        </div>
      </Section>
    );
  }
  return (
    <div id="cye-results" role="tabpanel" aria-labelledby="cye-tab-scenarios">
      {content}
    </div>
  );
}

function ScenarioCard({
  scenario: sc,
  index,
  isMobile,
  onFindExperts,
  onPractice,
}: {
  scenario: Scenario;
  index: number;
  isMobile: boolean;
  onFindExperts: (keyword: string) => void;
  onPractice: (expert: Expert) => void;
}) {
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
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-sm hover:shadow-[0_24px_48px_-20px_rgba(11,29,58,0.22)] hover:-translate-y-1 hover:border-[#C99A2E]/30 transition-[box-shadow,transform,border-color] duration-300 overflow-hidden flex flex-col relative group"
    >
      <HoverGlow accent={ACCENTS[index % ACCENTS.length]} />
      {/* Difficulty hairline */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${diff.color}, ${diff.border})` }} />

      {/* Header */}
      <div className={`relative z-10 flex flex-col gap-3 ${isMobile ? "p-5 pb-4" : "p-6 pb-4"}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-[10.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border"
              style={{ color: diff.color, background: diff.bg, borderColor: diff.border }}
            >
              {sc.difficulty}
            </span>
            {sc.tag && (
              <span className="text-[10.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FBF5E7] text-[#8A5A00] border border-[#F1DFB0]">
                {sc.tag}
              </span>
            )}
          </div>
        </div>

        <h3 className={`font-black text-[#0B1D3A] tracking-tight leading-snug group-hover:text-[#1A3463] transition-colors ${isMobile ? "text-[17px]" : "text-[18px]"}`}>
          {sc.title}
        </h3>
        <p className="text-[13px] font-medium text-[#5A6B82] leading-relaxed">{sc.summary}</p>
      </div>

      {/* Body */}
      <div className={`relative z-10 flex flex-col gap-4 flex-1 ${isMobile ? "px-5 pb-5" : "px-6 pb-6"}`}>
        {/* Persona */}
        <div className="flex items-center gap-3 p-3 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#1E3A74] text-[#D5AA45] flex items-center justify-center shrink-0">
            <UserRound size={16} />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-[0.12em] text-[#7B8DAA]">Customer Persona</span>
            <span className="block text-[13px] font-bold text-[#0B1D3A] truncate">{sc.persona.name}</span>
            <span className="block text-[11.5px] font-medium text-[#7B8DAA] truncate">{sc.persona.profile}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA]">Skills You'll Practise</h4>
          <div className="flex flex-wrap gap-1.5">
            {sc.skills.map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12px] font-semibold text-[#475569]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E6EBF3] mt-auto">
          <Meta icon={<Clock size={14} className="text-[#0891B2]" />} label="Duration" value={`${sc.durationMin} min`} />
          <Meta icon={<Building2 size={14} className="text-[#7C3AED]" />} label="Segment" value={sc.segment} />
          <Meta icon={<Users size={14} className="text-[#EA580C]" />} label="Format" value="Live Role-Play" />
        </div>
      </div>

      {/* Footer */}
      <div className={`relative z-10 bg-[#F8FAFD] border-t border-[#E6EBF3] flex flex-col gap-4 ${isMobile ? "p-5" : "p-6"}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex -space-x-2.5">
              {shownAvatars.map((ex) => (
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
            <span className="text-[12px] font-bold text-[#475569] leading-tight">
              Verified experts available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <SecondaryButton
            full
            onClick={() => onFindExperts(sc.expertKeyword)}
            className="!h-11 !py-0 !px-2 text-[13px] !rounded-[10px] font-bold bg-white"
          >
            View Experts
          </SecondaryButton>
          <PrimaryButton
            full
            variant="gold"
            onClick={() => matchedExperts[0] && onPractice(matchedExperts[0])}
            className="!h-11 !py-0 !px-2 text-[13px] !rounded-[10px] font-bold cursor-pointer"
          >
            Book Session
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}

function Meta({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#7B8DAA]">
        {icon}
        {label}
      </span>
      <span className="text-[12.5px] font-bold text-[#0B1D3A] truncate">{value}</span>
    </div>
  );
}
