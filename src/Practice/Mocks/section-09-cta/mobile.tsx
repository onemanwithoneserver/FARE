import { motion } from "motion/react";
import { data } from "../data";
import { ChevronRight } from "lucide-react";

export default function Mobile() {
  const sectionData = data.finalCta;
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-[4px] bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 mb-6">
            <span className="text-[10px] font-bold text-[#C99A2E] tracking-widest">{sectionData.coreMessage}</span>
          </div>
          <h2 className="text-white text-[28px] font-bold mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          <p className="text-[15px] text-gray-600">
            {sectionData.description}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-5">
          {sectionData.sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0B1D3A] text-white p-6 rounded-[4px] shadow-lg flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[20px]" />
              <div className="relative z-10 mb-6">
                <div className="text-[11px] font-bold tracking-widest text-[#E2C068] uppercase mb-3">
                  {sec.title}
                </div>
                <h3 className="text-[20px] font-bold mb-3 leading-snug">
                  {sec.subtitle}
                </h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
              <button className="relative z-10 w-full flex items-center justify-center gap-2 bg-white/10 active:bg-white border border-white/20 active:border-white text-white active:text-[#0B1D3A] py-3.5 rounded-[8px] font-semibold text-[15px] transition-all duration-300 mt-auto">
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
