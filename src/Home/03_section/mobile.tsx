import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { data } from './data';

const MUTED_SLATE = '#5A6E8C';

export default function Mobile() {
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

                <h2 className="text-[1.85rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-[#0B1D3A] mb-2">
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
                        <div className="p-5 rounded-[4px] bg-white border border-[#0B1D3A]/[0.08] border-l-[4px] border-l-[#C99A2E] shadow-[0_4px_16px_rgba(11,29,58,0.06)]">
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
                                        <div className="w-4 h-4 rounded-[4px] bg-[#EEF4FF] text-[#2563EB] border border-[#2563EB]/20 flex items-center justify-center shrink-0">
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

                        <div className="p-4 rounded-[4px] bg-white border border-[#0B1D3A]/[0.08] shadow-sm">
                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-[#2563EB]" />
                                            <div>
                                                <div className="text-[8.5px] font-black text-[#2563EB] uppercase">{activePersona.metrics.tag}</div>
                                                <div className="text-[13px] font-bold text-[#0B1D3A]">{activePersona.metrics.title}</div>
                                            </div>
                                        </div>
                                        <span className="text-[9.5px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-[4px]">{activePersona.metrics.trend}</span>
                                    </div>

                                    <div className="flex flex-col gap-3 bg-[#F8FAFD] p-3 rounded-[4px] border border-[#0B1D3A]/[0.06] mb-3">
                                        {activePersona.metrics?.teams?.map((team, idx) => (
                                            <div key={idx} className="w-full">
                                                <div className="flex justify-between items-center text-[11px] mb-1">
                                                    <span className="font-bold text-[#0B1D3A]">{team.name}</span>
                                                    <span className="font-black text-[#2563EB]">{team.score}%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-[#EEF2F6] rounded-full overflow-hidden relative">
                                                    <div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${team.score}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#0B1D3A]/[0.06] text-center">
                                        {activePersona.metrics.stats.map((st, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-[12px] font-black text-[#0B1D3A]">{st.val}</span>
                                                <span className="text-[8.5px] text-[#5A6E8C] leading-tight font-medium">{st.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col gap-2.5">
                                    <div className="text-[9px] font-black text-[#059669] uppercase mb-1">Active Coach Courses</div>
                                    {activePersona.courses.map((course, idx) => (
                                        <div key={idx} className="bg-[#F8FAFD] p-2.5 rounded-[4px] border border-[#0B1D3A]/[0.06] flex items-center justify-between text-[11px]">
                                            <div className="font-bold text-[#0B1D3A] leading-tight pr-2">
                                                {course.title}
                                            </div>
                                            <div className="flex items-center gap-1 text-[10px] font-bold text-[#B45309] shrink-0">
                                                <Star size={10} fill="#B45309" />
                                                <span>{course.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {activePersona.metrics?.stats && (
                                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#0B1D3A]/[0.06] text-center mt-1">
                                            {activePersona.metrics.stats.map((st, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-[12px] font-black text-[#0B1D3A]">{st.val}</span>
                                                    <span className="text-[8.5px] text-[#5A6E8C] leading-tight font-medium">{st.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-[9px] font-black text-[#B45309] uppercase mb-1">Skill Roadmap</div>
                                    {activePersona.milestones.map((m, idx) => (
                                        <div key={idx} className="bg-[#F8FAFD] p-2.5 rounded-[4px] border border-[#0B1D3A]/[0.06] flex items-center justify-between text-[11px]">
                                            <span className="font-bold text-[#0B1D3A]">{m.level}</span>
                                            <span className="text-[9px] font-bold text-[#B45309]">{m.status}</span>
                                        </div>
                                    ))}
                                    {activePersona.metrics?.stats && (
                                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#0B1D3A]/[0.06] text-center mt-1">
                                            {activePersona.metrics.stats.map((st, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-[12px] font-black text-[#0B1D3A]">{st.val}</span>
                                                    <span className="text-[8.5px] text-[#5A6E8C] leading-tight font-medium">{st.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
