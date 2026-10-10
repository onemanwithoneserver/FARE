import { motion } from "motion/react";
import { ShieldCheck, Calendar, BookOpen } from "lucide-react";
import { data } from "./data";
import { staggerContainer, Section, PrimaryButton, SecondaryButton } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="soft" mobile ariaLabel="Expert Profile Preview">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full bg-white rounded-[20px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden flex flex-col"
      >
        <div className="bg-[#F8F9FC] p-6 flex flex-col items-center text-center border-b border-[#E6EBF3]">
          <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white luxury-shadow-sm mb-4">
            <img src={`https://i.pravatar.cc/150?u=${s.name}`} alt={s.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-[20px] font-black text-[#0B1D3A] mb-1">{s.name}</h2>
          {s.verified && (
            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#10B981] mb-3">
              <ShieldCheck size={14} />
              FARE Verified
            </span>
          )}
          <p className="text-[13px] font-semibold text-[#0B1D3A] mb-1">{s.role}</p>
          <p className="text-[12px] font-medium text-[#475569]">{s.experience}</p>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2">About</h3>
            <p className="text-[14px] font-medium text-[#475569] leading-relaxed">{s.about}</p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {s.expertise.map((exp) => (
                <span key={exp} className="px-2.5 py-1 rounded-[6px] bg-[#F8F9FC] border border-[#E6EBF3] text-[12px] font-medium text-[#0B1D3A]">
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {s.scenarios.map((cat) => (
              <div key={cat.category}>
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-2 flex items-center gap-2">
                  <BookOpen size={14} />
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="px-2 py-1 rounded-[4px] bg-white border border-[#CBD5E1] text-[11px] font-medium text-[#0B1D3A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8EB] p-4 rounded-[10px] border border-[#F5D98B]">
            <h3 className="text-[14px] font-bold text-[#8A5A00] mb-1.5">How I Conduct Mocks</h3>
            <p className="text-[11px] font-bold text-[#8A5A00] mb-2">{s.howICondut.roles}</p>
            <p className="text-[12px] font-medium text-[#8A5A00]/80 leading-relaxed whitespace-pre-line">{s.howICondut.description}</p>
          </div>

          <div className="flex flex-col gap-4 pt-5 border-t border-[#E6EBF3]">
            <div className="flex justify-between">
              {s.sessionOptions.map((opt) => (
                <div key={opt.duration} className="flex flex-col items-center">
                  <span className="text-[11px] font-semibold text-[#475569]">{opt.duration}</span>
                  <span className="text-[14px] font-bold text-[#0B1D3A]">{opt.price}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <PrimaryButton variant="gold" mobile full>Book a Mock Session</PrimaryButton>
              <SecondaryButton mobile full icon={Calendar}>View Available Slots</SecondaryButton>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
