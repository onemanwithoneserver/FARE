import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { data } from './data';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    return (
        <footer
            className="w-full text-white py-12 px-12 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
                <div className="flex flex-col gap-6 max-w-[300px]">
                    <div className="flex items-center">
                        <img src={logo} alt="FARE Logo" className="h-9 w-auto brightness-0 invert opacity-90" />
                    </div>
                    <p className="text-[13px] leading-relaxed font-medium" style={{ color: MUTED_BLUE }}>
                        {data.about}
                    </p>
                    <div className="text-[12px] font-medium mt-4" style={{ color: 'rgba(123,141,170,0.5)' }}>
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </div>
                </div>

                <div className="flex gap-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(123,141,170,0.7)' }}>Platform</span>
                        {data.platformLinks.map((link, i) => (
                            <a key={i} href={link.url} className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>{link.label}</a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(123,141,170,0.7)' }}>Company</span>
                        {data.companyLinks.map((link, i) => (
                            <a key={i} href={link.url} className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
