/**
 * Every factual claim on the site lives here.
 * Source of record: public/resume/Sai-Mouli-Resume.pdf (snapshot). PR statuses were
 * checked on GitHub on 2026-11-22 — see `verifiedOn`.
 */

export const site = {
  // Set NEXT_PUBLIC_SITE_URL at deploy time; no live domain is assumed.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  verifiedOn: "22 Nov 2026",
};

export const person = {
  name: "A Sai Mouli",
  shortName: "Sai Mouli",
  positioning: ["Applied AI Engineer", "Backend Engineer", "Builder"],
  title: "Software Engineer at NatWest Group",
  location: "Bengaluru, India",
  email: "saimouli2023@gmail.com",
  github: "https://github.com/SaiMouli3",
  linkedin: "https://www.linkedin.com/in/saimouli036/",
  resume: "/resume/Sai-Mouli-Resume.pdf",
  resumeFilename: "Sai-Mouli-Resume.pdf",
};

export const nav = [
  { href: "/#journey", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#open-source", label: "Open Source" },
  { href: "/#contact", label: "Contact" },
] as const;

export type Metric = { value: string; label: string };

export const natwest = {
  org: "NatWest Group",
  role: "Software Engineer",
  period: "Jul 2025 – Present",
  title: "Plain-English questions, answered by a schema-checked SQL engine.",
  summary:
    "An AI analytics engine over a 136-table reporting database: a text-to-SQL workflow turns a plain-English question into SQL, validates it against the schema, executes it and charts the result. It ships inside the dashboard as a chatbot for self-service reporting, replacing ad-hoc query requests to engineers.",
  secondary:
    "Alongside it, backend APIs and data pipelines for the SCO Observability Platform — processing application lifecycle events and technical observability data so internal teams can monitor applications and follow customer journeys across interconnected systems.",
  metrics: [
    { value: "136", label: "tables in the reporting database the engine reasons over" },
    { value: "~3 min → <30 s", label: "large dashboard queries after API and pipeline optimisation" },
  ] satisfies Metric[],
};

export type Project = {
  slug: "zippyy" | "xtxt";
  name: string;
  kicker: string;
  oneLiner: string;
  stack: string[];
  repo: string;
  extraLinks?: { label: string; href: string }[];
  problem: string;
  approach: string[];
  decisions: { title: string; body: string }[];
  outcomes: Metric[];
  note: string;
};

export const projects: Project[] = [
  {
    slug: "zippyy",
    name: "Zippyy",
    kicker: "Multi-tenant delivery recovery",
    oneLiner:
      "When a delivery fails, Zippyy reaches the customer on WhatsApp or by voice, understands the reply, and acts on it — but only through rules the merchant controls.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Next.js"],
    repo: "https://github.com/SaiMouli3/zippyy",
    problem:
      "Failed deliveries (NDRs) for D2C brands are recovered by phone calls and spreadsheets. Automating the conversation is easy; letting a model trigger real carrier actions safely is not.",
    approach: [
      "Signed carrier, WhatsApp and voice webhooks land in a de-duplicating inbox, then drive a shipment state machine.",
      "State changes wake durable agent workflows that can act only through typed tools.",
      "Every carrier action must pass a deterministic 14-rule policy engine; the LLM reads only the replies the rule-based extractor is unsure of.",
    ],
    decisions: [
      {
        title: "Policy before model",
        body: "The model can propose; a deterministic engine (rules R01–R14) decides. A carrier request that fails policy never leaves the system.",
      },
      {
        title: "Tenancy in the database",
        body: "Per-merchant Postgres row-level security keyed on the authenticated session — isolation doesn't depend on every query remembering a WHERE clause.",
      },
      {
        title: "Workers that never double-process",
        body: "Jobs are claimed with FOR UPDATE SKIP LOCKED leases, so workers scale horizontally without coordination.",
      },
    ],
    outcomes: [
      { value: "14", label: "deterministic policy rules gate every carrier action" },
      { value: "145", label: "passing tests (as reported on the resume)" },
    ],
    note: "Diagram is a simplified overview drawn from the repository README, not a production screenshot.",
  },
  {
    slug: "xtxt",
    name: "XTXT",
    kicker: "A document format for agents",
    oneLiner:
      "Plain text that machines can read without guessing: images, tables, charts and typed records carried as JSON-extractable data, in a file that still opens in any editor.",
    stack: ["Go", "Python", "JavaScript", "Rust", "Java", "C"],
    repo: "https://github.com/SaiMouli3/xtxt",
    extraLinks: [
      { label: "Live playground", href: "https://saimouli3.github.io/xtxt/" },
      { label: "PyPI", href: "https://pypi.org/project/xtxt/" },
      { label: "npm", href: "https://www.npmjs.com/package/xtxt-js" },
    ],
    problem:
      "Markdown makes an agent infer structure from prose. Tasks, decisions and data end up as conventions a model has to guess at.",
    approach: [
      "One syntax for everything non-textual: @name(args) for an item, @name … @endname for a block.",
      "`xtxt extract` returns outline, tasks, decisions, links, media and every record block as JSON.",
      "A written specification, a Go reference parser and a conformance suite that defines what “an XTXT parser” means.",
    ],
    decisions: [
      {
        title: "Unknown directives warn, never fail",
        body: "A reader written today stays useful on a document written tomorrow — adding a directive never breaks an old parser.",
      },
      {
        title: "Shape, not meaning",
        body: "The format guarantees a record's fields are preserved and reported; what they mean is the application's business.",
      },
      {
        title: "Conformance as the contract",
        body: "A 12-case suite runs in CI against 5 SDKs, so implementations in different languages can't quietly drift.",
      },
    ],
    outcomes: [
      { value: "12", label: "conformance cases define a valid parser" },
      { value: "5", label: "SDKs run the suite in CI" },
    ],
    note: "Syntax example taken from the repository README.",
  },
];

