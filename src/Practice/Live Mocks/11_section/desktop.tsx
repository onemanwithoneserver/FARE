import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { CheckCircle2 } from "lucide-react";

export default function Desktop() {
  const s = data.whoIsThisFor;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {s.roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="bg-white rounded-[8px] p-6 border border-[#E2E8F0] luxury-shadow-float flex items-start gap-4 hover:border-[#C99A2E]/30 transition-all duration-300"
            >
              <CheckCircle2 size={22} className="text-[#34D399] shrink-0 mt-0.5" strokeWidth={2.5} />
              <div>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-2 leading-snug">
                  {role.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed font-medium">
                  {role.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
