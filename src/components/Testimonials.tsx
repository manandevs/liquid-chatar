export default function Testimonials() {
  return (
    <section className="w-full px-2 font-liquid text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Container: Looks like a glass chat window */}
        <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-6 md:p-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">The Community Chat</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              5,400+ people online
            </div>
          </div>

          {/* Chat Stream Layout */}
          <div className="flex flex-col space-y-6 max-w-3xl mx-auto relative z-10">

            {/* Review 1: Left (Incoming Message) */}
            <div className="flex items-end gap-3 justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white flex-shrink-0"></div>
              <div className="flex flex-col gap-1 max-w-[85%] md:max-w-[70%]">
                <span className="text-xs font-bold text-gray-700 ml-2">Alex M.</span>
                <div className="bg-white p-5 rounded-3xl rounded-bl-none shadow-sm border border-white/50">
                  <p className="text-lg">Honest review? I deleted WhatsApp. The UI on Chatar is just too clean to ignore. 💧</p>
                </div>
              </div>
            </div>

            {/* Review 2: Right (Outgoing/Self Message - styled differently for contrast) */}
            <div className="flex items-end gap-3 justify-end">
              <div className="flex flex-col gap-1 items-end max-w-[85%] md:max-w-[70%]">
                <span className="text-xs font-bold text-gray-700 mr-2">Sarah J. (Designer)</span>
                <div className="bg-gray-900 text-white p-5 rounded-3xl rounded-br-none shadow-lg">
                  <p className="text-lg">As a designer, the "liquid" aesthetics are spot on. It doesn't feel like a utility, it feels like a toy (in a good way!).</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white flex-shrink-0"></div>
            </div>

            {/* Review 3: Left (Incoming Message) */}
            <div className="flex items-end gap-3 justify-start">
              <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white flex-shrink-0"></div>
              <div className="flex flex-col gap-1 max-w-[85%] md:max-w-[70%]">
                <span className="text-xs font-bold text-gray-700 ml-2">Dev_Mike</span>
                <div className="bg-white p-5 rounded-3xl rounded-bl-none shadow-sm border border-white/50">
                  <p className="text-lg">Zero latency. I don't know how you guys optimized the sockets, but it flies.</p>
                </div>
                {/* Reaction Simulation */}
                <div className="flex -mt-4 ml-4 relative z-10">
                   <div className="bg-gray-100 border border-white rounded-full px-2 py-1 text-xs shadow-sm">🔥 12</div>
                </div>
              </div>
            </div>

          </div>

          {/* Background Decor to keep the "Liquid" feel */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse delay-700"></div>

        </div>
      </div>
    </section>
  );
}