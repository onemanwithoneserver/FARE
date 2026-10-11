import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Plus,
  X,
  ChevronDown,
  Scale,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { data, CRITERIA_ITEMS } from "./data";
import {
  ACCENTS,
  Section,
  SectionHeader,
  PrimaryButton,
  HoverGlow,
  accentAt,
  EASE,
  FOCUS_RING,
  accentGradient,
  VerifiedBadge,
} from "../../ui";
import { data as allExpertsData, type Expert } from "../section05/data";

interface Props {
  onBookExpert?: (expert: Expert) => void;
}

export default function Desktop({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedNames, setSelectedNames] = useState<string[]>(s.defaultCompareNames);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerSlotIndex, setPickerSlotIndex] = useState<number | null>(null);

  const maxSlots = 4;
  const slots = [0, 1, 2, 3];

  const selectedExperts = selectedNames
    .map((name) => s.allExperts.find((exp) => exp.name === name))
    .filter(Boolean) as typeof s.allExperts;

  const handleSwapExpert = (slotIdx: number) => {
    setPickerSlotIndex(slotIdx);
    setIsPickerOpen(true);
  };

  const handleSelectExpertForSlot = (name: string) => {
    if (pickerSlotIndex !== null) {
      setSelectedNames((prev) => {
        const next = [...prev];
        next[pickerSlotIndex] = name;
        return next;
      });
    } else {
      setSelectedNames((prev) => {
        if (prev.length < maxSlots && !prev.includes(name)) {
          return [...prev, name];
        }
        return prev;
      });
    }
    setIsPickerOpen(false);
    setPickerSlotIndex(null);
  };

  const handleRemoveExpert = (slotIdx: number) => {
    setSelectedNames((prev) => {
      const next = [...prev];
      next.splice(slotIdx, 1);
      return next;
    });
  };

  const handleResetToDefault = () => {
    setSelectedNames(s.defaultCompareNames);
  };

  const handleBook = (expertName: string) => {
    const found = allExpertsData.experts.find((e) => e.name === expertName);
    if (found && onBookExpert) {
      onBookExpert(found);
    } else {
      document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section
      tone="soft"
      ariaLabel="Side-by-Side Evaluation"
      className="!pt-12 lg:!pt-16 !pb-12 font-['Outfit'] relative overflow-hidden"
    >
      <div className="flex flex-col gap-6 max-w-[1240px] mx-auto w-full">
        <SectionHeader
          eyebrow="Side-by-Side Evaluation"
          icon={Scale}
          accent={ACCENTS[1]}
          title="Compare Verified Mentors"
          className="!mb-4 lg:!mb-6"
        />

        {/* Toolbar Header Card */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 sm:p-5 luxury-shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#C99A2E] via-[#E4C46A] to-[#0B1D3A]" />
          <HoverGlow accent={ACCENTS[1]} />

          <div className="relative z-10 flex items-center gap-3.5 w-full md:w-auto">
            <span
              aria-hidden="true"
              className="w-11 h-11 rounded-[12px] text-white flex items-center justify-center shrink-0 shadow-xs"
              style={{ background: accentGradient(ACCENTS[0]) }}
            >
              <Scale size={20} strokeWidth={2.3} />
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C99A2E]">
                  Interactive Comparison Matrix
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EEF2F9] text-[#0B1D3A]">
                  {selectedNames.length} / {maxSlots} Mentors Active
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-[#0B1D3A] tracking-tight">
                Benchmark Mentors Before Booking
              </h3>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
            {selectedNames.length < maxSlots && (
              <button
                type="button"
                onClick={() => {
                  setPickerSlotIndex(selectedNames.length);
                  setIsPickerOpen(true);
                }}
                className={`h-9 px-3.5 rounded-[10px] bg-[#0B1D3A] text-white hover:bg-[#122A50] text-[12.5px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${FOCUS_RING}`}
              >
                <Plus size={14} strokeWidth={2.6} />
                <span>Add Mentor</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleResetToDefault}
              className={`h-9 px-3 rounded-[10px] bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[#475569] hover:text-[#0B1D3A] border border-[#E6EBF3] text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${FOCUS_RING}`}
              title="Reset comparison to default mentors"
            >
              <RotateCcw size={12} strokeWidth={2.4} />
              <span>Reset</span>
            </button>

            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className={`h-9 px-3.5 rounded-[10px] text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${FOCUS_RING} ${
                isExpanded
                  ? "bg-[#FFFBF0] text-[#8A5A00] border border-[#C99A2E]/50"
                  : "bg-white text-[#0B1D3A] border border-[#E6EBF3] hover:border-[#CBD5E1]"
              }`}
            >
              <span>{isExpanded ? "Collapse Matrix" : "Expand Matrix"}</span>
              <ChevronDown
                size={14}
                strokeWidth={2.6}
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Comparison Table View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="w-full overflow-x-auto pb-4 pt-1 [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent]">
                <div className="min-w-[1040px] bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        {/* Criteria header column */}
                        <th className="p-5 bg-gradient-to-b from-[#F8FAFD] to-[#F1F5F9] border-b border-r border-[#E6EBF3] w-[24%] align-bottom">
                          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7B8DAA] block mb-1">
                            Matrix Dimensions
                          </span>
                          <span className="text-[16px] font-bold text-[#0B1D3A] block">
                            Direct Comparison
                          </span>
                          <span className="text-[12px] font-medium text-[#5A6B82] mt-0.5 block">
                            Verified real estate performance data
                          </span>
                        </th>

                        {/* Expert header columns */}
                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          const a = accentAt(idx + 1);

                          return (
                            <th
                              key={idx}
                              className="p-5 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[19%] align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center text-center gap-3 relative">
                                  {selectedExperts.length > 2 && (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveExpert(idx)}
                                      aria-label={`Remove ${exp.name} from comparison`}
                                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F3F6FB] hover:bg-red-50 hover:text-red-600 text-[#7B8DAA] flex items-center justify-center transition-colors cursor-pointer border border-[#E6EBF3]"
                                    >
                                      <X size={12} strokeWidth={2.8} />
                                    </button>
                                  )}

                                  <div className="relative">
                                    <div
                                      className="w-16 h-16 rounded-full p-[2.5px] transition-transform duration-300 hover:scale-105"
                                      style={{
                                        background: "linear-gradient(135deg, #C99A2E, #F4D068 50%, #0B1D3A)",
                                        boxShadow: "0 8px 18px -6px rgba(201,154,46,0.5)",
                                      }}
                                    >
                                      <img
                                        src={exp.image}
                                        alt={exp.name}
                                        className="w-full h-full object-cover rounded-full bg-slate-100"
                                      />
                                    </div>
                                    <VerifiedBadge
                                      size={20}
                                      className="absolute -bottom-1 -right-1 ring-2 ring-white rounded-full shadow-xs"
                                    />
                                  </div>

                                  <div className="flex flex-col min-w-0 w-full">
                                    <h4 className="text-[16px] font-bold text-[#0B1D3A] truncate leading-tight">
                                      {exp.name}
                                    </h4>
                                    <span
                                      className="text-[11px] font-semibold mt-1 px-2.5 py-0.5 rounded-full truncate block"
                                      style={{ background: a.soft, color: a.ink }}
                                    >
                                      {exp.role.split("·")[0].trim()}
                                    </span>
                                  </div>

                                  <div className="w-full flex flex-col gap-2 pt-1">
                                    <PrimaryButton
                                      full
                                      variant="gold"
                                      onClick={() => handleBook(exp.name)}
                                      className="!h-9 !py-0 !px-2.5 !text-[12.5px] !rounded-[10px] font-semibold"
                                    >
                                      Book Session
                                    </PrimaryButton>
                                    <button
                                      type="button"
                                      onClick={() => handleSwapExpert(idx)}
                                      className="text-[11.5px] font-medium text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors cursor-pointer"
                                    >
                                      Swap Mentor
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="py-8 flex flex-col items-center justify-center text-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => handleSwapExpert(idx)}
                                    className={`w-12 h-12 rounded-full border-2 border-dashed border-[#CBD5E1] hover:border-[#C99A2E] bg-[#F8FAFD] hover:bg-[#FFFDF7] text-[#7B8DAA] hover:text-[#C99A2E] flex items-center justify-center transition-all cursor-pointer shadow-xs ${FOCUS_RING}`}
                                  >
                                    <Plus size={20} strokeWidth={2.5} />
                                  </button>
                                  <span className="text-[13px] font-bold text-[#0B1D3A] mt-1">
                                    Add Mentor
                                  </span>
                                  <span className="text-[11px] text-[#7B8DAA] font-medium">
                                    Slot {idx + 1} of {maxSlots}
                                  </span>
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#E6EBF3]">
                      {CRITERIA_ITEMS.map((item, rowIdx) => {
                        const Icon = item.icon;
                        const isEven = rowIdx % 2 === 0;

                        return (
                          <tr
                            key={item.id}
                            className={`group/row transition-colors ${
                              isEven ? "bg-white" : "bg-[#FBFDFF]"
                            } hover:bg-[#F3F6FD]/50`}
                          >
                            <td className="p-4 px-5 bg-[#F8FAFD] group-hover/row:bg-[#EEF3FA] transition-colors border-r border-[#E6EBF3]">
                              <div className="flex items-center gap-3">
                                <span
                                  aria-hidden="true"
                                  className="w-8 h-8 rounded-[8px] bg-white border border-[#E6EBF3] text-[#0B1D3A] flex items-center justify-center shrink-0 shadow-2xs"
                                >
                                  <Icon size={15} strokeWidth={2.3} />
                                </span>
                                <div>
                                  <span className="text-[13px] font-bold text-[#0B1D3A] block leading-tight">
                                    {item.label}
                                  </span>
                                  <span className="text-[11px] font-medium text-[#7B8DAA] block mt-0.5">
                                    {item.hint}
                                  </span>
                                </div>
                              </div>
                            </td>

                            {slots.map((idx) => {
                              const exp = selectedExperts[idx];
                              const val = exp?.values[rowIdx] || "—";
                              const isCheck = val.includes("✓");
                              const isPrice = item.id === "price";
                              const isAvail = item.id === "availability";

                              return (
                                <td
                                  key={idx}
                                  className="p-4 px-5 text-[13px] font-medium text-[#334155] border-r border-[#E6EBF3] last:border-r-0 text-center"
                                >
                                  {exp ? (
                                    isCheck ? (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9FBF3] text-[#047857] font-semibold text-[12px]">
                                        <Check size={12} strokeWidth={3.2} />
                                        <span>Specialist</span>
                                      </span>
                                    ) : isPrice ? (
                                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFFBF0] border border-[#C99A2E]/40 text-[#8A5A00] font-bold text-[13.5px]">
                                        {val}
                                      </span>
                                    ) : isAvail ? (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] font-semibold text-[12px]">
                                        <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                                        {val}
                                      </span>
                                    ) : (
                                      <span className="font-semibold text-[#0B1D3A]">
                                        {val}
                                      </span>
                                    )
                                  ) : (
                                    <span className="text-[#CBD5E1] text-[15px]">—</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>

                    <tfoot>
                      <tr className="bg-[#F8FAFD] border-t border-[#E6EBF3]">
                        <td className="p-4 px-5 border-r border-[#E6EBF3] text-[12px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                          Confirm Action
                        </td>
                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          return (
                            <td
                              key={idx}
                              className="p-4 px-5 border-r border-[#E6EBF3] last:border-r-0 text-center bg-white"
                            >
                              {exp ? (
                                <PrimaryButton
                                  full
                                  variant="gold"
                                  onClick={() => handleBook(exp.name)}
                                  className="!h-9 !py-0 !px-3 !text-[12.5px] !rounded-[10px] font-semibold"
                                >
                                  Reserve Slot
                                </PrimaryButton>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleSwapExpert(idx)}
                                  className="text-[12px] font-semibold text-[#C99A2E] hover:underline cursor-pointer"
                                >
                                  + Select Mentor
                                </button>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mentor Picker Modal */}
      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="relative z-10 w-full max-w-xl bg-white rounded-[20px] p-6 border border-[#E6EBF3] shadow-[0_24px_60px_-16px_rgba(11,29,58,0.25)] flex flex-col gap-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F4FA]">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-[8px] bg-[#0B1D3A] text-white flex items-center justify-center">
                    <Sparkles size={16} />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0B1D3A]">
                      Select Mentor for Comparison
                    </h3>
                    <p className="text-[12px] text-[#5A6B82] font-medium">
                      Pick any verified mentor to populate into your matrix
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPickerOpen(false)}
                  aria-label="Close mentor selector"
                  className="w-8 h-8 rounded-full bg-[#F3F6FB] hover:bg-[#E2E8F0] flex items-center justify-center text-[#5A6B82] cursor-pointer transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="flex flex-col gap-2.5">
                {s.allExperts.map((exp, idx) => {
                  const isAlreadySelected = selectedNames.includes(exp.name);
                  const a = accentAt(idx);

                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpertForSlot(exp.name)}
                      className={`p-3.5 rounded-[14px] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isAlreadySelected
                          ? "bg-[#F8FAFD] border-[#CBD5E1] opacity-75"
                          : "bg-white border-[#E6EBF3] hover:border-[#C99A2E] hover:bg-[#FFFDF7] hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={exp.image}
                          alt={exp.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[14.5px] font-bold text-[#0B1D3A] truncate">
                              {exp.name}
                            </h4>
                            {isAlreadySelected && (
                              <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-[#E2E8F0] text-[#475569]">
                                In Matrix
                              </span>
                            )}
                          </div>
                          <p className="text-[12px] text-[#5A6B82] truncate font-medium">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-[12.5px] font-bold px-3 py-1 rounded-full"
                          style={{ background: a.soft, color: a.ink }}
                        >
                          {exp.values[6]}
                        </span>
                        <span className="text-[12px] font-bold text-[#C99A2E]">
                          Select →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
