import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    return (
        <footer className="w-full bg-[#050914] py-12 px-6 flex flex-col font-sans border-t border-white/5 items-center text-center">
            
            <div className="flex flex-col items-center gap-4 mb-10">
                <img src={logo} alt="FARE Logo" className="h-6 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                <span className="text-slate-500 text-xs font-medium">
                    Finishing Academy for Real Estate
                </span>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 w-full max-w-[300px]">
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

        </footer>
    );
}
