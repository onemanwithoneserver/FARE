import { ShieldCheck, Info } from "lucide-react";
import { data } from "./data";
import { ACCENTS, Section, Reveal, IconBadge } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="soft" ariaLabel="Trust and Verification" className="!py-16">
      <div className="max-w-[740px] mx-auto w-full">
        <Reveal>
          <div className="flex items-start gap-6 bg-white rounded-[20px] border border-[#E6EBF3] luxury-shadow-sm p-8">
            <IconBadge icon={ShieldCheck} accent={ACCENTS[5]} size="lg" interactive={false} className="shrink-0" />
            <div className="flex flex-col">
              <h3 className="text-[20px] font-bold text-[#0B1D3A] mb-3">{s.title}</h3>
              <p className="text-[15px] font-medium text-[#475569] leading-relaxed mb-4">{s.description}</p>
              <div className="flex items-start gap-2.5 bg-[#FFF8EB] rounded-[8px] p-3.5 border border-[#F5D98B]/40">
                <Info size={16} className="text-[#C99A2E] shrink-0 mt-0.5" />
                <p className="text-[14px] font-medium text-[#8A5A00] leading-snug italic">{s.disclaimer}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
