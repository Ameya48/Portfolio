export const PORTFOLIO_CONFIG = {
  name: "Ameya Sagwekar",
  brandName: "AMΞYA",
  fullBrandName: "AMEYA SAGWEKAR",
  tagline: "B.Tech Computer Science Student & Software Developer",
  headline: "Building digital systems, one idea at a time.",
  subtext: "Computer Science & Engineering student at ITM Skills University focused on building full-stack web applications, scalable software architectures, and decentralized solutions.",
  
  // Status badge settings
  status: {
    label: "OPEN TO OPPORTUNITIES",
    active: true,
  },
  
  // Authentic Location
  location: "MUMBAI, MAHARASHTRA",
  coordinates: "19.0760° N, 72.8777° E",

  // Authentic Contact & Social URLs
  social: {
    github: "https://github.com/Ameya48",
    linkedin: "https://www.linkedin.com/in/ameya-sagwekar-80081832a/",
    email: "ameyasagwekar@gmail.com",
    mailto: "mailto:ameyasagwekar@gmail.com",
  },

  // Central Resume Configuration
  resume: {
    url: "/resume.pdf",
    filename: "Ameya_Sagwekar_Resume.pdf",
    summary: "B.Tech CSE Student at ITM Skills University with frontend and operations internship experience. Proficient in React.js, Node.js, Express.js, MongoDB, C++ Data Structures & Algorithms, and Blockchain technologies.",
    education: {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "ITM Skills University",
      year: "2024 – 2028",
      location: "Navi Mumbai, Maharashtra",
    },
  },

  // Work Experience
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Hari Om Thalassic Pvt. Ltd.",
      location: "Mumbai, Maharashtra",
      period: "Jul. 2025 – Oct. 2025",
      highlights: [
        "Worked on frontend development tasks and contributed to software development activities across frontend and backend technologies.",
        "Collaborated with supervisors and team members to implement development tasks and support project requirements.",
        "Applied problem-solving and development skills while working within deadlines and contributing to project objectives."
      ]
    },
    {
      role: "Operations Intern",
      company: "LetsUpgrade Edtech Pvt. Ltd.",
      location: "Navi Mumbai, Maharashtra",
      period: "Jan. 2026 – Apr. 2026",
      highlights: [
        "Worked as an Operations Intern, supporting day-to-day operational activities and coordination within the organization.",
        "Collaborated with team members and contributed to assigned tasks while maintaining deadlines and organizational requirements.",
        "Gained practical exposure to professional workflows, communication, coordination, and workplace operations."
      ]
    }
  ],

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
      year: "2024 – 2028",
      title: "B.Tech in Computer Science & Engineering",
      description: "Enrolled at ITM Skills University, Navi Mumbai. Focusing on Data Structures & Algorithms, Full-Stack Architecture, DBMS, and Distributed Systems."
    },
    {
      year: "JUL 2025 – OCT 2025",
      title: "Frontend Developer Intern @ Hari Om Thalassic Pvt. Ltd.",
      description: "Engineered frontend web components, integrated REST APIs, and collaborated across frontend and backend tech stacks within project deadlines."
    },
    {
      year: "JAN 2026 – APR 2026",
      title: "Operations Intern @ LetsUpgrade Edtech Pvt. Ltd.",
      description: "Coordinated operational workflows, cross-department communication, task tracking, and professional ed-tech operations."
    }
  ],

  // Skills Ecosystem Data (matching exact Resume categories)
  skillCategories: [
    {
      id: "languages",
      title: "LANGUAGES",
      description: "Core programming languages for application development and systems logic.",
      skills: [
        { name: "C++", description: "Object-oriented programming, memory management, and competitive data structures." },
        { name: "JavaScript", description: "ES6+ async/await, closures, DOM manipulation, and functional patterns." },
        { name: "Python", description: "Scripting, algorithm prototyping, and backend data processing." },
        { name: "SQL", description: "Relational database queries, schema design, joins, and data normalization." },
        { name: "HTML", description: "Semantic document structure, accessibility standards, and web fundamentals." },
        { name: "CSS", description: "Modern styling, flexbox/grid layouts, dynamic animations, and responsive design." }
      ]
    },
    {
      id: "frontend",
      title: "FRONTEND",
      description: "Crafting fluid, high-performance visual interfaces.",
      skills: [
        { name: "React.js", description: "Component architecture, hooks state management, and SPA client rendering." },
        { name: "HTML5", description: "Semantic markup and modern browser API integrations." },
        { name: "CSS3", description: "Custom layouts, keyframe animations, and design system tokens." },
        { name: "JavaScript", description: "Client-side interactive logic and async fetch API communications." }
      ]
    },
    {
      id: "backend",
      title: "BACKEND",
      description: "Architecting web servers and RESTful microservices.",
      skills: [
        { name: "Node.js", description: "Non-blocking event loop execution and server-side JavaScript runtime." },
        { name: "Express.js", description: "RESTful route handlers, middleware pipelines, and API security." },
        { name: "REST APIs", description: "Designing HTTP endpoints, JSON response payloads, and status codes." }
      ]
    },
    {
      id: "databases",
      title: "DATABASES",
      description: "Structured and NoSQL database management systems.",
      skills: [
        { name: "MongoDB", description: "NoSQL document collections, aggregation framework, and Mongoose ORM." },
        { name: "Firebase", description: "Real-time client synchronization, authentication, and cloud hosting." },
        { name: "Firestore", description: "Scalable cloud NoSQL database for client-heavy real-time apps." },
        { name: "PostgreSQL", description: "Relational tables, foreign key constraints, and SQL data integrity." }
      ]
    },
    {
      id: "tools",
      title: "TOOLS & TECHNOLOGIES",
      description: "Developer tooling, cloud, and containerized runtime.",
      skills: [
        { name: "Git", description: "Version control branching, commit tagging, and merge strategies." },
        { name: "GitHub", description: "Source code repository hosting, collaboration, and pull requests." },
        { name: "Docker", description: "Containerizing applications for consistent execution environments." },
        { name: "AWS", description: "Cloud infrastructure deployment, S3 storage, and EC2 computing." },
        { name: "MongoDB Compass", description: "GUI tool for database schema inspection and document querying." }
      ]
    },
    {
      id: "concepts",
      title: "CONCEPTS",
      description: "Computer science theory and software engineering principles.",
      skills: [
        { name: "Data Structures & Algorithms", description: "Trees, graphs, dynamic programming, sorting, and time/space complexity optimization." },
        { name: "OOP", description: "Object-oriented paradigm, encapsulation, inheritance, and polymorphism." },
        { name: "DBMS", description: "Database management system architecture, ACID properties, and indexing." },
        { name: "Blockchain", description: "Decentralized ledgers, smart contracts, permissioned networks, and IPFS storage." },
        { name: "Cloud Computing", description: "Scalable cloud architecture, serverless infrastructure, and cloud deployment." }
      ]
    }
  ],

  // Flagship Featured Project Case Study
  featuredProject: {
    id: "budget-optimization-engine",
    title: "Budget Optimization Engine",
    subtitle: "Personal Finance Platform with Algorithmic Fund Allocation",
    image: "/images/projects/budget-engine.jpg",
    problemStatement: "Individuals struggle to balance fixed monthly expenses with discretionary spending, leading to inefficient fund allocation and missed investment opportunities.",
    solution: "A personal finance platform that analyzes user salary, fixed expenses, entertainment spending, and available savings using Greedy and 0/1 Knapsack optimization algorithms to recommend efficient fund allocations and personalized financial reports.",
    technologies: ["MongoDB", "Firebase", "JavaScript", "DSA"],
    algorithms: ["Greedy Optimization", "0/1 Knapsack Problem", "Dynamic Programming", "Priority Allocation"],
    keyFeatures: [
      "Real-time income ingestion & expense breakdown analysis",
      "0/1 Knapsack algorithmic allocation for essential fixed expense optimization",
      "Greedy strategy to maximize surplus directed to high-yield investment options",
      "Personalized financial reports with investment suggestions & stock-market allocation options"
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
      problem: "Traditional budgeting spreadsheets require manual calculations and fail to recommend mathematically optimal spending distributions based on spending priority and savings goals.",
      approach: "Formulated budget optimization using constrained optimization. Expenses are prioritized by necessity. A hybrid Greedy and Knapsack algorithm satisfies fixed commitments, reduces non-essential spending, and channels surplus into tailored investment suggestions.",
      implementation: "Built using JavaScript and Data Structures & Algorithms, integrated with MongoDB for user persistence and Firebase for real-time state management. Features include automated expense partitioning and stock-market investment options.",
      challenges: "Handling cases where non-discretionary expenses approach total income without compromising optimization speed, ensuring algorithmic computation runs in under 30ms.",
      outcome: "Successfully engineered a deterministic finance engine that computes optimal budget partitioning and personalized financial reports in real time."
    }
  },

  // Curated Projects List (matching exact Resume projects)
  curatedProjects: [
    {
      id: "loyalty-rewards-program",
      name: "Loyalty Rewards Program",
      category: "FULL STACK",
      image: "/images/projects/fullstack-build.jpg",
      description: "Full-stack loyalty rewards application with React frontend and Node.js/Express.js backend, featuring MongoDB data storage, JWT authentication, and REST APIs.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    },
    {
      id: "ayurvedic-supply-chain",
      name: "Ayurvedic Herbal Supply Chain",
      category: "BLOCKCHAIN",
      image: "/images/projects/ayurvedic-chain.jpg",
      description: "Blockchain-based solution for improving traceability and transparency in the Ayurvedic herbal supply chain using Hyperledger Fabric and IPFS decentralized document storage.",
      technologies: ["Hyperledger Fabric", "IPFS", "Blockchain", "Geo-tagging"],
      githubUrl: "https://github.com/Ameya48",
      demoUrl: null
    }
  ],

  // Certifications & Achievements (matching exact Resume achievements)
  achievements: [
    {
      id: "bnb-chain-cert",
      category: "CERTIFICATIONS",
      year: "2026",
      title: "BNB Chain Appreciation Certificate",
      organization: "BNB Hack Mumbai",
      description: "Received an appreciation certificate for participating in BNB Hack Mumbai.",
      credentialUrl: null,
      isPlaceholder: false
    },
    {
      id: "hari-om-internship",
      category: "EXPERIENCE",
      year: "2025",
      title: "Frontend Developer Internship Completion",
      organization: "Hari Om Thalassic Pvt. Ltd.",
      description: "Successfully completed an internship as a Frontend Developer Intern from July 2025 to October 2025 in Mumbai, Maharashtra.",
      credentialUrl: null,
      isPlaceholder: false
    },
    {
      id: "letsupgrade-internship",
      category: "EXPERIENCE",
      year: "2026",
      title: "Operations Internship Offer & Role",
      organization: "LetsUpgrade Edtech Pvt. Ltd.",
      description: "Selected for an Operations Internship at LetsUpgrade Edtech Pvt. Ltd. from January 2026 to April 2026 in Navi Mumbai, Maharashtra.",
      credentialUrl: null,
      isPlaceholder: false
    }
  ],

  // Currently Exploring Focus (matching Resume Interests)
  currentlyExploring: [
    {
      title: "Full-Stack Web Development",
      description: "Building scalable web apps using React.js, Node.js, Express.js, and MongoDB."
    },
    {
      title: "Cloud Computing & AWS",
      description: "Deploying cloud infrastructure with AWS services, S3 storage, and Docker containerization."
    },
    {
      title: "Data Structures & Algorithms",
      description: "Practicing low-level logic, optimization problems, and dynamic programming in C++."
    },
    {
      title: "Blockchain Technologies",
      description: "Exploring Hyperledger Fabric, IPFS decentralized storage, and Web3 traceability solutions."
    }
  ]
}
