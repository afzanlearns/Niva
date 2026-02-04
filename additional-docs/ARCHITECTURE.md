# Niva — Revolutionary Architecture & Project Structure

**Document Version:** 2.0  
**Date:** February 4, 2026  
**Owner:** Engineering Team  
**Status:** Enhanced with Revolutionary Technical Architecture  
**Depends On:** PRD v2.0, TRD v2.0  

---

## 1. Purpose

This document is the **revolutionary blueprint** for the world's most advanced community health platform. It defines the complete project structure for a system that delivers predictive health intelligence, emotional health integration, community wisdom networks, and intergenerational health mapping — capabilities that have never been combined in a single platform.

---

## 2. Revolutionary Repository Layout

The monorepo now supports breakthrough capabilities across multiple deployment targets and revolutionary technologies.

```
niva/
├── android/                    # Revolutionary on-device health AI application
├── backend/                    # Advanced cloud microservices with predictive analytics
├── blockchain/                 # Community wisdom verification network (NEW)
├── ai-models/                  # Specialized AI models and training pipelines (NEW)
├── environmental-data/         # Environmental health data processing (NEW)
├── shared/                     # Enhanced shared libraries and contracts
├── docs/                       # Comprehensive project documentation
├── scripts/                    # Advanced dev tooling and deployment automation
├── docker/                     # Container definitions for all services
├── .github/                    # Enhanced CI/CD workflows
├── PRD.md                      # Enhanced Product Requirements Document
├── TRD.md                      # Revolutionary Technical Requirements Document
├── ARCHITECTURE.md             # This enhanced document
└── README.md                   # Revolutionary project entry point
```

---

## 3. Revolutionary Android Application Structure

The Android app now incorporates breakthrough AI capabilities, predictive health intelligence, and emotional health integration in a clean, scalable architecture.

