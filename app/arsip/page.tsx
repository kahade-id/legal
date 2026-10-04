import { DocShell } from "@/components/DocShell";
import { Table, THead, TBody, TR, TH, TD, Badge } from "@kahade/ui";

export const metadata = {
  title: "Arsip Perubahan Dokumen",
  description: "Riwayat versi seluruh dokumen legal Kahade — transparan dan terdokumentasi.",
  alternates: { canonical: "/arsip" },
  openGraph: {
    title: "Arsip Perubahan Dokumen",
    description: "Riwayat versi seluruh dokumen legal Kahade — transparan dan terdokumentasi.",
  },
};

const HISTORY = [
  {
    version: "1.0",
    date: "4 Oktober 2026",
    docs: "Seluruh 12 dokumen",
    note: "Rilis awal legal.kahade.id",
    status: "Aktif" as const,
  },
];

export default function ArsipPage() {
  return (
    <DocShell
      title="Arsip Perubahan Dokumen"
      description="Riwayat versi seluruh dokumen legal Kahade. Transparansi perubahan adalah bagian dari komitmen kami."
    >
      <div className="overflow-x-auto">
      <Table>
        <THead>
          <TR>
            <TH>Versi</TH>
            <TH>Tanggal berlaku</TH>
            <TH>Dokumen</TH>
            <TH>Perubahan</TH>
            <TH>Status</TH>
          </TR>
        </THead>
        <TBody>
          {HISTORY.map((h) => (
            <TR key={h.version}>
              <TD className="font-bold text-black">v{h.version}</TD>
              <TD>{h.date}</TD>
              <TD>{h.docs}</TD>
              <TD>{h.note}</TD>
              <TD>
                <Badge variant="success">{h.status}</Badge>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
      </div>
      <h2>Kebijakan versi</h2>
      <ul>
        <li>Setiap perubahan material menambah nomor versi minor (1.1, 1.2).</li>
        <li>Perubahan besar (restrukturisasi dokumen) menambah versi mayor (2.0).</li>
        <li>Versi sebelumnya tetap dapat diakses di arsip ini.</li>
        <li>Perubahan material diumumkan minimal 14 hari sebelum berlaku.</li>
      </ul>
    </DocShell>
  );
}
