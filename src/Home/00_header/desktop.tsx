import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { Search, ArrowRight } from 'lucide-react';

export default function Desktop() {
    return (
        <header className="w-full fare-glass-nav h-[80px] px-12 flex items-center justify-between sticky top-0 z-50 border-b border-[#0B1D3A]/[0.04]">
            <div className="flex items-center cursor-pointer group">
                <img
                    src={logo}
                    alt="FARE — Skill Enhancement for Real Estate"
                    className="h-[112px] w-auto transition-transform duration-500 group-hover:scale-[1.01]"
                />
            </div>

            <nav className="flex items-center gap-9">
                {data.navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="relative text-[13.5px] font-medium text-[#0B1D3A] hover:text-[#C99A2E] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C99A2E] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-5">
                <button
                    aria-label="Search"
                    className="text-[#0B1D3A]/60 hover:text-[#C99A2E] transition-colors duration-300 p-1"
                >
                    <Search size={18} strokeWidth={2} />
                </button>
                <div className="w-[1px] h-4 bg-[#0B1D3A]/10"></div>
                <a
                    href="#login"
                    className="text-[13.5px] font-medium text-[#0B1D3A] hover:text-[#C99A2E] transition-colors duration-300"
                >
                    Login
                </a>
                <button className="bg-[#0B1D3A] text-white text-[13px] font-semibold px-6 py-2.5 rounded-[2px] hover:bg-[#102B63] hover:shadow-[0_8px_24px_rgba(11,29,58,0.25),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(11,29,58,0.15)] flex items-center gap-2">
                    Get Started <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </header>
    );
}
