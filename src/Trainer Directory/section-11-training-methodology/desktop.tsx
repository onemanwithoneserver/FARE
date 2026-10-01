import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Training Methodology</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {data.methodology.tags.map((tag, idx) => (
            <span key={idx} className="bg-white text-xs font-medium text-gray-600 px-3 py-1.5 rounded border border-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-[#f8fafc] border-l-4 border-[#C99A2E] p-8 rounded-r-lg">
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                {data.methodology.quote}
              </p>
              <p className="text-[#C99A2E] font-bold text-sm">
                — {data.methodology.quoteAuthor}
              </p>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-3">
            {data.methodology.formats.map((format, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-bold text-[#0B1D3A] mb-1">{format.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{format.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
