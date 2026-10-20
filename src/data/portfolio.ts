export type Project = {
  index: string;
  title: string;
  category: string;
  summary: string;
  approach: string;
  stack: string[];
  repo?: string;
  demo?: string;
  status?: string;
  visual: "risk" | "ocean" | "agent" | "credit";
  accent: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "MatRisk AI",
    category: "Scientific & financial intelligence",
    summary: "A seven-page Streamlit analytics prototype exploring how materials, commodity, infrastructure and sustainability records can sit in one research workspace.",
    approach: "Source-data exploration, descriptive analytics, saved experimental model evaluations and heuristic candidate screening. The repository documents evidence limits alongside each area.",
    stack: ["Python", "Pandas", "NumPy", "Streamlit", "scikit-learn"],
    repo: "https://github.com/AmeyPandit36/MatRisk-AI",
    demo: "https://matrisk-ai-rrwtauduv5p8qqtpljhe5e.streamlit.app/",
    status: "Prototype · outputs are not validated operational forecasts",
    visual: "risk",
    accent: "red",
  },
  {
    index: "02",
    title: "FloatChat",
    category: "Conversational ocean data",
    summary: "Resume-described work processing NOAA OISST and ARGO data, applying quality flags and designing a natural-language-to-SQL workflow over PostGIS.",
    approach: "The résumé reports data processing and 38 passing unit tests. The public repository is currently empty, so the implementation and reported test count could not be independently inspected.",
    stack: ["Python", "FastAPI", "PostgreSQL / PostGIS", "Pandas", "Xarray"],
    repo: "https://github.com/AmeyPandit36/FloatChat",
    status: "Résumé-described · public repository currently empty",
    visual: "ocean",
    accent: "mint",
  },
  {
    index: "03",
    title: "Business Intelligence Agent",
    category: "Automated business intelligence",
    summary: "A retail analytics application with a React interface and FastAPI backend, described in its repository as processing simulated operations data through agent workflows.",
    approach: "The README documents cleaning, validation, analytics, executive reporting and a critic agent within a LangGraph pipeline, with n8n automation and Supabase-backed storage.",
    stack: ["FastAPI", "LangGraph", "Gemini", "React", "PostgreSQL", "n8n"],
    repo: "https://github.com/AmeyPandit36/business-ai-agent",
    demo: "https://business-ai-agent.vercel.app",
    status: "Repository describes deployment; retail inputs are simulated",
    visual: "agent",
    accent: "lime",
  },
  {
    index: "04",
    title: "Auto Loan ABS Dashboard",
    category: "Credit risk & analytics",
    summary: "A Power BI dashboard described in the résumé for a project portfolio of 500 loans, with exposure, expected credit loss and vintage analysis.",
    approach: "The résumé describes an IFRS 9 ECL framework across stages, 15 cohorts, 375 vintage-month records and a delinquency transition matrix based on 6,000 DPD snapshots.",
    stack: ["Power BI", "DAX", "Power Query", "Cohort analysis"],
    status: "Résumé-described · figures are project data, not actual lending performance",
    visual: "credit",
    accent: "sand",
  },
];

export const technologies = [
  { name: "Tailwind CSS", mark: "≋", note: "Utility-first styling for this portfolio.", state: "Used here" },
  { name: "SCSS", mark: "S", note: "A stylesheet language in the creative toolkit landscape.", state: "Exploring" },
  { name: "Next.js", mark: "N", note: "App Router and server rendering for this project.", state: "Used here" },
  { name: "GSAP", mark: "G", note: "ScrollTrigger adds selected story-driven reveals.", state: "Used here" },
  { name: "Framer Motion", mark: "M", note: "Now Motion for React; used for component transitions here.", state: "Used here" },
  { name: "Three.js", mark: "◉", note: "A quiet spatial data field, with a static fallback.", state: "Used here" },
  { name: "GLSL Shaders", mark: "✳", note: "A graphics programming concept to explore.", state: "Learning" },
  { name: "Locomotive Scroll", mark: "L", note: "Scroll tooling considered during exploration.", state: "Exploring" },
  { name: "Lenis", mark: "≋", note: "Smooth-scroll experiment, not enabled by default.", state: "Exploring" },
] as const;

export const skillGroups = [
  { title: "Data & analysis", items: ["Python", "SQL", "Pandas", "NumPy", "Exploratory analysis", "Data quality"] },
  { title: "BI & visualization", items: ["Power BI", "DAX", "Power Query", "Excel", "Plotly", "Streamlit"] },
  { title: "AI & automation", items: ["Generative AI", "LLMs", "LangGraph", "n8n", "scikit-learn"] },
  { title: "Applications & tools", items: ["FastAPI", "React", "PostgreSQL", "PostGIS", "MySQL", "Git / GitHub"] },
];

export const experience = [
  { date: "JUN 2026 — PRESENT", title: "Data Science Intern", org: "The Developers Arena · Remote", detail: "Data extraction, cleaning and exploratory analysis across project datasets." },
  { date: "MAY 2026 — JUN 2026", title: "GenAI & Agentic AI Intern", org: "Lenovo LEAP · Remote", detail: "Developed a business intelligence solution and data workflows using Python, PostgreSQL, Pandas, n8n and LLMs." },
];

export const education = {
  date: "EXPECTED JUN 2027",
  title: "B.E. Information Technology",
  org: "Finolex Academy of Management and Technology · University of Mumbai",
  detail: "Resume lists a 7.5 CGPA. Coursework includes DBMS, SQL, statistics, data analytics and machine learning.",
};
