import { motion } from "motion/react";
import { data } from "../data";
import { Search, UserCheck, Calendar, Video, Play, MessageSquare, Repeat } from "lucide-react";

const icons = [Search, UserCheck, Calendar, Video, Play, MessageSquare, Repeat];

export default function Mobile() {
  const s = data.learnerJourney;

  return (
    <section className="w-full bg-[#0B1D3A] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {s.steps.map((step, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-4 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="text-[#C99A2E] text-[18px] font-black opacity-20 absolute -right-1 -bottom-1">
                {index + 1}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-3 shadow-md">
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-[11px] font-bold text-[#E2C068] mb-1 uppercase tracking-widest">
                {step.step}
              </h3>
              <p className="text-[13px] text-white font-medium">
                {step.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
