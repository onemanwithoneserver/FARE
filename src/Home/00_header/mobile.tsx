
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    return (
        <header className="w-full bg-white h-[60px] px-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
            <div className="flex items-center cursor-pointer">
                <img src={logo} alt="FARE Logo" className="h-6 w-auto" />
            </div>

            <button className="p-2 text-[#0A1128]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}
