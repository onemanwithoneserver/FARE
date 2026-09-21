import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    const handleNavigation = (path?: string) => {
        if (!path) return;
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer 
            className="w-full text-white py-2.5 px-8 lg:px-12 font-['Outfit'] relative overflow-hidden" 
            style={{ 
                background: '#040C1E', 
                borderTop: '1px solid rgba(255, 255, 255, 0.05)' 
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

            <div className="max-w-[1320px] w-full mx-auto flex justify-between items-center relative z-10 gap-4 min-h-[50px]">
                <div 
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-6 cursor-pointer shrink-0"
                >
                    <img 
                        src={logo} 
                        alt="FARE Logo" 
                        className="h-[44px] w-auto brightness-0 invert opacity-90 transition-all duration-300 hover:scale-[1.02] hover:opacity-100" 
                    />
                    <span className="text-[12px] font-medium text-white/50 hidden sm:inline-block border-l border-white/10 pl-6">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </div>
                <div className="flex items-center gap-6 lg:gap-8 flex-wrap justify-end">
                    {data.navLinks.map((link, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleNavigation(link.path)}
                            className="relative group text-[12px] font-medium text-white/60 hover:text-[#E2C068] transition-all duration-300 border-b border-dotted border-white/30 pb-[1px] cursor-pointer whitespace-nowrap"
                        >
                            {link.label}
                            <span className="absolute -bottom-[1px] left-0 w-0 h-[1px] bg-[#E2C068] transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
}
