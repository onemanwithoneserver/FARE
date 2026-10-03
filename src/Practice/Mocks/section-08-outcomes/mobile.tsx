import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle2 } from "lucide-react";

export default function Mobile() {
  const sectionData = data.outcomes;
  return (
    <section className="w-full bg-[#f8fafc] py-16 relative overflow-hidden">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-[28px] font-bold text-[#0B1D3A] mb-4">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mb-6 rounded-[2px]" />
          <div className="bg-white p-6 rounded-[4px] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="text-[40px] text-[#C99A2E]/20 absolute -top-1 left-2 font-serif leading-none">"</div>
            <p className="text-[18px] text-[#0B1D3A] font-medium italic relative z-10 leading-snug">
              {sectionData.quote.replace(/"/g, '')}
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-5">
          {sectionData.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-3"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md shrink-0">
                <CheckCircle2 size={16} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
