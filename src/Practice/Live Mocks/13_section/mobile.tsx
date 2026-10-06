import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle } from "lucide-react";

export default function Mobile() {
  const s = data.whatYouGet;

  return (
    <section className="w-full bg-white py-14 px-6 relative overflow-hidden font-['Outfit']">
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
        {s.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-gradient-to-br from-[#FAFBFF] to-[#F5F7FF] rounded-[8px] p-5 border border-[#E2E8F0] flex gap-3"
          >
            <CheckCircle size={20} className="text-[#34D399] shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
