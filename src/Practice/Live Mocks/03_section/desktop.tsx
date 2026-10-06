import { motion } from "motion/react";
import { Users, UserCheck, Handshake, Store, Plus, Equal } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const ICONS = [Users, UserCheck, Handshake];
const TONES = [ACCENTS[2], ACCENTS[3], ACCENTS[1]];
const CONNECTORS = [Plus, Equal];

export default function Desktop() {
  const s = data.solution;

  return (
    <Section tone="white" ariaLabel="The solution">
      <SectionHeader eyebrow="The Solution" icon={Store} accent={ACCENTS[3]} title={s.title} description={s.description} />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-6 lg:gap-4"
      >
        {s.parties.flatMap((p, i) => {
          const a = TONES[i];
          const featured = i === s.parties.length - 1;
          const card = (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 lg:p-9 overflow-hidden flex flex-col ${featured ? "!border-transparent text-white" : ""}`}
              style={featured ? { background: "linear-gradient(150deg, #16316A 0%, #0B1D3A 70%)" } : undefined}
            >
              {!featured && <AccentHairline accent={a} />}
              <HoverGlow accent={a} />
              {featured && <div aria-hidden="true" className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-[70px] bg-[#C99A2E]/25" />}
              <IconBadge icon={ICONS[i]} accent={a} size="lg" className="mb-7" />
              <h3 className={`relative text-[22px] font-bold mb-3 ${featured ? "text-white" : "text-[#0B1D3A]"}`}>{p.title}</h3>
              <p className={`relative text-[15px] leading-[1.75] font-medium ${featured ? "text-white/75" : "text-[#475569]"}`}>{p.desc}</p>
            </motion.article>
          );
          if (i === s.parties.length - 1) return [card];
          const Conn = CONNECTORS[i] ?? Plus;
          return [
            card,
            <motion.div key={`c-${i}`} variants={fadeUp} className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <span className="w-11 h-11 rounded-full bg-white border border-[#E6EBF3] luxury-shadow flex items-center justify-center text-[#C99A2E]">
                <Conn size={18} strokeWidth={3} />
              </span>
            </motion.div>,
          ];
        })}
      </motion.div>
    </Section>
  );
}
