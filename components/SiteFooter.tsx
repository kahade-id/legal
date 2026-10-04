import Link from "next/link";
import { Logo } from "@kahade/ui";

const GROUPS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Dokumen",
    links: [
      { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
      { href: "/privasi", label: "Kebijakan Privasi" },
      { href: "/transaksi", label: "Kebijakan Transaksi" },
      { href: "/pedoman-komunitas", label: "Pedoman Komunitas" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { href: "/tentang", label: "Tentang Kahade" },
      { href: "/brand", label: "Brand Guidelines" },
      { href: "/whitepaper", label: "Whitepaper" },
      { href: "/kontak", label: "Kontak Legal" },
    ],
  },
  {
    title: "Lainnya",
    links: [
      { href: "https://kahade.id", label: "kahade.id", external: true },
      { href: "https://karir.kahade.id", label: "Karir", external: true },
      { href: "https://bantuan.kahade.id", label: "Bantuan", external: true },
      { href: "https://status.kahade.id", label: "Status Layanan", external: true },
      { href: "https://investor.kahade.id", label: "Investor", external: true },
      { href: "https://artikel.kahade.id", label: "Artikel", external: true },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={26} />
              <span className="text-[15px] font-bold tracking-tight text-black">
                Legalitas Kahade
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
              Pusat dokumen resmi PT Kawal Hak Dengan Aman, penyelenggara
              aplikasi Kahade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {group.links.map((link) =>
                    link.external ? (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-neutral-600 transition-colors hover:text-black"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-neutral-600 transition-colors hover:text-black"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-500">
            © {year} PT Kawal Hak Dengan Aman. Dokumen di situs ini akan ditinjau
            ulang oleh penasihat hukum sebelum peluncuran.
          </p>
        </div>
      </div>
    </footer>
  );
}
