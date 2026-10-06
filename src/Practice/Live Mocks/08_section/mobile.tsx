import { motion } from "motion/react";
import { data } from "../data";
import { Clock, CheckCircle } from "lucide-react";

export default function Mobile() {
  const s = data.chooseSession;

  return (
    <section className="w-full bg-[#FAFAFA] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-4 mb-8">
        {s.sessions.map((session, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[8px] p-5 border border-slate-200/80 luxury-shadow-float flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] flex items-center justify-center">
                <Clock size={18} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#0B1D3A]">{session.duration}</h3>
                <p className="text-[12px] text-[#C99A2E] font-bold uppercase tracking-wider">{session.label}</p>
              </div>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
              {session.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-blue-50 border border-blue-100 rounded-[8px] p-4 flex items-start gap-3"
      >
        <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
        <p className="text-[13px] text-blue-800 font-medium">
          {s.note}
        </p>
      </motion.div>
    </section>
  );
}
