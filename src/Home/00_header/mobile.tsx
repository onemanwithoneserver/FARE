import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { Menu } from 'lucide-react';

export default function Mobile() {
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
                aria-label="Open navigation menu"
                className="p-2 text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] rounded-[2px] transition-colors duration-200"
            >
                <Menu size={22} strokeWidth={2} />
            </button>
        </header>
    );
}
