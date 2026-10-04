"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState } from "@kahade/ui";

/**
 * Error boundary global: pesan ramah Bahasa Indonesia + tombol coba lagi.
 * Menangkap error runtime di seluruh route situs legal.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-1 items-center justify-center px-5">
      <EmptyState
        icon={WarningCircle}
        title="Terjadi kesalahan"
        description="Maaf, halaman ini gagal dimuat. Silakan coba lagi — bila masalah berlanjut, hubungi legal@kahade.id."
        action={
          <Button onClick={() => reset()} type="button">
            Coba lagi
          </Button>
        }
      />
    </div>
  );
}
