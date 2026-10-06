import { motion } from "motion/react";
import { data } from "../data";
import { MapPin, Info } from "lucide-react";

export default function Mobile() {
  const s = data.segments;

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
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-4">
        {s.items.map((segment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[8px] p-6 border border-[#E2E8F0] luxury-shadow-float"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] flex items-center justify-center">
                <MapPin size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-[17px] font-bold text-[#0B1D3A]">{segment.title}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {segment.items.map((item, idx) => (
                <li key={idx} className="text-[14px] text-[#64748B] font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex items-start gap-2 text-[12px] text-slate-500 font-medium justify-center text-center"
      >
        <Info size={14} className="mt-0.5 shrink-0" />
        {s.note}
      </motion.div>
    </section>
  );
}
