import { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Building2, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  Megaphone, 
  Briefcase, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

type Reason = 'platform' | 'growth' | 'business' | 'careers';

export default function ContactForm({ isMobile }: { isMobile: boolean }) {
  const [selectedReason, setSelectedReason] = useState<Reason>('careers');

  const reasons = [
    {
      id: 'platform',
      title: 'Using a platform',
      desc: 'Access, pricing, LMS integration, or support for live FARE learning platforms.',
      icon: GraduationCap,
      color: '#3B82F6'
    },
    {
      id: 'growth',
      title: 'Growth Partner',
      desc: 'Introducing FARE diagnostic labs to developers and firms you already serve.',
      icon: TrendingUp,
      color: '#10B981'
    },
    {
      id: 'business',
      title: 'Business & press',
      desc: 'Institutional partnerships, media inquiries, or custom commercial engagements.',
      icon: Megaphone,
      color: '#8B5CF6'
    },
    {
      id: 'careers',
      title: 'Careers & Faculty',
      desc: 'Join FARE as an accredited Master Trainer, Industry Coach, or core team member.',
      icon: Briefcase,
      color: '#F59E0B'
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 relative font-['Outfit'] overflow-hidden bg-[#F8FAFD]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className={`mx-auto max-w-[1320px] w-full relative z-10 ${isMobile ? 'px-6' : 'px-8 lg:px-12'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-12' : 'flex-col lg:flex-row gap-12 lg:gap-16'}`}>
          
          <div className="flex-1">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">01 /</span>
                <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                  WHAT'S THIS ABOUT
                </h2>
              </div>
              
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {reasons.map((reason) => {
                  const isSelected = selectedReason === reason.id;
                  const Icon = reason.icon;
                  return (
                    <button
                      key={reason.id}
                      type="button"
                      onClick={() => setSelectedReason(reason.id as Reason)}
                      className={`text-left p-6 rounded-xl transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#0B1D3A] to-[#132D5F] text-white border-2 border-[#C99A2E] shadow-[0_12px_32px_-8px_rgba(11,29,58,0.35)] -translate-y-1' 
                          : 'bg-white/90 backdrop-blur-md border border-[#0B1D3A]/[0.08] text-[#0B1D3A] hover:border-[#C99A2E]/40 hover:bg-white hover:shadow-[0_8px_20px_-6px_rgba(11,29,58,0.1)] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm relative overflow-hidden transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: reason.color }}
                        >
                          <Icon size={22} className="text-white relative z-10" />
                        </div>
                        {isSelected && (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C99A2E] text-white text-[11px] font-bold shadow-xs">
                            <CheckCircle2 size={13} className="text-white" />
                            Selected
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className={`font-bold text-[16px] mb-2 transition-colors ${
                          isSelected ? 'text-[#E2C068]' : 'text-[#0B1D3A]'
                        }`}>
                          {reason.title}
                        </h3>
                        <p className={`text-[13px] leading-relaxed transition-colors ${
                          isSelected ? 'text-white/80 font-normal' : 'text-[#64748B]'
                        }`}>
                          {reason.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">02 /</span>
                <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                  YOUR DETAILS
                </h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-5' : 'grid-cols-2 gap-6'}`}>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/75 uppercase flex items-center gap-1">
                      Name <span className="text-[#C99A2E] font-bold">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Varma"
                      className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-lg px-4 py-3.5 text-sm text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-sm transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/75 uppercase flex items-center gap-1">
                      Email <span className="text-[#C99A2E] font-bold">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. rahul@company.com"
                      className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-lg px-4 py-3.5 text-sm text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-sm transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/75 uppercase flex items-center gap-1">
                    Company / Organization <span className="text-[#94A3B8] lowercase normal-case font-medium">(optional)</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Brigade Group, Prestige Estates, or Independent Practice"
                    className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-lg px-4 py-3.5 text-sm text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-sm transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/75 uppercase flex items-center gap-1">
                    Message <span className="text-[#C99A2E] font-bold">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us what you are building, your team size, or which training category interests you most..."
                    className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-lg p-4 text-sm text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-sm transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-2.5 pt-1 text-[12.5px] text-[#64748B]">
                  <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldAlert size={12} className="text-white" />
                  </div>
                  <span>We use what you send here only to respond to your briefing. Zero spam policy.</span>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="group relative overflow-hidden text-white text-[15px] font-bold px-8 py-4 rounded-lg shadow-[0_8px_24px_rgba(11,29,58,0.25)] hover:shadow-[0_12px_30px_rgba(201,154,46,0.3)] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #132D5F 100%)' }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="relative z-10 w-7 h-7 rounded-full bg-[#C99A2E] flex items-center justify-center text-white shadow-xs group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={`${isMobile ? 'w-full' : 'w-[360px] lg:w-[400px] shrink-0'}`}>
            <div className="bg-[#0B1D3A] text-white border border-white/10 rounded-2xl p-7 lg:p-8 shadow-[0_25px_60px_-15px_rgba(11,29,58,0.4)] sticky top-24 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/15 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3B82F6]/15 rounded-full blur-[50px] pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 border border-[#C99A2E]/30 bg-[#C99A2E]/10 px-3.5 py-1.5 rounded-full mb-8 backdrop-blur-md relative z-10">
                <span className="w-2 h-2 rounded-full bg-[#34D399] relative flex items-center justify-center">
                  <span className="absolute w-3.5 h-3.5 rounded-full bg-[#34D399]/40 animate-ping"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#E2C068] uppercase">
                  Open for Meaningful Conversations
                </span>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#C99A2E] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={19} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">Direct Inquiries</h4>
                    <p className="text-[14px] text-white/90">
                      Prefer email? Write to{' '}
                      <a href="mailto:hello@yardstack.com" className="text-[#E2C068] font-bold hover:underline">
                        hello@yardstack.com
                      </a>{' '}
                      directly.
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock size={19} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">Response Time</h4>
                    <p className="text-[14px] font-semibold text-white">Within two working days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={19} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">Based In</h4>
                    <p className="text-[14px] font-semibold text-white">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6] flex items-center justify-center shrink-0 shadow-sm">
                    <Building2 size={19} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">Registered Office</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Block No 2, Mercari Building, Kompally, Telangana - Hyderabad
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <p className="text-[12px] text-white/75 leading-relaxed">
                    Growth Partner & Corporate Trainer inquiries are routed directly to executive partnerships.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
