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
];