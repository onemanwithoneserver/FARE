import { motion } from "motion/react";
import { data } from "../data";
import { AlertCircle } from "lucide-react";

export default function Mobile() {
  const sectionData = data.challenge;
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
          <h2 className="text-[28px] font-bold text-[#0B1D3A] mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mb-5 rounded-[2px]" />
          <p className="text-[15px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {sectionData.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 rounded-[4px] border border-gray-100 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 shrink-0 rounded-[4px] bg-red-50 flex items-center justify-center text-red-500 mt-0.5">
                  <AlertCircle size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
