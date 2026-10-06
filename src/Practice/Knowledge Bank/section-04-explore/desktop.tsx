import { motion } from "motion/react";
import { useState } from "react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronDown, Compass } from "lucide-react";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../ui";

export default function Desktop() {
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
    <Section tone="tint" ariaLabel="Explore Categories">
      <SectionHeader eyebrow={data.badge} icon={Compass} accent={ACCENTS[2]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center gap-6 max-w-[1300px] mx-auto"
      >
        {data.categories.map((cat, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          const isExpanded = expandedCards.has(i);
          const visibleItems = isExpanded ? cat.items : cat.items.slice(0, 5);
          const hiddenCount = cat.items.length - 5;
          
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-6 flex flex-col relative overflow-hidden group`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center gap-3.5 mb-5 border-b border-[#E6EBF3] pb-4">
                <IconBadge icon={Icon} accent={a} size="sm" />
                <h3 className="text-[17px] font-bold leading-tight text-[#0B1D3A]">
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
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: a.glow }} />
                    <span className="text-[14px] text-[#475569] font-medium leading-snug">
                      {itemStr}
                    </span>
                  </motion.li>
                ))}
              </ul>
              {hiddenCount > 0 && (
                <div className="mt-4 pt-2">
                  <button
                    onClick={() => toggleCard(i)}
                    className="text-[13px] font-bold text-[#C99A2E] hover:text-[#0B1D3A] transition-colors flex items-center gap-1"
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