export const projectsData = [
  {
    title: "Orbit",
    description:
      "A comprehensive dashboard for managing and configuring the multi-server Discord bot.",
    githubUrl: "https://github.com/HeapReaper/Orbit",
    websiteUrl: "https://botinorbit.com",
    architecture: [
      "Frontend: React (Next.js) with TailwindCSS.",
      "Backend: Next.js 15.5.6.",
      "Database: MariaDB with Redis and ClickHouse.",
      "Other: Dockerized with automated continuous deployment (CD).",
    ],
    achievements: [
      "Designed, developed, and deployed the full-stack application independently.",
      "Implemented Redis caching to minimize database reads and prevent hitting Discord API rate limits.",
      "Enhanced API security with session-based authentication and rate limiting.",
    ],
    imageUrl: "/Orbit-screenshot.png",
  },

  {
    title: "KlikCV",
    description:
      "A completely free and privacy-focused CV generator for everyone.",
    githubUrl: "https://github.com/HeapReaper/KlikCV",
    websiteUrl: "https://klikcv.nl",
    architecture: [
      "Frontend: React (Next.js) with TailwindCSS.",
      "Backend: Next.js 15.5.5.",
      "Database: Stateless (DB-less).",
      "Other: Dockerized with automated continuous deployment (CD).",
    ],
    achievements: [
      "Built and deployed the entire platform from scratch.",
      "Implemented dynamic PDF generation with customizable templates.",
      "Optimized for SEO, accessibility, and fast load times through static generation.",
    ],
    imageUrl: "/klikcv-screenshot.png",
  },

  {
    title: "Kiyomi",
    description:
      "A flight tracking and member management platform for an local RC club.",
    githubUrl: "https://github.com/HeapReaper/Kiyomi",
    websiteUrl: "",
    architecture: [
      "Frontend: Bootstrap with Laravel Livewire.",
      "Backend: Laravel 11.9.",
      "Database: MariaDB with Redis.",
      "Other: Dockerized with continuous deployment (CD).",
    ],
    achievements: [
      "Processed and reported over 1,500 flights from 50+ users.",
      "Leveraged Laravel queues to handle PDF generation asynchronously.",
      "Optimized the user interface for accessibility and ease of use by senior members.",
    ],
    imageUrl: "/kiyomi-screenshot.png",
  },

  {
    title: "GitCord",
    description: "Integrate your development Discord server with your GitHub repositories seamlessly. Manage bug reports, feature requests, and issue tracking directly from Discord!",
    githubUrl: "https://github.com/HeapReaper/GitCord",
    websiteUrl: "https://gitcord.nl", // optional, can remove if no website
    architecture: [
      "Bot Framework: Discord.JS (TypeScript) for handling messages, interactions, and threads.",
      "Database: PostgreSQL with Prisma for storing linked messages, threads, and GitHub issues.",
      "GitHub Integration: Octokit REST API to create, comment, and track issues.",
      "Hosting: Dockerized for container-based deployment with persistent database storage.",
    ],
    achievements: [
      "Implemented full workflow from Discord message → GitHub issue → Discord thread.",
      "Supports creating new issues or linking to existing GitHub issues directly from Discord.",
      "Automatically tracks closed GitHub issues and notifies Discord threads with linked commit messages.",
      "Ensures safe and interactive workflows using buttons, select menus, and ephemeral messages.",
    ],
    imageUrl: "/GitCord.png", // optional path to your screenshot
  }

];