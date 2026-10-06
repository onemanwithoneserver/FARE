import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import {  IconBadge, Section, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="navy" mobile ariaLabel="Start Free">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            Start Free
          </span>
          <h2 className="text-white text-3xl font-black tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
          <p className="text-[15px] text-white/70 font-medium">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-col gap-5 mb-10"
        >
          {data.items.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const a = accentAt(i + 2); // Different accents for these specific cards

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/[0.03] backdrop-blur-md p-6 rounded-[16px] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <IconBadge icon={Icon} accent={a} size="md" interactive={false} />
                    <h3 className="text-[18px] font-bold text-white tracking-wide">
                      {itemData.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] text-white/70 leading-relaxed mb-6 font-normal">
                    {itemData.text}
                  </p>
                </div>

                <button 
                  className={`w-full py-3.5 px-6 rounded-[10px] font-bold text-[14.5px] flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    i === 0 
                      ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white" 
                      : "bg-gradient-to-r from-[#C99A2E] to-[#B8892A] text-white"
                  }`}
                >
                  <span>{itemData.cta}</span>
                  <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "16px" }}>
                    <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0" />
                  </span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {data.quote && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-5 py-3 rounded-[10px] bg-white/[0.03] border border-white/[0.08] text-white/90 text-[14px] font-medium tracking-wide">
              {data.quote}
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}