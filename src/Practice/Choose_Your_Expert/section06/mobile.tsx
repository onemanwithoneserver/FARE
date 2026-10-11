import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, X, ChevronDown, Plus, Check } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";
import { data as allExpertsData, type Expert } from "../section05/data";

interface Props {
  onBookExpert?: (expert: Expert) => void;
}

export default function Mobile({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerSlotIndex, setPickerSlotIndex] = useState<number | null>(null);

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
        if (prev.length < 4 && !prev.includes(name)) {
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

  const handleBook = (expertName: string) => {
    const found = allExpertsData.experts.find((e) => e.name === expertName);
    if (found && onBookExpert) {
      onBookExpert(found);
    } else {
      document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section tone="soft" mobile ariaLabel="Compare Experts" className="!pt-3 !pb-3 font-['Outfit']">
      <div className="flex flex-col gap-3">
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="bg-white rounded-[16px] border border-[#E6EBF3] p-3 shadow-xs active:bg-[#F8FAFD] transition-colors cursor-pointer flex flex-col gap-2.5 relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[9px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Users size={16} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#C99A2E] block">
                  {selectedNames.length} / 4 Selected
                </span>
                <h3 className="text-[15px] font-medium text-[#0B1D3A] leading-tight">
                  Compare Experts
                </h3>
              </div>
            </div>

            <span
              className={`w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center transition-transform duration-300 shadow-xs ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <ChevronDown size={14} />
            </span>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-[#F0F4FA]">
            {selectedExperts.length > 0 ? (
              <div className="flex -space-x-1.5 items-center">
                {selectedExperts.slice(0, 4).map((exp) => (
                  <img
                    key={exp.name}
                    src={exp.image}
                    alt={exp.name}
                    className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-2xs"
                  />
                ))}
              </div>
            ) : (
              <span className="text-[11px] font-medium text-[#7B8DAA] italic">
                0 mentors selected
              </span>
            )}
            <span className="text-[11.5px] font-medium text-[#C99A2E]">
              {isExpanded
                ? "Hide Details"
                : selectedNames.length === 0
                ? "Compare Experts (Select up to 4)"
                : `View ${selectedNames.length} Selected`}
            </span>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="w-full overflow-x-auto pb-3 scrollbar-hide pt-1">
                <div className="min-w-[760px] bg-white rounded-[16px] border border-[#E6EBF3] shadow-xs overflow-hidden">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        <th className="p-3 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[20%] text-[11px] font-medium text-[#0B1D3A]">
                          Criteria
                        </th>
                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          return (
                            <th
                              key={idx}
                              className="p-3 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[20%] text-center align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center gap-1.5 relative">
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveExpert(idx)}
                                    className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#EF4444] text-white flex items-center justify-center cursor-pointer"
                                  >
                                    <X size={9} />
                                  </button>
                                  <img
                                    src={exp.image}
                                    alt={exp.name}
                                    className="w-10 h-10 rounded-full object-cover border border-[#CBD5E1]"
                                  />
                                  <div className="min-w-0">
                                    <span className="text-[12px] font-medium text-[#0B1D3A] block truncate">
                                      {exp.name}
                                    </span>
                                    <span className="text-[9.5px] text-[#7B8DAA] block truncate font-normal">
                                      {exp.role.split("·")[0]}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 w-full pt-0.5">
                                    <button
                                      type="button"
                                      onClick={() => handleSwapExpert(idx)}
                                      className="flex-1 h-6 text-[10px] font-medium bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[#5A6B82] rounded-[6px] border border-[#E6EBF3] flex items-center justify-center transition-colors cursor-pointer"
                                    >
                                      Change
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleBook(exp.name)}
                                      className="flex-1 h-6 text-[10px] font-medium bg-[#C99A2E] text-white rounded-[6px] shadow-xs border border-[#C99A2E]/30 flex items-center justify-center cursor-pointer"
                                    >
                                      Book
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="py-3 flex flex-col items-center justify-center text-center">
                                  <button
                                    type="button"
                                    onClick={() => handleSwapExpert(idx)}
                                    className="w-8 h-8 rounded-full bg-[#C99A2E] text-white flex items-center justify-center mb-1 cursor-pointer shadow-xs"
                                  >
                                    <Plus size={14} />
                                  </button>
                                  <span className="text-[10px] font-medium text-[#0B1D3A]">
                                    + Add Mentor
                                  </span>
                                  <span className="text-[8.5px] text-[#7B8DAA] font-normal">
                                    Slot {idx + 1}
                                  </span>
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6EBF3]">
                      {s.criteria.map((crit, rowIdx) => (
                        <tr key={crit} className={rowIdx % 2 === 0 ? "bg-white" : "bg-[#FBFDFF]"}>
                          <td className="p-2.5 px-3 font-medium text-[11px] text-[#0B1D3A] bg-[#F8FAFD] border-r border-[#E6EBF3]">
                            {crit}
                          </td>
                          {slots.map((idx) => {
                            const exp = selectedExperts[idx];
                            const val = exp?.values[rowIdx] || "—";
                            return (
                              <td
                                key={idx}
                                className="p-2.5 px-3 text-[11px] font-normal text-[#475569] border-r border-[#E6EBF3] last:border-r-0 text-center"
                              >
                                {val === "✓" ? (
                                  <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#10B981] text-white">
                                    <Check size={9} strokeWidth={3} />
                                  </span>
                                ) : (
                                  <span className={!exp ? "text-[#CBD5E1]" : ""}>{val}</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-end font-['Outfit']">
            <div
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-black/50"
            />
            <div className="relative z-10 w-full bg-white rounded-t-[18px] p-4 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#F0F4FA] mb-2.5">
                <h4 className="font-medium text-[14px] text-[#0B1D3A]">Select Mentor to Compare</h4>
                <button
                  onClick={() => setIsPickerOpen(false)}
                  className="w-6 h-6 rounded-full bg-[#EF4444] text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={12} />
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                {s.allExperts.map((exp) => (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpertForSlot(exp.name)}
                    className="p-2 rounded-[10px] border border-[#E6EBF3] hover:border-[#C99A2E] flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <img src={exp.image} alt={exp.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-[12px] font-medium text-[#0B1D3A]">{exp.name}</span>
                    </div>
                    <span className="text-[11px] font-medium text-[#C99A2E]">{exp.values[6]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
