import { SignUpButton } from "@clerk/clerk-react";

export default function CallToAction() {
  return (
    <section className="w-full px-2 py-4 pb-8 font-liquid text-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-white rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden shadow-sm border border-white">
          
          {/* Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-[64px] opacity-40 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight">
              Ready to get <br />
              <span className="text-lime-500 selection:bg-black selection:text-white">Liquid?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-lg">
              Join the new wave of messaging. No clutter, just flow.
            </p>

            <SignUpButton mode="modal">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 active:scale-95 cursor-pointer">
                Get Started Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </SignUpButton>
          </div>

        </div>

      </div>
    </section>
  );
}