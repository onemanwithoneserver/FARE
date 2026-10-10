import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Users, Plus, X, Calendar, RotateCcw } from "lucide-react";
import { data } from "./data";
import { ACCENTS, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Mobile() {
  const s = data;
  // By default: 0 experts selected with 3 columns visible
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Always render 3 columns (slots 0, 1, 2)
  const slots = [0, 1, 2];

  const selectedExperts = selectedNames
    .map((name) => s.allExperts.find((exp) => exp.name === name))
    .filter(Boolean) as typeof s.allExperts;

  const availableExperts = s.allExperts.filter(
    (exp) => !selectedNames.includes(exp.name)
  );

  const handleAddExpert = (name: string) => {
    if (selectedNames.length < 3 && !selectedNames.includes(name)) {
      setSelectedNames((prev) => [...prev, name]);
    }
    setIsPickerOpen(false);
  };

  const handleRemoveExpert = (name: string) => {
    setSelectedNames((prev) => prev.filter((n) => n !== name));
  };

  const handleClearAll = () => {
    setSelectedNames([]);
  };

  const canAddMore = selectedNames.length < 3 && availableExperts.length > 0;

  return (
    <Section tone="soft" mobile ariaLabel="Compare Experts" className="!pt-6 !pb-12">
      <div className="flex flex-col gap-4">
        <SectionHeader
          mobile
          eyebrow="Compare"
          icon={Users}
          accent={ACCENTS[0]}
          title={s.title}
          description="Select up to 3 experts to compare their experience, pricing, and availability side-by-side."
        />

        <div className="flex items-center gap-2">
          {canAddMore && (
            <button
              onClick={() => setIsPickerOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-[12px] bg-white border border-[#CBD5E1] text-[13px] font-bold text-[#0B1D3A] shadow-xs cursor-pointer active:scale-98 transition-transform"
            >
              <Plus size={16} className="text-[#C99A2E]" />
              Add Expert ({selectedNames.length}/3)
            </button>
          )}

          {selectedNames.length > 0 && (
            <button
              onClick={handleClearAll}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-[12px] bg-white border border-[#CBD5E1] text-[12px] font-bold text-[#EF4444] shadow-xs cursor-pointer"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          )}
        </div>

        <div className="-mx-5 px-5 overflow-x-auto pb-4 scrollbar-hide">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="min-w-[620px] bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          >
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr>
                  <th className="p-4 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[28%]">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#7B8DAA] block">
                      Criteria
                    </span>
                  </th>

                  {/* Exactly 3 columns for 3 slots */}
                  {slots.map((slotIdx) => {
                    const exp = selectedExperts[slotIdx];

                    return exp ? (
                      <th
                        key={exp.name}
                        className="p-4 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] text-center relative w-[24%]"
                      >
                        <button
                          onClick={() => handleRemoveExpert(exp.name)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white text-[#94A3B8] hover:text-[#EF4444] border border-[#E2E8F0] flex items-center justify-center shadow-xs cursor-pointer"
                        >
                          <X size={12} />
                        </button>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-sm mb-1.5 ring-2 ring-[#E6EBF3]">
                            <img
                              src={`https://i.pravatar.cc/150?u=${exp.name.replace(" ", "")}`}
                              alt={exp.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-[13px] font-black text-[#0B1D3A] leading-tight mb-0.5">
                            {exp.name}
                          </span>
                          <span className="text-[10px] font-semibold text-[#7B8DAA] line-clamp-1 max-w-[110px]">
                            {exp.role.split("·")[0]}
                          </span>
                        </div>
                      </th>
                    ) : (
                      <th
                        key={`empty-slot-${slotIdx}`}
                        onClick={() => setIsPickerOpen(true)}
                        className="p-4 bg-[#FAFCFF] border-b border-r border-[#E6EBF3] text-center cursor-pointer w-[24%]"
                      >
                        <div className="flex flex-col items-center justify-center py-2.5 border border-dashed border-[#CBD5E1] rounded-[12px]">
                          <Plus size={16} className="text-[#C99A2E] mb-1" />
                          <span className="text-[11px] font-bold text-[#0B1D3A]">
                            + Add
                          </span>
                          <span className="text-[9px] font-semibold text-[#7B8DAA]">
                            Slot {slotIdx + 1}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {s.criteria.map((crit, i) => (
                  <tr key={crit}>
                    <td className="p-3 border-b border-r border-[#E6EBF3] bg-[#F8FAFD]/60">
                      <span className="text-[11.5px] font-bold text-[#475569]">{crit}</span>
                    </td>

                    {/* 3 columns matching the 3 slots */}
                    {slots.map((slotIdx) => {
                      const exp = selectedExperts[slotIdx];

                      return exp ? (
                        <td
                          key={`${exp.name}-${crit}`}
                          className="p-3 border-b border-r border-[#E6EBF3] text-center"
                        >
                          {exp.values[i] === "✓" ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981]/10 text-[#10B981]">
                              <Check size={13} strokeWidth={3} />
                            </span>
                          ) : crit === "30 min Price" ? (
                            <span className="text-[13px] font-black text-[#0B1D3A]">
                              {exp.values[i]}
                            </span>
                          ) : crit === "Availability" ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                              <Calendar size={10} />
                              {exp.values[i]}
                            </span>
                          ) : (
                            <span className="text-[12px] font-semibold text-[#0B1D3A]">
                              {exp.values[i]}
                            </span>
                          )}
                        </td>
                      ) : (
                        <td
                          key={`empty-${slotIdx}-${crit}`}
                          className="p-3 border-b border-r border-[#E6EBF3] bg-[#FAFCFF] text-center text-[#CBD5E1]"
                        >
                          —
                        </td>
                      );
                    })}
                  </tr>
                ))}

                <tr>
                  <td className="p-3 bg-[#F8FAFD] border-r border-[#E6EBF3]">
                    <span className="text-[10px] font-black uppercase text-[#7B8DAA]">
                      Action
                    </span>
                  </td>

                  {slots.map((slotIdx) => {
                    const exp = selectedExperts[slotIdx];

                    return exp ? (
                      <td
                        key={`cta-${exp.name}`}
                        className="p-3 border-r border-[#E6EBF3] text-center"
                      >
                        <PrimaryButton
                          full
                          mobile
                          variant="gold"
                          className="!h-9 !py-0 !px-2 text-[11px] !rounded-[8px] font-bold"
                        >
                          Choose
                        </PrimaryButton>
                      </td>
                    ) : (
                      <td
                        key={`cta-empty-${slotIdx}`}
                        className="p-3 border-r border-[#E6EBF3] bg-[#FAFCFF] text-center"
                      >
                        <button
                          onClick={() => setIsPickerOpen(true)}
                          className="w-full h-9 border border-dashed border-[#CBD5E1] rounded-[8px] text-[11px] font-bold text-[#475569]"
                        >
                          + Select
                        </button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* Expert Picker Modal for Mobile */}
      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-[#0B1D3A]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[480px] bg-white rounded-t-[24px] sm:rounded-[20px] shadow-2xl p-5 z-10 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E6EBF3] mb-3">
                <div>
                  <h3 className="text-[16px] font-black text-[#0B1D3A]">
                    Add Expert to Compare
                  </h3>
                  <p className="text-[11px] font-medium text-[#7B8DAA]">
                    {selectedNames.length >= 3
                      ? "Maximum 3 experts selected"
                      : `Select an expert for Slot ${selectedNames.length + 1} of 3`}
                  </p>
                </div>
                <button
                  onClick={() => setIsPickerOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#475569]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto pr-1">
                {availableExperts.length > 0 ? (
                  availableExperts.map((exp) => (
                    <div
                      key={exp.name}
                      className="flex items-center justify-between p-2.5 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                          <img
                            src={`https://i.pravatar.cc/150?u=${exp.name.replace(" ", "")}`}
                            alt={exp.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-black text-[#0B1D3A] leading-tight">
                            {exp.name}
                          </span>
                          <span className="text-[10px] font-semibold text-[#7B8DAA] line-clamp-1">
                            {exp.role}
                          </span>
                          <span className="text-[10px] font-bold text-[#C99A2E]">
                            {exp.values[6]} · {exp.values[0]}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddExpert(exp.name)}
                        className="px-3 py-1.5 rounded-[8px] bg-[#0B1D3A] text-white text-[11px] font-bold shrink-0 flex items-center gap-1"
                      >
                        <Plus size={12} />
                        Add
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-6 text-[13px] font-semibold text-[#7B8DAA]">
                    All available experts have been added!
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
