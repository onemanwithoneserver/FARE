import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    return (
        <header className="w-full glass-light h-[76px] px-10 flex items-center justify-between sticky top-0 z-50 border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)]">
            <div className="flex items-center cursor-pointer group">
                <img
                    src={logo}
                    alt="FARE Logo"
                    className="h-12 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <nav className="flex items-center gap-9">
                {data.navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="relative text-[13px] font-semibold text-slate-500 hover:text-[#0A1128] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-5">
                <a href="#login" className="text-[13px] font-semibold text-[#0A1128] hover:text-[#0A1128]/70 transition-all duration-300">
                    Login
                </a>
                <button className="bg-[#0A1128] text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#0A1128]/90 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(10,17,40,0.25)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(10,17,40,0.15)]">
                    Get Started
                </button>
            </div>
        </header>
    );
}
