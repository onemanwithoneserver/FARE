import { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import reTrainersHero from '../../assets/re_trainers_hero.jpg';
import Modal from '../../Forms/Modal';
import RETrainersForm from '../../Forms/Desktop/RETrainersForm';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const GOLD_LIGHT = '#E2C068';

export default function Desktop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 22 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full -mt-8 lg:-mt-8 flex items-center justify-center overflow-x-clip relative font-['Outfit']"
            style={{ background: `linear-gradient(165deg, #FFFFFF 0%, #F6F9FF 35%, #EDF2FF 60%, #F0F4FF 100%)` }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#818CF8]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>

            
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-[1320px] w-full px-8 lg:px-14 py-10 lg:py-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 items-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="lg:col-span-7 flex flex-col items-start text-left"
                    >
                        
                        <motion.div variants={item} className="mb-6">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm">
                                <Sparkles size={13} className="text-[#C99A2E]" strokeWidth={2.5} />
                                <span className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#C99A2E]">
                                    {data.tagline}
                                </span>
                            </div>
                        </motion.div>

                        
                        <motion.h1
                            variants={item}
                            className={`font-black mb-5 ${
                                language === 'te'
                                    ? 'text-[2.4rem] xl:text-[3rem] leading-[1.15] tracking-wider py-1'
                                    : 'text-[2.85rem] xl:text-[3.6rem] leading-[1.08] tracking-[-0.03em]'
                            }`}
                            style={{ color: NAVY }}
                        >
                            {language === 'te' ? (
                                <span>
                                    రియల్ ఎస్టేట్ ట్రైనర్స్ & కోచెస్ కోసం{' '}
                                    <span className="text-[#C99A2E] gold-underline">
                                        FARE
                                    </span>
                                </span>
                            ) : (
                                <span>
                                    FARE for <br />
                                    <span className="text-[#C99A2E] gold-underline">
                                        Real Estate Trainers & Coaches
                                    </span>
                                </span>
                            )}
                        </motion.h1>

                        
                        <motion.div variants={item} className="mb-5">
                            <h2 className={`font-bold ${
                                language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[22px] leading-snug'
                            }`} style={{ color: NAVY }}>
                                {data.subheadline}
                            </h2>
                            {data.subheadlineAccent && (
                                <h2 className={`font-bold mt-1 ${
                                    language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[22px] leading-snug'
                                }`} style={{ color: GOLD }}>
                                    {data.subheadlineAccent}
                                </h2>
                            )}
                        </motion.div>

                        
                        <motion.p
                            variants={item}
                            className="text-[16px] font-medium leading-[1.75] text-[#475569] mb-9 max-w-[560px]"
                        >
                            {data.description}
                        </motion.p>

                        
                        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group text-white text-[14px] font-semibold px-8 py-4 rounded hover:shadow-[0_20px_40px_-10px_rgba(11,29,58,0.35)] active:scale-[0.97] transition-all duration-300 flex items-center gap-3 shadow-[0_8px_24px_-6px_rgba(11,29,58,0.25)] relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                            >
                                <span className="relative z-10">{data.buttons.primary}</span>
                                <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </button>
                        </motion.div>

                        
                        <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-5">
                            {data.features.map((f, i) => (
                                <span
                                    key={i}
                                    className="group/pill px-4 py-2 rounded text-[12px] font-semibold border border-[#0B1D3A]/[0.08] bg-white/80 backdrop-blur-sm text-[#475569] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.06)] hover:border-[#C99A2E]/40 hover:text-[#C99A2E] hover:shadow-[0_4px_16px_-4px_rgba(201,154,46,0.15)] transition-all duration-300 cursor-default"
                                >
                                    {f}
                                </span>
                            ))}
                        </motion.div>

                        
                        <motion.p variants={item} className="text-[12px] italic text-[#0B1D3A]/45 font-medium">
                            {data.footerText}
                        </motion.p>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative w-full flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[500px] flex items-center justify-center group mt-10 lg:mt-0">
                            <motion.div
                                className="w-full h-full absolute inset-0 z-0 rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_20px_60px_-15px_rgba(11,29,58,0.15)]"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                                }}
                            >
                                <motion.img
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                                    src={reTrainersHero}
                                    alt="RE Trainers Hero"
                                    className="w-full h-full object-cover object-[center_35%]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -left-4 sm:-left-8 bottom-16 z-20 bg-white/95 backdrop-blur-xl p-4 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.2)] border border-white/80 rounded-[24px] rounded-tl-[8px]"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-[12px] rounded-br-[4px] bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-lg shadow-[#34D399]/30">
                                        <Sparkles size={18} className="text-white" />
                                    </div>
                                    <div className="pr-2">
                                        <div className="text-[14px] font-black text-[#0B1D3A] tracking-tight">{data.dashboard.floatingBadge.title}</div>
                                        <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">{data.dashboard.floatingBadge.subtitle}</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute -right-4 sm:-right-8 top-24 z-20 bg-white/95 backdrop-blur-xl p-3.5 shadow-[0_15px_50px_-12px_rgba(11,29,58,0.25)] border border-white/80 hidden lg:block rounded-[20px] rounded-tr-[6px]"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-[10px] rounded-bl-[4px] flex items-center justify-center text-[15px] font-black text-white shadow-lg shadow-[#C99A2E]/30" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                                        %
                                    </div>
                                    <div className="pr-3">
                                        <div className="text-[16px] font-black text-[#0B1D3A] leading-none">{data.dashboard.stats[0].progress}</div>
                                        <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mt-1">{data.dashboard.stats[0].title}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {isModalOpen && <RETrainersForm />}
            </Modal>
        </section>
    );
}
