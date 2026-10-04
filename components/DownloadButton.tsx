"use client";

import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@kahade/ui";

/**
 * Tombol unduh whitepaper.
 *
 * Client component: ButtonLink adalah client component dan menerima
 * referensi komponen ikon (fungsi) sebagai prop — tidak boleh di-render
 * langsung dari server component.
 */
export function DownloadButton() {
  return (
    <ButtonLink
      href="/Whitepaper-Kahade-v1.0.pdf"
      download
      leftIcon={DownloadSimple}
    >
      Unduh PDF (17 bab, 48 halaman)
    </ButtonLink>
  );
}
