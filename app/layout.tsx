import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";

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

export const metadata: Metadata = {
  title: {
    default: "Legalitas & Kebijakan — Kahade",
    template: "%s — Kahade",
  },
  description:
    "Pusat legalitas Kahade: syarat & ketentuan, kebijakan privasi, kebijakan transaksi, pedoman komunitas, dan dokumen resmi PT Kawal Hak Dengan Aman.",
  metadataBase: new URL("https://legal.kahade.id"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Legalitas Kahade",
    title: "Legalitas & Kebijakan — Kahade",
    description:
      "Syarat & ketentuan, kebijakan privasi, kebijakan transaksi, dan dokumen resmi PT Kawal Hak Dengan Aman.",
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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