```
android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/niva/health/
│   │   │   │   ├── core/                       # Enhanced app core with AI orchestration
│   │   │   │   │   ├── NivaApp.kt              # Revolutionary application class
│   │   │   │   │   ├── di/                     # Enhanced dependency injection
│   │   │   │   │   │   ├── AppModule.kt
│   │   │   │   │   │   ├── AiModule.kt         # Multi-modal AI models
│   │   │   │   │   │   ├── PredictiveModule.kt # Predictive intelligence DI
│   │   │   │   │   │   ├── EmotionalModule.kt  # Emotional health AI DI
│   │   │   │   │   │   ├── BlockchainModule.kt # Community wisdom network
│   │   │   │   │   │   └── EnvironmentalModule.kt # Environmental data DI
│   │   │   │   │   └── config/                # Revolutionary configuration
│   │   │   │   │       ├── AppConfig.kt
│   │   │   │   │       ├── AiConfig.kt        # AI model configurations
│   │   │   │   │       └── PredictiveConfig.kt # Prediction parameters
│   │   │   │   │
│   │   │   │   ├── domain/                    # Enhanced business logic
│   │   │   │   │   ├── model/                 # Revolutionary data models
│   │   │   │   │   │   ├── Household.kt       # Enhanced with 3-generation mapping
│   │   │   │   │   │   ├── Profile.kt         # Enhanced with genetic predisposition
│   │   │   │   │   │   ├── HealthEvent.kt     # Enhanced with emotional indicators
│   │   │   │   │   │   ├── PredictiveRisk.kt  # Health risk predictions (NEW)
│   │   │   │   │   │   ├── EmotionalState.kt  # Emotional health tracking (NEW)
│   │   │   │   │   │   ├── CulturalWisdom.kt  # Traditional knowledge (NEW)
│   │   │   │   │   │   ├── EnvironmentalData.kt # Environmental health data (NEW)
│   │   │   │   │   │   └── HealthCoaching.kt  # AI coaching recommendations (NEW)
│   │   │   │   │   ├── usecase/               # Revolutionary use cases
│   │   │   │   │   │   ├── PredictHealthRisks.kt # Pre-symptomatic prediction (NEW)
│   │   │   │   │   │   ├── AssessEmotionalHealth.kt # Holistic health assessment (NEW)
│   │   │   │   │   │   ├── ValidateCulturalWisdom.kt # Community wisdom validation (NEW)
│   │   │   │   │   │   ├── GenerateHealthCoaching.kt # Personalized coaching (NEW)
│   │   │   │   │   │   ├── AnalyzeIntergenerationalPatterns.kt # 3-gen analysis (NEW)
│   │   │   │   │   │   ├── StartHealthConversation.kt # Enhanced with emotion
│   │   │   │   │   │   ├── GetHealthTimeline.kt # Enhanced with predictions
│   │   │   │   │   │   └── DetectFamilyRisks.kt # Enhanced genetic analysis
│   │   │   │   │   └── repository/            # Enhanced repository interfaces
│   │   │   │   │       ├── PredictiveRepository.kt # Health prediction data (NEW)
│   │   │   │   │       ├── EmotionalRepository.kt # Emotional health data (NEW)
│   │   │   │   │       ├── CulturalWisdomRepository.kt # Traditional knowledge (NEW)
│   │   │   │   │       ├── EnvironmentalRepository.kt # Environmental data (NEW)
│   │   │   │   │       └── HealthCoachingRepository.kt # Coaching data (NEW)
│   │   │   │   │
│   │   │   │   ├── data/                      # Enhanced data layer
│   │   │   │   │   ├── local/                 # Revolutionary local storage
│   │   │   │   │   │   ├── NivaDatabase.kt    # Enhanced database with new entities
│   │   │   │   │   │   ├── dao/               # Enhanced DAOs
│   │   │   │   │   │   │   ├── PredictiveDao.kt # Prediction data access (NEW)
│   │   │   │   │   │   │   ├── EmotionalDao.kt # Emotional health DAO (NEW)
│   │   │   │   │   │   │   ├── CulturalWisdomDao.kt # Traditional knowledge DAO (NEW)
│   │   │   │   │   │   │   ├── EnvironmentalDao.kt # Environmental data DAO (NEW)
│   │   │   │   │   │   │   └── HealthCoachingDao.kt # Coaching data DAO (NEW)
│   │   │   │   │   │   └── entity/            # Enhanced database entities
│   │   │   │   │   │       ├── PredictiveRiskEntity.kt # Risk prediction storage (NEW)
│   │   │   │   │   │       ├── EmotionalStateEntity.kt # Emotional tracking (NEW)
│   │   │   │   │   │       └── CulturalWisdomEntity.kt # Traditional knowledge (NEW)
│   │   │   │   │   ├── remote/               # Enhanced cloud API clients
│   │   │   │   │   │   ├── PredictiveApiClient.kt # Prediction service API (NEW)
│   │   │   │   │   │   ├── EmotionalApiClient.kt # Emotional health API (NEW)
│   │   │   │   │   │   ├── BlockchainApiClient.kt # Wisdom verification API (NEW)
│   │   │   │   │   │   └── EnvironmentalApiClient.kt # Environmental data API (NEW)
│   │   │   │   │   └── repository/           # Enhanced repository implementations
│   │   │   │   │       ├── PredictiveRepositoryImpl.kt # Prediction repo (NEW)
│   │   │   │   │       └── EmotionalRepositoryImpl.kt # Emotional repo (NEW)
│   │   │   │   │
│   │   │   │   ├── ai/                       # Revolutionary AI module
│   │   │   │   │   ├── engine/               # Multi-modal AI engines
│   │   │   │   │   │   ├── HealthCompanionEngine.kt # Enhanced with emotion
│   │   │   │   │   │   ├── PredictiveEngine.kt # Health prediction AI (NEW)
│   │   │   │   │   │   ├── EmotionalIntelligenceEngine.kt # Emotion recognition (NEW)
│   │   │   │   │   │   ├── CulturalAdaptationEngine.kt # Cultural sensitivity (NEW)
│   │   │   │   │   │   └── HealthCoachingEngine.kt # Personalized coaching (NEW)
│   │   │   │   │   ├── models/               # Specialized AI models
│   │   │   │   │   │   ├── HealthPredictionModel.kt # Risk prediction model (NEW)
│   │   │   │   │   │   ├── EmotionRecognitionModel.kt # Voice emotion analysis (NEW)
│   │   │   │   │   │   ├── CulturalContextModel.kt # Cultural adaptation (NEW)
│   │   │   │   │   │   └── EnvironmentalCorrelationModel.kt # Env-health links (NEW)
│   │   │   │   │   ├── pipeline/             # Enhanced AI pipelines
│   │   │   │   │   │   ├── PredictiveRiskPipeline.kt # Risk assessment pipeline (NEW)
│   │   │   │   │   │   ├── EmotionalAnalysisPipeline.kt # Emotion processing (NEW)
│   │   │   │   │   │   ├── HolisticHealthPipeline.kt # Mind-body integration (NEW)
│   │   │   │   │   │   └── IntergenerationalPipeline.kt # 3-gen analysis (NEW)
│   │   │   │   │   └── knowledge/            # Enhanced knowledge systems
│   │   │   │   │       ├── CommunityWisdomEngine.kt # Blockchain wisdom (NEW)
│   │   │   │   │       ├── EnvironmentalHealthEngine.kt # Env correlation (NEW)
│   │   │   │   │       └── IntergenerationalEngine.kt # Family patterns (NEW)
│   │   │   │   │
│   │   │   │   ├── prediction/               # Predictive health intelligence (NEW)
│   │   │   │   │   ├── RiskPredictor.kt      # Core prediction engine
│   │   │   │   │   ├── SeasonalForecaster.kt # Seasonal disease prediction
│   │   │   │   │   ├── EnvironmentalAnalyzer.kt # Environmental risk analysis
│   │   │   │   │   ├── PersonalRiskCalendar.kt # Individual risk calendars
│   │   │   │   │   └── CommunityTrendAnalyzer.kt # Community pattern analysis
│   │   │   │   │
│   │   │   │   ├── emotional/                # Emotional health integration (NEW)
│   │   │   │   │   ├── EmotionalStateDetector.kt # Voice/text emotion detection
│   │   │   │   │   ├── HolisticHealthAssessor.kt # Mind-body health evaluation
│   │   │   │   │   ├── CulturalMentalHealthAdapter.kt # Cultural mental health
│   │   │   │   │   ├── StressPhysicalCorrelator.kt # Stress-symptom correlation
│   │   │   │   │   └── SupportNetworkMatcher.kt # Anonymous support matching
│   │   │   │   │
│   │   │   │   ├── blockchain/               # Community wisdom network (NEW)
│   │   │   │   │   ├── WisdomVerifier.kt     # Blockchain wisdom verification
│   │   │   │   │   ├── CommunityConsensus.kt # Community validation system
│   │   │   │   │   ├── RemedyEffectivenessTracker.kt # Anonymous effectiveness tracking
│   │   │   │   │   └── CulturalKnowledgePreserver.kt # Knowledge preservation
│   │   │   │   │
│   │   │   │   ├── coaching/                 # AI-powered health coaching (NEW)
│   │   │   │   │   ├── PersonalizedCoach.kt  # Individual coaching engine
│   │   │   │   │   ├── CulturalLifestyleAdapter.kt # Cultural lifestyle advice
│   │   │   │   │   ├── EconomicAwareRecommender.kt # Budget-conscious advice
│   │   │   │   │   ├── SeasonalOptimizer.kt  # Seasonal lifestyle optimization
│   │   │   │   │   └── CommunityChallenger.kt # Social health challenges
│   │   │   │   │
│   │   │   │   ├── environmental/            # Environmental health monitoring (NEW)
│   │   │   │   │   ├── EnvironmentalMonitor.kt # Real-time environmental data
│   │   │   │   │   ├── AirQualityAnalyzer.kt # Air quality health correlation
│   │   │   │   │   ├── WaterQualityTracker.kt # Water safety monitoring
│   │   │   │   │   ├── WeatherHealthCorrelator.kt # Weather-health patterns
│   │   │   │   │   └── AgriculturalHealthLinker.kt # Crop-health connections
│   │   │   │   │
│   │   │   │   ├── ui/                       # Revolutionary user interface
│   │   │   │   │   ├── screen/              # Enhanced screens
│   │   │   │   │   │   ├── prediction/      # Predictive health screens (NEW)
│   │   │   │   │   │   │   ├── RiskCalendarScreen.kt # Personal risk calendar
│   │   │   │   │   │   │   ├── PredictionDashboardScreen.kt # Health predictions
│   │   │   │   │   │   │   └── PreventiveActionScreen.kt # Preventive recommendations
│   │   │   │   │   │   ├── emotional/       # Emotional health screens (NEW)
│   │   │   │   │   │   │   ├── HolisticHealthScreen.kt # Mind-body health view
│   │   │   │   │   │   │   ├── EmotionalWellnessScreen.kt # Emotional tracking
│   │   │   │   │   │   │   └── SupportNetworkScreen.kt # Community support
│   │   │   │   │   │   ├── wisdom/          # Community wisdom screens (NEW)
│   │   │   │   │   │   │   ├── CulturalWisdomScreen.kt # Traditional knowledge
│   │   │   │   │   │   │   ├── RemedyVerificationScreen.kt # Remedy validation
│   │   │   │   │   │   │   └── ElderKnowledgeScreen.kt # Elder wisdom recording
│   │   │   │   │   │   ├── coaching/        # Health coaching screens (NEW)
│   │   │   │   │   │   │   ├── PersonalCoachScreen.kt # AI coaching interface
│   │   │   │   │   │   │   ├── LifestyleOptimizationScreen.kt # Lifestyle advice
│   │   │   │   │   │   │   └── CommunityChallengScreen.kt # Social challenges
│   │   │   │   │   │   └── environmental/   # Environmental health screens (NEW)
│   │   │   │   │   │       ├── EnvironmentalDashboardScreen.kt # Env health data
│   │   │   │   │   │       └── RiskAlertScreen.kt # Environmental risk alerts
│   │   │   │   │   └── component/           # Revolutionary UI components
│   │   │   │   │       ├── PredictiveRiskCard.kt # Risk prediction display (NEW)
│   │   │   │   │       ├── EmotionalStateIndicator.kt # Emotion visualization (NEW)
│   │   │   │   │       ├── CulturalWisdomCard.kt # Traditional knowledge display (NEW)
│   │   │   │   │       ├── HealthCoachingCard.kt # Coaching recommendations (NEW)
│   │   │   │   │       └── EnvironmentalRiskBadge.kt # Environmental alerts (NEW)
│   │   │   │
│   │   │   ├── assets/                     # Enhanced assets
│   │   │   │   ├── models/                 # Revolutionary AI models
│   │   │   │   │   ├── health_companion_v2.onnx # Enhanced health AI
│   │   │   │   │   ├── predictive_risk.onnx # Risk prediction model (NEW)
│   │   │   │   │   ├── emotion_recognition.onnx # Emotion AI model (NEW)
│   │   │   │   │   ├── cultural_adaptation.onnx # Cultural AI model (NEW)
│   │   │   │   │   └── environmental_correlation.onnx # Environmental AI (NEW)
│   │   │   │   ├── knowledge/              # Enhanced knowledge base
│   │   │   │   │   ├── community_wisdom.json # Blockchain-verified wisdom (NEW)
│   │   │   │   │   ├── environmental_correlations.json # Env-health data (NEW)
│   │   │   │   │   ├── intergenerational_patterns.json # Family patterns (NEW)
│   │   │   │   │   └── cultural_mental_health.json # Cultural mental health (NEW)
│   │   │   │   └── blockchain/             # Blockchain configuration (NEW)
│   │   │   │       └── wisdom_network_config.json # Community network config
│   │   │   └── test/                       # Revolutionary testing
│   │   │       └── java/com/niva/health/
│   │   │           ├── prediction/         # Predictive AI tests (NEW)
│   │   │           ├── emotional/          # Emotional AI tests (NEW)
│   │   │           ├── blockchain/         # Blockchain tests (NEW)
│   │   │           └── coaching/           # Coaching AI tests (NEW)
│   └── build.gradle.kts                    # Enhanced build configuration
├── wear/                                   # Revolutionary wearable companion
└── build.gradle.kts                        # Root build configuration
```

