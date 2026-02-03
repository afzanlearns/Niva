# Niva — स्वास्थ्य मित्र

**A Community Health Companion for Rural India**

Niva is not a symptom checker. It is a **longitudinal health companion** — an AI-powered platform that learns a family's health story over time, understands the cultural and environmental context of its users, works fully offline on low-end devices, and functions as a piece of community health infrastructure when aggregated across a village.

It is built for the 700 million Indians who live in areas where the nearest doctor is hours away, connectivity is unreliable, and the first line of health response is often a grandmother's recipe or a neighbor's advice.

---

## What Makes This Different

Every community health app does symptom checking. Niva does five things that no single existing product does together:

**The Family Health Tree** — One device, one household, many profiles. Manages the health of an entire family unit (the actual unit of life in rural India) and surfaces hereditary risks passively across generations.

**The Longitudinal Health Narrative** — Remembers everything across months. If you reported joint pain last month and a headache this week, it connects the dots. Health is a story, not a series of disconnected questions.

**The Cultural Bridge** — Acknowledges Ayurvedic and folk remedies instead of dismissing them. Maps traditional practices to evidence, and tells you when a remedy helps and when it is time to see a doctor. This is the feature that builds trust.

**The Community Intelligence Layer** — Anonymized, consent-based aggregation turns individual health queries into a village-level early warning system. Outbreak detection. Heatmaps for health workers. Public health infrastructure built from the ground up.

**The Adaptive Literacy Engine** — Does not assume a fixed education level. Learns how each user communicates and adjusts its explanations dynamically. The same knowledge, delivered differently for a 5th-grade reading level and a college-educated caregiver.

---

## Architecture at a Glance

