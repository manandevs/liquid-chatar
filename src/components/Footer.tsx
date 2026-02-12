import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full px-2 pb-2 font-liquid">
      <div className="max-w-7xl mx-auto bg-black text-lime-300 rounded-[2rem] p-8 md:p-12 overflow-hidden relative">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-lime-400 rounded-full animate-bounce"></div>
                <span className="text-3xl font-bold tracking-tight text-white">Chatar</span>
             </div>
             <p className="text-gray-400 max-w-xs">
               The fluid way to connect. Built for speed, designed for humans.
             </p>
          </div>

          {/* Simple Links */}
          <div className="flex gap-8 text-sm font-medium text-white/80">
            <Link to="#" className="hover:text-lime-400 transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-lime-400 transition-colors">Twitter</Link>
            <Link to="#" className="hover:text-lime-400 transition-colors">Github</Link>
            <Link to="#" className="hover:text-lime-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Big Text Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left flex justify-between items-end">
           <span className="text-[12vw] leading-none font-bold text-white/5 select-none pointer-events-none absolute bottom-[-20px] left-0">
             LIQUID
           </span>
           <span className="relative z-10 text-xs text-gray-500">© 2024 Chatar Inc. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}