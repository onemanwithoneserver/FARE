import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Target, Sparkles, MessageSquare, Calendar } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, PrimaryButton, SecondaryButton, CARD_BASE, CARD_HOVER, HoverGlow, AccentHairline } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Expert Cards" className="!pt-6 !pb-20">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8"
        >
          {s.experts.map((expert, i) => (
            <motion.div key={expert.name} variants={fadeUp} className={`${CARD_BASE} ${CARD_HOVER} p-8 overflow-hidden flex flex-col lg:flex-row gap-8`}>
              <AccentHairline accent={ACCENTS[i % ACCENTS.length]} />
              <HoverGlow accent={ACCENTS[i % ACCENTS.length]} />
              
              {/* Left Column: Profile & Basics */}
              <div className="w-full lg:w-[280px] shrink-0 flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden border border-[#E6EBF3] shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${expert.name}`} alt={expert.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[20px] font-bold text-[#0B1D3A]">{expert.name}</h3>
                    {expert.verified && (
                      <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#10B981]">
                        <ShieldCheck size={14} />
                        FARE Verified
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mb-6">
                  <p className="text-[14px] font-semibold text-[#0B1D3A] leading-snug">{expert.role}</p>
                  <p className="text-[13px] font-medium text-[#475569]">{expert.experience}</p>
                </div>

                {expert.relevance && expert.relevance.length > 0 && (
                  <div className="bg-[#F8F9FC] rounded-[10px] p-4 border border-[#E6EBF3] mb-6">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#0B1D3A] mb-3 flex items-center gap-2">
                      <Sparkles size={14} className="text-[#C99A2E]" />
                      Why this expert?
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {expert.relevance.map((rel) => (
                        <li key={rel} className="flex items-start gap-2 text-[13px] font-medium text-[#475569] leading-tight">
                          <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                          {rel}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Middle Column: Details */}
              <div className="flex-1 flex flex-col relative z-10 lg:border-l border-[#E6EBF3] lg:pl-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-3 flex items-center gap-2">
                      <Target size={14} />
                      Specialised In
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.specialisedIn.map((spec) => (
                        <span key={spec} className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[13px] font-medium text-[#0B1D3A]">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-3 flex items-center gap-2">
                      <Target size={14} className="text-[#E11D48]" />
                      Can Practise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.canPractise.map((prac) => (
                        <span key={prac} className={`px-2.5 py-1 rounded-[6px] border text-[13px] font-medium ${prac === 'Price Objection' ? 'bg-[#FFF0F3] border-[#FDA4AF] text-[#BE123C] font-semibold' : 'bg-white border-[#E6EBF3] text-[#475569]'}`}>
                          {prac}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-auto pb-4 border-b border-[#E6EBF3]">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#475569]">
                    <MessageSquare size={16} />
                    {expert.languages.join(' · ')}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#475569]">
                    <Target size={16} />
                    {expert.sessionsCompleted} sessions completed
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#475569] uppercase tracking-wider mb-1">Session Price</span>
                    <span className="text-[20px] font-black text-[#0B1D3A]">{expert.price}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#475569] uppercase tracking-wider mb-1">Next Available</span>
                    <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#0B1D3A]">
                      <Calendar size={14} className="text-[#C99A2E]" />
                      {expert.nextAvailable}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SecondaryButton>View Profile</SecondaryButton>
                    <PrimaryButton variant="gold">Book Session</PrimaryButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
