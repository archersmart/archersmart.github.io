import productionVideo from "@/assets/production.mp4";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] lg:w-[780px] lg:h-[550px]">
      <div className="relative w-full h-full rounded-[0.5rem] bg-slate-900/90 border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.65)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/8 via-transparent to-slate-950/40" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <span className="h-1.5 w-10 rounded-full bg-slate-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500/50" />
        </div>
        <video
          src={productionVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};
