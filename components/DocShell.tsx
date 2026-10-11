import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  Alert,
  Breadcrumb,
  Container,
  PageHeader,
  Prose,
  Section,
  SectionHeader,
  TextLink,
  Toc,
  type TocItem,
} from "@kahade/ui";
import { DocBreadcrumb } from "@/components/DocBreadcrumb";
import { RelatedDocs } from "@/components/RelatedDocs";
import { DOC_VERSION, EFFECTIVE_DATE } from "@/lib/docs";

interface DocShellProps {
  title: string;
  description?: string;
  /** Aksi di kepala dokumen (mis. unduh PDF). */
  actions?: ReactNode;
  children: ReactNode;
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) {
    return textOf((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " dan ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Kerangka dokumen legal: kepala dokumen (judul, lede, tanggal berlaku,
 * versi), daftar isi menempel dari setiap <h2>, isi dengan tipografi baca,
 * catatan tinjauan hukum, lalu dokumen terkait.
 */
export function DocShell({ title, description, actions, children }: DocShellProps) {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const content = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === "h2") {
      const el = child as ReactElement<{ id?: string; children?: ReactNode }>;
      const label = textOf(el.props.children);
      let id = el.props.id ?? (slugify(label) || `bagian-${toc.length + 1}`);
      while (used.has(id)) id = `${id}-${toc.length + 1}`;
      used.add(id);
      toc.push({ id, label });
      return cloneElement(el, { id });
    }
    return child;
  });

  return (
    <>
      <DocBreadcrumb title={title} />
      <PageHeader
        size="h2"
        breadcrumb={
          <Breadcrumb items={[{ label: "Legal", href: "/" }, { label: title }]} />
        }
        title={title}
        lede={description}
        actions={actions}
        meta={[
          { label: "Berlaku sejak", value: EFFECTIVE_DATE },
          { label: "Versi", value: DOC_VERSION },
          { label: "Penyelenggara", value: "PT Kawal Hak Dengan Aman" },
        ]}
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {toc.length > 1 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-4">
                <Toc items={toc} />
              </div>
            </aside>
          )}
          <div
            className={`min-w-0 ${toc.length > 1 ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8"}`}
          >
            {toc.length > 2 && (
              <Toc items={toc} title="Daftar isi" variant="disclosure" className="mb-10 lg:hidden" />
            )}
            <Prose className="max-w-reading">{content}</Prose>
            <Alert variant="info" title="Catatan tinjauan hukum" className="mt-14 max-w-reading">
              Dokumen ini akan ditinjau ulang oleh penasihat hukum sebelum
              peluncuran. Bila ada perbedaan antara dokumen ini dan ketentuan di
              dalam aplikasi Kahade, ketentuan di dalam aplikasi yang berlaku.
            </Alert>
          </div>
        </div>
      </Container>

      <Section tone="muted" divider>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              size="h3"
              title="Dokumen terkait"
              description="Ketentuan lain yang sering dibaca bersama dokumen ini."
            />
            <TextLink as={Link} href="/" className="mt-4">
              Semua dokumen
            </TextLink>
          </div>
          <div className="lg:col-span-8">
            <RelatedDocs />
          </div>
        </div>
      </Section>
    </>
  );
}
