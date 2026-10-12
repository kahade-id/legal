import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Header } from "@/components/site/Header";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Kawal Hak Dengan Aman",
  alternateName: "Kahade",
  url: "https://legal.kahade.id",
  logo: "https://legal.kahade.id/favicon.svg",
  description:
    "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial.",
  sameAs: [
    "https://kahade.id",
    "https://karir.kahade.id",
    "https://legal.kahade.id",
    "https://bantuan.kahade.id",
    "https://status.kahade.id",
    "https://investor.kahade.id",
    "https://artikel.kahade.id",
  ],
};

// Plus Jakarta Sans self-hosted via next/font: tanpa CSS pihak ketiga yang
// memblokir render. Variabel dipasang di <html> agar token --font-sans di
// :root ikut terisi (memasangnya di <body> membuat font jatuh ke fallback).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Legalitas & Kebijakan — Kahade",
    template: "%s — Kahade",
  },
  description:
    "Pusat legalitas Kahade: syarat & ketentuan, kebijakan privasi, kebijakan transaksi, pedoman komunitas, dan dokumen resmi PT Kawal Hak Dengan Aman.",
  metadataBase: new URL("https://legal.kahade.id"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    // Judul & deskripsi OG TIDAK diset di sini: tiap halaman wajib mendefinisikan
    // openGraph.title + openGraph.description sendiri di metadata-nya, agar tidak
    // semua halaman mewarisi OG homepage (duplikat).
    type: "website",
    locale: "id_ID",
    siteName: "Kahade Legal",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#konten-utama" className="kh-skip-link">
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter
          site="legal"
          linkAs={Link}
          note="Dokumen di situs ini akan ditinjau ulang oleh penasihat hukum sebelum peluncuran."
        />
      </body>
    </html>
  );
}
