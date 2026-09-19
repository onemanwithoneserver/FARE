import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, Sparkles, CheckCircle, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

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
            style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
        >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#6B8AFF]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-full max-w-[460px] flex flex-col items-center text-center relative z-10">
                <div className="flex items-center gap-2 mb-2 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <Sparkles size={11} className="text-[#D5AA45]" />
                    <span className="font-bold text-[9.5px] tracking-[0.18em] uppercase text-[#F3D887]">
                        {data.headline.eyebrow}
                    </span>
                </div>
                <h2 className="text-[2rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-white mb-2.5">
                    {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                </h2>
                <p className="text-[12px] font-medium leading-relaxed mb-6" style={{ color: MUTED_BLUE }}>
                    {data.headline.subtitle}
                </p>

                <div className="flex gap-1.5 w-full mb-6 p-1 rounded-[8px] bg-white/[0.03] border border-white/[0.08]">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-2 px-2 rounded-[6px] flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
                                    isActive
                                    ? 'bg-white/[0.08] text-white border border-white/[0.15]'
                                    : 'text-white/40'
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
                        <div className="p-5 rounded-[8px] bg-[#0D2654] border border-white/[0.1] luxury-shadow-dark">
                            <div className="inline-flex items-center text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-[3px] mb-3 border"
                                 style={{ color: activePersona.color, borderColor: `${activePersona.color}40`, background: `${activePersona.color}15` }}>
                                {activePersona.badge}
                            </div>

                            <h3 className="text-[18px] font-black text-white leading-tight mb-2">
                                {activePersona.title}
                            </h3>

                            <p className="text-[12px] font-medium leading-relaxed mb-4" style={{ color: MUTED_BLUE }}>
                                {activePersona.desc}
                            </p>

                            <div className="flex flex-col gap-2 mb-5">
                                {activePersona.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[11.5px] text-white/90">
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
                                    <div className="p-3 rounded-[5px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#10B981] text-[11px] font-bold">
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
                                            placeholder="Enter your email"
                                            className="bg-white/[0.05] border border-white/10 rounded-[5px] px-3 py-2 text-[11.5px] text-white placeholder-white/30 focus:outline-none"
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
                                    className="w-full py-3 px-4 rounded-[5px] font-black text-[12px] text-white flex items-center justify-center gap-1.5"
                                    style={{ background: `linear-gradient(90deg, ${activePersona.color}, ${activePersona.color}cc)` }}
                                >
                                    <span>{activePersona.cta}</span>
                                    <ArrowRight size={13} />
                                </button>
                            )}
                        </div>

                        <div className="p-4 rounded-[8px] bg-[#071A49]/90 border border-white/[0.08]">
                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-[#6B8AFF]" />
                                            <span className="text-[10px] font-black text-[#6B8AFF] uppercase">Team Uplift Metric</span>
                                        </div>
                                        <span className="text-[9.5px] font-bold text-[#10B981]">{activePersona.metrics.trend}</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {activePersona.metrics.teams.map((team, idx) => (
                                            <div key={idx} className="w-full">
                                                <div className="flex justify-between items-center text-[11px] mb-1">
                                                    <span className="font-bold text-white/90">{team.name}</span>
                                                    <span className="font-black text-[#6B8AFF]">{team.score}%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-[#0A1630] rounded-full overflow-hidden relative">
                                                    <div className="h-full bg-[#6B8AFF] rounded-full" style={{ width: `${team.score}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col gap-2.5">
                                    <div className="text-[10px] font-black text-[#34D399] uppercase mb-1">Active Coach Courses</div>
                                    {activePersona.courses.map((course, idx) => (
                                        <div key={idx} className="bg-white/[0.03] p-3 rounded-[5px] flex items-center justify-between">
                                            <div className="text-[11.5px] font-bold text-white leading-tight pr-2">
                                                {course.title}
                                            </div>
                                            <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#F3D887] shrink-0">
                                                <Star size={11} fill="#F3D887" />
                                                <span>{course.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-[10px] font-black text-[#D5AA45] uppercase mb-1">Skill Roadmap</div>
                                    {activePersona.milestones.map((m, idx) => (
                                        <div key={idx} className="bg-white/[0.03] p-2.5 rounded-[5px] flex items-center justify-between text-[11px]">
                                            <span className="font-bold text-white">{m.level}</span>
                                            <span className="text-[9.5px] font-bold text-[#D5AA45]">{m.status}</span>
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
