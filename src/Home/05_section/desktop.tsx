import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    return (
        <footer className="w-full bg-[#050914] py-12 px-12 flex justify-center font-sans border-t border-white/5">
            <div className="max-w-[1400px] w-full flex items-center justify-between">
                
                <div className="flex flex-col items-start gap-4">
                    <img src={logo} alt="FARE Logo" className="h-8 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                    <span className="text-slate-500 text-sm font-medium">
                        Finishing Academy for Real Estate
                    </span>
                </div>

                <div className="flex items-center gap-8">
                    {['Platform', 'For Companies', 'For Trainers', 'Trainer Directory', 'About', 'Contact', 'Privacy', 'Terms'].map((link, idx) => (
                        <a 
                            key={idx} 
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xs font-semibold text-slate-500 hover:text-white transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}
