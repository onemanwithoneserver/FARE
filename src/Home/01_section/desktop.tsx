import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    BookOpen, Target, CheckCircle, ArrowRight, Play,
    Search, Bell, Lock, ChevronLeft, ChevronRight, Share2, Plus, Layers, Home,
    GraduationCap, TrendingUp, HelpCircle
} from 'lucide-react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const NAVY_SURFACE = '#0D2654';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full flex items-center justify-center overflow-x-clip relative font-['Outfit'] pb-16"
            style={{ background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
        >
            <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>

            <svg className="absolute top-20 left-[10%] w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0" viewBox="0 0 400 400" fill="none">
                <path d="M50 350 Q200 50 350 350" stroke={GOLD} strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="absolute bottom-20 right-[5%] w-[300px] h-[300px] opacity-[0.04] pointer-events-none z-0" viewBox="0 0 300 300" fill="none">
                <circle cx="150" cy="150" r="140" stroke={GOLD} strokeWidth="0.8" fill="none" />
            </svg>

            <div className="max-w-360 w-full px-12 flex items-center justify-between gap-10 relative z-20">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-start w-[42%] min-w-[420px] relative z-40"
                >
                    <motion.div variants={item} className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                        <span className="font-semibold text-[10.5px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
                            Skill Enhancement For Real Estate
                        </span>
                    </motion.div>

                    <h1 className={`font-black mb-5 flex flex-col gap-1.5 md:gap-2 ${
                        language === 'te'
                            ? 'text-[3.6rem] leading-[1.2] tracking-wider my-2'
                            : 'text-[4.85rem] leading-[1.05] tracking-[-0.03em]'
                    }`}>
                        <motion.span variants={item} className={`block ${language === 'te' ? 'py-1' : ''}`} style={{ color: NAVY }}>{data.headline.line1}</motion.span>
                        <motion.span variants={item} className={`inline-block text-[#C99A2E] ${language === 'te' ? 'py-1' : ''}`}>{data.headline.line2}</motion.span>
                        <motion.span variants={item} className={`block ${language === 'te' ? 'py-1' : ''}`} style={{ color: NAVY }}>{data.headline.line3}</motion.span>
                    </h1>

                    <motion.div variants={item} className="mb-5">
                        <p className="text-[17px] font-medium leading-[1.6] max-w-[420px]" style={{ color: '#3A4A63' }}>
                            {data.subtitle}
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center gap-4 mb-6">
                        <button
                            className="text-white text-[13.5px] font-semibold px-7 py-3.5 rounded hover:shadow-[0_12px_24px_rgba(11,29,58,0.2),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
                            style={{
                                background: NAVY,
                                boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`
                            }}
                        >
                            {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                        <button
                            className="text-[13.5px] font-semibold px-7 py-3.5 rounded hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border"
                            style={{
                                color: NAVY,
                                borderColor: `${NAVY}15`,
                                background: 'white',
                                boxShadow: '0 1px 3px rgba(11,29,58,0.03)'
                            }}
                        >
                            <Play size={14} strokeWidth={2.5} fill={NAVY} /> {data.buttons.secondary}
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap gap-2 mb-2 max-w-[440px]">
                        {data.capabilities.map((cap, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
                            >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }}></span>
                                <span>{cap}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="flex-1 relative flex items-center justify-end z-20" style={{ minHeight: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: 5, rotateX: 3 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 5, rotateX: 3 }}
                        whileHover={{ scale: 1.01, rotateY: 2, rotateX: 1, y: -5 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-[780px] safari-shadow rounded overflow-hidden bg-white/80 backdrop-blur-md"
                        style={{
                            transformPerspective: 2000,
                            border: '1px solid rgba(11, 29, 58, 0.08)',
                            boxShadow: '0 30px 60px -12px rgba(11,29,58,0.25), 0 18px 36px -18px rgba(11,29,58,0.15)'
                        }}
                    >
                        <div className="glass-safari border-b border-black/[0.06]">
                            <div className="h-[38px] w-full flex items-center px-4 gap-3">
                                <div className="flex items-center gap-[7px]">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#27C840] border border-[#1AAB29]"></div>
                                </div>
                                <div className="flex items-center gap-1 ml-2 text-[#999]">
                                    <ChevronLeft size={13} strokeWidth={2} />
                                    <ChevronRight size={13} strokeWidth={2} />
                                </div>
                                <div className="flex-1 mx-3 bg-white/80 border border-[#e5e5ea] rounded px-3 py-[3px] flex items-center justify-center gap-1.5 text-[10px] font-medium text-[#666] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.04)]">
                                    <Lock size={9} strokeWidth={2.5} className="text-[#999]" />
                                    <span>{data.dashboard.url}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-[#999]">
                                    <Share2 size={11} strokeWidth={2} />
                                    <Plus size={13} strokeWidth={2} />
                                    <Layers size={11} strokeWidth={2} />
                                </div>
                            </div>
                        </div>

                        <div className="flex" style={{ height: '460px' }}>
                            <div
                                className="w-[185px] flex flex-col pt-4 pb-4 flex-shrink-0"
                                style={{ background: NAVY_DEEP, borderRight: `1px solid rgba(255,255,255,0.06)` }}
                            >
                                <div className="px-5 mb-4 flex items-center">
                                    <img src={logo} alt="FARE" className="h-14 w-auto brightness-0 invert opacity-100" />
                                </div>
                                <div className="flex flex-col gap-0.5 px-3 flex-1 overflow-y-auto">
                                    <SidebarItem icon={<Home size={13} />} label="Dashboard" active />
                                    <SidebarItem icon={<GraduationCap size={13} />} label="Programs" />
                                    <SidebarItem icon={<BookOpen size={13} />} label="Courses" />
                                    <SidebarItem icon={<HelpCircle size={13} />} label="Knowledge Bank" />
                                    <SidebarItem icon={<Target size={13} />} label="Skill Practice" />
                                    <SidebarItem icon={<CheckCircle size={13} />} label="Habit Tracker" />
                                    <SidebarItem icon={<TrendingUp size={13} />} label="Sales Forecast" />
                                </div>
                                <div className="px-4 flex items-center gap-2.5 pt-3 border-t border-white/[0.06]">
                                    <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[9px]" style={{ background: GOLD, color: NAVY_DEEP }}>{data.dashboard.userInitials}</div>
                                    <div className="flex flex-col">
                                        <span className="text-white text-[11px] font-semibold">{data.dashboard.userName}</span>
                                        <span className="text-[8px] text-white/40 font-medium">{data.dashboard.userRole}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 p-5 flex flex-col justify-between overflow-hidden" style={{ background: NAVY_SURFACE }}>
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-white text-[17px] font-bold leading-snug">{data.dashboard.greeting}</h2>
                                            <p className="text-white/40 text-[10px] font-medium mt-0.5">{data.dashboard.date}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Search size={14} className="text-white/40" strokeWidth={2} />
                                            <Bell size={14} className="text-white/40" strokeWidth={2} />
                                            <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[9px]" style={{ background: NAVY, color: 'white', border: `1.5px solid ${GOLD}40` }}>{data.dashboard.userInitials}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2.5 mb-3">
                                        {data.dashboard.stats.slice(0, 4).map(s => (
                                            <DashCard
                                                key={s.id}
                                                icon={s.icon}
                                                iconColor={s.color}
                                                title={s.label}
                                                subtitle={s.subtitle}
                                                value={s.val}
                                                valueColor={s.color}
                                                progress={s.progress}
                                                progressColor={s.color}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <h3 className="text-[9px] font-bold text-white/30 tracking-[0.15em] uppercase">Upcoming Schedule</h3>
                                        <button className="text-[9px] font-semibold text-white/40 hover:text-white/60 transition-colors flex items-center gap-1 border border-white/[0.08] px-2.5 py-1 rounded-sm">
                                            View All <ArrowRight size={8} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {data.dashboard.upcoming.map((u, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-[6px] h-[6px] rounded-full" style={{ background: u.color }}></div>
                                                <div>
                                                    <div className="text-white text-[11px] font-semibold">{u.title}</div>
                                                    <div className="text-white/30 text-[9px] font-medium">{u.time}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute top-6 left-[-45px] z-30 pointer-events-auto"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3 shadow-lg"
                        >
                            <div className="w-9 h-9 rounded bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] flex items-center justify-center text-white shadow-sm">
                                <BookOpen size={17} strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="font-semibold text-[11.5px]" style={{ color: NAVY }}>Knowledge Bank</div>
                                <div className="text-[9px] font-medium" style={{ color: MUTED_BLUE }}>Quizzes & Assessments</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="absolute top-24 -right-4 z-30"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3"
                        >
                            <div className="w-9 h-9 rounded bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center text-white shadow-sm">
                                <Target size={17} strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="font-semibold text-[11.5px]" style={{ color: NAVY }}>Skill Practice</div>
                                <div className="text-[9px] font-medium flex items-center gap-1" style={{ color: MUTED_BLUE }}>
                                    Mock Tests <ArrowRight size={8} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="absolute bottom-4 right-0 z-30"
                    >
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="fare-glass-card floating-card-shadow rounded p-3.5 flex items-center gap-3"
                        >
                            <div className="w-9 h-9 rounded flex items-center justify-center text-white shadow-sm" style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_MID} 100%)` }}>
                                <CheckCircle size={17} strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="font-semibold text-[11.5px]" style={{ color: NAVY }}>Habit Tracker</div>
                                <div className="text-[9px] font-medium flex items-center gap-1" style={{ color: MUTED_BLUE }}>
                                    Daily Tracking <ArrowRight size={8} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 1.8, duration: 1.2 }}
                        className="absolute -bottom-12 right-4 z-30 -rotate-[4deg]"
                    >
                        <span
                            className="text-[26px] italic font-medium drop-shadow-sm whitespace-pre-line"
                            style={{ color: GOLD, fontFamily: "'Georgia', 'Times New Roman', serif", opacity: 0.7 }}
                        >
                            {data.signature}
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <div
            className={`px-3 py-1.5 rounded-sm flex items-center gap-2.5 text-[10.5px] font-medium cursor-pointer transition-colors duration-200 ${
                active
                    ? 'font-semibold'
                    : 'text-white/50 hover:text-white/70'
            }`}
            style={active ? {
                background: `${GOLD}18`,
                color: GOLD_MID,
                border: `1px solid ${GOLD}25`,
            } : undefined}
        >
            {icon} <span className="truncate">{label}</span>
        </div>
    );
}

function DashCard({
    icon, iconColor, title, subtitle, value, valueColor, progress, progressColor
}: {
    icon: React.ReactNode;
    iconColor: string;
    title: string;
    subtitle: string;
    value: string;
    valueColor: string;
    progress: number;
    progressColor: string;
}) {
    return (
        <div
            className="rounded-sm p-3.5"
            style={{
                background: `rgba(255,255,255,0.04)`,
                border: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <div className="flex items-center gap-2 mb-2.5">
                <div style={{ color: iconColor }}>{icon}</div>
                <div>
                    <div className="text-white text-[11px] font-semibold leading-tight">{title}</div>
                    <div className="text-white/30 text-[8px] font-medium">{subtitle}</div>
                </div>
            </div>
            <div className="flex items-end justify-between mb-1.5">
                <span className="text-[15px] font-bold" style={{ color: valueColor }}>{value}</span>
                <span className="text-[8px] text-white/25 font-medium">progress</span>
            </div>
            <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${progress}%`, background: progressColor }}
                ></div>
            </div>
        </div>
    );
}
