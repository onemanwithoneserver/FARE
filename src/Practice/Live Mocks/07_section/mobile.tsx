import { motion } from "motion/react";
import { data } from "../data";
import { Briefcase, Users, Crown, Award, ShieldCheck } from "lucide-react";

const catIcons = [Briefcase, Users, Crown, Award];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]",
  "from-[#C084FC] to-[#9333EA]", "from-[#FBBF24] to-[#D97706]",
];

export default function Mobile() {
  const s = data.meetExperts;

  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-4 mb-8">
        {s.categories.map((cat, index) => {
          const Icon = catIcons[index];
          const gradient = GRADIENTS[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-5 flex gap-4 items-start"
            >
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1.5">{cat.title}</h3>
                <p className="text-[12px] text-white/60 leading-relaxed font-medium">{cat.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/[0.04] border border-white/10 rounded-[8px] p-5"
      >
        <h3 className="text-[16px] font-bold text-white mb-4 text-center">Expert Profile Includes</h3>
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {s.expertCard.fields.map((field, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-[4px] bg-white/[0.08] border border-white/10 text-[11px] font-semibold text-white/80">
              {field}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          {s.expertCard.ctas.map((cta, idx) => (
            <button
              key={idx}
              className={`w-full px-5 py-3 rounded-[8px] text-[13px] font-semibold text-center transition-all duration-300 ${
                idx === 0
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-[#C99A2E] text-white shadow-lg"
              }`}
            >
              {cta}
            </button>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-white/50">
          <ShieldCheck size={12} />
          <span className="font-medium">{s.verificationNote}</span>
        </div>
      </motion.div>
    </section>
  );
}
