import { DocShell } from "@/components/DocShell";
import { Card, CopyButton, Icon } from "@kahade/ui";
import { EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

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
      <div className="grid gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
              <Icon icon={EnvelopeSimple} size={22} />
            </div>
            <div>
              <h2 className="!mb-0 !mt-0 text-lg font-bold">Tim Legal</h2>
              <p className="!mb-0 text-sm text-neutral-500">
                Pertanyaan hukum, kerja sama, dan urusan perusahaan.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <code className="rounded-lg bg-neutral-100 px-3 py-2 font-mono text-sm font-semibold text-black">
              legal@kahade.id
            </code>
            <CopyButton text="legal@kahade.id" label="Salin email" />
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
              <Icon icon={ShieldCheck} size={22} />
            </div>
            <div>
              <h2 className="!mb-0 !mt-0 text-lg font-bold">
                Petugas Perlindungan Data (DPO)
              </h2>
              <p className="!mb-0 text-sm text-neutral-500">
                Permintaan akses, koreksi, penghapusan, dan penarikan
                persetujuan data pribadi (UU PDP No. 27/2022).
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <code className="rounded-lg bg-neutral-100 px-3 py-2 font-mono text-sm font-semibold text-black">
              dpo@kahade.id
            </code>
            <CopyButton text="dpo@kahade.id" label="Salin email" />
          </div>
        </Card>
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
