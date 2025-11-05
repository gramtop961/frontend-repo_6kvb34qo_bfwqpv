import { useState } from 'react';
import { Menu, X, BookOpen, LogIn, User, LayoutDashboard } from 'lucide-react';

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-[hsl(265,89%,55%)] dark:text-gray-300 dark:hover:text-[hsl(265,89%,70%)] transition-colors"
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // In a real app, replace with auth state
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="size-9 rounded-lg bg-[hsl(265,89%,65%)]/15 grid place-content-center ring-1 ring-[hsl(265,89%,65%)]/30">
              <BookOpen className="size-5 text-[hsl(265,89%,65%)]" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Sahayak AI</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About Us</NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 rounded-md border border-[hsl(265,89%,65%)]/30 px-4 py-2 text-sm font-medium text-[hsl(265,89%,65%)] hover:bg-[hsl(265,89%,65%)]/10"
              >
                <LayoutDashboard className="size-4" /> Dashboard
              </a>
            ) : (
              <>
                <a
                  href="#login"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300/70 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10"
                >
                  <LogIn className="size-4" /> Login
                </a>
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 rounded-md bg-[hsl(265,89%,65%)] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                >
                  <User className="size-4" /> Get Started
                </a>
              </>
            )}
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="grid gap-2">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#about">About Us</NavLink>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#login"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300/70 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                <LogIn className="size-4" /> Login
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-md bg-[hsl(265,89%,65%)] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
              >
                <User className="size-4" /> Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
