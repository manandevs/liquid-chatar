import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#020617,#064E3B_35%,#047857_65%,#10B981_100%)] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[calc(100%-100px)] h-[380px] w-[760px] -translate-x-1/2 rounded-[100%] border border-green-500/30 bg-[radial-gradient(closest-side,#000_82%,#10B981)] sm:h-[760px] sm:w-[1536px]" />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Streamline Team Communication
          <br />
          <span className="bg-gradient-to-r from-lime-300 via-green-300 to-emerald-200 bg-clip-text text-transparent">
            Without the Noise.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
          Replace scattered chats with one intelligent workspace. Collaborate in
          real time, automate workflows with AI, and keep every conversation,
          task, and decision organized—all in one fast, secure platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="bg-gradient-to-br from-lime-600 to-green-600 border border-green-600 text-white shadow-[inset_0_1px_1px_0_rgb(255_255_255_/_0.4),inset_0_-1px_1px_0_rgba(0,0,0,0.2)] hover:opacity-90">
            Get Started Free
          </Button>

          <Button
            variant="outline"
            className="border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15"
          >
            Watch Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/50">
          No credit card required • Free forever • Setup in under 2 minutes
        </p>
      </div>
    </section>
  );
};