---

## 4. Backend Structure

The backend is a collection of microservices. Each service owns its own data store and communicates via a message broker for async operations and REST for synchronous queries. No service directly accesses another service's database.

```
backend/
├── services/
│   ├── sync-service/                       # Handles device sync upload/download
│   │   ├── src/
│   │   │   ├── main.go                     # Entry point
│   │   │   ├── handler/                    # HTTP handlers
│   │   │   │   ├── upload.go              # POST /sync/upload
│   │   │   │   └── updates.go             # GET /sync/updates
│   │   │   ├── auth/                       # Device token validation
│   │   │   │   └── token_verifier.go
│   │   │   └── store/                      # Database access
│   │   │       └── sync_store.go
│   │   ├── Dockerfile
│   │   └── go.mod
│   │
│   ├── community-intelligence/             # Outbreak detection & heatmaps
│   │   ├── src/
│   │   │   ├── main.py                     # Entry point (FastAPI)
│   │   │   ├── aggregator/                 # Signal aggregation logic
│   │   │   │   ├── cluster_aggregator.py
│   │   │   │   └── time_window_manager.py
│   │   │   ├── detection/                  # Outbreak detection algorithms
│   │   │   │   ├── threshold_detector.py   # Simple threshold-based
│   │   │   │   ├── statistical_detector.py # Z-score based anomaly detection
│   │   │   │   └── seasonal_model.py       # Accounts for seasonal baselines
│   │   │   ├── heatmap/                    # Heatmap generation
│   │   │   │   └── heatmap_generator.py
│   │   │   └── alert/                      # Alert routing
│   │   │       └── alert_router.py
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   │
│   ├── clinic-gateway/                     # Clinic referral integration
│   │   ├── src/
│   │   │   ├── main.go
│   │   │   ├── handler/
│   │   │   │   └── referral.go
│   │   │   ├── consent/                    # Consent verification
│   │   │   │   └── consent_checker.go
│   │   │   └── clinic/                     # Clinic API adapters
│   │   │       ├── phc_adapter.go         # Primary Health Centre
│   │   │       └── private_clinic_adapter.go
│   │   ├── Dockerfile
│   │   └── go.mod
│   │
│   ├── notification-service/               # Push notifications & reminders
│   │   ├── src/
│   │   │   ├── main.go
│   │   │   ├── scheduler/
│   │   │   │   └── reminder_scheduler.go
│   │   │   └── pusher/
│   │   │       └── fcm_pusher.go          # Firebase Cloud Messaging
│   │   ├── Dockerfile
│   │   └── go.mod
│   │
│   └── model-updater/                      # Pushes model updates to devices
│       ├── src/
│       │   ├── main.py
│       │   ├── trainer/                    # Fine-tuning pipeline (batch job)
│       │   │   └── feedback_trainer.py
│       │   └── pusher/                     # Model version management
│       │       └── model_pusher.py
│       ├── Dockerfile
│       └── requirements.txt
│
├── api-gateway/                            # Single entry point for all backend services
│   ├── src/
│   │   ├── main.go
│   │   ├── route/                          # Route definitions
│   │   │   └── routes.go
│   │   ├── middleware/                     # Auth, rate limiting, logging
│   │   │   ├── auth.go
│   │   │   ├── ratelimit.go
│   │   │   └── logger.go
│   │   └── health/                         # Health check endpoints
│   │       └── health.go
│   ├── Dockerfile
│   └── go.mod
│
├── database/                               # Database schemas & migrations
│   ├── timescaledb/                        # For time-series community signals
│   │   ├── 001_create_community_signals.sql
│   │   └── 002_create_outbreak_alerts.sql
│   ├── postgres/                           # For referrals & consent logs
│   │   ├── 001_create_referrals.sql
│   │   └── 002_create_consent_logs.sql
│   └── README.md                           # How to run migrations
│
└── docker-compose.yml                      # Local dev: all services + DBs
```

