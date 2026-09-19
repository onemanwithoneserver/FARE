import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    return (
        <footer className="w-full bg-[#050914] py-5 px-12 flex justify-center font-['Inter',sans-serif] border-t border-white/[0.04]">
            <div className="max-w-[1400px] w-full flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <img src={logo} alt="FARE Logo" className="h-7 w-auto brightness-0 invert opacity-70" style={{ filter: 'brightness(0) invert(1)' }} />
                    <div className="w-px h-4 bg-white/[0.08]"></div>
                    <span className="text-slate-500 text-[11px] font-medium">
                        Finishing Academy for Real Estate
                    </span>
                </div>

                <div className="flex items-center gap-7">
                    {['Platform', 'For Companies', 'For Trainers', 'Directory', 'About', 'Contact', 'Privacy', 'Terms'].map((link, idx) => (
                        <a
                            key={idx}
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[11px] font-medium text-slate-500 hover:text-slate-300 transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <span className="text-[11px] text-slate-600 font-medium">
                    © 2026 FARE
                </span>

            </div>
        </footer>
    );
}
