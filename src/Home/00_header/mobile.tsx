import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { data } from './data';

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fare-glass-nav h-[64px] px-5 flex items-center justify-between sticky top-0 z-50 border-b border-[#0B1D3A]/[0.04]">
            <div className="flex items-center cursor-pointer">
                <img
                    src={logo}
                    alt="FARE — Skill Enhancement for Real Estate"
                    className="h-[80px] w-auto"
                />
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] rounded-[2px] transition-colors duration-200 cursor-pointer"
            >
                {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[64px] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#0B1D3A]/[0.08] shadow-lg flex flex-col p-6 gap-5 z-50"
                    >
                        <nav className="flex flex-col gap-4">
                            {data.navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[15px] font-semibold text-[#0B1D3A] hover:text-[#C99A2E] transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        <div className="h-[1px] w-full bg-[#0B1D3A]/[0.06]"></div>

                        <div className="flex flex-col gap-3.5">
                            <div className="flex items-center gap-2 bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] rounded-[4px] px-3 py-2 text-[#0B1D3A]">
                                <Search size={16} className="text-[#0B1D3A]/50" />
                                <input
                                    type="text"
                                    placeholder="Search platform..."
                                    className="bg-transparent text-[13px] text-[#0B1D3A] placeholder-[#0B1D3A]/40 outline-none w-full"
                                />
                            </div>

                            <div className="flex items-center justify-between pt-1">
                                <a
                                    href="#login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[14px] font-semibold text-[#0B1D3A] hover:text-[#C99A2E]"
                                >
                                    Login
                                </a>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="bg-[#0B1D3A] text-white text-[13px] font-semibold px-5 py-2 rounded-[2px] shadow-sm flex items-center gap-1.5"
                                >
                                    Get Started <ArrowRight size={13} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
