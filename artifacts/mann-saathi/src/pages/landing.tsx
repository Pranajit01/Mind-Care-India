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
  ArrowUpRight,
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
import { LightRays } from '@/components/LightRays';

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
    <div className="min-h-screen bg-[#0B132B] text-foreground selection:bg-[#14B8A6]/30 selection:text-teal-200 overflow-x-hidden relative font-sans">
      
      {/* Soft Ambient Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Hero Section - Soothing Mental Health Sanctuary */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        
        {/* Interactive WebGL LightRays Background - Soothing Teal */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#14B8A6"
          raysSpeed={1.5}
          lightSpread={1.5}
          rayLength={2.0}
          followMouse={true}
          mouseInfluence={0.4}
          noiseAmount={0.02}
          distortion={0.05}
        />

        {/* Soothing Gradient Orbs (Teal #14B8A6 & Sunset Amber #F4A261) */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.35)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none animate-float-orb" />
        <div className="absolute top-[250px] left-[-100px] w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(244,162,97,0.25)_0%,transparent_70%)] blur-[110px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[180px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)] blur-[110px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '7s' }} />

        {/* Top Tagline */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-[#0F172A]/80 text-xs font-mono tracking-wider text-teal-300 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
            <span>Google Gemma Open Model • 100% On-Device Privacy</span>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            MIND CARE INDIA // MANN SAATHI
          </span>
        </div>

        {/* Hero Headline & Content */}
        <div className="relative z-10 my-auto py-4">
          <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-4 hero-text-glow">
            Empathetic Mental Care
            <br />
            for <span className="italic font-normal text-[#F4A261]">1.4 Billion Citizens</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-6">
            <p className="lg:col-span-7 text-base sm:text-lg text-neutral-300 max-w-xl font-light leading-relaxed">
              An offline-first, multilingual AI companion engineered specifically for India's socio-cultural healthcare ecosystem. High-fidelity supportive care, 24/7 crisis triage, and CBT tools across 10+ Indic languages.
            </p>

            {/* Soothing Action Buttons */}
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/demo" className="btn-soothing-primary px-8 py-3.5 text-xs font-semibold tracking-wider flex items-center gap-2">
                <span>Start Session with Mann Saathi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/blueprint" className="px-6 py-3.5 rounded-full glass-card text-xs font-mono tracking-wider text-neutral-300 hover:text-white border border-white/10 hover:border-teal-500/40 transition-all backdrop-blur-md flex items-center gap-2">
                <span>View Blueprint</span>
                <ArrowUpRight className="w-4 h-4 text-teal-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-6 mt-6">
          {[
            { label: 'AFFECTED CITIZENS', value: '197 Million', accent: 'text-teal-400' },
            { label: 'TREATMENT GAP', value: '83% Untreated', accent: 'text-[#F4A261]' },
            { label: 'PSYCHIATRIST DENSITY', value: '0.75 per 100k', accent: 'text-emerald-400' },
            { label: 'INDIC LANGUAGES', value: '10+ Native', accent: 'text-teal-300' }
          ].map((item, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">{item.label}</div>
              <div className={`font-serif-editorial text-xl sm:text-2xl font-normal ${item.accent}`}>{item.value}</div>
            </div>
          ))}
        </div>

      </section>

      {/* Infinite Horizontal Metrics Ticker */}
      <section className="relative h-16 bg-[#0F172A]/90 border-y border-white/10 overflow-hidden flex items-center z-20">
        <div className="animate-infinite-ticker flex gap-12 whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{item.label}:</span>
              <span className="text-sm font-mono font-semibold text-teal-300 bg-teal-950/40 px-2 py-0.5 rounded border border-teal-500/30">{item.value}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4A261] ml-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Treatment Gap Analysis Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#F4A261] mb-2 block">Socio-Cultural Landscape</span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
            India's Mental Healthcare Crisis
          </h2>
          <p className="text-neutral-300 text-lg font-light">
            Structural scarcity, language isolation, and acute social stigma prevent 8 out of 10 individuals from accessing professional psychiatric intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-serif-editorial text-2xl text-white mb-6 flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-[#F4A261]" />
              Treatment Gap by Mental Health Condition
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentGapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="condition" stroke="#a3a3a3" fontSize={12} />
                  <YAxis stroke="#a3a3a3" fontSize={12} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '12px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="gap" fill="#14B8A6" radius={[8, 8, 0, 0]} />
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
                accent: 'text-[#F4A261]'
              },
              {
                icon: Languages,
                title: 'Linguistic Exclusion',
                desc: 'Most traditional therapy tools are built exclusively in English, leaving over 90% of the population without accessible care in native Indic languages.',
                accent: 'text-teal-400'
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
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Tier Safety Level & Crisis Matrix Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/40 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            Clinical Safety Matrix
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
            4-Tier Safety & Crisis Escalation System
          </h2>
          <p className="text-neutral-300 text-lg font-light">
            Multi-signal safety classifier automatically routes user distress states from self-guided CBT tools up to immediate 1-tap emergency helpline connections.
          </p>
        </div>

        {/* 4-Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { level: 'Level 1', label: 'Mild Stress', color: 'border-emerald-500/30 bg-emerald-950/20', textColor: 'text-emerald-400', action: 'Gemma CBT companion & journal prompts' },
            { level: 'Level 2', label: 'Moderate Anxiety', color: 'border-teal-500/30 bg-teal-950/20', textColor: 'text-teal-300', action: 'Interactive 4-7-8 breathwork & mood logs' },
            { level: 'Level 3', label: 'High Distress', color: 'border-[#F4A261]/30 bg-[#F4A261]/10', textColor: 'text-[#F4A261]', action: 'Tele-MANAS counselor booking & SMS alert' },
            { level: 'Level 4', label: 'Active Crisis', color: 'border-red-500/30 bg-red-950/20', textColor: 'text-red-400', action: '1-Tap emergency helpline dialer & protocol' },
          ].map((stage) => (
            <div key={stage.level} className={`glass-card ${stage.color} p-6 rounded-2xl text-center`}>
              <Activity className={`w-8 h-8 ${stage.textColor} mx-auto mb-3`} />
              <div className={`font-serif-editorial text-2xl ${stage.textColor} mb-1`}>{stage.level}</div>
              <div className="text-sm font-semibold text-white mb-2">{stage.label}</div>
              <div className="text-xs text-neutral-300 leading-relaxed font-light">{stage.action}</div>
            </div>
          ))}
        </div>

        {/* 3-Step Protocol Pipeline */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h3 className="font-serif-editorial text-3xl text-white mb-8 text-center">Crisis Response Protocol Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mb-4 text-teal-300 font-mono font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-white mb-2">Real-Time Distress Detection</h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                DistilBERT & Indic BERT safety classifiers analyze every voice and text message for distress signals with sub-50ms inference.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F4A261]/20 border border-[#F4A261]/40 flex items-center justify-center mb-4 text-[#F4A261] font-mono font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-white mb-2">Immediate Grounding Intervention</h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Validates emotions, provides non-judgmental CBT grounding techniques, and remains present without leaving the user isolated.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-400 font-mono font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-white mb-2">Direct Human Handoff</h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                One-touch seamless connection to Tele-MANAS (14416), NIMHANS (080-26995000), or Vandrevala Foundation (+91 9999 666 555).
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Feature Grid (3-Column Glass Grid) */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/40 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            System Modules
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white mb-4">
            Architected for High Impact & Safety
          </h2>
          <p className="text-neutral-300 text-lg font-light">
            Engineered around Google Gemma's compact model footprint to deliver private, real-time supportive therapy and emergency triage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: 'Google Gemma Model Engine',
              desc: 'Fine-tuned on Indic conversational corpora. Executes locally via INT4 quantization with sub-100ms response latency.',
              color: 'text-teal-400'
            },
            {
              icon: Languages,
              title: 'Native Indic Multilingual',
              desc: 'Natively understands Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Punjabi, and Hinglish code-switching.',
              color: 'text-[#F4A261]'
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
              color: 'text-teal-300'
            },
            {
              icon: Activity,
              title: 'CBT Grounding & Breathwork',
              desc: 'Embedded interactive toolkits including 4-7-8 breathing animations, PHQ-9 mood tracking, and sensory grounding.',
              color: 'text-[#F4A261]'
            },
            {
              icon: Users,
              title: 'ASHA Worker Portal',
              desc: 'Equips grassroots healthcare workers with voice-guided screening tools to assist rural populations effectively.',
              color: 'text-emerald-400'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 icon-hover-rotate">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-serif-editorial text-2xl text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code & IDE System Integration Block */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto relative border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-editorial text-4xl text-white mb-3">On-Device Triage Pipeline</h2>
          <p className="text-neutral-300 text-sm font-light">
            Minimal runtime overhead. Sub-100ms response execution with zero external cloud dependencies.
          </p>
        </div>

        <div className="bg-[#0F172A]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-4 py-3 bg-[#0B132B] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-neutral-400 ml-2">gemma_indic_triage.ts</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Gemma LiteRT INT4</span>
            </div>
          </div>

          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
            <pre>
              <code>
                <span className="text-teal-400">import</span> &#123; <span className="text-[#F4A261]">GemmaLiteRTEngine</span>, <span className="text-[#F4A261]">IndicBERTClassifier</span> &#125; <span className="text-teal-400">from</span> <span className="text-emerald-400">'@google/gemma-litert'</span>;<br /><br />
                <span className="text-neutral-500">// Initialize zero-knowledge on-device pipeline</span><br />
                <span className="text-teal-400">const</span> <span className="text-[#F4A261]">gemmaEngine</span> = <span className="text-teal-400">new</span> <span className="text-[#F4A261]">GemmaLiteRTEngine</span>(&#123;<br />
                &nbsp;&nbsp;modelPath: <span className="text-emerald-400">'models/gemma-2b-indic-int4.bin'</span>,<br />
                &nbsp;&nbsp;quantization: <span className="text-emerald-400">'INT4'</span>,<br />
                &nbsp;&nbsp;maxMemoryMB: <span className="text-[#F4A261]">1200</span><br />
                &#125;);<br /><br />
                <span className="text-teal-400">export async function</span> <span className="text-[#F4A261]">processIndicMessage</span>(userMessage: <span className="text-teal-400">string</span>) &#123;<br />
                &nbsp;&nbsp;<span className="text-teal-400">const</span> distressLevel = <span className="text-teal-400">await</span> IndicBERTClassifier.evaluateDistress(userMessage);<br /><br />
                &nbsp;&nbsp;<span className="text-teal-400">if</span> (distressLevel &gt;= <span className="text-[#F4A261]">3</span>) &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">return</span> EmergencyTriageRouter.triggerHelplineReferral(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helpline: <span className="text-emerald-400">'Tele-MANAS (14416)'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">'IMMEDIATE_ESCALATION'</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
                &nbsp;&nbsp;&#125;<br /><br />
                &nbsp;&nbsp;<span className="text-teal-400">return await</span> gemmaEngine.generateSupportiveResponse(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;prompt: userMessage,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;safetyGuardrails: <span className="text-emerald-400">'WHO_MHGAP_STRICT'</span><br />
                &nbsp;&nbsp;&#125;);<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Calming Sanctuary */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center relative">
        <div className="glass-card p-12 sm:p-16 rounded-3xl border border-teal-500/30 relative overflow-hidden bg-gradient-to-b from-teal-950/30 to-[#0F172A]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-white mb-6 relative z-10">
            Join Us in Democratizing <span className="italic text-[#F4A261]">Mental Healthcare</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-xl mx-auto mb-10 font-light relative z-10">
            Powered by Google Gemma. Designed for 1.4 billion people. Experience the interactive live companion demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/demo" className="btn-soothing-primary px-8 py-4 text-sm font-semibold tracking-wider flex items-center gap-2">
              <span>Try Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pitch" className="px-8 py-4 rounded-full glass-card text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white border border-white/10 hover:border-teal-500/40 transition-all flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 text-teal-400" />
              <span>View Pitch Deck</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