---

## 5. Shared & Tooling

```
shared/
├── contracts/                              # Shared data contracts (protobuf / OpenAPI)
│   ├── sync_api.yaml                       # OpenAPI spec for Sync API
│   ├── community_api.yaml                  # OpenAPI spec for Community Intelligence API
│   ├── clinic_api.yaml                     # OpenAPI spec for Clinic Gateway API
│   └── models.proto                        # Protobuf definitions for shared data types
│
├── knowledge-base/                         # Source of truth for all knowledge data
│   ├── cultural_bridge/                    # Folk remedy ↔ evidence mappings
│   │   ├── ayurvedic_remedies.yaml
│   │   ├── siddha_remedies.yaml
│   │   └── folk_remedies_regional.yaml
│   ├── symptoms/                           # Symptom → condition mappings
│   │   ├── common_conditions.yaml          # 50+ conditions with symptom trees
│   │   └── emergency_signals.yaml          # Red-flag symptoms requiring immediate care
│   ├── regional/                           # Region-specific health data
│   │   ├── seasonal_risks.yaml             # Disease risks by season and region
│   │   └── water_quality_alerts.yaml
│   └── scripts/                            # Scripts to compile knowledge base → JSON assets
│       └── compile_knowledge_base.py
│
├── i18n/                                   # Internationalization source files
│   ├── hi/                                 # Hindi
│   ├── te/                                 # Telugu
│   ├── ta/                                 # Tamil
│   ├── kn/                                 # Kannada
│   ├── bn/                                 # Bengali
│   ├── mr/                                 # Marathi
│   ├── gu/                                 # Gujarati
│   ├── pa/                                 # Punjabi
│   ├── ml/                                 # Malayalam
│   ├── or/                                 # Odia
│   ├── ur/                                 # Urdu
│   └── en/                                 # English (fallback)
│
└── test-data/                              # Synthetic test data generators
    ├── generate_households.py
    ├── generate_health_events.py
    └── generate_community_signals.py

scripts/
├── setup_dev.sh                            # One-command dev environment setup
├── run_tests.sh                            # Runs all tests across android + backend
├── deploy_backend.sh                       # Deploys backend to AWS
├── compile_assets.sh                       # Compiles knowledge base + i18n → app assets
└── generate_apk.sh                         # Builds and signs the release APK

docker/
├── android-emulator/                       # Docker image for Android emulator (CI)
├── backend-base/                           # Shared base image for Go services
└── python-base/                            # Shared base image for Python services

.github/
└── workflows/
    ├── android-ci.yml                      # Build + test Android app
    ├── backend-ci.yml                      # Build + test backend services
    ├── knowledge-base-validation.yml       # Validates knowledge base YAML on PR
    └── deploy.yml                          # Deploys to staging/production on tag

docs/
├── PRD.md
├── TRD.md
├── ARCHITECTURE.md                         # This document
├── README.md
├── onboarding.md                           # New engineer guide
├── api-docs/                               # Generated API documentation
└── adr/                                    # Architecture Decision Records
    ├── ADR-001-offline-first.md
    ├── ADR-002-on-device-ai.md
    ├── ADR-003-anonymization-pipeline.md
    └── ADR-004-clean-architecture-android.md
```

