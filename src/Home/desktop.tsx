import { homeData } from "./data";

export default function HomeDesktop() {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-10">
      <div className="text-xs font-bold tracking-widest text-[#94a3b8] uppercase mb-4">Desktop View</div>
      <h2 className="text-5xl font-extrabold text-[#1e293b] tracking-tight">{homeData.title}</h2>
      <p className="mt-4 text-slate-500">{homeData.description}</p>
    </div>
  );
}
