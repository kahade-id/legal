import { DocShell } from "@/components/DocShell";
import { Table, TBody, TR, TH, TD } from "@kahade/ui";

export const metadata = { title: "Tentang Kahade", description: "Profil PT Kawal Hak Dengan Aman dan fakta kunci tentang Kahade.", alternates: { canonical: "/tentang" } };

const FACTS: [string, string][] = [
  ["Badan hukum", "PT Kawal Hak Dengan Aman"],
  ["Legalitas", "NIB & NPWP terdaftar"],
  ["Pendiri & CTO", "Muhammad Agung Kurniawan"],
  ["Model", "Aplikasi jual-beli pengguna ke pengguna"],
  ["Biaya transaksi", "2,5% (min Rp2.500, maks Rp250.000)"],
  ["Kahade Plus", "Rp99.000/bulan atau Rp899.000/tahun"],
  ["Target launch", "8 Desember 2026"],
  ["Target awal", "1.000 pengguna pertama dari komunitas"],
];

export default function TentangPage() {
  return (
    <DocShell
      title="Tentang Kahade"
      description="Mengenal perusahaan di balik aplikasi Kahade."
    >
      <h2>Siapa kami</h2>
      <p>
        <strong>
          Kahade adalah aplikasi jual-beli pengguna ke pengguna yang
          tampilannya seperti media sosial.
        </strong>
      </p>
      <p>
        Kahade dioperasikan oleh <strong>PT Kawal Hak Dengan Aman</strong>,
        badan hukum Indonesia yang telah memiliki Nomor Induk Berusaha (NIB)
        dan Nomor Pokok Wajib Pajak (NPWP). Kami membangun Kahade untuk
        menggabungkan yang terbaik dari dua dunia: pengalaman sosial yang seru
        seperti media sosial, dengan keamanan transaksi setara marketplace.
      </p>
      <h2>Visi</h2>
      <p>
        Menjadi tempat jual-beli paling dipercaya dan paling menyenangkan bagi
        generasi muda Indonesia — <em>jual beli semudah scroll medsos</em>.
        Kami percaya perilaku jual-beli lewat DM sudah ada; yang belum ada
        adalah platform yang memberi perlindungan tanpa menghilangkan
        keseruannya.
      </p>
      <h2>Fakta kunci</h2>
      <div className="overflow-x-auto">
      <Table>
        <TBody>
          {FACTS.map(([k, v]) => (
            <TR key={k}>
              <TH scope="row" className="whitespace-nowrap">{k}</TH>
              <TD>{v}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
      </div>
      <h2>Pendiri</h2>
      <p>
        Kahade didirikan oleh <strong>Muhammad Agung Kurniawan</strong>{" "}
        (Pendiri & Chief Technology Officer), yang membangun seluruh sistem
        — backend, aplikasi mobile iOS dan Android, panel admin, dan web —
        dari nol.
      </p>
    </DocShell>
  );
}
