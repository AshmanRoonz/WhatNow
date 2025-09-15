Awesome—here’s a tightened, developer-friendly, community-ready README you can drop in as `README.md`. I kept your voice and philosophy, merged “Part 2.0” into a single coherent doc, clarified “government = organizing field,” and added practical setup, API, security, and contribution details.

---

# 🌍 WhatNow — Every Voice, Every Day

**Truth-Driven Agreement-Ethic (TDAE) & Participatory Democracy (PD)**

> A living, people-centered democracy amplified by AI.
> **Truth is the foundation. Agreement shapes morality. Ethics evolve with knowledge.**

![Status](https://img.shields.io/badge/status-alpha-blue) ![License](https://img.shields.io/badge/license-AGPLv3%20\(code\)%20%7C%20CC%20BY--SA%204.0%20\(docs\)-lightgrey) ![Made with Love](https://img.shields.io/badge/made%20with-love-red)

---

## Table of Contents

* [Why Now](#why-now)
* [Core Idea](#core-idea)
* [How It Works (Layers)](#how-it-works-layers)
* [TDAE Foundations](#tdae-foundations)
* [Centers of Focus](#centers-of-focus)
* [Ethics, Safety, and Rights](#ethics-safety-and-rights)
* [System Architecture](#system-architecture)
* [Quick Start](#quick-start)
* [Configuration](#configuration)
* [API (MVP)](#api-mvp)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [FAQ](#faq)
* [Glossary](#glossary)
* [License](#license)

---

## Why Now

Representative democracy asks most people to speak **once every few years**. Between elections, voices get **filtered** or **lost**. Polarization and information overload make it hard to trust the process.

**WhatNow** reimagines governance as a **continuous, inclusive, transparent** process: *Every voice. Every day.*

---

## Core Idea

* **TDAE (Truth-Driven Agreement-Ethic):** Truth provides constraints. Within truth and non-harm, *morality emerges from fair agreements* among those affected.
* **PD (Participatory Democracy):** The operating system for society that implements TDAE as a **continuous loop**: Input → Synthesis → Action → Feedback → Learning.
* **Government = Organizing Field:** Not a separate ruler above the people, but a **field that belongs to the people**, coordinating collective action.
* **Centers of Focus:** **Many and temporary**—dynamic “work rooms” that open, deliberate, decide, implement, review, then close.

---

## How It Works (Layers)

1. **People Layer** – Individuals/communities share lived experience, values, and proposals.
2. **Personal AI Advocate (local-first)** – Helps you clarify views, see evidence, and submit consented input. **You control it.**
3. **Civic Network** – Secure identity (one-person-one-voice), consent management, encrypted transport.
4. **Collective Synthesis Engine** – Clusters topics, links claims to evidence, models positions, surfaces convergence/divergence, drafts options.
5. **Action Layer** – Agencies & institutions enact policies with clear, auditable links to citizen input.
6. **Feedback & Evaluation** – Impact monitoring, audits, citizen review, and iterative improvement.

**Promise:** Technology that helps us become **more human**, not less.

---

## TDAE Foundations

**Principles**

* **Truth is the foundation** (facts, evidence, consistent patterns).
* **Agreement shapes morality** (within truth and non-harm).
* **Knowledge enables growth** (ethics evolve as understanding deepens).
* **Compassion is key** (accountability includes learning).

**Core Axioms**

1. Truth is real (independent of belief).
2. Truth appears plural (vantage points differ).
3. Truth is convergent (aligns across perspectives).
4. Truth is directional (we can move closer to it).
5. Truth is functional (supports prediction, coherence, trust).
6. Ethics evolve as we do (agreements refine with knowledge).

---

## Centers of Focus

* **Openable by anyone** with a clear charter, scope, timeline.
* **Lifecycle:** open → deliberate → draft options → decision → implementation → review → close.
* **Scaled:** neighborhood ↔ city ↔ region ↔ national; horizontally coordinated.
* **Outputs:** transparent trade-offs, readiness thresholds, minority positions preserved.

---

## Ethics, Safety, and Rights

**Privacy by Design**

* Data minimization • Local-first by default • E2E encryption for sensitive flows
* Differential privacy for public dashboards • Full export/delete rights

**Anti-Manipulation**

* Verified personhood (privacy-preserving) • Open algorithms • Public audit logs
* Independent citizen oversight • Anomaly detection for coordinated interference

**Equity & Access**

* Multichannel participation (app, web, SMS/voice, kiosks) • Multilingual support
* Inclusive outreach • Impact audits across demographics

**Transparency**

* Evidence graphs & reliability ratings • Counter-arguments surfaced
* Decision journals • Model cards (versions, training data, known limits)

---

## System Architecture

```txt
┌───────────────────────────────────────────────────────────────────┐
│ People Layer                                                      │
│  - Citizens, communities, orgs                                    │
└───────────────▲───────────────────────────────────────┬────────────┘
                │                                       │
        Local-first                                     │ encrypted, consented
   Personal AI Advocate                                 │ Civic Network
                │                                       ▼
┌───────────────┴───────────────────────────────────────────────────┐
│ Collective Synthesis Engine                                       │
│  - Topic clustering, evidence graphs, position modeling            │
│  - Convergence analysis, option drafting, readiness thresholds     │
└───────────────▲───────────────────────────────────────┬────────────┘
                │                                       │
                │                                       │ accountability links
                │                                       ▼
        Feedback & Audits                       Action Layer (Institutions)
        - Metrics, review, iteration            - Implement, report, iterate
```

---

## Quick Start

> **MVP stack:** Node.js backend, MongoDB, React/Next frontend (mobile-first), basic real-time updates.

**Prerequisites**

* Node.js v18+
* MongoDB (local or Atlas)

**Setup**

```bash
git clone https://github.com/AshmanRoonz/WhatNow.git
cd WhatNow
cp .env.example .env   # fill MONGODB_URI, JWT_SECRET, etc.
npm install
npm run dev            # concurrently start client+server if configured
# OR:
npm run server         # backend only
npm run client         # frontend only
# visit http://localhost:3000
```

**Docker (optional)**

```bash
# assuming Dockerfile + docker-compose.yml provided
docker compose up --build
```

**Seed (optional)**

```bash
npm run seed  # adds sample users, Centers of Focus, and issues
```

---

## Configuration

`.env` (example)

```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/whatnow
JWT_SECRET=change-me
CORS_ORIGIN=http://localhost:3000
# Feature flags
FEATURE_SYNTHESIS_BASIC=true
FEATURE_BIOMETRIC_SIM=false
```

**Scripts**

* `npm run dev` – dev server(s)
* `npm run server` / `npm run client` – split start
* `npm run seed` – load mock data
* `npm run lint` / `npm run test` – quality gates

**Project Structure (suggested)**

```
/api        # Express routes, controllers, validators
/app        # Frontend (Next/React)
/core       # shared types, utils
/models     # Mongo schemas
/services   # synthesis, auth, identity, evidence
/scripts    # seeders, maintenance
```

---

## API (MVP)

> Minimal surfaces to exercise the loop. Auth uses JWT (bearer).

**Auth**

* `POST /api/auth/signup` – email, pass (dev-only)
* `POST /api/auth/login` – returns JWT

**Centers of Focus**

* `GET /api/centers` – list (query: `status=active|open|closed`)
* `POST /api/centers` – create (title, charter, scope, timeframe)
* `GET /api/centers/:id` – detail, lifecycle state, threads
* `POST /api/centers/:id/contribute` – submit structured input (requires consent flags)

**Synthesis**

* `GET /api/centers/:id/synthesis` – topic map, convergence, options (basic)
* `POST /api/centers/:id/vote` – record preference on options

**Evidence**

* `POST /api/evidence` – link claim → source (URL), add reliability tag
* `GET /api/evidence/:claimId` – view graph for claim

**Admin (flag-gated)**

* `POST /api/centers/:id/advance` – move lifecycle → next stage
* `POST /api/centers/:id/charter` – update scope/timeline with audit note

**Response Examples** available in `/api/docs` (OpenAPI stub recommended).

---

## Roadmap

**0–6 weeks**

* ✅ Draft charter & core philosophy
* ✅ Minimal prototype: one input → one synthesis view
* ⬜ Basic backend/API (Auth, Centers, Synthesis stub)
* ⬜ Mobile-friendly frontend + kiosk mode
* ⬜ Privacy & security baseline audit

**6–16 weeks**

* ⬜ Polls and option voting
* ⬜ Evidence graphs & claim reliability ratings
* ⬜ Minority-position preservation in decisions
* ⬜ Real-time dashboards (participation, convergence)

**Months 4–8**

* ⬜ Multi-scale centers (local ↔ regional)
* ⬜ Advanced NLP clustering and consensus mapping
* ⬜ Published audits & impact tracking
* ⬜ Accessibility: SMS/voice, multilingual, assistive tech

**Months 9–12**

* ⬜ Privacy-preserving personhood verification
* ⬜ Open algorithms, public model cards, oversight boards
* ⬜ Bindings with institutions for formal adoption
* ⬜ Open-source core components (AGPLv3)

---

## Contributing

We welcome builders, policy thinkers, community organizers, and critics.

1. **Fork** the repo
2. **Create** a feature branch (`feat/your-idea`)
3. **Commit** with clear messages
4. **Open** a PR describing the problem, solution, and tests
5. **Engage** in review—disagree and commit when needed

**Code of Conduct:** Be kind. Argue in good faith. Center truth and shared aims.
**Security:** See `SECURITY.md` to report vulnerabilities responsibly.

---

## FAQ

**Is this “relativism”?**
No. TDAE is **truth-constrained**. Within truth and non-harm, *agreements* define what’s fair. That’s not “anything goes”; it’s **bounded pluralism**.

**Won’t AI dominate people?**
Personal AIs are **local-first and user-controlled**. Collective models are **open** and **auditable**. Humans set goals and make decisions; AI assists with clarity and synthesis.

**How are minorities protected?**
Minority positions are **preserved** with rationale and rights framing; decisions require **readiness thresholds** and explicit trade-offs.

**How do you stop bots and brigading?**
**Verified personhood** (privacy-preserving), anomaly detection, rate-limits, audit logs, and independent oversight.

---

## Glossary

* **TDAE:** Truth-Driven Agreement-Ethic—truth bounds, agreements shape morality.
* **PD:** Participatory Democracy—continuous, inclusive decision-making.
* **Organizing Field:** Government reconceived as a coordinating function owned by the people.
* **Center of Focus:** Temporary, scoped structure to concentrate attention/action.
* **Personal AI Advocate:** Local assistant that helps you participate on your terms.
* **Synthesis Engine:** System that maps topics, links evidence, models positions, drafts options.
* **Evidence Graph:** Linked claims↔sources with reliability ratings.

---

## License

* **Code:** Planned **AGPLv3** (strong copyleft to keep improvements open)
* **Docs & Diagrams:** **CC BY-SA 4.0**
  *(Currently private; finalize before public release.)*

---

### Maintainers

Ashman Roonz & contributors.
*This document is a living blueprint. Improve it. Fork it. Pilot it.*
