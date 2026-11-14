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
  Menu,
  Bell,
  X,
  Sparkles,
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
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import Sidebar from "../sidebar";
import { BannerStripAd, InGridCardAd } from "../ads";

export interface DashboardMainMobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function DashboardMainMobile({
  hideSidebar = false,
  activeSubSection,
}: DashboardMainMobileProps = {}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteSent, setInviteSent] = useState(false);
  const isZoneSummaryFocused = activeSubSection === "zone-summary";

  const renderMetricIcon = (icon: string) => {
    const className = "w-4 h-4";
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
    alert("Exporting zone summary report...");
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

  return (
    <div className="min-h-screen w-full bg-[#F8FAFD] flex flex-col font-['Outfit'] select-text relative pb-16">
      {/* Mobile Top Header */}
      {!hideSidebar && (
        <header className="h-[52px] bg-white border-b border-slate-200 px-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-1 rounded-md text-slate-700 hover:bg-slate-100"
              title="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="bg-white rounded-md p-1 border border-slate-100 shadow-2xs w-7 h-7 flex items-center justify-center">
              <img
                src={trimmedLogo}
                alt="FARE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-sm text-slate-900">Dashboard</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 relative"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
            </button>
            <div className="w-7 h-7 rounded-full bg-[#0A1325] text-white flex items-center justify-center text-[10px] font-bold">
              U
            </div>
          </div>
        </header>
      )}

      {/* Common Mobile Sidebar Drawer */}
      {!hideSidebar && (
        <Sidebar
          isMobile={true}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          activeItem="dashboard"
        />
      )}

      {/* Main Body */}
      <div className="p-4 flex flex-col gap-5">
        {/* Company Header */}
        <div className="flex flex-col gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] shadow-2xs mb-1">
              <Sparkles size={10} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="font-bold text-[9px] tracking-[0.18em] uppercase text-[#C99A2E]">{companyOverviewHeader.breadcrumb}</span>
            </div>
            <h1 className="text-xl font-black text-[#0B1D3A] tracking-tight mt-0.5">
              {companyOverviewHeader.title}
            </h1>
            <p className="text-[11px] text-[#64748B] font-medium">
              {companyOverviewHeader.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveModal("invite")}
            className="w-full text-white text-xs font-bold py-2.5 rounded-[8px] shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all flex items-center justify-center gap-2 mt-1 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
          >
            <UserPlus className="w-3.5 h-3.5 text-[#D5AA45]" />
            <span>Invite Members</span>
          </button>
        </div>

        {/* 4 Metric Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-3">
          {metricCardsData.map((card: MetricCardData) => (
            <div
              key={card.id}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-3.5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded-[6px] flex items-center justify-center shrink-0 ${card.iconBg} ${card.iconColor}`}
                >
                  {renderMetricIcon(card.icon)}
                </div>
                <span className="text-[10px] text-[#C99A2E] font-bold bg-[#C99A2E]/[0.08] px-1.5 py-0.5 rounded-[4px] border border-[#C99A2E]/20">
                  {card.trend}
                </span>
              </div>

              <div>
                <div className="text-xl font-black text-[#0B1D3A] tracking-tight leading-none">
                  {card.value}
                </div>
                <div className="text-[11px] font-bold text-[#0B1D3A] mt-1.5 leading-snug">
                  {card.title}
                </div>
                <div className="text-[9px] text-[#64748B] font-normal mt-0.5 truncate">
                  {card.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored Banner Strip */}
        <BannerStripAd
          label="SPONSORED"
          tagline="Pre-Launch Mandates · ORR Exits 6 to 9"
        />

        {/* Zone-wise Learning Summary Stack */}
        <div
          className={`bg-white rounded-xl border ${
            isZoneSummaryFocused
              ? "border-[#C99424] ring-2 ring-[#C99424]/20"
              : "border-slate-200/90"
          } shadow-2xs p-4 flex flex-col gap-3 transition-all`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">
              Zone Learning Summary
            </h2>
            <button
              type="button"
              onClick={handleExport}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Export</span>
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {zoneSummariesData.map((zone: ZoneSummary) => (
              <div
                key={zone.id}
                className="bg-slate-50/70 border border-slate-100 rounded-lg p-3 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xs text-slate-900">
                    {zone.zone}
                  </div>
                  {zone.status === "On Track" ? (
                    <span className="bg-[#FFFDF5] text-[#A16207] border border-[#FDE68A] rounded-md px-2 py-0.2 text-[10px] font-bold">
                      On Track
                    </span>
                  ) : (
                    <span className="bg-[#FFF7ED] text-[#C2410C] border border-[#FFEDD5] rounded-md px-2 py-0.2 text-[10px] font-bold">
                      At Risk
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        zone.completionColor === "gold"
                          ? "bg-[#C99424]"
                          : "bg-[#0A1325]"
                      }`}
                      style={{ width: `${zone.completion}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 shrink-0">
                    {zone.completion}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 font-medium">
                  <span>Users: <strong className="text-slate-800">{zone.users}</strong></span>
                  <span>Avg Score: <strong className="text-slate-800">{zone.avgScore}%</strong></span>
                  <span>Certs: <strong className="text-slate-800">{zone.certs}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Stack */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs p-4 flex flex-col gap-3">
          <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
            Quick Actions
          </h2>

          <div className="flex flex-col gap-2">
            {quickActionItems.map((action: QuickActionItem) => (
              <button
                key={action.id}
                type="button"
                onClick={() => setActiveModal(action.actionKey)}
                className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 flex items-center gap-2.5 text-left transition-colors"
              >
                {renderActionIcon(action.icon)}
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* In-Grid Sponsored Card */}
        <InGridCardAd
          label="SPONSORED"
          className="min-h-[220px]"
        />
      </div>

      {/* Mobile Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-5 flex flex-col gap-3 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                {activeModal === "invite" ? "Invite Members" : "Action"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-slate-400 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeModal === "invite" ? (
              <form onSubmit={handleInviteSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="agent@propvista.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A1325] text-white text-xs font-bold py-2 rounded-lg"
                >
                  {inviteSent ? "Invite Sent!" : "Send Invite"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-2 text-xs text-slate-600">
                <p>Feature action: {activeModal}</p>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-full bg-[#0A1325] text-white py-2 rounded-lg font-bold mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
