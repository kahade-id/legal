import Link from "next/link";
import {
  ButtonLink,
  Container,
  IndexList,
  PageHeader,
  Section,
} from "@kahade/ui";
import { DOC_GROUPS, DOC_VERSION, EFFECTIVE_DATE } from "@/lib/docs";

export const metadata = {
  title: { absolute: "Legalitas & Kebijakan — Kahade" },
  description:
    "Jelajahi seluruh dokumen resmi Kahade: kebijakan privasi, syarat & ketentuan, kebijakan transaksi, pedoman komunitas, brand guidelines, dan whitepaper.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Legalitas & Kebijakan — Kahade",
    description:
      "Jelajahi seluruh dokumen resmi Kahade: kebijakan privasi, syarat & ketentuan, kebijakan transaksi, pedoman komunitas, brand guidelines, dan whitepaper.",
  },
};

export default function Home() {
  return (
    <>
      <PageHeader
        size="display"
        eyebrow="PT Kawal Hak Dengan Aman"
        title="Ketentuan yang jelas, dalam bahasa sehari-hari."
        lede="Pusat dokumen resmi Kahade. Semua aturan, kebijakan, dan hak Anda sebagai pengguna — tanpa istilah yang disembunyikan."
        meta={[
          { label: "Berlaku sejak", value: EFFECTIVE_DATE },
          { label: "Versi dokumen", value: DOC_VERSION },
          { label: "Bahasa", value: "Indonesia" },
        ]}
      />

      <div id="dokumen">
        {DOC_GROUPS.map((group, gi) => (
          <Section key={group.id} id={group.id} divider={gi > 0} spacing="sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="text-small tabular-nums text-fg-subtle">
                    {String(gi + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-h3 text-fg">{group.title}</h2>
                  <p className="mt-2 max-w-xs text-small text-fg-muted">{group.desc}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <IndexList
                  linkAs={Link}
                  items={group.docs.map((d) => ({
                    href: d.href,
                    title: d.title,
                    description: d.desc,
                  }))}
                />
              </div>
            </div>
          </Section>
        ))}
      </div>

      <section className="bg-surface-inverse text-white">
        <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h3 text-white">Ada yang perlu diperjelas?</h2>
            <p className="mt-3 text-body-lg text-white/70">
              Tim legal dan petugas perlindungan data kami menargetkan balasan dalam 2 hari kerja.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/kontak" variant="inverse">
              Hubungi tim legal
            </ButtonLink>
            <ButtonLink href="https://bantuan.kahade.id/" variant="inverseSecondary">
              Pusat bantuan
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
