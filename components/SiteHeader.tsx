"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Icon, Logo } from "@kahade/ui";

const NAV: { href: string; label: string; external?: boolean }[] = [
  { href: "/tentang", label: "Tentang" },
  { href: "/privasi", label: "Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  { href: "/transaksi", label: "Transaksi" },
  { href: "https://bantuan.kahade.id", label: "Bantuan", external: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Legalitas Kahade">
          <Logo size={26} />
          <span className="text-[15px] font-bold tracking-tight text-black">
            Legalitas Kahade
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {NAV.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <button
          type="button"
          className="rounded-full p-3 text-black transition-colors hover:bg-neutral-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <Icon icon={open ? X : List} size={22} />
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-neutral-100 bg-white px-5 py-3 md:hidden"
          aria-label="Navigasi seluler"
        >
          {NAV.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-3 text-[15px] font-medium text-neutral-700 hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-3 text-[15px] font-medium text-neutral-700 hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
