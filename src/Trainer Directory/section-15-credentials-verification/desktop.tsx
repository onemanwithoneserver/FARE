import { profileData } from "../profileData";
import { Award } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Credentials & Verification</h2>
        
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6">
          <ul className="flex flex-col gap-4">
            {data.credentials.map((cred, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Award size={20} className="text-[#C99A2E]" />
                <span className="text-gray-700 font-medium">{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
