# Niva — Product Requirements Document (PRD)

**Document Version:** 1.0  
**Date:** February 3, 2026  
**Owner:** Product Team  
**Status:** Draft  

---

## 1. Executive Summary

Niva ("Health Friend") is a community-first, AI-powered health companion designed for India's rural and semi-urban populations. It goes far beyond a symptom checker. It is a **longitudinal health companion** that learns a family's health story over time, understands the cultural and environmental context of its users, and works alongside government health infrastructure — not in isolation from it.

The core thesis: most health apps treat every interaction as a one-off query. Niva treats health as a **continuous narrative**. It remembers, it connects dots across time, and it surfaces risks before they become emergencies.

---

## 2. Problem Statement

### 2.1 The Access Gap

India has roughly one doctor for every 1,500–2,000 people in rural districts, compared to 1 per 200 in metros. This is not just a supply problem — it is an **information asymmetry** problem. People do not lack access to care as much as they lack the knowledge to know *when* and *what kind* of care they need.

### 2.2 The Language & Literacy Wall

Medical terminology is gatekept behind English and clinical jargon. A mother in a village in Chhattisgarh asking about her child's recurring fever does not need a PubMed abstract. She needs an explanation in her own language, at her own level, delivered with warmth and without condescension.

### 2.3 The Cultural Disconnect

Existing health apps assume a Western biomedical worldview. In reality, a large percentage of rural Indians use Ayurvedic, Siddha, or folk remedies as their *first line of response*. An app that ignores or dismisses these practices loses trust immediately. The gap is not just informational — it is **relational**.

### 2.4 The Fragmentation Problem

Health information is scattered: a vaccination card here, a clinic visit there, a WhatsApp message from a relative about a "good doctor." No system connects these into a coherent picture. For families where one phone is shared by 4–6 people, this fragmentation is amplified.

### 2.5 The "Alone at 2 AM" Problem

Most health crises surface at night or in moments of isolation — a child with a sudden fever, an elderly parent with chest tightness. In these moments, the nearest doctor is hours away and the nearest information source is unreliable. The emotional toll of not knowing whether something is serious is a health problem in itself.

---

## 3. Vision & Mission

**Vision:** A world where every family in rural India has an intelligent, trusted health companion that speaks their language, understands their context, and connects them to care — not as a replacement for doctors, but as a bridge to them.

**Mission:** Build a longitudinal, culturally-aware, community-connected health platform that turns fragmented health knowledge into a coherent, actionable family health story.

---

## 4. Target Users

### 4.1 Primary Users

**The Rural Caregiver (Primary)**  
Age 25–55. Usually the mother or eldest daughter in a household. Manages the health of 3–6 family members on a single smartphone. Comfortable with voice interfaces. May have low health literacy but high emotional investment in her family's wellbeing. Speaks a regional language (Hindi, Telugu, Kannada, Tamil, Bengali, etc.) as her primary language.

**The ASHA / Community Health Worker (Power User)**  
Age 22–45. Government-trained, community-embedded. Visits 50–100 households per month. Needs tools for tracking, referrals, follow-ups, and reporting — not just personal health queries. Works in areas with intermittent connectivity. Already trusted by the community.

### 4.2 Secondary Users

- Elderly individuals managing chronic conditions (diabetes, hypertension)
- Young adults seeking to understand inherited health risks
- Rural clinic staff looking for lightweight patient intake and triage support

### 4.3 Non-Users (Explicitly Out of Scope)

- Urban users with strong healthcare access (different product category)
- Users seeking diagnosis (Niva informs, it never diagnoses)

---

## 5. Core Product Pillars

Niva is built on five pillars that, together, create a product category that does not yet exist. Each pillar is a deliberate answer to a gap that no single existing app addresses.

### Pillar 1: The Family Health Tree

Most health apps are designed for one person, one device, one identity. In rural India, a single phone is a shared family resource. Niva inverts this assumption entirely.

The Family Health Tree is a shared, multi-profile system where a single caregiver can create and manage health profiles for every household member. Each profile is distinct — age, gender, known conditions, allergies, and history are tracked independently. The system surfaces **hereditary risk flags** passively: if a mother has a history of Type 2 diabetes and her teenage daughter starts logging symptoms of fatigue and excessive thirst, Niva will gently surface this connection without alarming anyone.

This is not just a convenience feature. It is a **structural reframing** of how health apps work for the household unit that defines rural Indian life.

### Pillar 2: The Longitudinal Health Narrative

A symptom checker answers one question at a time. Niva remembers everything and connects across time.

If a user reports a headache today and reported joint pain last month, the system does not treat these as isolated events. It builds a **temporal health graph** that surfaces patterns: seasonal triggers, recurring symptom clusters, and slow-moving risks that would only be visible across months of data. This is the difference between a snapshot and a story.

