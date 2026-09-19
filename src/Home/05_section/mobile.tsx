import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    return (
        <footer className="w-full bg-[#111] text-white py-12 px-6 border-t border-[#333] font-['Inter',sans-serif]">
            <div className="w-full flex flex-col gap-10">
                
                {/* Brand & Copyright */}
                <div className="flex flex-col gap-5">
                    <img src={logo} alt="FARE Logo" className="h-8 w-auto brightness-0 invert opacity-90" />
                    <p className="text-[13px] text-[#888] leading-relaxed">
                        The finishing academy for real estate professionals. Built to elevate industry standards.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#555] uppercase">Platform</span>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">For Companies</a>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">For Trainers</a>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">For Professionals</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#555] uppercase">Company</span>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">About Us</a>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">Contact</a>
                        <a href="#" className="text-[13px] text-[#aaa] hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#333]">
                    <div className="text-[12px] text-[#666] font-medium text-center">
                        © {new Date().getFullYear()} FARE. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
