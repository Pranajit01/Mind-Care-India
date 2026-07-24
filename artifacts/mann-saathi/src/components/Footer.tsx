import { Link } from 'wouter';
import { AlertTriangle, Phone, Brain, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#07080a] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Emergency Safety Disclaimer Banner */}
        <div className="glass-card bg-[#ff2f3a]/5 border border-[#ff2f3a]/30 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-[#ff2f3a] shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-sans font-bold text-lg text-white mb-1">Important Safety Disclaimer</h3>
            <p className="text-xs text-neutral-300 mb-3 leading-relaxed font-normal">
              Mann Saathi provides supportive care and psychoeducation grounded in CBT principles, but is not a replacement for professional clinical therapy. If you are experiencing immediate crisis or thoughts of self-harm, please connect with official emergency services immediately:
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <a href="tel:14416" className="text-[#ff6b4a] hover:underline flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5" /> Tele-MANAS: 14416 / 1800-891
              </a>
              <a href="tel:9152987821" className="text-amber-300 hover:underline flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5" /> Vandrevala Foundation: +91 9999 666 555
              </a>
              <a href="tel:08026995000" className="text-emerald-400 hover:underline flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5" /> NIMHANS Helpline: 080-26995000
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <Brain className="w-6 h-6 text-[#ff6b4a]" />
              <span className="font-sans font-bold text-2xl text-white tracking-tight">
                Mann Saathi
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Democratizing accessible, privacy-first mental healthcare across India using Google's Gemma open model series.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4">SYSTEM NAV</h5>
            <ul className="space-y-2 text-xs text-neutral-300 font-normal">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">AI Companion Demo</Link></li>
              <li><Link href="/blueprint" className="hover:text-white transition-colors">Gemma Tech System</Link></li>
              <li><Link href="/pitch" className="hover:text-white transition-colors">Investor Pitch Deck</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4">CRISIS HELPLINES</h5>
            <ul className="space-y-2 text-xs font-mono">
              <li className="text-[#ff6b4a]">Tele-MANAS: 14416 / 1800-891</li>
              <li className="text-amber-300">Vandrevala Foundation: +91 9999 666 555</li>
              <li className="text-emerald-400">NIMHANS Helpline: 080-26995000</li>
              <li className="text-neutral-400">National Emergency: 112</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4">SYSTEM STATUS</h5>
            <div className="glass-card p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">System Operational</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-normal">Google Gemma Open Engine running with 100% privacy & sub-100ms latency.</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-normal gap-4">
          <div>© {new Date().getFullYear()} Mind Care India (Mann Saathi). Open Source Apache 2.0.</div>
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase">
            <span>Privacy First</span>
            <span>Zero Data Leakage</span>
            <span>Google Gemma Powered</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
