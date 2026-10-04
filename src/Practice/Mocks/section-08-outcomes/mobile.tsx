import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle2 } from "lucide-react";

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];
export default function Mobile() {
  const sectionData = data.outcomes;
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
          <h2 className="text-[#0B1D3A] text-[28px] font-bold mb-4">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <div className="w-12 h-1 bg-[#C99A2E] mb-6 rounded-[2px]" />
          <div className="bg-gradient-to-br from-white via-[#FEFAF3] to-[#FFF8EC] p-6 rounded-[4px] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="text-[40px] text-[#C99A2E]/20 absolute -top-1 left-2 font-serif leading-none">"</div>
            <p className="text-[18px] text-[#0B1D3A] font-medium italic relative z-10 leading-snug">
              {sectionData.quote.replace(/"/g, '')}
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-5">
          {sectionData.items.map((item, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-3"
            >
              <div className={`mt-0.5 w-8 h-8 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-md shrink-0`}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
