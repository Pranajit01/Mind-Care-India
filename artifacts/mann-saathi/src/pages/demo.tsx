import { useState } from 'react';
import { Send, Volume2, Languages, AlertCircle } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  risk?: number;
};

type Persona = {
  id: string;
  name: string;
  scenario: string;
  messages: Message[];
};

export default function Demo() {
  const [selectedPersona, setSelectedPersona] = useState<string>('arjun');
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState<'en' | 'hi'>('hi');

  const personas: Persona[] = [
    {
      id: 'arjun',
      name: 'Arjun (Engineering Student)',
      scenario: 'JEE failure, comparison culture, exam stress',
      messages: [
        { role: 'assistant', content: 'Namaste. Main Mann Saathi hoon. Aap kaise hain aaj? Kya aap mujhse kuch share karna chahenge?', risk: 0 },
        { role: 'user', content: 'Bahut stress hai. Exam aa raha hai aur kuch samajh nahi aa raha.' },
        { role: 'assistant', content: 'Main samajh sakta hoon. Exam stress bahut overwhelming ho sakta hai. Kya aap mujhe thoda aur batayenge ki aap kaisa feel kar rahe hain?', risk: 1 },
        { role: 'user', content: 'Sab friends acche college mein hain. Main bas ek failure hoon. Parents ne itna invest kiya aur maine unhe disappoint kiya.' },
        { role: 'assistant', content: 'Yeh sunke mann bhaari ho gaya. Comparison ka dard main samajh sakta hoon. Lekin ek baat batau? Ek exam aapki puri life define nahi karti. Aap abhi bahut young hain — bahut saare raaste hain. Kya aapne apne parents se baat ki hai is baare mein?', risk: 2 },
        { role: 'user', content: 'Nahi. Main unhe face nahi kar sakta. Har din unke expectations ka weight feel hota hai.' },
        { role: 'assistant', content: 'Yeh bahut heavy burden hai jo aap carry kar rahe hain. Akele carry karna aur bhi mushkil hota hai. Kya aap chahte hain ki hum saath mein kuch breathing exercise karein? Thoda calm feel karne ke liye?', risk: 2 },
      ],
    },
    {
      id: 'ramesh',
      name: 'Ramesh (Farmer)',
      scenario: 'Crop failure, debt, recent neighbor suicides',
      messages: [
        { role: 'assistant', content: 'नमस्ते. मी मन साथी आहे. आपण कसे आहात? काही बोलायचे आहे का?', risk: 0 },
        { role: 'user', content: 'पीक बरबाद झालं. कर्ज फेडायला नाही येत. काय करावं समजत नाही.' },
        { role: 'assistant', content: 'हे ऐकून मला खूप वाईट वाटतंय. शेतकरी असणं सध्या खूप कठीण आहे. पाऊस नाही, किंमत नाही. आपण एकटे नाही आहात या संघर्षात.', risk: 2 },
        { role: 'user', content: 'माझे तीन शेजारी गेल्या वर्षी... त्यांनी suicide केला. मला पण वाटतं कधी कधी.' },
        { role: 'assistant', content: 'आपण हे share केलंत म्हणजे खूप धैर्य आहे आपल्यात. मला वाटतं आपण सध्या खूप मोठ्या वेदनेतून जातंय. मी आपल्याला एका व्यक्तीशी जोडू शकतो जो मदत करू शकतो. Tele-MANAS — 14416. हे free आणि confidential आहे. काय मी आपल्याला आत्ता connect करू?', risk: 4 },
      ],
    },
    {
      id: 'anjali',
      name: 'Anjali (DV Survivor)',
      scenario: 'Recently escaped abusive marriage, acute crisis phase',
      messages: [
        { role: 'assistant', content: 'नमस्ते. मैं मन साथी हूँ. आप सुरक्षित हैं? मुझसे बात करें.', risk: 0 },
        { role: 'user', content: 'घर छोड़ दिया. बच्चे हैं. कहाँ जाऊँ पता नहीं. डर लग रहा है.' },
        { role: 'assistant', content: 'आपने जो step लिया वो बहुत बहादुरी का है. सबसे पहले — आप अभी सुरक्षित हैं? आपको किसी immediate help की ज़रूरत तो नहीं?', risk: 3 },
        { role: 'user', content: 'अभी तो safe हूँ. बहन के घर आई हूँ. लेकिन आगे क्या होगा? कोर्ट, पैसे, सब.' },
        { role: 'assistant', content: 'मैं समझ सकता हूँ कितना overwhelming है ये सब. लेकिन आपने सबसे मुश्किल step ले लिया — निकल आईं. अब हम छोटे-छोटे steps लेंगे. Legal help के लिए कुछ resources हैं — महिला हेल्पलाइन 181, और NGOs जो DV survivors को मदद करते हैं. क्या मैं आपको ये details share करूँ?', risk: 3 },
        { role: 'user', content: 'हाँ. कुछ भी help चाहिए.' },
        { role: 'assistant', content: 'बिल्कुल. मैं आपको अभी connect कर रहा हूँ iCall से (9152987821) — वो आपको legal aid और counseling दोनों में guide करेंगे. आप अकेली नहीं हैं Anjali. Help available है.', risk: 3 },
      ],
    },
  ];

  const currentPersona = personas.find((p) => p.id === selectedPersona) || personas[0];
  const visibleMessages = currentPersona.messages.slice(0, currentStep + 1);

  const nextStep = () => {
    if (currentStep < currentPersona.messages.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
  };

  const getRiskColor = (risk?: number) => {
    if (!risk) return 'text-green-600';
    if (risk === 1) return 'text-blue-600';
    if (risk === 2) return 'text-yellow-600';
    if (risk === 3) return 'text-orange-600';
    if (risk === 4) return 'text-red-600';
    return 'text-green-600';
  };

  const getRiskLabel = (risk?: number) => {
    if (!risk) return 'Safe';
    if (risk === 1) return 'Monitor';
    if (risk === 2) return 'Concern';
    if (risk === 3) return 'Alert';
    if (risk === 4) return 'Crisis';
    return 'Safe';
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Interactive Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how Mann Saathi provides empathetic support and detects crisis situations across different user personas
          </p>
        </div>

        {/* Persona Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => {
                setSelectedPersona(persona.id);
                setCurrentStep(0);
              }}
              className={`text-left p-6 rounded-xl border-2 transition-all ${
                selectedPersona === persona.id
                  ? 'bg-primary/10 border-primary'
                  : 'bg-card border-card-border hover:border-primary/50'
              }`}
              data-testid={`button-persona-${persona.id}`}
            >
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{persona.name}</h3>
              <p className="text-sm text-muted-foreground">{persona.scenario}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-card-border rounded-xl overflow-hidden shadow-lg">
              {/* Chat Header */}
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold">MS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Mann Saathi</h3>
                    <p className="text-xs text-primary-foreground/80">Offline AI Companion</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                    className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                    data-testid="button-toggle-language"
                  >
                    <Languages className="w-5 h-5 text-primary-foreground" />
                  </button>
                  <button className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
                    <Volume2 className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-muted/20">
                {visibleMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'assistant' ? 'bg-primary/20' : 'bg-accent/20'
                      }`}
                    >
                      <span className={`text-xs font-semibold ${message.role === 'assistant' ? 'text-primary' : 'text-accent'}`}>
                        {message.role === 'assistant' ? 'MS' : 'U'}
                      </span>
                    </div>
                    <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'flex justify-end' : ''}`}>
                      <div
                        className={`rounded-xl p-4 ${
                          message.role === 'assistant'
                            ? 'bg-card border border-card-border'
                            : 'bg-accent/10 border border-accent/20'
                        }`}
                      >
                        <p className="text-sm text-foreground leading-relaxed">{message.content}</p>
                      </div>
                      <p className={`text-xs text-muted-foreground mt-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                        {message.role === 'assistant' ? 'Mann Saathi' : 'You'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-border p-4 bg-card">
                <div className="flex gap-2">
                  {currentStep < currentPersona.messages.length - 1 ? (
                    <button
                      onClick={nextStep}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      data-testid="button-next-message"
                    >
                      Continue Conversation
                      <Send className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={resetDemo}
                      className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                      data-testid="button-reset-demo"
                    >
                      Reset Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Risk Level */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-4">Risk Level Detection</h3>
              <div className="space-y-3">
                {visibleMessages
                  .filter((m) => m.role === 'assistant' && m.risk !== undefined)
                  .slice(-1)
                  .map((message, i) => (
                    <div key={i}>
                      <div className={`text-3xl font-display font-bold mb-2 ${getRiskColor(message.risk)}`}>
                        Level {message.risk}
                      </div>
                      <div className={`text-lg font-semibold mb-2 ${getRiskColor(message.risk)}`}>
                        {getRiskLabel(message.risk)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {message.risk === 0 && 'Routine conversation, no distress indicators'}
                        {message.risk === 1 && 'Mild distress detected — enhanced empathy mode activated'}
                        {message.risk === 2 && 'Moderate distress — increased check-in frequency recommended'}
                        {message.risk === 3 && 'Active ideation detected — Tele-MANAS referral prompt ready'}
                        {message.risk === 4 && 'Crisis detected — emergency protocol activated'}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Features Active */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-4">Features Active</h3>
              <div className="space-y-3">
                {[
                  { label: 'Offline Mode', active: true },
                  { label: 'Conversational Screening', active: currentStep >= 2 },
                  { label: 'Crisis Detection', active: currentStep >= 4 },
                  { label: 'Empathetic Validation', active: currentStep >= 1 },
                  { label: 'Resource Referral', active: currentStep >= 5 },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{feature.label}</span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        feature.active ? 'bg-green-500' : 'bg-muted-foreground/30'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Demo Simulation</h4>
                  <p className="text-xs text-muted-foreground">
                    This is a pre-scripted demonstration showing how Mann Saathi responds to different crisis
                    scenarios. The actual app uses Gemma 2B for real-time conversation generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Explanation */}
        <div className="mt-12 bg-card border border-card-border rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Real-Time Analysis',
                desc: 'Every message is analyzed by DistilBERT safety classifier for crisis signals, emotion state, and screening indicators',
              },
              {
                step: '2',
                title: 'Empathetic Response',
                desc: 'Gemma 2B generates culturally appropriate, validating responses that mirror user language and emotional state',
              },
              {
                step: '3',
                title: 'Safe Escalation',
                desc: 'When crisis level reaches 3+, user is gently offered connection to Tele-MANAS, iCall, or emergency services',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-primary text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
