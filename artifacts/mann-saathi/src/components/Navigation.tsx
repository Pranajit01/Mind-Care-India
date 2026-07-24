import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/blueprint', label: 'Blueprint' },
    { href: '/demo', label: 'Demo' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/personas', label: 'Personas' },
    { href: '/pitch', label: 'Pitch' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">MS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none">Mann Saathi</span>
              <span className="text-xs text-muted-foreground">Offline AI Mental Health Companion</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span>EN</span>
              <span>|</span>
              <span>हिंदी</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
