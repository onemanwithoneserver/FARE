import { profileData } from "../profileData";
import { Play } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">See the Trainer in Action</h2>
        
        <div className="grid grid-cols-4 gap-6">
          {data.videos.map((video, idx) => (
            <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
              <div className={`relative aspect-video rounded-lg flex items-center justify-center ${video.thumbnail === 'navy' ? 'bg-[#0B1D3A]' : 'bg-[#e2e8f0]'}`}>
                {video.thumbnail === 'navy' ? (
                  <div className="w-12 h-12 rounded-full bg-[#C99A2E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-[#0B1D3A] fill-current ml-1" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-blue-500 fill-current ml-1" />
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {video.duration}
                </div>
                {video.thumbnail === 'navy' && (
                  <div className="absolute top-2 left-2 bg-[#C99A2E] text-[#0B1D3A] text-[10px] font-bold px-2 py-0.5 rounded">
                    NEW
                  </div>
                )}
              </div>
              <h4 className="text-sm font-bold text-[#0B1D3A] group-hover:text-blue-600 transition-colors">{video.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
