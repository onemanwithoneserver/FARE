import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    return (
        <footer className="w-full bg-[#050914] py-5 px-5 flex flex-col font-['Inter',sans-serif] border-t border-white/[0.04] items-center text-center gap-4">

            <div className="flex items-center gap-3">
                <img src={logo} alt="FARE Logo" className="h-6 w-auto brightness-0 invert opacity-70" style={{ filter: 'brightness(0) invert(1)' }} />
                <div className="w-px h-3 bg-white/[0.08]"></div>
                <span className="text-slate-500 text-[10px] font-medium">
                    Finishing Academy for Real Estate
                </span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                {['Platform', 'Companies', 'Trainers', 'About', 'Privacy', 'Terms'].map((link, idx) => (
                    <a
                        key={idx}
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[10px] font-medium text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                        {link}
                    </a>
                ))}
            </div>

            <span className="text-[10px] text-slate-600 font-medium">
                © 2026 FARE
            </span>

        </footer>
    );
}
