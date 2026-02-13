export default function Features() {
  return (
    <section className="w-full px-2 font-liquid text-black">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: Speed */}
        <div className="md:col-span-2 bg-white border border-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-300 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Instant Flow.</h2>
          <p className="text-xl text-gray-600 max-w-sm relative z-10">
            Messages delivered faster than you can blink. Zero latency, 100% fluid.
          </p>
          {/* Abstract Graphic */}
          <div className="mt-8 flex gap-3">
             <div className="h-12 w-32 bg-gray-100 rounded-full animate-pulse"></div>
             <div className="h-12 w-12 bg-lime-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Card 2: Security */}
        <div className="bg-white/20 backdrop-blur-sm border border-white/50 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute bottom-[-20px] right-[-20px] text-9xl opacity-10 rotate-12">🔒</div>
          <div>
            <h2 className="text-4xl font-bold mb-2">Secure.</h2>
            <p className="text-gray-800">End-to-end encryption that feels invisible.</p>
          </div>
          <div className="mt-8 bg-white/40 p-4 rounded-xl border border-white/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               <span className="text-xs font-bold uppercase tracking-wider">Protected</span>
            </div>
          </div>
        </div>

        {/* Card 3: Media */}
        <div className="bg-gray-900 text-white border border-gray-800 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
           <h2 className="text-4xl font-bold mb-4">Media Rich.</h2>
           <p className="text-gray-400 mb-6">Share your world in high definition.</p>
           
           {/* Abstract Floating Images */}
           <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-xl rotate-12 border-2 border-gray-900 z-10"></div>
           <div className="absolute bottom-8 -right-8 w-24 h-24 bg-lime-400 rounded-xl -rotate-12 border-2 border-gray-900"></div>
        </div>

        {/* Card 4: Community */}
        <div className="md:col-span-2 bg-white border border-white rounded-[2rem] p-8 md:p-10 flex items-center justify-between overflow-hidden relative">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Open Source.</h2>
              <p className="text-xl text-gray-600">Built by the community, for the community.</p>
           </div>
           <div className="hidden md:flex gap-2 absolute right-8 opacity-50">
              {[1,2,3].map((i) => (
                <div key={i} className={`w-16 h-48 bg-gray-100 rounded-full transform ${i%2===0 ? 'translate-y-4' : '-translate-y-4'}`}></div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}