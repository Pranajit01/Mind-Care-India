import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Mann Saathi',
      subtitle: 'Offline AI Mental Health Companion for Early Screening, Emotional Support & Safe Referral',
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl font-display font-bold text-primary mb-4">Mann Saathi</div>
          <div className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Offline AI Mental Health Companion for Early Screening, Emotional Support & Safe Referral
          </div>
          <div className="text-lg text-muted-foreground mt-8">
            Bridging India's Mental Healthcare Treatment Gap
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            Built for Google Solution Challenge 2024 • Powered by Gemma
          </div>
        </div>
      ),
    },
    {
      title: 'The Problem',
      subtitle: '197 million Indians suffer from mental health disorders',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
              <div className="text-5xl font-display font-bold text-destructive mb-2">197M</div>
              <div className="text-sm text-foreground">Indians with mental health disorders</div>
            </div>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
              <div className="text-5xl font-display font-bold text-destructive mb-2">83%</div>
              <div className="text-sm text-foreground">Treatment gap for depression</div>
            </div>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
              <div className="text-5xl font-display font-bold text-destructive mb-2">0.75</div>
              <div className="text-sm text-foreground">Psychiatrists per 100,000 people</div>
            </div>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
              <div className="text-5xl font-display font-bold text-destructive mb-2">₹1.7T</div>
              <div className="text-sm text-foreground">Annual economic cost</div>
            </div>
          </div>
          <div className="text-center text-lg text-muted-foreground pt-4">
            Suicide is the leading cause of death among Indians aged 15-39
          </div>
        </div>
      ),
    },
    {
      title: 'Root Causes',
      subtitle: "Why people don't get help",
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Stigma', value: '71% avoid seeking help due to social stigma' },
            { label: 'Cost', value: '₹800-2,500 per consultation, unaffordable for most' },
            { label: 'Access', value: '80-120 km average travel to nearest psychiatrist (rural)' },
            { label: 'Language', value: '1,652 dialects, most tools only in English' },
            { label: 'Internet', value: '45% rural population has poor/no connectivity' },
            { label: 'Wait Times', value: '6-12 months for government hospital appointments' },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-display font-bold text-2xl text-primary mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'The Solution',
      subtitle: 'Mann Saathi — works offline, speaks your language, never judges',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: '100% Offline', desc: 'Works entirely on-device. No internet required.' },
              { title: '10+ Languages', desc: 'Native support for Indian languages with voice.' },
              { title: 'Privacy-First', desc: 'Zero-knowledge architecture. Data stays on device.' },
              { title: 'Crisis Detection', desc: 'Real-time safety with Tele-MANAS integration.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="font-display font-bold text-xl text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-lg text-foreground pt-4">
            Powered by Gemma 2B • Runs on budget Android phones • 100ms response time
          </div>
        </div>
      ),
    },
    {
      title: 'How It Works',
      subtitle: 'Gemma → Safety → Response → Crisis Detection',
      content: (
        <div className="space-y-4">
          {[
            { step: 1, label: 'User Input', desc: 'Voice or text in any Indian language' },
            { step: 2, label: 'Safety Check', desc: 'DistilBERT crisis detection + harmful content filter' },
            { step: 3, label: 'Gemma Inference', desc: 'Empathetic response generation with guardrails' },
            { step: 4, label: 'Risk Scoring', desc: 'Assign risk level 0-4, trigger escalation if needed' },
            { step: 5, label: 'Human Handoff', desc: 'One-touch connection to Tele-MANAS or emergency services' },
          ].map((stage) => (
            <div key={stage.step} className="flex items-start gap-4 bg-card border border-card-border rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary flex-shrink-0">
                {stage.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{stage.label}</h3>
                <p className="text-sm text-muted-foreground">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Why Now',
      subtitle: "Perfect timing for India's mental health revolution",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { year: '2022', event: 'Tele-MANAS launched', desc: '24/7 tele-mental health across 44 cells' },
            { year: '2023', event: 'DPDP Act passed', desc: 'Privacy regulations favor on-device processing' },
            { year: '2024', event: 'Gemma released', desc: 'Open-source LLM optimized for on-device use' },
            { year: '2024', event: '₹1.7T problem', desc: 'National awareness at all-time high post-pandemic' },
          ].map((milestone) => (
            <div key={milestone.year} className="bg-card border border-card-border rounded-xl p-6">
              <div className="text-3xl font-display font-bold text-accent mb-1">{milestone.year}</div>
              <h3 className="font-semibold text-foreground mb-2">{milestone.event}</h3>
              <p className="text-sm text-muted-foreground">{milestone.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Market Size',
      subtitle: 'TAM: 197M • SAM: 50M • SOM: 5M',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">197M</div>
              <div className="text-sm font-semibold text-foreground mb-1">TAM</div>
              <div className="text-xs text-muted-foreground">All Indians with mental health disorders</div>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">50M</div>
              <div className="text-sm font-semibold text-foreground mb-1">SAM</div>
              <div className="text-xs text-muted-foreground">Underserved with smartphone access</div>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">5M</div>
              <div className="text-sm font-semibold text-foreground mb-1">SOM (Year 1)</div>
              <div className="text-xs text-muted-foreground">Reachable via pilot programs</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[
                  { name: 'TAM', value: 197 },
                  { name: 'SAM', value: 50 },
                  { name: 'SOM', value: 5 },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                <Cell fill="hsl(var(--primary))" />
                <Cell fill="hsl(var(--accent))" />
                <Cell fill="hsl(var(--chart-3))" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      title: 'Competitive Advantage',
      subtitle: 'Only offline + multilingual + privacy-first + govt-integrated',
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-2 px-3 font-semibold text-foreground">Mann Saathi</th>
                  <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Tele-MANAS</th>
                  <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Wysa</th>
                  <th className="text-center py-2 px-3 font-semibold text-muted-foreground">YourDOST</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Offline', us: true, them: [false, false, false] },
                  { feature: '10+ Indian Languages', us: true, them: [true, false, false] },
                  { feature: 'Free', us: true, them: [true, false, false] },
                  { feature: 'Privacy (On-device)', us: true, them: [false, false, false] },
                  { feature: 'Crisis Detection', us: true, them: [true, false, false] },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-2 px-3 text-foreground">{row.feature}</td>
                    <td className="py-2 px-3 text-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary/20 text-primary font-bold">✓</span>
                    </td>
                    {row.them.map((has, i) => (
                      <td key={i} className="py-2 px-3 text-center">
                        {has ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-muted text-muted-foreground">✓</span>
                        ) : (
                          <span className="inline-block w-5 h-5 rounded-full bg-muted text-muted-foreground">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: 'Business Model',
      subtitle: 'B2G + B2B + CSR revenue streams',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { stream: 'B2G (Government)', revenue: '₹2-5 Cr/district/year', desc: 'NIMHANS integration, NHM partnerships' },
              { stream: 'B2B (Corporates)', revenue: '₹500/employee/year', desc: 'Employee Mental Health Programs, POSH compliance' },
              { stream: 'Universities', revenue: '₹10-50 Lakh/institution', desc: 'Campus mental health infrastructure' },
              { stream: 'CSR Grants', revenue: '₹1-10 Cr', desc: 'Tata, Infosys, HDFC foundations' },
            ].map((item) => (
              <div key={item.stream} className="bg-card border border-card-border rounded-xl p-6">
                <h3 className="font-display font-bold text-lg text-primary mb-1">{item.stream}</h3>
                <div className="text-2xl font-display font-bold text-foreground mb-2">{item.revenue}</div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Financial Projections',
      subtitle: 'Year 1: ₹50L → Year 5: ₹500 Cr',
      content: (
        <div className="space-y-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={[
                { year: 'Y1', revenue: 0.5, users: 100 },
                { year: 'Y2', revenue: 5, users: 1000 },
                { year: 'Y3', revenue: 50, users: 10000 },
                { year: 'Y5', revenue: 500, users: 100000 },
              ]}
            >
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
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} name="Revenue (₹ Cr)" />
            </LineChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-4 gap-4">
            {[
              { year: 'Year 1', users: '100K', revenue: '₹50 Lakh' },
              { year: 'Year 2', users: '1M', revenue: '₹5 Cr' },
              { year: 'Year 3', users: '10M', revenue: '₹50 Cr' },
              { year: 'Year 5', users: '100M', revenue: '₹500 Cr' },
            ].map((item) => (
              <div key={item.year} className="bg-card border border-card-border rounded-lg p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">{item.year}</div>
                <div className="text-lg font-display font-bold text-primary">{item.users}</div>
                <div className="text-sm text-foreground">{item.revenue}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Roadmap',
      subtitle: 'MVP → National Infrastructure (36 months)',
      content: (
        <div className="space-y-4">
          {[
            { phase: 'MVP (0-3 months)', items: ['Hindi + English', 'PHQ-9 screening', 'Crisis detection', 'Tele-MANAS referral'] },
            { phase: 'Beta (3-6 months)', items: ['5 Indian languages', 'Voice mode', 'GAD-7 integration', 'Counsellor dashboard'] },
            { phase: 'Pilot (6-12 months)', items: ['10 languages', 'MedGemma integration', 'Govt dashboard', 'NIMHANS validation'] },
            { phase: 'National (24-36 months)', items: ['20 languages', '50M+ users', 'Voice biomarkers', 'National infrastructure'] },
          ].map((milestone) => (
            <div key={milestone.phase} className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-display font-bold text-lg text-primary mb-3">{milestone.phase}</h3>
              <div className="grid grid-cols-2 gap-2">
                {milestone.items.map((item) => (
                  <div key={item} className="text-sm text-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Traction',
      subtitle: 'Early validation & partnerships',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'NIMHANS LOI', desc: 'Letter of Intent for clinical validation study', status: 'In Discussion' },
              { title: 'iCall Partnership', desc: 'Crisis referral integration agreement', status: 'Confirmed' },
              { title: 'District Pilots', desc: '3 districts across Maharashtra, Karnataka', status: 'Planned' },
              { title: 'ASHA Training', desc: 'Community health worker distribution channel', status: 'In Discussion' },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary">{item.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Impact Projections',
      subtitle: 'Year 3 targets',
      content: (
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
            <div className="text-5xl font-display font-bold text-primary mb-3">10M+</div>
            <div className="text-lg font-semibold text-foreground mb-1">Users</div>
            <div className="text-sm text-muted-foreground">Across 10+ Indian languages</div>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
            <div className="text-5xl font-display font-bold text-accent mb-3">50,000</div>
            <div className="text-lg font-semibold text-foreground mb-1">Crisis Interventions</div>
            <div className="text-sm text-muted-foreground">Lives potentially saved</div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-2xl p-8 text-center">
            <div className="text-5xl font-display font-bold text-primary mb-3">₹170 Cr</div>
            <div className="text-lg font-semibold text-foreground mb-1">Healthcare Savings</div>
            <div className="text-sm text-muted-foreground">Prevented emergency costs</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Team',
      subtitle: 'Clinical + Technical + Government Relations',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Clinical Psychiatrist Advisor', name: 'Dr. [Name] (NIMHANS)', exp: '15 years clinical practice, suicide prevention expert' },
              { role: 'ML Engineers', name: 'Team of 3', exp: 'LLM fine-tuning, on-device optimization, safety systems' },
              { role: 'UX Researcher', name: '[Name]', exp: 'Accessibility design, rural UX, low-literacy interfaces' },
              { role: 'Government Relations', name: '[Name]', exp: 'Former NHM, DMHP district coordinator' },
              { role: 'Product Lead', name: '[Name]', exp: '10 years health-tech, previous startup exit' },
              { role: 'Community Outreach', name: 'Team of 2', exp: 'NGO partnerships, ASHA network coordination' },
            ].map((member) => (
              <div key={member.role} className="bg-card border border-card-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-1">{member.role}</h3>
                <div className="text-sm text-primary mb-2">{member.name}</div>
                <p className="text-xs text-muted-foreground">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'The Ask',
      subtitle: '$500K seed round for 18-month runway',
      content: (
        <div className="space-y-8">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
            <div className="text-6xl font-display font-bold text-primary mb-4">$500K</div>
            <div className="text-2xl text-foreground mb-2">Seed Round</div>
            <div className="text-lg text-muted-foreground">18-month runway to national pilot</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Use of Funds</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Team scaling (hire 8 FTE)</li>
                <li>• NIMHANS validation study</li>
                <li>• 3-district pilot deployment</li>
                <li>• Model fine-tuning infrastructure</li>
                <li>• Government partnership development</li>
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Milestones (18 months)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 1M users across 5 states</li>
                <li>• NIMHANS clinical validation</li>
                <li>• 5,000 crisis interventions</li>
                <li>• 2 B2G contracts signed</li>
                <li>• Series A readiness</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slide Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-card border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                  data-testid={`button-slide-${i}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg bg-card border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            data-testid="button-next-slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Content */}
        <div className="bg-card border border-card-border rounded-2xl p-12 min-h-[600px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-muted-foreground">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="flex-1">{slides[currentSlide].content}</div>
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Use arrow keys or click dots to navigate
        </div>
      </div>
    </div>
  );
}
