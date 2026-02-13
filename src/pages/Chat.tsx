import { UserButton } from "@clerk/clerk-react";
import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  // Mock data for UI visualization
  const users = [
    { id: 1, name: "Alice", online: true },
    { id: 2, name: "Bob", online: false },
    { id: 3, name: "Charlie", online: true },
  ];

  const messages = [
    { id: 1, text: "Hey! How's the new Liquid UI?", sender: "Alice", isMe: false },
    { id: 2, text: "It's flowing perfectly! 🌊", sender: "Me", isMe: true },
    { id: 3, text: "The lime green is a nice touch.", sender: "Alice", isMe: false },
  ];

  return (
    <div className="bg-lime-400 h-screen w-full p-2 font-liquid flex items-center justify-center">
      
      {/* Main Glass Container */}
      <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-[2rem] overflow-hidden flex shadow-2xl border border-white/50 relative">
        
        {/* Sidebar (Users) */}
        <aside className="w-20 md:w-80 bg-gray-50/50 border-r border-gray-100 flex flex-col justify-between p-4">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center animate-pulse">
               <img src="/icons/favicon.png" alt="logo" className="w-6 h-6" />
            </div>
            <span className="hidden md:block text-2xl font-bold tracking-tight">Chatar</span>
          </div>

          {/* User List */}
          <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 hidden md:block pl-2">
              Online Now
            </div>
            
            {users.map((user) => (
              <div key={user.id} className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-white hover:shadow-sm cursor-pointer transition-all">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-white"></div>
                  {user.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="hidden md:block">
                  <p className="font-bold text-sm text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-400 truncate w-32">
                    {user.online ? "Active now" : "Offline"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* User Profile (Bottom) */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-3 justify-center md:justify-start">
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 border-2 border-white shadow-sm"
                }
              }}
            />
            <div className="hidden md:block">
              <p className="text-xs font-bold text-gray-500">My Account</p>
            </div>
          </div>
        </aside>


        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col relative bg-white/30">
          
          {/* Chat Header */}
          <header className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <h2 className="font-bold text-gray-800">General Chat</h2>
            </div>
            <div className="text-xs font-medium px-3 py-1 bg-lime-100 text-lime-800 rounded-full">
              Live
            </div>
          </header>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-md ${msg.isMe ? "order-1" : "order-2"}`}>
                  <div 
                    className={`
                      px-6 py-3 rounded-3xl text-sm font-medium shadow-sm relative
                      ${msg.isMe 
                        ? "bg-black text-white rounded-br-none" 
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                  <span className={`text-[10px] text-gray-400 mt-1 block ${msg.isMe ? "text-right" : "text-left"}`}>
                    10:42 AM
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/80 border-t border-gray-100">
            <form 
              onSubmit={(e) => { e.preventDefault(); setMessage(""); }} 
              className="flex items-center gap-2 bg-gray-100/50 p-2 rounded-[1rem] border border-gray-200 focus-within:ring-2 focus-within:ring-lime-400 transition-all"
            >
              <button type="button" className="p-3 rounded-full hover:bg-gray-200 text-gray-500 transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
              </button>
              
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your liquid message..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400 h-10"
              />
              
              <button 
                type="submit" 
                className="p-3 bg-lime-400 rounded-full text-black hover:scale-105 active:scale-95 transition-transform shadow-sm"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </button>
            </form>
          </div>

        </main>

      </div>
    </div>
  );
}