import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Users, Plus, X, Calendar, RotateCcw } from "lucide-react";
import { data } from "./data";
import { ACCENTS, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Desktop() {
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
    <Section tone="soft" ariaLabel="Compare Experts">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SectionHeader
            eyebrow="Compare"
            icon={Users}
            accent={ACCENTS[0]}
            title={s.title}
            description="Select up to 3 experts to compare their experience, pricing, and availability side-by-side."
            align="left"
            className="!mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            {selectedNames.length > 0 && (
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-[12px] font-bold text-[#7B8DAA] hover:text-[#EF4444] hover:bg-[#FEE2E2]/50 transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                Clear All
              </button>
            )}

            {canAddMore && (
              <button
                onClick={() => setIsPickerOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-white border border-[#CBD5E1] hover:border-[#C99A2E] text-[13px] font-bold text-[#0B1D3A] shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <Plus size={16} className="text-[#C99A2E]" />
                Add Expert to Compare ({selectedNames.length}/3)
              </button>
            )}
          </div>
        </div>

        <div className="max-w-[1060px] mx-auto w-full overflow-x-auto pb-4 scrollbar-hide">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="min-w-[860px] bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          >
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr>
                  <th className="p-6 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[25%] align-bottom">
                    <span className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] block mb-1">
                      Comparison
                    </span>
                    <span className="text-[14px] font-bold text-[#0B1D3A]">
                      Key Evaluation Criteria
                    </span>
                  </th>

                  {/* Exactly 3 columns for 3 slots */}
                  {slots.map((slotIdx) => {
                    const exp = selectedExperts[slotIdx];

                    return exp ? (
                      <th
                        key={exp.name}
                        className="p-6 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] text-center relative w-[25%]"
                      >
                        <button
                          onClick={() => handleRemoveExpert(exp.name)}
                          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white hover:bg-[#FEE2E2] text-[#94A3B8] hover:text-[#EF4444] border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                          title={`Remove ${exp.name} from comparison`}
                        >
                          <X size={14} />
                        </button>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-white overflow-hidden border-2 border-white shadow-md mb-3 ring-2 ring-[#E6EBF3]">
                            <img
                              src={exp.image}
                              alt={exp.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-[17px] font-black text-[#0B1D3A] tracking-tight mb-1">
                            {exp.name}
                          </h4>
                          <span className="text-[11px] font-bold text-[#7B8DAA] line-clamp-1 max-w-[180px]">
                            {exp.role}
                          </span>
                        </div>
                      </th>
                    ) : (
                      <th
                        key={`empty-slot-${slotIdx}`}
                        onClick={() => setIsPickerOpen(true)}
                        className="p-6 bg-[#FAFCFF] border-b border-r border-[#E6EBF3] text-center hover:bg-[#F0F6FF] transition-colors cursor-pointer group w-[25%]"
                      >
                        <div className="flex flex-col items-center justify-center py-5 border-2 border-dashed border-[#CBD5E1] group-hover:border-[#C99A2E] rounded-[16px] transition-colors">
                          <div className="w-12 h-12 rounded-full bg-white group-hover:bg-[#C99A2E]/10 flex items-center justify-center border border-[#E2E8F0] group-hover:border-[#C99A2E] mb-2 transition-all">
                            <Plus size={20} className="text-[#94A3B8] group-hover:text-[#C99A2E] transition-colors" />
                          </div>
                          <span className="text-[13px] font-bold text-[#0B1D3A] group-hover:text-[#8A5A00] transition-colors">
                            Add Expert
                          </span>
                          <span className="text-[11px] font-semibold text-[#7B8DAA]">
                            Slot {slotIdx + 1} of 3
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {s.criteria.map((crit, i) => (
                  <tr key={crit} className="hover:bg-[#F8FAFD]/50 transition-colors">
                    <td className="p-4 px-6 border-b border-r border-[#E6EBF3] bg-[#F8FAFD]/60">
                      <span className="text-[13px] font-bold text-[#475569]">{crit}</span>
                    </td>

                    {/* 3 columns matching the 3 slots */}
                    {slots.map((slotIdx) => {
                      const exp = selectedExperts[slotIdx];

                      return exp ? (
                        <td
                          key={`${exp.name}-${crit}`}
                          className="p-4 px-6 border-b border-r border-[#E6EBF3] text-center"
                        >
                          {exp.values[i] === "✓" ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#10B981]/10 text-[#10B981]">
                              <Check size={16} strokeWidth={3} />
                            </span>
                          ) : crit === "30 min Price" ? (
                            <span className="text-[15px] font-black text-[#0B1D3A]">
                              {exp.values[i]}
                            </span>
                          ) : crit === "Availability" ? (
                            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                              <Calendar size={12} />
                              {exp.values[i]}
                            </span>
                          ) : (
                            <span className="text-[13.5px] font-semibold text-[#0B1D3A]">
                              {exp.values[i]}
                            </span>
                          )}
                        </td>
                      ) : (
                        <td
                          key={`empty-${slotIdx}-${crit}`}
                          className="p-4 border-b border-r border-[#E6EBF3] bg-[#FAFCFF]/50 text-center"
                        >
                          <span className="text-[13px] text-[#CBD5E1] font-semibold">—</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Bottom Action Row */}
                <tr>
                  <td className="p-6 bg-[#F8FAFD] border-r border-[#E6EBF3]">
                    <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA]">
                      Action
                    </span>
                  </td>

                  {slots.map((slotIdx) => {
                    const exp = selectedExperts[slotIdx];

                    return exp ? (
                      <td
                        key={`cta-${exp.name}`}
                        className="p-5 border-r border-[#E6EBF3] text-center"
                      >
                        <PrimaryButton
                          full
                          variant="gold"
                          className="!h-10 !py-0 !px-3 text-[13px] !rounded-[10px] font-bold"
                        >
                          Choose {exp.name.split(" ")[0]}
                        </PrimaryButton>
                      </td>
                    ) : (
                      <td
                        key={`cta-empty-${slotIdx}`}
                        className="p-5 border-r border-[#E6EBF3] bg-[#FAFCFF] text-center"
                      >
                        <button
                          onClick={() => setIsPickerOpen(true)}
                          className="w-full h-10 border border-dashed border-[#CBD5E1] hover:border-[#C99A2E] rounded-[10px] text-[12px] font-bold text-[#475569] hover:text-[#0B1D3A] transition-colors cursor-pointer"
                        >
                          + Select Expert
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

      {/* Expert Picker Modal */}
      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-[#0B1D3A]/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-[500px] bg-white rounded-[20px] shadow-2xl border border-[#E6EBF3] p-6 z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6EBF3] mb-4">
                <div>
                  <h3 className="text-[17px] font-black text-[#0B1D3A] tracking-tight">
                    Add Expert to Compare
                  </h3>
                  <p className="text-[12px] font-medium text-[#7B8DAA]">
                    {selectedNames.length >= 3
                      ? "Maximum 3 experts selected. Remove one to add another."
                      : `Select an expert for Slot ${selectedNames.length + 1} of 3`}
                  </p>
                </div>
                <button
                  onClick={() => setIsPickerOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center text-[#475569] cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                {availableExperts.length > 0 ? (
                  availableExperts.map((exp) => (
                    <div
                      key={exp.name}
                      className="flex items-center justify-between p-3 rounded-[12px] bg-[#F8FAFD] hover:bg-[#F1F5F9] border border-[#E6EBF3] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                          <img
                            src={exp.image}
                            alt={exp.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-black text-[#0B1D3A] leading-tight">
                            {exp.name}
                          </span>
                          <span className="text-[11px] font-semibold text-[#7B8DAA] line-clamp-1">
                            {exp.role}
                          </span>
                          <span className="text-[11px] font-bold text-[#C99A2E]">
                            {exp.values[6]} · {exp.values[0]}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddExpert(exp.name)}
                        className="px-3.5 py-1.5 rounded-[8px] bg-[#0B1D3A] hover:bg-[#1E3A74] text-white text-[12px] font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        <Plus size={13} />
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
