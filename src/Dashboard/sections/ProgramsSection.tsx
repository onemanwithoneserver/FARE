import {
  GraduationCap,
  Layers,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Briefcase,
} from "lucide-react";

export interface ProgramsSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function ProgramsSection({ onNavigate }: ProgramsSectionProps) {
  const programs = [
    {
      id: "placement-program",
      title: "Residential Sales Placement Program",
      badge: "CAREER ACCELERATOR",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Full comprehensive job-ready track for high-ticket residential real estate agents, covering lead sourcing, site walkthroughs, and closure.",
      duration: "12 Weeks · 80 Hours",
      modulesCount: 8,
      enrolledCount: "1,240 enrolled",
      placementRate: "94% Placement Rate",
      topics: [
        "Core Micro-market Economics",
        "Cold Calling & Objection Reversals",
        "RERA & Title Verification",
        "High-Ticket Closing Psychology",
      ],
      isEnrolled: true,
      progress: 65,
    },
    {
      id: "open-plots-accelerator",
      title: "Open Plot & Farmland Closer Accelerator",
      badge: "SPECIALIST TRACK",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description:
        "Master the Telangana & AP plotted development corridors. Deep dive into HMDA, DTCP, and Gram Panchayat land classification laws.",
      duration: "6 Weeks · 40 Hours",
      modulesCount: 6,
      enrolledCount: "890 enrolled",
      placementRate: "Immediate Deal Closures",
      topics: [
        "Regional Master Plans (ORR & RRR)",
        "Passbook & Dharani Land Verifications",
        "Open Plot Client Pitch Scripts",
        "Legal Pitfalls in Agricultural Land",
      ],
      isEnrolled: false,
    },
    {
      id: "team-scale-up",
      title: "Real Estate Leadership & Team Scale-Up",
      badge: "EXECUTIVE PROGRAM",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description:
        "Designed for team leaders, channel partners, and brokers building high-performance sales forces and multi-tier commission models.",
      duration: "8 Weeks · 50 Hours",
      modulesCount: 7,
      enrolledCount: "430 enrolled",
      placementRate: "3x Team Productivity",
      topics: [
        "Recruitment & Agent Onboarding",
        "Pipeline Management & Daily Habits",
        "Commission Tier Architecture",
        "Sales Contests & Culture Engineering",
      ],
      isEnrolled: true,
      progress: 30,
    },
    {
      id: "commercial-closers",
      title: "Commercial & Retail Leasing Mastery",
      badge: "HIGH-TICKET ASSETS",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description:
        "Navigate institutional leases, rental yield modeling, pre-leased retail properties, and corporate tenant negotiations.",
      duration: "10 Weeks · 65 Hours",
      modulesCount: 9,
      enrolledCount: "310 enrolled",
      placementRate: "Corporate Brokerage",
      topics: [
        "Cap Rates & Net Operating Income",
        "LOI & Term Sheet Structuring",
        "Fit-out & Lock-in Clauses",
        "Retail Brand Tenant Profiling",
      ],
      isEnrolled: false,
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl xl:text-2xl font-bold text-[#0B1D3A] tracking-tight">
            Programs & Career Tracks
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Structured real estate career programs with dedicated mentorship and certifications.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate?.("courses")}
          className="relative overflow-hidden group/btn flex items-center gap-2 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] shadow-[0_4px_12px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_20px_rgba(11,29,58,0.35)] transition-all cursor-pointer self-start sm:self-center hover:-translate-y-0.5"
        >
          <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
          <Layers className="w-4 h-4 text-[#E2C068]" />
          <span>Browse Individual Courses</span>
        </button>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 flex flex-col justify-between gap-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span
                  className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-[4px] border border-[#C99A2E]/30 bg-[#FEF9EE] text-[#C99A2E]"
                >
                  {prog.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[4px] flex items-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-600" />
                  {prog.placementRate}
                </span>
              </div>

              <h2 className="text-lg font-bold text-[#0B1D3A] leading-snug">
                {prog.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {prog.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mt-3 pt-3 border-t border-[#E2E8F0]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C99A2E]" />
                  {prog.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C99A2E]" />
                  {prog.modulesCount} Core Modules
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  {prog.enrolledCount}
                </span>
              </div>

              {/* Topics Highlight */}
              <div className="mt-4 bg-[#F8FAFD] rounded-[8px] border border-[#E2E8F0] p-3.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E] mb-2">
                  Curriculum Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {prog.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A2E] shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Status & Actions */}
            <div>
              {prog.isEnrolled ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <span>Your Track Progress</span>
                    <strong className="text-[#0B1D3A]">{prog.progress}% Completed</strong>
                  </div>
                  <div className="bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full transition-all"
                      style={{ width: `${prog.progress}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("courses")}
                    className="w-full mt-2 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-bold py-2.5 rounded-[8px] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Resume Program</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E2C068]" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => alert(`View syllabus for: ${prog.title}`)}
                    className="flex-1 border border-[#E2E8F0] hover:bg-[#F0F4FF] text-[#0B1D3A] text-xs font-bold py-2.5 rounded-[8px] transition-colors cursor-pointer text-center"
                  >
                    View Syllabus
                  </button>
                  <button
                    type="button"
                    onClick={() => alert(`Enrolling in: ${prog.title}`)}
                    className="relative overflow-hidden group/btn flex-1 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold py-2.5 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 hover:-translate-y-0.5"
                  >
                    <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                    <span>Enroll Now</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
