export const SITE = {
  brand: "Ceno Studio",
  legalEntity: "Ceno Labs Ltd",
  domain: "https://ceno.studio",
  title: "Ceno Studio — Onchain finance, engineered end to end.",
  description:
    "Independent protocol studio helping teams design, build and launch onchain financial systems.",
} as const;

export const NAV = [
  { label: "Work", to: "/#work" },
  { label: "Ways to work", to: "/#ways" },
  { label: "About", to: "/#about" },
] as const;

export type WorkSlug = "symmetric" | "datadex" | "setwise";

export type WorkLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: WorkSlug;
  number: string;
  label: string;
  title: string;
  outcome: string;
  summary: string;
  tags: string;
  status?: "IN DEVELOPMENT";
  href: string;
  visual: "symmetric" | "datadex" | "setwise";
  context: string[];
  role: string[];
  built: string[];
  systems: string[];
  result: string[];
  links: WorkLink[];
  demonstrates: string;
};

export const WORK: CaseStudy[] = [
  {
    slug: "symmetric",
    number: "01",
    label: "Multi-chain DeFi",
    title: "Symmetric Finance",
    outcome: "Multi-chain Balancer-based protocol ownership, from vaults to incentives.",
    summary:
      "Built and operated a Balancer-based financial protocol across multiple networks, covering smart contracts, pools, governance, incentives, indexing, SDKs, frontends and deployments.",
    tags: "PROTOCOL ARCHITECTURE · AMMS · GOVERNANCE · INCENTIVES · MULTI-CHAIN SYSTEMS",
    href: "/work/symmetric",
    visual: "symmetric",
    context: [
      "Symmetric needed a production AMM that could travel across networks without becoming a thin fork of a single-chain exchange.",
      "The work had to cover the full protocol surface: vaults and pools, gauges and emissions, governance, indexing, SDKs, frontends and the operational path for deploying and recovering live systems.",
    ],
    role: [
      "Ceno designed and owned the protocol architecture, then built and operated the system across successive networks.",
      "Engagements also included grant-funded development for Balancer and Tezos, and custom liquidity-locking infrastructure for Taiko.",
    ],
    built: [
      "Balancer-based vault, weighted and stable pool infrastructure, and multi-asset pool configuration.",
      "Governance, gauges, emissions and rewards used to direct liquidity across deployments.",
      "Indexing, SDKs and frontends for swaps, pool management and protocol operations.",
      "Network-specific deployments, including an 80/20 TAIKO/ETH lock-up with Trailblazers integration on Taiko.",
    ],
    systems: [
      "Liquidity is aggregated in a vault so pool math and swap routing can be specialised without fragmenting user access.",
      "Custom weights, multi-asset pools and composable stable curves sit on the same operational backbone.",
      "Revolv extends the Symmetric architecture with yield-accelerated pools, bribe-marketplace work, lending integrations and additional token-economic mechanisms. It is supporting protocol work rather than a separate flagship product.",
      "Live migration and recovery work was treated as part of protocol ownership, not as an afterthought once contracts were deployed.",
    ],
    result: [
      "Symmetric is a live multi-chain DeFi protocol with public product, source and documentation surfaces.",
      "The same body of work produced reusable infrastructure for Balancer, Tezos and Taiko rather than a one-network product.",
    ],
    links: [
      { label: "Live product", href: "https://symmetric.finance" },
      { label: "Source code", href: "https://github.com/symmetricfinance" },
      { label: "Protocol docs", href: "https://finance-symmetric.gitbook.io/symmetric-v3" },
    ],
    demonstrates:
      "Multi-chain protocol ownership · AMM infrastructure · governance and incentives · grant-funded ecosystem engineering",
  },
  {
    slug: "datadex",
    number: "02",
    label: "Ecosystem infrastructure",
    title: "DataDex × Vana",
    outcome: "Exchange and market infrastructure delivered for the Vana ecosystem.",
    summary:
      "Built in collaboration with the Vana Foundation, DataDex provides trading, liquidity and market infrastructure for the Vana blockchain.",
    tags: "ECOSYSTEM INFRASTRUCTURE · DEX ENGINEERING · INDEXING · ANALYTICS · FULL-STACK DELIVERY",
    href: "/work/datadex",
    visual: "datadex",
    context: [
      "Vana needed purpose-built exchange infrastructure for its data-economy assets, including DLP tokens, rather than a generic DEX dropped onto the chain.",
      "The work had to cover trading, liquidity, routing, network integration, indexing and market analytics as one delivery.",
    ],
    role: [
      "Ceno built DataDex in collaboration with the Vana Foundation as ecosystem infrastructure, not as a standalone product experiment.",
      "The studio owned the full-stack path: interface, pool management, routing, subgraphs, analytics and network wiring.",
    ],
    built: [
      "DEX interface for swaps, pool creation and concentrated liquidity management on Vana.",
      "Local routing and network integration, including RPC, token lists and chain configuration.",
      "Subgraphs and an analytics dashboard for Vana market data.",
    ],
    systems: [
      "Concentrated liquidity lets providers allocate capital inside chosen price ranges instead of across a full curve.",
      "Routing, token lists and subgraphs are specific to Vana rather than inherited from a generic multi-chain template.",
      "Analytics sit beside the trading interface so ecosystem teams can inspect pools, volume and token markets without a separate vendor stack.",
    ],
    result: [
      "DataDex is live as Vana exchange infrastructure, with public trading, analytics and source surfaces.",
      "The case is an ecosystem delivery: a foundation-aligned market layer, not another generic DEX listing.",
    ],
    links: [
      { label: "Live product", href: "https://datadex.com" },
      { label: "Market analytics", href: "https://info.datadex.com/#/vana" },
      { label: "Source code", href: "https://github.com/VanaDataDex" },
      { label: "Vana Foundation", href: "https://www.vana.org" },
    ],
    demonstrates:
      "Ecosystem delivery · DEX engineering · indexing and analytics · foundation collaboration",
  },
  {
    slug: "setwise",
    number: "03",
    label: "Tokenized assets",
    title: "Setwise",
    outcome: "An original Ceno protocol for tokenized-asset markets, now in development.",
    summary:
      "An original Ceno protocol bringing together tokenized asset discovery, portfolio-style products, market data and multi-source execution.",
    tags: "RWA INFRASTRUCTURE · PROTOCOL DESIGN · ROUTING · GOVERNANCE · SMART-CONTRACT SECURITY",
    href: "/work/setwise",
    visual: "setwise",
    status: "IN DEVELOPMENT",
    context: [
      "Tokenized financial assets do not behave like a single AMM curve. Issuers, settlement rails, data sources and execution venues are fragmented.",
      "Setwise is being designed as original Ceno protocol infrastructure for that market, not as an adaptation of an existing DEX.",
    ],
    role: [
      "Ceno is designing and building Setwise as an original studio protocol: market modelling, routing, settlement, governance and security controls.",
      "The public surface stays marked in development until a simplified version is live.",
    ],
    built: [
      "Protocol design for tokenized-asset discovery and portfolio-style products.",
      "Multi-issuer market modelling, so assets from different issuers can be compared and routed in one system.",
      "Routing and RFQ execution across multiple liquidity sources.",
      "Cross-chain settlement paths and smart-contract security controls.",
    ],
    systems: [
      "Discovery, portfolio construction, market data and execution are specified as one protocol rather than a stack of disconnected tools.",
      "RFQ routing is intended to sit beside onchain execution so issuance and liquidity can be reached without forcing every asset into a single pool type.",
      "Security review, permissions and settlement constraints are part of the protocol design, not a launch-week add-on.",
    ],
    result: [
      "Setwise remains in development. The simplified version is not yet publicly live.",
      "This page records the protocol direction and the systems being engineered; it is not a live-product case study yet.",
    ],
    links: [],
    demonstrates:
      "Original protocol design · RWA market infrastructure · routing and RFQ · security-led delivery",
  },
];

