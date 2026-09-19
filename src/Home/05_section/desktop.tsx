import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    return (
        <footer
            className="w-full text-white py-12 px-12 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">

                {/* Brand & Copyright */}
                <div className="flex flex-col gap-6 max-w-[300px]">
                    <div className="flex items-center">
                        <img src={logo} alt="FARE Logo" className="h-9 w-auto brightness-0 invert opacity-90" />
                    </div>
                    <p className="text-[13px] leading-relaxed font-medium" style={{ color: MUTED_BLUE }}>
                        The finishing academy for real estate professionals. Built to elevate industry standards.
                    </p>
                    <div className="text-[12px] font-medium mt-4" style={{ color: 'rgba(123,141,170,0.5)' }}>
                        © {new Date().getFullYear()} FARE. All rights reserved.
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(123,141,170,0.7)' }}>Platform</span>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>For Companies</a>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>For Trainers</a>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>For Professionals</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(123,141,170,0.7)' }}>Company</span>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>About Us</a>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>Contact</a>
                        <a href="#" className="text-[13px] font-medium transition-colors duration-300 hover:text-white" style={{ color: MUTED_BLUE }}>Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
