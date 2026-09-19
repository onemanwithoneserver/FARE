import { useState } from 'react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { CheckCircle2, Shield } from 'lucide-react';
import { data } from './data';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
    };

    return (
        <footer
            className="w-full text-white py-12 px-5 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
            <div className="w-full max-w-[460px] mx-auto flex flex-col gap-8 relative z-10 text-left">
                <div className="flex flex-col gap-4">
                    <img src={logo} alt="FARE Logo" className="h-8 w-auto brightness-0 invert opacity-95 mr-auto" />
                    <p className="text-[12px] leading-relaxed font-medium" style={{ color: MUTED_BLUE }}>
                        {data.about}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-2.5 py-1 rounded-[4px] w-max">
                        <Shield size={12} />
                        <span>{data.compliance}</span>
                    </div>
                </div>

                <div className="p-4 rounded-[6px] bg-white/[0.02] border border-white/[0.08] flex flex-col">
                    <span className="text-[10px] font-black tracking-wider uppercase text-[#6B8AFF] mb-1">
                        {data.newsletter.title}
                    </span>
                    <p className="text-[11px] leading-relaxed mb-3 text-white/60">
                        {data.newsletter.desc}
                    </p>

                    {subscribed ? (
                        <div className="p-2.5 rounded-[4px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#10B981] text-[11px] font-bold">
                            <CheckCircle2 size={14} />
                            <span>Subscribed!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className="flex-1 bg-white/[0.04] border border-white/10 rounded-[4px] px-3 py-1.5 text-[11.5px] text-white placeholder-white/30 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-3.5 py-1.5 bg-[#6B8AFF] text-white font-bold text-[11.5px] rounded-[4px]"
                            >
                                Join
                            </button>
                        </form>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black tracking-wider uppercase text-[#D5AA45]">Platform</span>
                        {data.platformLinks.map((link, i) => (
                            <a key={i} href={link.url} className="text-[11.5px] font-medium text-white/60">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black tracking-wider uppercase text-[#D5AA45]">Ecosystem</span>
                        {data.companyLinks.map((link, i) => (
                            <a key={i} href={link.url} className="text-[11.5px] font-medium text-white/60">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08] text-[11px] text-white/40">
                    <div>{data.copyright.replace('{year}', new Date().getFullYear().toString())}</div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                        <span>Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
