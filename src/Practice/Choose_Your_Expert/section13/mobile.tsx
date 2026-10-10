import { ShieldCheck, Info } from "lucide-react";
import { data } from "./data";
import { ACCENTS, Section, Reveal, IconBadge } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="soft" mobile ariaLabel="Trust and Verification" className="!py-10">
      <Reveal>
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-5">
          <div className="flex items-center gap-3 mb-4">
            <IconBadge icon={ShieldCheck} accent={ACCENTS[5]} size="sm" interactive={false} />
            <h3 className="text-[16px] font-bold text-[#0B1D3A]">{s.title}</h3>
          </div>
          <p className="text-[13px] font-medium text-[#475569] leading-relaxed mb-4">{s.description}</p>
          <div className="flex items-start gap-2 bg-[#FFF8EB] rounded-[8px] p-3 border border-[#F5D98B]/40">
            <Info size={14} className="text-[#C99A2E] shrink-0 mt-0.5" />
            <p className="text-[12px] font-medium text-[#8A5A00] leading-snug italic">{s.disclaimer}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
