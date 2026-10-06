import { motion } from "motion/react";
import { data } from "../data";
import { ShieldCheck, Info } from "lucide-react";

export default function Mobile() {
  const s = data.trustQuality;

  return (
    <section className="w-full bg-[#FAFAFA] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-[4px] bg-blue-50 text-blue-600 mb-4 border border-blue-100">
          <ShieldCheck size={20} strokeWidth={2.5} />
        </div>
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-3 mb-8">
        {s.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-4 py-3 bg-white border border-[#E2E8F0] rounded-[8px] text-[13px] font-semibold text-[#0B1D3A] luxury-shadow-float flex items-center gap-2.5"
          >
            <ShieldCheck size={16} className="text-[#34D399]" strokeWidth={2.5} />
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-blue-50 border border-blue-100 rounded-[8px] p-4 flex items-start gap-2.5"
      >
        <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
        <p className="text-[12px] text-blue-800 font-medium">
          {s.note}
        </p>
      </motion.div>
    </section>
  );
}
