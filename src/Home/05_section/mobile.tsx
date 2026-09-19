import { motion } from 'motion/react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { data } from './data';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-full text-white py-2 px-4 font-['Outfit'] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            <div className="w-full max-w-[460px] mx-auto flex flex-col gap-2 relative z-10 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                    <img src={logo} alt="FARE Logo" className="h-[38px] w-auto brightness-0 invert opacity-95" />
                    <span className="text-[10.5px] font-normal" style={{ color: 'rgba(123, 141, 170, 0.7)' }}>
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </div>

                <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[10.5px] pt-1 border-t border-white/[0.06]">
                    {data.links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            className="transition-all duration-200 hover:text-white border-b border-dotted border-[#7B8DAA]/60 hover:border-white pb-[1px]"
                            style={{ color: MUTED_BLUE }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.footer>
    );
}
