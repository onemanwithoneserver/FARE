import { motion, type Variants } from "motion/react";
import SectionHeader from "../SectionHeader";
import { leadershipData } from "./data";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`,
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ManagementLeadershipDesktop() {
  return (
    <section
      id="company-sec-leadership"
      className="w-full py-16 px-10 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="03 · Executive Governance"
          title="Management & Leadership"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {leadershipData.map((leader, idx) => (
            <motion.div
              key={leader.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 ease-out overflow-hidden flex flex-col group relative"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{ background: cardAccents[idx % cardAccents.length] }}
              />

              <div className="relative h-52 overflow-hidden bg-[#F8FAFD]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white bg-black/55 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-[4px]">
                    {leader.experience}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="text-[18px] font-black text-[#0B1D3A] leading-snug tracking-tight group-hover:text-[#C99A2E] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C99A2E] mt-1">
                    {leader.role}
                  </div>
                  <p className="text-[13px] text-[#5A6B82] font-medium leading-[1.65] mt-2.5">
                    {leader.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#0B1D3A]/[0.06]">
                  {leader.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-[4px]"
                      style={{
                        background: "rgba(201,154,46,0.06)",
                        border: "1px solid rgba(201,154,46,0.2)",
                        color: "#0B1D3AE6",
                      }}
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
