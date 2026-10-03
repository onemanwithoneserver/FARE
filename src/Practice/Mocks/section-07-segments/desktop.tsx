import { motion } from "motion/react";
import { data } from "../data";

export default function Desktop() {
  const sectionData = data.segments;
  return (
    <section className="w-full bg-[#0B1D3A] py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold mb-6">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-[#C99A2E] mx-auto mb-6 rounded-[2px]" />
          <p className="text-[16px] md:text-[18px] text-white/70">
            {sectionData.note}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionData.items.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-[8px] backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-[18px] font-bold text-[#E2C068] mb-4 border-b border-white/10 pb-3">
                {segment.title}
              </h3>
              <ul className="space-y-2.5">
                {segment.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
