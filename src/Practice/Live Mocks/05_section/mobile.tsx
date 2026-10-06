import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { ChevronDown } from "lucide-react";

const TAG_COLORS = [
  "bg-[#0B1D3A]/10 text-[#0B1D3A]",
  "bg-rose-50 text-rose-700",
  "bg-amber-50 text-amber-700",
  "bg-sky-50 text-sky-700",
  "bg-purple-50 text-purple-700",
  "bg-emerald-50 text-emerald-700",
];

export default function Mobile() {
  const s = data.browseScenarios;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#FAFAFA] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-3">
        {s.categories.map((cat, index) => {
          const isOpen = openIndex === index;
          const tagColor = TAG_COLORS[index % TAG_COLORS.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-[8px] border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer"
              >
                <span className="text-[15px] font-bold text-[#0B1D3A]">{cat.title}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className={`px-3 py-1.5 rounded-[4px] ${tagColor} text-[12px] font-semibold`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
