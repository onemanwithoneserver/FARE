import React, { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  Search,
  Bell,
  Lock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Plus,
  Layers,
  Home,
  GraduationCap,
  TrendingUp,
  HelpCircle,
  Sparkles,
  Rocket,
  Mail,
  Phone,
  Clock,
  Bot,
  ShieldCheck,
  Award,
  Check,
  Copy,
} from "lucide-react";
import primaryLogo from "../Components/FARE_Logo/SVG/Primary Logo.svg";
import coursesHero from "../assets/courses_hero.jpg";
import VideoModal from "../Components/Forms/VideoModal";
import { useLanguage } from "../context/LanguageContext";
import { getSection01Data, getSection02Data } from "./data";

const NAVY = "#0B1D3A";
const NAVY_DEEP = "#071A49";
const NAVY_SURFACE = "#0D2654";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";
const MUTED_BLUE = "#7B8DAA";

const featureIconMap = {
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
};

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`px-3 py-1.5 rounded-[2px] flex items-center gap-2.5 text-[10.5px] font-medium cursor-pointer transition-colors duration-200 ${
        active ? "font-semibold" : "text-white/50 hover:text-white/70"
      }`}
      style={
        active
          ? {
              background: `${GOLD}18`,
              color: GOLD_MID,
              border: `1px solid ${GOLD}25`,
            }
          : undefined
      }
    >
      {icon} <span className="truncate">{label}</span>
    </div>
  );
}

