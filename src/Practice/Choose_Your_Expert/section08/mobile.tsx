import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Check,
  CheckCircle2,
  X,
  ArrowLeft,
  AlertCircle,
  User,
  Sparkles,
  Sun,
  Moon,
  Clock,
  Layers,
  Star,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, Section, SectionHeader, PrimaryButton, SecondaryButton, EASE, VerifiedBadge } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration", icon: Clock },
  { id: 2, title: "Scenario", icon: Sparkles },
  { id: 3, title: "Slot", icon: Calendar },
  { id: 4, title: "Review", icon: Layers },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 24 : -24,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 24 : -24,
    opacity: 0,
  }),
};

export default function Mobile({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState(1);
  const [internalExpertIndex, setInternalExpertIndex] = useState<number | null>(null);
  const activeExpert: Expert | null =
    propExpert !== undefined
      ? propExpert
      : internalExpertIndex !== null
      ? expertsList[internalExpertIndex]
      : null;

  const [selectedDurationId, setSelectedDurationId] = useState<string>("45");
  const [scenarioText, setScenarioText] = useState("Handling a Price Objection");
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedSlot, setSelectedSlot] = useState<string>("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const quickScenarios = useMemo(
    () => [
      { title: "Handling a Price Objection", tag: "Popular" },
      { title: "Negotiation & Margin Protection", tag: "Closing" },
      { title: "First-Time Homebuyer Pitch", tag: "Trust" },
      { title: "Site Visit Urgency & Spot Booking", tag: "High-Ticket" },
      { title: "Skeptical Investor / ROI Challenge", tag: "Commercial" },
    ],
    []
  );

  const selectedDuration = useMemo(
    () => (selectedDurationId ? s.durations.find((d) => d.id === selectedDurationId) || null : null),
    [selectedDurationId, s.durations]
  );

  const currentDurationPrice = useMemo(() => {
    return getExpertDurationPrice(activeExpert?.price, selectedDurationId);
  }, [activeExpert?.price, selectedDurationId]);

  const goToStep = (stepId: number) => {
    setSlideDirection(stepId > currentStep ? 1 : -1);
    setValidationError(null);
    setCurrentStep(stepId);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedDurationId) {
      setValidationError("Please select a session duration.");
      return;
    }
    if (currentStep === 2 && !scenarioText.trim()) {
      setValidationError("Please select or describe a practice scenario.");
      return;
    }
    if (currentStep === 3 && (!selectedDate || !selectedSlot)) {
      setValidationError("Please pick a date and time slot.");
      return;
    }
    setValidationError(null);
    setSlideDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setSlideDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirmBooking = () => {
    if (!activeExpert) {
      setValidationError("Please select a mentor before confirming your reservation.");
      setIsSwitchExpertOpen(true);
      return;
    }
    if (!selectedDurationId) {
      setValidationError("Please select a session duration.");
      goToStep(1);
      return;
    }
    setIsBooked(true);
  };

  const handleSelectExpert = (exp: Expert, idx: number) => {
    if (onSelectExpert) {
      onSelectExpert(exp);
    } else {
      setInternalExpertIndex(idx);
    }
    setValidationError(null);
    setIsSwitchExpertOpen(false);
  };

  const handleClearExpert = () => {
    if (onSelectExpert) {
      onSelectExpert(null);
    } else {
      setInternalExpertIndex(null);
    }
  };

  return (
    <Section
      tone="soft"
      mobile
      ariaLabel="Choose Session, Date & Time"
      id="booking-section"
      className="!pt-8 !pb-12 font-['Outfit']"
    >
      <div className="flex flex-col gap-4">
        <SectionHeader
          mobile
          eyebrow="Reserve 1-on-1 Practice"
          icon={Calendar}
          accent={ACCENTS[1]}
          title="Choose Session, Date & Time"
          description="Select duration, realistic scenario, and preferred slot to practice with your mentor."
          className="!mb-3"
        />

        {/* Mentor VIP Card */}
        {activeExpert ? (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#122A50] rounded-[16px] p-3.5 text-white shadow-xs flex items-center justify-between gap-3 border border-[#C99A2E]/30">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={activeExpert.image}
                  alt={activeExpert.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C99A2E] shrink-0"
                />
                <VerifiedBadge
                  size={16}
                  className="absolute -bottom-1 -right-1 ring-1.5 ring-[#0B1D3A] rounded-full shadow-xs"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4C46A] flex items-center gap-1">
                  <Star size={10} className="fill-current" />
                  Selected Mentor
                </span>
                <h4 className="text-[15px] font-bold truncate leading-tight mt-0.5">
                  {activeExpert.name}
                </h4>
                <p className="text-[11.5px] text-white/75 truncate font-medium">
                  {activeExpert.role.split("·")[0]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-2.5 py-1.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white/80 text-[11px] font-semibold"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsSwitchExpertOpen(true)}
                className="px-3 py-1.5 rounded-[8px] bg-[#C99A2E] text-[#0B1D3A] text-[11.5px] font-bold shadow-xs"
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#122A50] rounded-[16px] p-3.5 text-white shadow-xs flex items-center justify-between gap-3 border border-[#E6EBF3]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#C99A2E] text-[#0B1D3A] flex items-center justify-center shrink-0 font-bold">
                <User size={18} strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4C46A] block">
                  Mentor Status
                </span>
                <h4 className="text-[14.5px] font-bold truncate leading-tight">
                  No Mentor Selected
                </h4>
                <p className="text-[11.5px] text-white/70 truncate font-medium">
                  Choose a mentor for exact pricing
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen(true)}
              className="px-3.5 py-1.5 rounded-[8px] bg-[#C99A2E] text-[#0B1D3A] text-[11.5px] font-bold shrink-0 shadow-xs"
            >
              + Choose
            </button>
          </div>
        )}

        {/* Wizard Stepper Bar */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-3.5 shadow-xs relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2.5px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-4 left-[12.5%] -translate-y-1/2 h-[2.5px] rounded-full bg-gradient-to-r from-[#10B981] to-[#C99A2E] pointer-events-none"
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
                    className={`flex flex-col items-center select-none ${
                      isPast ? "cursor-pointer" : isCurrent ? "cursor-default" : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 mb-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${
                          isPast
                            ? "bg-[#10B981] text-white shadow-2xs"
                            : isCurrent
                            ? "bg-[#0B1D3A] text-white shadow-xs ring-2 ring-[#C99A2E]"
                            : "bg-white border-2 border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? <Check size={14} strokeWidth={3} /> : <Icon size={14} strokeWidth={2.4} />}
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-bold block ${
                        isCurrent ? "text-[#0B1D3A]" : isPast ? "text-[#059669]" : "text-[#7B8DAA]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Validation error */}
        {validationError && (
          <div className="p-3 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-[12px] font-bold flex items-center gap-2.5">
            <AlertCircle size={15} className="shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Step Card Content */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 shadow-xs overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            {/* STEP 1 */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight mt-0.5">
                    Select Session Duration
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <div
                        key={dur.id}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-4 rounded-[14px] border transition-all cursor-pointer flex flex-col gap-2 relative ${
                          isSelected
                            ? "bg-[#FFFDF7] border-[#C99A2E] ring-2 ring-[#C99A2E]/25 shadow-xs"
                            : "bg-white border-[#E6EBF3]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[18px] font-extrabold text-[#0B1D3A]">
                            {dur.duration}
                          </span>
                          {activeExpert && durPrice ? (
                            <span className="text-[16px] font-bold text-[#8A5A00]">
                              {durPrice.price}
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold text-[#5A6B82] bg-[#F8FAFD] px-2 py-0.5 rounded-[6px] border border-[#E6EBF3]">
                              Fee on select
                            </span>
                          )}
                        </div>

                        <span className="text-[13px] font-bold text-[#0B1D3A] leading-tight">
                          {dur.label}
                        </span>
                        <p className="text-[12px] text-[#5A6B82] font-medium leading-relaxed">
                          {dur.desc}
                        </p>

                        <div className="pt-2 border-t border-[#F0F4FA] flex flex-col gap-1 text-[11.5px]">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[#334155] font-medium">
                              <Check size={12} strokeWidth={3} className="text-[#10B981] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight mt-0.5">
                    Choose Practice Scenario
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {quickScenarios.map((sc) => {
                    const isSelected = scenarioText === sc.title;
                    return (
                      <div
                        key={sc.title}
                        onClick={() => setScenarioText(sc.title)}
                        className={`p-3.5 rounded-[12px] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/30"
                            : "bg-[#F8FAFD] border-[#E6EBF3]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#C99A2E] text-white" : "border-2 border-[#CBD5E1]"
                            }`}
                          >
                            {isSelected && <Check size={10} strokeWidth={3.4} />}
                          </span>
                          <span className="text-[13px] font-bold text-[#0B1D3A] leading-snug">
                            {sc.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                          {sc.tag}
                        </span>
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider">
                      Or describe custom scenario:
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={2.5}
                      placeholder="e.g. Challenging price objection from high-net-worth client..."
                      className="w-full p-3 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3] text-[13px] font-medium text-[#0B1D3A] outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight mt-0.5">
                    Select Date &amp; Time
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider block mb-2">
                      1. Date
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {s.dates.map((d) => {
                        const isSelected = selectedDate === d.label;
                        return (
                          <button
                            key={d.label}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`p-2.5 rounded-[12px] border text-center transition-all flex flex-col items-center gap-0.5 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-xs"
                                : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                            }`}
                          >
                            <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-[#E4C46A]" : "text-[#7B8DAA]"}`}>
                              {d.day}
                            </span>
                            <span className="text-[14px] font-extrabold leading-none">{d.date}</span>
                            <span className={`text-[9.5px] font-medium ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider block mb-2">
                      2. Time Slot
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {s.timeSlots.map((period) => (
                        <div key={period.period} className="p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2">
                          <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider flex items-center gap-1.5">
                            {period.period === "Morning" ? <Sun size={12} className="text-[#D97706]" /> : <Moon size={12} className="text-[#4338CA]" />}
                            {period.period}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {period.slots.map((slot) => {
                              const isSelected = selectedSlot === slot.time;
                              return (
                                <button
                                  key={slot.time}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot.time)}
                                  className={`px-3 py-1.5 rounded-[8px] text-[12px] font-semibold transition-all ${
                                    isSelected
                                      ? "bg-[#C99A2E] text-[#0B1D3A] font-bold shadow-xs"
                                      : "bg-white border border-[#E6EBF3] text-[#0B1D3A]"
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

            {/* STEP 4 */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight mt-0.5">
                    Review Reservation
                  </h3>
                </div>

                <div className="p-4 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-3 text-[12.5px]">
                  {activeExpert && (
                    <div className="flex items-center gap-3 pb-3 border-b border-[#E6EBF3]">
                      <img
                        src={activeExpert.image}
                        alt={activeExpert.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#C99A2E]"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[14.5px] font-bold text-[#0B1D3A] truncate">
                          {activeExpert.name}
                        </h4>
                        <p className="text-[11.5px] text-[#7B8DAA] truncate">
                          {activeExpert.role.split("·")[0]}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA]">Duration:</span>
                    <span className="font-bold text-[#0B1D3A]">
                      {selectedDuration?.duration || "45 MIN"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA]">Slot:</span>
                    <span className="font-bold text-[#0B1D3A]">
                      {selectedDate} · {selectedSlot}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA]">Format:</span>
                    <span className="font-bold text-[#0B1D3A]">
                      1-on-1 Google Meet
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#E6EBF3] flex justify-between items-baseline">
                    <span className="font-bold text-[#0B1D3A]">Total Fee:</span>
                    <span className="text-[20px] font-extrabold text-[#8A5A00]">
                      {currentDurationPrice?.price || "₹1,399"}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="pt-4 border-t border-[#F0F4FA] flex items-center justify-between mt-4">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-9 !px-4 text-[12px] !rounded-[10px] font-bold flex items-center gap-1.5"
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-9.5 !px-5 text-[12.5px] !rounded-[10px] font-bold"
              >
                Continue
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-10 !px-5 text-[13px] !rounded-[10px] font-bold"
              >
                Confirm Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      {/* Switch expert modal */}
      <AnimatePresence>
        {isSwitchExpertOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSwitchExpertOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-sm bg-white rounded-[20px] p-5 border border-[#E6EBF3] shadow-xl flex flex-col gap-3 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#F0F4FA]">
                <h3 className="text-[16px] font-bold text-[#0B1D3A]">
                  Select Verified Mentor
                </h3>
                <button
                  type="button"
                  onClick={() => setIsSwitchExpertOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#5A6B82]"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {expertsList.map((exp, idx) => (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpert(exp, idx)}
                    className="p-3 rounded-[12px] border border-[#E6EBF3] hover:border-[#C99A2E] flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border"
                      />
                      <div className="min-w-0">
                        <h4 className="text-[13px] font-bold text-[#0B1D3A] truncate">
                          {exp.name}
                        </h4>
                        <p className="text-[11px] text-[#7B8DAA] truncate">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#C99A2E] shrink-0">
                      {exp.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation modal */}
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
              className="relative z-10 w-full max-w-[340px] bg-white rounded-[22px] p-6 border border-[#E6EBF3] shadow-xl flex flex-col items-center text-center gap-3.5"
            >
              <div className="w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md">
                <Check size={28} strokeWidth={3.4} />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                  Slot Reserved
                </span>
                <h3 className="text-[18px] font-bold text-[#0B1D3A] leading-tight mt-0.5">
                  Booking Confirmed!
                </h3>
                <p className="text-[12px] text-[#5A6B82] mt-1 leading-relaxed">
                  Google Meet details generated for your session with {activeExpert?.name || "your mentor"}.
                </p>
              </div>

              <div className="w-full rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] p-3 text-left text-[12px] flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Slot:</span>
                  <span className="font-bold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Duration:</span>
                  <span className="font-bold text-[#0B1D3A]">{selectedDuration?.duration || "45 MIN"}</span>
                </div>
              </div>

              <PrimaryButton
                full
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  goToStep(1);
                }}
                className="!h-10 !rounded-[10px] font-bold text-[13px]"
              >
                Done
              </PrimaryButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
