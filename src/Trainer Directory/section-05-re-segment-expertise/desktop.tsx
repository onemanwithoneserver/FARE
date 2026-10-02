import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-16 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative bg-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full grid grid-cols-3 gap-12 relative z-10"
      >
        {/* Column 1: RE Segment Expertise */}
        <motion.div variants={item} className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 border-b border-[#0B1D3A]/10 pb-3">
            <h2 className="text-[20px] font-bold tracking-[-0.01em]" style={{ color: NAVY }}>
              Real Estate Segment Expertise
            </h2>
          </div>
          <ul className="flex flex-col gap-3 list-decimal list-inside text-[15px] font-medium text-[#5A6B82]">
            {data.segments.map((segment, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="font-bold text-[#0B1D3A] mr-1">{segment.name}:</span>
                <span className="text-[#7B8DAA]">{segment.items.join(", ")}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 2: Learner Audience */}
        <motion.div variants={item} className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 border-b border-[#0B1D3A]/10 pb-3">
            <h2 className="text-[20px] font-bold tracking-[-0.01em]" style={{ color: NAVY }}>
              Learner Audience
            </h2>
          </div>
          <ul className="flex flex-col gap-3 list-disc list-inside text-[15px] font-medium text-[#5A6B82]">
            {data.learnerAudience.map((audience, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="font-bold text-[#0B1D3A] mr-1">{audience.title}</span>
                {audience.description && (
                  <span className="text-[#7B8DAA] block pl-5 text-[14px] mt-1">{audience.description}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Language */}
        <motion.div variants={item} className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 border-b border-[#0B1D3A]/10 pb-3">
            <h2 className="text-[20px] font-bold tracking-[-0.01em]" style={{ color: NAVY }}>
              Language
            </h2>
          </div>
          <ul className="flex flex-col gap-4 list-disc list-inside text-[15px] font-medium text-[#5A6B82]">
            <li className="leading-relaxed">
              <span className="font-bold text-[#0B1D3A] mr-1">Primary:</span>
              <span className="text-[#7B8DAA]">English</span>
            </li>
            <li className="leading-relaxed">
              <span className="font-bold text-[#0B1D3A] mr-1">Secondary:</span>
              <span className="text-[#7B8DAA]">Telugu, Hindi</span>
            </li>
          </ul>
        </motion.div>

      </motion.div>
    </section>
  );
}