The health narrative is visualized as a simple, visual timeline — not a clinical chart. It is designed to be understandable by someone with a 5th-grade education, while still being exportable in clinical format for doctors.

### Pillar 3: The Cultural Bridge

This is the pillar that most health apps get wrong, and the one that will determine whether Niva is trusted or deleted.

The Cultural Bridge is a knowledge layer that *acknowledges* traditional and folk health practices — Ayurvedic remedies, grandmother's recipes, community rituals — and maps them to evidence-based medical understanding. It does not dismiss. It does not lecture. It says: "Turmacabezas milk is a common remedy in your area for sore throats. Here's what the evidence says about why it helps, and here's when you might want to see a doctor instead."

This layer is built on a curated, regionally-specific knowledge base that maps common folk practices to their clinical equivalents, contraindications, and appropriate escalation points. It is the single most trust-building feature in the product.

### Pillar 4: The Community Intelligence Layer

Niva is not just an individual tool — it is a **community sensing platform**.

With explicit, informed consent, anonymized symptom data from all users in a geographic cluster is aggregated into a real-time **Community Health Heatmap**. If 12 people in a village report similar gastrointestinal symptoms within a 72-hour window, the system flags this as a potential outbreak and alerts the local ASHA worker and, if configured, the nearest PHC (Primary Health Centre).

This layer turns a chatbot into an **early warning system**. It is the feature that transforms Niva from a personal tool into public health infrastructure.

### Pillar 5: The Adaptive Literacy Engine

Health literacy is not binary. It exists on a spectrum, and it shifts depending on the topic, the emotional state, and the context.

Niva does not assume a fixed literacy level. It **observes** how users interact — the questions they ask, the follow-ups they need, the vocabulary they use — and dynamically adjusts its communication style. A user who consistently asks "what does that mean?" will get simpler, more visual explanations. A user who asks "what are the long-term implications?" will get more detailed responses.

This is not a one-time onboarding quiz. It is a continuous, invisible calibration that makes every interaction feel natural and appropriate.

---

## 6. Feature Requirements

### 6.1 User Onboarding & Profile System

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-01 | Multi-profile creation under a single household account | P0 | Family Health Tree |
| F-02 | Voice-guided onboarding in 12+ regional languages | P0 | Adaptive Literacy |
| F-03 | Caregiver role assignment (primary, secondary, view-only) | P1 | Family Health Tree |
| F-04 | Optional integration with existing Ayushman Bharat / e-Sanjeevani IDs | P2 | Community Intelligence |

### 6.2 Health Interaction Core

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-05 | AI-powered symptom conversation (not a form — a dialogue) | P0 | Longitudinal Narrative |
| F-06 | Voice input as the primary interaction mode | P0 | Adaptive Literacy |
| F-07 | Real-time severity classification: Informational / Watch / Seek Care / Emergency | P0 | All |
| F-08 | Emergency escalation with nearest hospital lookup and one-tap call | P0 | All |
| F-09 | Temporal pattern detection across user's health history | P0 | Longitudinal Narrative |
| F-10 | Hereditary risk flagging based on family health tree data | P1 | Family Health Tree |

### 6.3 Cultural & Knowledge Layer

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-11 | Folk/Ayurvedic remedy acknowledgement and evidence mapping | P0 | Cultural Bridge |
| F-12 | Region-specific remedy and risk database (auto-populated by geo-location) | P1 | Cultural Bridge |
| F-13 | Respectful escalation prompts ("This remedy may help, but given X, seeing a doctor is important") | P0 | Cultural Bridge |

### 6.4 Community & ASHA Worker Tools

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-14 | ASHA Co-Pilot mode: visit checklists, patient tracking, referral logging | P0 | Community Intelligence |
| F-15 | Anonymized Community Health Heatmap (village-level aggregate) | P1 | Community Intelligence |
| F-16 | Outbreak alert generation when symptom clustering is detected | P1 | Community Intelligence |
| F-17 | Integration with government immunization schedules and NCD screening protocols | P1 | Community Intelligence |

### 6.5 Offline & Connectivity

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-18 | Full core functionality in offline mode with intelligent sync on connectivity | P0 | All |
| F-19 | Lightweight model size optimized for low-end Android devices (< 100MB) | P0 | All |
| F-20 | SMS-based fallback for areas with no data connectivity | P2 | All |

### 6.6 Reminders & Continuity

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-21 | Vaccination reminder system synced to household profiles | P0 | Family Health Tree |
| F-22 | Medication adherence reminders with dose tracking | P1 | Longitudinal Narrative |
| F-23 | Seasonal health advisory push notifications (region-aware) | P1 | Community Intelligence |

### 6.7 Safety & Ethics

