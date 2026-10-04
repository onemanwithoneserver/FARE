import { homeData } from "./data";
export default function HomeMobile() {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase mb-2">
        Mobile View
      </div>
      <h2 className="text-[#0B1D3A] text-4xl font-extrabold tracking-tight">
        {homeData.title}
      </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
      <p className="mt-3 text-sm text-slate-500">{homeData.description}</p>
    </div>
  );
}