```
┌─────────────────────────────────────────────────────────┐
│                    USER'S DEVICE                         │
│                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │  Voice   │  │   On-Device  │  │  Family Health  │   │
│  │ Interface│→ │  AI Engine   │→ │     Tree        │   │
│  └──────────┘  │  (< 80MB)    │  │  (Multi-Profile)│   │
│                └──────┬───────┘  └─────────────────┘   │
│                       │                                 │
│  ┌────────────────────▼─────────────────────┐          │
│  │         Local Knowledge Base             │          │
│  │  Cultural Bridge │ Symptoms │ Regional   │          │
│  └──────────────────────────────────────────┘          │
│                       │                                 │
│  ┌────────────────────▼─────────────────────┐          │
│  │     SQLite (All user data, offline)      │          │
│  └──────────────────────────────────────────┘          │
│                       │                                 │
│  ┌────────────────────▼─────────────────────┐          │
│  │  Anonymization Pipeline                  │          │
│  │  (k-anonymity, k=10, before any upload)  │          │
│  └──────────────────────────────────────────┘          │
└──────────────────────┬──────────────────────────────────┘
                       │ (only anonymized aggregates)
                       ▼ (when connectivity exists)
┌─────────────────────────────────────────────────────────┐
│                    CLOUD BACKEND                         │
│                                                         │
│  ┌─────────────┐  ┌────────────────┐  ┌─────────────┐  │
│  │   Sync      │  │  Community     │  │   Clinic    │  │
│  │  Service    │  │ Intelligence   │  │  Gateway    │  │
│  │             │  │ (Outbreak Det) │  │ (Opt-in)    │  │
│  └─────────────┘  └────────────────┘  └─────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  TimescaleDB (time-series) │ PostgreSQL (refs)  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

Individual health data **never leaves the device** unless the user explicitly opts in. The cloud only ever sees anonymized, aggregated village-level signals.

---

## Project Documentation

| Document | What It Covers |
|----------|----------------|
| `PRD.md` | Product requirements: who the users are, what the five product pillars are, every feature requirement with IDs and priorities, user stories, success metrics |
| `TRD.md` | Technical requirements: AI strategy (on-device vs cloud split), data architecture, API contracts, offline architecture, security model, full tech stack |
| `ARCHITECTURE.md` | Project structure: complete file tree for android + backend + shared, module interaction maps, data flow diagrams, ADRs, testing strategy, deployment |
| `README.md` | This file. Start here. |

---

## Tech Stack (Summary)

| Layer | Technology |
|-------|-----------|
| Mobile App | Kotlin, Jetpack Compose, Hilt (DI) |
| On-Device AI | ONNX Runtime Android, INT4 Quantized LLM |
| Voice | Vosk (STT), Mozilla TTS — both on-device |
| Local DB | SQLite via Room |
| Backend | Go (microservices), Python (ML pipelines) |
| Cloud DB | PostgreSQL + TimescaleDB |
| Infrastructure | AWS Mumbai (ECS, RDS, CloudFront) |
| Messaging | MQTT (sync), FCM (push notifications) |
| CI/CD | GitHub Actions + Fastlane |

---

## Getting Started

### Prerequisites

- Android Studio (Flamingo or later)
- JDK 17+
- Go 1.21+ (for backend services)
- Python 3.10+ (for ML pipelines and knowledge base compilation)
- Docker (for local backend development)

### 1. Clone the Repository

```bash
git clone https://github.com/niva/niva.git
cd niva
```

### 2. Set Up the Development Environment

```bash
# This script installs dependencies, compiles the knowledge base into app assets,
# and configures local environment variables.
./scripts/setup_dev.sh
```

### 3. Run the Android App (Local Development)

```bash
cd android
# Open in Android Studio, or run via CLI:
./gradlew app:assembleDebug
# The debug APK is at app/build/outputs/apk/debug/
```

For the app to function in development mode, the on-device model files must be present in `android/app/src/main/assets/models/`. The `setup_dev.sh` script handles this by downloading the quantized model from the project's model registry.

### 4. Run the Backend Locally

```bash
cd backend
docker-compose up
# This spins up all microservices + PostgreSQL + TimescaleDB
# The API gateway is available at http://localhost:8080
```

### 5. Run All Tests

```bash
./scripts/run_tests.sh
# Runs:
#   - Android unit + integration tests
#   - Backend service tests
#   - Knowledge base validation
#   - Anonymization pipeline tests
```

---

## Project Structure (Quick View)

```
niva/
├── android/            # Android app (the product)
│   └── app/src/main/
│       ├── java/.../
│       │   ├── core/       # App config & DI
│       │   ├── domain/     # Business logic (no Android deps)
│       │   ├── data/       # SQLite + remote API clients
│       │   ├── ai/         # On-device AI (engine, pipeline, knowledge)
│       │   ├── sync/       # Sync + anonymization
│       │   ├── ui/         # Screens, ViewModels, components
│       │   └── reminder/   # Notifications
│       └── assets/         # Models + knowledge base JSON
├── backend/            # Cloud microservices
│   ├── services/       # sync, community-intelligence, clinic-gateway, etc.
│   └── api-gateway/    # Single entry point
├── shared/             # Contracts, knowledge base source, i18n, test data
├── scripts/            # Dev tooling
├── docker/             # Container definitions
└── docs/               # All documentation
```

Full details in `ARCHITECTURE.md`.

---

## Key Design Decisions (Why, Not Just What)

**Why offline-first?** Because connectivity in the target deployment areas is unreliable — especially during monsoon season when cell towers fail. A health app that stops working when it is most needed (rural, remote, nighttime) would be worse than nothing.

**Why on-device AI?** Latency, privacy, and connectivity. A local model responds in under 2 seconds with no network. It also means health conversations never traverse a network — a significant privacy advantage.

**Why k-anonymity before sync?** Because health data is the most sensitive category of personal data. The architecture is designed so that even a fully compromised backend server cannot reconstruct any individual's health record from the data it has received.

**Why a Cultural Bridge instead of just "standard" medical advice?** Because trust is the product's single most important asset. An app that dismisses what a grandmother told you will be uninstalled within a week. An app that says "here is why that remedy works, and here is when you need something more" will be shared to every household in the village.

**Why a Family Health Tree instead of individual profiles?** Because in rural India, health decisions are made at the household level. A mother manages everyone. A shared device is the norm. Designing for one person on one device is designing for the wrong user.

---

## Contributing

Contributions are welcome. Before starting work on any feature or module, read the relevant section of `ARCHITECTURE.md` to understand the module boundaries and interaction contracts. All PRs must include updates to `ARCHITECTURE.md` if they add or modify any module or data flow.

---

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

## Contact

For questions about the project, the architecture, or potential partnerships with government health programs, reach out via the project's GitHub Discussions tab.

---

*Niva. स्वास्थ्य मित्र. A friend who knows health. Built for the people who need it most.*
