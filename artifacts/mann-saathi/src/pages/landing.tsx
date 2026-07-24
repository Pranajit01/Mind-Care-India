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
  Activity,
  Terminal,
  Sparkles,
  ChevronRight,
  Globe,
  Radio,
  PhoneCall,
  Award,
  FileText,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Landing() {
  const impactData = [
    { year: 'Year 1', users: 100, district: 5 },
    { year: 'Year 2', users: 1000, district: 25 },
    { year: 'Year 3', users: 10000, district: 150 },
    { year: 'Year 5', users: 100000, district: 750 },
  ];

  const treatmentGapData = [
    { condition: 'Depression', gap: 83 },
    { condition: 'Schizophrenia', gap: 86 },
    { condition: 'Anxiety', gap: 79 },
    { condition: 'Bipolar', gap: 82 },
  ];

  const tickerItems = [
    { label: 'AFFECTED CITIZENS', value: '197M+' },
    { label: 'DEPRESSION TREATMENT GAP', value: '83%' },
    { label: 'INDIC LANGUAGES SUPPORTED', value: '10+' },
    { label: 'GEMMA INFERENCE LATENCY', value: '<100ms' },
    { label: 'ON-DEVICE PRIVACY GUARANTEE', value: '100%' },
    { label: 'PSYCHIATRISTS PER 100K', value: '0.75' },
    { label: 'CRISIS TRIAGE ROUTING', value: '24/7' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-foreground selection:bg-[#0052cc]/40 selection:text-white overflow-x-hidden relative">
      
      {/* 5% Opacity Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay" />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Deep Blue #0052cc Atmospheric Radial Glows & Ethereal Orbs */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.5)_0%,transparent_70%)] blur-[120px] rounded-full pointer-events-none animate-float-orb" />
        <div className="absolute top-[320px] left-[-150px] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.35)_0%,transparent_70%)] blur-[130px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[220px] right-[-150px] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.15)_0%,transparent_70%)] blur-[130px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '7s' }} />

        <div className="relative max-w-5xl mx-auto text-center z-10 animate-fade-in-up">
          
          {/* Accent Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#111111]/80 text-[#FF4500] text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,82,204,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-ping" />
            <span>Google Gemma Open Model • On-Device Privacy</span>
          </div>

          {/* Hero Heading in Playfair Display with Text Shadow Glow */}
          <h1 className="font-playfair text-6xl sm:text-7xl lg:text-9xl text-[#ffe0e0] leading-[0.9] tracking-tighter mb-8 hero-text-glow">
            Empathetic Mental Care
            <br />
            <span className="italic font-normal text-white">for <span className="accent-orange">1.4 Billion</span></span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-sans tracking-wide">
            An offline-first, multilingual AI companion engineered specifically for India's socio-cultural healthcare ecosystem. High-fidelity supportive care, 24/7 crisis triage, and CBT tools across 10+ Indic languages.
          </p>

          {/* Hero Action Buttons - featuring Void Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            
            {/* Void Button with #FF4500 Aura Glow */}
            <Link href="/demo" className="void-button px-8 py-4 text-white font-semibold flex items-center gap-3">
              <span>Start Session with Mann Saathi</span>
              <ArrowRight className="w-4 h-4 text-[#FF4500]" />
            </Link>

            {/* Secondary Glass Button */}
            <Link href="/blueprint" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all">
              <span>View Technical Blueprint</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </Link>

          </div>

          {/* High-Contrast Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '197 Million', subtitle: 'Affected Citizens in India', accent: 'text-white', border: 'hover:border-[#0052cc]' },
              { title: '83% Gap', subtitle: 'Untreated Depression Rate', accent: 'accent-orange', border: 'hover:border-[#FF4500]' },
              { title: '0.75 per 100k', subtitle: 'Psychiatrists Density', accent: 'text-[#0052cc]', border: 'hover:border-[#0052cc]' },
              { title: '10+ Indic', subtitle: 'Native Languages & Dialects', accent: 'text-neutral-200', border: 'hover:border-[#0052cc]' }
            ].map((stat, idx) => (
              <div key={idx} className={`glass-card p-6 rounded-2xl ${stat.border}`}>
                <div className={`font-playfair text-3xl sm:text-4xl font-normal ${stat.accent} mb-1`}>
                  {stat.title}
                </div>
                <div className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infinite Horizontal Metrics Ticker */}
      <section className="relative h-16 bg-[#000000]/80 border-y border-white/5 overflow-hidden flex items-center z-20">
        <div className="animate-infinite-ticker flex gap-12 whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{item.label}:</span>
              <span className="text-sm font-mono font-semibold text-white bg-[#0052cc]/30 px-2 py-0.5 rounded border border-[#0052cc]/40">{item.value}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Treatment Gap Analysis Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase accent-orange mb-3 block">Socio-Cultural Context</span>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white mb-4 tracking-tighter">
            India's Mental Healthcare Crisis
          </h2>
          <p className="text-neutral-400 text-lg">
            Structural scarcity, language isolation, and acute social stigma prevent 8 out of 10 individuals from accessing professional psychiatric intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-playfair text-2xl text-white mb-6 flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-[#FF4500]" />
              Treatment Gap by Mental Health Condition
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentGapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="condition" stroke="#737373" fontSize={12} />
                  <YAxis stroke="#737373" fontSize={12} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#050505', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="gap" fill="#0052cc" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Users,
                title: 'Severe Professional Shortage',
                desc: 'India has fewer than 9,000 psychiatrists for 1.4 billion people. Rural districts often have zero access to mental health practitioners.',
                accent: 'text-[#FF4500]'
              },
              {
                icon: Languages,
                title: 'Linguistic Exclusion',
                desc: 'Most traditional therapy tools are built exclusively in English, leaving over 90% of the population without accessible care in native Indic languages.',
                accent: 'text-[#0052cc]'
              },
              {
                icon: Shield,
                title: 'Social Stigma & Privacy Risks',
                desc: 'Fear of social judgment causes users to avoid clinics. Mind Care India ensures 100% on-device processing so personal feelings never leak.',
                accent: 'text-emerald-400'
              }
            ].map((problem, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 blue-chrome-filter">
                  <problem.icon className={`w-6 h-6 ${problem.accent}`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{problem.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Tier Safety Level & Crisis Matrix Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052cc]/20 border border-[#0052cc]/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            Clinical Safety Matrix
          </div>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white mb-4 tracking-tighter">
            4-Tier Safety & Crisis Escalation System
          </h2>
          <p className="text-neutral-400 text-lg">
            Multi-signal safety classifier automatically routes user distress states from self-guided CBT tools up to immediate 1-tap emergency helpline connections.
          </p>
        </div>

        {/* 4-Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { level: 'Level 1', label: 'Mild Stress', color: 'border-emerald-500/30 bg-emerald-950/20', textColor: 'text-emerald-400', action: 'Gemma CBT companion & journal prompts' },
            { level: 'Level 2', label: 'Moderate Anxiety', color: 'border-[#0052cc]/30 bg-[#0052cc]/10', textColor: 'text-cyan-400', action: 'Interactive 4-7-8 breathwork & mood logs' },
            { level: 'Level 3', label: 'High Distress', color: 'border-[#FF4500]/30 bg-[#FF4500]/10', textColor: 'text-[#FF4500]', action: 'Tele-MANAS counselor booking & SMS alert' },
            { level: 'Level 4', label: 'Active Crisis', color: 'border-red-500/30 bg-red-950/20', textColor: 'text-red-400', action: '1-Tap emergency helpline dialer & protocol' },
          ].map((stage) => (
            <div key={stage.level} className={`glass-card ${stage.color} p-6 rounded-2xl text-center`}>
              <Activity className={`w-8 h-8 ${stage.textColor} mx-auto mb-3`} />
              <div className={`font-playfair text-2xl ${stage.textColor} mb-1`}>{stage.level}</div>
              <div className="text-sm font-semibold text-white mb-2">{stage.label}</div>
              <div className="text-xs text-neutral-400 leading-relaxed">{stage.action}</div>
            </div>
          ))}
        </div>

        {/* 3-Step Protocol Pipeline */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h3 className="font-playfair text-3xl text-white mb-8 text-center">Crisis Response Protocol Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0052cc]/20 border border-[#0052cc]/40 flex items-center justify-center mb-4 text-[#0052cc] font-mono font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-white mb-2">Real-Time Distress Detection</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                DistilBERT & Indic BERT safety classifiers analyze every voice and text message for distress signals with sub-50ms inference.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4500]/20 border border-[#FF4500]/40 flex items-center justify-center mb-4 text-[#FF4500] font-mono font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-white mb-2">Immediate Grounding Intervention</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Validates emotions, provides non-judgmental CBT grounding techniques, and remains present without leaving the user isolated.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-400 font-mono font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-white mb-2">Direct Human Handoff</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                One-touch seamless connection to Tele-MANAS (14416), NIMHANS (080-26995000), or Vandrevala Foundation (+91 9999 666 555).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (3-Column Asymmetrical Glass Grid) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052cc]/20 border border-[#0052cc]/30 text-[#0052cc] text-xs font-mono uppercase tracking-widest mb-4">
            System Architecture
          </div>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white mb-4 tracking-tighter">
            Architected for High Impact & Safety
          </h2>
          <p className="text-neutral-400 text-lg">
            Engineered around Google Gemma's compact model footprint to deliver private, real-time supportive therapy and emergency triage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: 'Google Gemma Model Engine',
              desc: 'Fine-tuned on Indic conversational corpora. Executes locally via INT4 quantization with sub-100ms response latency.',
              color: 'text-white'
            },
            {
              icon: Languages,
              title: 'Native Indic Multilingual',
              desc: 'Natively understands Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Punjabi, and Hinglish code-switching.',
              color: 'text-[#0052cc]'
            },
            {
              icon: AlertTriangle,
              title: '4-Tier Emergency Triage',
              desc: 'Distress detection algorithms automatically escalate high-risk signals to Tele-MANAS (14416) and NIMHANS emergency helplines.',
              color: 'text-[#FF4500]'
            },
            {
              icon: Lock,
              title: 'Zero-Knowledge Privacy',
              desc: 'Encrypted local SQLite database and ChromaDB vector embeddings keep all conversation history strictly on-device.',
              color: 'text-white'
            },
            {
              icon: Activity,
              title: 'CBT Grounding & Breathwork',
              desc: 'Embedded interactive toolkits including 4-7-8 breathing animations, PHQ-9 mood tracking, and sensory grounding.',
              color: 'text-[#0052cc]'
            },
            {
              icon: Users,
              title: 'ASHA Worker Portal',
              desc: 'Equips grassroots healthcare workers with voice-guided screening tools to assist rural populations effectively.',
              color: 'text-emerald-400'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-[48px] group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#0052cc]/50 transition-all icon-hover-rotate blue-chrome-filter">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-playfair text-2xl text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Government & Healthcare Infrastructure Integrations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl sm:text-6xl text-white mb-4 tracking-tighter">
            Integrated with National Infrastructure
          </h2>
          <p className="text-neutral-400 text-lg">
            Strengthening India's public health ecosystem by connecting digital AI companion support directly with established crisis networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'NIMHANS', role: 'Clinical Guidance & Validation Partner', icon: Brain, accent: 'text-white' },
            { name: 'Tele-MANAS', role: 'Government Crisis Helpline Integration (14416)', icon: PhoneCall, accent: 'text-[#0052cc]' },
            { name: 'Vandrevala Foundation', role: 'Emergency Crisis Referral Partner', icon: Shield, accent: 'text-[#FF4500]' },
            { name: 'ASHA Network', role: 'Community Grassroots Distribution', icon: Users, accent: 'text-emerald-400' },
          ].map((partner) => (
            <div key={partner.name} className="glass-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 blue-chrome-filter">
                <partner.icon className={`w-7 h-7 ${partner.accent}`} />
              </div>
              <h3 className="font-playfair text-2xl text-white mb-1">{partner.name}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{partner.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Impact & Scalability Chart Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052cc]/20 border border-[#0052cc]/30 text-[#0052cc] text-xs font-mono uppercase tracking-widest mb-4">
              Growth Projection
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white mb-6 tracking-tighter">
              Scalable Impact Across 750+ Districts
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mb-6">
              Mind Care India is architected for rapid scaling across Tier-2/3 cities and rural panchayats. By removing cloud token costs and relying on on-device Gemma execution, district healthcare deployment costs drop by over 90%.
            </p>
            <div className="space-y-3">
              {[
                'Zero recurring cloud GPU inference cost per chat session',
                'Seamless deployment via state health department partnerships',
                'ASHA worker offline tablet distribution for rural screening'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-playfair text-2xl text-white mb-6">User Adoption & District Deployment</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0052cc" stopOpacity={0.7}/>
                      <stop offset="95%" stopColor="#0052cc" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="#737373" fontSize={12} />
                  <YAxis stroke="#737373" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#050505', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Area type="monotone" dataKey="district" stroke="#0052cc" fillOpacity={1} fill="url(#colorUsers)" name="Districts Covered" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Code & IDE System Integration Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-playfair text-4xl text-white mb-3 tracking-tighter">On-Device Triage Pipeline</h2>
          <p className="text-neutral-400 text-sm font-sans">
            Minimal runtime overhead. Sub-100ms response execution with zero external cloud dependencies.
          </p>
        </div>

        <div className="bg-[#080808]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* IDE Window Controls Bar */}
          <div className="px-4 py-3 bg-[#0d0d0d] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-neutral-500 ml-2">gemma_indic_triage.ts</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
              <span>Gemma LiteRT INT4</span>
            </div>
          </div>

          {/* Syntax Highlighted Code Window */}
          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
            <pre>
              <code>
                <span className="text-[#0052cc]">import</span> &#123; <span className="text-cyan-300">GemmaLiteRTEngine</span>, <span className="text-cyan-300">IndicBERTClassifier</span> &#125; <span className="text-[#0052cc]">from</span> <span className="text-emerald-400">'@google/gemma-litert'</span>;<br /><br />
                <span className="text-neutral-500">// Initialize zero-knowledge on-device pipeline</span><br />
                <span className="text-[#0052cc]">const</span> <span className="text-cyan-300">gemmaEngine</span> = <span className="text-[#0052cc]">new</span> <span className="text-cyan-300">GemmaLiteRTEngine</span>(&#123;<br />
                &nbsp;&nbsp;modelPath: <span className="text-emerald-400">'models/gemma-2b-indic-int4.bin'</span>,<br />
                &nbsp;&nbsp;quantization: <span className="text-emerald-400">'INT4'</span>,<br />
                &nbsp;&nbsp;maxMemoryMB: <span className="text-[#FF4500]">1200</span><br />
                &#125;);<br /><br />
                <span className="text-[#0052cc]">export async function</span> <span className="text-cyan-300">processIndicMessage</span>(userMessage: <span className="text-[#0052cc]">string</span>) &#123;<br />
                &nbsp;&nbsp;<span className="text-[#0052cc]">const</span> distressLevel = <span className="text-[#0052cc]">await</span> IndicBERTClassifier.evaluateDistress(userMessage);<br /><br />
                &nbsp;&nbsp;<span className="text-[#0052cc]">if</span> (distressLevel &gt;= <span className="text-[#FF4500]">3</span>) &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0052cc]">return</span> EmergencyTriageRouter.triggerHelplineReferral(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helpline: <span className="text-emerald-400">'Tele-MANAS (14416)'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">'IMMEDIATE_ESCALATION'</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
                &nbsp;&nbsp;&#125;<br /><br />
                &nbsp;&nbsp;<span className="text-[#0052cc]">return await</span> gemmaEngine.generateSupportiveResponse(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;prompt: userMessage,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;safetyGuardrails: <span className="text-emerald-400">'WHO_MHGAP_STRICT'</span><br />
                &nbsp;&nbsp;&#125;);<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Hero Banner - Moody Dark Surrealist Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative animate-fade-in-up">
        <div className="glass-card p-12 sm:p-20 rounded-[48px] border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#1a4d7f]/40 to-[#050505]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052cc]/30 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="font-playfair text-5xl sm:text-7xl text-white mb-6 relative z-10 tracking-tighter">
            Ready to experience <span className="italic accent-orange">Mann Saathi?</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10 font-sans relative z-10">
            Powered by Google Gemma. Designed for 1.4 billion people. Experience the interactive live companion demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link href="/demo" className="void-button px-8 py-4 text-white font-semibold flex items-center gap-3">
              <span>Try Interactive Demo</span>
              <ArrowRight className="w-4 h-4 text-[#FF4500]" />
            </Link>
            <Link href="/pitch" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all">
              <FileText className="w-4 h-4 text-[#FF4500]" />
              <span>View Pitch Deck</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
