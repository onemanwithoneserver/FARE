import { useState } from "react";
import {
  X,
  Award,
  CheckCircle2,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { type TestItem } from "./data";
import AdBanner from "../components/AdBanner";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  test: TestItem | null;
  specializationTitle: string;
}

export default function QuizModal({
  isOpen,
  onClose,
  test,
  specializationTitle,
}: QuizModalProps) {
  // Modes: "quiz" (answering) or "quiz-end" (results screen)
  const [currentStep, setCurrentStep] = useState<"quiz" | "quiz-end">("quiz-end");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!isOpen || !test) return null;

  const mockQuestions = [
    {
      q: "Under TG-RERA regulations, what is the mandatory layout road width required for HMDA open-plot ventures with more than 100 plots?",
      options: [
        "30-foot internal roads only",
        "Minimum 40-foot internal roads with a 60-foot or 100-foot main approach road",
        "25-foot road with surface drains",
        "Road width is completely at developer discretion",
      ],
      correctIndex: 1,
    },
    {
      q: "Which official document certifies non-agricultural land assessment conversion in Telangana revenue records?",
      options: [
        "Pahani / Dharani NALA Conversion Certificate",
        "Gram Panchayat NOC only",
        "Bank Loan Clearance Certificate",
        "Electricity Meter Transfer Form",
      ],
      correctIndex: 0,
    },
  ];

  const handleFinishQuiz = () => {
    setCurrentStep("quiz-end");
  };

  const handleRetake = () => {
    setCurrentStep("quiz");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs font-['Outfit'] select-text animate-in fade-in duration-200">
      <div className="bg-[#F8FAFD] rounded-2xl w-full max-w-3xl max-h-[92vh] shadow-[0_25px_70px_rgba(11,29,58,0.3)] border border-slate-200 overflow-y-auto flex flex-col">
        {/* Modal Top Header */}
        <div className="px-5 py-3.5 border-b border-slate-200/80 bg-white flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0">
              <Award className="w-4 h-4 text-blue-900" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-[#C99A2E] tracking-wider uppercase block truncate">
                {specializationTitle} · {test.subCategory}
              </span>
              <h2 className="text-sm font-bold text-slate-900 truncate">
                {test.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Step Switcher for Reviewing */}
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep === "quiz" ? "quiz-end" : "quiz")}
              className="text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
            >
              {currentStep === "quiz" ? "Jump to Quiz End" : "View Questions"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 flex flex-col gap-6">
          {/* STEP 1: ACTIVE QUIZ QUESTIONS */}
          {currentStep === "quiz" && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Question {currentQuestionIndex + 1} of {mockQuestions.length}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>14m remaining</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#0B1D3A] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / mockQuestions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {mockQuestions[currentQuestionIndex].q}
                </h3>

                <div className="flex flex-col gap-2.5 mt-5">
                  {mockQuestions[currentQuestionIndex].options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedAnswer(idx)}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-3 cursor-pointer ${
                        selectedAnswer === idx
                          ? "border-[#0B1D3A] bg-[#F0F4FF] text-[#0B1D3A] font-bold shadow-xs"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 font-bold ${
                          selectedAnswer === idx
                            ? "border-[#0B1D3A] bg-[#0B1D3A] text-white"
                            : "border-slate-300 text-slate-500"
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quiz Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>

                {currentQuestionIndex < mockQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#0A1325] text-white text-xs font-bold shadow-xs cursor-pointer hover:bg-[#142340]"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinishQuiz}
                    className="flex items-center gap-1.5 px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Submit & Finish Quiz</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: QUIZ END COMPLETION SCREEN WITH ADVERTISEMENTS & ACTION CONTROLS */}
          {currentStep === "quiz-end" && (
            <div className="flex flex-col gap-6">
              {/* Score Summary Hero Banner */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-[0_4px_20px_rgba(11,29,58,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  {/* Score Circular Badge */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex flex-col items-center justify-center font-black shadow-lg shrink-0 border-4 border-emerald-100">
                    <span className="text-2xl leading-none">85%</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-100 mt-0.5">
                      Score
                    </span>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>PASSED · EXCELLENCE TIER</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Quiz Completed Successfully!
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 max-w-md font-medium leading-relaxed">
                      You answered 17 of 20 questions correctly in 14 minutes. Your score ranks in the top 8% of candidates in {specializationTitle}.
                    </p>
                  </div>
                </div>

                {/* Score Breakdown Pills */}
                <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto shrink-0">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Time Spent
                    </span>
                    <span className="text-sm font-extrabold text-slate-800 mt-0.5 block">
                      14m 20s
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Percentile
                    </span>
                    <span className="text-sm font-extrabold text-emerald-600 mt-0.5 block">
                      Top 8%
                    </span>
                  </div>
                </div>
              </div>

              {/* PRIMARY ACTION CONTROLS: Join Now, Apply, Retake, etc. */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Next Action Steps
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Claim your credential or proceed to the advanced practitioner level.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => alert("Applying for official certification...")}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Apply For Certificate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      dispatchOpenCompanyProfile(specializationTitle);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B1D3A] hover:bg-[#162C4E] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#E2C068]" />
                    <span>View Company</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRetake}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>

              {/* ADVERTISEMENT INTEGRATION FOR QUIZ END (DIFFERENT DIMENSIONS) */}
              <div className="flex flex-col gap-3">
                <AdBanner variant="quiz-end" label="SPONSORED AD" height={130} />
                <AdBanner variant="inline" label="ADVERTISEMENT" height={70} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
