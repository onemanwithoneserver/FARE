import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";

export default function Desktop() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Introduction Video</h2>
        
        <div className="w-full max-w-[800px] aspect-video relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#0B1D3A] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play fill="white" className="text-white ml-1 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            01:30
          </div>
        </div>
      </div>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
