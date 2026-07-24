import { useState } from 'react';
import { ChevronRight, FileText, Menu, X, Sparkles, Terminal, Code2, Shield, Cpu, Layers, Activity, Brain } from 'lucide-react';
import { LightRays } from '@/components/LightRays';
import { Link } from 'wouter';

export default function Blueprint() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const techSections = [
    { id: 'pipeline', title: 'On-Device Gemma Pipeline', icon: Terminal },
    { id: 'architecture', title: 'AI System Architecture', icon: Cpu },
    { id: 'safety', title: 'Crisis & Safety Triage', icon: Shield },
    { id: 'indic', title: 'Multilingual Indic NLP', icon: Layers },
    { id: 'quantization', title: 'INT4 Quantization & Performance', icon: Activity },
    { id: 'blueprint', title: 'Full System Blueprint Docs', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#07080a] text-white selection:bg-[#ff6b4a]/30 selection:text-amber-200 overflow-x-hidden relative font-sans pt-24 pb-20">
      
      {/* Living Animated WebGL LightRays & CSS Aurora Blades */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff6b4a"
        raysSpeed={1.5}
        lightSpread={1.5}
        rayLength={2.0}
        followMouse={true}
        mouseInfluence={0.4}
        noiseAmount={0.02}
        distortion={0.05}
      />

      {/* Living Warm Aurora Blades */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] aurora-blade-1 rounded-full pointer-events-none" />
      <div className="absolute top-[300px] left-[-150px] w-[500px] h-[500px] aurora-blade-2 rounded-full pointer-events-none" />
      <div className="absolute top-[200px] right-[-150px] w-[500px] h-[500px] aurora-blade-3 rounded-full pointer-events-none" />

      {/* Main Container with Clean Grid Padding - Zero Overlap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-mono tracking-wider text-amber-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b4a] animate-pulse" />
            <span>Google Gemma Open Model • On-Device Architecture</span>
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white uppercase leading-tight tracking-tight mb-4">
            Gemma <span className="text-warm-gradient">Tech System</span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Comprehensive technical architecture detailing on-device INT4 Gemma model execution, sub-100ms inference pipeline, and 100% private crisis detection.
          </p>
        </div>

        {/* Clean Horizontal Glass Category Filter Tabs (No Overlapping Sidebars) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {techSections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`glass-nav-btn shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'glass-nav-btn-active text-white'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#ff6b4a]'}`} />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>

        {/* Section Content Area - Clean Grid Layout with Zero Overlap */}
        <div className="space-y-12">
          
          {/* 1. On-Device Gemma Triage IDE Pipeline Code Block */}
          {(activeTab === 'pipeline' || activeTab === 'blueprint') && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Terminal className="w-5 h-5 text-[#ff6b4a]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-white">On-Device Triage Pipeline</h3>
                    <p className="text-xs text-neutral-400 font-mono">gemma_indic_triage.ts • LiteRT INT4 Execution</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Zero Cloud Dependency</span>
                </div>
              </div>

              {/* IDE Window Mockup */}
              <div className="bg-[#07080a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm text-neutral-300">
                <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-neutral-400 ml-2">gemma_indic_triage.ts</span>
                  </div>
                  <span className="text-xs text-amber-300">Gemma LiteRT INT4</span>
                </div>

                <div className="p-6 overflow-x-auto leading-relaxed">
                  <pre>
                    <code>
                      <span className="text-[#ff6b4a]">import</span> &#123; <span className="text-amber-300">GemmaLiteRTEngine</span>, <span className="text-amber-300">IndicBERTClassifier</span> &#125; <span className="text-[#ff6b4a]">from</span> <span className="text-emerald-400">'@google/gemma-litert'</span>;<br /><br />
                      <span className="text-neutral-500">// Initialize zero-knowledge on-device pipeline</span><br />
                      <span className="text-[#ff6b4a]">const</span> <span className="text-amber-300">gemmaEngine</span> = <span className="text-[#ff6b4a]">new</span> <span className="text-amber-300">GemmaLiteRTEngine</span>(&#123;<br />
                      &nbsp;&nbsp;modelPath: <span className="text-emerald-400">'models/gemma-2b-indic-int4.bin'</span>,<br />
                      &nbsp;&nbsp;quantization: <span className="text-emerald-400">'INT4'</span>,<br />
                      &nbsp;&nbsp;maxMemoryMB: <span className="text-amber-300">1200</span><br />
                      &#125;);<br /><br />
                      <span className="text-[#ff6b4a]">export async function</span> <span className="text-amber-300">processIndicMessage</span>(userMessage: <span className="text-[#ff6b4a]">string</span>) &#123;<br />
                      &nbsp;&nbsp;<span className="text-[#ff6b4a]">const</span> distressLevel = <span className="text-[#ff6b4a]">await</span> IndicBERTClassifier.evaluateDistress(userMessage);<br /><br />
                      &nbsp;&nbsp;<span className="text-[#ff6b4a]">if</span> (distressLevel &gt;= <span className="text-amber-300">3</span>) &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff6b4a]">return</span> EmergencyTriageRouter.triggerHelplineReferral(&#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helpline: <span className="text-emerald-400">'Tele-MANAS (14416)'</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">'IMMEDIATE_ESCALATION'</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
                      &nbsp;&nbsp;&#125;<br /><br />
                      &nbsp;&nbsp;<span className="text-[#ff6b4a]">return await</span> gemmaEngine.generateSupportiveResponse(&#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;prompt: userMessage,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;safetyGuardrails: <span className="text-emerald-400">'WHO_MHGAP_STRICT'</span><br />
                      &nbsp;&nbsp;&#125;);<br />
                      &#125;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 2. System Architecture Section */}
          {(activeTab === 'architecture' || activeTab === 'blueprint') && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <Brain className="w-8 h-8 text-[#ff6b4a] mb-4" />
                <h4 className="font-bold text-lg text-white mb-2">On-Device Quantization</h4>
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  INT4 4-bit quantization reduces memory footprint from 8GB to under 1.2GB, enabling smooth inference on standard smartphones.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Shield className="w-8 h-8 text-amber-300 mb-4" />
                <h4 className="font-bold text-lg text-white mb-2">Zero Data Leakage</h4>
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  Conversations and embeddings are stored exclusively in an encrypted local SQLite database using SQLCipher.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Layers className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-lg text-white mb-2">10+ Indic Languages</h4>
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  Fine-tuned tokenizer handles code-switching between Hindi, Bengali, Tamil, Telugu, Marathi, and Hinglish natively.
                </p>
              </div>
            </div>
          )}

          {/* 3. Crisis Triage Specs */}
          {(activeTab === 'safety' || activeTab === 'blueprint') && (
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-sans font-bold text-2xl text-white mb-6">4-Level Clinical Safety Triage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20">
                  <div className="font-bold text-emerald-400 text-lg mb-1">Level 1</div>
                  <div className="text-sm text-white font-medium mb-1">Mild Stress</div>
                  <div className="text-xs text-neutral-300">Self-guided CBT journal prompts</div>
                </div>
                <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20">
                  <div className="font-bold text-amber-300 text-lg mb-1">Level 2</div>
                  <div className="text-sm text-white font-medium mb-1">Moderate Anxiety</div>
                  <div className="text-xs text-neutral-300">4-7-8 breathing & grounding</div>
                </div>
                <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-950/20">
                  <div className="font-bold text-orange-400 text-lg mb-1">Level 3</div>
                  <div className="text-sm text-white font-medium mb-1">High Distress</div>
                  <div className="text-xs text-neutral-300">Tele-MANAS counselor SMS alert</div>
                </div>
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/20">
                  <div className="font-bold text-red-400 text-lg mb-1">Level 4</div>
                  <div className="text-sm text-white font-medium mb-1">Active Crisis</div>
                  <div className="text-xs text-neutral-300">1-Tap emergency helpline dialer</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
