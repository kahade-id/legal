"use client";

import { usePathname } from "next/navigation";

const BASE = "https://legal.kahade.id";

/**
 * BreadcrumbList JSON-LD untuk halaman dokumen:
 * Beranda > Dokumen Legal > [nama dokumen].
 * Client component agar URL halaman saat ini diambil dari usePathname.
 */
export function DocBreadcrumb({ title }: { title: string }) {
  const pathname = usePathname();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: `${BASE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dokumen Legal",
        item: `${BASE}/#dokumen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${BASE}${pathname}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
