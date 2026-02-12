import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing"; // Import Pricing
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="bg-lime-400 text-black p-2">
      <div className="w-full min-h-screen bg-lime-300 rounded-2xl overflow-hidden relative pb-2">
        <Navbar />
        
        <div className="flex flex-col gap-4 mt-2">
          <Hero />
          <Features />
          <Stats />
          <Pricing />
          <Testimonials />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}