import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Target, MessageSquare, Calendar, ChevronDown } from "lucide-react";
import { data, raviKumarDetails } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, PrimaryButton, SecondaryButton, HoverGlow } from "../../ui";
import ExpertProfileDialog, { type ExpertProfileData } from "../ExpertProfileDialog";

export default function Mobile() {
  const s = data;
  const [selectedExpert, setSelectedExpert] = useState<ExpertProfileData | null>(null);

  const handleOpenProfile = (expert: typeof s.experts[0]) => {
    if (expert.name === raviKumarDetails.name) {
      setSelectedExpert({
        ...expert,
        ...raviKumarDetails,
      });
    } else {
      setSelectedExpert(expert);
    }
  };

  return (
    <Section tone="white" mobile ariaLabel="Expert Cards" className="!pt-4 !pb-12 bg-[#F8FAFD]">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-6"
      >
        {s.experts.map((expert, i) => (
          <motion.div 
            key={expert.name} 
            variants={fadeUp} 
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col relative"
          >
            <HoverGlow accent={ACCENTS[i % ACCENTS.length]} />
            
            {/* Top Area: Profile & Basics */}
            <div className="p-5 flex flex-col relative z-10 border-b border-[#E6EBF3]">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  onClick={() => handleOpenProfile(expert)}
                  className="w-[64px] h-[64px] rounded-full bg-[#F8F9FC] overflow-hidden border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] shrink-0 cursor-pointer active:scale-95 transition-transform"
                >
                  <img src={`https://i.pravatar.cc/150?u=${expert.name.replace(' ', '')}`} alt={expert.name} className="w-full h-full object-cover" />
                </div>
                <div 
                  onClick={() => handleOpenProfile(expert)}
                  className="flex flex-col cursor-pointer"
                >
                  <h3 className="text-[18px] font-black text-[#0B1D3A] tracking-tight leading-none mb-1.5 active:text-[#C99A2E]">{expert.name}</h3>
                  {expert.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full w-fit">
                      <ShieldCheck size={12} />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-bold text-[#0B1D3A] leading-snug">{expert.role}</p>
                <p className="text-[13px] font-medium text-[#7B8DAA]">{expert.experience}</p>
              </div>
            </div>

            {/* Middle Area: Details */}
            <div className="p-5 flex flex-col relative z-10 border-b border-[#E6EBF3]">
              <div className="flex flex-col gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.1em] text-[#475569]">Specialised In</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {expert.specialisedIn.map((spec) => (
                      <span key={spec} className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12px] font-semibold text-[#475569]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.1em] text-[#475569]">Can Practise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {expert.canPractise.map((prac) => (
                      <span key={prac} className={`px-2.5 py-1 rounded-[6px] border text-[12px] font-bold ${prac === 'Price Objection' ? 'bg-[#FFF0F3] border-[#FDA4AF] text-[#BE123C]' : 'bg-white border-[#E6EBF3] text-[#0B1D3A]'}`}>
                        {prac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#475569]">
                  <MessageSquare size={14} className="text-[#C99A2E]" />
                  {expert.languages.join(' · ')}
                </div>
                <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#475569]">
                  <Target size={14} />
                  {expert.sessionsCompleted} Sessions
                </div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="p-5 bg-[#F8FAFD] flex flex-col relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">Session Price</span>
                  <span className="text-[24px] font-black text-[#0B1D3A] leading-none tracking-tight">{expert.price}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">Next Available</span>
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#0B1D3A]">
                    <Calendar size={14} className="text-[#10B981]" />
                    {expert.nextAvailable.split('•')[0]}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <SecondaryButton
                  full
                  mobile
                  onClick={() => handleOpenProfile(expert)}
                  className="!h-11 !py-0 !px-1.5 text-[12px] !rounded-[10px] font-bold bg-white"
                >
                  View Profile
                </SecondaryButton>
                <PrimaryButton
                  full
                  mobile
                  variant="gold"
                  className="!h-11 !py-0 !px-1.5 text-[12px] !rounded-[10px] font-bold"
                >
                  Book Session
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center mt-8"
      >
        <SecondaryButton mobile icon={ChevronDown}>Load More Experts</SecondaryButton>
      </motion.div>

      {/* Profile Dialog */}
      <ExpertProfileDialog
        isOpen={!!selectedExpert}
        onClose={() => setSelectedExpert(null)}
        expert={selectedExpert}
      />
    </Section>
  );
}
