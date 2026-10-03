import { motion } from "motion/react";
import { data } from "../data";
import { AlertCircle } from "lucide-react";

export default function Desktop() {
  const sectionData = data.challenge;
  return (
    <section className="w-full bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#0B1D3A] mb-6 leading-[1.2]">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-[#C99A2E] mx-auto mb-6 rounded-[2px]" />
          <p className="text-[16px] md:text-[18px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionData.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-[4px] border border-gray-100 luxury-shadow-float flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="w-10 h-10 rounded-[4px] bg-red-50 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <AlertCircle size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3 leading-snug group-hover:text-[#C99A2E] transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
