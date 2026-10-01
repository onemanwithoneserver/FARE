import { profileData } from "../profileData";
import { Video, Building2, Layers, PlayCircle } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'video': return <Video size={20} />;
      case 'building': return <Building2 size={20} />;
      case 'blend': return <Layers size={20} />;
      case 'play': return <PlayCircle size={20} />;
      default: return <Video size={20} />;
    }
  };

  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Training Delivery</h2>
        
        <div className="grid grid-cols-4 gap-4 mb-8">
          {data.delivery.modes.map((mode, idx) => (
            <div key={idx} className={`bg-white border rounded-lg p-5 flex flex-col ${mode.disabled ? 'opacity-50 border-gray-100 bg-gray-50' : 'border-gray-200 shadow-sm'}`}>
              <div className={`mb-3 ${mode.disabled ? 'text-gray-400' : 'text-blue-500'}`}>
                {getIcon(mode.icon)}
              </div>
              <h4 className="text-sm font-bold text-[#0B1D3A] mb-2">{mode.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{mode.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Training Formats</h4>
            <div className="flex flex-wrap gap-2">
              {data.delivery.formats.map((fmt, idx) => (
                <span key={idx} className="bg-white text-xs font-medium text-gray-600 px-3 py-1.5 rounded border border-gray-300">
                  {fmt}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Training Durations</h4>
            <div className="flex flex-wrap gap-2">
              {data.delivery.durations.map((dur, idx) => (
                <span key={idx} className="bg-white text-xs font-medium text-gray-600 px-3 py-1.5 rounded border border-gray-300">
                  {dur}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