---

## 6. Module Interaction Map

This section describes how the major modules communicate. The interactions are grouped by the user action that triggers them.

### 6.1 User Opens App and Starts a Health Conversation

The flow moves through these modules in order: the UI layer's ConversationScreen captures the user's voice input via the VoiceInput component, which is processed by Android's on-device Speech-to-Text engine. The text is passed to the AI module's HealthCompanionEngine, which first routes it through the LanguageAdapterSwitch to ensure the correct language model adapter is loaded. The engine runs inference via InferenceRunner, producing a raw response. The raw response passes through the ResponsePostProcessor (which applies the current Literacy Context Score to simplify or elaborate), then through the SeverityClassifier (which tags the response with the appropriate severity level). The final response is returned to the ConversationViewModel, which updates the UI and simultaneously writes a HealthEvent to the local database via the HealthEventRepository.

### 6.2 User Asks About a Folk Remedy

The ConversationScreen captures the query. The HealthCompanionEngine detects a remedy-related intent and routes to the CulturalBridgeEngine. The CulturalBridgeEngine queries the KnowledgeCacheDao for the matching remedy, assembles an evidence summary and escalation conditions, and returns a structured response. This response is then post-processed through the same literacy pipeline as all other responses. No network call is made at any point in this flow.

### 6.3 Device Reconnects After Offline Period

