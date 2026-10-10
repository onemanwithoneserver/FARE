import { ShieldCheck, Calendar, BookOpen, MessageSquare, Video } from "lucide-react";
import { data } from "./data";
import { Section, PrimaryButton, SecondaryButton } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="soft" ariaLabel="Expert Profile Preview">
      <div className="max-w-[1000px] mx-auto w-full bg-white rounded-[24px] border border-[#E6EBF3] luxury-shadow overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Photo & Quick Info */}
        <div className="w-[320px] bg-[#F8F9FC] p-8 flex flex-col items-center text-center border-r border-[#E6EBF3] shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white luxury-shadow-sm mb-5">
            <img src={`https://i.pravatar.cc/150?u=${s.name.replace(' ', '')}`} alt={s.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-[24px] font-black text-[#0B1D3A] mb-1">{s.name}</h2>
          {s.verified && (
            <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#10B981] mb-4">
              <ShieldCheck size={16} />
              FARE Verified
            </span>
          )}
          <p className="text-[14px] font-semibold text-[#0B1D3A] mb-1">{s.role}</p>
          <p className="text-[13px] font-medium text-[#475569] mb-6">{s.experience}</p>
          
          <div className="w-full h-px bg-[#E6EBF3] mb-6" />
          
          <div className="w-full flex flex-col gap-4 text-left">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-1 block">Languages</span>
              <p className="text-[14px] font-semibold text-[#0B1D3A] flex items-center gap-2">
                <MessageSquare size={16} className="text-[#C99A2E]" />
                {s.languages.join(' · ')}
              </p>
            </div>
            <div>
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-1 block">Session Format</span>
              <p className="text-[14px] font-semibold text-[#0B1D3A] flex items-center gap-2">
                <Video size={16} className="text-[#C99A2E]" />
                Online (Google Meet)
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex-1 p-8 flex flex-col gap-8">
          <div>
            <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">About</h3>
            <p className="text-[15px] font-medium text-[#475569] leading-relaxed">{s.about}</p>
          </div>

          <div>
            <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">Real Estate Experience</h3>
            <p className="text-[15px] font-medium text-[#0B1D3A] px-4 py-2 bg-[#F8F9FC] rounded-[8px] inline-block border border-[#E6EBF3]">
              {s.reExperience}
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {s.expertise.map((exp) => (
                <span key={exp} className="px-3 py-1.5 rounded-[8px] bg-white border border-[#CBD5E1] text-[14px] font-medium text-[#0B1D3A]">
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {s.scenarios.map((cat) => (
              <div key={cat.category}>
                <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#475569] mb-3 flex items-center gap-2">
                  <BookOpen size={16} />
                  {cat.category} Scenarios
                </h4>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-[14px] font-medium text-[#0B1D3A] flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-[#C99A2E] before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8EB] p-5 rounded-[12px] border border-[#F5D98B]">
            <h3 className="text-[16px] font-bold text-[#8A5A00] mb-2">How I Conduct Mocks</h3>
            <p className="text-[13px] font-bold text-[#8A5A00] mb-3 tracking-wide">{s.howICondut.roles}</p>
            <p className="text-[14px] font-medium text-[#8A5A00]/80 leading-relaxed whitespace-pre-line">{s.howICondut.description}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[#E6EBF3]">
            <div className="flex gap-4">
              {s.sessionOptions.map((opt) => (
                <div key={opt.duration} className="flex flex-col">
                  <span className="text-[12px] font-semibold text-[#475569]">{opt.duration}</span>
                  <span className="text-[16px] font-bold text-[#0B1D3A]">{opt.price}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <SecondaryButton icon={Calendar}>View Available Slots</SecondaryButton>
              <PrimaryButton variant="gold">Book a Mock Session</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
