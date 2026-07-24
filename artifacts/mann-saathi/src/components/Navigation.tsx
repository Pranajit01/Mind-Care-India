import { Link, useLocation } from 'wouter';
import { Brain, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Consolidated essential sections as requested
  const links = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'AI Companion' },
    { href: '/blueprint', label: 'Gemma Tech System' },
  ];

  return (
    <nav className="sticky top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50 mx-auto rounded-full glass-pill p-2 px-3 sm:px-5 flex items-center justify-between">
      
      {/* Brand Logo & Name */}
      <Link href="/" className="flex items-center gap-2.5 group shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0052cc] to-[#FF4500] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(0,82,204,0.6)]">
          <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
            <Brain className="w-4 h-4 text-[#FF4500] group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <span className="font-playfair text-xl text-white tracking-tight">
          Mann Saathi
        </span>
      </Link>

      {/* Desktop Glassmorphism Buttons with Touch Switch Animation */}
      <div className="hidden md:flex items-center gap-2 sm:gap-3">
        {links.map((link) => {
          const isActive = location === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`glass-nav-btn ${isActive ? 'glass-nav-btn-active' : ''}`}
            >
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Sleek Right Side Glass CTA */}
      <div className="hidden sm:flex items-center shrink-0">
        <Link
          href="/demo"
          className="glass-nav-btn bg-gradient-to-r from-[#FF4500] to-[#DB4A2B] text-white border-[#FF4500]/50 hover:border-white shadow-[0_0_15px_rgba(255,69,0,0.5)] flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Try AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Mobile Menu Trigger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white glass-nav-btn"
        aria-label="Toggle Navigation Menu"
      >
        {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 glass-card bg-[#050505]/95 border border-white/10 rounded-2xl p-4 flex flex-col gap-2.5 shadow-2xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest transition-all ${
                location === link.href
                  ? 'bg-[#0052cc]/40 text-white border border-[#FF4500]/50'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full bg-gradient-to-r from-[#0052cc] to-[#FF4500] text-white font-semibold text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(255,69,0,0.6)]"
          >
            Try AI Companion
          </Link>
        </div>
      )}
    </nav>
  );
}
