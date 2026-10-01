import { MessageSquare } from "lucide-react";

export default function Desktop() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Company Feedback</h2>
        
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-16 flex flex-col items-center justify-center text-center">
          <MessageSquare size={24} className="text-purple-300 mb-3" />
          <p className="text-sm text-gray-500 font-medium">Verified company feedback will appear here as engagements are completed.</p>
        </div>

      </div>
    </section>
  );
}
