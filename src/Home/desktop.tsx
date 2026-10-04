import { homeData } from "./data";
export default function HomeDesktop() {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-10">
      <div className="text-xs font-bold tracking-widest text-[#94a3b8] uppercase mb-4">
        Desktop View
      </div>
      <h2 className="whitespace-nowrap text-[#0B1D3A] text-5xl font-extrabold tracking-tight">
        {homeData.title}
      </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
      <p className="mt-4 text-slate-500">{homeData.description}</p>
    </div>
  );
}
