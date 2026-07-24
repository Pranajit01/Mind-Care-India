import { Check, Clock, Circle } from 'lucide-react';

type Phase = {
  id: string;
  name: string;
  duration: string;
  status: 'completed' | 'current' | 'planned';
  features: string[];
  milestones: string[];
  metrics: { label: string; value: string }[];
};

export default function Roadmap() {
  const phases: Phase[] = [
    {
      id: 'mvp',
      name: 'MVP Launch',
      duration: '0-3 months',
      status: 'current',
      features: [
        'Hindi + English conversation',
        'PHQ-9 conversational screening',
        'Basic crisis detection (DistilBERT)',
        'Tele-MANAS referral integration',
        'Breathing exercise module',
        'Android APK (works offline)',
        'Simple mood tracking',
        'Emergency contact system',
      ],
      milestones: [
        'Google Solution Challenge submission',
        'Working Android prototype',
        'Demo with 3 personas',
        'Safety classifier trained',
      ],
      metrics: [
        { label: 'Target Users', value: '1,000' },
        { label: 'Languages', value: '2' },
        { label: 'Crisis Detection Accuracy', value: '85%' },
      ],
    },
    {
      id: 'beta',
      name: 'Beta Release',
      duration: '3-6 months',
      status: 'planned',
      features: [
        '5 Indian languages (Tamil, Telugu, Bengali, Marathi, Kannada)',
        'Voice mode (Whisper ASR)',
        'GAD-7 anxiety screening',
        'Mood tracking with history graphs',
        'Counsellor dashboard v1',
        'Psychoeducation content library (100+ articles)',
        'Daily check-in reminders',
        'Streak gamification',
      ],
      milestones: [
        'TestFlight / Play Store beta',
        '10,000 beta testers',
        'Clinical feedback loop established',
        'iCall integration live',
      ],
      metrics: [
        { label: 'Target Users', value: '10,000' },
        { label: 'Languages', value: '5' },
        { label: 'Crisis Detection Accuracy', value: '90%' },
      ],
    },
    {
      id: 'pilot',
      name: 'Pilot Deployment',
      duration: '6-12 months',
      status: 'planned',
      features: [
        '10 Indian languages + dialects',
        'MedGemma 4B integration',
        'Government dashboard (district-level analytics)',
        'NGO dashboard (community outreach)',
        'Family mode (trusted contacts)',
        'Offline sync engine',
        'NIMHANS clinical validation study',
        'Advanced crisis escalation protocol',
      ],
      milestones: [
        '3-district pilot (Maharashtra, Karnataka, Bihar)',
        'NIMHANS validation study completed',
        'First B2G contract signed',
        '100,000 users',
      ],
      metrics: [
        { label: 'Target Users', value: '100,000' },
        { label: 'Districts Covered', value: '3' },
        { label: 'Crisis Interventions', value: '1,000' },
      ],
    },
    {
      id: 'production',
      name: 'Production Scale',
      duration: '12-24 months',
      status: 'planned',
      features: [
        'Full Tele-MANAS API integration',
        '20 Indian languages',
        'Wearable integration (Galaxy Watch, Noise)',
        'Federated learning for model updates',
        'Voice biomarker pilot',
        'Multimodal input (facial expression via MediaPipe)',
        'B2B enterprise dashboard',
        'University campus deployment toolkit',
      ],
      milestones: [
        '1 million users',
        '15 states covered',
        '10 B2G contracts',
        '5 corporate partnerships',
        'Series A fundraise ($5M)',
      ],
      metrics: [
        { label: 'Target Users', value: '1,000,000' },
        { label: 'States', value: '15' },
        { label: 'Crisis Interventions', value: '10,000' },
      ],
    },
    {
      id: 'national',
      name: 'National Rollout',
      duration: '24-36 months',
      status: 'planned',
      features: [
        'NHPS (National Health Portal System) integration',
        '50+ languages and dialects',
        'Voice biomarker depression screening',
        'Multimodal emotion detection',
        'Feature phone SMS fallback',
        'ASHA worker training program',
        'District mental health outbreak detection',
        'National mental health data infrastructure',
      ],
      milestones: [
        '50 million users',
        'All 36 states/UTs covered',
        'National infrastructure status',
        'WHO SEARO partnership',
        'Series B fundraise ($20M)',
      ],
      metrics: [
        { label: 'Target Users', value: '50,000,000' },
        { label: 'States/UTs', value: '36' },
        { label: 'Crisis Interventions', value: '50,000' },
      ],
    },
    {
      id: 'beyond',
      name: 'Beyond India',
      duration: '36+ months',
      status: 'planned',
      features: [
        'Regional expansion (Bangladesh, Pakistan, Sri Lanka)',
        'Southeast Asia language support',
        'Global south mental health infrastructure',
        'Open-source model release',
        'WHO collaboration on global mental health data',
        'Research partnerships with universities',
      ],
      milestones: [
        '100 million users globally',
        '5 country deployments',
        'Academic research publications',
        'WHO Mental Health Innovation Award',
      ],
      metrics: [
        { label: 'Target Users', value: '100,000,000' },
        { label: 'Countries', value: '5' },
        { label: 'Languages', value: '100+' },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <Check className="w-5 h-5 text-green-600" />;
    if (status === 'current') return <Clock className="w-5 h-5 text-primary" />;
    return <Circle className="w-5 h-5 text-muted-foreground" />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'border-green-500 bg-green-500/10';
    if (status === 'current') return 'border-primary bg-primary/10';
    return 'border-muted bg-muted/30';
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Product Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From MVP to National Infrastructure — our 36-month journey to reaching 50 million Indians
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="mb-16 bg-card border border-card-border rounded-xl p-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border -z-10" />
            {phases.slice(0, 5).map((phase, i) => (
              <div key={phase.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full border-2 ${getStatusColor(phase.status)} flex items-center justify-center mb-3`}>
                  {getStatusIcon(phase.status)}
                </div>
                <div className="text-xs font-semibold text-foreground text-center">{phase.name.split(' (')[0]}</div>
                <div className="text-xs text-muted-foreground text-center">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`rounded-2xl border-2 overflow-hidden ${
                phase.status === 'current'
                  ? 'border-primary bg-primary/5'
                  : 'border-card-border bg-card'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-full border-2 ${getStatusColor(phase.status)} flex items-center justify-center flex-shrink-0`}>
                      {getStatusIcon(phase.status)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground mb-1">
                        {phase.name}
                      </h2>
                      <p className="text-muted-foreground">{phase.duration}</p>
                    </div>
                  </div>
                  {phase.status === 'current' && (
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      Current Phase
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <h3 className="font-semibold text-foreground mb-3 mt-6">Milestones</h3>
                    <div className="space-y-2">
                      {phase.milestones.map((milestone) => (
                        <div key={milestone} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {milestone}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Target Metrics</h3>
                    <div className="space-y-3">
                      {phase.metrics.map((metric) => (
                        <div key={metric.label} className="bg-background/50 border border-border rounded-lg p-4">
                          <div className="text-2xl font-display font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Our Vision for 2027
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            By 2027, Mann Saathi will be India's national mental health infrastructure — accessible in every district,
            speaking every language, trusted by millions. We envision a future where no Indian struggles alone in the dark,
            where help is always one conversation away, and where mental healthcare is a right, not a privilege.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur border border-card-border rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-primary mb-2">100M</div>
              <div className="text-sm text-foreground">Users reached</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-card-border rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-accent mb-2">500K</div>
              <div className="text-sm text-foreground">Crisis interventions</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-card-border rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-primary mb-2">36/36</div>
              <div className="text-sm text-foreground">States/UTs covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
