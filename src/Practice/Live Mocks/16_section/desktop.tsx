import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { ShieldCheck, Info } from "lucide-react";

export default function Desktop() {
  const s = data.trustQuality;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-[4px] bg-blue-50 text-blue-600 mb-6 border border-blue-100">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </div>
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
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12"
        >
          {s.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="px-5 py-3 bg-white border border-[#E2E8F0] rounded-[8px] text-[15px] font-semibold text-[#0B1D3A] luxury-shadow-float flex items-center gap-2"
            >
              <ShieldCheck size={16} className="text-[#34D399]" strokeWidth={2.5} />
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-blue-50 border border-blue-100 rounded-[8px] p-5 max-w-4xl mx-auto flex items-center justify-center text-center gap-3"
        >
          <Info size={20} className="text-blue-500 shrink-0" />
          <p className="text-[14px] text-blue-800 font-medium">
            {s.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
