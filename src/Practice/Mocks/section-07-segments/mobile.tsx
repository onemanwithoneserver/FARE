import { motion } from "motion/react";
import { data } from "../data";

export default function Mobile() {
  const sectionData = data.segments;
  return (
    <section className="w-full bg-[#0B1D3A] py-16 relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[28px] font-bold mb-4">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mx-auto mb-5 rounded-[2px]" />
          <p className="text-[15px] text-white/70">
            {sectionData.note}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {sectionData.items.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-5 rounded-[4px] backdrop-blur-sm"
            >
              <h3 className="text-[17px] font-bold text-[#E2C068] mb-4 border-b border-white/10 pb-3">
                {segment.title}
              </h3>
              <ul className="space-y-3">
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
