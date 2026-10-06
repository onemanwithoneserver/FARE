import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Briefcase, Users, Crown, Award, ShieldCheck } from "lucide-react";

const catIcons = [Briefcase, Users, Crown, Award];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]",
  "from-[#C084FC] to-[#9333EA]", "from-[#FBBF24] to-[#D97706]",
];

export default function Desktop() {
  const s = data.meetExperts;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[80px]" />
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-[1.2] tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {s.categories.map((cat, index) => {
            const Icon = catIcons[index];
            const gradient = GRADIENTS[index];
            return (
              <motion.div
                key={index}
                variants={itemV}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-7 group hover:bg-white/[0.1] hover:border-[#C99A2E]/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C99A2E]/5 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-3 group-hover:text-[#E2C068] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed font-medium">{cat.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-[8px] p-8"
        >
          <h3 className="text-[20px] font-bold text-white mb-6 text-center">Expert Profile Includes</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {s.expertCard.fields.map((field, idx) => (
              <div key={idx} className="px-4 py-2 rounded-[4px] bg-white/[0.08] border border-white/10 text-[13px] font-semibold text-white/80">
                {field}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {s.expertCard.ctas.map((cta, idx) => (
              <button
                key={idx}
                className={`px-6 py-3 rounded-[8px] text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  idx === 0
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#0B1D3A]"
                    : "bg-[#C99A2E] text-white hover:bg-[#E2C068] shadow-lg"
                }`}
              >
                {cta}
              </button>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-white/50">
            <ShieldCheck size={14} />
            <span className="font-medium">{s.verificationNote}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
