import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { leadershipData } from "./data";

const cardAccents = [
  "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)",
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
];

export default function ManagementLeadershipMobile() {
  return (
    <section
      id="company-sec-leadership"
      className="w-full py-10 px-5 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="relative z-10">
        <SectionHeader
          compact
          eyebrow="03 · Executive Governance"
          title="Management & Leadership"
        />

        <div className="flex flex-col gap-3.5">
          {leadershipData.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] overflow-hidden luxury-shadow-float flex flex-col relative"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                style={{ background: cardAccents[idx % cardAccents.length] }}
              />
              <div className="flex items-center gap-3.5 p-4 border-b border-[#0B1D3A]/[0.06]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-16 h-16 rounded-[4px] object-cover object-top shrink-0 border border-[#0B1D3A]/[0.08]"
                />
                <div className="min-w-0">
                  <h3 className="text-[16px] font-black text-[#0B1D3A] leading-snug tracking-tight">
                    {leader.name}
                  </h3>
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#C99A2E] mt-0.5">
                    {leader.role}
                  </div>
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1D3A] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] px-2 py-0.5 rounded-[4px] mt-1.5">
                    {leader.experience}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <p className="text-[12.5px] text-[#5A6B82] font-medium leading-[1.6]">{leader.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {leader.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-[4px]"
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
        </div>
      </div>
    </section>
  );
}
