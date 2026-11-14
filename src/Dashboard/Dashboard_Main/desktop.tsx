import { useState } from "react";
import {
  Users,
  CheckCircle2,
  BookOpen,
  Award,
  Download,
  UserPlus,
  SlidersHorizontal,
  Shield,
  X,
  Check,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import {
  companyOverviewHeader,
  metricCardsData,
  zoneSummariesData,
  quickActionItems,
  type MetricCardData,
  type ZoneSummary,
  type QuickActionItem,
} from "./data";
import Sidebar from "../sidebar";
import { BillboardAd, SidebarWidgetAd } from "../ads";

export interface DashboardMainDesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function DashboardMainDesktop({
  hideSidebar = false,
  activeSubSection,
}: DashboardMainDesktopProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteZone, setInviteZone] = useState("Mumbai North");
  const [inviteSent, setInviteSent] = useState(false);
  const isZoneSummaryFocused = activeSubSection === "zone-summary";

  const renderMetricIcon = (icon: string) => {
    const className = "w-5 h-5";
    switch (icon) {
      case "Users":
        return <Users className={className} />;
      case "CheckCircle2":
        return <CheckCircle2 className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Award":
        return <Award className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  const renderActionIcon = (icon: string) => {
    const className = "w-4 h-4 text-slate-500 shrink-0";
    switch (icon) {
      case "BookOpen":
        return <BookOpen className={className} />;
      case "UserPlus":
        return <UserPlus className={className} />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className={className} />;
      case "Shield":
        return <Shield className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const handleExport = () => {
    const headers = "Zone,Users,Completion,Avg Score,Certs,Status\n";
    const rows = zoneSummariesData
      .map(
        (z) =>
          `"${z.zone}",${z.users},${z.completion}%,${z.avgScore}%,${z.certs},"${z.status}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "zone_wise_learning_summary.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    setInviteSent(true);
    setTimeout(() => {
      setInviteSent(false);
      setInviteEmail("");
      setActiveModal(null);
    }, 1500);
  };

  const content = (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Top Header Row with Company Admin Tag & Invite Members Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] shadow-2xs mb-1.5">
            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.18em] uppercase text-[#C99A2E]">{companyOverviewHeader.breadcrumb}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B1D3A] tracking-tight leading-tight">
            {companyOverviewHeader.title}
          </h1>
          <p className="text-xs text-[#64748B] font-medium mt-1">
            {companyOverviewHeader.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveModal("invite")}
          className="relative overflow-hidden group/btn text-white text-xs font-bold px-4 py-2.5 rounded-[8px] flex items-center gap-2 shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.65)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer self-start sm:self-center shrink-0"
          style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
        >
          <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
          <UserPlus className="w-4 h-4 text-[#D5AA45]" />
          <span className="relative">Invite Members</span>
        </button>
      </div>

      {/* 4 Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {metricCardsData.map((card: MetricCardData) => (
          <div
            key={card.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 sm:p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.iconBg} ${card.iconColor}`}
              >
                {renderMetricIcon(card.icon)}
              </div>
              <span className="text-[11px] font-bold text-[#C99A2E] bg-[#C99A2E]/[0.08] px-2 py-0.5 rounded-[4px] border border-[#C99A2E]/20">
                {card.trend}
              </span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B1D3A] tracking-tight leading-none">
                {card.value}
              </div>
              <div className="text-xs font-bold text-[#0B1D3A] mt-2.5">
                {card.title}
              </div>
              <div className="text-[11px] text-[#64748B] font-medium mt-0.5">
                {card.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Billboard Sponsored Showcase Banner */}
      <BillboardAd
        label="SPONSORED"
        tagline="Priority channel partner broker allocations with direct developer token desk agreements"
      />

      {/* Two Columns Grid: Zone-wise Learning Summary & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Zone-wise Learning Summary */}
        <div
          className={`lg:col-span-8 bg-white rounded-[8px] border ${
            isZoneSummaryFocused
              ? "border-[#C99A2E] ring-2 ring-[#C99A2E]/20"
              : "border-[#E2E8F0] hover:border-[#C99A2E]/40"
          } shadow-[0_4px_16px_rgba(11,29,58,0.04)] p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300`}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
            <h2 className="text-base font-extrabold text-[#0B1D3A] tracking-tight">
              Zone-wise Learning Summary
            </h2>
            <button
              type="button"
              onClick={handleExport}
              className="text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] flex items-center gap-1.5 transition-colors cursor-pointer px-2.5 py-1 rounded-[6px] hover:bg-[#F0F4FF]"
            >
              <Download className="w-3.5 h-3.5 text-[#C99A2E]" />
              <span>Export</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0]">
                  <th className="py-3 px-2">Zone</th>
                  <th className="py-3 px-3">Users</th>
                  <th className="py-3 px-3 min-w-[140px]">Completion</th>
                  <th className="py-3 px-3">Avg Score</th>
                  <th className="py-3 px-3">Certs</th>
                  <th className="py-3 px-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]/80 text-xs">
                {zoneSummariesData.map((zone: ZoneSummary) => (
                  <tr
                    key={zone.id}
                    className="hover:bg-[#F0F4FF]/60 transition-colors duration-150"
                  >
                    <td className="py-3.5 px-2 font-bold text-[#0B1D3A] whitespace-nowrap">
                      {zone.zone}
                    </td>
                    <td className="py-3.5 px-3 text-[#475569] font-medium">
                      {zone.users}
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden max-w-[80px]">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              zone.completionColor === "gold"
                                ? "bg-gradient-to-r from-[#C99A2E] to-[#E2C068]"
                                : "bg-gradient-to-r from-[#0B1D3A] to-[#1A3463]"
                            }`}
                            style={{ width: `${zone.completion}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-[#475569]">
                          {zone.completion}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-bold text-[#0B1D3A]">
                      {zone.avgScore}%
                    </td>
                    <td className="py-3.5 px-3 text-[#475569] font-medium">
                      {zone.certs}
                    </td>
                    <td className="py-3.5 px-2 text-right">
                      {zone.status === "On Track" ? (
                        <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-[4px] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider">
                          On Track
                        </span>
                      ) : (
                        <span className="inline-block bg-amber-50 text-amber-900 border border-amber-200/80 rounded-[4px] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider">
                          At Risk
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column (4 cols): Quick Actions & Sponsored Widget */}
        <div className="lg:col-span-4 flex flex-col gap-5 self-start w-full">
          <div className="bg-white rounded-[8px] border border-[#E2E8F0] hover:border-[#C99A2E]/40 shadow-[0_4px_16px_rgba(11,29,58,0.04)] p-5 sm:p-6 flex flex-col gap-4 w-full transition-all duration-300">
            <h2 className="text-base font-extrabold text-[#0B1D3A] tracking-tight pb-3 border-b border-[#E2E8F0]">
              Quick Actions
            </h2>

            <div className="flex flex-col gap-2.5">
              {quickActionItems.map((action: QuickActionItem) => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => setActiveModal(action.actionKey)}
                  className="w-full bg-white hover:bg-[#F0F4FF]/50 border border-[#E2E8F0] hover:border-[#C99A2E]/60 rounded-[8px] px-3.5 py-3 text-xs font-bold text-[#0B1D3A] flex items-center justify-between shadow-2xs hover:shadow-[0_4px_14px_rgba(11,29,58,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-left group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-[6px] bg-[#F0F4FF] flex items-center justify-center text-[#0B1D3A] group-hover:bg-[#0B1D3A] group-hover:text-[#D5AA45] transition-colors shrink-0">
                      {renderActionIcon(action.icon)}
                    </div>
                    <span className="truncate">{action.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C99A2E] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>

          <SidebarWidgetAd
            label="SPONSORED"
            tagline="Pre-Launch Commercial & Residential Mandates: Outer Ring Road Exit 6 to 9"
          />
        </div>
      </div>

      {/* Interactive Modal for Invite Members / Quick Actions */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95 relative">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 capitalize">
                {activeModal === "invite" && "Invite Team Members"}
                {activeModal === "assign" && "Assign Course to Team"}
                {activeModal === "habits" && "Configure Habit Activities"}
                {activeModal === "permissions" && "Zone Permissions Matrix"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeModal === "invite" && (
              <form onSubmit={handleInviteSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="agent@propvista.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Assign Zone
                  </label>
                  <select
                    value={inviteZone}
                    onChange={(e) => setInviteZone(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
                  >
                    <option value="Mumbai North">Mumbai North</option>
                    <option value="Mumbai South">Mumbai South</option>
                    <option value="Pune">Pune</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Thane">Thane</option>
                    <option value="Nashik">Nashik</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-xs font-semibold text-[#0B1D3A] hover:bg-[#F0F4FF] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-[8px] text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.65)] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
                  >
                    {inviteSent ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Invitation Sent!</span>
                      </>
                    ) : (
                      <span>Send Invite</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            {activeModal === "assign" && (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-600">
                  Select a training course from the FARE catalogue to mandate for a specific regional zone.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col gap-2">
                  <label className="font-semibold text-slate-800">Available Course:</label>
                  <select className="border border-slate-200 rounded-lg p-2 text-xs bg-white">
                    <option>Top Plotted Development Companies in Medchal</option>
                    <option>Team Scale-Up Mastery</option>
                    <option>Recruitment Pitch & Onboarding Mastery</option>
                    <option>Residential Sales Placement Program</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl border text-xs text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Course assigned successfully!");
                      setActiveModal(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#0A1325] text-white text-xs font-bold"
                  >
                    Assign Course
                  </button>
                </div>
              </div>
            )}

            {activeModal === "habits" && (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-600">
                  Configure the mandatory daily sales habits for all 148 active users across the 6 zones.
                </p>
                <div className="flex flex-col gap-2 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="accent-[#0A1325]" />
                    <span>20 Cold Calls / Day (Required)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="accent-[#0A1325]" />
                    <span>5 Warm Follow-ups / Day</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="accent-[#0A1325]" />
                    <span>30 Mins Daily FARE Learning</span>
                  </label>
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl border text-xs text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Habit configuration updated!");
                      setActiveModal(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#0A1325] text-white text-xs font-bold"
                  >
                    Save Rules
                  </button>
                </div>
              </div>
            )}

            {activeModal === "permissions" && (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-600">
                  Company Admin role grants unrestricted access across all 6 zones and full catalogue authoring rights.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-700">
                  <div>Role: <strong>Company Admin</strong></div>
                  <div>Tenant: <strong>Propvista Realty</strong></div>
                  <div>Scope: <strong>All Departments & Zones</strong></div>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-[#0A1325] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (hideSidebar) {
    return content;
  }

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
      <Sidebar activeItem="dashboard" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{content}</div>
    </div>
  );
}
