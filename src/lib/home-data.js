import {
  Code2,
  Smartphone,
  Palette,
  Server,
  Cloud,
  Compass,
  ShoppingBag,
  Brain,
  Wrench,
  TrendingUp,
  Globe,
  Cpu,
} from "lucide-react";

// ─── Hero taglines cycling ─────────────────────────────────────────────────
export const HERO_TAGS = [
  "AI-Powered Solutions",
  "Web & Mobile Apps",
  "Cloud & DevOps",
  "Digital Transformation",
  "UI / UX Design",
];

// ─── Services (homepage teaser — 3 cards) ─────────────────────────────────
export const SERVICE_LIST = [
  {
    icon: Brain,
    t: "Artificial Intelligence",
    d: "LLM integrations, AI agents, RAG pipelines, chatbots, computer vision — we make AI practical for real products.",
    tags: ["OpenAI", "LangChain", "RAG", "Agents"],
  },
  {
    icon: Code2,
    t: "Web Development",
    d: "Next.js, React, TypeScript — production apps, SaaS dashboards, CRM/ERP systems and PWAs that scale.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Cloud,
    t: "Cloud & DevOps",
    d: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD pipelines — secure, scalable, zero-downtime deployments.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
];

// ─── All Services (services page) ──────────────────────────────────────────
export const ALL_SERVICES = [
  {
    n: "01",
    id: "ai",
    icon: Brain,
    t: "Artificial Intelligence",
    tagline: "From prototype to production AI",
    d: "We turn cutting-edge AI research into practical, revenue-generating product features — chatbots, agents, data pipelines and more.",
    items: [
      "AI Chatbots & Conversational Agents",
      "OpenAI / LLM Integration & Fine-tuning",
      "RAG Systems & Knowledge Bases",
      "Generative AI & Image Generation",
      "Workflow Automation with AI",
      "Computer Vision & OCR",
      "Recommendation Engines",
      "AI Consulting & Roadmapping",
    ],
    color: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
    glow: "rgba(139,92,246,0.15)",
    accent: "text-violet-400",
  },
  {
    n: "02",
    id: "web",
    icon: Code2,
    t: "Web Development",
    tagline: "Production-grade web applications",
    d: "We build corporate sites, SaaS platforms, admin dashboards, CRM/ERP systems and custom web apps with modern stacks.",
    items: [
      "Corporate Websites & Landing Pages",
      "SaaS Platforms & Admin Dashboards",
      "CRM / ERP Systems",
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Storefronts",
      "CMS Integrations (Sanity, Contentful)",
      "API-first Headless Architecture",
    ],
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/40",
    glow: "rgba(59,130,246,0.15)",
    accent: "text-blue-400",
  },
  {
    n: "03",
    id: "mobile",
    icon: Smartphone,
    t: "Mobile App Development",
    tagline: "iOS, Android & cross-platform",
    d: "Cross-platform React Native and Flutter apps with native modules where performance matters — shipped to both stores.",
    items: [
      "React Native (iOS & Android)",
      "Flutter Cross-Platform Apps",
      "Native iOS (Swift)",
      "Native Android (Kotlin)",
      "Offline-first Data Sync",
      "Push Notifications & Deep Links",
      "App Store Optimization (ASO)",
      "Mobile UI / UX Design",
    ],
    color: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
    glow: "rgba(16,185,129,0.15)",
    accent: "text-emerald-400",
  },
  {
    n: "04",
    id: "shopify",
    icon: ShoppingBag,
    t: "Shopify Development",
    tagline: "Custom Shopify stores that convert",
    d: "Bespoke Shopify themes, store setup, app integrations, SEO, payment gateways, migration and Shopify Plus solutions.",
    items: [
      "Custom Theme Development",
      "Store Setup & Configuration",
      "App Integration & Development",
      "Performance & Speed Optimization",
      "SEO & Conversion Rate Optimization",
      "Payment Gateway Integration",
      "Migration from WooCommerce / Magento",
      "Shopify Plus Enterprise Solutions",
    ],
    color: "from-green-500/20 to-lime-500/10",
    border: "hover:border-green-500/40",
    glow: "rgba(34,197,94,0.15)",
    accent: "text-green-400",
  },
  {
    n: "05",
    id: "cloud",
    icon: Cloud,
    t: "Cloud & DevOps",
    tagline: "Infrastructure as competitive advantage",
    d: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD, GitHub Actions, Vercel, Netlify — scalable, secure infrastructure.",
    items: [
      "AWS / Azure / Google Cloud Setup",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines & GitHub Actions",
      "VPS Management & Linux Administration",
      "SSL Setup & Domain Management",
      "Cloud Migration & Cost Optimization",
      "Monitoring, Alerting & Observability",
      "Secure Application Deployment",
    ],
    color: "from-sky-500/20 to-blue-500/10",
    border: "hover:border-sky-500/40",
    glow: "rgba(14,165,233,0.15)",
    accent: "text-sky-400",
  },
  {
    n: "06",
    id: "design",
    icon: Palette,
    t: "UI / UX Design",
    tagline: "Interfaces that users love",
    d: "Product design systems, motion design, user research and rapid prototyping — every pixel earns its place.",
    items: [
      "Product Design Systems",
      "Wireframing & Prototyping",
      "User Research & Usability Testing",
      "Motion & Interaction Design",
      "Brand Identity & Visual Design",
      "Design Tokens & Component Libraries",
      "Accessibility (WCAG 2.1 AA)",
      "Figma Design Files",
    ],
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/40",
    glow: "rgba(236,72,153,0.15)",
    accent: "text-pink-400",
  },
  {
    n: "07",
    id: "backend",
    icon: Server,
    t: "Backend & API Development",
    tagline: "Scalable backends, clean APIs",
    d: "Node.js, Express, REST & GraphQL APIs, database design, auth, RBAC, billing and third-party integrations.",
    items: [
      "REST & GraphQL API Design",
      "Microservices Architecture",
      "Database Design & Migrations",
      "Authentication, RBAC & Billing",
      "Real-time WebSocket Systems",
      "Third-party API Integrations",
      "API Documentation & Testing",
      "Performance Tuning & Caching",
    ],
    color: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-500/40",
    glow: "rgba(249,115,22,0.15)",
    accent: "text-orange-400",
  },
  {
    n: "08",
    id: "consulting",
    icon: TrendingUp,
    t: "Business & IT Consulting",
    tagline: "Strategy meets execution",
    d: "Technology consulting, digital strategy, startup and product strategy, market research and transformation roadmaps.",
    items: [
      "Technology & IT Consulting",
      "Digital Transformation Roadmaps",
      "Startup & Product Strategy",
      "Software Architecture Consulting",
      "Market Research & Business Growth",
      "Process Optimization & Automation",
      "Technical Due Diligence",
      "Team Building & Hiring Guidance",
    ],
    color: "from-cyan-500/20 to-teal-500/10",
    border: "hover:border-cyan-500/40",
    glow: "rgba(6,182,212,0.15)",
    accent: "text-cyan-400",
  },
  {
    n: "09",
    id: "maintenance",
    icon: Wrench,
    t: "Maintenance & Support",
    tagline: "We stay until it performs",
    d: "Ongoing maintenance, bug fixes, feature updates, performance monitoring, security patches and SLA-based support.",
    items: [
      "Ongoing Bug Fixes & Updates",
      "Performance Monitoring & Alerts",
      "Security Patches & Audits",
      "Feature Enhancements",
      "SLA-based Support Plans",
      "Code Reviews & Refactoring",
      "Documentation Updates",
      "24 / 7 Critical Incident Response",
    ],
    color: "from-indigo-500/20 to-violet-500/10",
    border: "hover:border-indigo-500/40",
    glow: "rgba(99,102,241,0.15)",
    accent: "text-indigo-400",
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────
export const STATS = [
  { n: 50,  s: "+", l: "Projects shipped",    d: "Across web, mobile & cloud" },
  { n: 30,  s: "+", l: "Happy clients",       d: "From startups to enterprises" },
  { n: 8,   s: "+", l: "Countries served",    d: "Remote-first, global reach" },
  { n: 99,  s: "%", l: "On-time delivery",    d: "We ship on the date we promise" },
];

// ─── Why Choose Instech Sol ─────────────────────────────────────────────────
export const REASONS = [
  { t: "Experienced Engineers",        d: "Mid-to-senior engineers on every engagement. No juniors on your dime." },
  { t: "AI-Driven Innovation",         d: "We integrate AI capabilities into every product we build, where it makes sense." },
  { t: "Agile Development",            d: "Two-week sprints, daily commits, weekly demos — constant forward momentum." },
  { t: "Scalable Architecture",        d: "Systems designed to grow from MVP to millions of users without rewrites." },
  { t: "Transparent Communication",    d: "Weekly demos, Loom updates, shared Notion. No status-report theatre." },
  { t: "Enterprise Security",          d: "OWASP-compliant code, secure auth, data encryption and regular audits." },
  { t: "Dedicated Support",            d: "Three months of free bug fixes after go-live, then flexible retainers." },
  { t: "On-time Project Delivery",     d: "Fixed-price sprints, clear scopes, no surprise invoices — ever." },
];

// ─── Process ────────────────────────────────────────────────────────────────
export const PROCESS = [
  { n: "01", t: "Discovery",            d: "We dig into your goals, constraints and users before writing a single line of code.", icon: Compass },
  { n: "02", t: "Requirement Analysis", d: "Detailed specs, user stories, acceptance criteria — aligned before design begins.", icon: Globe },
  { n: "03", t: "UI / UX Design",       d: "Interactive Figma prototypes validated with real users. You approve before we build.", icon: Palette },
  { n: "04", t: "Development",          d: "Type-safe, tested code shipped in two-week sprints with continuous demos.", icon: Code2 },
  { n: "05", t: "QA & Testing",         d: "Automated E2E tests, manual QA passes, performance profiling before every release.", icon: Cpu },
  { n: "06", t: "Deployment",           d: "Zero-downtime releases, CI/CD pipelines, observability wired in from day one.", icon: Cloud },
];

// ─── Testimonials ───────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    q: "Instech Sol delivered our entire platform in 8 weeks — polished UI, solid API, live on AWS. Exactly what a startup needs.",
    name: "James R.",
    role: "CEO, Northwind Cloud",
    tag: "Cloud / DevOps",
    avatar: "J",
  },
  {
    q: "Best design system we've ever had. The team actually pushed back on our ideas when they had better ones. That's rare.",
    name: "Leila M.",
    role: "CPO, Studio Vellum",
    tag: "UI / UX",
    avatar: "L",
  },
  {
    q: "4.9 stars on both stores at launch, zero crash reports in the first month. I've never seen a dev team so obsessed with quality.",
    name: "Tom B.",
    role: "Founder, Kite Mobile",
    tag: "Mobile Apps",
    avatar: "T",
  },
  {
    q: "The AI chatbot they built for us reduced our support tickets by 60% in the first month. Incredible ROI.",
    name: "Priya S.",
    role: "Head of Product, FinanceFlow",
    tag: "AI Solutions",
    avatar: "P",
  },
  {
    q: "Their Shopify Plus migration was seamless. Revenue increased 35% after the new storefront went live.",
    name: "Ahmed K.",
    role: "Founder, RetailBrand",
    tag: "Shopify",
    avatar: "A",
  },
  {
    q: "From architecture review to production deployment in 12 weeks. Their DevOps work saved us $40K/month in infra costs.",
    name: "Daniel R.",
    role: "CTO, Ledger OS",
    tag: "DevOps",
    avatar: "D",
  },
];

// ─── Industries ─────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "🏥", t: "Healthcare",         d: "Telemedicine, EHR systems, patient portals" },
  { icon: "🎓", t: "Education",          d: "LMS platforms, e-learning, EdTech apps" },
  { icon: "🛍️", t: "E-commerce",        d: "Marketplaces, Shopify, custom storefronts" },
  { icon: "💰", t: "Finance & FinTech",  d: "Banking, payments, trading platforms" },
  { icon: "🏠", t: "Real Estate",        d: "Property portals, CRM, virtual tours" },
  { icon: "🚚", t: "Logistics",          d: "Fleet management, tracking, route optimization" },
  { icon: "🏭", t: "Manufacturing",      d: "ERP, inventory, production monitoring" },
  { icon: "✈️", t: "Travel & Hospitality", d: "Booking engines, hotel apps, travel portals" },
  { icon: "🏪", t: "Retail",             d: "POS systems, loyalty apps, inventory" },
  { icon: "🚗", t: "Automotive",         d: "Dealer portals, fleet apps, diagnostics" },
  { icon: "🍔", t: "Food & Beverage",    d: "Online ordering, POS, delivery platforms" },
  { icon: "🏛️", t: "Government & NGO",  d: "Civic portals, grant management, reporting" },
];

