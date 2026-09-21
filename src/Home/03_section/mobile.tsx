import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle, ShieldCheck } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const MUTED_SLATE = '#5A6E8C';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, isActive: boolean) => {
        const color = isActive ? '#FFFFFF' : '#0B1D3A';
        if (id === 'companies') return <Building2 size={16} stroke={color} />;
        if (id === 'trainers') return <GraduationCap size={16} stroke={color} />;
        return <UserCheck size={16} stroke={color} />;
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    return (
        <section
            className="w-full py-14 px-4 flex flex-col items-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 100%)' }}
        >
            <div className="w-full max-w-[460px] flex flex-col items-center text-center relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-[1px] bg-[#C99A2E]"></div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#C99A2E] uppercase">
                        {data.eyebrow}
                    </span>
                    <div className="w-8 h-[1px] bg-[#C99A2E]"></div>
                </div>

                <h2 className={`font-black mb-2 text-[#0B1D3A] ${
                    language === 'te'
                        ? 'text-[1.45rem] leading-[1.25] tracking-wider py-0.5'
                        : 'text-[1.85rem] leading-[1.05] tracking-[-0.02em] uppercase'
                }`}>
                    {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                </h2>
                <p className="text-[12px] font-medium leading-relaxed mb-6" style={{ color: MUTED_SLATE }}>
                    {data.headline.subtitle}
                </p>

                <div className="flex gap-1.5 w-full mb-6 p-1 rounded-[4px] bg-white border border-[#0B1D3A]/[0.08] shadow-sm">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-2 px-1.5 rounded-[4px] flex flex-col items-center gap-1 text-[9.5px] font-bold transition-all relative overflow-hidden ${
                                    isActive
                                    ? 'bg-[#071A49] text-white shadow-sm'
                                    : 'text-[#0B1D3A] hover:bg-[#F8FAFD]'
                                }`}
                            >
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C99A2E] to-[#E2C068]" />
                                )}
                                <span>{getIcon(persona.id, isActive)}</span>
                                <span className="truncate w-full text-center leading-tight">
                                    {persona.id === 'companies' ? 'Enterprise' : persona.id === 'trainers' ? 'Trainers' : 'Advisors'}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex flex-col gap-4 text-left"
                    >
                        <div className="p-5 rounded-[6px] bg-white border border-[#0B1D3A]/[0.08] border-l-[4px] border-l-[#C99A2E] shadow-[0_10px_30px_-5px_rgba(11,29,58,0.1)]">
                            <div className="inline-flex items-center text-[8.5px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-[4px] mb-3 bg-[#EEF4FF] text-[#2563EB] border border-[#2563EB]/20">
                                {activePersona.badge}
                            </div>

                            <h3 className="text-[19px] font-black text-[#0B1D3A] leading-tight mb-2">
                                {activePersona.titleLine1}<br />
                                <span className="gold-gradient-text">{activePersona.titleLine2}</span>
                            </h3>

                            <p className="text-[12px] font-medium leading-relaxed mb-4" style={{ color: MUTED_SLATE }}>
                                {activePersona.desc}
                            </p>

                            <div className="flex flex-col gap-2 mb-5">
                                {activePersona.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#2C3E55] font-medium">
                                        <div className="w-4 h-4 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] text-white shadow-sm flex items-center justify-center shrink-0">
                                            <CheckCircle size={10} strokeWidth={2.5} />
                                        </div>
                                        <span className="leading-snug">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {activePersona.id === 'professionals' ? (
                                waitlistJoined ? (
                                    <div className="p-3 rounded-[4px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#059669] text-[11px] font-bold">
                                        <ShieldCheck size={16} />
                                        <span>Registered for Priority Access!</span>
                                    </div>
                                ) : (
                                    <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-2">
                                        <input
                                            type="email"
                                            required
                                            value={waitlistEmail}
                                            onChange={(e) => setWaitlistEmail(e.target.value)}
                                            placeholder="Enter work email"
                                            className="bg-[#F8FAFC] border border-[#0B1D3A]/[0.12] rounded-[4px] px-3 py-2 text-[11.5px] text-[#0B1D3A] outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full py-2.5 rounded-[4px] font-black text-[11.5px] text-white bg-[#071A49]"
                                        >
                                            Join Access
                                        </button>
                                    </form>
                                )
                            ) : (
                                <button
                                    className="py-2.5 px-5 rounded-[4px] font-bold text-[12px] text-white bg-[#071A49] flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
                                >
                                    <span>{activePersona.cta}</span>
                                    <ArrowRight size={13} />
                                </button>
                            )}
                        </div>


                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
