import { motion } from "motion/react";
import { data } from "../data";
import { Users, UserCheck, Handshake } from "lucide-react";

const icons = [Users, UserCheck, Handshake];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#C084FC] to-[#9333EA]",
  "from-[#34D399] to-[#059669]",
];

export default function Mobile() {
  const s = data.solution;

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
        <p className="text-[14px] text-white/70 font-medium leading-relaxed">
          {s.description}
        </p>
      </motion.div>

      <div className="flex flex-col gap-5">
        {s.parties.map((party, index) => {
          const Icon = icons[index];
          const gradient = GRADIENTS[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-6 flex gap-4 items-start"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                <Icon size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-2">
                  {party.title}
                </h3>
                <p className="text-[13px] text-white/60 leading-relaxed font-medium">
                  {party.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
