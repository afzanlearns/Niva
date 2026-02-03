# Niva — Technical Requirements Document (TRD)

**Document Version:** 1.0  
**Date:** February 3, 2026  
**Owner:** Engineering Team  
**Status:** Draft  
**Depends On:** PRD v1.0  

---

## 1. Purpose & Scope

This document defines the technical architecture, system design, data models, API contracts, AI/ML strategy, and infrastructure requirements for Niva. It translates the product requirements (PRD) into engineering decisions. Every architectural choice in this document is driven by a specific constraint unique to the rural Indian deployment context: low connectivity, low-end devices, high linguistic diversity, and deep cultural sensitivity requirements.

---

## 2. Architecture Philosophy

Three principles govern every technical decision in this system:

**Offline-First, Cloud-Optional.** The system is designed as if the internet does not exist. Cloud connectivity is an enhancement layer, not a dependency. This is non-negotiable given the deployment context.

**On-Device Intelligence, Cloud Augmentation.** The heaviest AI work — symptom conversation, basic pattern recognition, language understanding — runs locally. The cloud handles aggregation, outbreak detection, and model updates. This split is driven by both connectivity constraints and privacy requirements.

**Privacy by Architecture.** Individual health data does not leave the device unless the user explicitly consents. Community-level intelligence is built from anonymized, aggregated signals. The system is architected so that even a compromised backend cannot reconstruct individual health records from what it receives.

---

## 3. High-Level System Architecture

The system is decomposed into four layers:

### Layer 1: On-Device Application (Client)

This is the user-facing Android application. It contains the full core experience and can operate entirely independently of any network connection.

Components within this layer include the Voice Interface Engine (speech-to-text and text-to-speech, running locally), the On-Device AI Health Companion (a distilled, lightweight language model fine-tuned for health dialogue), the Local Knowledge Base (the Cultural Bridge database, symptom-condition mappings, and regional health data), the Family Health Tree Manager (local storage and profile management), and the Offline Data Store (all user data, conversation history, and health timeline, stored locally first).

### Layer 2: Sync & Edge Layer

This layer mediates between the device and the cloud. It is responsible for intelligent synchronization — it does not blindly push all data. It applies anonymization and aggregation rules *before* any data leaves the device.

Components include the Smart Sync Engine (detects connectivity, queues changes, applies conflict resolution), the Anonymization & Aggregation Pipeline (transforms individual data into community-level signals before transmission), and the Edge Cache (caches updated knowledge base versions, model weights, and government health bulletins locally for offline access).

### Layer 3: Backend Services (Cloud)

The backend handles tasks that require cross-user or cross-region data: outbreak detection, community heatmap generation, and model training feedback loops. It does *not* store individual health records unless the user has explicitly opted in for clinic integration.

Services include the Community Intelligence Engine (aggregates anonymized signals into heatmaps and outbreak alerts), the Model Update & Fine-tuning Pipeline (continuously improves on-device models based on aggregated usage patterns), the Clinic Integration Gateway (handles referrals and data exchange with consented PHCs), and the Push Notification Service (delivers seasonal advisories and vaccination reminders).

### Layer 4: External Systems

These are systems Niva does not own but integrates with: Government Health APIs (immunization schedules, NCD screening protocols, outbreak alerts), Telecom APIs (SMS fallback for zero-data-connectivity scenarios), and Map & Location Services (nearest hospital lookup, geo-based regional health profiling).

---

## 4. On-Device AI Strategy

This is the most technically critical section of the document. The AI strategy is what makes the offline-first architecture possible while still delivering intelligent, conversational health guidance.

### 4.1 Model Architecture

The on-device health companion is built on a **distilled, quantized language model**. The target model size is under 80MB after quantization (INT4/INT8), optimized to run on a Snapdragon 425 equivalent — the baseline chipset for the 2GB RAM Android phones that are the target device class.

The base model is a general-purpose small language model (in the 1–3B parameter class, pre-quantization) that has been fine-tuned on a curated health dialogue dataset and then distilled into a smaller, task-specific model. The fine-tuning dataset includes: symptom-condition dialogue pairs (sourced and validated by medical professionals), regional language health terminology mappings, folk remedy to evidence-based equivalents mappings, and conversation flow templates for escalation, reassurance, and referral.

### 4.2 What Runs On-Device vs. What Runs in the Cloud

