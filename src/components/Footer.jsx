import { BookOpen, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[hsl(265,89%,65%)]/15 grid place-content-center ring-1 ring-[hsl(265,89%,65%)]/30">
                <BookOpen className="size-5 text-[hsl(265,89%,65%)]" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Sahayak AI</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Empowering India's educators with secure, localized, and intelligent tools.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="size-9 grid place-content-center rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-gray-600 hover:text-[hsl(265,89%,65%)]"><Facebook className="size-4"/></a>
              <a href="#" aria-label="Twitter" className="size-9 grid place-content-center rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-gray-600 hover:text-[hsl(265,89%,65%)]"><Twitter className="size-4"/></a>
              <a href="#" aria-label="LinkedIn" className="size-9 grid place-content-center rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-gray-600 hover:text-[hsl(265,89%,65%)]"><Linkedin className="size-4"/></a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#about" className="hover:text-[hsl(265,89%,65%)]">About Us</a></li>
              <li><a href="#contact" className="hover:text-[hsl(265,89%,65%)]">Contact</a></li>
              <li><a href="#faq" className="hover:text-[hsl(265,89%,65%)]">FAQ</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Policy</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#terms" className="hover:text-[hsl(265,89%,65%)]">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-[hsl(265,89%,65%)]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Phone className="size-4 text-[hsl(265,89%,65%)]"/> +91-98765-43210</li>
              <li className="flex items-center gap-2"><MapPin className="size-4 text-[hsl(265,89%,65%)]"/> Bengaluru, India</li>
              <li className="flex items-center gap-2"><Mail className="size-4 text-[hsl(265,89%,65%)]"/> hello@sahayakai.in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 dark:border-white/10 py-5 text-center text-sm text-gray-600 dark:text-gray-300">© {year} Sahayak AI. All rights reserved.</div>
    </footer>
  );
}
