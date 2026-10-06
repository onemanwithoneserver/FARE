import { motion } from "motion/react";
import { useState } from "react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronDown, Compass } from "lucide-react";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../ui";

export default function Mobile() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const { language } = useLanguage();
  const data = getData(language);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Section tone="tint" mobile ariaLabel="Explore Categories">
      <SectionHeader mobile eyebrow={data.badge} icon={Compass} accent={ACCENTS[2]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {data.categories.map((cat, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          const isExpanded = expandedCards.has(i);
          const visibleItems = isExpanded ? cat.items : cat.items.slice(0, 4); // show fewer on mobile
          const hiddenCount = cat.items.length - 4;
          
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 relative overflow-hidden flex flex-col"
            >
              <span aria-hidden="true" className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3 mb-4 border-b border-[#E6EBF3] pb-3 pt-1">
                <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                <h3 className="text-[15px] font-bold leading-tight text-[#0B1D3A]">
                  {cat.name}
                </h3>
              </div>
              
              <ul className="space-y-2.5">
                {visibleItems.map((itemStr, j) => (
                  <motion.li
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    key={j}
                    className="flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: a.glow }} />
                    <span className="text-[13.5px] text-[#475569] font-medium leading-snug">
                      {itemStr}
                    </span>
                  </motion.li>
                ))}
              </ul>
              {hiddenCount > 0 && (
                <div className="mt-3 pt-2">
                  <button
                    onClick={() => toggleCard(i)}
                    className="text-[12.5px] font-bold text-[#C99A2E] hover:text-[#0B1D3A] transition-colors flex items-center gap-1"
                  >
                    {isExpanded ? "Show less" : `+${hiddenCount} more`}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}