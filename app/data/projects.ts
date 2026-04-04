// data/projects.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    title: "Sovereign (D2C Band App)",
    description: "A B2B SaaS ecosystem allowing artists to bypass third-party fees and own their fan data. Features a secure media vault and artist dashboard.",
    tags: ["Next.js", "Supabase", "Stripe", "PostgreSQL"],
    liveUrl: "https://d2c-band-app-demo-backup.vercel.app", 
    codeUrl: "https://github.com/CarltonHeywood90/d2c-band-app-demo",
  },
  {
    title: "Aligned West Chiropractic",
    description: "A HIPAA-compliant migration from Wix to a custom Next.js environment. Integrated direct EHR scheduling to eliminate manual data entry.",
    tags: ["Next.js", "Tailwind CSS", "Compliance", "EHR Integration"],
    liveUrl: "https://www.alignedwest.com",
    codeUrl: "https://github.com/CarltonHeywood90/aligned-west-chiro-demo",
  },
  {
    title: "Tru Balance Massage",
    description: "Technical debt recovery and brand-alignment for a high-reach influencer. Refactored legacy code and integrated Square Appointments.",
    tags: ["Next.js", "React", "Square API", "Refactoring"],
    liveUrl: "https://www.trubalance.life",
    codeUrl: "https://github.com/CarltonHeywood90/tru-balance-3-24-2026",
  },
  {
    title: "BHRD Hub",
    description: "Multimedia production hub optimized for performance. Features custom lazy-loading and an integrated music theory application.",
    tags: ["Vanilla JS", "HTML/CSS", "Audio Engineering", "Performance"],
    liveUrl: "https://brutalhonestyrelentlessdrive.com",
    codeUrl: "https://github.com/CarltonHeywood90/brutalhonestyrelentlessdrive",
  },
  {
    title: "Music Theory Match",
    description: "Interactive card-matching game designed to build rapid-fire pattern recognition for keys, intervals, and modal theory.",
    tags: ["React", "State Management", "Gamification", "Music Theory"],
    liveUrl: "https://brutalhonestyrelentlessdrive.com/theory-game", 
    codeUrl: "https://github.com/CarltonHeywood90/theory-game-web-app",
  },
  {
    title: "Heywood Dev (V1)",
    description: "My professional storefront and consultation engine. Built on Cloudflare Pages for maximum edge performance and zero-cost hosting.",
    tags: ["Next.js", "Cloudflare Pages", "Calendly", "SEO"],
    liveUrl: "https://heywooddev.com",
    codeUrl: "https://github.com/CarltonHeywood90/heywood-dev",
  },
];