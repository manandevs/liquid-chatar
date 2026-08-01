import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="fixed left-1/2 top-160 lg:top-130 h-96 w-190 -translate-x-1/2 rounded-[100%] border border-green-500/30 bg-[radial-gradient(closest-side,#000_82%,#10B981)] sm:h-190 sm:w-400 z-10" />

      <div className="max-w-7xl mx-auto z-20 pt-36 pb-20 min-h-175 lg:min-h-150 px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold">
          Streamline Team Communication{" "}
          <span className="bg-linear-to-r from-lime-300 via-green-300 to-emerald-200 bg-clip-text text-transparent">
            Without the Noise.
          </span>
        </h1>

        <p className="mt-4 max-w-4xl text-lg sm:text-xl">
          Replace scattered chats with one intelligent workspace. Collaborate in
          real time, automate workflows with AI, and keep every conversation,
          task, and decision organized—all in one fast, secure platform.
        </p>

        <div className="mt-6 flex gap-4">
          <Button>Get Started Free</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>

        <p className="mt-4 text-white">
          No credit card required • Free forever • Setup in under 2 minutes
        </p>
      </div>
    </section>
  );
};
