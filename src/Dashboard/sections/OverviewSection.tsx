import { useState } from "react";
import {
  BookOpen,
  Clock,
  Award,
  Flame,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { LeaderboardAd, SidebarWidgetAd } from "../ads";

export interface OverviewSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [streakCount] = useState(14);

  const kpis = [
    {
      id: "in-progress",
      label: "Enrolled Courses",
      value: "8 Active",
      subtext: "2 completed this month",
      icon: BookOpen,
      iconBg: "bg-blue-50 text-blue-600",
      targetSection: "courses",
    },
    {
      id: "learning-hours",
      label: "Learning Time",
      value: "34.5 hrs",
      subtext: "+12% vs last month",
      icon: Clock,
      iconBg: "bg-amber-50 text-amber-600",
      targetSection: "my-learning",
    },
    {
      id: "tests-taken",
      label: "Tests Completed",
      value: "6 Tests",
      subtext: "88% average score",
      icon: Award,
      iconBg: "bg-emerald-50 text-emerald-600",
      targetSection: "knowledge-bank",
    },
    {
      id: "habit-streak",
      label: "Daily Streak",
      value: `${streakCount} Days`,
      subtext: "All-time personal best",
      icon: Flame,
      iconBg: "bg-rose-50 text-rose-600",
      targetSection: "daily-habits",
    },
  ];

  const inProgressCourses = [
    {
      id: "6a8bce1d5c501a3603065010",
      title: "Top Plotted Development Companies in Medchal",
      category: "Real Estate Knowledge",
      progress: 25,
      lessonsRemaining: "1 lesson left",
      duration: "20 min",
    },
    {
      id: "6a8bce1d5c501a3603065011",
      title: "Team Scale-Up Mastery: Structuring High-Ticket Teams",
      category: "Leadership & Team Management",
      progress: 40,
      lessonsRemaining: "3 lessons left",
      duration: "7h 15m",
    },
    {
      id: "6a8bce1d5c501a3603065012",
      title: "Recruitment Pitch & Onboarding Mastery",
      category: "Leadership & Team Management",
      progress: 15,
      lessonsRemaining: "5 lessons left",
      duration: "10h",
    },
  ];

  const recentActivities = [
    {
      id: "act-1",
      title: "Completed 'Location Spotlight Medchal' assessment",
      time: "2 hours ago",
      score: "92% Score",
      icon: CheckCircle2,
      color: "text-emerald-500",
    },
    {
      id: "act-2",
      title: "Watched 'Recruitment Pitch & Onboarding Mastery' Lesson 1",
      time: "Yesterday, 4:30 PM",
      score: "Completed",
      icon: Clock,
      color: "text-blue-500",
    },
    {
      id: "act-3",
      title: "Logged 20 Cold Prospecting Calls & 5 Follow-ups",
      time: "Yesterday, 6:00 PM",
      score: "Streak Maintained",
      icon: TrendingUp,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Welcome Banner */}
      <div className="relative rounded-[8px] bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] border border-[#1A3463]/50 text-white p-6 sm:p-8 overflow-hidden shadow-[0_10px_30px_rgba(11,29,58,0.2)]">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#E5C158_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E2C068] bg-[#C99A2E]/10 px-2.5 py-0.5 rounded-[4px] border border-[#C99A2E]/30">
                Fare Retail · Agent Academy
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C99A2E]" /> 14 Nov 2026
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, Agent!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-normal leading-relaxed">
              You are on a <span className="text-[#E2C068] font-bold">14-day learning streak</span>. Complete your daily habit check-in and resume where you left off.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate?.("courses")}
              className="relative overflow-hidden group/btn flex items-center gap-2 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white font-bold text-xs px-4 py-2.5 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.id}
              onClick={() => onNavigate?.(kpi.targetSection)}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex items-center justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div className="text-xs font-semibold text-slate-500">
                  {kpi.label}
                </div>
                <div className="text-2xl font-black text-[#0B1D3A] mt-1 leading-none tracking-tight">
                  {kpi.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1.5">
                  {kpi.subtext}
                </div>
              </div>

              <div
                className={`w-11 h-11 rounded-[8px] flex items-center justify-center shrink-0 ${kpi.iconBg} group-hover:scale-105 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Sponsored Leaderboard Banner */}
      <LeaderboardAd
        label="SPONSORED"
        tagline="Direct Developer Token Desk & Priority Broker Allocations"
      />

      {/* Main Grid: In Progress Courses & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: In-Progress Courses */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#0B1D3A] tracking-tight">
                Continue Learning
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Pick up where you left off in your assigned courses
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate?.("courses")}
              className="text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {inProgressCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => onNavigate?.("courses")}
                className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B1D3A] bg-[#F0F4FF] border border-[#0B1D3A]/10 px-2 py-0.5 rounded-[4px]">
                      {course.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1D3A] truncate">
                    {course.title}
                  </h3>
                  <div className="mt-2.5 flex items-center gap-3">
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden max-w-xs">
                      <div
                        className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-[#0B1D3A]">
                      {course.progress}%
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      · {course.lessonsRemaining}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate?.("courses");
                  }}
                  className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-semibold px-4 py-2 rounded-[8px] shrink-0 shadow-xs hover:shadow-md transition-all cursor-pointer self-start sm:self-center"
                >
                  Resume
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Recent Activity & Quick Action */}
        <div className="flex flex-col gap-5">
          {/* Recent Activity Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col gap-4">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              Recent Milestones
            </h2>

            <div className="flex flex-col gap-3">
              {recentActivities.map((act) => {
                const Icon = act.icon;
                return (
                  <div
                    key={act.id}
                    className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
                  >
                    <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${act.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-slate-800 leading-snug">
                        {act.title}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                        <span>{act.time}</span>
                        <span className="font-bold text-slate-600">{act.score}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specialization Recommendation Promo */}
          <div className="bg-[#FFFDF3] border border-[#F6D47B] rounded-2xl p-5 shadow-2xs flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-900">
                Recommended Test
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Sharpen your knowledge in <strong>Land & Property Classifications</strong> with our 10-question rapid assessment.
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.("knowledge-bank")}
              className="w-full bg-[#0A1325] hover:bg-[#122447] text-white text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer text-center"
            >
              Open Knowledge Bank
            </button>
          </div>

          <SidebarWidgetAd
            label="SPONSORED"
            tagline="Pre-Launch Commercial & Residential Mandates: Outer Ring Road Exit 6 to 9"
          />
        </div>
      </div>
    </div>
  );
}
