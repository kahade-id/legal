"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@kahade/ui";

const NAV = [
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  { href: "/privasi", label: "Privasi" },
  { href: "/transaksi", label: "Transaksi" },
  { href: "/pedoman-komunitas", label: "Komunitas" },
  { href: "/kontak", label: "Kontak legal" },
];

export function Header() {
  const pathname = usePathname();
  return <SiteHeader site="legal" nav={NAV} pathname={pathname} linkAs={Link} />;
}
