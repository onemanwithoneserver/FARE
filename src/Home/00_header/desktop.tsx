import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    return (
        <header className="w-full glass-light h-[88px] px-12 flex items-center justify-between sticky top-0 z-50 border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.02)]">
            <div className="flex items-center cursor-pointer group">
                <img
                    src={logo}
                    alt="FARE Logo"
                    className="h-16 w-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            <nav className="flex items-center gap-10">
                {data.navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="relative text-[14px] font-semibold text-slate-500 hover:text-[#0A1128] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-6">
                <a href="#login" className="text-[14px] font-semibold text-[#0A1128] hover:text-[#0A1128]/70 transition-colors duration-300">
                    Login
                </a>
                <button className="bg-[#111111] text-white text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-black hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:scale-[0.98] transition-all duration-300 luxury-shadow">
                    Get Started
                </button>
            </div>
        </header>
    );
}
