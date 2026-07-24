import { Link } from 'wouter';
import { AlertTriangle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Emergency Disclaimer Banner */}
        <div className="glass-card bg-red-950/20 border border-red-500/30 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-serif-editorial text-xl text-white mb-1">Important Safety Disclaimer</h3>
            <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
              Mann Saathi provides supportive care and psychoeducation grounded in CBT principles, but is not a replacement for professional clinical therapy. If you are experiencing immediate crisis or thoughts of self-harm, please connect with official emergency services immediately:
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <a href="tel:14416" className="text-purple-400 hover:underline flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5" /> Tele-MANAS: 14416 / 1800-891
              </a>
              <a href="tel:9152987821" className="text-cyan-400 hover:underline flex items-center gap-1.5 font-semibold">
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
            <Link href="/" className="font-serif-editorial text-3xl text-white block">
              Mann Saathi
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Democratizing accessible, privacy-first mental healthcare across India using Google's Gemma open model series.
            </p>
          </div>

          <div>
            <h5 className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">PLATFORM NAV</h5>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-sans">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">AI Companion Demo</Link></li>
              <li><Link href="/blueprint" className="hover:text-white transition-colors">Technical Blueprint</Link></li>
              <li><Link href="/architecture" className="hover:text-white transition-colors">On-Device Architecture</Link></li>
              <li><Link href="/personas" className="hover:text-white transition-colors">Target Personas</Link></li>
              <li><Link href="/pitch" className="hover:text-white transition-colors">Investor Pitch Deck</Link></li>
              <li><Link href="/roadmap" className="hover:text-white transition-colors">Feature Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">CRISIS HELPLINES</h5>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-sans">
              <li className="text-purple-400 font-medium">Tele-MANAS: 14416 / 1800-891</li>
              <li className="text-cyan-400 font-medium">Vandrevala Foundation: +91 9999 666 555</li>
              <li className="text-emerald-400 font-medium">NIMHANS Helpline: 080-26995000</li>
              <li className="text-neutral-400">KIRAN: 1800-599-0019</li>
              <li className="text-neutral-400">National Emergency: 112</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">SYSTEM STATUS</h5>
            <div className="glass-card p-4 rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-white">All Systems Operational</span>
              </div>
              <p className="text-[11px] text-neutral-500">Google Gemma Model Engine running with 100% privacy & sub-100ms latency.</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-sans gap-4">
          <div>© {new Date().getFullYear()} Mind Care India (Mann Saathi). Open Source Apache 2.0.</div>
          <div className="flex items-center gap-6">
            <span>Privacy First</span>
            <span>Zero Data Leakage</span>
            <span>Google Gemma Powered</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
