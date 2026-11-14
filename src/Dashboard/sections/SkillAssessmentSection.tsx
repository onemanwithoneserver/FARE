import { useState } from "react";
import {
  ShieldCheck,
  Award,
  AlertCircle,
  Play,
  RotateCcw,
} from "lucide-react";

export interface SkillAssessmentSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function SkillAssessmentSection({
  onNavigate,
}: SkillAssessmentSectionProps) {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);

  const assessments = [
    {
      id: "creat-benchmark",
      title: "Comprehensive Real Estate Aptitude Test (CREAT)",
      badge: "PLATFORM BENCHMARK",
      level: "Level 1 Diagnostic",
      duration: "45 mins",
      questionsCount: "50 Questions",
      passingScore: "75%",
      lastScore: "86% (Passed)",
      status: "Completed",
      description:
        "Evaluate your core aptitude across Hyderabad & Telangana land regulations, buyer psychology, mortgage fundamentals, and project feasibility.",
    },
    {
      id: "title-due-diligence",
      title: "Land Title Verification & Legal Clearance Test",
      badge: "LEGAL BENCHMARK",
      level: "Intermediate",
      duration: "30 mins",
      questionsCount: "30 Questions",
      passingScore: "80%",
      lastScore: "72% (Needs Retake)",
      status: "Retake Available",
      description:
        "Rigorous verification assessment focusing on link documents, encumbrance certificates, passbooks, and litigation risk detection.",
    },
    {
      id: "rera-statutory",
      title: "RERA & Statutory Approvals Compliance Exam",
      badge: "STATUTORY COMPLIANCE",
      level: "Advanced",
      duration: "35 mins",
      questionsCount: "35 Questions",
      passingScore: "85%",
      lastScore: "None yet",
      status: "Ready to Start",
      description:
        "Covers TG RERA clauses, layout sanctions, master plan reservations, green buffer regulations, and developer disclosure rules.",
    },
    {
      id: "negotiation-duel",
      title: "High-Ticket Client Negotiation Simulation Exam",
      badge: "SALES PROFICIENCY",
      level: "Executive Closer",
      duration: "40 mins",
      questionsCount: "25 Scenarios",
      passingScore: "80%",
      lastScore: "None yet",
      status: "Ready to Start",
      description:
        "Scenario-based assessment evaluating price concession defense, token payment securing, and payment schedule restructuring.",
    },
  ];

  const skillBreakdown = [
    { domain: "Micro-Market Knowledge", score: 88, status: "Excellent" },
    { domain: "Negotiation & Closing", score: 82, status: "Strong" },
    { domain: "Documentation & Paperwork", score: 76, status: "Proficient" },
    { domain: "Land Title Due Diligence", score: 68, status: "Needs Review" },
    { domain: "Statutory & RERA Compliance", score: 64, status: "Needs Review" },
  ];

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl xl:text-2xl font-bold text-[#0B1D3A] tracking-tight">
            Skill Assessment Center
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Take verified proctored diagnostic exams to validate real estate proficiency and unlock senior placement tiering.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate?.("knowledge-bank")}
          className="relative overflow-hidden group/btn flex items-center gap-2 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] shadow-[0_4px_12px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_20px_rgba(11,29,58,0.35)] transition-all cursor-pointer self-start sm:self-center hover:-translate-y-0.5"
        >
          <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
          <Award className="w-4 h-4 text-[#E2C068]" />
          <span>Practice in Knowledge Bank</span>
        </button>
      </div>

      {/* Domain Proficiency Summary */}
      <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-base font-bold text-[#0B1D3A]">
              Your Current Competency Matrix
            </h2>
            <p className="text-xs text-slate-500">
              Calculated from your last 3 proctored assessments
            </p>
          </div>
          <span className="text-xs font-bold text-[#0B1D3A] bg-[#F0F4FF] border border-[#0B1D3A]/10 px-3 py-1 rounded-[6px]">
            Overall Readiness: 76% (B+ Tier)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {skillBreakdown.map((item, idx) => (
            <div key={idx} className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] p-3.5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-slate-600 block leading-snug">
                  {item.domain}
                </span>
                <div className="text-xl font-black text-[#0B1D3A] mt-1">
                  {item.score}%
                </div>
              </div>
              <div className="mt-2.5">
                <div className="bg-slate-200 h-1.5 rounded-full overflow-hidden mb-1">
                  <div
                    className={`h-full rounded-full ${
                      item.score >= 80
                        ? "bg-emerald-500"
                        : item.score >= 70
                        ? "bg-gradient-to-r from-[#C99A2E] to-[#E2C068]"
                        : "bg-rose-500"
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-500">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment Test Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {assessments.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 flex flex-col justify-between gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-2 py-0.5 rounded-[4px]">
                  {test.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {test.level}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0B1D3A] leading-snug">
                {test.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {test.description}
              </p>

              <div className="grid grid-cols-3 gap-2 bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] p-3 mt-4 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Duration</span>
                  <span className="text-xs font-bold text-[#0B1D3A]">{test.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Items</span>
                  <span className="text-xs font-bold text-[#0B1D3A]">{test.questionsCount}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Benchmark</span>
                  <span className="text-xs font-bold text-[#0B1D3A]">{test.passingScore}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
              <div className="text-xs">
                <span className="text-slate-400">Previous Score: </span>
                <span className="font-bold text-[#0B1D3A]">{test.lastScore}</span>
              </div>

              {test.status === "Completed" ? (
                <button
                  type="button"
                  onClick={() => alert(`Reviewing results for: ${test.title}`)}
                  className="flex items-center gap-1.5 border border-[#E2E8F0] hover:bg-[#F0F4FF] text-[#0B1D3A] text-xs font-bold px-3.5 py-1.5 rounded-[8px] cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Review Analysis</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedAssessment(test.id)}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-bold px-4 py-2 rounded-[8px] cursor-pointer shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Play className="w-3.5 h-3.5 text-[#E2C068] fill-[#E2C068]" />
                  <span>{test.status === "Retake Available" ? "Retake Test" : "Start Test"}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simulated Modal when Starting Test */}
      {selectedAssessment && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[8px] shadow-[0_20px_50px_rgba(11,29,58,0.3)] border border-[#E2E8F0] max-w-md w-full p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-2.5 text-[#0B1D3A]">
              <ShieldCheck className="w-6 h-6 text-[#C99A2E]" />
              <h3 className="text-lg font-bold">Proctored Assessment Rules</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              This assessment enforces timing constraints and anti-switching detection. Ensure you have a stable internet connection and 30-45 minutes of uninterrupted focus.
            </p>
            <div className="bg-[#FEF9EE] border border-[#C99A2E]/30 rounded-[8px] p-3 text-xs text-[#0B1D3A] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
              <span>Once started, the timer cannot be paused. Your score will update on your FARE Agent Scorecard.</span>
            </div>
            <div className="flex items-center justify-end gap-2.5 mt-2">
              <button
                type="button"
                onClick={() => setSelectedAssessment(null)}
                className="px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-[#F0F4FF] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("Assessment launched in proctored mode!");
                  setSelectedAssessment(null);
                }}
                className="px-5 py-2 rounded-[8px] bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-bold cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
