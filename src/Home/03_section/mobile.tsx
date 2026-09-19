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

    const getIcon = (id: string) => {
        if (id === 'companies') return <Building2 size={16} />;
        if (id === 'trainers') return <GraduationCap size={16} />;
        return <UserCheck size={16} />;
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    return (
        <section
            className="w-full py-16 px-4 flex flex-col items-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FB 100%)' }}
        >
            <div className="w-full max-w-[460px] flex flex-col items-center text-center relative z-10">
                <h2 className="text-[2rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-[#0B1D3A] mb-2.5">
                    {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                </h2>
                <p className="text-[12.5px] font-medium leading-relaxed mb-6" style={{ color: MUTED_SLATE }}>
                    {data.headline.subtitle}
                </p>

                <div className="flex gap-1.5 w-full mb-6 p-1 rounded-[8px] bg-[#EEF2F6] border border-[#0B1D3A]/[0.06]">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-2 px-2 rounded-[6px] flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
                                    isActive
                                    ? 'bg-white text-[#0B1D3A] border border-[#0B1D3A]/[0.1] shadow-sm'
                                    : 'text-[#5A6E8C]'
                                }`}
                            >
                                <span style={{ color: isActive ? persona.color : 'inherit' }}>
                                    {getIcon(persona.id)}
                                </span>
                                <span className="truncate">{persona.id === 'companies' ? 'Companies' : persona.id === 'trainers' ? 'Trainers' : 'Advisors'}</span>
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
                        <div className="p-5 rounded-[8px] bg-white border border-[#0B1D3A]/[0.08] shadow-[0_4px_16px_rgba(11,29,58,0.06)]">
                            <div className="inline-flex items-center text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-[3px] mb-3 border"
                                 style={{ color: activePersona.color, borderColor: `${activePersona.color}35`, background: `${activePersona.color}10` }}>
                                {activePersona.badge}
                            </div>

                            <h3 className="text-[18px] font-black text-[#0B1D3A] leading-tight mb-2">
                                {activePersona.title}
                            </h3>

                            <p className="text-[12px] font-medium leading-relaxed mb-4" style={{ color: MUTED_SLATE }}>
                                {activePersona.desc}
                            </p>

                            <div className="flex flex-col gap-2 mb-6">
                                {activePersona.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[11.5px] text-[#2C3E55]">
                                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 border"
                                             style={{ borderColor: `${activePersona.color}40`, background: `${activePersona.color}15`, color: activePersona.color }}>
                                            <CheckCircle size={10} strokeWidth={2.5} />
                                        </div>
                                        <span className="leading-snug">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {activePersona.id === 'professionals' ? (
                                waitlistJoined ? (
                                    <div className="p-3 rounded-[5px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#059669] text-[11px] font-bold">
                                        <ShieldCheck size={16} />
                                        <span>You are registered for VIP Early Access!</span>
                                    </div>
                                ) : (
                                    <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-2">
                                        <input
                                            type="email"
                                            required
                                            value={waitlistEmail}
                                            onChange={(e) => setWaitlistEmail(e.target.value)}
                                            placeholder="Enter your work email"
                                            className="bg-[#F8FAFC] border border-[#0B1D3A]/[0.12] rounded-[5px] px-3 py-2 text-[11.5px] text-[#0B1D3A] placeholder-[#5A6E8C]/60 focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full py-2.5 rounded-[5px] font-black text-[11.5px] text-[#071A49]"
                                            style={{ background: 'linear-gradient(90deg, #C99A2E, #E2C068)' }}
                                        >
                                            Join Exclusive Access
                                        </button>
                                    </form>
                                )
                            ) : (
                                <button
                                    className="w-fit py-3 px-6 rounded-[5px] font-black text-[12px] text-white flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform"
                                    style={{ background: `linear-gradient(90deg, ${activePersona.color}, ${activePersona.color}dd)` }}
                                >
                                    <span>{activePersona.cta}</span>
                                    <ArrowRight size={13} />
                                </button>
                            )}
                        </div>

                        <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.08]">
                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-[#2563EB]" />
                                            <span className="text-[10px] font-black text-[#2563EB] uppercase">Team Uplift Metric</span>
                                        </div>
                                        <span className="text-[9.5px] font-bold text-[#059669]">{activePersona.metrics.trend}</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {activePersona.metrics.teams.map((team, idx) => (
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
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col gap-2.5">
                                    <div className="text-[10px] font-black text-[#059669] uppercase mb-1">Active Coach Courses</div>
                                    {activePersona.courses.map((course, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-[5px] border border-[#0B1D3A]/[0.06] flex items-center justify-between shadow-sm">
                                            <div className="text-[11.5px] font-bold text-[#0B1D3A] leading-tight pr-2">
                                                {course.title}
                                            </div>
                                            <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#B45309] shrink-0">
                                                <Star size={11} fill="#B45309" />
                                                <span>{course.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-[10px] font-black text-[#C99A2E] uppercase mb-1">Skill Roadmap</div>
                                    {activePersona.milestones.map((m, idx) => (
                                        <div key={idx} className="bg-white p-2.5 rounded-[5px] border border-[#0B1D3A]/[0.06] flex items-center justify-between text-[11px] shadow-sm">
                                            <span className="font-bold text-[#0B1D3A]">{m.level}</span>
                                            <span className="text-[9.5px] font-bold text-[#C99A2E]">{m.status}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
