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
    description: "Moved a local chiropractic practice from a general-purpose site builder to a focused website shaped around its services.",
    tags: ["Chiropractic practice", "Website refresh", "Local business"],
    liveUrl: "https://www.alignedwest.com",
    codeUrl: "https://github.com/CarltonHeywood90/aligned-west-chiro-demo",
  },
  {
    title: "Tru Balance Massage",
    description: "Refreshed a massage business website and connected it with established scheduling and payment services.",
    tags: ["Massage therapy", "Online scheduling", "Payments"],
    liveUrl: "https://www.trubalance.life",
    codeUrl: "https://github.com/CarltonHeywood90/tru-balance-3-24-2026",
  },
  {
    title: "Heywood Dev (V1)",
    description: "A clear, fast business website that explains services and makes it easy to start a conversation.",
    tags: ["Business website", "Consultation booking", "Search visibility"],
    liveUrl: "https://heywooddev.com",
    codeUrl: "https://github.com/CarltonHeywood90/heywood-dev",
  },
];