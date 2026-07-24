import { Link } from 'wouter';
import { AlertCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-display font-semibold text-foreground mb-2">Important Disclaimer</h3>
            <p className="text-sm text-foreground/80 mb-3">
              Mann Saathi is not a substitute for professional mental health care. If you are in crisis or
              experiencing thoughts of self-harm, please reach out to these services immediately:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <a
                href="tel:14416"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Tele-MANAS: 14416
              </a>
              <a
                href="tel:9152987821"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                iCall: 9152987821
              </a>
              <a
                href="tel:112"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Emergency: 112
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">MS</span>
              </div>
              <span className="font-display font-bold text-xl">Mann Saathi</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              An offline AI mental health companion designed to bridge India's massive mental healthcare
              treatment gap. Works entirely on-device with no internet required, supporting 10+ Indian languages.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/blueprint" className="block text-muted-foreground hover:text-primary transition-colors">
                Blueprint
              </Link>
              <Link href="/demo" className="block text-muted-foreground hover:text-primary transition-colors">
                Demo
              </Link>
              <Link href="/architecture" className="block text-muted-foreground hover:text-primary transition-colors">
                Architecture
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/personas" className="block text-muted-foreground hover:text-primary transition-colors">
                User Personas
              </Link>
              <Link href="/pitch" className="block text-muted-foreground hover:text-primary transition-colors">
                Investor Pitch
              </Link>
              <Link href="/roadmap" className="block text-muted-foreground hover:text-primary transition-colors">
                Roadmap
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mann Saathi. Built for Google Solution Challenge 2024.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>SDG 3: Good Health & Wellbeing</span>
            <span>Powered by Gemma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
