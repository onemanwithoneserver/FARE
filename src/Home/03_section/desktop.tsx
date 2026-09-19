import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle,
    TrendingUp, Star, Users, Award, ShieldCheck, Sparkles
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const MUTED_SLATE = '#5A6E8C';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getTabIcon = (id: string, isActive: boolean) => {
        const strokeColor = isActive ? '#FFFFFF' : '#0B1D3A';
        if (id === 'companies') return <Building2 size={18} stroke={strokeColor} />;
        if (id === 'trainers') return <GraduationCap size={18} stroke={strokeColor} />;
        return <UserCheck size={18} stroke={strokeColor} />;
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    return (
        <section
            className="w-full py-20 px-12 flex justify-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 100%)' }}
        >
            <div className="absolute top-8 left-10 hidden xl:flex flex-col gap-2 text-[10px] font-black tracking-[0.25em] text-[#0B1D3A]/20 pointer-events-none uppercase">
                {data.sideTextLeft.map((t, idx) => <span key={idx}>{t}</span>)}
            </div>
            <div className="absolute top-8 right-10 hidden xl:flex flex-col gap-2 text-[10px] font-black tracking-[0.25em] text-[#0B1D3A]/20 pointer-events-none uppercase text-right">
                {data.sideTextRight.map((t, idx) => <span key={idx}>{t}</span>)}
            </div>

            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-[#EEF4FF]/70 to-transparent rounded-full blur-[140px] pointer-events-none"
            />

            <div className="max-w-[1300px] w-full flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full mb-10 flex flex-col items-center text-center max-w-[840px]"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-[1px] bg-[#C99A2E]"></div>
                        <span className="text-[11px] font-black tracking-[0.25em] text-[#C99A2E] uppercase">
                            {data.eyebrow}
                        </span>
                        <div className="w-12 h-[1px] bg-[#C99A2E]"></div>
                    </div>

                    <h2 className="text-[3.25rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-[#0B1D3A] mb-3.5">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>
                    <p className="text-[15px] font-medium leading-relaxed max-w-[660px]" style={{ color: MUTED_SLATE }}>
                        {data.headline.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex gap-2 w-full max-w-[940px] mb-9 p-1.5 rounded-[4px] bg-white border border-[#0B1D3A]/[0.08] shadow-[0_10px_30px_rgba(11,29,58,0.06)]"
                >
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-3 px-4 rounded-[4px] flex items-center gap-3 transition-all duration-300 text-left cursor-pointer relative overflow-hidden ${
                                    isActive
                                    ? 'bg-[#071A49] text-white shadow-md scale-[1.01]'
                                    : 'bg-transparent text-[#0B1D3A] hover:bg-[#F8FAFD]'
                                }`}
                            >
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E2C068]" />
                                )}
                                <div className={`w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 ${
                                    isActive ? 'bg-white/10' : 'bg-[#EEF2F6]'
                                }`}>
                                    {getTabIcon(persona.id, isActive)}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className={`font-bold text-[13px] leading-snug truncate ${isActive ? 'text-white' : 'text-[#0B1D3A]'}`}>
                                        {persona.tag}
                                    </span>
                                    <span className={`text-[10.5px] font-medium leading-tight truncate ${isActive ? 'text-[#D5AA45]' : 'text-[#5A6E8C]'}`}>
                                        {persona.subTag}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full grid grid-cols-12 gap-7 items-stretch"
                    >
                        <motion.div
                            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(11,29,58,0.25)' }}
                            transition={{ duration: 0.3 }}
                            className="col-span-5 flex flex-col p-8 lg:p-9 rounded-[6px] bg-white border border-[#0B1D3A]/[0.08] border-l-[4px] border-l-[#C99A2E] shadow-[0_20px_40px_-10px_rgba(11,29,58,0.15)] relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 text-[9.5px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-[4px] mb-5 bg-[#EEF4FF] text-[#2563EB] border border-[#2563EB]/20">
                                    <span>{activePersona.badge}</span>
                                </div>

                                <h3 className="text-[28px] font-black text-[#0B1D3A] leading-tight mb-3.5 tracking-tight">
                                    {activePersona.titleLine1}<br />
                                    <span className="gold-gradient-text">{activePersona.titleLine2}</span>
                                </h3>

                                <p className="text-[13.5px] font-medium leading-relaxed mb-6" style={{ color: MUTED_SLATE }}>
                                    {activePersona.desc}
                                </p>

                                <div className="flex flex-col gap-3 mb-6">
                                    {activePersona.features.map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i }}
                                            className="flex items-center gap-3 text-[12.5px] text-[#2C3E55] font-medium"
                                        >
                                            <div className="w-5 h-5 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] text-white shadow-sm flex items-center justify-center shrink-0">
                                                <CheckCircle size={12} strokeWidth={2.5} />
                                            </div>
                                            <span>{feat}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-[#0B1D3A]/[0.06] mt-auto flex items-center justify-between gap-4">
                                {activePersona.id === 'professionals' ? (
                                    waitlistJoined ? (
                                        <div className="p-3 rounded-[4px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#059669] text-[12px] font-bold">
                                            <ShieldCheck size={16} />
                                            <span>Registered for Priority Access!</span>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleJoinWaitlist} className="flex gap-2 w-full">
                                            <input
                                                type="email"
                                                required
                                                value={waitlistEmail}
                                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                                placeholder="Enter work email"
                                                className="flex-1 bg-[#F8FAFC] border border-[#0B1D3A]/[0.12] rounded-[4px] px-3.5 py-2.5 text-[12.5px] text-[#0B1D3A] outline-none focus:border-[#C99A2E]"
                                            />
                                            <button
                                                type="submit"
                                                className="px-5 py-2.5 rounded-[4px] font-black text-[12.5px] text-white bg-[#071A49] transition-all cursor-pointer whitespace-nowrap hover:bg-[#102B63]"
                                            >
                                                Join Now
                                            </button>
                                        </form>
                                    )
                                ) : (
                                    <button
                                        className="bg-[#0B1D3A] hover:bg-[#102B63] text-white text-[13px] font-bold px-6 py-3.5 rounded-[4px] shadow-md flex items-center gap-2 transition-all cursor-pointer active:scale-[0.98]"
                                    >
                                        <span>{activePersona.cta}</span>
                                        <ArrowRight size={15} />
                                    </button>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(11,29,58,0.25)' }}
                            transition={{ duration: 0.3 }}
                            className="col-span-7 p-8 lg:p-9 rounded-[6px] bg-white border border-[#0B1D3A]/[0.08] shadow-[0_20px_40px_-10px_rgba(11,29,58,0.12)] flex flex-col justify-between relative overflow-hidden"
                        >
                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col relative z-10 h-full justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] text-white flex items-center justify-center shadow-sm">
                                                    <TrendingUp size={19} />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-[#2563EB] tracking-widest uppercase">{activePersona.metrics.tag}</div>
                                                    <div className="text-[18px] font-bold text-[#0B1D3A]">{activePersona.metrics.title}</div>
                                                    <div className="text-[11.5px] text-[#5A6E8C] font-medium">{activePersona.metrics.subtitle}</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold px-3 py-1.5 rounded-[4px] bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] flex items-center gap-1.5">
                                                <TrendingUp size={13} />
                                                {activePersona.metrics.trend}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-4 bg-[#F8FAFD] p-6 rounded-[4px] border border-[#0B1D3A]/[0.06] shadow-sm mb-6">
                                            {activePersona.metrics?.teams?.map((team, idx) => (
                                                <div key={idx} className="w-full">
                                                    <div className="flex justify-between items-center mb-1.5">
                                                        <span className="text-[13px] font-bold text-[#0B1D3A]">{team.name}</span>
                                                        <div className="flex gap-4 items-center">
                                                            <span className="text-[11px] font-medium text-[#5A6E8C]">Industry Benchmark: {team.peer}%</span>
                                                            <span className="text-[13px] font-black text-[#2563EB]">FARE Score {team.score}%</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-2.5 bg-[#EEF2F6] rounded-full overflow-hidden relative">
                                                        <motion.div initial={{ width: 0 }} animate={{ width: `${team.peer}%` }} transition={{ duration: 1 }} className="absolute top-0 bottom-0 left-0 bg-[#CBD5E1] rounded-full" />
                                                        <motion.div initial={{ width: 0 }} animate={{ width: `${team.score}%` }} transition={{ duration: 1.2, delay: 0.1 * idx }} className="absolute top-0 bottom-0 left-0 bg-[#2563EB] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#0B1D3A]/[0.08]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                <Users size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[15px] font-black text-[#0B1D3A]">500+</div>
                                                <div className="text-[10.5px] text-[#5A6E8C] font-medium">Professionals Trained</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                <TrendingUp size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[15px] font-black text-[#0B1D3A]">42%</div>
                                                <div className="text-[10.5px] text-[#5A6E8C] font-medium">Average Skill Lift</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                <Star size={16} strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <div className="text-[15px] font-black text-[#0B1D3A]">4.8/5</div>
                                                <div className="text-[10.5px] text-[#5A6E8C] font-medium">Client Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col relative z-10 h-full justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-[4px] bg-gradient-to-br from-[#34D399] to-[#059669] text-white flex items-center justify-center shadow-sm">
                                                    <GraduationCap size={19} />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-[#059669] tracking-widest uppercase">{activePersona.metrics?.tag}</div>
                                                    <div className="text-[18px] font-bold text-[#0B1D3A]">{activePersona.metrics?.title}</div>
                                                    <div className="text-[11.5px] text-[#5A6E8C] font-medium">{activePersona.metrics?.subtitle}</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold px-3 py-1.5 rounded-[4px] bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                                                {activePersona.metrics?.trend}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-3 mb-6">
                                            {activePersona.courses.map((course, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.01 }}
                                                    className="bg-[#F8FAFD] hover:border-[#059669]/40 p-4 rounded-[4px] border border-[#0B1D3A]/[0.06] transition-all flex items-center justify-between shadow-sm group"
                                                >
                                                    <div>
                                                        <div className="text-[13px] font-bold text-[#0B1D3A] group-hover:text-[#059669] transition-colors mb-0.5">
                                                            {course.title}
                                                        </div>
                                                        <div className="text-[11px] text-[#5A6E8C]">{course.learners}</div>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#FEF3C7] border border-[#FDE68A] text-[11px] font-bold text-[#B45309]">
                                                        <Star size={12} fill="#B45309" />
                                                        <span>{course.rating}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#0B1D3A]/[0.08]">
                                        {activePersona.metrics?.stats.map((stat, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#34D399] to-[#059669] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                    <Award size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-[15px] font-black text-[#0B1D3A]">{stat.val}</div>
                                                    <div className="text-[10.5px] text-[#5A6E8C] font-medium">{stat.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col relative z-10 h-full justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-[4px] bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white flex items-center justify-center shadow-sm">
                                                    <ShieldCheck size={19} />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-[#B45309] tracking-widest uppercase">{activePersona.metrics?.tag}</div>
                                                    <div className="text-[18px] font-bold text-[#0B1D3A]">{activePersona.metrics?.title}</div>
                                                    <div className="text-[11.5px] text-[#5A6E8C] font-medium">{activePersona.metrics?.subtitle}</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold px-3 py-1.5 rounded-[4px] bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                                                {activePersona.metrics?.trend}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-3 mb-6">
                                            {activePersona.milestones.map((m, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.01 }}
                                                    className="bg-[#F8FAFD] p-4 rounded-[4px] border border-[#0B1D3A]/[0.06] flex items-center justify-between shadow-sm"
                                                >
                                                    <div>
                                                        <div className="text-[13.5px] font-bold text-[#0B1D3A] mb-0.5">{m.level}</div>
                                                        <div className="text-[11px] text-[#5A6E8C]">{m.req}</div>
                                                    </div>
                                                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-[4px] uppercase tracking-wider ${
                                                        m.status === 'Completed'
                                                        ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                                                        : m.status === 'In Progress'
                                                        ? 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]'
                                                        : 'bg-[#F1F5F9] text-[#64748B]'
                                                    }`}>
                                                        {m.status}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#0B1D3A]/[0.08]">
                                        {activePersona.metrics?.stats.map((stat, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                    <Sparkles size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-[15px] font-black text-[#0B1D3A]">{stat.val}</div>
                                                    <div className="text-[10.5px] text-[#5A6E8C] font-medium">{stat.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
