import type { MetadataRoute } from "next";

const ROUTES = [
  "/",
  "/tentang",
  "/brand",
  "/kontak",
  "/whitepaper",
  "/privasi",
  "/syarat-ketentuan",
  "/transaksi",
  "/pedoman-komunitas",
  "/keamanan",
  "/referral-promo",
  "/cookie",
  "/arsip",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://legal.kahade.id";
  const now = new Date();
  return ROUTES.map((route, i) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1 : 0.7,
  }));
}
