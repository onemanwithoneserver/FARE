import { motion } from "motion/react";
import { data } from "../data";
import { Target, Users, Clock, CheckCircle, ChevronRight } from "lucide-react";

export default function Desktop() {
  const s = data.scenarioDetail;

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 mb-6">
            <Target size={14} className="text-rose-500" />
            <span className="text-[12px] font-bold text-rose-600 tracking-wider uppercase">{s.scenarioType}</span>
          </div>
          <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-4 leading-tight tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] border border-[#E2E8F0] rounded-[8px] p-10 luxury-shadow-float"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#0B1D3A]/5 border border-[#0B1D3A]/10">
                  <Users size={14} className="text-[#0B1D3A]" />
                  <span className="text-[12px] font-bold text-[#0B1D3A]">Role: {s.practiceRole}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#C99A2E]/10 border border-[#C99A2E]/20">
                  <Clock size={14} className="text-[#C99A2E]" />
                  <span className="text-[12px] font-bold text-[#C99A2E]">{s.duration}</span>
                </div>
              </div>

              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">The Situation</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed font-medium mb-6 italic">
                "{s.situation}"
              </p>

              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">The Expert Will</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed font-medium mb-4">{s.expertWill}</p>

              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">You Will</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed font-medium">{s.youWill}</p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-5">What You Will Practise</h3>
              <div className="flex flex-col gap-3">
                {s.whatYouWillPractise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-[4px] px-5 py-3.5 border border-[#E2E8F0]">
                    <CheckCircle size={18} className="text-[#34D399] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[14px] text-[#0B1D3A] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full text-white text-[14px] font-semibold px-7 py-3.5 rounded-[8px] flex items-center justify-center gap-2.5 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer group bg-[#0B1D3A] shadow-[0_4px_16px_rgba(11,29,58,0.2)]">
                {s.cta}
                <ChevronRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
