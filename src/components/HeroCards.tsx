import productionVideo from "@/assets/production.mp4";

export const HeroCards = () => {
  return (
    <div className="relative w-full rounded-2xl border border-bg-translucent-strong bg-gradient-to-b from-bg-strong to-bg-base overflow-hidden shadow-2xl">
      <div className="aspect-[16/9] relative">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg-base/60 z-10" />
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
