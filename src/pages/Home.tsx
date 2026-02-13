import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ"; // Import New Section
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/clerk-react";

function UserProfile() {
  const { user } = useUser();
  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || "",
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 z-[99]">
      {userData && (
        <div>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {

  return (
    <div className="bg-lime-400 text-black p-2">
      <div className="w-full min-h-screen bg-lime-300 rounded-2xl overflow-hidden relative pb-2">
        <Navbar />
        <UserProfile />
        
        <div className="flex flex-col gap-4">
          <Hero />
          <Features />
          <Stats />
          <Pricing />
          <FAQ />
          <Testimonials />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}