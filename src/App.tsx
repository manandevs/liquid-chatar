// src/App.tsx
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SignIn } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom"; // Fixed import order

function App() {
  return (
    <main>
      {/* 1. Loading State */}
      <AuthLoading>
        <div className="h-screen w-full bg-lime-400 flex flex-col items-center justify-center font-liquid gap-4">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-black font-bold text-xl animate-pulse">
            Loading Liquid...
          </p>
        </div>
      </AuthLoading>

      {/* 2. Authenticated State (Logged In) */}
      <Authenticated>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </Authenticated>

      {/* 3. Unauthenticated State (Logged Out) - THIS WAS MISSING */}
      <Unauthenticated>
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
          <SignIn />
        </div>
      </Unauthenticated>
    </main>
  );
}

export default App;