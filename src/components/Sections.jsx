import { Compass, Layers, Map, HelpCircle, Mail, Scan, Star, BadgeCheck, CheckCircle2 } from 'lucide-react';

function SpotlightCard({ icon: Icon, title, children }) {
  return (
    <div className="relative group rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden>
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(167,139,250,0.25),_transparent_60%)]" />
      </div>
      <div className="relative flex items-start gap-4">
        <div className="shrink-0 grid place-content-center size-11 rounded-lg bg-[hsl(265,89%,65%)]/15 ring-1 ring-[hsl(265,89%,65%)]/30 text-[hsl(265,89%,65%)]">
          <Icon className="size-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative">
      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white" style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Empowering Education, One Tool at a Time.</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Sahayak AI provides a suite of intelligent tools designed to tackle daily challenges, freeing up teachers to teach and students to learn.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotlightCard icon={Compass} title="AI Lesson Planner">Generate curriculum-aligned lesson plans in minutes with localized examples.</SpotlightCard>
          <SpotlightCard icon={Layers} title="Visual Aids Generator">Create diagrams and visual aids that simplify complex topics instantly.</SpotlightCard>
          <SpotlightCard icon={Map} title="Hyper-Local Content">Deliver content in local languages tailored to state boards and regions.</SpotlightCard>
          <SpotlightCard icon={HelpCircle} title="Quiz & Rubric Generation">Auto-generate quizzes, rubrics, and answer keys for quick assessment.</SpotlightCard>
          <SpotlightCard icon={Mail} title="Parent Communication">Craft respectful updates and reminders that parents actually read.</SpotlightCard>
          <SpotlightCard icon={Scan} title="Paper Digitizer">Turn handwritten notes and question papers into structured, searchable docs.</SpotlightCard>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white" style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>A Plan for Every Classroom.</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Choose the plan that fits your needs. Start for free and upgrade anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="rounded-2xl border border-gray-200/70 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Get started with core tools.</p>
            <div className="mt-4 text-3xl font-bold">Free</div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> 30 AI generations / month</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> Basic visual aids</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> Community support</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md border px-4 py-2 border-gray-300/70 dark:border-white/20 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10">Start Free</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-[hsl(265,89%,65%)] p-6 bg-white/80 dark:bg-white/10 shadow-lg">
            <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-[hsl(265,89%,65%)] px-2.5 py-1 text-xs font-semibold text-white shadow">Most Popular</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pro</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Advanced tools for power users.</p>
            <div className="mt-4 text-3xl font-bold">₹499<span className="text-sm font-normal text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-[hsl(265,89%,65%)]"/> Unlimited AI generations</li>
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-[hsl(265,89%,65%)]"/> Premium visual aids & digitizer</li>
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-[hsl(265,89%,65%)]"/> 50 GB secure storage</li>
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-[hsl(265,89%,65%)]"/> Priority support</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md bg-[hsl(265,89%,65%)] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110">Go Pro</a>
          </div>

          {/* Institute */}
          <div className="rounded-2xl border border-gray-200/70 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Institute</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Custom solutions for schools and colleges.</p>
            <div className="mt-4 text-3xl font-bold">Custom</div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> Centralized admin & SSO</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> Advanced analytics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[hsl(265,89%,65%)]"/> Onboarding & training</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-md border px-4 py-2 border-gray-300/70 dark:border-white/20 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white" style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Loved by Educators Across India.</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            quote: 'This saved me hours every week. My students love the visuals!',
            name: 'Neha Sharma', school: 'Kendriya Vidyalaya, Pune', img: 'https://i.pravatar.cc/80?img=6'
          }, {
            quote: 'Lesson planning is effortless now. The Hindi support is fantastic.',
            name: 'Rajesh Kumar', school: 'DAV Public School, Delhi', img: 'https://i.pravatar.cc/80?img=7'
          }, {
            quote: 'Assessments are quicker and more consistent with AI rubrics.',
            name: 'Ananya Iyer', school: 'PSBB School, Chennai', img: 'https://i.pravatar.cc/80?img=8'
          }].map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200/70 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
              <div className="flex items-center gap-1 text-[hsl(40,100%,50%)]">
                {Array.from({length:5}).map((_, idx) => <Star key={idx} className="size-4 fill-current" />)}
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-200">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.img} alt={`${t.name} avatar`} width={40} height={40} data-ai-hint="avatar-teacher" className="size-10 rounded-full object-cover ring-2 ring-white dark:ring-black" />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white" style={{fontFamily:'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Join our newsletter to stay updated.</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Get product updates, teaching resources, and case studies.</p>
        <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
          <input type="email" required placeholder="Enter your email" aria-label="Email" className="w-full rounded-md border border-gray-300/70 dark:border-white/20 bg-white/80 dark:bg-white/10 px-4 py-3 text-sm outline-none focus:ring-2 ring-[hsl(265,89%,65%)]" />
          <button className="inline-flex items-center justify-center rounded-md bg-[hsl(265,89%,65%)] px-6 py-3 text-white font-semibold shadow hover:brightness-110">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
