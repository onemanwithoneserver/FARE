import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";
import posterImg from "../../assets/re_trainers_hero.jpg";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-6 font-['Outfit'] flex flex-col items-center">
      <div className="w-full text-center mb-8">
        <h2 className="text-3xl font-black text-[#0B1D3A] mb-3">{data.title}</h2>
        <p className="text-[15px] text-[#475569]">{data.subtitle}</p>
      </div>

      <div className="w-full aspect-video relative rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(11,29,58,0.15)] group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
        <img src={posterImg} alt="Video Poster" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1D3A]/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
            <div className="w-12 h-12 bg-[#C99A2E] rounded-full flex items-center justify-center shadow-lg">
              <Play fill="white" className="text-white ml-1.5 w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium tracking-wide">
          {data.duration}
        </div>
      </div>
      
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
