import { motion } from "motion/react";
import { data } from "../data";
import { MousePointerClick, Calendar, User, MessageCircle, PlayCircle } from "lucide-react";

const flowIcons = [MousePointerClick, Calendar, User, MessageCircle, PlayCircle];

export default function Mobile() {
  const sectionData = data.solution;
  return (
    <section className="w-full bg-[#0B1D3A] py-16 relative overflow-hidden">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[28px] font-bold text-white mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mx-auto mb-5 rounded-[2px]" />
          <p className="text-[15px] text-white/70">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-8 relative before:absolute before:left-[24px] before:top-[10px] before:bottom-[10px] before:w-[2px] before:bg-white/10">
          {sectionData.flow.map((item, index) => {
            const Icon = flowIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 relative z-10 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#C99A2E] border border-[#C99A2E]/50 flex items-center justify-center text-white mt-1 shadow-md transition-all duration-300">
                  <Icon size={20} strokeWidth={2} />
                  <div className="absolute -left-2 -top-1 w-5 h-5 rounded-full bg-[#102B63] border border-[#C99A2E]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#C99A2E]/80 uppercase mb-1">
                    {item.step}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
