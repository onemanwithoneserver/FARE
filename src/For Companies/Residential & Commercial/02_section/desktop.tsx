import { motion } from "motion/react";
import { AlertTriangle, TrendingDown, Clock, XCircle, Slash, ShieldAlert } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

const ICONS = [AlertTriangle, TrendingDown, Clock, XCircle, Slash, ShieldAlert];

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" orbs ariaLabel={data.title} mobile={false}>
      <SectionHeader  eyebrow={data.overline} icon={AlertTriangle} accent={ACCENTS[4]} title={data.title} description={""} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-16"
      >
        {data.challenges.map((c: string, i: number) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.article
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-7 lg:p-8 overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <div className="relative flex items-start justify-between mb-6">
                <IconBadge icon={Icon} accent={a} />
                <span className="text-[44px] font-black leading-none text-[#0B1D3A]/[0.05] select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative text-[18px] lg:text-[19px] font-bold text-[#0B1D3A] leading-snug mb-3">{c}</h3>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} className="max-w-[850px] mx-auto text-center rounded-[20px] p-10 lg:p-14 luxury-shadow-float relative overflow-hidden" style={{ background: "linear-gradient(135deg, #16316A 0%, #0B1D3A 50%, #132D5F 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C99A2E]/10 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#60A5FA]/10 rounded-full blur-[60px] pointer-events-none" />
        <h3 className="text-[24px] lg:text-[32px] font-bold text-white mb-5 relative z-10 leading-snug">
          {""}
        </h3>
        <p className="text-[18px] lg:text-[20px] font-semibold text-[#C99A2E] flex items-center justify-center gap-3 relative z-10">
          {""}
        </p>
      </motion.div>
    </Section>
  );
}
