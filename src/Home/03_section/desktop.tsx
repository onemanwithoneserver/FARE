import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    Building2, GraduationCap, UserCheck, ChevronRight
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, size: number = 22) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2} />;
        return <UserCheck size={size} strokeWidth={2} />;
    };

    const getPersonaAccent = (id: string) => {
        if (id === 'companies') return '#34D399';
        if (id === 'trainers') return '#60A5FA';
        return '#C99A2E';
    };

    const headerContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    const headerItem: Variants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const activeAccent = getPersonaAccent(activePersonaId);

    return (
        <section
            className="w-full py-20 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 40%, #F0F4FA 100%)' }}
        >
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5%] right-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#DDEAFF]/40 to-transparent rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-[-5%] left-[5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"
            />

            <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(${NAVY} 0.5px, transparent 0.5px)`,
                    backgroundSize: '28px 28px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-80px" }}
                    className="flex flex-col items-center text-center mb-14"
                >
                    <motion.div variants={headerItem} className="mb-5">
                        <span
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border"
                            style={{ color: GOLD, borderColor: `${GOLD}25`, background: `${GOLD}08` }}
                        >
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={headerItem}
                        className={`font-black mb-4 ${
                            language === 'te'
                                ? 'text-[2.25rem] xl:text-[2.65rem] leading-[1.25] tracking-wider py-1'
                                : 'text-[3.25rem] leading-[1.05] tracking-[-0.02em] uppercase'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={headerItem} className="text-[16px] font-medium leading-[1.65] max-w-[700px]" style={{ color: '#5A6B82' }}>
                        {data.headline.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center gap-3 mb-10"
                >
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        const accent = getPersonaAccent(persona.id);

                        return (
                            <motion.button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(11,29,58,0.08)' }}
                                whileTap={{ scale: 0.97 }}
                                className={`relative flex items-center gap-3 px-6 py-3.5 rounded-lg text-left transition-all duration-300 cursor-pointer border ${
                                    isActive
                                        ? 'bg-white shadow-[0_4px_20px_rgba(11,29,58,0.08),0_1px_3px_rgba(11,29,58,0.06)] border-transparent'
                                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:border-transparent'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab03"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] w-[60%] rounded-full"
                                        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}80)` }}
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}
                                <motion.div
                                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                        isActive ? 'text-white shadow-md' : 'text-white/80'
                                    }`}
                                    style={{ background: isActive ? accent : `${accent}90` }}
                                >
                                    {getIcon(persona.id, 20)}
                                </motion.div>
                                <span
                                    className={`font-bold text-[14px] tracking-wide uppercase transition-all duration-300 ${
                                        isActive ? '' : 'opacity-50'
                                    }`}
                                    style={{ color: isActive ? NAVY : '#64748B' }}
                                >
                                    {persona.tag}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[900px] mx-auto"
                    >
                        <motion.div
                            className="w-full rounded-xl p-10 relative overflow-hidden"
                            whileHover={{ boxShadow: '0 12px 40px -4px rgba(11, 29, 58, 0.09), 0 4px 12px -2px rgba(11, 29, 58, 0.04)' }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: 'white',
                                border: '1px solid rgba(11, 29, 58, 0.06)',
                                boxShadow: '0 8px 32px -4px rgba(11, 29, 58, 0.06), 0 2px 8px -2px rgba(11, 29, 58, 0.03)'
                            }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-[3px]"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    background: `linear-gradient(90deg, transparent 5%, ${activeAccent}, transparent 95%)`,
                                    transformOrigin: 'center'
                                }}
                            />

                            <motion.div
                                animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-20 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
                                style={{ background: activeAccent }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="flex items-center gap-4 mb-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15, type: "spring", bounce: 0.3 }}
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                                        style={{ background: `linear-gradient(135deg, ${activeAccent}, ${activeAccent}CC)` }}
                                    >
                                        {getIcon(activePersona.id, 24)}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-[24px] font-black tracking-tight" style={{ color: NAVY }}>
                                            {activePersona.tag}
                                        </h3>
                                        <p className="text-[13px] font-medium mt-0.5" style={{ color: '#94A3B8' }}>
                                            {activePersona.desc}
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activePersona.subTag.split(' · ').map((subItem, i) => (
                                        <motion.div
                                            key={`${activePersona.id}-${i}`}
                                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{
                                                delay: 0.08 * i + 0.2,
                                                duration: 0.5,
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                y: -2,
                                                boxShadow: '0 6px 20px rgba(11,29,58,0.06)',
                                                transition: { duration: 0.2 }
                                            }}
                                            className="group flex items-center gap-4 px-5 py-4.5 rounded-xl transition-colors duration-300 cursor-default"
                                            style={{
                                                background: `linear-gradient(135deg, ${activeAccent}08, ${activeAccent}03)`,
                                                border: `1px solid ${activeAccent}18`
                                            }}
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{
                                                    delay: 0.08 * i + 0.3,
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 15
                                                }}
                                                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                                                style={{ background: `${activeAccent}18` }}
                                            >
                                                <ChevronRight
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                                    style={{ color: activeAccent }}
                                                />
                                            </motion.div>
                                            <span
                                                className="text-[15px] font-semibold leading-snug"
                                                style={{ color: NAVY }}
                                            >
                                                {subItem.trim()}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
