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
    title: "Aligned West Chiropractic",
    description: "A migration from Wix to a custom Next.js environment.",
    tags: ["Next.js", "Tailwind CSS", "Seamless Workflow Automation."],
    liveUrl: "https://www.alignedwest.com",
    codeUrl: "https://github.com/CarltonHeywood90/aligned-west-chiro-demo",
  },
  {
    title: "Tru Balance Massage",
    description: "Technical debt recovery and brand-alignment for a high-reach influencer. Recovered legacy code and integrated modern scheduling.",
    tags: ["Next.js", "React", "Square API", "Refactoring"],
    liveUrl: "https://www.trubalance.life",
    codeUrl: "https://github.com/CarltonHeywood90/tru-balance-3-24-2026",
  },
  {
    title: "Heywood Dev (V1)",
    description: "My professional storefront and consultation engine. Built on Cloudflare Pages for maximum edge performance and zero-cost hosting.",
    tags: ["Next.js", "Cloudflare Pages", "Calendly", "SEO"],
    liveUrl: "https://heywooddev.com",
    codeUrl: "https://github.com/CarltonHeywood90/heywood-dev",
  },
];