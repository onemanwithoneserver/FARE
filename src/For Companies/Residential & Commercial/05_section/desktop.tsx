import { motion } from "motion/react";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel={data.title} mobile={false}>
      <SectionHeader  eyebrow={data.overline} icon={RefreshCw} accent={ACCENTS[2]} title={data.headline} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mb-10"
      >
        {data.steps.map((step: any, i: number) => {
          const a = accentAt(i);
          return (
            <motion.div key={i} variants={fadeUp} className={`${CARD_BASE} ${CARD_HOVER} p-6`}>
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <div className="flex items-center justify-between mb-4">
                <IconBadge icon={CheckCircle2} accent={a} size="sm" />
                <span className="text-[24px] font-black leading-none text-[#0B1D3A]/10 select-none">{step.number}</span>
              </div>
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-2">{step.title}</h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
