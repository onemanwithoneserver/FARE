import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { MapPin, Info } from "lucide-react";

export default function Desktop() {
  const s = data.segments;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-tight tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {s.items.map((segment, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="bg-white rounded-[8px] p-8 border border-[#E2E8F0] luxury-shadow-float group hover:border-[#C99A2E]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] flex items-center justify-center mb-6 group-hover:bg-[#0B1D3A] group-hover:text-white transition-colors duration-300">
                <MapPin size={22} strokeWidth={2.5} />
              </div>
              <h3 className="text-[20px] font-bold text-[#0B1D3A] mb-4 leading-snug">
                {segment.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {segment.items.map((item, idx) => (
                  <li key={idx} className="text-[15px] text-[#64748B] font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto flex items-center justify-center gap-2 text-[14px] text-slate-500 font-medium"
        >
          <Info size={16} />
          {s.note}
        </motion.div>
      </div>
    </section>
  );
}
