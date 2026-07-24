import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (savedTheme) return savedTheme;
      return document.documentElement.classList.contains('light') ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Black/White Theme"
      className="p-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-neutral-200 dark:text-white transition-all flex items-center justify-center gap-1.5 text-xs font-mono"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline text-[10px] tracking-wider uppercase">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-purple-400" />
          <span className="hidden sm:inline text-[10px] tracking-wider uppercase">Dark</span>
        </>
      )}
    </button>
  );
}