function DashCard({
  icon,
  iconColor,
  title,
  subtitle,
  value,
  valueColor,
  progress,
  progressColor,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  value: string;
  valueColor: string;
  progress: number;
  progressColor: string;
}) {
  return (
    <div
      className="rounded-[2px] p-3.5"
      style={{
        background: `rgba(255,255,255,0.04)`,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <div style={{ color: iconColor }}>{icon}</div>
        <div>
          <div className="text-white text-[11px] font-semibold leading-tight">
            {title}
          </div>
          <div className="text-white/30 text-[8px] font-medium">{subtitle}</div>
        </div>
      </div>
      <div className="flex items-end justify-between mb-1.5">
        <span className="text-[15px] font-bold" style={{ color: valueColor }}>
          {value}
        </span>
        <span className="text-[8px] text-white/25 font-medium">progress</span>
      </div>
      <div
        className="w-full h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${progress}%`, background: progressColor }}
        ></div>
      </div>
    </div>
  );
}

function Section01Desktop() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { language } = useLanguage();
  const data = getSection01Data(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="w-full flex items-center justify-center overflow-x-clip relative font-['Outfit'] pb-16 fare-noise-overlay"
      style={{
        background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)`,
      }}
    >
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>

      <motion.div
        className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-[#C99A2E] blur-[1px] animate-float-delayed z-0 pointer-events-none"
        style={{ boxShadow: "0 0 10px rgba(201,154,46,0.6)" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-[#6366F1] blur-[1px] animate-float-delayed-2 z-0 pointer-events-none"
        style={{ boxShadow: "0 0 8px rgba(99,102,241,0.6)" }}
      />
      <svg
        className="absolute top-20 left-[10%] w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M50 350 Q200 50 350 350"
          stroke={GOLD}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-20 right-[5%] w-[300px] h-[300px] opacity-[0.04] pointer-events-none z-0"
        viewBox="0 0 300 300"
        fill="none"
      >
        <circle
          cx="150"
          cy="150"
          r="140"
          stroke={GOLD}
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      <div className="max-w-360 w-full px-12 flex items-center justify-between gap-10 relative z-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-col items-start w-[42%] min-w-[420px] relative z-40"
        >
          <h1
            className={`font-black mb-5 flex flex-col gap-1.5 md:gap-2 ${
              language === "te"
                ? "text-[3.6rem] leading-[1.2] tracking-wider my-2"
                : "text-[4.85rem] leading-[1.05] tracking-[-0.03em]"
            }`}
          >
            <motion.span
              variants={item}
              className={`block ${language === "te" ? "py-1" : ""}`}
              style={{ color: NAVY }}
            >
              {data.headline.line1}
            </motion.span>
            <motion.span
              variants={item}
              className={`inline-block text-[#C99A2E] ${language === "te" ? "py-1" : ""}`}
            >
              {data.headline.line2}
            </motion.span>
            <motion.span
              variants={item}
              className={`block ${language === "te" ? "py-1" : ""}`}
              style={{ color: NAVY }}
            >
              {data.headline.line3}
            </motion.span>
          </h1>
          <motion.div variants={item} className="mb-5">
            <p
              className="text-[17px] font-medium leading-[1.6] max-w-[420px]"
              style={{ color: "#3A4A63" }}
            >
              {data.subtitle}
            </p>
          </motion.div>
          <motion.div variants={item} className="flex items-center gap-4 mb-6">
            <button
              className="text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-[8px] hover:luxury-shadow-float transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ease-out relative overflow-hidden group cursor-pointer"
              style={{
                background: NAVY,
                boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`,
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">{data.buttons.primary}</span>
              <span
                className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] relative z-10 group-hover:translate-x-1"
                style={{ fontSize: "15px" }}
              >
                <ChevronRight
                  size={15}
                  strokeWidth={2.5}
                  className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1"
                />
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </span>
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="text-[13.5px] font-semibold px-7 py-3.5 rounded-[4px] hover:bg-[#F8FAFD] transition-all duration-300 flex items-center gap-2.5 border hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ease-out cursor-pointer group hover:shadow-[0_4px_12px_rgba(11,29,58,0.05)]"
              style={{
                color: NAVY,
                borderColor: `${NAVY}15`,
                background: "white",
                boxShadow: "0 1px 3px rgba(11,29,58,0.03)",
              }}
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C99A2E]/10 bg-[#0B1D3A]/5">
                <Play
                  size={10}
                  className="ml-[1px] transition-colors duration-300 group-hover:text-[#C99A2E] text-[#0B1D3A]"
                  fill="currentColor"
                />
              </div>
              <span>{data.buttons.secondary}</span>
            </button>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-2 mb-2 max-w-[440px]"
          >
            {data.capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: GOLD }}
                ></span>
                <span>{cap}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div
          className="flex-1 relative flex items-center justify-end z-20"
          style={{ minHeight: "600px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: 5, rotateX: 3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 5, rotateX: 3 }}
            whileHover={{ scale: 1.01, rotateY: 2, rotateX: 1, y: -5 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[780px] safari-shadow rounded-[4px] overflow-hidden bg-white/80 backdrop-blur-md"
            style={{
              transformPerspective: 2000,
              border: "1px solid rgba(11, 29, 58, 0.08)",
              boxShadow:
                "0 30px 60px -12px rgba(11,29,58,0.25), 0 18px 36px -18px rgba(11,29,58,0.15)",
            }}
          >
            <div className="glass-safari border-b border-black/[0.06]">
              <div className="h-[38px] w-full flex items-center px-4 gap-3">
                <div className="flex items-center gap-[7px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#27C840] border border-[#1AAB29]"></div>
                </div>
                <div className="flex items-center gap-1 ml-2 text-[#999]">
                  <ChevronLeft size={13} strokeWidth={2} />
                  <ChevronRight size={13} strokeWidth={2} />
                </div>
                <div className="flex-1 mx-3 bg-white/80 border border-[#e5e5ea] rounded-[4px] px-3 py-[3px] flex items-center justify-center gap-1.5 text-[10px] font-medium text-[#666] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.04)]">
                  <Lock size={9} strokeWidth={2.5} className="text-[#999]" />
                  <span>{data.dashboard.url}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#999]">
                  <Share2 size={11} strokeWidth={2} />
                  <Plus size={13} strokeWidth={2} />
                  <Layers size={11} strokeWidth={2} />
                </div>
              </div>
            </div>
            <div className="flex" style={{ height: "460px" }}>
              <div
                className="w-[185px] flex flex-col pt-4 pb-4 flex-shrink-0"
                style={{
                  background: NAVY_DEEP,
                  borderRight: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div className="px-5 mb-4 flex items-center">
                  <img
                    src={primaryLogo}
                    alt="FARE"
                    className="h-14 w-auto brightness-0 invert opacity-100"
                  />
                </div>
                <div className="flex flex-col gap-0.5 px-3 flex-1 overflow-y-auto">
                  <SidebarItem
                    icon={<Home size={13} />}
                    label="Dashboard"
                    active
                  />
                  <SidebarItem
                    icon={<GraduationCap size={13} />}
                    label="Programs"
                  />
                  <SidebarItem icon={<BookOpen size={13} />} label="Courses" />
                  <SidebarItem
                    icon={<HelpCircle size={13} />}
                    label="Knowledge Bank"
                  />
                  <SidebarItem
                    icon={<Target size={13} />}
                    label="Skill Practice"
                  />
                  <SidebarItem
                    icon={<CheckCircle size={13} />}
                    label="Habit Tracker"
                  />
                  <SidebarItem
                    icon={<TrendingUp size={13} />}
                    label="Sales Forecast"
                  />
                </div>
                <div className="px-4 flex items-center gap-2.5 pt-3 border-t border-white/[0.06]">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[9px]"
                    style={{ background: GOLD, color: NAVY_DEEP }}
                  >
                    {data.dashboard.userInitials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[11px] font-semibold">
                      {data.dashboard.userName}
                    </span>
                    <span className="text-[8px] text-white/40 font-medium">
                      {data.dashboard.userRole}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 p-5 flex flex-col justify-between overflow-hidden"
                style={{ background: NAVY_SURFACE }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className=" text-[#FFF] text-[17px] font-bold leading-snug">
                        {data.dashboard.greeting}
                      </h2>
                      <p className="text-white/40 text-[10px] font-medium mt-0.5">
                        {data.dashboard.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Search
                        size={14}
                        className="text-white/40"
                        strokeWidth={2}
                      />
                      <Bell
                        size={14}
                        className="text-white/40"
                        strokeWidth={2}
                      />
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[9px]"
                        style={{
                          background: NAVY,
                          color: "white",
                          border: `1.5px solid ${GOLD}40`,
                        }}
                      >
                        {data.dashboard.userInitials}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 mb-3">
                    {data.dashboard.stats.slice(0, 4).map((s) => (
                      <DashCard
                        key={s.id}
                        icon={s.icon}
                        iconColor={s.color}
                        title={s.label}
                        subtitle={s.subtitle}
                        value={s.val}
                        valueColor={s.color}
                        progress={s.progress}
                        progressColor={s.color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <h3 className=" text-[9px] font-bold text-white/30 tracking-[0.15em] uppercase">
                      Upcoming Schedule
                    </h3>
                    <button className="text-[9px] font-semibold text-white/40 hover:text-white/60 transition-colors flex items-center gap-1 border border-white/[0.08] px-2.5 py-1 rounded-[8px] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out">
                      View All{" "}
                      <span
                        className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]"
                        style={{ fontSize: "8px" }}
                      >
                        <ChevronRight
                          size={8}
                          strokeWidth={2.5}
                          className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1"
                        />
                        <ArrowRight
                          size={8}
                          strokeWidth={2.5}
                          className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {data.dashboard.upcoming.map((u, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-[6px] h-[6px] rounded-full"
                          style={{ background: u.color }}
                        ></div>
                        <div>
                          <div className="text-white text-[11px] font-semibold">
                            {u.title}
                          </div>
                          <div className="text-white/30 text-[9px] font-medium">
                            {u.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-6 left-[-45px] z-30 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="fare-glass-card floating-card-shadow rounded-[4px] p-3.5 flex items-center gap-3 shadow-lg"
            >
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] flex items-center justify-center text-white shadow-sm">
                <BookOpen size={17} strokeWidth={2.5} />
              </div>
              <div>
                <div
                  className="font-semibold text-[11.5px]"
                  style={{ color: NAVY }}
                >
                  Knowledge Bank
                </div>
                <div
                  className="text-[9px] font-medium"
                  style={{ color: MUTED_BLUE }}
                >
                  Quizzes & Assessments
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute top-24 -right-4 z-30"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="fare-glass-card floating-card-shadow rounded-[4px] p-3.5 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center text-white shadow-sm">
                <Target size={17} strokeWidth={2.5} />
              </div>
              <div>
                <div
                  className="font-semibold text-[11.5px]"
                  style={{ color: NAVY }}
                >
                  Skill Practice
                </div>
                <div
                  className="text-[9px] font-medium flex items-center gap-1"
                  style={{ color: MUTED_BLUE }}
                >
                  Mock Tests{" "}
                  <span
                    className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]"
                    style={{ fontSize: "8px" }}
                  >
                    <ChevronRight
                      size={8}
                      strokeWidth={2.5}
                      className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1"
                    />
                    <ArrowRight
                      size={8}
                      strokeWidth={2.5}
                      className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute bottom-4 right-0 z-30"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="fare-glass-card floating-card-shadow rounded-[4px] p-3.5 flex items-center gap-3"
            >
              <div
                className="w-9 h-9 rounded-[4px] flex items-center justify-center text-white shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_MID} 100%)`,
                }}
              >
                <CheckCircle size={17} strokeWidth={2.5} />
              </div>
              <div>
                <div
                  className="font-semibold text-[11.5px]"
                  style={{ color: NAVY }}
                >
                  Habit Tracker
                </div>
                <div
                  className="text-[9px] font-medium flex items-center gap-1"
                  style={{ color: MUTED_BLUE }}
                >
                  Daily Tracking{" "}
                  <span
                    className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]"
                    style={{ fontSize: "8px" }}
                  >
                    <ChevronRight
                      size={8}
                      strokeWidth={2.5}
                      className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1"
                    />
                    <ArrowRight
                      size={8}
                      strokeWidth={2.5}
                      className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="absolute -bottom-12 right-4 z-30 -rotate-[4deg]"
          >
            <span
              className="text-[26px] italic font-medium drop-shadow-sm whitespace-pre-line"
              style={{
                color: GOLD,
                fontFamily: "'Georgia', 'Times New Roman', serif",
                opacity: 0.7,
              }}
            >
              {data.signature}
            </span>
          </motion.div>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}

function Section02Desktop() {
  const { language } = useLanguage();
  const data = getSection02Data(language);
  const [copiedType, setCopiedType] = useState<"mail" | "phone" | null>(null);

  const handleCopy = (text: string, type: "mail" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section
      id="section-02-coming-soon"
      aria-label="FARE Coming Soon Section"
      className="w-full relative overflow-x-clip font-['Outfit'] fare-noise-overlay py-12 lg:py-16"
      style={{
        background:
          "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-0"
        style={{
          backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col pr-0 lg:pr-6"
          >
            <h2 className="text-3xl sm:text-4xl xl:text-[3.2rem] font-black text-[#0B1D3A] tracking-tight leading-[1.12] mb-4">
              {data.headline}
            </h2>

            <p className="text-base sm:text-lg font-normal text-[#475569] leading-relaxed mb-6 max-w-[620px]">
              {data.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[620px] rounded-[10px] p-[1.5px] overflow-hidden mb-2.5"
            >
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[200%]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0 60%, #C99A2E 80%, #E2C068 90%, transparent 100%)",
                }}
              />
              <div className="relative rounded-[9px] bg-white/95 backdrop-blur-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-[#C99A2E]"
                    />
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0B1D3A] to-[#1E3A6E] shadow-md">
                      <motion.div
                        animate={{ y: [0, -3, 0], rotate: [0, -6, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Rocket size={18} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#C99A2E]">
                        {data.offer.tag}
                      </span>
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"
                      />
                    </div>
                    <p className="text-[13px] font-semibold text-[#0B1D3A] leading-snug">
                      {data.offer.title}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${data.contact.email}?subject=Early%20Launch%20Inquiry%20-%20FARE`}
                  className="relative overflow-hidden shrink-0 text-white text-[13px] font-bold px-4 py-2.5 rounded-[8px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#0B1D3A] to-[#1E3A6E] hover:from-[#15315C] hover:to-[#0B1D3A] shadow-md hover:shadow-lg transition-all"
                >
                  <span>{data.offer.cta}</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[620px] flex flex-col gap-2"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#64748B]">
                {data.contact.title}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="relative flex items-center justify-between bg-white hover:bg-slate-50 active:bg-slate-100/80 p-3 rounded-xl border border-slate-200 shadow-xs transition-all group">
                  <a
                    href={`mailto:${data.contact.email}?subject=FARE%20Early%20Inquiry`}
                    className="flex items-center gap-3 flex-1 min-w-0 after:absolute after:inset-0"
                    aria-label={`Send email to ${data.contact.email}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C99A2E] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Mail size={18} strokeWidth={2.4} className="text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0B1D3A] truncate">
                      {data.contact.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(data.contact.email, "mail");
                    }}
                    className="relative z-10 p-2 rounded-lg text-slate-400 hover:text-[#0B1D3A] hover:bg-slate-50 active:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copiedType === "mail" ? (
                      <Check size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                <div className="relative flex items-center justify-between bg-white hover:bg-slate-50 active:bg-slate-100/80 p-3 rounded-xl border border-slate-200 shadow-xs transition-all group">
                  <a
                    href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 flex-1 min-w-0 after:absolute after:inset-0"
                    aria-label={`Call ${data.contact.phone}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Phone size={18} strokeWidth={2.4} className="text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0B1D3A] truncate">
                      {data.contact.phone}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(data.contact.phone, "phone");
                    }}
                    className="relative z-10 p-2 rounded-lg text-slate-400 hover:text-[#0B1D3A] hover:bg-slate-50 active:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedType === "phone" ? (
                      <Check size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-[#64748B] flex items-center gap-2 pt-2 border-t border-slate-200/70">
                <span className="w-5 h-5 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock size={11} strokeWidth={2.4} className="text-white" />
                </span>
                <span>{data.contact.hours}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full h-[510px] xl:h-[540px] rounded-tl-[180px] xl:rounded-tl-[220px] rounded-bl-[70px] xl:rounded-bl-[90px] rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-2xl border-l-2 border-t-2 border-white/90">
              <motion.img
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                src={coursesHero}
                alt="FARE Real Estate Professionals Learning"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/25 via-transparent to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 0.6 },
                  y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-4 right-4 xl:top-5 xl:right-5 bg-white/95 backdrop-blur-xl rounded-[12px] px-3.5 py-2 border border-white shadow-xl flex items-center gap-2.5 z-40"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C99A2E] to-[#E2C068] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles size={15} strokeWidth={2.4} className="text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-extrabold tracking-[0.16em] uppercase text-[#64748B] leading-none mb-0.5">
                    {data.comingSoonCard.floatingBadge.tag}
                  </div>
                  <div className="text-xs font-extrabold text-[#0B1D3A] leading-tight">
                    {data.comingSoonCard.floatingBadge.title}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-30 max-w-[350px] sm:max-w-[375px] xl:max-w-[385px] sm:left-4 md:left-5 lg:left-5 xl:left-7 sm:top-1/2 sm:-translate-y-1/2 rounded-2xl border border-white/85 bg-white/90 p-5 sm:p-6 text-center shadow-[0_20px_50px_rgba(11,29,58,0.25)] backdrop-blur-xl overflow-hidden"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0_60%,#C99A2E_80%,#E2C068_90%,transparent_100%)] opacity-20"
              />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full flex items-center justify-center overflow-hidden h-24 sm:h-26 mb-1"
                >
                  <img
                    src={primaryLogo}
                    alt="FARE Logo"
                    className="w-[270px] sm:w-[290px] max-w-[95%] h-auto object-contain filter drop-shadow-xs"
                  />
                </motion.div>
                <h3 className="text-2xl sm:text-[25px] font-black tracking-tight text-[#0B1D3A] mb-3">
                  {data.comingSoonCard.title}
                </h3>

                <div className="w-full pt-3 border-t border-slate-200/80 flex flex-col gap-2.5 text-left">
                  {data.comingSoonCard.features.map((feat, idx) => {
                    const IconComponent = featureIconMap[feat.iconName] || Bot;
                    return (
                      <div
                        key={idx}
                        className="text-xs sm:text-[13px] font-semibold text-[#0B1D3A] flex items-center gap-2.5 p-1 rounded-md hover:bg-white/80 transition-colors"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white shadow-xs"
                          style={{ backgroundColor: feat.color }}
                        >
                          <IconComponent size={14} strokeWidth={2.4} className="text-white" />
                        </div>
                        <span className="truncate">{feat.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomeDesktop() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Section01Desktop />
      <Section02Desktop />
    </div>
  );
}
