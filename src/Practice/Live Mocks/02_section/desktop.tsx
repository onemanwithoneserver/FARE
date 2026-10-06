import { motion } from "motion/react";
import { MessageSquareX, AlertTriangle, UserX, TrendingDown, Clock, HelpCircle, Quote } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

const ICONS = [MessageSquareX, AlertTriangle, UserX, TrendingDown, Clock];
const TONES = [ACCENTS[4], ACCENTS[7], ACCENTS[6], ACCENTS[8], ACCENTS[3]];

export default function Desktop() {
  const s = data.problem;

  return (
    <Section tone="soft" orbs ariaLabel="The problem">
      <SectionHeader eyebrow="The Problem" icon={HelpCircle} accent={ACCENTS[4]} title={s.title} description={s.description} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {s.points.map((p, i) => {
          const a = TONES[i % TONES.length];
          return (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-7 lg:p-8 overflow-hidden ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <div className="relative flex items-start justify-between mb-6">
                <IconBadge icon={ICONS[i % ICONS.length]} accent={a} />
                <span className="text-[44px] font-black leading-none text-[#0B1D3A]/[0.05] select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative text-[18px] lg:text-[19px] font-bold text-[#0B1D3A] leading-snug mb-3">{p.title}</h3>
              <p className="relative text-[15px] text-[#475569] leading-[1.7] font-medium">{p.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.15} className="mt-14">
        <div
          className="relative overflow-hidden rounded-[20px] px-8 lg:px-14 py-10 lg:py-12 text-center luxury-shadow-lg"
          style={{ background: "linear-gradient(135deg, #16316A 0%, #0B1D3A 60%, #071A49 100%)" }}
        >
          <div aria-hidden="true" className="absolute -top-20 -left-10 w-72 h-72 rounded-full blur-[80px] bg-[#6366F1]/25" />
          <div aria-hidden="true" className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full blur-[80px] bg-[#C99A2E]/25" />
          <div className="relative flex flex-col items-center gap-5">
            <IconBadge icon={Quote} accent={ACCENTS[1]} size="md" interactive={false} />
            <p className="text-[22px] lg:text-[26px] font-bold text-white leading-[1.45] max-w-[860px] tracking-[-0.01em]">{s.closingLine}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