The ConnectivityMonitor detects a network state change and notifies the SyncManager. The SyncManager triggers the AnonymizationPipeline, which reads health_events from the local database, groups them by geographic cluster, applies k-anonymity filtering, and writes the resulting CommunitySignals to the sync_queue. The SyncManager then calls the SyncApiClient to upload the queue contents to the cloud. Simultaneously, it calls the updates endpoint to check for new knowledge base versions or model updates. Any updates are downloaded and applied by the UpdateApplicator, which writes new data to the KnowledgeCacheDao and (for model updates) triggers a background model warm-up.

### 6.4 ASHA Worker Views Community Heatmap

The AshaCoPilotScreen (authenticated via ASHA worker credentials) calls the CommunityApiClient, which hits the cloud's Community Intelligence API. The community-intelligence service queries TimescaleDB for recent aggregated signals in the worker's assigned region, runs them through the heatmap_generator, and returns a GeoJSON heatmap with alert overlays. The AshaCoPilotScreen renders this as an interactive map. If an outbreak alert is active, it is displayed as a prominent card above the map with routing information to the nearest PHC.

### 6.5 Emergency Escalation

If the SeverityClassifier tags a conversation as EMERGENCY, the ConversationViewModel immediately triggers the EmergencyScreen. This screen displays a clear, large-text warning, automatically looks up the nearest hospital via the device's location services and cached map data (works offline with last-known location), and presents a one-tap call button. The health event is flagged with an emergency tag in the local database. On next sync, this flag is included in the anonymized signal so the Community Intelligence Engine can factor emergency-level events into outbreak detection.

