import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { nichePath, niches } from "@/lib/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicos",
    "/portfolio",
    "/sobre",
    "/faq",
    "/contato",
    ...niches.map(nichePath),
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
