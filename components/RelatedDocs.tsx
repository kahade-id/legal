"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IndexList } from "@kahade/ui";
import { DOC_GROUPS } from "@/lib/docs";

/** Dokumen lain dalam kelompok yang sama dengan halaman saat ini. */
export function RelatedDocs() {
  const pathname = usePathname();
  const group = DOC_GROUPS.find((g) => g.docs.some((d) => d.href === pathname)) ?? DOC_GROUPS[0];
  const docs = group.docs.filter((d) => d.href !== pathname).slice(0, 4);
  if (docs.length === 0) return null;
  return (
    <IndexList
      linkAs={Link}
      titleAs="span"
      items={docs.map((d) => ({ href: d.href, title: d.title, description: d.desc }))}
    />
  );
}
