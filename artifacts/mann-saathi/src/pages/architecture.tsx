import { Database, Cloud, Smartphone, Shield, Zap, Brain, MessageSquare, Mic } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Technical Architecture
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A privacy-first, offline-capable AI system built on Google's Gemma with multi-layered safety protocols
          </p>
        </div>

        {/* System Overview Diagram */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">System Architecture Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Input */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-3">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg">User Input</h3>
              </div>
              <div className="space-y-3">
                {['Voice Input', 'Text Input', 'Whisper ASR (Offline)', 'Preprocessing'].map((item) => (
                  <div key={item} className="bg-card border border-card-border rounded-lg p-3 text-sm text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* On-Device Processing */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-3">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg">On-Device AI</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Safety Classifier',
                  'Intent Detection',
                  'Emotion Analysis',
                  'RAG Context Retrieval',
                  'Gemma 2B Inference',
                  'Response Filtering',
                  'Crisis Detection',
                ].map((item) => (
                  <div key={item} className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-center font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Output */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-3">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg">Response & Action</h3>
              </div>
              <div className="space-y-3">
                {['TTS Generation', 'Text Display', 'Mood Logging', 'Risk Assessment', 'Referral Trigger'].map((item) => (
                  <div key={item} className="bg-card border border-card-border rounded-lg p-3 text-sm text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
              <Shield className="w-4 h-4" />
              All processing happens on-device • Zero cloud dependency
            </div>
          </div>
        </div>

        {/* On-Device Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">On-Device Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: 'Gemma 2B (INT4 Quantized)',
                role: 'Primary Language Model',
                specs: ['1.2GB RAM footprint', '100ms response latency', 'Apache 2.0 license', 'IndicBERT training data'],
              },
              {
                icon: Shield,
                title: 'MedGemma 4B',
                role: 'Medical Context (Optional)',
                specs: ['Clinical guideline knowledge', 'WHO mhGAP trained', 'Activates for medical queries', '2.5GB RAM when loaded'],
              },
              {
                icon: Mic,
                title: 'Whisper Tiny (ONNX)',
                role: 'Offline Speech Recognition',
                specs: ['39M parameters', 'Multi-language support', 'Real-time transcription', '140MB model size'],
              },
              {
                icon: MessageSquare,
                title: 'DistilBERT Safety Classifier',
                role: 'Real-time Crisis Detection',
                specs: ['Fine-tuned on CLPsych', '95%+ sensitivity target', 'Multi-signal analysis', 'Sub-50ms inference'],
              },
              {
                icon: Database,
                title: 'SQLite + ChromaDB',
                role: 'Local Storage & RAG',
                specs: ['Encrypted conversation history', 'Vector embeddings', 'Context retrieval', 'AES-256 at rest'],
              },
              {
                icon: Zap,
                title: 'LiteRT (TensorFlow Lite)',
                role: 'ML Runtime',
                specs: ['Optimized for mobile', 'Hardware acceleration', 'Minimal power draw', 'Cross-platform support'],
              },
            ].map((component) => (
              <div key={component.title} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <component.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{component.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{component.role}</p>
                    <ul className="space-y-1">
                      {component.specs.map((spec) => (
                        <li key={spec} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Sync (Optional) */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Cloud Sync (When Online)</h2>
          <p className="text-muted-foreground mb-6">
            Optional sync for model updates and anonymized analytics. User data never leaves device unencrypted.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: 'FastAPI Backend',
                desc: 'Sync engine, referral routing, webhook handlers',
              },
              {
                icon: Database,
                title: 'PostgreSQL + pgvector',
                desc: 'Anonymized aggregate data, district-level analytics',
              },
              {
                icon: Zap,
                title: 'Redis Cache',
                desc: 'Session management, rate limiting',
              },
              {
                icon: Shield,
                title: 'Firebase Auth',
                desc: 'Anonymous authentication, no PII collection',
              },
              {
                icon: Cloud,
                title: 'GCS Bucket',
                desc: 'Encrypted model updates, versioned deployments',
              },
              {
                icon: Database,
                title: 'Pinecone / Weaviate',
                desc: 'Centralized vector DB for RAG content updates',
              },
            ].map((service) => (
              <div key={service.title} className="bg-card border border-card-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <service.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Gemma Over Alternatives?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Model</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Deployment</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">RAM</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Latency</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Indian Languages</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">License</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Privacy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: 'Generic Cloud LLM', deploy: 'Cloud-only', ram: 'N/A', latency: '500ms+', lang: 'Moderate', license: 'Proprietary', privacy: 'Cloud-stored', highlight: false },
                  { model: 'Heavyweight Edge Models', deploy: 'On-device', ram: '4GB+', latency: '250ms+', lang: 'Limited', license: 'Restricted', privacy: 'On-device', highlight: false },
                  { model: 'Google Gemma (Latest)', deploy: 'On-device / Edge', ram: '1.2GB', latency: '<100ms', lang: 'Native Indic (10+ Languages)', license: 'Apache 2.0', privacy: '100% On-device Privacy', highlight: true },
                ].map((row) => (
                  <tr key={row.model} className={`border-b border-border ${row.highlight ? 'bg-primary/5' : ''}`}>
                    <td className={`py-3 px-4 ${row.highlight ? 'font-bold text-primary' : 'text-foreground'}`}>{row.model}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.deploy}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.ram}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.latency}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.lang}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.license}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.privacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="font-display font-bold text-lg text-foreground mb-3">Gemma Advantages</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Trained on IndicBERT corpus (2.9B tokens across 12 Indian languages)
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Runs on budget Android phones (Snapdragon 665+, 3GB RAM)
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                100ms inference latency feels conversational, not robotic
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Apache 2.0 license allows commercial use and fine-tuning
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                INT4 quantization reduces size by 75% with minimal quality loss
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                8W power draw preserves battery for all-day availability
              </li>
            </ul>
          </div>
        </div>

        {/* Data Flow */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Conversation Processing Pipeline</h2>
          <div className="bg-card border border-card-border rounded-xl p-8">
            <div className="space-y-4">
              {[
                { step: 1, label: 'User Input', detail: 'Voice/Text → Whisper ASR → Text normalization', color: 'bg-accent/20 text-accent' },
                { step: 2, label: 'Safety Check', detail: 'DistilBERT crisis detection, harmful content filter', color: 'bg-red-500/20 text-red-600' },
                { step: 3, label: 'Intent & Emotion', detail: 'Sentence transformer embeddings, classify user state', color: 'bg-blue-500/20 text-blue-600' },
                { step: 4, label: 'Context Retrieval', detail: 'ChromaDB vector search for relevant conversation history & resources', color: 'bg-purple-500/20 text-purple-600' },
                { step: 5, label: 'LLM Inference', detail: 'Gemma 2B generates empathetic response with safety guardrails', color: 'bg-primary/20 text-primary' },
                { step: 6, label: 'Response Filter', detail: 'Validate no diagnosis/prescription, appropriate tone', color: 'bg-yellow-500/20 text-yellow-600' },
                { step: 7, label: 'Risk Scoring', detail: 'Assign risk level (0-4), trigger escalation if needed', color: 'bg-orange-500/20 text-orange-600' },
                { step: 8, label: 'Output', detail: 'TTS generation or text display, log locally', color: 'bg-green-500/20 text-green-600' },
              ].map((stage) => (
                <div key={stage.step} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full ${stage.color} flex items-center justify-center font-bold flex-shrink-0`}>
                    {stage.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{stage.label}</h3>
                    <p className="text-sm text-muted-foreground">{stage.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Architecture */}
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Security & Privacy Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">Zero-Knowledge Design</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All conversations encrypted locally with user-derived key</li>
                <li>• Server receives only anonymized risk scores for analytics</li>
                <li>• No user identifier linked to conversation content</li>
                <li>• Differential privacy (ε=1.0) for district-level statistics</li>
                <li>• Local-only conversation history, no cloud backup</li>
              </ul>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">DPDP Act 2023 Compliance</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Explicit consent for every data element collected</li>
                <li>• Right to erasure (full local delete)</li>
                <li>• Data minimization (collect only for safety)</li>
                <li>• Sensitive health data requires explicit consent</li>
                <li>• No cross-border transfer without user consent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