export const WAYS = [
  {
    number: "01",
    title: "Protocol Design Sprint",
    price: "From $3,000",
    summary: "Turn a protocol idea into a buildable technical design.",
    detail: "Architecture, financial flows, risk analysis and an implementation roadmap.",
    featured: true,
  },
  {
    number: "02",
    title: "Protocol Build",
    price: "From $10,000",
    summary: "I design and build onchain financial protocols from specification through launch.",
    detail:
      "Smart contracts, testing, integrations, interfaces, internal security review, audit support and deployment.",
    featured: false,
  },
  {
    number: "03",
    title: "Upgrade & Migration",
    price: "Custom",
    summary:
      "Upgrade, restructure or migrate an existing protocol without treating the surrounding system as an afterthought.",
    detail: "Contracts, permissions, integrations, state, liquidity and deployment handled together.",
    featured: false,
  },
  {
    number: "04",
    title: "Fractional Protocol Lead",
    price: "From $6,000/month",
    summary: "Ongoing senior technical ownership without adding a full-time protocol lead.",
    detail:
      "Architecture, reviews, security, roadmap decisions, audits and releases alongside your existing team.",
    featured: false,
  },
] as const;

export const PROCESS = [
  {
    number: "01",
    title: "Design",
    body: "Architecture, mechanics and risk before implementation.",
    meta: "STRATEGY / ARCHITECTURE",
  },
  {
    number: "02",
    title: "Build",
    body: "Contracts, infrastructure and interface developed as one system.",
    meta: "ENGINEERING / INTEGRATION",
  },
  {
    number: "03",
    title: "Secure",
    body: "Testing, internal review and preparation for independent audit.",
    meta: "REVIEW / AUDIT PREP",
  },
  {
    number: "04",
    title: "Launch",
    body: "Deployment, validation and production handover.",
    meta: "DEPLOYMENT / HANDOVER",
  },
] as const;

export const SYSTEMS = [
  "DEXs",
  "AMMs",
  "Lending",
  "Stablecoins",
  "Governance",
  "Incentives",
  "Tokenized assets",
  "Protocol migrations",
];

export const STACK = [
  "Solidity",
  "Vyper",
  "Indexing",
  "SDKs",
  "Frontends",
  "Deployments",
];

export const ECOSYSTEMS = ["Balancer", "Tezos", "Taiko", "Vana"] as const;

export function workBySlug(slug: string): CaseStudy | undefined {
  return WORK.find((item) => item.slug === slug);
}
