import { motion } from "motion/react";
import { data } from "../data";
import { ChevronRight } from "lucide-react";

export default function Desktop() {
  const sectionData = data.finalCta;
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 mb-8">
            <span className="text-[13px] font-bold text-[#C99A2E] tracking-widest">{sectionData.coreMessage}</span>
          </div>
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#0B1D3A] mb-6">
            {sectionData.title}
          </h2>
          <p className="text-[18px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectionData.sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0B1D3A] text-white p-8 rounded-[8px] luxury-shadow-float flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C99A2E]/10 rounded-full blur-[30px] group-hover:bg-[#C99A2E]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="text-[12px] font-bold tracking-widest text-[#E2C068] uppercase mb-4">
                  {sec.title}
                </div>
                <h3 className="text-[22px] font-bold mb-4 leading-snug">
                  {sec.subtitle}
                </h3>
                <p className="text-[15px] text-white/70 mb-8 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
              <button className="relative z-10 w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-[#0B1D3A] py-3 rounded-[8px] font-semibold text-[15px] transition-all duration-300">
                {sec.cta}
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
