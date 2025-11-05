import Spline from '@splinetool/react-spline';
import { ArrowRight, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-[hsl(0,0%,98%)] dark:bg-[hsl(240,6%,10%)]" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.15),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            <span style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Unlock Your Potential.</span>
            <br />
            <span className="text-[hsl(265,89%,65%)]" style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Transform Education.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A powerful AI-driven platform for Indian educators and students. Automate lesson planning, master complex topics, and manage learning tasks securely and efficiently.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-[hsl(265,89%,65%)] px-6 py-3 text-white font-semibold shadow hover:brightness-110">
              Get Started <ArrowRight className="size-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-gray-800 dark:text-gray-100 border-gray-300/70 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10">
              Learn More
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt="Educator avatar"
                  width={40}
                  height={40}
                  data-ai-hint="avatar-educator"
                  className="inline-block size-10 rounded-full ring-2 ring-white dark:ring-black object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <div className="flex items-center gap-2"><Users className="size-4 text-[hsl(265,89%,65%)]" /> Trusted by over 5,000 educators</div>
              <div className="flex items-center gap-2"><Clock className="size-4 text-[hsl(265,89%,65%)]" /> Saving an average of 10+ hours per week</div>
            </div>
          </div>
        </div>

        {/* Visual - Spline */}
        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(240,6%,10%)]/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