/** Additional repositories — filled from a review of public GitHub work. */
export type MoreProject = { name: string; blurb: string; stack: string[]; repo: string };
export const moreProjects: MoreProject[] = [
  {
    name: "ECC Intelligence",
    blurb:
      "An AI operating layer for SAP ECC where the model never produces a fact: answers are rejected if they cite an unknown fact or state a number no ledger fact backs. Approvals are bound to a hash of the exact parameters, and the audit log is hash-chained.",
    stack: ["TypeScript", "Next.js", "zod", "Drizzle", "SAP HANA", "Vitest"],
    repo: "https://github.com/SaiMouli3/ecc-intelligence",
  },
  {
    name: "PayPilot",
    blurb:
      "Receivables recovery for Indian small suppliers: a deterministic ledger and an MSMED rules engine draft actions that a person approves. Money is Decimal-only (floats raise), uploads are checked by magic bytes, and tenant isolation is tested.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "Next.js"],
    repo: "https://github.com/SaiMouli3/paypilot",
  },
  {
    name: "Zeoatap",
    blurb:
      "An edge-first camera-safety platform for infant-care facilities, built on one principle: detectors observe, rules decide, staff review. It has a temporal rule engine in Go, a separate vision worker, encrypted evidence clips and a hash-chained audit trail.",
    stack: ["Go", "Python", "Next.js", "PostgreSQL"],
    repo: "https://github.com/SaiMouli3/Zeoatap",
  },
];

export type Role = {
  org: string;
  role: string;
  place: string;
  period: string;
  points: string[];
  highlight?: Metric;
};

export const experience: Role[] = [
  {
    org: "NatWest Group",
    role: "Software Engineer",
    place: "Bengaluru",
    period: "Jul 2025 – Present",
    points: [
      "Built an AI natural-language analytics engine over a 136-table reporting database — text-to-SQL, schema validation, execution and charting.",
      "Shipped it in the dashboard as a chatbot for self-service reporting.",
      "Backend APIs and data pipelines for the SCO Observability Platform: lifecycle events and technical observability data for analytics and quality-control teams.",
    ],
    highlight: { value: "~3 min → <30 s", label: "large dashboard queries" },
  },
  {
    org: "Aamara Technologies",
    role: "Backend Developer Intern",
    place: "Bengaluru",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Built the backend of Techno Rings’ shop-floor operations system, used by 20,000 people — Django REST Framework, MySQL, React front end.",
      "Machine assignment, shift logging and tool-life tracking.",
      "Payroll exception paths as model-level rules: breakdowns pro-rate shift and target; workers move to another machine’s job.",
    ],
    highlight: { value: "~4 h → <30 min", label: "daily payroll processing" },
  },
  {
    org: "Pods Studio",
    role: "Software Development Intern",
    place: "Bengaluru",
    period: "Nov 2023 – Dec 2023",
    points: [
      "Moved customer email onto event-driven Celery/cron triggers.",
      "Debugged and fixed failed in-app payments.",
    ],
    highlight: { value: "+27%", label: "retention, as reported on the resume" },
  },
];