| Task | Where It Runs | Reasoning |
|------|---------------|-----------|
| Symptom conversation (basic) | On-device | Core offline requirement |
| Language understanding (12 languages) | On-device | Connectivity cannot be assumed |
| Severity classification | On-device | Time-critical, must work at 2 AM with no signal |
| Temporal pattern detection | On-device | User's full health history is local |
| Hereditary risk flagging | On-device | Family data is local |
| Cultural Bridge lookups | On-device | Pre-loaded regional knowledge base |
| Community heatmap generation | Cloud | Requires cross-user aggregation |
| Outbreak detection algorithms | Cloud | Requires epidemiological models |
| Model weight updates | Cloud → pushed to device | Continuous improvement loop |
| Complex diagnostic reasoning | Cloud (opt-in) | Only when user consents and connectivity exists |

### 4.3 Multilingual Strategy

Supporting 12+ Indian languages on-device is a significant constraint. The approach is layered:

The first layer is a shared multilingual tokenizer and embedding space. All supported languages share a common representation layer, which dramatically reduces model size compared to separate per-language models. The second layer is language-specific fine-tuning adapters (LoRA-style) that are swapped in based on the user's selected language. Each adapter is under 5MB. The third layer is a static translation layer for the structured knowledge base — the Cultural Bridge database, symptom lists, and government protocol text are pre-translated and stored locally, requiring no runtime translation model.

### 4.4 Adaptive Literacy Engine — Technical Implementation

The Adaptive Literacy Engine is not a separate model. It is a **response post-processing pipeline** that sits between the AI's raw output and what the user sees/hears.

The pipeline works as follows: the user's interaction history is analyzed to compute a Literacy Context Score (LCS) on a 1–5 scale across dimensions including vocabulary complexity tolerance, need for analogies and examples, preferred explanation length, and comfort with medical terminology. The LCS is updated after every interaction using a lightweight online learning algorithm. The AI's raw response is then passed through a Simplification or Elaboration filter based on the current LCS. The final output is rendered in the appropriate format — voice, text, or a combination with visual aids.

This means the same underlying health knowledge produces very different user experiences depending on who is asking, without requiring separate model versions.

---

## 5. Data Architecture

### 5.1 Local Data Store (On-Device)

The local data store is built on SQLite, chosen for its zero-configuration deployment, small footprint, and proven performance on Android.

**Database: `swasthya_local.db`**

The schema is organized around these core entities:

**households** — The top-level unit. Contains a unique household ID (UUID, generated locally), the primary caregiver's name, geographic region code, and creation timestamp. This is the root of the Family Health Tree.

**profiles** — One row per family member. Contains a profile ID, a foreign key to the household, the member's name, age, biological sex, known allergies (stored as a JSON array), known chronic conditions (JSON array), and a created/updated timestamp.

**health_events** — The core of the Longitudinal Narrative. Each row is a single health interaction or self-reported event. Contains an event ID, a foreign key to the profile, event timestamp, the type of event (symptom report, medication intake, vaccination, self-check), the raw input (text or voice transcript), the system's response, the computed severity classification, and a flag indicating whether the user followed up with a care action.

**conversation_history** — Stores the full dialogue turns for each health interaction, linked to a health_event. This is what the temporal pattern engine reads to surface connections across time.

**knowledge_cache** — A local mirror of the Cultural Bridge database and regional health data. Contains a content ID, content type (remedy, condition, seasonal advisory), the content body in the user's language, a validity timestamp, and a source version hash (used to determine whether a cloud-pushed update is needed).

**sync_queue** — A staging table for data that has been processed by the anonymization pipeline and is ready to be transmitted to the cloud on next connectivity. Contains only aggregated, anonymized signals — never raw health_event rows.

### 5.2 Cloud Data Store

The cloud data store is deliberately lean. It stores:

- Anonymized, aggregated symptom signals (at the village/cluster level, never individual)
- Model training feedback signals (interaction quality scores, not health content)
- Consented clinic referral records (only for users who have opted into clinic integration)
- App telemetry (crash reports, performance metrics — no health data)

**Storage technology:** The cloud backend uses a distributed time-series database for the aggregated symptom signals (optimized for the temporal queries that outbreak detection requires) and a standard relational database for referral records and user consent logs.

### 5.3 Data Flow: The Anonymization Pipeline

This is one of the most critical technical components. The pipeline ensures that individual health data never reaches the cloud in identifiable form.

