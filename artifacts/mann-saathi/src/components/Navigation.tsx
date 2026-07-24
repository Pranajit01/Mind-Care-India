import { Link, useLocation } from 'wouter';
import { Brain, ArrowRight, Menu, X, Sparkles, BookOpen, Heart, Shield, Cpu, Code2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [location] = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Essential consolidated navigation links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'AI Companion' },
    { href: '/blueprint', label: 'Gemma Tech System' },
  ];

  return (
    <>
      <nav className="sticky top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-4xl z-50 mx-auto rounded-full glass-pill p-2 px-3 sm:px-5 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0052cc] via-[#ff6b4a] to-[#ff2f3a] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(255,107,74,0.5)]">
            <div className="w-full h-full bg-[#07080a] rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-[#ff6b4a] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-sans font-bold text-lg text-white tracking-tight">
            Mann Saathi
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Right Side Actions: Sleek CTA + Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/demo"
            className="hidden sm:inline-flex glass-nav-btn bg-gradient-to-r from-[#ff6b4a] to-[#ff2f3a] text-white border-[#ff6b4a]/60 hover:border-white shadow-[0_0_15px_rgba(255,107,74,0.4)] flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Try AI</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Universal Hamburger Drawer Toggle (Desktop & Mobile) */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="glass-nav-btn p-2 rounded-full text-neutral-300 hover:text-white border-white/15"
            aria-label="Open System Menu & Guide Drawer"
            title="System Info & Guide Drawer"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Slide-Over Drawer Modal Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative w-full max-w-md bg-[#07080a] border-l border-white/15 h-full overflow-y-auto z-10 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <Brain className="w-5 h-5 text-[#ff6b4a]" />
                  <span className="font-bold text-lg text-white">Mann Saathi Guide</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links inside Drawer */}
              <div className="space-y-2 mb-8">
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Navigation Shortcuts
                </div>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all ${
                      location === link.href
                        ? 'bg-white/10 text-white border-[#ff6b4a]/60 shadow-[0_0_15px_rgba(255,107,74,0.3)]'
                        : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                ))}
              </div>

              {/* Drawer Section 1: How to Visit & Try the AI */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff6b4a]">
                  <BookOpen className="w-4 h-4" />
                  <span>How to Use & Try AI</span>
                </div>
                <div className="glass-card p-4 rounded-xl space-y-2 text-xs text-neutral-300 leading-relaxed font-normal">
                  <p>
                    <strong className="text-white">1. Start Interactive Session:</strong> Click "Try AI" or navigate to the AI Companion demo.
                  </p>
                  <p>
                    <strong className="text-white">2. Select Indic Language:</strong> Choose Hindi, Bengali, Tamil, Hinglish, or 8+ supported regional dialects.
                  </p>
                  <p>
                    <strong className="text-white">3. Real-Time Crisis Triage:</strong> Messages are continuously evaluated for distress levels with automatic 1-tap emergency helpline connections.
                  </p>
                </div>
              </div>

              {/* Drawer Section 2: Citizen Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
                  <Heart className="w-4 h-4" />
                  <span>Key Citizen Benefits</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="glass-card p-3 rounded-xl">
                    <Shield className="w-4 h-4 text-teal-400 mb-1" />
                    <div className="font-semibold text-white">100% On-Device</div>
                    <div className="text-[11px] text-neutral-400">Zero data leakage</div>
                  </div>
                  <div className="glass-card p-3 rounded-xl">
                    <Cpu className="w-4 h-4 text-[#ffb347] mb-1" />
                    <div className="font-semibold text-white">Sub-100ms</div>
                    <div className="text-[11px] text-neutral-400">Local INT4 latency</div>
                  </div>
                </div>
              </div>

              {/* Drawer Section 3: Tech Architecture & Gemma Integration */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffb347]">
                  <Code2 className="w-4 h-4" />
                  <span>Google Gemma Integration</span>
                </div>
                <div className="glass-card p-4 rounded-xl text-xs text-neutral-300 space-y-2">
                  <p>
                    Mann Saathi executes Google's compact <strong className="text-white">Gemma Open Model</strong> via INT4 quantization, paired with an IndicBERT safety classifier for sub-50ms distress evaluation.
                  </p>
                  <Link
                    href="/blueprint"
                    onClick={() => setDrawerOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#ff6b4a] font-semibold hover:underline pt-1"
                  >
                    <span>Explore Gemma Tech System Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer inside Drawer */}
            <div className="pt-6 border-t border-white/10">
              <Link
                href="/demo"
                onClick={() => setDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0052cc] via-[#ff6b4a] to-[#ff2f3a] text-white font-semibold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,74,0.5)]"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Launch Interactive Companion</span>
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
