import { useState } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, RotateCcw } from "lucide-react";
import { fadeUp, staggerContainer } from "../../ui";
import { ModernCheckbox } from "./ModernCheckbox";

export default function Desktop() {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(["Residential Sales", "5-10 Years", "English"])
  );

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      return next;
    });
  };

  const clearAll = () => {
    setSelectedFilters(new Set());
  };

  const filterGroups = [
    {
      name: "Expertise",
      options: [
        { label: "Residential Sales", count: 18 },
        { label: "Commercial Real Estate", count: 12 },
        { label: "Plotted Development", count: 9 },
        { label: "Luxury Villas", count: 6 },
      ],
    },
    {
      name: "Experience",
      options: [
        { label: "Any Experience", count: 24 },
        { label: "1-5 Years", count: 8 },
        { label: "5-10 Years", count: 11 },
        { label: "10+ Years", count: 5 },
      ],
    },
    {
      name: "Language",
      options: [
        { label: "English", count: 22 },
        { label: "Hindi", count: 19 },
        { label: "Telugu", count: 14 },
        { label: "Marathi", count: 7 },
      ],
    },
    {
      name: "Session Price",
      options: [
        { label: "Free Sessions", count: 4 },
        { label: "Paid Sessions", count: 20 },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <motion.div
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white rounded-[20px] border border-[#E6EBF3] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E6EBF3]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E]">
              <SlidersHorizontal size={16} />
            </div>
            <div>
              <h2 className="text-[17px] font-black text-[#0B1D3A] tracking-tight leading-none">
                Filters
              </h2>
              {selectedFilters.size > 0 && (
                <span className="text-[11px] font-bold text-[#7B8DAA] mt-0.5 block">
                  {selectedFilters.size} active
                </span>
              )}
            </div>
          </div>

          {selectedFilters.size > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-[12px] font-bold text-[#C99A2E] hover:text-[#8A5A00] transition-colors py-1 px-2 rounded-[6px] hover:bg-[#FBF5E7]"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          )}
        </div>

        {/* Filter Groups */}
        <div className="flex flex-col gap-7">
          {filterGroups.map((group) => (
            <motion.div key={group.name} variants={fadeUp} className="flex flex-col gap-2.5">
              <h3 className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA]">
                {group.name}
              </h3>
              <div className="flex flex-col gap-1">
                {group.options.map((opt) => (
                  <ModernCheckbox
                    key={opt.label}
                    label={opt.label}
                    count={opt.count}
                    checked={selectedFilters.has(opt.label)}
                    onChange={() => toggleFilter(opt.label)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
