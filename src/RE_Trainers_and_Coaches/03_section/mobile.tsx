import { motion } from "motion/react";
import { Rocket, Link, LayoutList, Share2, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../Practice/ui";

const ICONS: Record<string, any> = { Rocket, Connect: Link, LayoutList, Share2, Star };

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" ariaLabel={data.title} mobile={true}>
      <SectionHeader mobile eyebrow={data.overline} icon={Star} accent={ACCENTS[6]} title={data.title} description={data.headline} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto"
      >
        {data.cards.map((card: any, i: number) => {
          const a = accentAt(i);
          const Icon = ICONS[card.icon] || Star;
          return (
            <motion.article
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-7 lg:p-8 overflow-hidden flex flex-col`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center gap-3.5 mb-5 border-b border-[#E6EBF3] pb-4">
                <IconBadge icon={Icon} accent={a} size="sm" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#64748B] pt-0.5">{card.tag}</span>
              </div>
              
              <h3 className="text-[19px] lg:text-[21px] font-bold text-[#0B1D3A] mb-3 leading-snug">{card.title}</h3>
              <p className="text-[15px] lg:text-[16px] text-[#475569] font-medium leading-[1.6] flex-grow">{card.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
