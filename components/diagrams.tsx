/** Conceptual system overviews in plain SVG. Drawn from public descriptions only. */

type N = { x: number; y: number; w: number; t: string; s?: string; tone?: "key" | "cool" };

function Node({ x, y, w, t, s, tone }: N) {
  const h = s ? 46 : 34;
  return (
    <g className={`node${tone ? ` ${tone}` : ""}`}>
      <rect x={x} y={y} width={w} height={h} rx="4" />
      <text x={x + 12} y={y + (s ? 19 : 21)}>{t}</text>
      {s && <text className="sub" x={x + 12} y={y + 35}>{s}</text>}
    </g>
  );
}

function Frame({ title, note, children, viewBox }: { title: string; note: string; children: React.ReactNode; viewBox: string }) {
  return (
    <figure className="diagram" style={{ margin: 0 }}>
      <svg viewBox={viewBox} role="img" aria-label={title} data-draw>
        {children}
      </svg>
      <figcaption><span aria-hidden="true">◇</span> {note}</figcaption>
    </figure>
  );
}

export function NatWestDiagram() {
  return (
    <Frame
      viewBox="0 0 640 330"
      title="Conceptual flow: a plain-English question becomes SQL, is validated against a 136-table schema, executed, and returned as a chart in a dashboard chatbot."
      note="Simplified, conceptual overview based on the public resume description. Not the internal architecture."
    >
      <path className="wire key" d="M140 57 H210" />
      <path className="wire key" d="M380 57 H440" />
      <path className="wire key" d="M520 80 V150" />
      <path className="wire key" d="M440 173 H380" />
      <path className="wire key" d="M210 173 H140" />
      <path className="wire" d="M75 196 V250" />
      <Node x={10} y={34} w={130} t="Question" s="plain English" />
      <Node x={210} y={34} w={170} t="Text-to-SQL" s="generate a query" tone="cool" />
      <Node x={440} y={34} w={170} t="Schema check" s="136 tables" tone="key" />
      <Node x={440} y={150} w={170} t="Execute" s="reporting DB" />
      <Node x={210} y={150} w={170} t="Chart" s="result → visual" />
      <Node x={10} y={150} w={130} t="Chatbot" s="in the dashboard" tone="key" />
      <Node x={10} y={250} w={250} t="Self-service reporting" s="no ad-hoc query requests" />
      <text className="sub" x={530} y={120}>only valid SQL runs</text>
    </Frame>
  );
}

export function ZippyyDiagram() {
  return (
    <Frame
      viewBox="0 0 640 400"
      title="Zippyy overview: signed carrier, WhatsApp and voice webhooks are de-duplicated into an inbox, drive a shipment state machine, and wake durable agent workflows that act through typed tools. Every carrier action passes a 14-rule deterministic policy engine; an LLM reads only uncertain replies."
      note="Simplified overview drawn from the public repository README."
    >
      <path className="wire" d="M150 37 Q180 37 190 80" />
      <path className="wire" d="M150 97 H190" />
      <path className="wire" d="M150 157 Q180 157 190 114" />
      <path className="wire key" d="M330 97 H370" />
      <path className="wire key" d="M450 120 V170" />
      <path className="wire key" d="M450 216 V262" />
      <path className="wire key" d="M450 308 V340" />
      <path className="wire" d="M370 193 Q300 193 290 240" />
      <path className="wire" d="M290 286 Q300 300 370 285" />
      <Node x={10} y={14} w={140} t="Carrier" s="signed webhook" />
      <Node x={10} y={74} w={140} t="WhatsApp" s="signed webhook" />
      <Node x={10} y={134} w={140} t="Voice" s="signed webhook" />
      <Node x={190} y={74} w={140} t="Inbox" s="de-duplicated" />
      <Node x={370} y={74} w={160} t="State machine" s="per shipment" />
      <Node x={370} y={170} w={200} t="Agent workflow" s="durable · typed tools only" tone="cool" />
      <Node x={190} y={240} w={170} t="LLM" s="only unsure replies" />
      <Node x={370} y={262} w={200} t="Policy engine" s="14 deterministic rules" tone="key" />
      <Node x={370} y={340} w={200} t="Carrier action" />
      <text className="sub" x={10} y={350}>Postgres · row-level security</text>
      <text className="sub" x={10} y={368}>per merchant · SKIP LOCKED leases</text>
    </Frame>
  );
}

export function XtxtDiagram() {
  return (
    <Frame
      viewBox="0 0 640 230"
      title="XTXT overview: a plain-text .xtxt file is read by the Go reference parser and extracted as JSON; a 12-case conformance suite runs in CI against 5 SDKs."
      note="Simplified overview of the format's toolchain, from the repository README."
    >
      <path className="wire key" d="M140 57 H200" />
      <path className="wire key" d="M380 57 H440" />
      <path className="wire" d="M290 80 V140" />
      <path className="wire" d="M380 163 H440" />
      <Node x={10} y={34} w={130} t="notes.xtxt" s="opens anywhere" />
      <Node x={200} y={34} w={180} t="Reference parser" s="Go" tone="cool" />
      <Node x={440} y={34} w={180} t="xtxt extract" s="→ JSON for agents" tone="key" />
      <Node x={200} y={140} w={180} t="Conformance" s="12 cases" tone="key" />
      <Node x={440} y={140} w={180} t="5 SDKs" s="run it in CI" />
    </Frame>
  );
}