| ID | Requirement | Priority | Pillar |
|----|-------------|----------|--------|
| F-24 | Prominent, persistent disclaimer: "This is not a diagnosis. See a doctor for medical decisions." | P0 | All |
| F-25 | Mental health sensitivity detection — routes to helplines, does not attempt to counsel | P0 | All |
| F-26 | Data consent flow in plain language before any community-level data aggregation | P0 | Community Intelligence |
| F-27 | GDPR and India's DPDP Act compliance for all health data storage and processing | P0 | All |

---

## 7. User Stories

### 7.1 Priya — The Caregiver

*Priya is 34, lives in a village in Telangana. She manages the health of her mother-in-law (65, diabetic), her two children (8 and 5), and herself. She has one smartphone.*

**Story:** "I want to create health profiles for everyone in my family so I don't have to remember everyone's medications and allergies separately." → Leads to F-01, F-21, F-22.

**Story:** "My daughter has been tired for weeks. I want to know if it's connected to anything in our family history." → Leads to F-10, F-09.

**Story:** "My mother-in-law uses a traditional remedy for her joint pain. I want to know if it's safe to continue." → Leads to F-11, F-13.

### 7.2 Ravi — The ASHA Worker

*Ravi is 28, an ASHA worker covering 80 households in a district in Jharkhand. He has limited connectivity and a basic Android phone.*

**Story:** "I want a checklist for my daily home visits that updates based on government health campaigns." → Leads to F-14, F-17.

**Story:** "I noticed 5 families in the same area reporting stomach problems this week. I want to flag this." → Leads to F-15, F-16.

**Story:** "I need to work while I'm in the village with no internet and sync everything when I'm back." → Leads to F-18.

### 7.3 Ajay — The Elderly Diabetic

*Ajay is 62, retired, managing Type 2 diabetes. He lives alone and his children are in the city.*

**Story:** "I want to be reminded to take my medication at the right times without having to set it up myself." → Leads to F-22.

**Story:** "I want to see how my health has changed over the last 3 months in a way I can understand." → Leads to F-09, and the visual timeline feature of the Longitudinal Narrative.

---

## 8. Non-Functional Requirements

### 8.1 Performance

- App launch time: < 3 seconds on a device with 2GB RAM
- Offline response time for core symptom conversation: < 2 seconds
- Sync time on reconnection: < 30 seconds for up to 7 days of offline data

### 8.2 Accessibility

- Voice-first interface as default interaction mode
- All visual elements accompanied by audio descriptions
- Support for users with low visual acuity (high contrast mode, large text)
- Compatible with screen readers on Android

### 8.3 Security & Privacy

- All health data encrypted at rest and in transit (AES-256 / TLS 1.3)
- Community-level data is aggregated and anonymized before any transmission — individual data never leaves the device unless explicitly consented
- Consent can be withdrawn at any time, triggering full local and remote data deletion
- Compliant with India's Digital Personal Data Protection (DPDP) Act 2023

### 8.4 Scalability

- Backend architecture supports 10 million+ registered household profiles
- Community heatmap aggregation engine designed for real-time processing at the district level
- Regional language model updates can be pushed without full app updates

---

## 9. Constraints & Assumptions

### Constraints

- Target devices: Android smartphones with 2GB+ RAM, running Android 8.0+
- Connectivity: Must function fully offline. Internet is a bonus, not a baseline.
- Budget: Open-source and low-cost AI inference (on-device where possible, lightweight cloud fallback)
- Regulatory: Must not make diagnostic claims. Must comply with DPDP Act and CBHI guidelines.

### Assumptions

- ASHA workers are willing adopters if the tool reduces, not adds to, their workload
- Regional language NLP models are available or can be fine-tuned for the 12 priority languages
- Government health data (immunization schedules, outbreak alerts) is accessible via open APIs or partnerships
- Users are comfortable with voice interaction as a primary input method

---

## 10. Success Metrics

| Metric | Target (6 months post-launch) |
|--------|-------------------------------|
| Active household profiles | 50,000 |
| ASHA workers using Co-Pilot mode weekly | 2,000 |
| Average session duration | 4–6 minutes |
| Appropriate escalation rate (user seeks care when system suggests) | > 60% |
| Community outbreak alerts issued and acted upon | > 80% accuracy |
| User retention at 30 days | > 40% |
| Trust score (post-interaction survey) | > 4.2 / 5 |
| Health literacy improvement (pre/post assessment) | > 25% improvement |

---

## 11. Roadmap Alignment

| Phase | Timeline | Focus |
|-------|----------|-------|
| Phase 1 — Foundation | Days 1–2 | Core AI chatbot, Family Health Tree, multilingual voice, offline engine, Cultural Bridge knowledge base |
| Phase 2 — Community | Days 3–4 | ASHA Co-Pilot, Community Heatmap, outbreak detection, user testing with real health workers |
| Phase 3 — Scale & Polish | Post-launch | Govt integration APIs, SMS fallback, expanded language support, clinical validation partnerships |

---

*This document is a living artifact. All feature IDs, priorities, and metrics are subject to revision based on user testing outcomes in Phase 2.*
