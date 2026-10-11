"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, Container, EmptyState } from "@kahade/ui";

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
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
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
    </Container>
  );
}
