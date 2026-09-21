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
                background: 'linear-gradient(rgb(7, 26, 73) 0%, rgb(3, 13, 38) 100%)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)' 
            }}
        >
            <div className="max-w-[1300px] w-full mx-auto flex justify-between items-center relative z-10 min-h-[50px] gap-4">
                <div 
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-4 cursor-pointer shrink-0"
                >
                    <img 
                        src={logo} 
                        alt="FARE Logo" 
                        className="h-[44px] w-auto brightness-0 invert opacity-95 transition-transform duration-300 hover:scale-[1.02]" 
                    />
                    <span className="text-[12px] font-medium text-white/80 hidden sm:inline-block">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </div>
                <div className="flex items-center gap-3.5 lg:gap-6 flex-wrap justify-end">
                    {data.navLinks.map((link, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleNavigation(link.path)}
                            className="text-[12px] font-medium text-white/85 hover:text-[#E2C068] transition-all duration-200 border-b border-dotted border-white/30 hover:border-[#E2C068] pb-[1px] cursor-pointer whitespace-nowrap"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
}
