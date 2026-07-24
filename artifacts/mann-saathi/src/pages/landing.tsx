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
    <div className="min-h-screen bg-[#050505] text-foreground selection:bg-[#DB4A2B] selection:text-white overflow-x-hidden relative font-sans">
      
      {/* 5% Opacity Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay" />

      {/* Hero Section - Typographic Drama + WebGL LightRays */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        
        {/* Interactive WebGL LightRays Background - Bright Electric Blue */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#0066ff"
          raysSpeed={2.0}
          lightSpread={1.6}
          rayLength={2.2}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.02}
          distortion={0.06}
        />

        {/* Vibrant Glowing Background Orbs */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.6)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none animate-float-orb" />
        <div className="absolute top-[250px] left-[-100px] w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4)_0%,transparent_70%)] blur-[110px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[180px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.3)_0%,transparent_70%)] blur-[110px] rounded-full pointer-events-none animate-float-orb" style={{ animationDelay: '7s' }} />

        {/* Top Tagline */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#1E1E1E]/90 text-xs font-mono tracking-widest uppercase text-[#F8A348] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#DB4A2B] animate-ping" />
            <span>Google Gemma Open Model • On-Device Privacy</span>
          </div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400">
            MIND CARE INDIA // MANN SAATHI
          </span>
        </div>

        {/* Proportional Hero Headline & Content */}
        <div className="relative z-10 my-auto py-2">
          <h1 className="font-clash text-5xl sm:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.92] tracking-tighter mb-4 hero-text-glow">
            EMPATHETIC{' '}
            <span className="text-[#DB4A2B] italic font-normal">
              MENTAL CARE
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-4">
            <p className="lg:col-span-7 text-base sm:text-lg text-neutral-200 max-w-xl font-light leading-relaxed">
              An offline-first, multilingual AI companion engineered for India's 1.4 billion citizens. Delivering high-fidelity supportive care, 24/7 crisis triage, and CBT tools across 10+ Indic languages.
            </p>

            {/* Interactive Directional Fill CTA Buttons */}
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/demo" className="btn-directional-fill px-6 py-3.5 text-xs tracking-[0.2em] rounded-none flex items-center gap-2.5 shadow-[0_0_25px_rgba(219,74,43,0.4)]">
                <span>Start Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/blueprint" className="px-6 py-3.5 border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-white hover:border-[#DB4A2B] hover:text-[#DB4A2B] transition-colors flex items-center gap-2 backdrop-blur-md">
                <span>Technical Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-6 mt-6">
          {[
            { label: 'AFFECTED CITIZENS', value: '197 MILLION' },
            { label: 'TREATMENT GAP', value: '83% UNTREATED' },
            { label: 'PSYCHIATRIST DENSITY', value: '0.75 PER 100K' },
            { label: 'INDIC LANGUAGES', value: '10+ NATIVE' }
          ].map((item, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">{item.label}</div>
              <div className="font-clash text-lg sm:text-xl text-white font-bold">{item.value}</div>
            </div>
          ))}
        </div>

      </section>

      {/* Infinite Horizontal Metrics Ticker */}
      <section className="relative h-16 bg-[#1E1E1E] border-y border-white/10 overflow-hidden flex items-center z-20">
        <div className="animate-infinite-ticker flex gap-12 whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{item.label}:</span>
              <span className="text-sm font-mono font-bold text-[#F8A348] px-2 py-0.5 bg-black/40 border border-white/10">{item.value}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DB4A2B] ml-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Massive Category Divider 1 */}
      <div className="py-24 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden bg-gradient-to-r from-[#F8A348]/10 to-transparent">
        <h2 className="font-clash text-[10vw] font-extrabold uppercase text-white/90 tracking-tighter leading-none">
          SOCIO-CULTURAL CONTEXT
        </h2>
      </div>

      {/* Problem & Treatment Gap Analysis Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="glass-card p-8 rounded-none border border-white/10 bg-[#1E1E1E]/80">
            <h3 className="font-clash text-3xl text-white mb-6 uppercase tracking-tight flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-[#DB4A2B]" />
              Treatment Gap Breakdown
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentGapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="condition" stroke="#a3a3a3" fontSize={12} />
                  <YAxis stroke="#a3a3a3" fontSize={12} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E1E1E', borderColor: 'rgba(255,255,255,0.2)', borderRadius: '0px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="gap" fill="#DB4A2B" radius={[0, 0, 0, 0]} />
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
                accent: 'text-[#DB4A2B]'
              },
              {
                icon: Languages,
                title: 'Linguistic Exclusion',
                desc: 'Most traditional therapy tools are built exclusively in English, leaving over 90% of the population without accessible care in native Indic languages.',
                accent: 'text-[#F8A348]'
              },
              {
                icon: Shield,
                title: 'Social Stigma & Privacy Risks',
                desc: 'Fear of social judgment causes users to avoid clinics. Mind Care India ensures 100% on-device processing so personal feelings never leak.',
                accent: 'text-[#FF89A9]'
              }
            ].map((problem, i) => (
              <div key={i} className="p-6 border border-white/10 bg-[#111111] hover:border-[#DB4A2B] transition-colors flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 shrink-0">
                  <problem.icon className={`w-6 h-6 ${problem.accent}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-1">{problem.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Massive Category Divider 2 */}
      <div className="py-24 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden bg-gradient-to-r from-[#DB4A2B]/10 to-transparent text-right">
        <h2 className="font-clash text-[10vw] font-extrabold uppercase text-white/90 tracking-tighter leading-none">
          CLINICAL SAFETY MATRIX
        </h2>
      </div>

      {/* 4-Tier Safety Level & Crisis Matrix Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
        
        {/* 4-Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { level: 'LEVEL 01', label: 'MILD STRESS', color: 'border-emerald-500/40 bg-emerald-950/20', textColor: 'text-emerald-400', action: 'Gemma CBT companion & journal prompts' },
            { level: 'LEVEL 02', label: 'MODERATE ANXIETY', color: 'border-[#F8A348]/40 bg-[#F8A348]/10', textColor: 'text-[#F8A348]', action: 'Interactive 4-7-8 breathwork & mood logs' },
            { level: 'LEVEL 03', label: 'HIGH DISTRESS', color: 'border-[#DB4A2B]/40 bg-[#DB4A2B]/10', textColor: 'text-[#DB4A2B]', action: 'Tele-MANAS counselor booking & SMS alert' },
            { level: 'LEVEL 04', label: 'ACTIVE CRISIS', color: 'border-red-500/40 bg-red-950/20', textColor: 'text-red-400', action: '1-Tap emergency helpline dialer & protocol' },
          ].map((stage) => (
            <div key={stage.level} className={`p-6 border ${stage.color} text-center space-y-3`}>
              <Activity className={`w-8 h-8 ${stage.textColor} mx-auto`} />
              <div className={`font-mono text-xs tracking-widest ${stage.textColor}`}>{stage.level}</div>
              <div className="font-clash text-xl font-bold text-white uppercase">{stage.label}</div>
              <div className="text-xs text-neutral-400 leading-relaxed font-light">{stage.action}</div>
            </div>
          ))}
        </div>

        {/* 3-Step Protocol Pipeline */}
        <div className="p-8 border border-white/10 bg-[#111111]">
          <h3 className="font-clash text-3xl text-white mb-8 text-center uppercase tracking-tight">Crisis Response Protocol Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-[#F8A348] text-[#F8A348] font-mono font-bold text-lg flex items-center justify-center mb-4">
                01
              </div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Real-Time Detection</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                DistilBERT & Indic BERT safety classifiers analyze every voice and text message for distress signals with sub-50ms inference.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-[#DB4A2B] text-[#DB4A2B] font-mono font-bold text-lg flex items-center justify-center mb-4">
                02
              </div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Immediate Intervention</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Validates emotions, provides non-judgmental CBT grounding techniques, and remains present without leaving the user isolated.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-emerald-500 text-emerald-400 font-mono font-bold text-lg flex items-center justify-center mb-4">
                03
              </div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Direct Human Handoff</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                One-touch seamless connection to Tele-MANAS (14416), NIMHANS (080-26995000), or Vandrevala Foundation (+91 9999 666 555).
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Product & Module Grid (3-Column Brutalist Cards) */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-widest text-[#F8A348] uppercase mb-2">SYSTEM MODULES</div>
          <h2 className="font-clash text-4xl sm:text-6xl text-white uppercase tracking-tighter mb-4">
            Architected for High Impact & Safety
          </h2>
          <p className="text-neutral-400 text-lg font-light">
            Engineered around Google Gemma's compact model footprint to deliver private, real-time supportive therapy and emergency triage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: 'Google Gemma Model Engine',
              desc: 'Fine-tuned on Indic conversational corpora. Executes locally via INT4 quantization with sub-100ms response latency.',
              color: 'text-[#DB4A2B]'
            },
            {
              icon: Languages,
              title: 'Native Indic Multilingual',
              desc: 'Natively understands Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Punjabi, and Hinglish code-switching.',
              color: 'text-[#F8A348]'
            },
            {
              icon: AlertTriangle,
              title: '4-Tier Emergency Triage',
              desc: 'Distress detection algorithms automatically escalate high-risk signals to Tele-MANAS (14416) and NIMHANS emergency helplines.',
              color: 'text-[#FF89A9]'
            },
            {
              icon: Lock,
              title: 'Zero-Knowledge Privacy',
              desc: 'Encrypted local SQLite database and ChromaDB vector embeddings keep all conversation history strictly on-device.',
              color: 'text-[#DB4A2B]'
            },
            {
              icon: Activity,
              title: 'CBT Grounding & Breathwork',
              desc: 'Embedded interactive toolkits including 4-7-8 breathing animations, PHQ-9 mood tracking, and sensory grounding.',
              color: 'text-[#F8A348]'
            },
            {
              icon: Users,
              title: 'ASHA Worker Portal',
              desc: 'Equips grassroots healthcare workers with voice-guided screening tools to assist rural populations effectively.',
              color: 'text-emerald-400'
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 border border-white/10 bg-[#111111] hover:border-[#DB4A2B] transition-all hover:scale-[1.02] group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 icon-hover-rotate">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-clash text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-[#FF89A9] transition-colors">{feature.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12-Column Campaign Block */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/10 bg-[#1E1E1E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <span className="text-xs font-mono tracking-widest text-[#F8A348] uppercase mb-4 block">// MISSION MANIFESTO</span>
            <h2 className="font-clash text-4xl sm:text-6xl text-white uppercase tracking-tighter leading-[0.9] mb-6">
              DEMOCRATIZING MENTAL WELLNESS FOR EVERY CORNER OF INDIA
            </h2>
            <p className="text-neutral-300 text-base font-light leading-relaxed max-w-2xl">
              Mind Care India removes recurring cloud inference costs by executing Gemma on-device. State health departments can deploy AI companion services to rural panchayats with zero token budgets.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {[
              { title: 'Technical Blueprint', link: '/blueprint' },
              { title: 'On-Device Architecture', link: '/architecture' },
              { title: 'Target Personas', link: '/personas' },
              { title: 'Investor Pitch Deck', link: '/pitch' },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="flex items-center justify-between py-4 border-b border-white/20 text-white hover:text-[#DB4A2B] transition-colors group">
                <span className="font-clash text-lg uppercase tracking-wider">{item.title}</span>
                <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-[#DB4A2B] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Code & IDE System Integration Block */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-clash text-4xl text-white uppercase tracking-tighter mb-3">On-Device Triage Pipeline</h2>
          <p className="text-neutral-400 text-sm font-light">
            Minimal runtime overhead. Sub-100ms response execution with zero external cloud dependencies.
          </p>
        </div>

        <div className="bg-[#111111] border border-white/10 shadow-2xl">
          <div className="px-4 py-3 bg-[#1E1E1E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#DB4A2B]" />
              <div className="w-3 h-3 bg-[#F8A348]" />
              <div className="w-3 h-3 bg-emerald-500" />
              <span className="text-xs font-mono text-neutral-400 ml-2">gemma_indic_triage.ts</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-[#DB4A2B]" />
              <span>Gemma LiteRT INT4</span>
            </div>
          </div>

          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
            <pre>
              <code>
                <span className="text-[#DB4A2B]">import</span> &#123; <span className="text-[#F8A348]">GemmaLiteRTEngine</span>, <span className="text-[#F8A348]">IndicBERTClassifier</span> &#125; <span className="text-[#DB4A2B]">from</span> <span className="text-emerald-400">'@google/gemma-litert'</span>;<br /><br />
                <span className="text-neutral-500">// Initialize zero-knowledge on-device pipeline</span><br />
                <span className="text-[#DB4A2B]">const</span> <span className="text-[#F8A348]">gemmaEngine</span> = <span className="text-[#DB4A2B]">new</span> <span className="text-[#F8A348]">GemmaLiteRTEngine</span>(&#123;<br />
                &nbsp;&nbsp;modelPath: <span className="text-emerald-400">'models/gemma-2b-indic-int4.bin'</span>,<br />
                &nbsp;&nbsp;quantization: <span className="text-emerald-400">'INT4'</span>,<br />
                &nbsp;&nbsp;maxMemoryMB: <span className="text-[#DB4A2B]">1200</span><br />
                &#125;);<br /><br />
                <span className="text-[#DB4A2B]">export async function</span> <span className="text-[#F8A348]">processIndicMessage</span>(userMessage: <span className="text-[#DB4A2B]">string</span>) &#123;<br />
                &nbsp;&nbsp;<span className="text-[#DB4A2B]">const</span> distressLevel = <span className="text-[#DB4A2B]">await</span> IndicBERTClassifier.evaluateDistress(userMessage);<br /><br />
                &nbsp;&nbsp;<span className="text-[#DB4A2B]">if</span> (distressLevel &gt;= <span className="text-[#DB4A2B]">3</span>) &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#DB4A2B]">return</span> EmergencyTriageRouter.triggerHelplineReferral(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helpline: <span className="text-emerald-400">'Tele-MANAS (14416)'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">'IMMEDIATE_ESCALATION'</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
                &nbsp;&nbsp;&#125;<br /><br />
                &nbsp;&nbsp;<span className="text-[#DB4A2B]">return await</span> gemmaEngine.generateSupportiveResponse(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;prompt: userMessage,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;safetyGuardrails: <span className="text-emerald-400">'WHO_MHGAP_STRICT'</span><br />
                &nbsp;&nbsp;&#125;);<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Call to Action Poster Banner */}
      <section className="py-28 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto text-center relative">
        <div className="p-12 sm:p-20 border border-white/10 bg-[#1E1E1E] relative overflow-hidden">
          <h2 className="font-clash text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none mb-6">
            READY TO FADE THE <span className="text-[#DB4A2B] italic font-normal">TREATMENT GAP?</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-xl mx-auto mb-10 font-light">
            Powered by Google Gemma. Designed for 1.4 billion people. Experience the interactive live companion demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/demo" className="btn-directional-fill px-10 py-5 text-xs tracking-[0.25em] flex items-center justify-center gap-3">
              <span>Launch Demo Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pitch" className="px-10 py-5 border border-white/20 text-xs font-mono uppercase tracking-[0.25em] text-white hover:border-[#DB4A2B] hover:text-[#DB4A2B] transition-colors flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Investor Pitch</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
