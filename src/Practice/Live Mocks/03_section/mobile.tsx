import { motion } from "motion/react";
import { Users, UserCheck, Handshake, Store, Plus, Equal } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const ICONS = [Users, UserCheck, Handshake];
const TONES = [ACCENTS[2], ACCENTS[3], ACCENTS[1]];
const CONNECTORS = [Plus, Equal];

export default function Mobile() {
  const s = data.solution;

  return (
    <Section tone="white" mobile ariaLabel="The solution">
      <SectionHeader mobile eyebrow="The Solution" icon={Store} accent={ACCENTS[3]} title={s.title} description={s.description} />

      <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col items-stretch">
        {s.parties.map((p, i) => {
          const a = TONES[i];
          const featured = i === s.parties.length - 1;
          const Conn = CONNECTORS[i];
          return (
            <div key={p.title} className="flex flex-col items-center">
              <motion.article
                variants={fadeUp}
                className={`relative w-full rounded-[16px] p-5 overflow-hidden border ${featured ? "border-transparent text-white luxury-shadow-lg" : "bg-white border-[#E6EBF3] luxury-shadow-sm"}`}
                style={featured ? { background: "linear-gradient(150deg, #16316A 0%, #0B1D3A 70%)" } : undefined}
              >
                {featured && <div aria-hidden="true" className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full blur-[60px] bg-[#C99A2E]/30" />}
                <div className="relative flex items-center gap-3.5 mb-3">
                  <IconBadge icon={ICONS[i]} accent={a} size="sm" interactive={false} />
                  <h3 className={`text-[17px] font-bold ${featured ? "text-white" : "text-[#0B1D3A]"}`}>{p.title}</h3>
                </div>
                <p className={`relative text-[13.5px] leading-[1.7] font-medium ${featured ? "text-white/75" : "text-[#475569]"}`}>{p.desc}</p>
              </motion.article>
              {Conn && (
                <motion.span variants={fadeUp} aria-hidden="true" className="my-2.5 w-9 h-9 rounded-full bg-white border border-[#E6EBF3] luxury-shadow flex items-center justify-center text-[#C99A2E]">
                  <Conn size={15} strokeWidth={3} />
                </motion.span>
              )}
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
}
