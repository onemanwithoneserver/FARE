import { motion } from "motion/react";
import { MessageSquareX, AlertTriangle, UserX, TrendingDown, Clock, HelpCircle, Quote } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

const ICONS = [MessageSquareX, AlertTriangle, UserX, TrendingDown, Clock];
const TONES = [ACCENTS[4], ACCENTS[7], ACCENTS[6], ACCENTS[8], ACCENTS[3]];

export default function Mobile() {
  const s = data.problem;

  return (
    <Section tone="soft" mobile ariaLabel="The problem">
      <SectionHeader mobile eyebrow="The Problem" icon={HelpCircle} accent={ACCENTS[4]} title={s.title} description={s.description} />

      <motion.div variants={staggerContainer(0.07)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-3.5">
        {s.points.map((p, i) => {
          const a = TONES[i % TONES.length];
          return (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="relative bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-5 flex gap-4 overflow-hidden active:scale-[0.99] transition-transform"
            >
              <span aria-hidden="true" className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" style={{ background: `linear-gradient(${a.from}, ${a.to})` }} />
              <IconBadge icon={ICONS[i % ICONS.length]} accent={a} size="sm" interactive={false} />
              <div className="min-w-0">
                <h3 className="text-[15.5px] font-bold text-[#0B1D3A] leading-snug mb-1.5">{p.title}</h3>
                <p className="text-[13.5px] text-[#475569] leading-[1.65] font-medium">{p.desc}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.1} className="mt-8">
        <div className="relative overflow-hidden rounded-[18px] p-6 text-center luxury-shadow-lg" style={{ background: "linear-gradient(135deg, #16316A 0%, #0B1D3A 60%, #071A49 100%)" }}>
          <div aria-hidden="true" className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full blur-[60px] bg-[#C99A2E]/30" />
          <div className="relative flex flex-col items-center gap-4">
            <IconBadge icon={Quote} accent={ACCENTS[1]} size="sm" interactive={false} />
            <p className="text-[17px] font-bold text-white leading-[1.5]">{s.closingLine}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
