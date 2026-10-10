import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Target, Calendar } from "lucide-react";
import { data } from "./data";
import { data as expert07Data } from "../section07/data";
import { ACCENTS, fadeUp, staggerContainer, PrimaryButton, SecondaryButton, HoverGlow } from "../../ui";
import ExpertProfileDialog, { type ExpertProfileData } from "../ExpertProfileDialog";

export default function Desktop() {
  const s = data;
  const [selectedExpert, setSelectedExpert] = useState<ExpertProfileData | null>(null);

  const handleOpenProfile = (expert: typeof s.experts[0]) => {
    if (expert.name === expert07Data.name) {
      setSelectedExpert({
        ...expert,
        ...expert07Data,
      });
    } else {
      setSelectedExpert(expert);
    }
  };

  return (
    <>
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {s.experts.map((expert, i) => (
          <motion.div 
            key={expert.name} 
            variants={fadeUp} 
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-[#C99A2E]/30 transition-all duration-300 overflow-hidden flex flex-col relative group"
          >
            <HoverGlow accent={ACCENTS[i % ACCENTS.length]} />
            
            {/* Header / Profile Clickable */}
            <div className="p-6 border-b border-[#E6EBF3] relative z-10 flex flex-col items-center text-center">
              <div 
                onClick={() => handleOpenProfile(expert)}
                className="w-[84px] h-[84px] rounded-full bg-[#F8F9FC] overflow-hidden border-2 border-white shadow-sm mb-4 cursor-pointer hover:scale-105 hover:ring-4 hover:ring-[#C99A2E]/25 transition-all"
                title="View full profile dialog"
              >
                <img src={`https://i.pravatar.cc/150?u=${expert.name.replace(' ', '')}`} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              
              <div 
                onClick={() => handleOpenProfile(expert)}
                className="flex items-center gap-1.5 justify-center mb-1 cursor-pointer group/name"
              >
                <h3 className="text-[20px] font-black text-[#0B1D3A] group-hover/name:text-[#C99A2E] tracking-tight leading-none transition-colors">
                  {expert.name}
                </h3>
                {expert.verified && (
                  <ShieldCheck size={16} className="text-[#10B981]" />
                )}
              </div>
              
              <p className="text-[14px] font-bold text-[#0B1D3A] leading-snug">{expert.role}</p>
              <p className="text-[13px] font-medium text-[#7B8DAA] mt-1">{expert.experience}</p>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-5 flex-1 relative z-10">
              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA]">Specialised In</h4>
                <div className="flex flex-wrap gap-1.5">
                  {expert.specialisedIn.map((spec) => (
                    <span key={spec} className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12px] font-semibold text-[#475569]">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA]">Can Practise</h4>
                <div className="flex flex-wrap gap-1.5">
                  {expert.canPractise.map((prac) => (
                    <span key={prac} className={`px-2.5 py-1 rounded-[6px] border text-[12px] font-bold ${prac === 'Price Objection' ? 'bg-[#FFF0F3] border-[#FDA4AF] text-[#BE123C]' : 'bg-[#F8F9FC] border-[#E6EBF3] text-[#0B1D3A]'}`}>
                      {prac}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[13px] font-bold text-[#475569] pt-4 border-t border-[#E6EBF3] mt-auto">
                <span>{expert.languages.join(' · ')}</span>
                <div className="flex items-center gap-1.5 text-[#06B6D4]">
                  <Target size={14} />
                  <span>{expert.sessionsCompleted} Sessions</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#F8FAFD] border-t border-[#E6EBF3] relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">Session Price</span>
                  <span className="text-[20px] font-black text-[#0B1D3A] leading-none tracking-tight">{expert.price}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider mb-0.5">Next Available</span>
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#0B1D3A]">
                    <Calendar size={14} className="text-[#10B981]" />
                    {expert.nextAvailable.split('·')[0]}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <SecondaryButton
                  full
                  onClick={() => handleOpenProfile(expert)}
                  className="!h-11 !py-0 !px-2 text-[13px] !rounded-[10px] font-bold bg-white"
                >
                  View Profile
                </SecondaryButton>
                <PrimaryButton
                  full
                  variant="gold"
                  className="!h-11 !py-0 !px-2 text-[13px] !rounded-[10px] font-bold"
                >
                  Book Session
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expert Profile Dialog Modal */}
      <ExpertProfileDialog
        isOpen={!!selectedExpert}
        onClose={() => setSelectedExpert(null)}
        expert={selectedExpert}
      />
    </>
  );
}
