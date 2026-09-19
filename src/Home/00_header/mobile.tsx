import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    return (
        <header className="w-full glass-light h-[64px] px-5 flex items-center justify-between sticky top-0 z-50 border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)]">
            <div className="flex items-center cursor-pointer">
                <img src={logo} alt="FARE Logo" className="h-9 w-auto" />
            </div>

            <button className="p-2.5 text-[#0A1128] hover:bg-black/[0.04] rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}
