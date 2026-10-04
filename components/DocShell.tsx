import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Alert, Icon } from "@kahade/ui";
import { DocBreadcrumb } from "@/components/DocBreadcrumb";

interface DocShellProps {
  title: string;
  description?: string;
  children: ReactNode;
}

/**
 * Kerangka halaman dokumen legal: judul, garis versi, isi, catatan tinjauan hukum.
 */
export function DocShell({ title, description, children }: DocShellProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <DocBreadcrumb title={title} />
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-black"
      >
        <Icon icon={ArrowLeft} size={16} />
        Semua dokumen
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-[17px] leading-relaxed text-neutral-500">
          {description}
        </p>
      )}
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
        Berlaku sejak 4 Oktober 2026 · Versi 1.0
      </p>
      <div className="prose-legal mt-10">{children}</div>
      <Alert variant="info" className="mt-12">
        Dokumen ini akan ditinjau ulang oleh penasihat hukum sebelum
        peluncuran. Bila ada perbedaan antara dokumen ini dan ketentuan di
        dalam aplikasi Kahade, ketentuan di dalam aplikasi yang berlaku.
      </Alert>
    </div>
  );
}