The flow is: a health_event is logged locally → after a 24-hour aggregation window, all events in the same geographic cluster are grouped → the pipeline computes aggregate statistics (symptom frequency, severity distribution, demographic bucketing) → any cluster with fewer than 10 users is suppressed entirely (k-anonymity with k=10) → the aggregate signal is placed in the sync_queue → on next connectivity, only the aggregate is transmitted → the cloud receives a signal like "Cluster-7842: 14 gastrointestinal symptom reports in 72h, severity distribution [8 watch, 4 seek-care, 2 informational], age distribution [3 under-5, 6 adult, 5 senior]" — and nothing more.

---

## 6. API Design

### 6.1 Internal APIs (On-Device)

These are not network APIs. They are the internal module interfaces within the Android application, defined here to establish contracts between components.

**Health Companion API** — The interface between the UI layer and the on-device AI model.

```
POST /local/health/converse
  Input: { profile_id, user_message, conversation_history[], literacy_context_score }
  Output: { response_text, severity_classification, suggested_actions[], updated_lcs }

GET /local/health/timeline/{profile_id}
  Input: { start_date, end_date }
  Output: { events[], patterns[], risk_flags[] }

GET /local/health/family_risks/{household_id}
  Output: { hereditary_flags[], member_correlations[] }
```

**Knowledge Base API** — The interface for Cultural Bridge and regional health lookups.

```
GET /local/knowledge/remedy/{remedy_name}
  Output: { evidence_summary, safety_rating, escalation_conditions[], regional_variants[] }

GET /local/knowledge/seasonal/{region_code}
  Output: { active_advisories[], common_risks[], preventive_measures[] }
```

### 6.2 External APIs (Cloud)

**Sync API**

```
POST /api/v1/sync/upload
  Auth: Device token (not user identity)
  Input: { device_id, cluster_id, aggregated_signals[] }
  Output: { status, pending_updates[] }

GET /api/v1/sync/updates/{device_id}
  Output: { knowledge_base_updates[], model_updates[], government_bulletins[] }
```

**Community Intelligence API**

```
GET /api/v1/community/heatmap/{region_code}
  Auth: ASHA worker token
  Output: { clusters[], alert_flags[], trend_data }

POST /api/v1/community/alert
  Input: { cluster_id, alert_type, severity, details }
  Output: { alert_id, routing_info }
```

**Clinic Integration API** (opt-in only)

```
POST /api/v1/clinic/referral
  Auth: User consent token
  Input: { profile_summary, symptom_summary, preferred_clinic_ids[] }
  Output: { referral_id, clinic_confirmation, appointment_details }
```

### 6.3 API Design Principles

All external APIs are designed around these constraints: authentication is device-based, not user-identity-based, to prevent the backend from being able to correlate health data with a real person. All responses are cacheable and include a TTL, so the app can function on stale data when offline. Rate limiting is generous but present — the system is designed for millions of devices, not millions of requests per device. Error responses include a graceful degradation code that tells the client which features can still function offline.

---

## 7. Offline Architecture — Deep Dive

Offline capability is not an afterthought. It is the **primary architecture constraint**. This section details how it is achieved.

### 7.1 Conflict Resolution

When a device reconnects after an extended offline period, conflicts may exist between local and cloud state. The resolution strategy is:

For user-generated data (health events, profiles), the local version always wins. The user's experience is the source of truth. Cloud updates to knowledge base and model weights are applied as patches on top of local state, never replacing user data. If a knowledge base update contradicts something the user was told while offline, the system flags this as a "new information" notification rather than silently correcting itself. This maintains trust.

### 7.2 Storage Budgeting

On a device with limited storage (typically 16–32 GB shared across all apps), Niva targets a total footprint of under 250MB. This breaks down as follows: the base application and UI assets consume roughly 30MB, the on-device AI model (quantized) takes up approximately 80MB, language adapters (up to 3 active at a time) use about 15MB, the local knowledge base occupies around 60MB, and user data and conversation history (expected to grow over time) starts small and is managed with a rolling archive policy that compresses data older than 90 days.

### 7.3 Model Inference on Low-End Devices

Running a language model on a device with a Snapdragon 425 and 2GB RAM requires careful optimization. The approach combines INT4 quantization (reducing model size and memory footprint by 4x compared to FP16), ONNX Runtime for Android (optimized inference engine), speculative decoding (using a tiny draft model to speed up generation), and batched pre-computation of common response templates (the system pre-generates responses to the 200 most common symptom queries and serves them from cache when appropriate, falling back to live inference for novel queries).

