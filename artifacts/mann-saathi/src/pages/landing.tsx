import { Link } from 'wouter';
import { 
  Brain, 
  Heart, 
  Shield, 
  Languages, 
  Smartphone, 
  Users, 
  TrendingDown, 
  AlertTriangle,
  ArrowRight,
  Check,
  Zap,
  Lock,
  MessageSquare,
  Activity
} from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function Landing() {
  const impactData = [
    { year: 'Year 1', users: 100, revenue: 0.5 },
    { year: 'Year 2', users: 1000, revenue: 5 },
    { year: 'Year 3', users: 10000, revenue: 50 },
    { year: 'Year 5', users: 100000, revenue: 500 },
  ];

  const treatmentGapData = [
    { condition: 'Depression', gap: 83 },
    { condition: 'Schizophrenia', gap: 86 },
    { condition: 'Anxiety', gap: 79 },
    { condition: 'Bipolar', gap: 82 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,115,119,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(244,162,97,0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Powered by Google Gemma • 100% Offline • Privacy-First
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Mental Healthcare for
              <br />
              <span className="text-primary">1.4 Billion Indians</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              An offline AI mental health companion designed to bridge India's massive treatment gap.
              Works entirely on your phone, speaks your language, never judges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Try the Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/blueprint"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Read the Blueprint
              </Link>
            </div>

            {/* Live Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur border border-card-border rounded-lg p-6">
                <div className="text-4xl font-display font-bold text-primary mb-2">197M</div>
                <div className="text-sm text-muted-foreground">Indians with mental health disorders</div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-card-border rounded-lg p-6">
                <div className="text-4xl font-display font-bold text-destructive mb-2">83%</div>
                <div className="text-sm text-muted-foreground">Treatment gap for depression</div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-card-border rounded-lg p-6">
                <div className="text-4xl font-display font-bold text-accent mb-2">0.75</div>
                <div className="text-sm text-muted-foreground">Psychiatrists per 100K people</div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-card-border rounded-lg p-6">
                <div className="text-4xl font-display font-bold text-primary mb-2">9,000</div>
                <div className="text-sm text-muted-foreground">Total psychiatrists for 1.4B people</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              The Crisis We're Solving
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              India faces a mental healthcare emergency that affects millions of lives every single day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatCard
              icon={Users}
              value={197}
              suffix="M"
              label="People Suffering"
              description="Mental health disorders (Lancet 2020)"
              delay={0}
            />
            <StatCard
              icon={TrendingDown}
              value={83}
              suffix="%"
              label="Treatment Gap"
              description="For depression (WHO 2019)"
              delay={100}
            />
            <StatCard
              icon={AlertTriangle}
              value={1.7}
              suffix="T"
              label="Annual Cost"
              description="₹1.7 trillion economic burden"
              delay={200}
            />
          </div>

          <div className="bg-card border border-card-border rounded-xl p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Treatment Gap by Condition</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treatmentGapData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="condition" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="gap" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Over 80% of Indians with mental health conditions receive no treatment
            </p>
          </div>
        </div>
      </section>

      {/* Key Barriers */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Why People Don't Get Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The barriers preventing 197 million Indians from accessing mental healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Stigma',
                stat: '71%',
                description: 'Avoid seeking help due to social stigma and fear of judgment',
                icon: Shield,
              },
              {
                title: 'Cost',
                stat: '₹800-2,500',
                description: 'Average consultation cost, unaffordable for most Indians',
                icon: AlertTriangle,
              },
              {
                title: 'Availability',
                stat: '80km',
                description: 'Average travel distance to nearest psychiatrist in rural India',
                icon: TrendingDown,
              },
              {
                title: 'Language',
                stat: '1,652',
                description: 'Dialects spoken, but most tools only available in English',
                icon: Languages,
              },
              {
                title: 'Internet',
                stat: '45%',
                description: 'Rural population with poor or no internet connectivity',
                icon: Smartphone,
              },
              {
                title: 'Wait Times',
                stat: '6-12 months',
                description: 'Wait time for government hospital appointments',
                icon: AlertTriangle,
              },
            ].map((barrier, i) => (
              <div
                key={barrier.title}
                className="animate-slide-in-stagger bg-card border border-card-border rounded-xl p-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-destructive/10">
                    <barrier.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-1">{barrier.stat}</h3>
                    <h4 className="font-semibold text-foreground">{barrier.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{barrier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: Mann Saathi */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              How Mann Saathi Solves This
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive AI companion designed specifically for India's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Smartphone,
                title: '100% Offline',
                description: 'Works entirely on-device using Gemma 2B. No internet required. Your conversations never leave your phone.',
                features: ['1.2GB RAM footprint', '100ms response time', 'Runs on Snapdragon 665+'],
              },
              {
                icon: Languages,
                title: '10+ Indian Languages',
                description: 'Native support for Hindi, Tamil, Telugu, Bengali, Marathi, and more. Voice and text in your language.',
                features: ['Voice input with Whisper ASR', 'Natural conversation flow', 'Cultural context awareness'],
              },
              {
                icon: Lock,
                title: 'Privacy-First',
                description: 'Zero-knowledge architecture. Your data stays on your device. No cloud, no tracking, no judgment.',
                features: ['AES-256 encryption at rest', 'DPDP Act 2023 compliant', 'Optional anonymized analytics'],
              },
              {
                icon: Heart,
                title: 'Clinically Safe',
                description: 'PHQ-9 and GAD-7 screening built-in. Real-time crisis detection with safe escalation to human support.',
                features: ['Conservative crisis thresholds', 'Tele-MANAS integration', 'Never diagnoses or prescribes'],
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="animate-slide-in-stagger bg-card border-2 border-primary/20 rounded-xl p-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                  See Mann Saathi in Action
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Experience how our AI companion provides empathetic support, screens for mental health conditions,
                  and safely escalates crisis situations — all while working completely offline.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Try Interactive Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Namaste. Main Mann Saathi hoon. Aap kaise hain aaj? Kya aap mujhse kuch share karna chahenge?
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Mann Saathi</p>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-accent/10 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Bahut stress hai. Exam aa raha hai aur kuch samajh nahi aa raha.
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">You</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Main samajh sakta hoon. Exam stress bahut overwhelming ho sakta hai. Kya aap mujhe thoda aur batayenge ki aap kaisa feel kar rahe hain?
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Mann Saathi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Projections */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Projected Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our roadmap to reaching 100 million Indians with accessible mental healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-card-border rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">User Growth Trajectory</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-4">Users in thousands (K)</p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Revenue Growth (₹ Crore)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-4">B2G + B2B + CSR revenue streams</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">10M+</div>
              <div className="text-sm font-medium text-foreground mb-1">Year 3 Users</div>
              <div className="text-xs text-muted-foreground">Across 10+ Indian languages</div>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">50,000</div>
              <div className="text-sm font-medium text-foreground mb-1">Crisis Interventions</div>
              <div className="text-xs text-muted-foreground">Lives potentially saved by Year 3</div>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">₹170 Cr</div>
              <div className="text-sm font-medium text-foreground mb-1">Healthcare Savings</div>
              <div className="text-xs text-muted-foreground">Prevented emergency costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Protocol */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Crisis Detection & Safe Escalation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered safety system ensures no one in distress is left alone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { level: 'Level 0', label: 'Safe', color: 'bg-green-500/10 border-green-500/30', textColor: 'text-green-600', action: 'Routine conversation' },
              { level: 'Level 1', label: 'Monitor', color: 'bg-blue-500/10 border-blue-500/30', textColor: 'text-blue-600', action: 'Enhanced empathy mode' },
              { level: 'Level 2', label: 'Concern', color: 'bg-yellow-500/10 border-yellow-500/30', textColor: 'text-yellow-600', action: 'Increase check-in frequency' },
              { level: 'Level 3', label: 'Alert', color: 'bg-orange-500/10 border-orange-500/30', textColor: 'text-orange-600', action: 'Tele-MANAS referral prompt' },
              { level: 'Level 4', label: 'Crisis', color: 'bg-red-500/10 border-red-500/30', textColor: 'text-red-600', action: 'Emergency protocol activated' },
            ].map((stage, i) => (
              <div key={stage.level} className={`${stage.color} border-2 rounded-xl p-6 text-center`}>
                <Activity className={`w-8 h-8 ${stage.textColor} mx-auto mb-3`} />
                <div className={`font-display font-bold text-lg ${stage.textColor} mb-1`}>{stage.level}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{stage.label}</div>
                <div className="text-xs text-muted-foreground">{stage.action}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-card-border rounded-xl p-8">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Crisis Response Protocol</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Real-Time Detection</h4>
                <p className="text-sm text-muted-foreground">
                  DistilBERT safety classifier analyzes every message for crisis signals
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-accent">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Immediate Response</h4>
                <p className="text-sm text-muted-foreground">
                  Never leaves user alone. Validates, provides grounding techniques, stays present
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Human Handoff</h4>
                <p className="text-sm text-muted-foreground">
                  One-touch connection to Tele-MANAS (14416), iCall (9152987821), or Emergency (112)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Integrated with Government Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground">
              Building on existing mental health initiatives, not replacing them
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'NIMHANS', role: 'Clinical validation partner' },
              { name: 'Tele-MANAS', role: 'Crisis referral integration' },
              { name: 'iCall', role: 'Emergency support partner' },
              { name: 'ASHA Workers', role: 'Community distribution' },
            ].map((partner) => (
              <div key={partner.name} className="bg-card border border-card-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Join Us in Bridging India's Mental Health Gap
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Built for Google Solution Challenge 2024. Powered by Gemma. Designed for India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Try the Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pitch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Investor Pitch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