---

## 7. Key Architectural Decisions & Rationale

Each decision here is logged as a formal Architecture Decision Record (ADR) in `docs/adr/`. This section summarizes the most critical ones.

### ADR-001: Offline-First Architecture

**Decision:** The entire core experience works without network connectivity. Cloud is an enhancement layer.  
**Rationale:** Rural India's connectivity is unreliable. A health app that fails when there is no signal is worse than useless — it erodes trust at the exact moment trust is most needed. Offline-first also satisfies privacy concerns: data stays on the device by default.  
**Alternatives Considered:** Cloud-first with aggressive caching was rejected because it would fail during extended outages (common during monsoon season when cell towers go down).

### ADR-002: On-Device AI Over Cloud AI

**Decision:** The primary AI inference runs on the device using a quantized, distilled model. Cloud AI is opt-in and supplementary.  
**Rationale:** Latency, privacy, and connectivity all favor on-device. A 2-second response time from a local model is far better than a 5-10 second round-trip to a cloud model over a weak 2G connection — or an infinite wait when there is no connection at all.  
**Alternatives Considered:** A hybrid approach where all inference is cloud-based with a fallback to a simpler on-device rule engine was rejected because the rule engine would produce noticeably lower-quality responses, creating an inconsistent user experience.

### ADR-003: Privacy by Architecture (Anonymization Before Transmission)

**Decision:** Individual health data never leaves the device. Only k-anonymized aggregates are transmitted.  
**Rationale:** Health data is among the most sensitive categories of personal data. India's DPDP Act and general user trust considerations make this a non-negotiable. The architecture makes a data breach at the backend level unable to compromise individual health records.  
**Alternatives Considered:** Encrypting individual data and sending it to the cloud (with decryption keys held server-side) was rejected because it shifts the risk model — a compromised key compromises all data. Differential privacy was considered but deemed too complex for the aggregation volumes expected in early deployment.

### ADR-004: Clean Architecture for Android

