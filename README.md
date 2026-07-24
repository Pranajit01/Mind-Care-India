# 🇮🇳 Mind Care India (Mann Saathi)
### *Democratizing Accessible, Privacy-First Mental Healthcare Across India Powered by Google Gemma*

[![Google Gemma](https://img.shields.io/badge/AI_Engine-Google_Gemma-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/gemma)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25_On--Device_&_Anonymized-00C853?style=for-the-badge&logo=shield)](https://github.com/Pranajit01/Mind-Care-India)
[![Indic Languages](https://img.shields.io/badge/Languages-10+_Indian_Dialects-FF6D00?style=for-the-badge)](https://github.com/Pranajit01/Mind-Care-India)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](LICENSE)

---

## 🎯 Executive Summary (Hackathon Edition)

Over **197 million people** in India suffer from mental health conditions, yet more than **83% face a critical treatment gap**. The barriers are vast: acute social stigma, prohibitive costs, extreme scarcity of mental health professionals (only 0.75 psychiatrists per 100,000 people), and a severe shortage of regional Indian language support.

**Mind Care India (Mann Saathi / मन्न साथी)** is an empathetic, multilingual, privacy-first AI mental health platform designed specifically for India's socio-cultural ecosystem. Powered by **Google's latest Gemma open model architecture**, Mann Saathi delivers real-time, low-latency supportive dialogue, instant crisis triage, and psychoeducation across 10+ Indian languages (including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Punjabi, and Hinglish).

By leveraging Gemma's compact footprint and state-of-the-art reasoning capabilities, Mind Care India operates seamlessly on low-cost mobile hardware and low-bandwidth networks—ensuring that every citizen, from urban metros to tier-3 rural villages, receives safe, anonymous, and culturally resonant support.

---

## 🚀 Why Google Gemma is the Core AI Engine

Google's **Gemma** model series was selected as the sole foundation for Mind Care India. Gemma provides unparalleled advantages for edge deployment and localized healthcare AI:

```
+-----------------------------------------------------------------------------------+
|                            GOOGLE GEMMA MODEL ADVANTAGES                          |
+-----------------------------------------------------------------------------------+
|  1. Indic Language Tokens     | Fine-tuned tokenization for Hindi, Bengali, Tamil,|
|                               | Telugu & Hinglish code-switching.                 |
+-------------------------------+---------------------------------------------------+
|  2. Ultra-Low Latency (<100ms)| INT4 quantized execution on LiteRT for instant    |
|                               | interactive voice & text response.                |
+-------------------------------+---------------------------------------------------+
|  3. 100% Privacy & On-Device  | Compact memory footprint (~1.2GB RAM) enables     |
|                               | zero-cloud data leak guarantees.                  |
+-------------------------------+---------------------------------------------------+
|  4. Clinical Safety Alignment | Fine-tuned with WHO mhGAP guidelines & empathetic |
|                               | non-judgmental conversational boundaries.         |
+-----------------------------------------------------------------------------------+
```

### Key Technical Capabilities Powered by Gemma:
1. **Multilingual Indic Competence**: Gemma natively comprehends nuances in Indian code-switching (e.g. Hinglish: *"Mujhe bahut anxiety ho rahi hai, kya karun?"*), preserving emotional context that cloud APIs fail to grasp.
2. **On-Device Edge Deployment**: Quantized using INT4 LiteRT, Gemma runs directly inside browser/mobile runtimes with a minimal RAM footprint (~1.2GB), making high-quality AI accessible on budget smartphones without requiring active internet connection.
3. **Zero-Knowledge Privacy**: Sensitivity in mental healthcare requires absolute confidentiality. User conversations are processed locally or with zero PII exposure, eliminating data-harvesting risks.
4. **Clinical Triage Guardrails**: Integrated with DistilBERT distress detection, Gemma acts as a supportive Level-1 companion while safely escalating high-risk cases (Level 3-4) to verified national helplines like Tele-MANAS, NIMHANS, and Vandrevala Foundation.

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      USER INTERACTION & INPUT                           │
│           (Voice Input / Indic Text / Code-Switched Hinglish)           │
└─────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     SAFETY & INTENT CLASSIFIER                          │
│     - Real-Time Self-Harm & Distress Screening                          │
│     - Safety Threshold Gatekeeper (DistilBERT / Custom Guardrails)       │
└─────────────────────────────────────────────────────────────────────────┘
               │                                       │
        [Safe / Level 1-2]                      [Crisis / Level 3-4]
               │                                       │
               ▼                                       ▼
┌──────────────────────────────┐        ┌─────────────────────────────────┐
│    GOOGLE GEMMA INFERENCE    │        │    EMERGENCY TRIAGE ROUTER      │
│  - INT4 Quantized via LiteRT │        │  - Tele-MANAS (14416 / 1800-891) │
│  - Indic RAG Context Vector  │        │  - NIMHANS Crisis Hotline       │
│  - Empathetic Supportive AI  │        │  - Local Emergency Contacts     │
└──────────────────────────────┘        └─────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     OUTPUT & SPEECH SYNTHESIS                           │
│      - Indic Text Response  |  Regional TTS  |  CBT Grounding Tools      │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Core Features & Platform Modules

### 1. 🗣️ Mann Saathi AI Companion
- **Continuous Empathetic Conversation**: Grounded in Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) principles.
- **Multilingual Support**: Supports 10+ major Indian languages with real-time script and voice translation.
- **Interactive Grounding Exercises**: Guided 4-7-8 breathing exercises, sensory grounding, and mood tracking widgets embedded into chat responses.

### 2. 🚨 4-Tier Crisis Triage & Safety System
- **Level 1 (Mild Stress)**: Self-guided CBT activities, journal prompts, and Gemma-powered supportive conversation.
- **Level 2 (Moderate Anxiety)**: Structured coping mechanisms, mood logs, and community forum connections.
- **Level 3 (High Distress)**: Immediate prompt escalation, human counsellor booking, and SMS alert to emergency contact.
- **Level 4 (Active Crisis / Emergency)**: Direct 1-tap dialer for Tele-MANAS, Vandrevala Foundation, and NIMHANS helplines with geo-located support.

### 3. 👩‍⚕️ ASHA & Healthcare Worker Portal
- Designed for community health workers (ASHA workers, ANMs) to conduct standardized PHQ-9 and GAD-7 screenings in rural areas with voice assistance.

### 4. 🎨 Interactive Mockup & Prototype Sandbox
- Integrated sandbox canvas (`@workspace/mockup-sandbox`) allowing developers, clinicians, and hackathon judges to inspect UI components, canvas routes, and workflow previews.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **AI Model Engine** | **Google Gemma Open Model Series** (Quantized INT4 via LiteRT) |
| **Safety Guardrails** | Custom Indic Distress Classifier & WHO mhGAP Rules Engine |
| **Frontend UI** | React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, Framer Motion |
| **Design System** | Radix UI Primitives, Lucide Icons, Custom Modern Theme System |
| **Backend API** | Express 5, Node.js 24 |
| **Database & ORM** | PostgreSQL, Drizzle ORM, SQLite & ChromaDB (Local RAG) |
| **Build & Monorepo** | pnpm Workspaces, esbuild |

---

## 💻 Local Setup & Development Guide

### Prerequisites
- **Node.js**: `v24.0.0` or higher
- **pnpm**: `v11.0.0` or higher

### 1. Clone the Repository
```bash
git clone https://github.com/Pranajit01/Mind-Care-India.git
cd Mind-Care-India
```

### 2. Install Dependencies
```bash
npx pnpm install
```

### 3. Run Development Servers
- **Main Web Application (`Mann Saathi`)**:
  ```bash
  npx pnpm --filter @workspace/mann-saathi run dev
  ```
- **Backend API Server**:
  ```bash
  npx pnpm --filter @workspace/api-server run dev
  ```
- **Mockup Prototyping Sandbox**:
  ```bash
  npx pnpm --filter @workspace/mockup-sandbox run dev
  ```

### 4. Code Quality & Type Checking
```bash
npx pnpm run typecheck
npx pnpm run build
```

---

## 📂 Repository Structure

```
Mind-Care-India/
├── artifacts/
│   ├── mann-saathi/            # Primary Web Application (React + Vite)
│   │   ├── src/
│   │   │   ├── components/     # UI Design System & Component Library
│   │   │   ├── pages/          # Landing, Companion Demo, Blueprint, Architecture
│   │   │   └── App.tsx         # Application Router & State Management
│   │   └── vite.config.ts
│   ├── mockup-sandbox/         # Prototyping Canvas & UI Component Sandbox
│   └── api-server/             # Express 5 Backend API
├── lib/
│   ├── api-client-react/       # Generated React Query API hooks
│   ├── api-spec/               # OpenAPI 3.0 specification & Orval config
│   ├── api-zod/                # Zod schemas derived from API spec
│   └── db/                     # Drizzle ORM schemas & database migrations
├── scripts/                    # Build & workspace automation scripts
├── pnpm-workspace.yaml         # Workspace monorepo configuration
├── package.json                # Monorepo dependencies & scripts
└── README.md                   # Hackathon Documentation
```

---

## 🏆 Hackathon Impact & Scalability Roadmap

1. **Phase 1 (Current Prototype)**: High-fidelity web platform powered by Google Gemma with Indic voice/text dialogue, CBT toolkits, and 4-tier crisis escalation.
2. **Phase 2 (District Deployment)**: Integration with Government Tele-MANAS API and state health departments for district-level mental health screening.
3. **Phase 3 (Offline Mesh Sync)**: Bluetooth P2P sync for offline village clusters, enabling community health workers to sync screening data periodically without active cellular connectivity.

---

## 📄 License & Attribution

Distributed under the **Apache 2.0 License**. See `LICENSE` for details.

Developed with ❤️ for the Hackathon using **Google Gemma Open Models**.
