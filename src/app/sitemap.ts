import type { MetadataRoute } from "next";

const BASE_URL = "https://www.tranos.ng";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about/who-we-are", priority: 0.8 },
  { path: "/about/leadership", priority: 0.6 },
  { path: "/services", priority: 0.7 },
  { path: "/power-distribution", priority: 0.8 },
  { path: "/power-energy", priority: 0.8 },
  { path: "/enclosures", priority: 0.8 },
  { path: "/cable-management", priority: 0.8 },
  { path: "/product-engine", priority: 0.6 },
  { path: "/industries", priority: 0.6 },
  { path: "/case-studies", priority: 0.6 },
  { path: "/careers", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
