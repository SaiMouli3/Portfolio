# A Sai Mouli — profile (source of truth)

Sources: `Sai_Mouli_Resume_B_Applied_Ai.pdf` plus a GitHub check on 22 Nov 2026. Metrics are as reported on the resume.

## Identity
- **Name:** A Sai Mouli (short form: Sai Mouli)
- **Positioning:** Applied AI Engineer · Backend Engineer · Builder
- **Official title:** Software Engineer, NatWest Group
- **Location:** Bengaluru, India
- **Email:** saimouli2023@gmail.com
- **GitHub:** https://github.com/SaiMouli3
- **LinkedIn:** https://www.linkedin.com/in/saimouli036/
- **Previous portfolio:** https://sai-mouli-portfolio.vercel.app

## Experience

### NatWest Group — Software Engineer · Bengaluru · Jul 2025 – Present
- Built an AI natural-language analytics engine over a **136-table** reporting database: text-to-SQL that generates SQL from plain English, validates it against the schema, executes it and charts the result.
- Integrated the engine into the dashboard as a chatbot for self-service reporting, replacing ad-hoc query requests to engineers.
- Backend APIs and data pipelines for the SCO Observability Platform: application monitoring and end-to-end customer-journey tracking across systems.
- Data processing for application lifecycle events and technical observability data, used by analytics and quality-control teams.
- Large dashboard queries: **~3 min → under 30 s**.

### Aamara Technologies — Backend Developer Intern · Bengaluru · Mar 2024 – Aug 2024
- Built the backend of Techno Rings' shop-floor operations system, used by **20,000 people**. Stack: Django REST Framework, MySQL, React front end.
- Features: machine assignment, shift logging and tool-life tracking.
- Implemented payroll exception rules at the model level for breakdowns and machine reassignment. Daily processing went from **~4 h to under 30 min**.

### Pods Studio — Software Development Intern · Bengaluru · Nov 2023 – Dec 2023
- Moved customer email onto event-driven Celery/cron triggers; retention rose **27%**.
- Debugged and fixed failed in-app payments.

## Education
- **Ramaiah Institute of Technology** — B.Tech, Computer Science and Engineering, 2021–2025, CGPA **9.06/10**

## Skills
- **Languages:** Python, C++, SQL
- **AI engineering:** LangGraph, LangChain, MCP servers, RAG pipelines, embeddings, FAISS
- **Backend:** FastAPI, Django, Django REST Framework, Flask, SQLAlchemy, REST APIs, data pipelines, WebSockets, Celery
- **Databases & infrastructure:** PostgreSQL, MySQL, Redis, AWS, Docker, Kubernetes, Linux, Git, GitHub Actions
- **Practices:** asyncio concurrency, database transactions, pytest, API design, performance optimisation

## Projects

### Featured (on the resume)

**Zippyy** — https://github.com/SaiMouli3/zippyy
- **What it is:** a multi-tenant delivery-recovery platform.
- **Stack:** Python, FastAPI, PostgreSQL, Redis, Next.js.
- **Design:**
  - Signed carrier, WhatsApp and voice webhooks are de-duplicated into an inbox.
  - The inbox drives a shipment state machine, which wakes durable agent workflows that act only through typed tools.
  - Every carrier action must pass a **14-rule** deterministic policy engine; the LLM reads only replies the rule extractor is unsure of.
  - Per-merchant row-level security and `SKIP LOCKED` job leases.
- **Tests:** **145** passing.

**XTXT** — https://github.com/SaiMouli3/xtxt
- **What it is:** a plain-text format whose directives carry images, tables, charts and typed records as JSON-extractable data.
- **Delivered:** a spec, a Go reference parser and a **12-case** conformance suite, run in CI by **5 SDKs**.
- **Published:** PyPI (`xtxt`) and npm (`xtxt-js`). Live playground: https://saimouli3.github.io/xtxt/
- **Languages:** Go, Python, JavaScript, Rust, Java, C.

### Other strong repositories (from the GitHub review)

**ECC Intelligence** — https://github.com/SaiMouli3/ecc-intelligence
- **What it is:** an AI operating layer for SAP ECC.
- **Design:** grounding validation rejects claims and numbers that no fact backs; approval tokens are bound to a hash of the exact parameters; the audit log is hash-chained.
- **Stack:** TypeScript, Next.js, zod, Drizzle, SAP HANA, Vitest.

**PayPilot** — https://github.com/SaiMouli3/paypilot
- **What it is:** receivables recovery for Indian small suppliers.
- **Design:** a deterministic ledger plus an MSMED rules engine; Decimal-only money; uploads checked by magic bytes; tenant-isolation tests.
- **Stack:** FastAPI, SQLAlchemy, Alembic, Next.js.
- **Note:** GitHub credits all of its commits to the `claude` account.

**Zeoatap** — https://github.com/SaiMouli3/Zeoatap
- **What it is:** an edge-first camera-safety platform for infant-care facilities.
- **Design:** detectors observe, rules decide, staff review; a temporal rule engine in Go; encrypted evidence clips; a hash-chained audit log.
- **Stack:** Go, Python, Next.js, PostgreSQL.
- **Note:** GitHub credits all of its commits to the `claude` account.

## Open source (statuses checked 22 Nov 2026)

| Repo | Ref | Status | What it was |
| --- | --- | --- | --- |
| PrefectHQ/fastmcp | PR #4758 | **Merged** | Fixed a lost-update race in the event store: a five-concurrent-write reproduction kept 1 of 5 event IDs. After review, replaced a store-wide lock with 64 striped asyncio locks keyed by stream ID. |
| PrefectHQ/fastmcp | PR #4705 | **Merged** | Stopped the response cache storing `is_error` results, which pinned a transient 503 for an hour. |
| stanfordnlp/dspy | PR #10720 | **Merged** | Fixed `dspy.majority()` raising TypeError on non-string values. |
| chroma-core/chroma | Issue #7560, PR #7559 | **Open** | Showed the CI lint job could never fail; the PR fixes two hidden bugs. |
| 567-labs/instructor | PR #2846 | **Closed, not merged** | The resume lists it as open; update the resume. |

Also closed and not merged: modelcontextprotocol/python-sdk #3749 and #3750, fastmcp #4706.

## Personal
- Runs personal AI experiments outside work. This is learning, not a formal research role.
