import { motion } from "motion/react";
import { data } from "../data";
import { AlertCircle } from "lucide-react";

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];
export default function Mobile() {
  const sectionData = data.challenge;
  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
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
          {sectionData.points.map((point, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white via-[#FEFAF3] to-[#FFF8EC] p-5 rounded-[4px] border border-gray-100 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 shrink-0 rounded-[4px] bg-gradient-to-br ${gradient} flex items-center justify-center text-white mt-0.5 shadow-md`}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
