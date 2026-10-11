import { DocShell } from "@/components/DocShell";
import { CopyButton } from "@kahade/ui";

const CONTACTS = [
  {
    title: "Tim Legal",
    desc: "Pertanyaan hukum, kerja sama, dan urusan perusahaan.",
    email: "legal@kahade.id",
  },
  {
    title: "Petugas Perlindungan Data (DPO)",
    desc: "Permintaan akses, koreksi, penghapusan, dan penarikan persetujuan data pribadi (UU PDP No. 27/2022).",
    email: "dpo@kahade.id",
  },
];

export const metadata = {
  title: "Kontak Legal / DPO",
  description: "Hubungi tim legal dan Petugas Perlindungan Data (DPO) Kahade.",
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Kontak Legal / DPO",
    description: "Hubungi tim legal dan Petugas Perlindungan Data (DPO) Kahade.",
  },
};

export default function KontakPage() {
  return (
    <DocShell
      title="Kontak Legal / DPO"
      description="Hubungi tim legal dan petugas perlindungan data (Data Protection Officer) Kahade."
    >
      <div className="not-prose grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
        {CONTACTS.map((c) => (
          <div key={c.email} className="flex flex-col bg-surface p-6 sm:p-7">
            <p className="text-small font-semibold text-fg">{c.title}</p>
            <p className="mt-2 flex-1 text-small text-fg-muted">{c.desc}</p>
            <a
              href={`mailto:${c.email}`}
              className="mt-6 text-h4 text-fg underline decoration-line-control decoration-1 underline-offset-4 hover:decoration-fg"
            >
              {c.email}
            </a>
            <div className="mt-4">
              <CopyButton text={c.email} label="Salin email" />
            </div>
          </div>
        ))}
      </div>
      <h2>Waktu respons</h2>
      <p>
        Kami menargetkan merespons setiap pesan dalam <strong>2 hari kerja</strong>.
        Untuk permintaan terkait data pribadi, kami akan memverifikasi
        identitas Anda terlebih dahulu demi keamanan.
      </p>
      <h2>Perusahaan</h2>
      <p>
        <strong>PT Kawal Hak Dengan Aman</strong>
        <br />
        Indonesia
      </p>
    </DocShell>
  );
}
