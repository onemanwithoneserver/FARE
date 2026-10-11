import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Check,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Moon,
  ArrowLeft,
  AlertCircle,
  User,
  X,
  Edit3,
  Sparkles,
  Clock,
  Layers,
  Star,
  Video,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import {
  ACCENTS,
  Section,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  EASE,
  FOCUS_RING,
  VerifiedBadge,
} from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration & Format", subtitle: "Session length", icon: Clock },
  { id: 2, title: "Practice Scenario", subtitle: "Simulation challenge", icon: Sparkles },
  { id: 3, title: "Date & Time Slot", subtitle: "Reserve live time", icon: Calendar },
  { id: 4, title: "Review & Confirm", subtitle: "Final booking", icon: Layers },
];

export default function Desktop({ selectedExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [activeExpert, setActiveExpert] = useState<Expert | null>(selectedExpert || null);
  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (selectedExpert !== undefined) {
      setActiveExpert(selectedExpert);
    }
  }, [selectedExpert]);

  const [selectedDurationId, setSelectedDurationId] = useState<string>(
    s.durations.find((d) => d.recommended)?.id || s.durations[1]?.id || "45"
  );
  const [scenarioText, setScenarioText] = useState("Handling a Price Objection");
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedSlot, setSelectedSlot] = useState<string>("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (!isBooked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isBooked]);

  const quickScenarios = useMemo(
    () => [
      {
        title: "Handling a Price Objection",
        tag: "Most Popular",
        desc: "Customer claims budget mismatch or asks for 15% discount",
      },
      {
        title: "Negotiation & Margin Protection",
        tag: "Closing",
        desc: "Protect developer pricing without losing the token booking",
      },
      {
        title: "First-Time Homebuyer Pitch",
        tag: "Consultative",
        desc: "Overcome fear of EMI, construction delays & legal verification",
      },
      {
        title: "Site Visit Urgency & Spot Booking",
        tag: "High-Ticket",
        desc: "Convert on-site inspection visit into an immediate advance booking",
      },
      {
        title: "Skeptical Investor / ROI Challenge",
        tag: "Commercial/Plots",
        desc: "Defend land valuation, expected rental yields & appreciation cycle",
      },
    ],
    []
  );

  const selectedDuration = useMemo(
    () => (selectedDurationId ? s.durations.find((d) => d.id === selectedDurationId) || null : null),
    [selectedDurationId, s.durations]
  );

  const currentDurationPrice = useMemo(() => {
    if (!activeExpert || !selectedDurationId) return null;
    return getExpertDurationPrice(activeExpert.price, selectedDurationId);
  }, [activeExpert, selectedDurationId]);

  const handleSelectExpert = (expert: Expert) => {
    setActiveExpert(expert);
    if (onSelectExpert) onSelectExpert(expert);
    setIsSwitchExpertOpen(false);
  };

  const handleClearExpert = () => {
    setActiveExpert(null);
    if (onSelectExpert) onSelectExpert(null);
  };

  const goToStep = (stepNumber: number) => {
    setValidationError(null);
    setSlideDirection(stepNumber > currentStep ? "forward" : "backward");
    setCurrentStep(stepNumber);
  };

  const handleNextStep = () => {
    setValidationError(null);
    if (currentStep === 1) {
      if (!selectedDurationId) {
        setValidationError("Please select a session duration to continue.");
        return;
      }
    } else if (currentStep === 2) {
      if (!scenarioText.trim()) {
        setValidationError("Please specify or choose a practice scenario.");
        return;
      }
    } else if (currentStep === 3) {
      if (!selectedDate || !selectedSlot) {
        setValidationError("Please choose both a date and a time slot.");
        return;
      }
    }
    setSlideDirection("forward");
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setSlideDirection("backward");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirmBooking = () => {
    setIsBooked(true);
  };

  const slideVariants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? 28 : -28,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? -28 : 28,
      opacity: 0,
    }),
  };

  return (
    <Section
      tone="soft"
      ariaLabel="Choose Session, Date & Time"
      id="booking-section"
      className="!pt-12 lg:!pt-16 !pb-20 relative font-['Outfit']"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C99A2E]/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0B1D3A]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader
        eyebrow="Reserve 1-on-1 Practice"
        icon={Calendar}
        accent={ACCENTS[1]}
        title="Choose Session, Date & Time"
        description="Select duration, realistic scenario challenge, and preferred time slot to schedule live 1-on-1 practice with your verified real estate mentor."
        className="!mb-6 lg:!mb-8"
      />

      <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-6">
        {/* VIP Active Mentor Concierge Card */}
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122A50] to-[#0B1D3A] rounded-[18px] p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-[0_16px_36px_-12px_rgba(11,29,58,0.4)] border border-[#C99A2E]/35 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C99A2E]/15 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent" />

          {activeExpert ? (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <div
                  className="w-14 h-14 rounded-full p-[2.5px] transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #C99A2E, #F4D068 50%, #0B1D3A)",
                    boxShadow: "0 8px 18px -4px rgba(201,154,46,0.6)",
                  }}
                >
                  <img
                    src={activeExpert.image}
                    alt={activeExpert.name}
                    className="w-full h-full object-cover rounded-full bg-slate-800"
                  />
                </div>
                <VerifiedBadge
                  size={20}
                  className="absolute -bottom-1 -right-1 ring-2 ring-[#0B1D3A] rounded-full shadow-md"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#E4C46A] flex items-center gap-1">
                    <Star size={11} className="fill-current text-[#E4C46A]" />
                    Selected Mentor
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-[12px] font-semibold text-white/90">
                    {activeExpert.experience.split(" ")[0]} Experience
                  </span>
                </div>
                <h4 className="text-[19px] font-bold tracking-tight text-white leading-tight truncate">
                  {activeExpert.name}
                </h4>
                <p className="text-[13px] text-white/75 truncate font-medium mt-0.5">
                  {activeExpert.role}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <span className="w-13 h-13 rounded-full bg-[#C99A2E] text-[#0B1D3A] flex items-center justify-center shrink-0 shadow-md font-bold">
                <User size={24} strokeWidth={2.4} />
              </span>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#E4C46A]">
                    Mentor Status
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                    No Mentor Assigned
                  </span>
                </div>
                <h4 className="text-[18px] font-bold tracking-tight text-white leading-snug">
                  Choose a Mentor to Personalize Rates &amp; Slots
                </h4>
                <p className="text-[12.5px] text-white/70 font-medium">
                  Custom session pricing and locked slots will automatically adapt to your chosen mentor
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 relative z-10 shrink-0 w-full md:w-auto justify-end">
            {activeExpert && (
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-3.5 py-2 rounded-[10px] bg-white/10 hover:bg-white/20 text-white/85 hover:text-white border border-white/15 text-[12.5px] font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                title="Deselect mentor"
              >
                <X size={14} />
                <span>Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className={`px-4 py-2.5 rounded-[11px] bg-[#C99A2E] hover:bg-[#D5AA45] text-[#0B1D3A] font-bold text-[13px] transition-all cursor-pointer flex items-center gap-2 shadow-sm ${FOCUS_RING}`}
            >
              <User size={15} strokeWidth={2.4} />
              <span>{activeExpert ? "Change Mentor" : "Select Mentor"}</span>
            </button>
          </div>
        </div>

        {/* Mentor Switcher Drawer / Grid */}
        <AnimatePresence>
          {isSwitchExpertOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="overflow-hidden bg-white rounded-[16px] border border-[#E6EBF3] p-5 shadow-lg"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E6EBF3]">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#0B1D3A]">
                    Available Verified Real Estate Mentors
                  </span>
                  <span className="text-[12px] text-[#7B8DAA] font-medium">
                    (Pick a mentor to update exact rates)
                  </span>
                </div>
                {activeExpert && (
                  <button
                    type="button"
                    onClick={handleClearExpert}
                    className="text-[12px] font-semibold text-red-600 hover:underline cursor-pointer"
                  >
                    Deselect Mentor
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {expertsList.map((exp) => {
                  const isCurrent = activeExpert?.name === exp.name;
                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpert(exp)}
                      className={`p-3 rounded-[12px] border cursor-pointer transition-all flex items-center gap-3 ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-2 ring-[#C99A2E]/25 shadow-xs"
                          : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#CBD5E1]"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13px] font-bold text-[#0B1D3A] truncate">
                          {exp.name}
                        </span>
                        <span className="text-[11.5px] font-semibold text-[#8A5A00]">
                          {exp.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Stepper Bar */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 sm:p-5 luxury-shadow-sm relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-5 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[3px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-5 left-[12.5%] -translate-y-1/2 h-[3px] rounded-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#C99A2E] pointer-events-none"
              initial={false}
              animate={{
                width: `${((currentStep - 1) / (STEPS.length - 1)) * 75}%`,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            />

            <div className="grid grid-cols-4 relative z-10">
              {STEPS.map((step) => {
                const isPast = step.id < currentStep;
                const isCurrent = step.id === currentStep;
                const Icon = step.icon;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => isPast && goToStep(step.id)}
                    disabled={!isPast}
                    className={`flex flex-col items-center group select-none transition-all duration-200 ${
                      isPast
                        ? "cursor-pointer"
                        : isCurrent
                        ? "cursor-default"
                        : "cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div className="relative flex items-center justify-center w-10 h-10 mb-2">
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-full ring-2 ring-[#C99A2E] ring-offset-2 ring-offset-white pointer-events-none animate-pulse" />
                      )}

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 relative z-10 ${
                          isPast
                            ? "bg-[#10B981] text-white shadow-xs"
                            : isCurrent
                            ? "bg-[#0B1D3A] text-white shadow-md ring-2 ring-[#C99A2E]"
                            : "bg-white border-2 border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? (
                          <Check size={16} strokeWidth={3.2} />
                        ) : (
                          <Icon size={16} strokeWidth={2.4} />
                        )}
                      </div>
                    </div>

                    <div className="text-center px-1">
                      <span
                        className={`text-[12.5px] font-bold block tracking-tight leading-tight ${
                          isCurrent
                            ? "text-[#0B1D3A]"
                            : isPast
                            ? "text-[#059669]"
                            : "text-[#64748B]"
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="text-[11px] font-medium text-[#7B8DAA] hidden sm:block mt-0.5">
                        {step.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Validation error message */}
        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-[13px] font-semibold flex items-center gap-3"
          >
            <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
              <AlertCircle size={12} strokeWidth={2.8} />
            </span>
            <span>{validationError}</span>
          </motion.div>
        )}

        {/* Step Content Container */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-6 sm:p-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            {/* STEP 1: DURATION & FORMAT */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="flex flex-col gap-7"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 1 of 4 · Session Specs
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-tight">
                    Select Session Duration &amp; Format
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] mt-1 font-medium">
                    Choose the duration matching your practice objective and depth of feedback analysis.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-6 rounded-[16px] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-2 ring-[#C99A2E]/35 shadow-sm"
                            : "bg-white border-[#E6EBF3] hover:border-[#CBD5E1] hover:shadow-xs"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-white text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-[12px]">
                              <Check size={11} strokeWidth={3.2} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#FBF5E7] text-[#8A5A00] border-l border-b border-[#F1DFB0] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-[12px]">
                            Recommended
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-3 mt-1">
                            <span className="text-[24px] font-extrabold text-[#0B1D3A] leading-none tracking-tight">
                              {dur.duration}
                            </span>

                            {activeExpert && durPrice ? (
                              <div className="flex items-baseline gap-1">
                                <span className="text-[20px] font-bold text-[#8A5A00]">
                                  {durPrice.price}
                                </span>
                                <span className="text-[11px] font-medium text-[#7B8DAA]">/session</span>
                              </div>
                            ) : (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsSwitchExpertOpen(true);
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11px] font-semibold text-[#5A6B82]"
                              >
                                Fee on select
                              </span>
                            )}
                          </div>

                          <span className="text-[14px] font-bold text-[#0B1D3A] block mb-1">
                            {dur.label}
                          </span>
                          <p className="text-[12.5px] text-[#5A6B82] leading-relaxed mb-5 font-medium">
                            {dur.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#F0F4FA] flex flex-col gap-2.5 text-[12.5px]">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[#334155] font-medium">
                              <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                                <Check size={10} strokeWidth={3.4} />
                              </span>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert ? (
                  <div className="p-5 rounded-[16px] bg-gradient-to-r from-[#FFFDF7] via-white to-[#F8FAFD] border border-[#C99A2E]/35 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Sparkles size={16} />
                      </span>
                      <div>
                        <h5 className="text-[14px] font-bold text-[#0B1D3A]">
                          Personalized Mentor Rates
                        </h5>
                        <p className="text-[12.5px] text-[#5A6B82] font-medium">
                          Session fees dynamically adjust based on verified seniority and credentials. Select a mentor to preview exact rates.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="px-4 py-2 rounded-[10px] bg-[#0B1D3A] hover:bg-[#122A50] text-white text-[12.5px] font-bold cursor-pointer shrink-0 transition-colors"
                    >
                      + Choose Mentor
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-5 py-4 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] text-[13px] text-[#5A6B82]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#0B1D3A]">Applied Mentor:</span>
                      <span className="font-bold text-[#8A5A00]">{activeExpert.name}</span>
                      <span className="text-[#CBD5E1]">·</span>
                      <span className="font-medium text-[#475569]">{activeExpert.experience}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="text-[#8A5A00] font-bold hover:underline cursor-pointer"
                    >
                      Change Mentor
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 2: PRACTICE SCENARIO */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="flex flex-col gap-7"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 2 of 4 · Simulation Challenge
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-tight">
                    Choose Your Practice Scenario
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] mt-1 font-medium">
                    Pick a proven objection handling drill or enter a custom challenge you face in your daily customer meetings.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA]">
                    Recommended Role-Play Scenarios
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickScenarios.map((sc) => {
                      const isSelected = scenarioText === sc.title;
                      return (
                        <div
                          key={sc.title}
                          onClick={() => setScenarioText(sc.title)}
                          className={`p-4 rounded-[14px] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? "bg-[#FFFDF7] border-[#C99A2E] ring-2 ring-[#C99A2E]/25 shadow-xs"
                              : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-[#C99A2E] text-white" : "border-2 border-[#CBD5E1]"
                              }`}
                            >
                              {isSelected && <Check size={12} strokeWidth={3.4} />}
                            </span>
                            <div>
                              <span className="text-[14px] font-bold text-[#0B1D3A] leading-snug block">
                                {sc.title}
                              </span>
                              <span className="text-[12px] text-[#5A6B82] font-medium leading-snug block mt-0.5">
                                {sc.desc}
                              </span>
                            </div>
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                            {sc.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-2">
                      <Edit3 size={13} className="text-[#C99A2E]" />
                      Custom Scenario Description / Specific Goal
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={3}
                      placeholder="e.g. A customer is comparing my residential property against a 10% cheaper layout and refusing to pay the initial advance token..."
                      className="w-full p-4 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] focus:bg-white focus:border-[#C99A2E] focus:ring-4 focus:ring-[#C99A2E]/15 text-[14px] font-medium text-[#0B1D3A] outline-none transition-all resize-none font-['Outfit']"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME SLOT */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="flex flex-col gap-8"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 3 of 4 · Schedule Slot
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-tight">
                    Select Date &amp; Time Slot
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] mt-1 font-medium">
                    Pick an upcoming date and time slot that fits your schedule for the 1-on-1 Google Meet drill.
                  </p>
                </div>

                <div className="flex flex-col gap-7">
                  <div>
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] block mb-3">
                      1. Choose Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {s.dates.map((d) => {
                        const isSelected = selectedDate === d.label;
                        return (
                          <button
                            key={d.label}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`px-3 py-4 rounded-[14px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-md ring-2 ring-[#C99A2E]"
                                : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A]"
                            }`}
                          >
                            <span
                              className={`text-[10.5px] font-bold uppercase ${
                                isSelected ? "text-[#E4C46A]" : "text-[#7B8DAA]"
                              }`}
                            >
                              {d.day}
                            </span>
                            <span className="text-[16px] font-extrabold leading-none">
                              {d.date}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                isSelected
                                  ? "bg-white/15 text-white"
                                  : "bg-[#E9FBF3] text-[#047857]"
                              }`}
                            >
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] block mb-3">
                      2. Choose Time Slot
                    </span>
                    <div className="flex flex-col gap-3">
                      {s.timeSlots.map((period) => (
                        <div
                          key={period.period}
                          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3]"
                        >
                          <span className="text-[11.5px] font-bold text-[#7B8DAA] uppercase tracking-wider w-28 shrink-0 flex items-center gap-2">
                            {period.period === "Morning" ? (
                              <span className="w-5 h-5 rounded-[4px] bg-[#D97706] text-white flex items-center justify-center">
                                <Sun size={12} />
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-[4px] bg-[#4338CA] text-white flex items-center justify-center">
                                <Moon size={12} />
                              </span>
                            )}
                            {period.period}
                          </span>

                          <div className="flex flex-wrap gap-2.5">
                            {period.slots.map((slot) => {
                              const isSelected = selectedSlot === slot.time;
                              return (
                                <button
                                  key={slot.time}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot.time)}
                                  className={`px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-[#C99A2E] text-[#0B1D3A] font-bold shadow-xs ring-1 ring-[#0B1D3A]/20"
                                      : "bg-white border border-[#E6EBF3] text-[#0B1D3A] hover:border-[#CBD5E1]"
                                  }`}
                                >
                                  {slot.time}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: REVIEW & CONFIRM */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="flex flex-col gap-7"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 4 of 4 · Final Reservation
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-tight">
                    Review &amp; Confirm Your Reservation
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] mt-1 font-medium">
                    Verify all session details below to generate your Google Meet invite and secure your mentor slot.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Specifications */}
                  <div className="p-6 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-4">
                    {activeExpert ? (
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#E6EBF3]">
                        <div className="flex items-center gap-3">
                          <img
                            src={activeExpert.image}
                            alt={activeExpert.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#C99A2E]"
                          />
                          <div>
                            <h4 className="text-[16px] font-bold text-[#0B1D3A]">
                              {activeExpert.name}
                            </h4>
                            <p className="text-[12px] font-medium text-[#7B8DAA]">
                              {activeExpert.role}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="text-[12px] font-bold text-[#8A5A00] hover:underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div className="p-3 rounded-[12px] bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-full bg-[#C99A2E] text-[#0B1D3A] flex items-center justify-center font-bold">
                            <User size={16} />
                          </span>
                          <div>
                            <span className="text-[13px] font-bold text-amber-900 block">
                              No Mentor Selected
                            </span>
                            <span className="text-[11.5px] text-amber-700 font-medium">
                              Choose a mentor to personalize rate
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="px-3 py-1 rounded-[8px] bg-[#0B1D3A] text-white text-[11.5px] font-bold"
                        >
                          + Select
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-2.5 text-[13px]">
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Session Length:</span>
                        <span className="font-bold text-[#0B1D3A]">
                          {selectedDuration ? `${selectedDuration.duration} (${selectedDuration.label})` : "45 MIN"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Scheduled Date &amp; Time:</span>
                        <span className="font-bold text-[#0B1D3A]">
                          {selectedDate} · {selectedSlot}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Delivery Mode:</span>
                        <span className="font-bold text-[#0B1D3A] flex items-center gap-1.5">
                          <Video size={14} className="text-[#0891B2]" />
                          1-on-1 Google Meet Role-Play
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-[12px] bg-white border border-[#E6EBF3]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA] block mb-1">
                        Practice Scenario:
                      </span>
                      <p className="text-[13px] font-semibold text-[#0B1D3A] italic">
                        "{scenarioText}"
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Investment Summary */}
                  <div className="p-6 rounded-[16px] bg-white border border-[#E6EBF3] luxury-shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-[16px] font-bold text-[#0B1D3A] mb-3.5">
                        Investment Summary
                      </h4>

                      {activeExpert && selectedDuration && currentDurationPrice ? (
                        <div className="flex flex-col gap-2.5 text-[13px]">
                          <div className="flex justify-between text-[#5A6B82] font-medium">
                            <span>Session Fee ({selectedDuration.duration}):</span>
                            <span className="font-bold text-[#0B1D3A]">{currentDurationPrice.price}</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82] font-medium">
                            <span>Google Meet &amp; Recording:</span>
                            <span className="text-[#10B981] font-bold">Included</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82] font-medium">
                            <span>Scorecard &amp; Rubric Feedback:</span>
                            <span className="text-[#10B981] font-bold">Included</span>
                          </div>

                          <div className="pt-3 border-t border-[#E6EBF3] flex justify-between items-baseline text-[16px] font-bold text-[#0B1D3A]">
                            <span>Total Investment:</span>
                            <span className="text-[26px] font-extrabold text-[#8A5A00]">
                              {currentDurationPrice.price}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-[12px] bg-amber-50 border border-amber-200 flex flex-col gap-2">
                          <span className="text-[13px] font-bold text-amber-900">
                            Fee Calculation Pending
                          </span>
                          <p className="text-[12px] text-amber-800 font-medium">
                            Please select a verified mentor to calculate your exact session fee.
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsSwitchExpertOpen(true)}
                            className="mt-1 px-3.5 py-1.5 rounded-[8px] bg-[#0B1D3A] text-white text-[12px] font-bold w-fit cursor-pointer"
                          >
                            + Choose Mentor
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 flex items-center gap-2.5 text-[12px] font-medium text-[#475569] border-t border-[#F0F4FA] mt-4">
                      <span className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                        <ShieldCheck size={12} strokeWidth={3} />
                      </span>
                      <span>100% Satisfaction Guarantee. Free session retry if unsatisfied.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wizard Action Footer */}
          <div className="pt-6 border-t border-[#F0F4FA] flex items-center justify-between mt-6">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-11 !px-5 text-[13px] !rounded-[12px] font-semibold flex items-center gap-2 cursor-pointer hover:bg-white"
              >
                <ArrowLeft size={15} className="shrink-0" />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-11 !px-6 text-[13.5px] !rounded-[12px] font-bold shadow-xs cursor-pointer"
              >
                Continue to Next Step
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-11.5 !px-7 text-[14px] !rounded-[12px] font-bold shadow-md cursor-pointer"
              >
                Confirm &amp; Reserve Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Celebration Modal */}
      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBooked(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="relative z-10 w-full max-w-[440px] bg-white rounded-[24px] p-7 border border-[#E6EBF3] shadow-[0_24px_60px_-12px_rgba(11,29,58,0.25)] overflow-hidden flex flex-col items-center text-center gap-4"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

              <button
                type="button"
                onClick={() => setIsBooked(false)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F3F6FB] hover:bg-[#E2E8F0] text-[#7B8DAA] hover:text-[#0B1D3A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-lg mb-1">
                <Check size={32} strokeWidth={3.4} />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                  Booking Confirmed
                </span>
                <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-tight leading-tight">
                  Your Slot is Reserved!
                </h3>
                <p className="text-[13px] text-[#5A6B82] mt-1 leading-relaxed max-w-[340px] font-medium">
                  Google Meet invitation details have been prepared for your session with{" "}
                  <span className="font-bold text-[#0B1D3A]">
                    {activeExpert?.name || "your verified mentor"}
                  </span>
                  .
                </p>
              </div>

              <div className="w-full rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] p-4 flex flex-col gap-2.5 text-left text-[12.5px] shadow-2xs">
                {activeExpert && (
                  <div className="flex items-center gap-3 pb-3 border-b border-[#E6EBF3]">
                    <img
                      src={activeExpert.image}
                      alt={activeExpert.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#CBD5E1]"
                    />
                    <div className="min-w-0">
                      <span className="block text-[13.5px] font-bold text-[#0B1D3A] truncate leading-tight">
                        {activeExpert.name}
                      </span>
                      <span className="block text-[11.5px] text-[#7B8DAA] truncate font-medium">
                        {activeExpert.role.split("·")[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] font-medium">Date &amp; Time</span>
                  <span className="font-bold text-[#0B1D3A]">
                    {selectedDate} · {selectedSlot}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] font-medium">Duration</span>
                  <span className="font-bold text-[#0B1D3A] bg-white px-2.5 py-0.5 rounded-[6px] border border-[#E6EBF3]">
                    {selectedDuration?.duration || "45 MIN"}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#7B8DAA] font-medium shrink-0">Scenario</span>
                  <span className="font-bold text-[#0B1D3A] text-right truncate max-w-[200px]">
                    {scenarioText}
                  </span>
                </div>
              </div>

              <div className="pt-1 w-full">
                <PrimaryButton
                  full
                  variant="gold"
                  onClick={() => {
                    setIsBooked(false);
                    goToStep(1);
                  }}
                  className="!h-11 !rounded-[12px] font-bold text-[13.5px] shadow-sm cursor-pointer"
                >
                  Done
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
