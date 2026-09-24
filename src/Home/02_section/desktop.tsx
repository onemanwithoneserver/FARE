import { useState, useEffect } from "react";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import {
  Lock,
  Menu,
  BookOpen,
  Target,
  BarChart2,
  CheckCircle,
  ArrowRight,
  Share2,
  ChevronLeft,
  ChevronRight,
  Award,
  RotateCcw,
  Eye,
  Sparkles,
  Flame,
  Check,
  RefreshCw,
} from "lucide-react";
const NAVY = "#0B1D3A";
const NAVY_DEEP = "#071A49";
const MUTED_BLUE = "#7B8DAA";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeTab, setActiveTab] = useState("01");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [selectedMockOption, setSelectedMockOption] = useState<string | null>(
    null,
  );
  const [skillValues, setSkillValues] = useState<Record<string, number>>({
    comm: 88,
    market: 82,
    nego: 78,
    lead: 94,
  });
  const [activeHabitId, setActiveHabitId] = useState("h1");
  const [habitsData, setHabitsData] = useState(
    data.browser.content["04"].habits,
  );
  useEffect(() => {
    setHabitsData(data.browser.content["04"].habits);
  }, [language]);
  const quizQuestions = data.browser.content["01"].questions;
  const totalQuestions = quizQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const calculateScore = () => {
    return quizQuestions.reduce((acc, q, idx) => {
      return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);
  };
  const score = calculateScore();
  const accuracy = Math.round((score / totalQuestions) * 100);
  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted && !showReview) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQIndex]: optionIndex,
    }));
  };
  const handleRestartQuiz = () => {
    setUserAnswers({});
    setCurrentQIndex(0);
    setIsSubmitted(false);
    setShowReview(false);
  };
  const currentQuestion = quizQuestions[currentQIndex];
  const currentScenario =
    data.browser.content["02"].scenarios[activeScenarioIdx];
  const selectedResponseData = currentScenario.options.find(
    (o) => o.id === selectedMockOption,
  );
  const handleSkillChange = (id: string, val: number) => {
    setSkillValues((prev) => ({ ...prev, [id]: val }));
  };
  const overallUserSkill = Math.round(
    Object.values(skillValues).reduce((a, b) => a + b, 0) /
      Object.values(skillValues).length,
  );
  const peerAvg = 68;
  const computedPercentile = Math.min(
    99,
    Math.max(50, Math.round(overallUserSkill * 0.95 + 4)),
  );
  const activeHabit =
    habitsData.find((h) => h.id === activeHabitId) || habitsData[0];
  const toggleDayCompletion = (dayNumber: number) => {
    setHabitsData((prev) =>
      prev.map((h) => {
        if (h.id !== activeHabitId) return h;
        const exists = h.completedDays.includes(dayNumber);
        const newDays = exists
          ? h.completedDays.filter((d) => d !== dayNumber)
          : [...h.completedDays, dayNumber].sort((a, b) => a - b);
        return { ...h, completedDays: newDays };
      }),
    );
  };
  return (
    <section
      className="w-full min-h-screen flex justify-center py-16 px-12 font-['Outfit'] relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[150px] pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-1/4 w-[900px] h-[700px] bg-gradient-radial from-[#0D2654]/80 to-transparent rounded-full blur-[150px] pointer-events-none"
      ></motion.div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>
      <div className="max-w-[1400px] w-full flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-center text-center max-w-[850px]"
        >
          <h2
            className={`font-black mb-2 text-white ${
              language === "te"
                ? "text-[2.5rem] leading-[1.2] tracking-wider py-1"
                : "text-[3.5rem] tracking-[-0.02em] uppercase leading-[1.05]"
            }`}
          >
            <span className="gold-gradient-text-light">
              {data.headline.line1} {data.headline.line2} {data.headline.line3}{" "}
              {data.headline.line4}
            </span>
          </h2>
          <p
            className="mt-6 font-medium text-[16px] max-w-[560px] leading-relaxed"
            style={{ color: MUTED_BLUE }}
          >
            {data.subtitle}
          </p>
        </motion.div>
        <div className="flex gap-8 lg:gap-10 w-full max-w-[1240px] items-start relative">
          <div className="absolute left-[330px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[310px] flex flex-col gap-2.5 relative z-20 shrink-0"
          >
            {data.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4.5 rounded transition-all duration-400 flex gap-3.5 cursor-pointer group relative overflow-hidden ${
                    isActive
                      ? "bg-white/[0.05] border border-white/[0.12] luxury-shadow scale-[1.01]"
                      : "bg-transparent border border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C99A2E] via-[#D5AA45] to-[#E2C068]"
                    />
                  )}
                  <div className="flex flex-col relative z-10 w-full">
                    <div className="flex items-center justify-between mb-0.5">
                      <span
                        className={`font-black text-[12.5px] tracking-[0.08em] transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}
                      >
                        {tab.title}
                      </span>
                      {isActive && (
                        <ArrowRight
                          size={13}
                          className="text-[#D5AA45] opacity-80 animate-pulse"
                        />
                      )}
                    </div>
                    <span
                      className={`text-[10.5px] font-medium transition-colors duration-300 ${isActive ? "text-[#D5AA45]" : "text-white/30"}`}
                    >
                      {tab.subtitle}
                    </span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="text-[12px] leading-relaxed overflow-hidden pr-2"
                          style={{ color: MUTED_BLUE }}
                        >
                          {tab.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full relative"
          >
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-[#D5AA45]/20 rounded-full blur-[20px] -translate-y-1/2 pointer-events-none"></div>
            <div className="rounded overflow-hidden safari-shadow border border-white/[0.12] flex flex-col h-full bg-[#0D2654] relative luxury-shadow-dark">
              <div className="h-[44px] glass-safari-dark flex items-center px-4 relative border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)] z-20">
                <div className="flex items-center gap-[8px] absolute left-4">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] border border-[#D89E24]/50"></div>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#27C840] border border-[#1AAB29]/50"></div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="bg-[#1C1C1E]/80 backdrop-blur-md rounded px-24 py-1 flex items-center justify-center gap-2 border border-white/[0.05] shadow-inner">
                    <Lock size={11} className="text-[#34D399]" />
                    <span className="text-[11px] text-white/70 font-medium tracking-wide">
                      {data.browser.url}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 absolute right-4 text-white/40">
                  <Share2
                    size={13}
                    strokeWidth={2}
                    className="hover:text-white transition-colors cursor-pointer"
                  />
                  <Menu
                    size={15}
                    strokeWidth={2}
                    className="hover:text-white transition-colors cursor-pointer"
                  />
                </div>
              </div>
              <div
                className="flex-1 p-6 lg:p-7 relative min-h-[500px] flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at top right, #112D60, #0D2654)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6B8AFF]/5 rounded-full blur-[100px]"></div>
                <AnimatePresence mode="wait">
                  {activeTab === "01" && (
                    <motion.div
                      key="01"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-[680px] flex flex-col relative z-10"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(107,138,255,0.3)]">
                            <BookOpen size={20} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[#6B8AFF] text-[10px] font-black tracking-[0.2em] mb-1">
                              {data.browser.content["01"].tag}
                            </div>
                            <div className="text-[18px] font-bold text-white tracking-tight">
                              {data.browser.content["01"].title}
                            </div>
                          </div>
                        </div>
                        {!isSubmitted ? (
                          <div className="flex items-center gap-2">
                            <span className="text-[11.5px] font-medium text-white/50">
                              Answered:
                            </span>
                            <span className="bg-[#D5AA45]/15 px-3 py-1 rounded text-[12px] font-bold text-[#F3D887] border border-[#D5AA45]/35 shadow-sm">
                              {answeredCount} / {totalQuestions}
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={handleRestartQuiz}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-white/80 hover:text-white text-[11px] font-semibold border border-white/10 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
                          >
                            <RotateCcw size={12} />
                            <span>Reset Quiz</span>
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-12 gap-1.5 mb-5 p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
                        {quizQuestions.map((_, i) => {
                          const isAnswered = userAnswers[i] !== undefined;
                          const isCurrent = currentQIndex === i;
                          let pillBg =
                            "bg-white/[0.04] text-white/70 border-white/[0.08] hover:bg-white/[0.09] hover:text-white hover:border-white/20";
                          if (isSubmitted) {
                            const isCorrect =
                              userAnswers[i] === quizQuestions[i].correctIndex;
                            pillBg = isCorrect
                              ? "bg-[#10B981]/25 text-[#10B981] border-[#10B981]/50 shadow-[0_0_8px_rgba(16,185,129,0.3)] font-black"
                              : "bg-[#EF4444]/25 text-[#EF4444] border-[#EF4444]/50 font-black";
                          } else if (isCurrent) {
                            pillBg =
                              "bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E4C46A] text-[#071A49] font-black border-[#E4C46A] shadow-[0_2px_12px_rgba(213,170,69,0.45)] scale-[1.04] ring-2 ring-[#D5AA45]/20";
                          } else if (isAnswered) {
                            pillBg =
                              "bg-[#D5AA45]/15 text-[#F3D887] border-[#D5AA45]/40 shadow-[0_0_8px_rgba(213,170,69,0.15)] font-bold";
                          }
                          return (
                            <button
                              key={i}
                              onClick={() => setCurrentQIndex(i)}
                              className={`h-7.5 rounded text-[11px] border transition-all flex items-center justify-center cursor-pointer ${pillBg}`}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                      {isSubmitted && !showReview ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-white/[0.03] backdrop-blur-md p-8 rounded border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.3)] flex flex-col items-center text-center"
                        >
                          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C99A2E]/25 to-[#D5AA45]/10 border border-[#D5AA45]/50 flex items-center justify-center text-[#D5AA45] mb-4 shadow-[0_0_25px_rgba(213,170,69,0.35)]">
                            <Award size={32} />
                          </div>
                          <div className="text-[11px] font-black tracking-[0.2em] text-[#D5AA45] uppercase mb-1">
                            Assessment Performance
                          </div>
                          <h3 className="text-[30px] font-black text-white tracking-tight mb-2">
                            {score} / {totalQuestions}{" "}
                            <span className="text-[18px] font-bold text-white/50">
                              ({accuracy}%)
                            </span>
                          </h3>
                          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D5AA45]/15 border border-[#D5AA45]/30 text-[12px] font-bold text-[#F3D887] mb-6 shadow-sm">
                            {accuracy >= 80
                              ? "Master Real Estate Strategist (Top 5%)"
                              : accuracy >= 50
                                ? "Certified Real Estate Practitioner"
                                : "Developing Associate"}
                          </div>
                          <div className="grid grid-cols-3 gap-4 w-full mb-6">
                            <div className="bg-white/[0.03] p-4 rounded border border-white/[0.06]">
                              <div className="text-[20px] font-black text-[#10B981]">
                                {score}
                              </div>
                              <div className="text-[11px] font-medium text-white/50">
                                Correct
                              </div>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded border border-white/[0.06]">
                              <div className="text-[20px] font-black text-[#EF4444]">
                                {totalQuestions - score}
                              </div>
                              <div className="text-[11px] font-medium text-white/50">
                                Incorrect
                              </div>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded border border-white/[0.06]">
                              <div className="text-[20px] font-black text-[#6B8AFF]">
                                {answeredCount}
                              </div>
                              <div className="text-[11px] font-medium text-white/50">
                                Attempted
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
                            <button
                              onClick={() => setShowReview(true)}
                              className="px-5 py-2.5 rounded bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E4C46A] hover:brightness-110 text-[#071A49] font-bold text-[12.5px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(201,154,46,0.3)] hover:shadow-[0_6px_22px_rgba(201,154,46,0.45)] cursor-pointer active:scale-[0.98]"
                            >
                              <Eye size={15} />
                              <span>Review Answers & Explanations</span>
                            </button>
                            <button
                              onClick={handleRestartQuiz}
                              className="px-4 py-2.5 rounded bg-white/[0.06] hover:bg-white/[0.12] text-white/90 hover:text-white font-semibold text-[12.5px] border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
                            >
                              <RotateCcw size={14} />
                              <span>Retake Quiz</span>
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex flex-col">
                          <div className="bg-white/[0.02] backdrop-blur-sm p-6 rounded mb-4 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[11px] font-black text-[#D5AA45] tracking-wider uppercase">
                                Question {currentQIndex + 1} of {totalQuestions}
                              </span>
                              {isSubmitted && (
                                <span
                                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded ${userAnswers[currentQIndex] === currentQuestion.correctIndex ? "bg-[#10B981]/20 text-[#10B981]" : "bg-[#EF4444]/20 text-[#EF4444]"}`}
                                >
                                  {userAnswers[currentQIndex] ===
                                  currentQuestion.correctIndex
                                    ? "Correct"
                                    : "Incorrect"}
                                </span>
                              )}
                            </div>
                            <p className="text-[15px] font-medium leading-[1.65] text-white/95">
                              {currentQuestion.question}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3.5 mb-4">
                            {currentQuestion.options.map((opt, i) => {
                              const isSelected =
                                userAnswers[currentQIndex] === i;
                              const isCorrect =
                                i === currentQuestion.correctIndex;
                              let btnStyle =
                                "bg-white/[0.03] border-white/[0.06] text-white/80 hover:bg-[#D5AA45]/10 hover:border-[#D5AA45]/30 hover:text-white";
                              if (isSubmitted) {
                                if (isCorrect) {
                                  btnStyle =
                                    "bg-[#10B981]/25 border-[#10B981]/60 text-white shadow-[0_0_15px_rgba(16,185,129,0.25)]";
                                } else if (isSelected && !isCorrect) {
                                  btnStyle =
                                    "bg-[#EF4444]/25 border-[#EF4444]/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.25)]";
                                } else {
                                  btnStyle =
                                    "bg-white/[0.02] border-white/[0.04] text-white/40";
                                }
                              } else if (isSelected) {
                                btnStyle =
                                  "bg-[#D5AA45]/20 border-[#D5AA45] text-white shadow-[0_0_15px_rgba(213,170,69,0.3)] scale-[1.01]";
                              }
                              const letter = String.fromCharCode(65 + i);
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleSelectOption(i)}
                                  className={`border p-4 rounded text-left text-[12.5px] transition-all duration-300 font-medium cursor-pointer flex items-start gap-3 group ${btnStyle}`}
                                >
                                  <span
                                    className={`w-5 h-5 rounded flex items-center justify-center text-[10.5px] font-black shrink-0 ${isSelected ? "bg-[#D5AA45] text-[#071A49]" : "bg-white/10 text-white/60 group-hover:bg-[#D5AA45]/30 group-hover:text-white"}`}
                                  >
                                    {letter}
                                  </span>
                                  <span className="leading-snug">{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                          {isSubmitted && currentQuestion.explanation && (
                            <div className="bg-[#D5AA45]/10 border border-[#D5AA45]/30 p-4 rounded mb-4 text-[12px] leading-relaxed text-white/90">
                              <span className="font-bold text-[#F3D887] mr-1.5">
                                Explanation:
                              </span>
                              {currentQuestion.explanation}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-1">
                            <button
                              onClick={() =>
                                setCurrentQIndex((prev) =>
                                  Math.max(0, prev - 1),
                                )
                              }
                              disabled={currentQIndex === 0}
                              className={`flex items-center gap-1.5 px-4 py-2 rounded text-[12px] font-semibold border transition-all ${
                                currentQIndex === 0
                                  ? "opacity-30 cursor-not-allowed border-transparent text-white/30"
                                  : "border-white/10 text-white/80 hover:text-white hover:bg-white/5 cursor-pointer"
                              }`}
                            >
                              <ChevronLeft size={14} />
                              <span>Previous</span>
                            </button>
                            {isSubmitted && showReview && (
                              <button
                                onClick={() => setShowReview(false)}
                                className="px-4 py-2 rounded text-[12px] font-bold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 cursor-pointer"
                              >
                                Back to Scorecard
                              </button>
                            )}
                            {currentQIndex < totalQuestions - 1 ? (
                              <button
                                onClick={() =>
                                  setCurrentQIndex((prev) =>
                                    Math.min(totalQuestions - 1, prev + 1),
                                  )
                                }
                                className="flex items-center gap-1.5 px-5 py-2 rounded text-[12px] font-bold bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] hover:brightness-110 text-[#071A49] transition-all shadow-[0_2px_10px_rgba(201,154,46,0.3)] cursor-pointer"
                              >
                                <span>Next</span>
                                <ChevronRight size={14} />
                              </button>
                            ) : !isSubmitted ? (
                              <button
                                onClick={() => setIsSubmitted(true)}
                                className="flex items-center gap-2 px-6 py-2.5 rounded text-[12.5px] font-black bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E2C068] hover:brightness-110 text-[#071A49] transition-all shadow-[0_0_20px_rgba(213,170,69,0.4)] cursor-pointer uppercase tracking-wider"
                              >
                                <span>Submit & Get Score</span>
                                <ArrowRight size={14} strokeWidth={3} />
                              </button>
                            ) : (
                              <button
                                onClick={() => setShowReview(false)}
                                className="px-5 py-2 rounded text-[12px] font-bold bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] hover:brightness-110 text-[#071A49] transition-all shadow-md cursor-pointer"
                              >
                                View Scorecard
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                  {activeTab === "02" && (
                    <motion.div
                      key="02"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-[680px] flex flex-col relative z-10"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(52,211,153,0.3)]">
                            <Target size={20} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[#34D399] text-[10px] font-black tracking-[0.2em] mb-1">
                              {data.browser.content["02"].tag}
                            </div>
                            <div className="text-[18px] font-bold text-white tracking-tight">
                              {data.browser.content["02"].title}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {data.browser.content["02"].scenarios.map((sc, i) => (
                            <button
                              key={sc.id}
                              onClick={() => {
                                setActiveScenarioIdx(i);
                                setSelectedMockOption(null);
                              }}
                              className={`px-3 py-1 rounded text-[11px] font-bold border transition-all cursor-pointer ${
                                activeScenarioIdx === i
                                  ? "bg-[#34D399]/20 text-[#34D399] border-[#34D399]/40 shadow-[0_0_10px_rgba(52,211,153,0.2)]"
                                  : "bg-white/[0.04] text-white/50 border-white/[0.08] hover:text-white"
                              }`}
                            >
                              Scenario {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-white/[0.03] p-4 rounded border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-[#34D399]/15 text-[#34D399] flex items-center justify-center text-[15px] font-bold border border-[#34D399]/20">
                              P
                            </div>
                            <div>
                              <div className="font-bold text-[13px] text-white">
                                {data.browser.content["02"].trainer.name}
                              </div>
                              <div className="text-[10.5px] text-white/50">
                                {data.browser.content["02"].trainer.role}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 bg-[#34D399]/15 px-2.5 py-1 rounded border border-[#34D399]/30 text-[10px] font-bold text-[#34D399]">
                            <div className="w-1.5 h-1.5 bg-[#34D399] rounded-full animate-pulse"></div>
                            <span>Evaluating</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#0A1630] p-5 rounded border border-[#34D399]/25 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#34D399] text-[9.5px] font-black tracking-[0.2em]">
                            BUYER OBJECTION
                          </span>
                          <span className="text-white/40 text-[10.5px] font-medium">
                            {currentScenario.title}
                          </span>
                        </div>
                        <p className="text-[14.5px] text-white/95 leading-[1.6] font-medium italic">
                          {currentScenario.buyerPrompt}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2.5 mb-4">
                        <span className="text-[10px] font-black text-white/50 tracking-wider uppercase">
                          Select Your Tactical Response:
                        </span>
                        {currentScenario.options.map((opt) => {
                          const isSelected = selectedMockOption === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => setSelectedMockOption(opt.id)}
                              className={`p-3.5 rounded border text-left transition-all cursor-pointer relative overflow-hidden ${
                                isSelected
                                  ? "bg-[#34D399]/15 border-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.25)]"
                                  : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/20"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[11.5px] font-bold text-[#34D399]">
                                  {opt.label}
                                </span>
                                {isSelected && (
                                  <span className="text-[10.5px] font-black text-white bg-[#34D399]/40 px-2 py-0.5 rounded">
                                    Score: {opt.score}/100
                                  </span>
                                )}
                              </div>
                              <p className="text-[12px] text-white/80 leading-relaxed">
                                {opt.text}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                      <AnimatePresence>
                        {selectedResponseData && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gradient-to-r from-[#0D2654] to-[#113069] border border-[#34D399]/30 p-4 rounded shadow-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Sparkles
                                  size={14}
                                  className="text-[#34D399]"
                                />
                                <span className="text-[11px] font-black text-[#34D399] uppercase tracking-wider">
                                  Coach Priya's Feedback
                                </span>
                              </div>
                              <div className="flex gap-1.5">
                                {selectedResponseData.strengths.map(
                                  (str, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-white/[0.08] text-[9.5px] font-semibold text-white/80 px-2 py-0.5 rounded"
                                    >
                                      {str}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                            <p className="text-[12px] text-white/90 leading-relaxed font-medium">
                              {selectedResponseData.feedback}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                  {activeTab === "03" && (
                    <motion.div
                      key="03"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-[680px] flex flex-col relative z-10"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(167,139,250,0.3)]">
                            <BarChart2 size={20} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[#A78BFA] text-[10px] font-black tracking-[0.2em] mb-1">
                              {data.browser.content["03"].tag}
                            </div>
                            <div className="text-[18px] font-bold text-white tracking-tight">
                              {data.browser.content["03"].title}
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#A78BFA]/15 border border-[#A78BFA]/35 px-4 py-2 rounded text-[12px] font-black text-[#A78BFA] tracking-wide shadow-[0_0_12px_rgba(167,139,250,0.15)] flex items-center gap-2">
                          <span>{computedPercentile}th %ile Rank</span>
                          <span className="text-[10px] font-semibold text-white/50">
                            (Avg {peerAvg}%)
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-white/[0.02] p-6 rounded border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm mb-4">
                        {data.browser.content["03"].skills.map((skill) => {
                          const currentVal = skillValues[skill.id] || skill.val;
                          const delta = currentVal - skill.peer;
                          return (
                            <div key={skill.id} className="w-full group">
                              <div className="flex justify-between items-center mb-1.5">
                                <div>
                                  <span className="text-[13px] font-bold text-white/95 group-hover:text-white transition-colors">
                                    {skill.label}
                                  </span>
                                  <div className="text-[10.5px] text-white/40">
                                    {skill.desc}
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-right shrink-0">
                                  <span className="text-[11px] font-medium text-white/40">
                                    Peer: {skill.peer}%
                                  </span>
                                  <span className="text-[12px] font-black text-[#A78BFA]">
                                    You: {currentVal}%
                                  </span>
                                  <span
                                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${delta >= 0 ? "bg-[#10B981]/20 text-[#10B981]" : "bg-[#EF4444]/20 text-[#EF4444]"}`}
                                  >
                                    {delta >= 0 ? `+${delta}%` : `${delta}%`}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <input
                                  type="range"
                                  min="30"
                                  max="100"
                                  value={currentVal}
                                  onChange={(e) =>
                                    handleSkillChange(
                                      skill.id,
                                      parseInt(e.target.value),
                                    )
                                  }
                                  className="w-full accent-[#A78BFA] cursor-pointer h-2 bg-[#0A1630] rounded appearance-none"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-between bg-white/[0.03] p-4 rounded border border-white/[0.06]">
                        <div className="text-[12px] text-white/70">
                          Overall Real Estate Competency:{" "}
                          <strong className="text-white">
                            {overallUserSkill}%
                          </strong>{" "}
                          (Tier:{" "}
                          {overallUserSkill >= 85
                            ? "Elite Tier"
                            : "Senior Practitioner"}
                          )
                        </div>
                        <button
                          onClick={() =>
                            setSkillValues({
                              comm: 88,
                              market: 82,
                              nego: 78,
                              lead: 94,
                            })
                          }
                          className="flex items-center gap-1 text-[11px] font-bold text-white/60 hover:text-white transition-colors cursor-pointer"
                        >
                          <RefreshCw size={11} />
                          <span>Reset Defaults</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === "04" && (
                    <motion.div
                      key="04"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-[680px] flex flex-col relative z-10"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded bg-gradient-to-br from-[#FBBF24] to-[#D97706] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(213,170,69,0.3)]">
                            <CheckCircle size={20} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div
                              className="text-[10px] font-black tracking-[0.2em] mb-1"
                              style={{ color: "#D5AA45" }}
                            >
                              {data.browser.content["04"].tag}
                            </div>
                            <div className="text-[18px] font-bold text-white tracking-tight">
                              {data.browser.content["04"].title}
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-2.5 border px-4 py-2 rounded shadow-[0_0_12px_rgba(213,170,69,0.15)]"
                          style={{
                            borderColor: "rgba(213,170,69,0.3)",
                            background: "rgba(213,170,69,0.1)",
                          }}
                        >
                          <Flame size={16} className="text-[#D5AA45]" />
                          <span
                            className="text-[12px] font-black tracking-wide"
                            style={{ color: "#D5AA45" }}
                          >
                            {activeHabit.completedDays.length} / 30 Days (
                            {Math.round(
                              (activeHabit.completedDays.length / 30) * 100,
                            )}
                            %)
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                        {habitsData.map((h) => {
                          const isSelected = h.id === activeHabitId;
                          return (
                            <button
                              key={h.id}
                              onClick={() => setActiveHabitId(h.id)}
                              className={`px-3.5 py-2 rounded text-[11.5px] font-bold border transition-all cursor-pointer whitespace-nowrap ${
                                isSelected
                                  ? "bg-[#D5AA45]/20 text-[#F3D887] border-[#D5AA45]/60 shadow-[0_0_12px_rgba(213,170,69,0.25)]"
                                  : "bg-white/[0.03] text-white/50 border-white/[0.06] hover:text-white"
                              }`}
                            >
                              {h.label}
                            </button>
                          );
                        })}
                      </div>
                      <div className="bg-white/[0.02] p-6 rounded border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-[13.5px] font-bold text-white">
                              {activeHabit.label}
                            </div>
                            <div className="text-[11px] text-white/40">
                              Category: {activeHabit.category} · Click any day
                              box to toggle progress
                            </div>
                          </div>
                          <button
                            onClick={() => toggleDayCompletion(15)}
                            className="px-3 py-1 bg-[#D5AA45]/20 hover:bg-[#D5AA45]/30 text-[#D5AA45] text-[11px] font-bold rounded border border-[#D5AA45]/30 cursor-pointer"
                          >
                            Toggle Today
                          </button>
                        </div>
                        <div className="grid grid-cols-10 gap-2">
                          {Array.from({ length: 30 }, (_, i) => i + 1).map(
                            (dayNum) => {
                              const isDone =
                                activeHabit.completedDays.includes(dayNum);
                              return (
                                <button
                                  key={dayNum}
                                  onClick={() => toggleDayCompletion(dayNum)}
                                  className={`h-11 rounded border flex flex-col items-center justify-center transition-all cursor-pointer group ${
                                    isDone
                                      ? "bg-[#D5AA45] border-[#D5AA45] text-[#071A49] shadow-[0_0_10px_rgba(213,170,69,0.4)] scale-100"
                                      : "bg-white/[0.03] border-white/[0.06] text-white/40 hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  <span className="text-[9px] font-black uppercase leading-none opacity-70">
                                    D
                                  </span>
                                  <span className="text-[12px] font-black leading-tight">
                                    {dayNum}
                                  </span>
                                  {isDone && (
                                    <Check
                                      size={10}
                                      strokeWidth={3}
                                      className="text-[#071A49] -mt-0.5"
                                    />
                                  )}
                                </button>
                              );
                            },
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/[0.03] p-3 rounded border border-white/[0.06] text-center">
                          <div className="text-[16px] font-black text-[#D5AA45]">
                            {activeHabit.completedDays.length} Days
                          </div>
                          <div className="text-[10.5px] text-white/50">
                            Completed in Matrix
                          </div>
                        </div>
                        <div className="bg-white/[0.03] p-3 rounded border border-white/[0.06] text-center">
                          <div className="text-[16px] font-black text-[#10B981]">
                            {30 - activeHabit.completedDays.length} Days
                          </div>
                          <div className="text-[10.5px] text-white/50">
                            Remaining
                          </div>
                        </div>
                        <div className="bg-white/[0.03] p-3 rounded border border-white/[0.06] text-center">
                          <div className="text-[16px] font-black text-[#6B8AFF]">
                            {Math.round(
                              (activeHabit.completedDays.length / 30) * 100,
                            )}
                            %
                          </div>
                          <div className="text-[10.5px] text-white/50">
                            Habit Consistency Index
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
