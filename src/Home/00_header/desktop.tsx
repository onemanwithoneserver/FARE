import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    return (
        <header className="w-full bg-white h-[72px] px-8 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
            <div className="flex items-center cursor-pointer">
                <img src={logo} alt="FARE Logo" className="h-8 w-auto" />
            </div>

            <nav className="flex items-center gap-8">
                {data.navLinks.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm font-semibold text-slate-500 hover:text-[#0A1128] transition-colors duration-200"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-6">
                <a href="#login" className="text-sm font-semibold text-[#0A1128] hover:text-[#0A1128]/80 transition-colors">
                    Login
                </a>
                <button className="bg-[#0A1128] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#0A1128]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md">
                    Get Started
                </button>
            </div>
        </header>
    );
}
