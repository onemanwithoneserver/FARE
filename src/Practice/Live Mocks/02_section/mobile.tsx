import { motion } from "motion/react";
import { data } from "../data";
import { TrendingDown, MessageSquareX, UserX, Clock, AlertTriangle } from "lucide-react";

const icons = [TrendingDown, MessageSquareX, UserX, Clock, AlertTriangle];
const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]",
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]",
];

export default function Mobile() {
  const s = data.problem;

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
        <p className="text-[14px] text-[#64748B] font-medium leading-relaxed">
          {s.description}
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {s.points.map((point, index) => {
          const gradient = GRADIENTS[index % GRADIENTS.length];
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-5 rounded-[8px] luxury-shadow-float flex gap-4 items-start"
            >
              <div className={`w-10 h-10 rounded-[4px] bg-gradient-to-br ${gradient} shadow-sm flex items-center justify-center text-white shrink-0`}>
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <p className="text-[15px] font-semibold text-[#0B1D3A]/80 italic">
          "{s.closingLine}"
        </p>
      </motion.div>
    </section>
  );
}
