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
} from "lucide-react";
import { data } from "./data";
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

  const [selectedDurationId, setSelectedDurationId] = useState<string>("45");
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
    () => s.durations.find((d) => d.id === selectedDurationId) || s.durations[1],
    [selectedDurationId, s.durations]
  );

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
    <Section tone="soft" mobile ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-6 !pb-14 font-['Outfit']">
      <div className="flex flex-col gap-5">
        <SectionHeader
          mobile
          eyebrow="Reserve 1-on-1 Practice"
          icon={Calendar}
          accent={ACCENTS[7]}
          title="Choose Session, Date & Time"
          description="Select duration, realistic scenario, and preferred slot to practice with your mentor."
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
                <span className="text-[10px] font-black uppercase tracking-wider text-[#D5AA45] block">
                  Selected Mentor
                </span>
                <h4 className="text-[15px] font-black truncate">{activeExpert.name}</h4>
                <p className="text-[11px] text-white/70 truncate">{activeExpert.role.split("·")[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-2.5 py-1.5 rounded-[10px] bg-white/10 text-white/80 text-[11px] font-bold"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsSwitchExpertOpen(true)}
                className="px-3 py-1.5 rounded-[10px] bg-[#C99A2E] text-[#0B1D3A] text-[11px] font-black shadow-xs"
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
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-white/10 text-white/90">
                    0 Selected
                  </span>
                </div>
                <h4 className="text-[15px] font-black truncate">No Mentor Selected</h4>
                <p className="text-[11px] text-white/70 truncate">Tap to choose your mentor</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen(true)}
              className="px-3 py-1.5 rounded-[10px] bg-[#C99A2E] text-[#0B1D3A] text-[11px] font-black shrink-0 shadow-xs"
            >
              + Choose
            </button>
          </div>
        )}

        <div className="bg-white rounded-[18px] border border-[#E6EBF3] p-3 shadow-xs">
          <div className="grid grid-cols-4 gap-1.5">
            {STEPS.map((step) => {
              const isPast = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => isPast && setCurrentStep(step.id)}
                  disabled={!isPast}
                  className={`py-2 rounded-[10px] text-center flex flex-col items-center gap-0.5 transition-all ${
                    isCurrent
                      ? "bg-[#0B1D3A] text-[#D5AA45] font-black"
                      : isPast
                      ? "bg-[#E8FBF3] text-[#059669] font-bold"
                      : "bg-[#F8FAFD] text-[#8A9BB3] font-medium"
                  }`}
                >
                  <span className="text-[11px]">
                    {isPast ? "✓" : `Step ${step.id}`}
                  </span>
                  <span className="text-[11px] leading-none">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {validationError && (
          <div className="p-3 rounded-[12px] bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-bold flex items-center gap-2">
            <AlertCircle size={15} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <div className="bg-white rounded-[22px] border border-[#E6EBF3] p-5 shadow-sm min-h-[380px] flex flex-col justify-between">
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
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C99A2E] block">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[18px] font-black text-[#0B1D3A]">Select Duration</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    return (
                      <div
                        key={dur.id}
                        onClick={() => setSelectedDurationId(dur.id)}
                        className={`p-4 rounded-[16px] border transition-all ${
                          isSelected
                            ? "bg-[#FFFDF7] border-[#C99A2E] ring-2 ring-[#C99A2E]/25 shadow-sm"
                            : "bg-white border-[#E6EBF3]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[20px] font-black text-[#0B1D3A]">{dur.duration}</span>
                          <span className="text-[16px] font-black text-[#C99A2E]">{dur.price}</span>
                        </div>
                        <h4 className="text-[14px] font-black text-[#0B1D3A]">{dur.label}</h4>
                        <p className="text-[12px] text-[#5A6B82] mt-0.5">{dur.desc}</p>
                      </div>
                    );
                  })}
                </div>
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
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C99A2E] block">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[18px] font-black text-[#0B1D3A]">Practice Scenario</h3>
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
                        <span className="text-[12.5px] font-bold text-[#0B1D3A]">{sc.title}</span>
                        <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                          {sc.tag}
                        </span>
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[10px] font-black uppercase text-[#7B8DAA] flex items-center gap-1">
                      <Edit3 size={11} className="text-[#C99A2E]" />
                      Custom Scenario
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={2}
                      placeholder="Describe objection..."
                      className="w-full p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] text-[12.5px] text-[#0B1D3A] outline-none resize-none font-['Outfit']"
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
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C99A2E] block">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[18px] font-black text-[#0B1D3A]">Date & Time Slot</h3>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-3 gap-2">
                    {s.dates.slice(0, 3).map((d) => {
                      const isSelected = selectedDate === d.label;
                      return (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`p-2.5 rounded-[12px] border text-center flex flex-col items-center ${
                            isSelected
                              ? "bg-[#0B1D3A] text-white border-[#0B1D3A]"
                              : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                          }`}
                        >
                          <span className="text-[9.5px] uppercase font-bold text-[#D5AA45]">{d.day}</span>
                          <span className="text-[13px] font-black">{d.date}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2">
                    {s.timeSlots.map((period) => (
                      <div key={period.period} className="p-2.5 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#7B8DAA]">
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
                                className={`px-2.5 py-1 rounded-[8px] text-[11.5px] font-bold ${
                                  isSelected
                                    ? "bg-[#C99A2E] text-white"
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
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C99A2E] block">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[18px] font-black text-[#0B1D3A]">Review & Confirm</h3>
                </div>

                <div className="p-4 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2.5 text-[12.5px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#7B8DAA]">Mentor:</span>
                    {activeExpert ? (
                      <span className="font-bold text-[#0B1D3A]">{activeExpert.name}</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsSwitchExpertOpen(true)}
                        className="text-[12px] font-black text-[#C99A2E] underline"
                      >
                        + Select Mentor
                      </button>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA]">Duration:</span>
                    <span className="font-bold text-[#0B1D3A]">{selectedDuration.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B8DAA]">Slot:</span>
                    <span className="font-bold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                  </div>
                  <div className="pt-2 border-t border-[#E6EBF3] flex justify-between font-black text-[14px]">
                    <span className="text-[#0B1D3A]">Total Fee:</span>
                    <span className="text-[#C99A2E]">{selectedDuration.price}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 border-t border-[#F0F4FA] flex items-center justify-between mt-4">
            {currentStep > 1 ? (
              <SecondaryButton
                onClick={handlePrevStep}
                className="!h-10 !px-3.5 text-[12px] !rounded-[10px] font-bold flex items-center gap-1"
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
                className="!h-10 !px-4 text-[12.5px] !rounded-[10px] font-black"
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-11 !px-5 text-[13px] !rounded-[10px] font-black"
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
            <div className="relative z-10 w-full bg-white rounded-t-[20px] p-5 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-[#0B1D3A]">Choose Mentor</h4>
                  <span className="text-[11px] text-[#7B8DAA]">(Select 1)</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeExpert && (
                    <button
                      type="button"
                      onClick={handleClearExpert}
                      className="text-[11px] font-black text-red-500"
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
                        <span className="text-[13px] font-bold text-[#0B1D3A]">{exp.name}</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#C99A2E]">{exp.price}</span>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div onClick={() => setIsBooked(false)} className="fixed inset-0 bg-black/60" />
            <div className="relative z-10 w-full max-w-sm bg-white rounded-[24px] p-6 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#E8FBF3] text-[#059669] flex items-center justify-center">
                <Check size={26} strokeWidth={3} />
              </div>
              <h3 className="text-[19px] font-black text-[#0B1D3A]">Slot Confirmed!</h3>
              <p className="text-[12.5px] text-[#5A6B82]">
                Your 1-on-1 session with {activeExpert?.name || "your mentor"} is reserved.
              </p>
              <PrimaryButton
                full
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  setCurrentStep(1);
                }}
                className="!h-10 !rounded-[10px] font-black mt-2"
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
