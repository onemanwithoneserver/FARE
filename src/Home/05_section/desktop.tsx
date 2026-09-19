import { useState } from 'react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { data } from './data';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
    };

    return (
        <footer
            className="w-full text-white py-16 px-12 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1300px] w-full mx-auto flex flex-col gap-12 relative z-10">
                <div className="grid grid-cols-12 gap-12 pb-12 border-b border-white/[0.08] items-start">
                    <div className="col-span-5 flex flex-col gap-5">
                        <div className="flex items-center">
                            <img src={logo} alt="FARE Logo" className="h-10 w-auto brightness-0 invert opacity-95" />
                        </div>
                        <p className="text-[13.5px] leading-relaxed font-medium max-w-[380px]" style={{ color: MUTED_BLUE }}>
                            {data.about}
                        </p>
                        <div className="flex items-center gap-2 text-[11.5px] font-semibold text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-3 py-1.5 rounded-[4px] w-max">
                            <Shield size={14} />
                            <span>{data.compliance}</span>
                        </div>
                    </div>

                    <div className="col-span-3 flex gap-12">
                        <div className="flex flex-col gap-3.5">
                            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#D5AA45]">Platform</span>
                            {data.platformLinks.map((link, i) => (
                                <a key={i} href={link.url} className="text-[13px] font-medium transition-colors duration-200 hover:text-white" style={{ color: MUTED_BLUE }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#D5AA45]">Ecosystem</span>
                            {data.companyLinks.map((link, i) => (
                                <a key={i} href={link.url} className="text-[13px] font-medium transition-colors duration-200 hover:text-white" style={{ color: MUTED_BLUE }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-4 p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] flex flex-col">
                        <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#6B8AFF] mb-1">
                            {data.newsletter.title}
                        </span>
                        <p className="text-[12px] leading-relaxed mb-4 text-white/60">
                            {data.newsletter.desc}
                        </p>

                        {subscribed ? (
                            <div className="p-3 rounded-[4px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#10B981] text-[12px] font-bold">
                                <CheckCircle2 size={16} />
                                <span>Subscribed to Executive Intelligence!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your work email"
                                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-[4px] px-3.5 py-2 text-[12.5px] text-white placeholder-white/30 focus:outline-none focus:border-[#6B8AFF]"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#6B8AFF] hover:bg-[#5879f5] text-white font-bold text-[12.5px] rounded-[4px] transition-all cursor-pointer flex items-center gap-1"
                                >
                                    <span>Join</span>
                                    <ArrowRight size={13} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="flex justify-between items-center text-[12px] font-medium text-white/40">
                    <div>
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                            <span>All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