export const education = {
  school: "Ramaiah Institute of Technology",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2021 – 2025",
  cgpa: "9.06 / 10",
};

export type Contribution = {
  repo: string;
  ref: string;
  href: string;
  status: "Merged" | "Open";
  headline: string;
  bug: string;
  fix: string;
};

/** Verified on GitHub (see site.verifiedOn). Closed-without-merge PRs are intentionally omitted. */
export const contributions: Contribution[] = [
  {
    repo: "PrefectHQ/fastmcp",
    ref: "#4758",
    href: "https://github.com/PrefectHQ/fastmcp/pull/4758",
    status: "Merged",
    headline: "A lost-update race in the event store",
    bug: "Concurrent writes to the same stream raced on a read-modify-write. A five-concurrent-write reproduction kept only 1 of 5 event IDs.",
    fix: "After maintainer review, replaced a store-wide lock with 64 striped asyncio locks keyed by stream ID — serialised per stream, parallel across streams.",
  },
  {
    repo: "PrefectHQ/fastmcp",
    ref: "#4705",
    href: "https://github.com/PrefectHQ/fastmcp/pull/4705",
    status: "Merged",
    headline: "A cache that remembered failures",
    bug: "The response-caching middleware stored is_error results, so a transient 503 could be served for a full hour.",
    fix: "Error results are no longer cached.",
  },
  {
    repo: "stanfordnlp/dspy",
    ref: "#10720",
    href: "https://github.com/stanfordnlp/dspy/pull/10720",
    status: "Merged",
    headline: "Majority voting on non-strings",
    bug: "dspy.majority() raised TypeError when the voted field held a non-string value.",
    fix: "majority() now votes on non-string field values.",
  },
  {
    repo: "chroma-core/chroma",
    ref: "Issue #7560 · PR #7559",
    href: "https://github.com/chroma-core/chroma/issues/7560",
    status: "Open",
    headline: "A CI lint job that could never fail",
    bug: "Showed that the lint job was a no-op — black, flake8 and prettier never actually ran on PRs.",
    fix: "PR #7559 proposes fixes for two bugs the silent lint had been hiding.",
  },
];

export const capabilities = [
  {
    title: "Reliable backends",
    body: "APIs and pipelines that stay correct under load and concurrency.",
    tools: ["Python", "FastAPI", "Django / DRF", "Flask", "SQLAlchemy", "Celery", "WebSockets", "REST API design"],
    evidence: "Dashboard queries ~3 min → <30 s at NatWest; payroll ~4 h → <30 min at Aamara.",
  },
  {
    title: "Applied AI workflows",
    body: "LLMs as one component in a system with validation, rules and typed tools around them.",
    tools: ["LangGraph", "LangChain", "MCP servers", "RAG", "Embeddings", "FAISS"],
    evidence: "Schema-validated text-to-SQL; Zippyy's policy-gated agents.",
  },
  {
    title: "Concurrency & data",
    body: "Transactions, locks and isolation chosen deliberately, not by accident.",
    tools: ["asyncio", "PostgreSQL", "MySQL", "Redis", "SQL", "Transactions"],
    evidence: "Striped asyncio locks in FastMCP; row-level security and SKIP LOCKED leases in Zippyy.",
  },
  {
    title: "Shipping & infrastructure",
    body: "Tested, containerised and running in CI.",
    tools: ["pytest", "Docker", "Kubernetes", "AWS", "Linux", "Git", "GitHub Actions", "C++"],
    evidence: "XTXT's conformance suite runs in CI across 5 SDKs.",
  },
];

export const exploring =
  "Outside work I run personal AI experiments — trying ideas, breaking them, and keeping what turns out to be useful. It is learning, not a research position, and the useful parts tend to become projects like the ones above.";
