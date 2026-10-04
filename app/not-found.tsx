import type { Metadata } from "next";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, EmptyState } from "@kahade/ui";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  description:
    "Alamat yang Anda tuju tidak ada atau sudah dipindahkan. Kembali ke pusat legalitas Kahade.",
  robots: { index: false, follow: true },
};

/**
 * Halaman 404: di-render DI DALAM root layout (SiteHeader + SiteFooter sudah
 * tersedia), jadi hanya isi konten — jangan render header/footer sendiri
 * agar tidak duplikat. Next otomatis mengembalikan status HTTP 404 dan
 * meta robots noindex untuk rute ini.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-5 py-16">
      <EmptyState
        icon={MagnifyingGlass}
        headingLevel={1}
        title="Halaman tidak ditemukan"
        description="Alamat yang Anda tuju tidak ada atau sudah dipindahkan."
        action={<ButtonLink href="/">Kembali ke Legalitas</ButtonLink>}
      />
    </div>
  );
}
