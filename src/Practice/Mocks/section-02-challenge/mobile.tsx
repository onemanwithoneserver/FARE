import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { TrendingDown, MessageSquareX, MicOff, AlertOctagon, Flame, Clock, LayoutList, UserX } from "lucide-react";

const icons = [TrendingDown, MessageSquareX, MicOff, AlertOctagon, Flame, Clock, LayoutList, UserX];

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const sectionData = data.challenge;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center w-full"
        >
          <h2 className="text-[#0B1D3A] text-[26px] sm:text-[28px] font-black mb-4 leading-tight tracking-tight max-w-[95%] mx-auto">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4"
        >
          {sectionData.points.map((point, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-5 rounded-[4px] shadow-sm flex items-start gap-4 relative overflow-hidden"
              >
                <div className={`w-11 h-11 shrink-0 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white mt-0.5`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
