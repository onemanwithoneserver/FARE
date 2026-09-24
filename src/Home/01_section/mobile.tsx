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
} from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import React from "react";
const NAVY = "#0B1D3A";
const NAVY_DEEP = "#071A49";
const NAVY_SURFACE = "#0D2654";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";
const MUTED_BLUE = "#7B8DAA";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <section
      className="w-full px-4 pb-12 pt-2 flex flex-col items-center justify-center overflow-hidden text-center relative font-['Outfit']"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #EEF4FF 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none"></div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full flex flex-col items-center relative z-40"
      >
        <h1
          className={`font-black mb-3.5 flex flex-col gap-1 sm:gap-1.5 ${
            language === "te"
              ? "text-[2.1rem] leading-[1.25] tracking-wide my-1.5"
              : "text-[2.65rem] leading-[1.08] tracking-[-0.02em]"
          }`}
        >
          <motion.span
            variants={item}
            className={`block ${language === "te" ? "py-0.5" : ""}`}
            style={{ color: NAVY }}
          >
            {data.headline.line1}
          </motion.span>
          <motion.span
            variants={item}
            className={`inline-block text-[#C99A2E] ${language === "te" ? "py-0.5" : ""}`}
          >
            {data.headline.line2}
          </motion.span>
          <motion.span
            variants={item}
            className={`block ${language === "te" ? "py-0.5" : ""}`}
            style={{ color: NAVY }}
          >
            {data.headline.line3}
          </motion.span>
        </h1>
        <motion.div variants={item} className="mb-3">
          <p
            className="text-[15px] font-medium leading-[1.6]"
            style={{ color: "#3A4A63" }}
          >
            {data.subtitle}
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-col w-full gap-3 max-w-[280px] mb-4"
        >
          <button
            className="text-white font-semibold w-full py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
            style={{
              background: NAVY,
              boxShadow: "0 2px 8px rgba(11,29,58,0.15)",
            }}
          >
            {data.buttons.primary} <ArrowRight size={14} strokeWidth={2.5} />
          </button>
          <button
            className="font-semibold w-full py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] border hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
            style={{
              color: NAVY,
              borderColor: `${NAVY}15`,
              background: "white",
              boxShadow: "0 1px 3px rgba(11,29,58,0.03)",
            }}
          >
            <Play size={13} strokeWidth={2.5} fill={NAVY} />{" "}
            {data.buttons.secondary}
          </button>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-[340px]"
        >
          {data.capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80 text-[10px] font-semibold"
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: GOLD }}
              ></span>
              <span>{cap}</span>
            </div>
          ))}
        </motion.div>
        <div className="relative w-full flex justify-center mt-2 z-20 h-[235px] sm:h-[250px]">
          <div
            style={{
              transform: "scale(0.44)",
              transformOrigin: "top center",
              width: "760px",
            }}
            className="max-w-none"
          >
            <div
              className="w-full relative flex items-center justify-center z-20"
              style={{ minHeight: "480px" }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                  rotateY: 4,
                  rotateX: 2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 4,
                  rotateX: 2,
                }}
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: 1, y: -10 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[760px] safari-shadow rounded overflow-hidden bg-white/80 backdrop-blur-md"
                style={{
                  transformPerspective: 2000,
                  border: "1px solid rgba(11, 29, 58, 0.08)",
                  boxShadow:
                    "0 20px 40px -10px rgba(11,29,58,0.2), 0 10px 20px -10px rgba(11,29,58,0.1)",
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
                    <div className="flex-1 mx-3 bg-white/80 border border-[#e5e5ea] rounded px-3 py-[3px] flex items-center justify-center gap-1.5 text-[10px] font-medium text-[#666] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.04)]">
                      <Lock
                        size={9}
                        strokeWidth={2.5}
                        className="text-[#999]"
                      />
                      <span>{data.dashboard.url}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#999]">
                      <Share2 size={11} strokeWidth={2} />
                      <Plus size={13} strokeWidth={2} />
                      <Layers size={11} strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <div className="flex" style={{ height: "450px" }}>
                  <div
                    className="w-[180px] flex flex-col pt-4 pb-4 flex-shrink-0"
                    style={{
                      background: NAVY_DEEP,
                      borderRight: `1px solid rgba(255,255,255,0.06)`,
                    }}
                  >
                    <div className="px-5 mb-4 flex items-center">
                      <img
                        src={logo}
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
                      <SidebarItem
                        icon={<BookOpen size={13} />}
                        label="Courses"
                      />
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
                    <div className="px-4 flex items-center gap-2.5 pt-3.5 border-t border-white/[0.06]">
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
                          <h2 className="text-white text-[18px] font-bold leading-snug">
                            {data.dashboard.greeting}
                          </h2>
                          <p className="text-white/40 text-[10.5px] font-medium mt-0.5">
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
                        <h3 className="text-[9px] font-bold text-white/30 tracking-[0.15em] uppercase">
                          Upcoming Schedule
                        </h3>
                        <button className="text-[9px] font-semibold text-white/40 hover:text-white/60 transition-colors flex items-center gap-1 border border-white/[0.08] px-2.5 py-1 rounded-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out">
                          View All <ArrowRight size={8} />
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
                className="absolute top-1 -left-2 z-30"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] flex items-center justify-center text-white shadow-sm">
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
                className="absolute top-14 -right-1 z-30"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center text-white shadow-sm">
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
                      Mock Tests <ArrowRight size={8} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-2 right-1 z-30"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm"
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
                      Daily Tracking <ArrowRight size={8} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1.8, duration: 1.2 }}
                className="absolute -bottom-8 right-3 z-30 -rotate-[4deg]"
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
        </div>
        <motion.div
          variants={item}
          className="mt-2 text-[9.5px] font-medium tracking-[0.04em]"
          style={{ color: MUTED_BLUE }}
        >
          {data.footerLinks[0]} <span className="mx-1 text-[#CBD5E1]">·</span>{" "}
          {data.footerLinks[1]} <span className="mx-1 text-[#CBD5E1]">·</span>{" "}
          {data.footerLinks[2]}
        </motion.div>
      </motion.div>
    </section>
  );
}
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
      className={`px-2 py-1.5 rounded-sm flex items-center gap-1.5 text-[8px] font-medium cursor-pointer transition-colors duration-200 ${
        active ? "font-semibold" : "text-white/50 hover:text-white/70"
      }`}
      style={
        active
          ? {
              background: `#C99A2E18`,
              color: "#D5AA45",
              border: `1px solid #C99A2E25`,
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
      className="rounded-sm p-2"
      style={{
        background: `rgba(255,255,255,0.04)`,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <div style={{ color: iconColor }} className="[&>svg]:w-3 [&>svg]:h-3">
          {icon}
        </div>
        <div>
          <div className="text-white text-[8px] font-semibold leading-tight">
            {title}
          </div>
          <div className="text-white/30 text-[6px] font-medium leading-none mt-0.5">
            {subtitle}
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between mb-1.5">
        <span className="text-[12px] font-bold" style={{ color: valueColor }}>
          {value}
        </span>
        <span className="text-[6px] text-white/25 font-medium leading-none mb-0.5">
          progress
        </span>
      </div>
      <div
        className="w-full h-[2px] rounded-full overflow-hidden"
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
