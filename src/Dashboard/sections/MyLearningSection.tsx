import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  Award,
  Clock,
  ArrowRight,
  Download,
} from "lucide-react";
import { coursesData } from "../courses/data";
import AdBanner from "../components/AdBanner";

export interface MyLearningSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function MyLearningSection({ onNavigate }: MyLearningSectionProps) {
  const [activeTab, setActiveTab] = useState<"in-progress" | "completed" | "saved" | "certificates">("in-progress");

  const tabs = [
    { id: "in-progress", label: "In Progress", count: 8, icon: BookOpen },
    { id: "completed", label: "Completed", count: 4, icon: CheckCircle2 },
    { id: "saved", label: "Saved", count: 3, icon: Bookmark },
    { id: "certificates", label: "Certificates", count: 2, icon: Award },
  ];

  const certificates = [
    {
      id: "cert-1",
      title: "Real Estate Title Verification & Due Diligence",
      issueDate: "28 Oct 2026",
      credentialId: "FARE-CERT-2026-9812",
      instructor: "Advocate R. V. Sharma · Senior Legal Faculty",
      grade: "Grade A+ (96%)",
    },
    {
      id: "cert-2",
      title: "High-Ticket Plot Pitch & Closing Accelerator",
      issueDate: "12 Sep 2026",
      credentialId: "FARE-CERT-2026-8430",
      instructor: "FARE Academy Leadership Council",
      grade: "Grade A (91%)",
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl xl:text-2xl font-bold text-[#0B1D3A] tracking-tight">
            My Learning Hub
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Monitor your personal training tracks, enrolled courses, and earned certifications.
          </p>
        </div>

        {/* Weekly Goal Widget */}
        <div className="bg-white border border-[#E2E8F0] rounded-[8px] px-4 py-2.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-200">
            80%
          </div>
          <div>
            <div className="text-xs font-bold text-[#0B1D3A]">
              Weekly Goal: 4 / 5 hrs
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              1 hr remaining to hit this week's target
            </div>
          </div>
        </div>
      </div>

      {/* ADVERTISEMENT: Progress & Learning Track Banner */}
      <AdBanner variant="progress" label="SPONSORED AD" height={88} />

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-[8px] text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#0B1D3A] text-white shadow-[0_4px_12px_rgba(11,29,58,0.25)]"
                  : "bg-white border border-[#E2E8F0] text-slate-600 hover:bg-[#F0F4FF] hover:border-[#C99A2E]/40"
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#E2C068]" />
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-[#F0F4FF] text-[#0B1D3A]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "in-progress" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {coursesData.slice(0, 6).map((course) => (
            <div
              key={course.id}
              onClick={() => onNavigate?.("courses")}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex flex-col justify-between gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-2 py-0.5 rounded-[4px]">
                    {course.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C99A2E]" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {course.overviewDescription}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1.5 text-slate-600">
                  <span>Progress</span>
                  <span className="font-bold text-[#0B1D3A]">{course.progressPercent}%</span>
                </div>
                <div className="bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full transition-all"
                    style={{ width: `${course.progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#E2E8F0]">
                  <span className="text-[11px] text-slate-400">
                    Updated {course.updatedAt}
                  </span>
                  <span className="text-xs font-bold text-[#0B1D3A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C99A2E]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "completed" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coursesData.slice(0, 4).map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex items-center justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300 gap-4"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-[8px] bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1D3A] truncate">
                    {course.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Completed with 100% attendance · Exam Score: 94%
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Reviewing course: ${course.title}`)}
                className="px-3.5 py-1.5 rounded-[8px] border border-[#E2E8F0] text-xs font-bold text-[#0B1D3A] hover:bg-[#F0F4FF] shrink-0 cursor-pointer transition-colors"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 flex flex-col justify-between gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-[8px] bg-gradient-to-br from-[#FEF9EE] to-[#FFF4D9] border border-[#C99A2E]/30 text-[#C99A2E] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-2 py-0.5 rounded-[4px]">
                      Verified Certificate
                    </span>
                    <h3 className="text-base font-bold text-[#0B1D3A] mt-1.5 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cert.instructor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFD] rounded-[8px] border border-[#E2E8F0] p-3 flex items-center justify-between text-xs text-slate-600 font-medium">
                <div>
                  <span className="text-slate-400 block text-[10px]">Issued On</span>
                  <strong>{cert.issueDate}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Credential ID</span>
                  <span className="font-mono text-[11px] font-bold text-[#0B1D3A]">{cert.credentialId}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Achievement</span>
                  <strong className="text-emerald-600">{cert.grade}</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => alert(`Downloading certificate: ${cert.credentialId}`)}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-semibold px-4 py-2 rounded-[8px] shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#E2C068]" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-8 text-center flex flex-col items-center justify-center gap-3 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
          <Bookmark className="w-8 h-8 text-[#C99A2E]" />
          <h3 className="text-sm font-bold text-[#0B1D3A]">
            3 Saved Bookmarks for Later
          </h3>
          <p className="text-xs text-slate-500 max-w-md">
            Review saved case studies, legal checklist templates, and recorded mock sessions whenever you have free time.
          </p>
          <button
            type="button"
            onClick={() => onNavigate?.("courses")}
            className="mt-2 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] text-white text-xs font-bold px-4 py-2 rounded-[8px] shadow-sm hover:shadow-md cursor-pointer transition-all"
          >
            Browse Catalogue
          </button>
        </div>
      )}
    </div>
  );
}
