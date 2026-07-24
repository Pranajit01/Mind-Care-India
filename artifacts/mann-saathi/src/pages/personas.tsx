import { useState } from 'react';
import { User, MapPin, Smartphone, AlertTriangle, Check, X } from 'lucide-react';

type Persona = {
  id: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  pain: string;
  risk: 'LOW' | 'MODERATE' | 'MODERATE-HIGH' | 'HIGH' | 'VERY HIGH';
  techLiteracy: 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High';
  language: string;
  expectations: string;
  phq9?: number;
};

export default function Personas() {
  const [selectedRisk, setSelectedRisk] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const personas: Persona[] = [
    {
      id: 'arjun',
      name: 'Arjun',
      age: 19,
      occupation: 'Engineering Student',
      location: 'Bangalore (Urban)',
      pain: 'JEE failure shame, comparison culture, imposter syndrome. Hides distress from parents. Used to 12h study days, now cannot get out of bed.',
      risk: 'MODERATE-HIGH',
      techLiteracy: 'High',
      language: 'English / Hindi',
      expectations: 'Non-judgmental, anonymous, available at 2am during exam season',
      phq9: 15,
    },
    {
      id: 'priya',
      name: 'Priya',
      age: 16,
      occupation: 'Class 11 Student',
      location: 'Patna (Urban)',
      pain: 'Board exam terror, family pressure, first breakup, social media comparison. Frequent panic attacks before tests.',
      risk: 'MODERATE',
      techLiteracy: 'Moderate',
      language: 'Hindi',
      expectations: 'Simple interface, does not want parents to know',
      phq9: 12,
    },
    {
      id: 'rahul',
      name: 'Rahul',
      age: 32,
      occupation: 'IT Professional',
      location: 'Pune (Urban)',
      pain: 'Layoff anxiety, EMI pressure, burnout after 14h WFH days, relationship strain. Insomnia.',
      risk: 'MODERATE',
      techLiteracy: 'Very High',
      language: 'English',
      expectations: 'Quick, evidence-based, no fluff, integrates with calendar',
      phq9: 13,
    },
    {
      id: 'ramesh',
      name: 'Ramesh',
      age: 45,
      occupation: 'Farmer',
      location: 'Vidarbha, Maharashtra (Rural)',
      pain: 'Crop failure, debt, drought, lost 2 cattle. Three neighbors died by suicide last year.',
      risk: 'HIGH',
      techLiteracy: 'Very Low',
      language: 'Marathi',
      expectations: 'Voice interface, no reading required. May distrust "AI" label',
      phq9: 18,
    },
    {
      id: 'sunita',
      name: 'Sunita',
      age: 38,
      occupation: 'Housewife',
      location: 'Lucknow (Urban)',
      pain: 'Domestic violence, isolation, no financial independence, trapped. Husband monitors her phone.',
      risk: 'HIGH',
      techLiteracy: 'Low',
      language: 'Hindi',
      expectations: 'Quick exit button, private mode, no notifications',
      phq9: 19,
    },
    {
      id: 'meera',
      name: 'Meera',
      age: 67,
      occupation: 'Retired Teacher',
      location: 'Kolkata (Urban)',
      pain: 'Widow, children abroad, profound loneliness, early cognitive decline fear, chronic pain.',
      risk: 'MODERATE',
      techLiteracy: 'Very Low',
      language: 'Bengali',
      expectations: 'Large text, slow pace, voice, reassurance not clinical',
      phq9: 11,
    },
    {
      id: 'suresh',
      name: 'Suresh',
      age: 28,
      occupation: 'Factory Worker',
      location: 'Surat (Urban)',
      pain: '12h shifts, dormitory living, 500km from family, substance use (alcohol), gambling debt.',
      risk: 'HIGH',
      techLiteracy: 'Moderate',
      language: 'Gujarati / Hindi',
      expectations: 'Simple, anonymous, does not see himself as having mental problem',
      phq9: 17,
    },
    {
      id: 'alex',
      name: 'Alex',
      age: 24,
      occupation: 'LGBTQ+ College Student',
      location: 'Chennai (Urban)',
      pain: 'Family rejection after coming out, internalized homophobia, depression, fear of conversion therapy.',
      risk: 'HIGH',
      techLiteracy: 'High',
      language: 'English / Tamil',
      expectations: 'Affirming language, no gender/orientation assumptions, complete privacy',
      phq9: 18,
    },
    {
      id: 'kavya',
      name: 'Kavya',
      age: 22,
      occupation: 'Final Year Student',
      location: 'Hyderabad (Urban)',
      pain: 'Competitive exam failure (UPSC), identity crisis, comparison with successful peers, social withdrawal.',
      risk: 'MODERATE',
      techLiteracy: 'High',
      language: 'Telugu / English',
      expectations: 'Understands exam culture deeply, needs validation',
      phq9: 14,
    },
    {
      id: 'dinesh',
      name: 'Dinesh',
      age: 52,
      occupation: 'Middle Manager',
      location: 'Mumbai (Urban)',
      pain: 'Career plateau, son\'s drug addiction, mounting debt, silent suffering — "men don\'t cry".',
      risk: 'MODERATE-HIGH',
      techLiteracy: 'Moderate',
      language: 'Hindi / English',
      expectations: 'Concise, result-oriented, will not label himself as needing help',
      phq9: 16,
    },
    {
      id: 'fatima',
      name: 'Fatima',
      age: 29,
      occupation: 'Homemaker',
      location: 'Hyderabad (Urban)',
      pain: 'PTSD from childhood trauma, sleep disorders, hypervigilance. Does not connect symptoms to trauma.',
      risk: 'HIGH',
      techLiteracy: 'Moderate',
      language: 'Urdu / Telugu',
      expectations: 'Understands Islamic concepts, non-clinical framing',
      phq9: 17,
    },
    {
      id: 'vijay',
      name: 'Vijay',
      age: 58,
      occupation: 'Retired Army Officer',
      location: 'Pune (Urban)',
      pain: 'Combat PTSD, survivor guilt, alcohol dependency, difficulty transitioning to civilian life.',
      risk: 'HIGH',
      techLiteracy: 'Moderate',
      language: 'Hindi / English',
      expectations: 'Structured, mission-oriented framing. Strong resistance to "mental illness" label',
      phq9: 19,
    },
    {
      id: 'anjali',
      name: 'Anjali',
      age: 35,
      occupation: 'DV Survivor',
      location: 'Jaipur (Urban)',
      pain: 'Recent escape from abusive marriage, legal stress, two children, no income. Acute crisis phase.',
      risk: 'VERY HIGH',
      techLiteracy: 'Moderate',
      language: 'Rajasthani Hindi',
      expectations: 'Emergency features, legal resource referral',
      phq9: 21,
    },
    {
      id: 'karthik',
      name: 'Karthik',
      age: 41,
      occupation: 'Recovering Alcoholic',
      location: 'Chennai (Urban)',
      pain: '6 months sober, relapse triggers, AA attendance irregular, shame around past behavior, family distrust.',
      risk: 'MODERATE',
      techLiteracy: 'High',
      language: 'Tamil',
      expectations: 'Structured recovery support, daily check-ins, non-preachy',
      phq9: 13,
    },
    {
      id: 'nandita',
      name: 'Nandita',
      age: 26,
      occupation: 'Graduate Student',
      location: 'Delhi (Urban)',
      pain: 'Complicated grief (father died 8 months ago), academic pressure, intrusive thoughts, cultural expectation to "move on".',
      risk: 'MODERATE',
      techLiteracy: 'Very High',
      language: 'English / Hindi',
      expectations: 'Evidence-based, intellectually engages with CBT concepts',
      phq9: 14,
    },
  ];

  const getRiskColor = (risk: string) => {
    if (risk === 'LOW') return 'bg-green-500/10 text-green-600 border-green-500/30';
    if (risk === 'MODERATE') return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30';
    if (risk === 'MODERATE-HIGH') return 'bg-orange-500/10 text-orange-600 border-orange-500/30';
    if (risk === 'HIGH') return 'bg-red-500/10 text-red-600 border-red-500/30';
    if (risk === 'VERY HIGH') return 'bg-red-700/10 text-red-700 border-red-700/30';
    return '';
  };

  const filteredPersonas = personas.filter((p) => {
    if (selectedRisk !== 'all' && p.risk !== selectedRisk) return false;
    if (selectedLocation !== 'all') {
      const isRural = p.location.includes('Rural');
      if (selectedLocation === 'urban' && isRural) return false;
      if (selectedLocation === 'rural' && !isRural) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            User Personas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            15 detailed personas representing the diversity of India's mental health needs across demographics,
            geographies, and crisis levels
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Filter by Risk Level</label>
            <select
              value={selectedRisk}
              onChange={(e) => setSelectedRisk(e.target.value)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
              data-testid="select-risk-filter"
            >
              <option value="all">All Risk Levels</option>
              <option value="LOW">Low</option>
              <option value="MODERATE">Moderate</option>
              <option value="MODERATE-HIGH">Moderate-High</option>
              <option value="HIGH">High</option>
              <option value="VERY HIGH">Very High</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Filter by Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
              data-testid="select-location-filter"
            >
              <option value="all">All Locations</option>
              <option value="urban">Urban Only</option>
              <option value="rural">Rural Only</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-1">{personas.length}</div>
            <div className="text-sm text-muted-foreground">Total Personas</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-3xl font-display font-bold text-orange-600 mb-1">
              {personas.filter((p) => p.risk === 'HIGH' || p.risk === 'VERY HIGH').length}
            </div>
            <div className="text-sm text-muted-foreground">High Risk</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-3xl font-display font-bold text-accent mb-1">
              {personas.filter((p) => p.location.includes('Rural')).length}
            </div>
            <div className="text-sm text-muted-foreground">Rural Users</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-1">
              {new Set(personas.map((p) => p.language.split(' / ')[0])).size}
            </div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
        </div>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPersonas.map((persona) => (
            <div
              key={persona.id}
              className="bg-card border border-card-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{persona.name}</h3>
                    <p className="text-sm text-muted-foreground">{persona.age} years old</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold border ${getRiskColor(persona.risk)}`}>
                  {persona.risk}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-1">Occupation</div>
                  <div className="text-sm text-foreground">{persona.occupation}</div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground mb-1">
                    <MapPin className="w-3 h-3" />
                    Location
                  </div>
                  <div className="text-sm text-foreground">{persona.location}</div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-1">Pain Points</div>
                  <div className="text-sm text-foreground leading-relaxed">{persona.pain}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground mb-1">
                      <Smartphone className="w-3 h-3" />
                      Tech Literacy
                    </div>
                    <div className="text-xs text-foreground">{persona.techLiteracy}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1">Language</div>
                    <div className="text-xs text-foreground">{persona.language}</div>
                  </div>
                </div>

                {persona.phq9 && (
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground mb-1">
                      <AlertTriangle className="w-3 h-3" />
                      PHQ-9 Score
                    </div>
                    <div className="text-sm text-foreground">{persona.phq9}/27</div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-border">
                <div className="text-xs font-semibold text-muted-foreground mb-2">Expectations</div>
                <div className="text-xs text-foreground leading-relaxed">{persona.expectations}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredPersonas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No personas match the selected filters</p>
          </div>
        )}

        {/* Design Insights */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Design Insights from Personas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Must-Have Features</h3>
              <ul className="space-y-2">
                {[
                  'Voice-first interface for low tech literacy users',
                  'Private mode with quick exit for DV survivors',
                  '10+ Indian languages with cultural context',
                  'Works offline for rural connectivity gaps',
                  'Non-clinical framing for stigma-averse users',
                  'Crisis escalation for high-risk individuals',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Design Constraints</h3>
              <ul className="space-y-2">
                {[
                  'Cannot assume smartphone literacy or reading ability',
                  'Must handle interrupted sessions (battery, calls)',
                  'Privacy paramount — no notifications, no visible app name',
                  'Conservative crisis detection to avoid false negatives',
                  'Cannot replace human support for severe cases',
                  'Must work on 3GB RAM budget Android phones',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
