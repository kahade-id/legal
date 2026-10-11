import type { Metadata } from "next";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, Container, EmptyState } from "@kahade/ui";

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
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <EmptyState
        icon={MagnifyingGlass}
        headingLevel={1}
        title="Halaman tidak ditemukan"
        description="Alamat yang Anda tuju tidak ada atau sudah dipindahkan."
        action={<ButtonLink href="/">Lihat semua dokumen</ButtonLink>}
      />
    </Container>
  );
}
