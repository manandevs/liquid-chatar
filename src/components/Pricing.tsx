import { SignedOut, SignInButton, PricingTable } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section className="w-full px-2 py-4 font-liquid text-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-4xl md:text-6xl font-bold">Flow Plans</h2>
          <p className="text-gray-600 text-lg">Choose the liquidity that fits your needs.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <PricingTable
            appearance={{
              elements: {
                card: {
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  borderRadius: '2rem',
                },
              }
            }}
            fallback={<div className="text-center text-gray-600">Loading Flow Plans...</div>}
            for="user"
          />
        </div>

        {/*
          IMPORTANT:
          You will likely remove your custom pricing cards now that you're using <PricingTable />.
          The commented-out section below is your original custom UI.
          If you want to keep elements like the "Start Free" button for non-signed-in users,
          you'll need to decide how to integrate that logic, or rely on Clerk's component
          to handle sign-in prompts if a user tries to subscribe while signed out.
        */}

        {/* Original custom pricing cards (commented out or removed) */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative hover:bg-white/50 transition-colors duration-300">
            <div>
              <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-gray-600">
                Starter
              </div>
              <h3 className="text-5xl font-bold mb-2">$0</h3>
              <p className="text-gray-600 mb-8">Perfect for dipping your toes in.</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited Messages', '5 Group Chats', '100MB File Sharing', 'Standard Support'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full py-4 bg-white rounded-2xl font-bold text-black border border-white/50 shadow-sm hover:scale-[1.02] active:scale-95 transition-all">
                  Start Free
                </button>
              </SignInButton>
            </SignedOut>
            <button className="w-full py-4 bg-white rounded-2xl font-bold text-black border border-white/50 shadow-sm hover:scale-[1.02] active:scale-95 transition-all hidden">
              Current Plan
            </button>
          </div>

          <div className="bg-black text-white border border-gray-800 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-block px-3 py-1 bg-lime-400 text-black rounded-full text-xs font-bold uppercase tracking-wider">
                  Pro Liquid
                </div>
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Most Popular</span>
              </div>
              <h3 className="text-5xl font-bold mb-2">
                $9<span className="text-2xl text-gray-400 font-normal">/mo</span>
              </h3>
              <p className="text-gray-400 mb-8">Unleash the full flow. No limits.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited Everything',
                  '4K Media Uploads',
                  'Custom Chat Themes',
                  'Priority "Liquid" Support',
                  'Early Access to Features'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={"/payment-getted"}>
              <button className="relative z-10 w-full py-4 bg-lime-400 text-black rounded-2xl font-bold hover:bg-lime-300 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                Go Pro
              </button>
            </Link>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}