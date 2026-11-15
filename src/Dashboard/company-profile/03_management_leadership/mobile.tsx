import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { leadershipData } from "./data";

export default function ManagementLeadershipMobile() {
  return (
    <section
      id="company-sec-leadership"
      className="w-full py-10 px-4 bg-[#F8FAFD] border-b border-[#E2E8F0] scroll-mt-[96px]"
    >
      <SectionHeader
        compact
        eyebrow="03 · Executive Governance"
        title="Management & Leadership"
      />

      <div className="flex flex-col gap-3.5">
        {leadershipData.map((leader, idx) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="bg-white rounded-[8px] border border-[#E2E8F0] overflow-hidden shadow-2xs flex flex-col"
          >
            <div className="flex items-center gap-3.5 p-3.5 border-b border-[#F1F5F9]">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-16 h-16 rounded-[8px] object-cover object-top shrink-0 border border-[#E2E8F0]"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-[#0B1D3A] leading-snug">
                  {leader.name}
                </h3>
                <div className="text-[11px] font-bold text-[#C99A2E] mt-0.5">
                  {leader.role}
                </div>
                <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#0B1D3A] bg-[#F0F4FF] px-2 py-0.5 rounded-[4px] mt-1.5">
                  {leader.experience}
                </span>
              </div>
            </div>

            <div className="p-3.5 flex flex-col gap-2.5">
              <p className="text-xs text-[#64748B] leading-relaxed">{leader.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {leader.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
