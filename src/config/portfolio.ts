export const PORTFOLIO_CONFIG = {
  name: "Ameya Sagwekar",
  brandName: "AMΞYA",
  fullBrandName: "AMEYA SAGWEKAR",
  tagline: "B.Tech CSE Student & Software Developer",
  headline: "Building digital systems, one idea at a time.",
  subtext: "Computer Science & Engineering student focused on building scalable software architectures, high-performance web applications, and intuitive user interfaces.",
  
  // Status badge settings
  status: {
    label: "OPEN TO OPPORTUNITIES",
    active: true,
  },
  
  // Authentic Geographic Coordinates: Mumbai, India
  location: "MUMBAI, INDIA",
  coordinates: "19.0760° N, 72.8777° E",

  // Authentic Contact & Social URLs
  social: {
    github: "https://github.com/Ameya48",
    linkedin: "https://www.linkedin.com/in/ameya-sagwekar-80081832a/",
    email: "ameyasagwekar.work@gmail.com",
    mailto: "mailto:ameyasagwekar.work@gmail.com",
  },

  // Central Resume Configuration
  resume: {
    url: "/resume.pdf",
    filename: "Ameya_Sagwekar_Resume.pdf",
    summary: "B.Tech CSE Student & Full Stack Software Developer with expertise in React, Node.js, Express, MongoDB, C++ Data Structures & Algorithms, and Docker.",
    education: {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      year: "2023 - 2027 (Expected)",
      location: "Mumbai, India",
    },
  },

  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ],

  // Technical Journey Timeline for About section
  timeline: [
    {
      year: "2023",
      title: "Core Foundations & Algorithmic Problem Solving",
      description: "Mastered Data Structures & Algorithms in C++. Built strong logic foundations and computer science fundamentals."
    },
    {
      year: "2024",
      title: "Full-Stack Web Systems & APIs",
      description: "Expanded into modern JavaScript/TypeScript, React, Node.js, and Express to build production-ready web apps and RESTful services."
    },
    {
      year: "2025 - PRESENT",
      title: "Cloud Infrastructure, Databases & Scalable Engineering",
      description: "Working with Docker, AWS, PostgreSQL, MongoDB, and CI/CD pipelines to engineer end-to-end resilient software solutions."
    }
  ],

  // Skills Ecosystem Data
  skillCategories: [
    {
      id: "frontend",
      title: "FRONTEND",
      description: "Crafting fluid, high-performance visual interfaces.",
      skills: [
        { name: "React", description: "Component-driven UI, state management, and custom hooks architecture." },
        { name: "JavaScript", description: "ES6+ async programming, DOM performance, and closure patterns." },
        { name: "HTML5", description: "Semantic markup, accessibility (a11y), and document structure." },
        { name: "CSS3 / Tailwind", description: "Custom design systems, responsive layouts, and keyframe animations." }
      ]
    },
    {
      id: "backend",
      title: "BACKEND",
      description: "Architecting async web servers and modular APIs.",
      skills: [
        { name: "Node.js", description: "Non-blocking event loop execution and server-side JavaScript execution." },
        { name: "Express.js", description: "RESTful API routes, middleware stacks, and authentication flows." }
      ]
    },
    {
      id: "databases",
      title: "DATABASES",
      description: "Managing structured and document-oriented storage.",
      skills: [
        { name: "MongoDB", description: "NoSQL document schemas, aggregation pipelines, and indexing." },
        { name: "PostgreSQL", description: "Relational data modeling, SQL queries, and transaction integrity." },
        { name: "Firebase", description: "Real-time client state sync, authentication, and cloud functions." },
        { name: "Firestore", description: "Flexible, scalable NoSQL cloud database for client-heavy apps." }
      ]
    },
    {
      id: "tools",
      title: "DEVELOPMENT / TOOLS",
      description: "Version control and containerized environments.",
      skills: [
        { name: "Git", description: "Branching strategies, commit history management, and rebase workflows." },
        { name: "GitHub", description: "Code review, pull requests, automated actions, and open-source hosting." },
        { name: "Docker", description: "Containerizing applications for consistent cross-environment runtime." },
        { name: "REST APIs", description: "Designing intuitive HTTP endpoints, JSON schemas, and status handling." }
      ]
    },
    {
      id: "cloud",
      title: "CLOUD / DEVOPS",
      description: "Deploying and orchestrating cloud infra.",
      skills: [
        { name: "AWS", description: "EC2 instances, S3 bucket storage, and IAM security policies." },
        { name: "Kubernetes", description: "Container orchestration, pod scaling, and deployment manifests." },
        { name: "Jenkins", description: "Automated continuous integration and build pipelines." }
      ]
    },
    {
      id: "cs",
      title: "LANGUAGES / CS",
      description: "Core algorithms and low-level execution logic.",
      skills: [
        { name: "C++", description: "Object-oriented programming, memory management, and competitive code execution." },
        { name: "Data Structures & Algorithms", description: "Trees, graphs, dynamic programming, and optimal space/time complexity." }
      ]
    }
  ],

  // Flagship Featured Project Case Study
  featuredProject: {
    id: "budget-optimization-engine",
    title: "Smart Budget Optimization Engine",
    subtitle: "Algorithmic Income Allocation & Expense Minimization System",
    problemStatement: "Individuals struggle to balance fixed monthly expenses with variable spending, leading to inefficient capital allocation and missed investment opportunities.",
    solution: "An intelligent web application that processes user income and categorized expenses, applies Knapsack and Greedy optimization algorithms, and generates optimal spending allocations alongside investment recommendations.",
    technologies: ["React", "JavaScript", "MongoDB", "Firebase", "Node.js", "Express.js"],
    algorithms: ["Greedy Optimization", "0/1 Knapsack Problem", "Priority Queues", "Dynamic Programming"],
    keyFeatures: [
      "Real-time expense ingestion & algorithmic budget partitioning",
      "Priority Queue evaluation for essential vs. discretionary spending",
      "Greedy allocation for maximizing surplus for high-yield investments",
      "NoSQL persistence with MongoDB & real-time client state with Firebase"
    ],
    codeSnippet: `// 0/1 Knapsack Optimization for Essential Budget Allocation
function optimizeBudget(capacity, expenses) {
  const n = expenses.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { cost, utility } = expenses[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (cost <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - cost] + utility);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}`,
    githubUrl: "https://github.com/Ameya48",
    demoUrl: null,
    caseStudyDetails: {
      problem: "Traditional budgeting spreadsheets require manual calculations and fail to recommend mathematically optimal spending distributions. Users frequently overspend in non-essential categories before allocating funds toward savings or investments.",
      approach: "Formulated budget optimization as a constrained optimization problem. Expenses are categorized by priority and flexibility. We implemented a hybrid Greedy and Knapsack algorithm to systematically satisfy fixed commitments, prune unnecessary discretionary items, and direct surplus into tiered investment buckets.",
      implementation: "Built a responsive React frontend paired with a modular Express/Node.js backend. MongoDB is utilized for user account persistence, while Firebase handles real-time updates. The optimization core uses custom JavaScript implementations of Priority Queues and Dynamic Programming tables.",
      challenges: "Handling edge cases where non-discretionary expenses exceed total monthly income without crashing the optimization loop, and ensuring algorithmic calculations complete in under 50ms on the client side.",
      outcome: "Successfully engineered a fast, deterministic budgeting system capable of calculating optimal financial allocations in under 30ms with zero manual spreadsheet formulas."
    }
  },

  // Curated Projects List
  curatedProjects: [
    {
      id: "ayurvedic-supply-chain",
      name: "Ayurvedic Herbal Supply Chain",
      category: "BLOCKCHAIN",
      description: "A decentralized tracking system for authenticating botanical ingredient origin, harvest verification, and supply chain transparency.",
      technologies: ["Solidity", "React", "Ethereum", "Node.js", "Web3.js"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "mern-loyalty-rewards",
      name: "MERN Loyalty Rewards Program",
      category: "FULL STACK",
      description: "Full-stack customer engagement platform featuring real-time tier calculation, digital reward points redemption, and admin telemetry.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "itm-development-tracker",
      name: "ITM Personal Development Tracker",
      category: "WEB",
      description: "Student goal tracking system for monitoring academic milestones, skill progression logs, and weekly project deliverables.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "emotirate",
      name: "EmotiRate Sentiment Analyzer",
      category: "FULL STACK",
      description: "Feedback sentiment rating platform analyzing customer reviews and text input to output real-time emotional satisfaction scores.",
      technologies: ["Node.js", "Express", "React", "REST APIs", "Tailwind"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "kuku-fm-clone",
      name: "Kuku FM Audio Platform",
      category: "WEB",
      description: "Audio streaming web application inspired by Kuku FM, featuring custom media player controls, playlist management, and clean dark UI.",
      technologies: ["React", "JavaScript", "HTML5 Audio", "CSS3"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "desi-tadka-restaurant",
      name: "Desi Tadka Restaurant",
      category: "WEB",
      description: "Modern, responsive restaurant menu showcase and table reservation system with dynamic filterable cuisine categories.",
      technologies: ["React", "JavaScript", "CSS Modules", "Responsive Design"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "wanderlust-explorer",
      name: "Wanderlust Travel Explorer",
      category: "FULL STACK",
      description: "Travel destination discovery web app featuring interactive location previews, review management, and user bookmarking.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS / React"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    }
  ],

  // Achievements & Milestones Data
  achievements: [
    {
      id: "hackathon-2026",
      category: "HACKATHONS",
      year: "2026",
      title: "Student Portfolio Hackathon 2026 Participant",
      organization: "Hackathon Organizer",
      description: "Designed and built an Awwwards-level developer portfolio showcasing full-stack capabilities, case studies, and engineering philosophy.",
      credentialUrl: null,
      isPlaceholder: false
    },
    {
      id: "academic-degree",
      category: "ACADEMIC",
      year: "2023 - PRESENT",
      title: "B.Tech in Computer Science & Engineering",
      organization: "University / Institution",
      description: "Pursuing Bachelor of Technology degree in Computer Science, focusing on Software Engineering, Core Algorithms, Database Management, and Web Technologies.",
      credentialUrl: null,
      isPlaceholder: false
    },
    {
      id: "cert-placeholder-1",
      category: "CERTIFICATIONS",
      year: "2025",
      title: "Full-Stack Development & Cloud Specialization",
      organization: "Professional Certification Track",
      description: "Verified coursework and hands-on capstone projects in full-stack architecture, REST APIs, and database engineering.",
      credentialUrl: null,
      isPlaceholder: false
    },
    {
      id: "workshop-1",
      category: "WORKSHOPS",
      year: "2024",
      title: "Full-Stack & Systems Architecture Seminars",
      organization: "Tech Workshops",
      description: "Participated in specialized technical sessions focusing on REST API architecture, React state management, and modern deployment practices.",
      credentialUrl: null,
      isPlaceholder: false
    }
  ],

  // Currently Exploring Focus
  currentlyExploring: [
    {
      title: "Full Stack Architecture",
      description: "Designing modular REST microservices and async data pipelines using Node.js & Express."
    },
    {
      title: "Cloud & AWS Infrastructure",
      description: "Exploring EC2 instance setup, S3 bucket storage management, and IAM cloud security policies."
    },
    {
      title: "DevOps & Containerization",
      description: "Learning Docker container builds and Kubernetes pod orchestration for consistent runtime environments."
    },
    {
      title: "Advanced Data Structures & Algorithms",
      description: "Consistently practicing competitive problem solving in C++ focusing on Graphs, Trees, and Dynamic Programming."
    },
    {
      title: "Modern Web Performance",
      description: "Refining high-speed rendering techniques with React 19, Tailwind CSS v4, and minimal client payload bundles."
    }
  ]
}
