import { motion } from "motion/react";
import { data } from "../data";
import { Users, UserCheck, Handshake } from "lucide-react";

const icons = [Users, UserCheck, Handshake];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#C084FC] to-[#9333EA]",
  "from-[#34D399] to-[#059669]",
];

export default function Desktop() {
  const s = data.solution;

  return (
    <section className="w-full bg-gradient-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#102B63] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[80px]" />
      </div>
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-[1.2] tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
          <p className="text-[16px] md:text-[18px] text-white/70 font-medium">
            {s.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.parties.map((party, index) => {
            const Icon = icons[index];
            const gradient = GRADIENTS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-8 group hover:bg-white/[0.1] hover:border-[#C99A2E]/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C99A2E]/5 rounded-full blur-[30px] group-hover:bg-[#C99A2E]/15 transition-colors duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 shadow-lg`}>
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-[#E2C068] transition-colors duration-300">
                    {party.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-relaxed font-medium">
                    {party.desc}
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
