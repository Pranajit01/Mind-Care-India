import { Link, useLocation } from 'wouter';
import { Brain, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'Demo' },
    { href: '/blueprint', label: 'Blueprint' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/personas', label: 'Personas' },
    { href: '/pitch', label: 'Pitch Deck' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <nav className="sticky top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50 mx-auto rounded-full glass-pill p-2 px-4 sm:px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-[#F4A261] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
          <div className="w-full h-full bg-[#0B132B] rounded-full flex items-center justify-center">
            <Brain className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <span className="font-serif-editorial text-xl text-white tracking-wide">
          Mann Saathi
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-5 text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-300">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-teal-300 ${
              location === link.href ? 'text-teal-400 font-bold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Side Action Button - Soothing Primary Pill */}
      <div className="hidden sm:flex items-center gap-3">
        <Link href="/demo" className="btn-soothing-primary px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5">
          <span>Launch AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Mobile menu trigger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 glass-card bg-[#0B132B]/95 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-colors ${
                location === link.href
                  ? 'bg-teal-950/40 text-teal-300 border border-teal-500/30'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full btn-soothing-primary text-white font-semibold text-xs font-mono uppercase tracking-widest"
          >
            Launch AI Companion
          </Link>
        </div>
      )}
    </nav>
  );
}
