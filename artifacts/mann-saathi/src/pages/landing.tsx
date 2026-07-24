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
    <div className="min-h-screen bg-[#030303] text-foreground selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Animated Background Glowing Orbs */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-600/25 blur-[140px] rounded-full pointer-events-none animate-float-orb" />
        <div className="absolute top-[320px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[220px] right-[-120px] w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '5s' }} />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 text-xs font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>Google Gemma Model Engine • 100% On-Device Privacy</span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-serif-editorial text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8">
            Empathetic Mental Care
            <br />
            for <span className="animate-text-shimmer italic font-normal">1.4 Billion Citizens</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-sans">
            An offline-first, multilingual AI companion engineered specifically for India's socio-cultural healthcare ecosystem. High-fidelity supportive care, 24/7 crisis triage, and CBT tools across 10+ Indic languages.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            
            {/* Primary Shiny Border Button */}
            <Link href="/demo" className="relative group inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
              <span className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,#8b5cf6_40%,#06b6d4_50%,transparent_60%)] animate-spin-conic" />
              <span className="relative px-8 py-3.5 rounded-full bg-[#0a0a0a] text-sm font-semibold text-white group-hover:bg-[#120e24] transition-colors flex items-center gap-2">
                <span>Start Session with Mann Saathi</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary Glass Button */}
            <Link href="/blueprint" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-sm font-semibold text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all">
              <span>View Technical Blueprint</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </Link>

          </div>

          {/* High-Contrast Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '197 Million', subtitle: 'Affected Citizens in India', accent: 'text-purple-400', border: 'hover:border-purple-500/40' },
              { title: '83% Gap', subtitle: 'Untreated Depression Rate', accent: 'text-cyan-400', border: 'hover:border-cyan-500/40' },
              { title: '0.75 per 100k', subtitle: 'Psychiatrists Density', accent: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
              { title: '10+ Indic', subtitle: 'Native Languages & Dialects', accent: 'text-purple-300', border: 'hover:border-purple-500/40' }
            ].map((stat, idx) => (
              <div key={idx} className={`glass-card p-6 rounded-2xl ${stat.border}`}>
                <div className={`font-serif-editorial text-3xl sm:text-4xl font-normal ${stat.accent} mb-1`}>
                  {stat.title}
                </div>
                <div className="text-xs text-neutral-400 font-mono tracking-wide uppercase">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infinite Horizontal Metrics Ticker */}
      <section className="relative h-16 bg-[#000000]/70 border-y border-white/10 overflow-hidden flex items-center z-20">
        <div className="animate-infinite-ticker flex gap-12 whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{item.label}:</span>
              <span className="text-sm font-mono font-semibold text-white bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">{item.value}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 ml-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Treatment Gap Analysis Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
            India's Mental Healthcare Crisis
          </h2>
          <p className="text-neutral-400 text-lg">
            Structural scarcity, language isolation, and acute social stigma prevent 8 out of 10 individuals from accessing professional psychiatric intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-serif-editorial text-2xl text-white mb-6 flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-purple-400" />
              Treatment Gap by Mental Health Condition
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentGapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="condition" stroke="#737373" fontSize={12} />
                  <YAxis stroke="#737373" fontSize={12} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="gap" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
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
                accent: 'text-purple-400'
              },
              {
                icon: Languages,
                title: 'Linguistic Exclusion',
                desc: 'Most traditional therapy tools are built exclusively in English, leaving over 90% of the population without accessible care in native Indic languages.',
                accent: 'text-cyan-400'
              },
              {
                icon: Shield,
                title: 'Social Stigma & Privacy Risks',
                desc: 'Fear of social judgment causes users to avoid clinics. Mind Care India ensures 100% on-device processing so personal feelings never leak.',
                accent: 'text-emerald-400'
              }
            ].map((problem, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            Clinical Safety Matrix
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
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
            { level: 'Level 2', label: 'Moderate Anxiety', color: 'border-cyan-500/30 bg-cyan-950/20', textColor: 'text-cyan-400', action: 'Interactive 4-7-8 breathwork & mood logs' },
            { level: 'Level 3', label: 'High Distress', color: 'border-purple-500/30 bg-purple-950/20', textColor: 'text-purple-400', action: 'Tele-MANAS counselor booking & SMS alert' },
            { level: 'Level 4', label: 'Active Crisis', color: 'border-red-500/30 bg-red-950/20', textColor: 'text-red-400', action: '1-Tap emergency helpline dialer & protocol' },
          ].map((stage) => (
            <div key={stage.level} className={`glass-card ${stage.color} p-6 rounded-2xl text-center`}>
              <Activity className={`w-8 h-8 ${stage.textColor} mx-auto mb-3`} />
              <div className={`font-serif-editorial text-2xl ${stage.textColor} mb-1`}>{stage.level}</div>
              <div className="text-sm font-semibold text-white mb-2">{stage.label}</div>
              <div className="text-xs text-neutral-400 leading-relaxed">{stage.action}</div>
            </div>
          ))}
        </div>

        {/* 3-Step Protocol Pipeline */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h3 className="font-serif-editorial text-2xl text-white mb-8 text-center">Crisis Response Protocol Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 font-mono font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-white mb-2">Real-Time Distress Detection</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                DistilBERT & Indic BERT safety classifiers analyze every voice and text message for distress signals with sub-50ms inference.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400 font-mono font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-white mb-2">Immediate Grounding Intervention</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Validates emotions, provides non-judgmental CBT grounding techniques, and remains present without leaving the user isolated.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 font-mono font-bold text-lg">
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

      {/* Feature Grid (Synapse 3-Column Glass Grid) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            System Modules
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
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
              color: 'text-purple-400'
            },
            {
              icon: Languages,
              title: 'Native Indic Multilingual',
              desc: 'Natively understands Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Punjabi, and Hinglish code-switching.',
              color: 'text-cyan-400'
            },
            {
              icon: AlertTriangle,
              title: '4-Tier Emergency Triage',
              desc: 'Distress detection algorithms automatically escalate high-risk signals to Tele-MANAS (14416) and NIMHANS emergency helplines.',
              color: 'text-emerald-400'
            },
            {
              icon: Lock,
              title: 'Zero-Knowledge Privacy',
              desc: 'Encrypted local SQLite database and ChromaDB vector embeddings keep all conversation history strictly on-device.',
              color: 'text-purple-400'
            },
            {
              icon: Activity,
              title: 'CBT Grounding & Breathwork',
              desc: 'Embedded interactive toolkits including 4-7-8 breathing animations, PHQ-9 mood tracking, and sensory grounding.',
              color: 'text-cyan-400'
            },
            {
              icon: Users,
              title: 'ASHA Worker Portal',
              desc: 'Equips grassroots healthcare workers with voice-guided screening tools to assist rural populations effectively.',
              color: 'text-emerald-400'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 transition-all">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-serif-editorial text-2xl text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Government & Healthcare Infrastructure Integrations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
            Integrated with National Infrastructure
          </h2>
          <p className="text-neutral-400 text-lg">
            Strengthening India's public health ecosystem by connecting digital AI companion support directly with established crisis networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'NIMHANS', role: 'Clinical Guidance & Validation Partner', icon: Brain, accent: 'text-purple-400' },
            { name: 'Tele-MANAS', role: 'Government Crisis Helpline Integration (14416)', icon: PhoneCall, accent: 'text-cyan-400' },
            { name: 'Vandrevala Foundation', role: 'Emergency Crisis Referral Partner', icon: Shield, accent: 'text-emerald-400' },
            { name: 'ASHA Network', role: 'Community Grassroots Distribution', icon: Users, accent: 'text-purple-300' },
          ].map((partner) => (
            <div key={partner.name} className="glass-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <partner.icon className={`w-7 h-7 ${partner.accent}`} />
              </div>
              <h3 className="font-serif-editorial text-2xl text-white mb-1">{partner.name}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{partner.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Impact & Scalability Chart Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
              Growth Projection
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-6">
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
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-serif-editorial text-2xl text-white mb-6">User Adoption & District Deployment</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="#737373" fontSize={12} />
                  <YAxis stroke="#737373" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Area type="monotone" dataKey="district" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorUsers)" name="Districts Covered" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Code & IDE System Integration Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-editorial text-4xl text-white mb-3">On-Device Triage Pipeline</h2>
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
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Gemma LiteRT INT4</span>
            </div>
          </div>

          {/* Syntax Highlighted Code Window */}
          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
            <pre>
              <code>
                <span className="text-purple-400">import</span> &#123; <span className="text-cyan-300">GemmaLiteRTEngine</span>, <span className="text-cyan-300">IndicBERTClassifier</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@google/gemma-litert'</span>;<br /><br />
                <span className="text-neutral-500">// Initialize zero-knowledge on-device pipeline</span><br />
                <span className="text-purple-400">const</span> <span className="text-cyan-300">gemmaEngine</span> = <span className="text-purple-400">new</span> <span className="text-cyan-300">GemmaLiteRTEngine</span>(&#123;<br />
                &nbsp;&nbsp;modelPath: <span className="text-emerald-400">'models/gemma-2b-indic-int4.bin'</span>,<br />
                &nbsp;&nbsp;quantization: <span className="text-emerald-400">'INT4'</span>,<br />
                &nbsp;&nbsp;maxMemoryMB: <span className="text-orange-400">1200</span><br />
                &#125;);<br /><br />
                <span className="text-purple-400">export async function</span> <span className="text-cyan-300">processIndicMessage</span>(userMessage: <span className="text-purple-400">string</span>) &#123;<br />
                &nbsp;&nbsp;<span className="text-purple-400">const</span> distressLevel = <span className="text-purple-400">await</span> IndicBERTClassifier.evaluateDistress(userMessage);<br /><br />
                &nbsp;&nbsp;<span className="text-purple-400">if</span> (distressLevel &gt;= <span className="text-orange-400">3</span>) &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> EmergencyTriageRouter.triggerHelplineReferral(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helpline: <span className="text-emerald-400">'Tele-MANAS (14416)'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">'IMMEDIATE_ESCALATION'</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
                &nbsp;&nbsp;&#125;<br /><br />
                &nbsp;&nbsp;<span className="text-purple-400">return await</span> gemmaEngine.generateSupportiveResponse(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;prompt: userMessage,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;safetyGuardrails: <span className="text-emerald-400">'WHO_MHGAP_STRICT'</span><br />
                &nbsp;&nbsp;&#125;);<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Hero Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="glass-card p-12 sm:p-16 rounded-3xl border border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="font-serif-editorial text-5xl sm:text-6xl text-white mb-6 relative z-10">
            Join Us in Bridging India's Mental Healthcare Gap
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10 font-sans relative z-10">
            Powered by Google Gemma. Designed for 1.4 billion people. Experience the interactive live companion demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
            <Link href="/demo" className="relative group inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]">
              <span className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,#8b5cf6_40%,#06b6d4_50%,transparent_60%)] animate-spin-conic" />
              <span className="relative px-8 py-3.5 rounded-full bg-[#0a0a0a] text-sm font-semibold text-white group-hover:bg-[#120e24] transition-colors flex items-center gap-2">
                <span>Try the Interactive Demo</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/pitch" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-sm font-semibold text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>View Investor Pitch</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
