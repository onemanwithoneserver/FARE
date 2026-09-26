import { useState } from "react";
import Header from "../Home/00_header";
import Footer from "../Home/05_section";
import SidebarFilters from "./SidebarFilters";
import TrainerCard from "./TrainerCard";
import TrainerProfile from "./TrainerProfile";
import { trainersData } from "./listing_data";
import { Search } from "lucide-react";

interface TrainerDirectoryProps {
  isMobile: boolean;
}

export default function TrainerDirectory({ isMobile }: TrainerDirectoryProps) {
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);

  if (selectedTrainerId) {
    return (
      <div className="w-full flex flex-col min-h-screen bg-[#f8fafc]">
        <Header isMobile={isMobile} />
        <TrainerProfile isMobile={isMobile} onBack={() => setSelectedTrainerId(null)} trainerId={selectedTrainerId} />
        <Footer isMobile={isMobile} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col font-['Outfit']">
      <Header isMobile={isMobile} />
      
      {/* Hero Header Area */}
      <div className="w-full bg-white border-b border-[#e2e8f0] pt-12 pb-8 px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1D3A] tracking-tight mb-4 leading-tight max-w-2xl">
            Find the Right Trainer for Your Real Estate Team
          </h1>
          <p className="text-[#475569] text-base mb-8 max-w-3xl">
            Discover trainers by expertise, real estate segment, training format, delivery mode and experience.
          </p>

          <div className="relative w-full max-w-2xl mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-[#94a3b8]" />
            </div>
            <input 
              type="text" 
              placeholder="Search trainers, expertise or training areas..." 
              className="w-full pl-11 pr-4 py-3.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-[15px] text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/50 focus:border-[#C99A2E] shadow-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {["Sales", "Digital", "Communication", "Leadership", "Residential", "Plotted", "Commercial", "Workshops", "Mocks"].map(tag => (
              <button key={tag} className="px-4 py-1.5 rounded-full border border-[#cbd5e1] text-[13px] font-medium text-[#475569] hover:bg-[#0B1D3A] hover:text-white hover:border-[#0B1D3A] transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-white border-b border-[#e2e8f0] py-4 px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto w-full flex items-center gap-8 text-[13px] font-bold text-[#64748b]">
          <div><span className="text-[#0B1D3A] text-[15px] font-black mr-1">40+</span> Trainers</div>
          <div className="w-1 h-1 rounded-full bg-[#cbd5e1]"></div>
          <div><span className="text-[#0B1D3A] text-[15px] font-black mr-1">12+</span> Expertise Areas</div>
          <div className="w-1 h-1 rounded-full bg-[#cbd5e1]"></div>
          <div><span className="text-[#0B1D3A] text-[15px] font-black mr-1">4</span> RE Segments</div>
          <div className="w-1 h-1 rounded-full bg-[#cbd5e1]"></div>
          <div><span className="text-[#0B1D3A] text-[15px] font-black mr-1">9+</span> Training Formats</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-20 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        {!isMobile && (
          <SidebarFilters />
        )}

        {/* Directory Grid */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#0B1D3A] font-bold text-[15px]">6 Trainers found</h2>
            <div className="flex items-center gap-2 text-[13px] text-[#475569] font-medium">
              Sort by:
              <select className="border border-[#cbd5e1] rounded bg-white px-2 py-1 outline-none focus:border-[#C99A2E] text-[#0B1D3A] font-semibold cursor-pointer">
                <option>Relevance</option>
                <option>Experience (High to Low)</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {trainersData.map(trainer => (
              <TrainerCard 
                key={trainer.id} 
                trainer={trainer} 
                onViewProfile={() => setSelectedTrainerId(trainer.id)} 
              />
            ))}
          </div>
          
          <div className="w-full flex justify-center mt-12 mb-8">
            <button className="px-8 py-3 bg-white border border-[#cbd5e1] text-[#0B1D3A] font-bold text-[14px] rounded-lg shadow-sm hover:shadow-md transition-all hover:border-[#0B1D3A]">
              Load More Trainers
            </button>
          </div>
        </div>
      </div>

      <Footer isMobile={isMobile} />
    </div>
  );
}
