import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luminoed.id";

  // Define your static routes here
  const routes = [
    "",
    "/about",
    "/about-us", // Checking if this is a duplicate or alias, listing both for now based on dir structure
    "/blog",
    "/contact",
    "/services/training",
    "/services/streaming",
    "/services/smart-school",
    "/services/marketing",
    "/services/equipment-provision",
    "/services/additional",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