**Decision:** The Android app follows a strict Domain → Data → Presentation layered architecture with the AI module as a peer layer.  
**Rationale:** The AI module has unique lifecycle requirements (model loading is expensive and should happen once; inference is CPU-intensive and should not block the UI thread). Treating it as a peer to the data layer rather than a part of it keeps these concerns isolated and testable independently.  
**Alternatives Considered:** A simpler MVI (Model-View-Intent) architecture without the domain layer was considered for faster initial development but rejected because it would make the AI and sync logic difficult to test in isolation and would tightly couple business rules to Android-specific code.

---

## 8. Data Flow Diagrams

### 8.1 Personal Health Interaction (Fully Offline)

```
User (Voice)
    │
    ▼
[VoiceInput Component]          ← On-device STT
    │
    ▼
[HealthCompanionEngine]         ← AI orchestrator
    │   ├── LanguageAdapterSwitch  (selects language)
    │   ├── InferenceRunner        (runs ONNX model)
    │   └── CulturalBridgeEngine   (if remedy query)
    │
    ▼
[ResponsePostProcessor]         ← Applies Literacy Context Score
    │
    ▼
[SeverityClassifier]            ← Tags severity level
    │
    ▼
[ConversationViewModel]         ← Updates UI + writes to DB
    │       │
    ▼       ▼
[UI]    [HealthEventRepository] → SQLite (local)
```

### 8.2 Community Signal Flow (On Sync)

```
[HealthEventRepository] ← reads local health events
    │
    ▼
[AnonymizationPipeline]
    │   ├── Groups events by geographic cluster
    │   ├── Computes aggregate statistics
    │   └── Applies k-anonymity filter (k=10)
    │
    ▼
[SyncQueue] (SQLite)    ← staging area
    │
    ▼ (on connectivity)
[SyncApiClient]         ← uploads anonymized aggregates only
    │
    ▼ (cloud)
[Sync Service]          → [Message Broker] → [Community Intelligence Service]
                                                    │
                                                    ▼
                                            [Outbreak Detection]
                                            [Heatmap Generation]
                                            [Alert Routing]
```

---

## 9. Testing Strategy

The testing strategy mirrors the architecture layers:

**Domain Layer (Unit Tests):** All use cases are tested in pure Kotlin with no Android dependencies. These run fast and cover the core business logic: pattern detection, risk flagging, severity classification rules, and reminder scheduling.

**AI Module (Integration Tests):** The AI pipeline is tested end-to-end with a set of golden test cases — known symptom descriptions with expected severity classifications and expected response characteristics (e.g., "should mention seeing a doctor," "should acknowledge the folk remedy"). These tests use the actual quantized model to catch regressions from model updates.

**Sync Module (Integration Tests):** The anonymization pipeline is tested with synthetic data to verify that k-anonymity is correctly enforced, that clusters below the threshold are suppressed, and that aggregate statistics are computed correctly. These tests are critical for privacy compliance.

**UI Layer (UI Tests):** Jetpack Compose UI tests cover the main user flows: onboarding, conversation, timeline viewing, family profile management, and emergency escalation. These run on an emulator in CI.

**Backend (Integration + E2E Tests):** Each microservice has its own integration test suite against a local database. End-to-end tests simulate the full sync flow from device upload to outbreak detection to alert routing.

---

## 10. Deployment Architecture

### 10.1 Android App

The app is built and signed via GitHub Actions. The APK is uploaded to Google Play (internal testing track first, then staged rollout). A sideload-ready APK is also generated and hosted on a static file server for distribution via ASHA workers in areas without Play Store access.

### 10.2 Backend Services

Each microservice is containerized and deployed to AWS ECS (Elastic Container Service) in the Mumbai region. A CloudFront distribution is placed in front of the API gateway for edge caching and low-latency responses. Database instances (PostgreSQL + TimescaleDB) are on RDS with automated backups and failover.

### 10.3 Environment Structure

Three environments exist: Development (local, via docker-compose), Staging (AWS, mirrors production but with synthetic data, used for integration testing and UAT), and Production (AWS Mumbai, real user traffic).

---

*This document is the single source of truth for project structure. Any new module, service, or directory addition must be reflected here and reviewed as part of the PR process.*