---

## 8. Security Architecture

### 8.1 Data Encryption

All health data on the device is encrypted using AES-256 with a key derived from the device's hardware-backed keystore. The encryption key is never exported from the device. All data in transit uses TLS 1.3. Cloud-stored data (aggregated signals only) is encrypted at rest using AES-256 with key rotation every 90 days.

### 8.2 Authentication & Authorization

The app does not require user accounts in the traditional sense. A household is identified by a locally-generated UUID. When syncing with the cloud, the device authenticates using a device token (a cryptographic credential stored in the hardware keystore) that is not linked to any personally identifiable information. ASHA worker accounts are the only user-identity-linked authentication in the system, and these are scoped to the Co-Pilot mode only. ASHA worker data access is limited to aggregated community data — they cannot view individual household health records.

### 8.3 Threat Model

The primary threats considered during design are: a compromised device (mitigated by hardware-backed encryption), a compromised backend (mitigated by the architecture that prevents individual data from reaching the backend), a social engineering attack where someone impersonates a health worker (mitigated by the ASHA worker authentication flow and the fact that Co-Pilot mode shows only aggregated data), and a man-in-the-middle attack on sync (mitigated by TLS 1.3 with certificate pinning).

---

## 9. Infrastructure & Deployment

### 9.1 Cloud Infrastructure

The backend is deployed on a cloud provider with a presence in India (for data residency compliance with DPDP Act). The architecture is microservices-based, with each service independently scalable. The Community Intelligence Engine is the most compute-intensive service and is designed to scale horizontally during outbreak detection events.

### 9.2 App Distribution

The app is distributed via Google Play Store and, critically, also via **sideloading packages** and WhatsApp-shared APKs. In many rural areas, Play Store access is inconsistent. The app is designed to be installable via a direct APK download link shared by ASHA workers. This is an intentional distribution strategy, not a workaround.

### 9.3 Update Strategy

App updates are pushed via Play Store when available. For devices that cannot access Play Store, updates are delivered via the Sync API — the app checks for a new version on each sync and downloads it in the background. Critical security patches can be force-pushed via this mechanism.

---

## 10. Technology Stack Summary

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Mobile App | Kotlin (Android) | Native performance, best-in-class Android support |
| On-Device AI | ONNX Runtime + Quantized LLM (INT4) | Cross-platform inference, minimal memory footprint |
| Local Database | SQLite | Zero-config, tiny footprint, battle-tested on Android |
| Voice Engine | On-device TTS/STT (Mozilla TTS / Vosk) | No network dependency for voice |
| Cloud Backend | Go (microservices) | High concurrency, low memory per service, fast cold starts |
| Community Intelligence | Python (data pipeline) + PostgreSQL + TimescaleDB | Time-series queries for outbreak detection |
| Cloud Infrastructure | AWS (Mumbai region) | Data residency, low latency for Indian users |
| Sync Protocol | MQTT (lightweight pub/sub) | Designed for IoT/low-bandwidth scenarios, works on 2G |
| Push Notifications | Firebase Cloud Messaging (FCM) | Native Android integration, works on low-end devices |
| CI/CD | GitHub Actions + Fastlane | Automated build, test, and Play Store deployment |

---

## 11. Performance & Scalability Targets

| Metric | Target | Notes |
|--------|--------|-------|
| On-device inference latency | < 2 seconds per response | After speculative decoding optimization |
| App cold start time | < 3 seconds | On 2GB RAM device |
| Sync upload time (7 days of data) | < 30 seconds | Over 2G connection |
| Cloud API p95 latency | < 200ms | Mumbai region |
| Concurrent ASHA worker sessions | 50,000 | During national health campaign peaks |
| Total registered households (year 1) | 500,000 | Across 5 pilot states |
| Outbreak detection latency | < 4 hours from signal threshold breach | End-to-end, including sync delay |

---

## 12. Monitoring & Observability

On-device telemetry is limited to crash reports and performance metrics — no health data is included in telemetry. Cloud services are monitored via standard observability stack (distributed tracing, structured logging, alerting). The Community Intelligence Engine has a dedicated monitoring dashboard that tracks aggregation pipeline health, outbreak alert accuracy (compared to ground truth from PHCs), and sync success rates by region.

---

*This document defines the technical baseline. All implementation decisions should be validated against the constraints defined in Section 2 (Architecture Philosophy) and the deployment context assumptions in PRD Section 9.*
