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
  Edit3,
  Sparkles,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, Section, SectionHeader, PrimaryButton, SecondaryButton } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration" },
  { id: 2, title: "Scenario" },
  { id: 3, title: "Slot" },
  { id: 4, title: "Review" },
];

export default function Mobile({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [currentStep, setCurrentStep] = useState(1);
  const [internalExpertIndex, setInternalExpertIndex] = useState<number | null>(null);
  const activeExpert: Expert | null =
    propExpert !== undefined
      ? propExpert
      : internalExpertIndex !== null
      ? expertsList[internalExpertIndex]
      : null;

  const [selectedDurationId, setSelectedDurationId] = useState<string | null>(null);
  const [scenarioText, setScenarioText] = useState("Handling a Price Objection");
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedSlot, setSelectedSlot] = useState<string>("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const quickScenarios = useMemo(
    () => [
      { title: "Handling a Price Objection", tag: "Most Popular" },
      { title: "Negotiation & Margin Protection", tag: "Closing" },
      { title: "First-Time Homebuyer Pitch", tag: "Consultative" },
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
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
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
      setCurrentStep(1);
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
    <Section tone="soft" mobile ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-2 !pb-10 font-['Outfit']">
      <div className="flex flex-col gap-3.5">
        <SectionHeader
          mobile
          eyebrow="Reserve 1-on-1 Practice"
          icon={Calendar}
          accent={ACCENTS[7]}
          title="Choose Session, Date & Time"
          description="Select duration, realistic scenario, and preferred slot to practice with your mentor."
          className="!mb-3.5"
        />

        {activeExpert ? (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#163567] rounded-[20px] p-4 text-white shadow-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={activeExpert.image}
                alt={activeExpert.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/40 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5AA45] block">
                  Selected Mentor
                </span>
                <h4 className="text-[15px] font-bold truncate">{activeExpert.name}</h4>
                <p className="text-[11px] text-white/70 truncate">{activeExpert.role.split("·")[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-2.5 py-1.5 rounded-[10px] bg-white/10 text-white/80 text-[11px] font-semibold"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsSwitchExpertOpen(true)}
                className="px-3 py-1.5 rounded-[10px] bg-[#C99A2E] text-[#0B1D3A] text-[11px] font-bold shadow-xs"
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#163567] rounded-[20px] p-4 text-white shadow-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#C99A2E]/50 bg-white/5 flex items-center justify-center text-[#D5AA45] shrink-0">
                <User size={22} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-white/10 text-white/90">
                    0 Selected
                  </span>
                </div>
                <h4 className="text-[15px] font-bold truncate">No Mentor Selected</h4>
                <p className="text-[11px] text-white/70 truncate">Tap to choose your mentor</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen(true)}
              className="px-3 py-1.5 rounded-[10px] bg-[#C99A2E] text-[#0B1D3A] text-[11px] font-bold shrink-0 shadow-xs"
            >
              + Choose
            </button>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-md rounded-[20px] border border-[#E6EBF3] p-3.5 shadow-xs relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2.5px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-4 left-[12.5%] -translate-y-1/2 h-[2.5px] rounded-full bg-gradient-to-r from-[#10B981] to-[#C99A2E] shadow-[0_0_8px_rgba(201,154,46,0.4)] pointer-events-none"
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

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => isPast && setCurrentStep(step.id)}
                    disabled={!isPast}
                    className="flex flex-col items-center group cursor-pointer select-none"
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 mb-1.5">
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-full ring-2 ring-[#C99A2E] ring-offset-1 ring-offset-white pointer-events-none" />
                      )}

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                          isPast
                            ? "bg-gradient-to-tr from-[#059669] to-[#10B981] text-white shadow-xs"
                            : isCurrent
                            ? "bg-gradient-to-tr from-[#0B1D3A] to-[#122B54] text-[#D5AA45] shadow-xs"
                            : "bg-white border border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? <Check size={13} strokeWidth={2.6} /> : step.id}
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-medium block leading-tight ${
                        isCurrent ? "text-[#0B1D3A] font-bold" : isPast ? "text-[#059669]" : "text-[#7B8DAA]"
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

        {validationError && (
          <div className="p-3 rounded-[12px] bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-semibold flex items-center gap-2">
            <AlertCircle size={15} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <div className="bg-white rounded-[22px] border border-[#E6EBF3] p-4.5 shadow-xs min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A]">Select Duration</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-3.5 rounded-[16px] border transition-all relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-2 ring-[#C99A2E]/30 shadow-sm"
                            : "bg-white border-[#E6EBF3] active:bg-slate-50"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-[#D5AA45] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-bl-[10px] shadow-2xs">
                              <Check size={10} strokeWidth={2.6} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E]/15 border-b border-l border-[#C99A2E]/30 text-[#C99A2E] text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl-[10px]">
                            Recommended
                          </span>
                        )}

                        <div className="flex items-center justify-between mb-1 mt-0.5">
                          <span className="text-[18px] font-bold text-[#0B1D3A]">{dur.duration}</span>
                          {durPrice ? (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-[15px] font-bold text-[#C99A2E]"
                            >
                              {durPrice.price}
                            </motion.span>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsSwitchExpertOpen(true);
                              }}
                              className="px-2 py-0.5 rounded-[8px] bg-[#0B1D3A]/5 border border-[#E6EBF3] text-[10px] font-semibold text-[#5A6B82] flex items-center gap-1"
                            >
                              <User size={10} className="text-[#C99A2E]" />
                              <span>Fee on mentor select</span>
                            </button>
                          )}
                        </div>
                        <h4 className="text-[13.5px] font-bold text-[#0B1D3A]">{dur.label}</h4>
                        <p className="text-[11.5px] text-[#5A6B82] mt-0.5 leading-snug">{dur.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert && (
                  <div className="p-3 rounded-[14px] bg-[#FFFDF7] border border-[#C99A2E]/35 flex flex-col gap-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-[#C99A2E] shrink-0" />
                      <span className="text-[12px] font-bold text-[#0B1D3A]">No Mentor Selected</span>
                    </div>
                    <p className="text-[11px] text-[#5A6B82]">
                      Fees are customized by mentor tier. Pick a mentor to unlock session rates.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="w-full py-2 rounded-[10px] bg-[#0B1D3A] text-[#D5AA45] text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <User size={12} />
                      <span>+ Choose Mentor</span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A]">Practice Scenario</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {quickScenarios.map((sc) => {
                    const isSelected = scenarioText === sc.title;
                    return (
                      <div
                        key={sc.title}
                        onClick={() => setScenarioText(sc.title)}
                        className={`p-3 rounded-[14px] border transition-all flex items-center justify-between gap-2 ${
                          isSelected
                            ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/30"
                            : "bg-[#F8FAFD] border-[#E6EBF3]"
                        }`}
                      >
                        <span className="text-[12px] font-semibold text-[#0B1D3A]">{sc.title}</span>
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                          {sc.tag}
                        </span>
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-1.5 pt-1.5">
                    <span className="text-[10px] font-bold uppercase text-[#7B8DAA] flex items-center gap-1">
                      <Edit3 size={11} className="text-[#C99A2E]" />
                      Custom Scenario
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={2}
                      placeholder="Describe objection..."
                      className="w-full p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] text-[12px] text-[#0B1D3A] outline-none resize-none font-['Outfit']"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A]">Date & Time Slot</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-3 gap-2">
                    {s.dates.slice(0, 3).map((d) => {
                      const isSelected = selectedDate === d.label;
                      return (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`p-2 rounded-[12px] border text-center flex flex-col items-center ${
                            isSelected
                              ? "bg-[#0B1D3A] text-white border-[#0B1D3A]"
                              : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                          }`}
                        >
                          <span className="text-[9px] uppercase font-semibold text-[#D5AA45]">{d.day}</span>
                          <span className="text-[13px] font-bold">{d.date}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2">
                    {s.timeSlots.map((period) => (
                      <div key={period.period} className="p-2.5 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                          {period.period}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {period.slots.map((slot) => {
                            const isSelected = selectedSlot === slot.time;
                            return (
                              <button
                                key={slot.time}
                                type="button"
                                onClick={() => setSelectedSlot(slot.time)}
                                className={`px-2.5 py-1 rounded-[8px] text-[11px] font-semibold ${
                                  isSelected
                                    ? "bg-[#C99A2E] text-white font-bold"
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
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A]">Review & Confirm</h3>
                </div>

                <div className="p-3.5 rounded-[15px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2.5 text-[12px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#7B8DAA] font-medium">Mentor:</span>
                    {activeExpert ? (
                      <span className="font-bold text-[#0B1D3A]">{activeExpert.name}</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsSwitchExpertOpen(true)}
                        className="text-[11.5px] font-bold text-[#C99A2E] underline"
                      >
                        + Select Mentor
                      </button>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA] font-medium">Duration:</span>
                    <span className="font-bold text-[#0B1D3A]">
                      {selectedDuration ? selectedDuration.duration : "Not selected yet"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA] font-medium">Slot:</span>
                    <span className="font-bold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                  </div>
                  <div className="pt-2 border-t border-[#E6EBF3] flex justify-between font-bold text-[13.5px]">
                    <span className="text-[#0B1D3A]">Total Fee:</span>
                    {activeExpert && selectedDuration && currentDurationPrice ? (
                      <span className="text-[#C99A2E]">{currentDurationPrice.price}</span>
                    ) : (
                      <span className="text-amber-700 text-[11.5px] font-medium">Pending selection</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#F0F4FA] flex items-center justify-between mt-3.5">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-9.5 !px-3.5 text-[12px] !rounded-[10px] font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer hover:bg-white"
              >
                <ArrowLeft size={13} className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-9.5 !px-4 text-[12px] !rounded-[10px] font-bold"
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-10 !px-4.5 text-[12.5px] !rounded-[10px] font-bold"
              >
                Confirm Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSwitchExpertOpen && (
          <div className="fixed inset-0 z-50 flex items-end">
            <div
              onClick={() => setIsSwitchExpertOpen(false)}
              className="fixed inset-0 bg-black/50"
            />
            <div className="relative z-10 w-full bg-white rounded-t-[20px] p-4.5 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-2.5 border-b mb-2.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-[#0B1D3A]">Choose Mentor</h4>
                  <span className="text-[11px] text-[#7B8DAA]">(Select 1)</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeExpert && (
                    <button
                      type="button"
                      onClick={handleClearExpert}
                      className="text-[11px] font-semibold text-red-500"
                    >
                      Clear
                    </button>
                  )}
                  <button onClick={() => setIsSwitchExpertOpen(false)}><X size={16} /></button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {expertsList.map((exp, idx) => {
                  const isCurrent = activeExpert?.name === exp.name;
                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpert(exp, idx)}
                      className={`p-2.5 rounded-[12px] border flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7]"
                          : "border-[#E6EBF3] bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img src={exp.image} alt={exp.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[12.5px] font-bold text-[#0B1D3A]">{exp.name}</span>
                      </div>
                      <span className="text-[10.5px] font-semibold text-[#C99A2E]">{exp.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <div onClick={() => setIsBooked(false)} className="fixed inset-0 bg-black/60" />
            <div className="relative z-10 w-full max-w-sm bg-white rounded-[22px] p-5 text-center flex flex-col items-center gap-3">
              <div className="w-13 h-13 rounded-full bg-[#E8FBF3] text-[#059669] flex items-center justify-center">
                <Check size={24} strokeWidth={2.6} />
              </div>
              <h3 className="text-[18px] font-bold text-[#0B1D3A]">Slot Confirmed!</h3>
              <p className="text-[12px] text-[#5A6B82]">
                Your 1-on-1 session with {activeExpert?.name || "your mentor"} is reserved.
              </p>
              <PrimaryButton
                full
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  setCurrentStep(1);
                }}
                className="!h-9.5 !rounded-[10px] font-bold mt-1.5"
              >
                Done
              </PrimaryButton>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
