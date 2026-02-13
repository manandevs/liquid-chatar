export default function Stats() {
  return (
    <section className="w-full px-2 py-4 font-liquid text-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-lime-200/50 border border-white/40 rounded-[2rem] p-6 md:p-12 overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
            
            {/* Stat 1 */}
            <div className="relative group cursor-default">
              <h3 className="text-6xl md:text-8xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-300">
                10k<span className="text-lime-600">+</span>
              </h3>
              <p className="text-lg uppercase tracking-widest font-bold opacity-60 mt-2">Active Users</p>
            </div>

            {/* Divider (Visual) */}
            <div className="hidden md:block w-px h-24 bg-black/10 rotate-12"></div>

            {/* Stat 2 */}
            <div className="relative group cursor-default">
              <h3 className="text-6xl md:text-8xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-300 delay-75">
                0ms
              </h3>
              <p className="text-lg uppercase tracking-widest font-bold opacity-60 mt-2">Perceived Latency</p>
            </div>

            {/* Divider (Visual) */}
            <div className="hidden md:block w-px h-24 bg-black/10 rotate-12"></div>

            {/* Stat 3 */}
            <div className="relative group cursor-default">
              <h3 className="text-6xl md:text-8xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-300 delay-150">
                100<span className="text-lime-600">%</span>
              </h3>
              <p className="text-lg uppercase tracking-widest font-bold opacity-60 mt-2">Liquid Design</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}