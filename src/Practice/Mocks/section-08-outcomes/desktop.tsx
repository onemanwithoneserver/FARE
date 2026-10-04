import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle2 } from "lucide-react";

const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];
export default function Desktop() {
  const sectionData = data.outcomes;
  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12"
          >
            <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-bold mb-6">
              {sectionData.title}
            </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
            <div className="w-16 h-1 bg-[#C99A2E] mb-8 rounded-[2px]" />
            <div className="bg-gradient-to-br from-white via-[#FEFAF3] to-[#FFF8EC] p-8 rounded-[8px] border border-gray-100 luxury-shadow-float relative overflow-hidden">
              <div className="text-[60px] text-[#C99A2E]/20 absolute top-2 left-4 font-serif leading-none">"</div>
              <p className="text-[20px] md:text-[24px] text-[#0B1D3A] font-medium italic relative z-10 leading-snug">
                {sectionData.quote.replace(/"/g, '')}
              </p>
            </div>
          </motion.div>
          
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {sectionData.items.map((item, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className={`mt-1 w-10 h-10 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shrink-0`}>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-1.5 group-hover:text-[#C99A2E] transition-colors">
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
      </div>
    </section>
  );
}