// ─── AI Capabilities ────────────────────────────────────────────────────────
export const AI_CAPABILITIES = [
  { icon: "🤖", t: "AI Chatbots",            d: "24/7 intelligent chatbots powered by GPT-4 and Claude" },
  { icon: "🧠", t: "AI Agents",              d: "Autonomous agents that execute multi-step tasks end-to-end" },
  { icon: "✨", t: "Generative AI",          d: "Text, image and code generation integrated into your product" },
  { icon: "🔗", t: "LLM Integration",        d: "OpenAI, Anthropic, Gemini — we integrate any model seamlessly" },
  { icon: "🔄", t: "Workflow Automation",    d: "AI-powered automation that eliminates repetitive manual work" },
  { icon: "👁️", t: "Computer Vision",        d: "Object detection, face recognition, defect detection at scale" },
  { icon: "📄", t: "OCR & Document AI",     d: "Extract structured data from invoices, IDs and PDFs accurately" },
  { icon: "📚", t: "RAG Systems",            d: "Retrieval-augmented generation over your private knowledge base" },
  { icon: "⭐", t: "Recommendation Engines", d: "Personalised recommendations that drive engagement and revenue" },
  { icon: "💡", t: "AI Consulting",          d: "Strategy and roadmapping to identify the highest-ROI AI opportunities" },
  { icon: "🔍", t: "Semantic Search",        d: "Vector-based search that understands meaning, not just keywords" },
  { icon: "📊", t: "Predictive Analytics",   d: "Forecast churn, demand and revenue with ML models" },
];

// ─── Tech Stack (categorised) ───────────────────────────────────────────────
export const TECH_CATEGORIES = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "GraphQL", "tRPC", "Prisma", "Redis"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Flutter", "Expo", "Swift", "Kotlin"],
  },
  {
    label: "AI / ML",
    items: ["OpenAI", "LangChain", "Pinecone", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "MySQL"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure", "GCP", "Vercel", "Netlify"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Argo CD"],
  },
];

// ─── Marquee rows (existing — kept for TechStack component) ────────────────
export const TECH_ROW1 = [
  "Next.js", "React", "TypeScript", "React Native", "Tailwind CSS",
  "Framer Motion", "Figma", "tRPC", "Stripe", "OpenAI",
];
export const TECH_ROW2 = [
  "Node.js", "PostgreSQL", "GraphQL", "AWS", "Vercel",
  "Docker", "Terraform", "Prisma", "Redis", "LangChain",
];
