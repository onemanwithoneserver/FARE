import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";
import posterImg from "../../assets/re_trainers_hero.jpg";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-24 px-10 font-['Outfit'] flex flex-col items-center">
      <div className="max-w-[1000px] w-full text-center mb-12">
        <h2 className="text-4xl font-black text-[#0B1D3A] mb-4">{data.title}</h2>
        <p className="text-lg text-[#475569] max-w-2xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="w-full max-w-[1000px] aspect-video relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,29,58,0.15)] group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
        <img src={posterImg} alt="Video Poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[#0B1D3A]/40 group-hover:bg-[#0B1D3A]/30 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
            <div className="w-20 h-20 bg-[#C99A2E] rounded-full flex items-center justify-center shadow-lg shadow-[#C99A2E]/40">
              <Play fill="white" className="text-white ml-2 w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded text-white font-medium tracking-wide">
          {data.duration}
        </div>
      </div>
      
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
