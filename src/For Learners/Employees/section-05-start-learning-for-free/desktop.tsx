import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { PrimaryButton, accentAt, IconBadge, Section, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="navy" ariaLabel="Start Free">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">
            Start Free
          </span>
          <h2 className="text-white text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[17px] text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {data.items.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const a = accentAt(i + 2); // Different accents for these specific cards

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/[0.03] backdrop-blur-md p-8 lg:p-10 rounded-[20px] border border-white/[0.08] hover:border-white/[0.15] luxury-shadow-float hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <IconBadge icon={Icon} accent={a} size="lg" />
                    <h3 className="text-[22px] font-bold text-white tracking-wide">
                      {itemData.title}
                    </h3>
                  </div>
                  <p className="text-[16px] text-white/70 leading-relaxed mb-10 font-normal">
                    {itemData.text}
                  </p>
                </div>

                <div className="flex items-center justify-start mt-4">
                  <PrimaryButton variant={i === 0 ? "light" : "gold"} className={i === 0 ? "text-[#16A34A]" : ""}>
                    {itemData.cta}
                    <ChevronRight size={18} strokeWidth={2.5} className="ml-1" />
                  </PrimaryButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        </div>
    </Section>
  );
}