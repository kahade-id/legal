import { DocShell } from "@/components/DocShell";
import { Table, THead, TBody, TR, TH, TD } from "@kahade/ui";

export const metadata = { title: "Kebijakan Cookie", description: "Jenis cookie yang digunakan situs Kahade dan cara mengelolanya.", alternates: { canonical: "/cookie" } };

export default function CookiePage() {
  return (
    <DocShell
      title="Kebijakan Cookie"
      description="Jenis cookie yang kami gunakan di situs web Kahade dan cara mengelolanya."
    >
      <h2>1. Apa itu cookie</h2>
      <p>
        Cookie adalah file teks kecil yang disimpan di perangkat Anda saat
        mengunjungi situs web. Kami menggunakannya agar situs berfungsi
        dengan baik dan untuk memahami cara pengguna berinteraksi dengan
        situs kami.
      </p>
      <h2>2. Jenis cookie yang kami gunakan</h2>
      <div className="overflow-x-auto">
      <Table>
        <THead>
          <TR>
            <TH>Jenis</TH>
            <TH>Tujuan</TH>
            <TH>Contoh</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD><strong>Esensial</strong></TD>
            <TD>Agar situs berfungsi (keamanan, preferensi bahasa).</TD>
            <TD>Sesi, token CSRF</TD>
          </TR>
          <TR>
            <TD><strong>Analitik</strong></TD>
            <TD>Memahami kunjungan secara agregat dan anonim.</TD>
            <TD>Statistik halaman</TD>
          </TR>
          <TR>
            <TD><strong>Preferensi</strong></TD>
            <TD>Menyimpan pilihan Anda.</TD>
            <TD>Bahasa, tema</TD>
          </TR>
        </TBody>
      </Table>
      </div>
      <p>
        Kami <strong>tidak</strong> menggunakan cookie iklan pihak ketiga
        untuk pelacakan lintas situs.
      </p>
      <h2>3. Cara mengelola</h2>
      <ul>
        <li>Sebagian besar browser memungkinkan Anda memblokir atau menghapus cookie melalui pengaturan.</li>
        <li>Memblokir cookie esensial dapat membuat sebagian fitur situs tidak berfungsi.</li>
        <li>Pengaturan “Do Not Track” pada browser Anda akan kami hormati bila memungkinkan secara teknis.</li>
      </ul>
      <h2>4. Perubahan</h2>
      <p>
        Perubahan kebijakan ini akan dipublikasikan di halaman ini dengan
        tanggal berlaku yang diperbarui.
      </p>
    </DocShell>
  );
}
