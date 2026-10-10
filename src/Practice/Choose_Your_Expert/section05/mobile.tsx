import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Target, Sparkles, MessageSquare, Calendar } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, PrimaryButton, SecondaryButton } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Expert Cards" className="!pt-4 !pb-16 bg-[#F8F9FC]">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-5"
      >
        {s.experts.map((expert) => (
          <motion.div key={expert.name} variants={fadeUp} className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 luxury-shadow-sm flex flex-col relative overflow-hidden">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border border-[#E6EBF3] shrink-0">
                <img src={`https://i.pravatar.cc/150?u=${expert.name}`} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col pt-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-none">{expert.name}</h3>
                  {expert.verified && <ShieldCheck size={14} className="text-[#10B981]" />}
                </div>
                <p className="text-[12px] font-semibold text-[#0B1D3A] mt-1.5 leading-snug">{expert.role}</p>
                <p className="text-[11px] font-medium text-[#475569] mt-0.5">{expert.experience}</p>
              </div>
            </div>

            {expert.relevance && expert.relevance.length > 0 && (
              <div className="bg-[#F8FAFD] rounded-[8px] p-3 border border-[#E2E8F0] mb-5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B1D3A] mb-2 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#C99A2E]" />
                  Why this expert?
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {expert.relevance.slice(0, 2).map((rel) => (
                    <li key={rel} className="flex items-start gap-1.5 text-[12px] font-medium text-[#475569] leading-tight">
                      <CheckCircle2 size={12} className="text-[#10B981] shrink-0 mt-0.5" />
                      {rel}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-4 mb-5">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-2">Can Practise</h4>
                <div className="flex flex-wrap gap-1.5">
                  {expert.canPractise.slice(0, 3).map((prac) => (
                    <span key={prac} className={`px-2 py-1 rounded-[4px] border text-[11px] font-medium ${prac === 'Price Objection' ? 'bg-[#FFF0F3] border-[#FDA4AF] text-[#BE123C] font-bold' : 'bg-[#F8F9FC] border-[#E6EBF3] text-[#475569]'}`}>
                      {prac}
                    </span>
                  ))}
                  {expert.canPractise.length > 3 && <span className="text-[11px] text-[#7B8DAA] self-center ml-1">+{expert.canPractise.length - 3}</span>}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-4 border-t border-[#E6EBF3] mb-5">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[#475569] flex items-center gap-1.5"><MessageSquare size={12} /> Languages</span>
                <span className="font-semibold text-[#0B1D3A]">{expert.languages.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[#475569] flex items-center gap-1.5"><Target size={12} /> Sessions</span>
                <span className="font-semibold text-[#0B1D3A]">{expert.sessionsCompleted} completed</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5 bg-[#FBF5E7]/50 -mx-5 px-5 py-3 border-y border-[#E4C46A]/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#8A5A00] uppercase tracking-wider mb-0.5">Price</span>
                <span className="text-[16px] font-black text-[#0B1D3A] leading-none">{expert.price}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-[#8A5A00] uppercase tracking-wider mb-0.5">Next Available</span>
                <span className="flex items-center gap-1 text-[13px] font-bold text-[#0B1D3A] leading-none">
                  <Calendar size={12} className="text-[#C99A2E]" />
                  {expert.nextAvailable}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-auto">
              <SecondaryButton mobile className="!px-2">View Profile</SecondaryButton>
              <PrimaryButton variant="gold" mobile className="!px-2">Book Session</PrimaryButton>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
