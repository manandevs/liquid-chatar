import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full px-2 py-4 font-liquid text-black">
      <div className="max-w-7xl mx-auto space-y-4">
        
        <div className="bg-white/20 backdrop-blur-sm border border-white rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-xs font-bold tracking-wide uppercase mb-4 text-gray-800">
              v1.0 is live
            </span>
            
            <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] mb-6 tracking-tight">
              Liquid <br />
              Connect.
            </h1>
            
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-md mx-auto font-medium tracking-wider">
              Experience the fluid way to chat. Real-time messaging with a design that flows.
            </p>
          </div>
        </div>

        {/* Bottom Card: Visual / Mockup */}
        <div className="bg-white border border-white rounded-[2rem] p-4 h-64 md:h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
          
          {/* Abstract Chat Bubbles */}
          <div className="absolute top-8 left-8 bg-blue-500 text-white p-4 rounded-2xl rounded-tl-none shadow-lg transform -rotate-2 max-w-[200px] z-10 border-2 border-white">
            <p className="text-xl">Hey! 👋</p>
          </div>
          
          <div className="absolute top-24 right-8 bg-gray-900 text-white p-4 rounded-2xl rounded-tr-none shadow-lg transform rotate-3 max-w-[220px] z-20 border-2 border-white">
             <p className="text-xl">Loving this design!</p>
          </div>

          <img
            src="/icons/favicon.svg"
            alt="logo"
            className="h-44 md:h-56 w-auto"
          />

          <div className="absolute bottom-12 left-12 bg-white text-gray-900 p-4 rounded-2xl rounded-bl-none shadow-lg transform -rotate-1 max-w-[200px] z-10 border border-gray-200">
             <p className="text-xl">It's so liquid... 💧</p>
          </div>

        </div>

      </div>
    </section>
  );
}