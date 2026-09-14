export interface CaseLink {
  key: string;
  label: string;
  href: string;
  note?: string;
}

export interface CaseSection {
  num: string;
  kicker: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ProjectRecord {
  k: string;
  v: string;
}

export interface CaseStudy {
  slug: "symmetric" | "datadex" | "setwise";
  route: string;
  index: string;
  category: string;
  title: string;
  titleEm: string;
  status: "LIVE" | "IN DEVELOPMENT";
  outcome: string;
  cardCopy: string[];
  tags: string[];
  records: ProjectRecord[];
  spec: ProjectRecord[];
  sections: CaseSection[];
  links: CaseLink[];
  demonstrates: string[];
  summary: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "symmetric",
    route: "/work/symmetric/",
    index: "01",
    category: "Multi-chain DeFi",
    title: "Symmetric",
    titleEm: "Finance.",
    status: "LIVE",
    outcome:
      "Stephen led protocol engineering and live operations for a Balancer V2-based financial protocol across Telos, Meter, Taiko, Artela and Etherlink.",
    cardCopy: [
      "Stephen led protocol engineering and operations across the stack, from AMM contracts and governance to indexing, interfaces and production deployments.",
    ],
    tags: ["AMMs", "Governance", "Incentives", "Multi-chain systems"],
    records: [
      { k: "Networks", v: "Telos · Meter · Taiko · Artela · Etherlink" },
      { k: "Protocol base", v: "Balancer V2" },
      {
        k: "Systems shipped",
        v: "Vault · weighted pools · stable pools · ve governance · gauges · emissions",
      },
      {
        k: "External work",
        v: "Balancer grant · Tezos grant · Taiko Trailblazers",
      },
    ],
    spec: [
      { k: "Lead", v: "Stephen Horsfall" },
      { k: "Role", v: "Protocol engineering & operations" },
      { k: "Protocol", v: "Balancer V2-based DeFi infrastructure" },
      { k: "Status", v: "Live / operated in production" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Project record",
        title: "Balancer V2 infrastructure across five networks.",
        paragraphs: [
          "Symmetric brought governable AMM infrastructure to Telos, Meter, Taiko, Artela and Etherlink. The protocol combined Balancer V2 pool architecture with the governance, incentives, indexing and interfaces required to operate it in production.",
        ],
      },
      {
        num: "02",
        kicker: "Stephen's role",
        title: "Protocol engineering and live operations.",
        paragraphs: [
          "Stephen led protocol engineering and operations across the Symmetric stack: architecture, smart contracts, pool infrastructure, governance, incentives, indexing, SDKs, frontends and network deployments.",
          "The work continued after launch, including migrations and recovery work on systems holding live liquidity.",
        ],
      },
      {
        num: "03",
        kicker: "Systems shipped",
        title: "A complete AMM stack.",
        bullets: [
          "<strong>Vault and pools</strong> — Balancer V2 vault integrations, weighted pools and stable pools.",
          "<strong>Governance</strong> — vote-escrowed governance, gauges and emissions distribution.",
          "<strong>Incentives</strong> — programmable rewards connected directly to pool strategy.",
          "<strong>Data</strong> — subgraphs and pipelines for pools, swaps and governance state.",
          "<strong>SDKs and interfaces</strong> — integration libraries plus swap, pool and governance applications.",
          "<strong>Deployments</strong> — network configuration, releases and production operations across five chains.",
        ],
      },
      {
        num: "04",
        kicker: "External work",
        title: "Grants and ecosystem integrations.",
        bullets: [
          "<strong>Balancer</strong> — grant-funded protocol development.",
          "<strong>Tezos</strong> — grant-funded ecosystem development.",
          "<strong>Taiko</strong> — custom 80/20 TAIKO/ETH locking infrastructure with Trailblazers integration.",
          "<strong>Revolv</strong> — an extension of the architecture with yield-accelerated pools, bribe-marketplace mechanics and lending integrations.",
        ],
      },
      {
        num: "05",
        kicker: "Outcome",
        title: "Shipped and operated in production.",
        paragraphs: [
          "Symmetric is the clearest record of Stephen's ability to own a financial protocol beyond its contracts: five deployments, live operations and ecosystem-funded engineering across the surrounding stack.",
        ],
      },
    ],
    links: [
      { key: "Live product", label: "symm.xyz", href: "https://symm.xyz" },
      {
        key: "Source code",
        label: "github.com/symmetricfinance",
        href: "https://github.com/symmetricfinance",
      },
      { key: "Protocol base", label: "balancer.fi", href: "https://balancer.fi" },
      { key: "Ecosystem", label: "tezos.com", href: "https://tezos.com" },
      { key: "Ecosystem", label: "taiko.xyz", href: "https://taiko.xyz" },
    ],
    demonstrates: ["Protocol architecture", "AMMs", "Governance", "Live operations"],
    summary: "Balancer V2-based DeFi shipped across five networks.",
  },
  {
    slug: "datadex",
    route: "/work/datadex/",
    index: "02",
    category: "Ecosystem infrastructure",
    title: "DataDex",
    titleEm: "× Vana.",
    status: "LIVE",
    outcome:
      "Stephen built trading, liquidity and market-data infrastructure for the Vana blockchain in collaboration with the Vana Foundation.",
    cardCopy: [
      "Built with the Vana Foundation, DataDex combines the exchange interface, pool management, routing, indexing and analytics needed for Vana's data-token markets.",
    ],
    tags: ["DEX engineering", "Indexing", "Analytics", "Vana"],
    records: [
      { k: "Network", v: "Vana" },
      { k: "Collaboration", v: "Vana Foundation" },
      {
        k: "Systems shipped",
        v: "DEX interface · pools · routing · subgraphs · market analytics",
      },
      { k: "Product", v: "datadex.com" },
    ],
    spec: [
      { k: "Lead", v: "Stephen Horsfall" },
      { k: "Role", v: "Protocol & application engineering" },
      { k: "Network", v: "Vana" },
      { k: "Status", v: "Live" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Project record",
        title: "A market layer for Vana.",
        paragraphs: [
          "Vana needed exchange and liquidity infrastructure for its data-token ecosystem. DataDex was built for that network and coordinated directly with the Vana Foundation.",
        ],
      },
      {
        num: "02",
        kicker: "Stephen's role",
        title: "Protocol and application engineering.",
        paragraphs: [
          "Stephen led delivery across the exchange interface, pool operations, routing, network integration, indexing and market analytics, working with the Vana Foundation around the ecosystem's launch requirements.",
        ],
      },
      {
        num: "03",
        kicker: "Systems shipped",
        title: "Exchange infrastructure, connected end to end.",
        bullets: [
          "<strong>DEX interface</strong> — trading and liquidity management for Vana data-token markets.",
          "<strong>Pool management</strong> — pool configuration and liquidity operations.",
          "<strong>Routing</strong> — trade routing across available pools.",
          "<strong>Network integration</strong> — Vana chain configuration, RPCs and deployment infrastructure.",
          "<strong>Subgraphs</strong> — indexing for pools, swaps and volume.",
          "<strong>Market analytics</strong> — usable market data for traders and ecosystem teams.",
        ],
      },
      {
        num: "04",
        kicker: "Delivery conditions",
        title: "Built alongside a new network.",
        bullets: [
          "<strong>Foundation collaboration</strong> — engineering coordinated with the Vana Foundation's ecosystem timeline.",
          "<strong>Launch-window delivery</strong> — integrations tested against a fast-moving network environment.",
          "<strong>Shared data layer</strong> — contracts, indexing and application behavior developed as one system.",
        ],
      },
      {
        num: "05",
        kicker: "Outcome",
        title: "Live at datadex.com.",
        paragraphs: [
          "DataDex is live market infrastructure for the Vana ecosystem, with the product and public source repositories available below.",
        ],
      },
    ],
    links: [
      { key: "Live product", label: "datadex.com", href: "https://datadex.com" },
      {
        key: "Source code",
        label: "github.com/vanadatadex",
        href: "https://github.com/vanadatadex",
      },
      {
        key: "Ecosystem",
        label: "vana.org",
        href: "https://vana.org",
        note: "Vana Foundation",
      },
    ],
    demonstrates: ["DEX engineering", "Indexing", "Analytics", "Ecosystem delivery"],
    summary: "Exchange and market infrastructure live on Vana.",
  },
  {
    slug: "setwise",
    route: "/work/setwise/",
    index: "03",
    category: "Building now",
    title: "Setwise",
    titleEm: "",
    status: "IN DEVELOPMENT",
    outcome:
      "An original Ceno protocol in active development, focused first on tokenized-asset discovery, market data and RFQ execution.",
    cardCopy: [
      "The first public release is intentionally narrow: tokenized-asset discovery, normalized market data and RFQ execution.",
    ],
    tags: ["Tokenized assets", "Market data", "RFQ execution"],
    records: [
      { k: "Status", v: "Active development" },
      { k: "Current focus", v: "Discovery · market data · RFQ execution" },
      { k: "Release", v: "Simplified public first release" },
    ],
    spec: [
      { k: "Builder", v: "Ceno Studio" },
      { k: "Type", v: "Original protocol" },
      { k: "Current focus", v: "Tokenized-asset markets" },
      { k: "Status", v: "In development" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Problem",
        title: "Tokenized assets, fragmented markets.",
        paragraphs: [
          "Tokenized assets are spread across issuers and venues, making discovery, comparison and execution unnecessarily fragmented.",
        ],
      },
      {
        num: "02",
        kicker: "Current build",
        title: "A deliberately narrow first release.",
        paragraphs: [
          "Setwise is an original Ceno protocol. The current release scope concentrates on the smallest useful market layer: asset discovery, normalized market data and request-for-quote execution.",
        ],
      },
      {
        num: "03",
        kicker: "Release scope",
        title: "What is being built now.",
        bullets: [
          "<strong>Asset discovery</strong> — a unified view of supported tokenized assets.",
          "<strong>Market data</strong> — comparable pricing and market information.",
          "<strong>RFQ execution</strong> — quoted execution with explicit counterparties and terms.",
          "<strong>Protocol controls</strong> — constrained permissions and defensive execution paths.",
        ],
      },
      {
        num: "04",
        kicker: "Engineering focus",
        title: "Ship the working core first.",
        paragraphs: [
          "Broader product ideas will be documented only as they become working systems. Until then, the public record stays focused on the first release.",
        ],
      },
      {
        num: "05",
        kicker: "Status",
        title: "In development.",
        paragraphs: [
          "Setwise will remain labelled IN DEVELOPMENT until a public release and verifiable product links are available.",
        ],
      },
    ],
    links: [],
    demonstrates: ["Protocol design", "Tokenized assets", "RFQ execution"],
    summary: "A focused tokenized-asset protocol in active development.",
  },
];
