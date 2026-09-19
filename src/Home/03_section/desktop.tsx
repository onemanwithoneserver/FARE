import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, Sparkles, CheckCircle, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string) => {
        if (id === 'companies') return <Building2 size={20} />;
        if (id === 'trainers') return <GraduationCap size={20} />;
        return <UserCheck size={20} />;
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    return (
        <section
            className="w-full py-24 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
        >
            <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#6B8AFF]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-[1300px] w-full flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-14 flex flex-col items-center text-center max-w-[800px]"
                >
                    <div className="flex items-center gap-2.5 mb-3 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                        <Sparkles size={13} className="text-[#D5AA45]" />
                        <span className="font-bold text-[10.5px] tracking-[0.2em] uppercase text-[#F3D887]">
                            {data.headline.eyebrow}
                        </span>
                    </div>
                    <h2 className="text-[3.25rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-white mb-4">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>
                    <p className="text-[15px] font-medium leading-relaxed max-w-[580px]" style={{ color: MUTED_BLUE }}>
                        {data.headline.subtitle}
                    </p>
                </motion.div>

                <div className="flex gap-3 w-full max-w-[840px] mb-10 p-1.5 rounded-[10px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-3.5 px-5 rounded-[8px] flex items-center justify-center gap-2.5 transition-all duration-300 font-bold text-[13px] cursor-pointer relative ${
                                    isActive
                                    ? 'bg-white/[0.08] text-white border border-white/[0.15] shadow-lg scale-[1.01]'
                                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.02]'
                                }`}
                            >
                                <span style={{ color: isActive ? persona.color : 'inherit' }}>
                                    {getIcon(persona.id)}
                                </span>
                                <span>{persona.tag}</span>
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}
                        className="w-full grid grid-cols-12 gap-8 items-stretch"
                    >
                        <div className="col-span-5 flex flex-col justify-between p-8 lg:p-10 rounded-[10px] bg-[#0D2654] border border-white/[0.1] luxury-shadow-dark relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-white/[0.04] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-[4px] mb-6 border"
                                     style={{ color: activePersona.color, borderColor: `${activePersona.color}40`, background: `${activePersona.color}15` }}>
                                    <span>{activePersona.badge}</span>
                                </div>

                                <h3 className="text-[28px] font-black text-white leading-tight mb-4 tracking-tight">
                                    {activePersona.title}
                                </h3>

                                <p className="text-[14px] font-medium leading-relaxed mb-8" style={{ color: MUTED_BLUE }}>
                                    {activePersona.desc}
                                </p>

                                <div className="flex flex-col gap-3 mb-8">
                                    {activePersona.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-[13px] text-white/90 font-medium">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 border"
                                                 style={{ borderColor: `${activePersona.color}40`, background: `${activePersona.color}15`, color: activePersona.color }}>
                                                <CheckCircle size={12} strokeWidth={2.5} />
                                            </div>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                                {activePersona.id === 'professionals' ? (
                                    waitlistJoined ? (
                                        <div className="p-3.5 rounded-[6px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2.5 text-[#10B981] text-[12.5px] font-bold">
                                            <ShieldCheck size={18} />
                                            <span>You are on the VIP priority access list!</span>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleJoinWaitlist} className="flex gap-2">
                                            <input
                                                type="email"
                                                required
                                                value={waitlistEmail}
                                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                                placeholder="Enter your professional email"
                                                className="flex-1 bg-white/[0.05] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-[12.5px] text-white placeholder-white/30 focus:outline-none focus:border-[#D5AA45]"
                                            />
                                            <button
                                                type="submit"
                                                className="px-5 py-2.5 rounded-[6px] font-black text-[12.5px] text-[#071A49] transition-all cursor-pointer whitespace-nowrap"
                                                style={{ background: 'linear-gradient(90deg, #C99A2E, #E2C068)' }}
                                            >
                                                Join Now
                                            </button>
                                        </form>
                                    )
                                ) : (
                                    <button
                                        className="w-full py-3.5 px-6 rounded-[6px] font-black text-[13px] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110"
                                        style={{ background: `linear-gradient(90deg, ${activePersona.color}, ${activePersona.color}cc)` }}
                                    >
                                        <span>{activePersona.cta}</span>
                                        <ArrowRight size={15} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="col-span-7 p-8 lg:p-10 rounded-[10px] bg-[#071A49]/80 border border-white/[0.1] luxury-shadow-dark flex flex-col justify-center relative overflow-hidden backdrop-blur-md">
                            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#6B8AFF]/15 text-[#6B8AFF] flex items-center justify-center">
                                                <TrendingUp size={20} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#6B8AFF] tracking-widest">{activePersona.metrics.title}</div>
                                                <div className="text-[18px] font-bold text-white">Live Benchmark Dashboard</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                                            {activePersona.metrics.trend}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-6 bg-white/[0.02] p-6 rounded-[8px] border border-white/[0.06]">
                                        {activePersona.metrics.teams.map((team, idx) => (
                                            <div key={idx} className="w-full">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[13.5px] font-bold text-white/90">{team.name}</span>
                                                    <div className="flex gap-4">
                                                        <span className="text-[11px] text-white/40">Industry Benchmark: {team.peer}%</span>
                                                        <span className="text-[12px] font-black text-[#6B8AFF]">FARE Score: {team.score}%</span>
                                                    </div>
                                                </div>
                                                <div className="w-full h-2.5 bg-[#0A1630] rounded-full overflow-hidden relative border border-white/[0.04]">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${team.peer}%` }} transition={{ duration: 1 }} className="absolute top-0 bottom-0 left-0 bg-white/15 rounded-full" />
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${team.score}%` }} transition={{ duration: 1.2, delay: 0.1 * idx }} className="absolute top-0 bottom-0 left-0 bg-[#6B8AFF] rounded-full shadow-[0_0_10px_#6B8AFF]" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#34D399]/15 text-[#34D399] flex items-center justify-center">
                                                <GraduationCap size={20} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#34D399] tracking-widest">COURSE ENGINE & MOCKS</div>
                                                <div className="text-[18px] font-bold text-white">Active Coach Labs</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                                            Certified Mentors
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3.5">
                                        {activePersona.courses.map((course, idx) => (
                                            <div key={idx} className="bg-white/[0.03] hover:bg-white/[0.06] p-5 rounded-[8px] border border-white/[0.08] transition-all flex items-center justify-between group">
                                                <div>
                                                    <div className="text-[13.5px] font-bold text-white group-hover:text-[#34D399] transition-colors mb-1">
                                                        {course.title}
                                                    </div>
                                                    <div className="text-[11px] text-white/50">{course.learners} Active Learners Completed</div>
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white/[0.05] border border-white/10 text-[11.5px] font-bold text-[#F3D887]">
                                                    <Star size={13} fill="#F3D887" />
                                                    <span>{course.rating}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#D5AA45]/15 text-[#D5AA45] flex items-center justify-center">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#D5AA45] tracking-widest">CAREER MILESTONE ROADMAP</div>
                                                <div className="text-[18px] font-bold text-white">Professional Mastery Progression</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#D5AA45]/15 text-[#F3D887] border border-[#D5AA45]/30">
                                            Top Tier Pathway
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3.5">
                                        {activePersona.milestones.map((m, idx) => (
                                            <div key={idx} className="bg-white/[0.03] p-4.5 rounded-[8px] border border-white/[0.08] flex items-center justify-between">
                                                <div>
                                                    <div className="text-[14px] font-bold text-white mb-0.5">{m.level}</div>
                                                    <div className="text-[11px] text-white/50">{m.req}</div>
                                                </div>
                                                <span className={`text-[10.5px] font-black px-2.5 py-1 rounded-[4px] uppercase tracking-wider ${
                                                    m.status === 'Completed' 
                                                    ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30' 
                                                    : m.status === 'In Progress' 
                                                    ? 'bg-[#D5AA45]/20 text-[#F3D887] border border-[#D5AA45]/30' 
                                                    : 'bg-white/[0.05] text-white/40'
                                                }`}>
                                                    {m.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
