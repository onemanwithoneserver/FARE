import { motion } from "motion/react";
import { data } from "../data";
import { Target, Users, Clock, CheckCircle, ChevronRight } from "lucide-react";

export default function Mobile() {
  const s = data.scenarioDetail;

  return (
    <section className="w-full bg-white py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 mb-5">
          <Target size={12} className="text-rose-500" />
          <span className="text-[11px] font-bold text-rose-600 tracking-wider uppercase">{s.scenarioType}</span>
        </div>
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] border border-[#E2E8F0] rounded-[8px] p-6"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#0B1D3A]/5 border border-[#0B1D3A]/10">
            <Users size={12} className="text-[#0B1D3A]" />
            <span className="text-[11px] font-bold text-[#0B1D3A]">Role: {s.practiceRole}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#C99A2E]/10 border border-[#C99A2E]/20">
            <Clock size={12} className="text-[#C99A2E]" />
            <span className="text-[11px] font-bold text-[#C99A2E]">{s.duration}</span>
          </div>
        </div>

        <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2">The Situation</h3>
        <p className="text-[13px] text-[#64748B] leading-relaxed font-medium mb-5 italic">
          "{s.situation}"
        </p>

        <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-3">What You Will Practise</h3>
        <div className="flex flex-col gap-2 mb-5">
          {s.whatYouWillPractise.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-white rounded-[4px] px-4 py-2.5 border border-[#E2E8F0]">
              <CheckCircle size={15} className="text-[#34D399] shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="text-[13px] text-[#0B1D3A] font-medium">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2">The Expert Will</h3>
        <p className="text-[13px] text-[#64748B] leading-relaxed font-medium mb-4">{s.expertWill}</p>

        <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2">You Will</h3>
        <p className="text-[13px] text-[#64748B] leading-relaxed font-medium mb-6">{s.youWill}</p>

        <button className="w-full text-white text-[14px] font-semibold px-7 py-3.5 rounded-[8px] flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300 bg-[#0B1D3A] shadow-[0_4px_16px_rgba(11,29,58,0.2)]">
          {s.cta}
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </motion.div>
    </section>
  );
}
