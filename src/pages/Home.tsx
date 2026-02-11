import { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {

  return (
    <div className="bg-lime-400 text-black p-2">
      <div className="w-full min-h-screen bg-lime-300 rounded-2xl overflow-hidden relative">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}