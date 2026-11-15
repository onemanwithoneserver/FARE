import { motion, type Variants } from "motion/react";
import SectionHeader from "../SectionHeader";
import { leadershipData } from "./data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ManagementLeadershipDesktop() {
  return (
    <section
      id="company-sec-leadership"
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-[#F8FAFD] border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[4%] w-[440px] h-[440px] rounded-full blur-[130px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="03 · Executive Governance"
          title="Management & Leadership"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {leadershipData.map((leader) => (
            <motion.div
              key={leader.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[8px] border border-[#E2E8F0] hover:border-[#C99A2E]/60 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 overflow-hidden flex flex-col group relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#0B1D3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-[4px]">
                    {leader.experience}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="text-base font-extrabold text-[#0B1D3A] leading-snug group-hover:text-[#C99A2E] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-bold text-[#C99A2E] mt-0.5">
                    {leader.role}
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-2.5">
                    {leader.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F1F5F9]">
                  {leader.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F0F4FF] border border-[#0B1D3A]/10 px-2 py-0.5 rounded-[4px]"
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
