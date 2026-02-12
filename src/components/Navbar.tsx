import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 p-2 font-liquid text-gray-900">
      <div className="max-w-xl w-full mx-auto p-2 flex justify-between items-center border border-white/50 bg-white/20 backdrop-blur-md rounded-3xl shadow-sm">

        <Link to="/" className="flex items-center gap-2 group pl-2">
          <img
            src="/icons/favicon.svg"
            alt="logo"
            className="h-6 md:h-8 w-auto group-hover:scale-110 transition-transform duration-200"
          />
          <span className="-mb-1 text-2xl md:text-3xl tracking-tight">
            Chatar
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white px-5 py-2 rounded-2xl hover:bg-gray-50 active:scale-95 transition-all cursor-pointer text-sm border border-gray-100 shadow-sm">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-white px-5 py-2 rounded-2xl hover:bg-gray-50 active:scale-95 transition-all cursor-pointer text-sm border border-gray-100 shadow-sm">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                }
              }}
            />

            <div className="flex items-center gap-2 bg-white/45 px-2 py-1 rounded-full border border-white/40">
              <span className="hidden sm:block text-xs font-medium text-gray-800">
                Start Chating
              </span>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}