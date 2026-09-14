export interface CaseLink {
  key: string;
  label: string;
  href?: string;
  note?: string;
}

export interface CaseSection {
  num: string;
  kicker: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
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
  spec: { k: string; v: string }[];
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
      "Built and operated a Balancer-based financial protocol across multiple networks — smart contracts, pools, governance, incentives, indexing, SDKs, frontends and deployments.",
    cardCopy: [
      "Built and operated a Balancer-based financial protocol across multiple networks, covering smart contracts, pools, governance, incentives, indexing, SDKs, frontends and deployments.",
      "The work also led to grant-funded development for Balancer and Tezos, and custom liquidity-locking infrastructure for Taiko.",
    ],
    tags: [
      "Protocol architecture",
      "AMMs",
      "Governance",
      "Incentives",
      "Multi-chain systems",
    ],
    spec: [
      { k: "Role", v: "Protocol engineering & operations" },
      { k: "Type", v: "Multi-chain DeFi infrastructure" },
      { k: "Ecosystems", v: "Balancer · Tezos · Taiko" },
      { k: "Status", v: "Live / operated in production" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Context / challenge",
        title: "Liquidity infrastructure for emerging networks.",
        paragraphs: [
          "Emerging networks need production-grade liquidity infrastructure from day one — and they rarely get it from platforms built for larger chains first. Symmetric is a Balancer-based financial protocol deployed across multiple networks, giving those ecosystems deep, governable AMM infrastructure without waiting for it to arrive.",
          "Making that work meant owning every layer around the AMM core: governance, incentives, indexing, tooling and the operational reality of running a live protocol.",
        ],
      },
      {
        num: "02",
        kicker: "Ceno's role",
        title: "Built and operated end to end.",
        paragraphs: [
          "Ceno designed, built and operated the protocol: architecture, smart contracts, pool infrastructure, governance, incentives, indexing, SDKs, frontends and deployments across every supported network.",
          "The role extended past launch into live production operations, including migration and recovery work on running systems.",
        ],
      },
      {
        num: "03",
        kicker: "What was built",
        title: "A complete protocol stack.",
        bullets: [
          "<strong>AMM infrastructure</strong> — Balancer-based pools, vault integrations and deployments across multiple networks.",
          "<strong>Governance</strong> — gauges, emissions and reward distribution so communities can direct liquidity.",
          "<strong>Incentives</strong> — programmable reward mechanisms aligned with pool strategy.",
          "<strong>Indexing</strong> — subgraphs and data pipelines for pools, swaps and governance state.",
          "<strong>SDKs</strong> — integration libraries for frontends and third-party builders.",
          "<strong>Frontends</strong> — swap, pool and governance interfaces shipped with the protocol.",
        ],
      },
      {
        num: "04",
        kicker: "Technical depth",
        title: "Notable systems.",
        bullets: [
          "<strong>Governance machinery</strong> — gauges, emissions schedules and rewards wired directly into pool incentives.",
          "<strong>Taiko liquidity lock-up</strong> — custom 80/20 TAIKO/ETH locking infrastructure with Trailblazers integration.",
          "<strong>Grant-funded engineering</strong> — protocol development funded by Balancer and Tezos ecosystem grants.",
          "<strong>Live operations</strong> — migration and recovery work performed on production systems with real liquidity.",
          "<strong>Revolv extension</strong> — the same architecture extended with yield-accelerated pools, bribe-marketplace mechanics, lending integrations and additional token-economic mechanisms.",
        ],
      },
      {
        num: "05",
        kicker: "Outcome / status",
        title: "Live across multiple networks.",
        paragraphs: [
          "Symmetric runs in production across multiple networks, with Ceno continuing to operate the system. The work led to grant-funded development for Balancer and Tezos, custom liquidity-locking infrastructure for Taiko, and Revolv as a supporting extension of the same architecture.",
        ],
      },
    ],
    links: [
      { key: "Live product", label: "symmetric.finance", href: "https://symmetric.finance" },
      {
        key: "Source code",
        label: "github.com/symmetricfinance",
        href: "https://github.com/symmetricfinance",
      },
      { key: "Ecosystem", label: "balancer.fi", href: "https://balancer.fi" },
      { key: "Ecosystem", label: "tezos.com", href: "https://tezos.com" },
      { key: "Ecosystem", label: "taiko.xyz", href: "https://taiko.xyz" },
    ],
    demonstrates: [
      "Protocol architecture",
      "AMMs",
      "Governance",
      "Incentives",
      "Multi-chain systems",
    ],
    summary: "Balancer-based DeFi built and operated across multiple networks.",
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
      "Trading, liquidity and market infrastructure for the Vana blockchain, built in collaboration with the Vana Foundation.",
    cardCopy: [
      "Built in collaboration with the Vana Foundation, DataDex provides trading, liquidity and market infrastructure for the Vana blockchain.",
      "The project spans the DEX interface, pool management, routing, network integrations, subgraphs and market analytics.",
    ],
    tags: [
      "Ecosystem infrastructure",
      "DEX engineering",
      "Indexing",
      "Analytics",
      "Full-stack delivery",
    ],
    spec: [
      { k: "Role", v: "Full-stack ecosystem delivery" },
      { k: "Type", v: "Exchange & liquidity infrastructure" },
      { k: "Ecosystem", v: "Vana" },
      { k: "Status", v: "Live" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Context / challenge",
        title: "A new chain needs markets.",
        paragraphs: [
          "A new L1 is only as useful as the markets running on it. Vana needed exchange and liquidity infrastructure purpose-built for its ecosystem — delivered to launch-window standards and coordinated directly with the Vana Foundation.",
          "This is an ecosystem-delivery story: not simply another DEX, but the market layer a young network needs in place for builders and traders to arrive.",
        ],
      },
      {
        num: "02",
        kicker: "Ceno's role",
        title: "Built with the Vana Foundation.",
        paragraphs: [
          "Ceno built DataDex in collaboration with the Vana Foundation, owning delivery across the full stack — contracts and pools through to the interface, indexing and analytics that make market data usable.",
        ],
      },
      {
        num: "03",
        kicker: "What was built",
        title: "Exchange infrastructure, full stack.",
        bullets: [
          "<strong>DEX interface</strong> — trading and liquidity management built for the Vana ecosystem.",
          "<strong>Pool management</strong> — pool creation, configuration and liquidity operations.",
          "<strong>Routing</strong> — trade routing across pools for execution quality.",
          "<strong>Network integrations</strong> — chain-level wiring for Vana, RPCs and deployment infrastructure.",
          "<strong>Subgraphs</strong> — indexing pipelines for pools, swaps and volume.",
          "<strong>Market analytics</strong> — surfaced market data for traders and the ecosystem.",
        ],
      },
      {
        num: "04",
        kicker: "Technical depth",
        title: "Delivery under ecosystem conditions.",
        bullets: [
          "<strong>Foundation collaboration</strong> — engineering coordinated with the Vana Foundation's ecosystem timeline.",
          "<strong>Launch-window engineering</strong> — infrastructure hardened for a new network's early, fast-moving conditions.",
          "<strong>One coherent system</strong> — contracts, indexing, frontend and analytics developed together rather than stitched from third-party parts.",
        ],
      },
      {
        num: "05",
        kicker: "Outcome / status",
        title: "Market infrastructure for Vana.",
        paragraphs: [
          "DataDex provides the trading, liquidity and market-data layer for the Vana ecosystem — a reference for what focused, full-stack ecosystem delivery looks like from a solo studio.",
        ],
      },
    ],
    links: [
      {
        key: "Ecosystem",
        label: "vana.org",
        href: "https://vana.org",
        note: "Vana Foundation",
      },
      {
        key: "Live product",
        label: "DataDex on Vana",
        note: "URL to be confirmed for launch listing",
      },
    ],
    demonstrates: [
      "Ecosystem infrastructure",
      "DEX engineering",
      "Indexing",
      "Analytics",
      "Full-stack delivery",
    ],
    summary: "Exchange and liquidity infrastructure for the Vana ecosystem.",
  },
  {
    slug: "setwise",
    route: "/work/setwise/",
    index: "03",
    category: "Tokenized assets",
    title: "Setwise",
    titleEm: "",
    status: "IN DEVELOPMENT",
    outcome:
      "An original Ceno protocol bringing together tokenized asset discovery, portfolio-style products, market data and multi-source execution.",
    cardCopy: [
      "An original Ceno protocol bringing together tokenized asset discovery, portfolio-style products, market data and multi-source execution.",
    ],
    tags: [
      "RWA infrastructure",
      "Protocol design",
      "Routing",
      "Governance",
      "Smart-contract security",
    ],
    spec: [
      { k: "Role", v: "Original protocol / studio-owned" },
      { k: "Type", v: "Tokenized-asset market infrastructure" },
      { k: "Focus", v: "Multi-issuer RWA markets" },
      { k: "Status", v: "In development" },
    ],
    sections: [
      {
        num: "01",
        kicker: "Context / challenge",
        title: "Tokenized assets, fragmented markets.",
        paragraphs: [
          "Tokenized real-world assets are fragmented across issuers and venues. Discovery is manual, execution is single-source, and portfolio-style products barely exist onchain.",
          "Setwise is Ceno's answer: market infrastructure designed from first principles for multi-issuer tokenized assets — not an adaptation of an existing DEX.",
        ],
      },
      {
        num: "02",
        kicker: "Ceno's role",
        title: "An original Ceno protocol.",
        paragraphs: [
          "Setwise is designed, built and owned by Ceno. The studio runs the full scope: protocol design, market modelling, execution mechanics, security controls and the interfaces that tie them together.",
        ],
      },
      {
        num: "03",
        kicker: "What is being built",
        title: "Market infrastructure for tokenized assets.",
        bullets: [
          "<strong>Asset discovery</strong> — a unified view of tokenized assets across issuers.",
          "<strong>Portfolio-style products</strong> — multi-asset constructions on top of discovered markets.",
          "<strong>Market data</strong> — pricing and market information aggregated from multiple sources.",
          "<strong>Multi-source execution</strong> — routing and RFQ execution across venues and counterparties.",
          "<strong>Cross-chain settlement</strong> — settlement flows that span networks.",
          "<strong>Governance</strong> — protocol governance designed alongside the market mechanics.",
        ],
      },
      {
        num: "04",
        kicker: "Technical depth",
        title: "Notable systems.",
        bullets: [
          "<strong>Multi-issuer market modelling</strong> — markets normalised across issuers with different asset structures.",
          "<strong>Routing & RFQ</strong> — execution that combines onchain routing with request-for-quote flows.",
          "<strong>Cross-chain settlement</strong> — settlement paths across chains without collapsing into a single venue.",
          "<strong>Security controls</strong> — smart-contract security review and defensive controls treated as core protocol features.",
        ],
      },
      {
        num: "05",
        kicker: "Current status",
        title: "In development.",
        paragraphs: [
          "<strong>IN DEVELOPMENT.</strong> Setwise is being built toward a simplified public first release. This page carries the IN DEVELOPMENT label until the protocol is publicly live, and will be updated with launch details and links.",
        ],
      },
    ],
    links: [
      {
        key: "Live product",
        label: "Not yet launched",
        note: "Link added at public launch",
      },
      {
        key: "Source code",
        label: "Private during development",
        note: "Available on request",
      },
    ],
    demonstrates: [
      "RWA infrastructure",
      "Protocol design",
      "Routing",
      "Governance",
      "Smart-contract security",
    ],
    summary: "Tokenized-asset market infrastructure. In development.",
  },
];

export const supportingWork = [
  "Balancer",
  "Tezos",
  "Taiko",
  "Vana",
  "Revolv",
];
