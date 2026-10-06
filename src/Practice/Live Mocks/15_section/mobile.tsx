import { motion } from "motion/react";
import { data } from "../data";
import { UserPlus, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Mobile() {
  const s = data.forExperts;

  return (
    <section className="w-full bg-[#FAFAFA] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <div className="bg-white border border-[#E2E8F0] rounded-[12px] luxury-shadow-float overflow-hidden flex flex-col">
        
        <div className="p-6 bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] border-b border-[#E2E8F0]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight">
              {s.title}
            </h2>
            <p className="text-[14px] text-[#64748B] font-medium leading-relaxed mb-5">
              {s.description}
            </p>
            <div className="inline-block px-3 py-1.5 bg-rose-50 text-rose-600 rounded-[4px] text-[12px] font-bold border border-rose-100 mb-6">
              {s.note}
            </div>

            <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3">You Decide:</h3>
            <ul className="flex flex-col gap-2">
              {s.youDecide.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[14px] font-medium text-[#64748B]">
                  <CheckCircle2 size={16} className="text-[#34D399]" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="p-6">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[16px] font-bold text-[#0B1D3A] mb-4"
          >
            Areas of Expertise Needed:
          </motion.h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {s.expertise.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-3 py-1.5 bg-[#FAFAFA] border border-slate-200 text-[#0B1D3A] rounded-[4px] text-[12px] font-semibold"
              >
                {exp}
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-white text-[14px] font-semibold px-6 py-3.5 rounded-[8px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-300 bg-[#0B1D3A] shadow-[0_4px_16px_rgba(11,29,58,0.2)]"
          >
            <UserPlus size={16} strokeWidth={2.5} />
            {s.cta}
            <ArrowRight size={14} strokeWidth={2.5} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
