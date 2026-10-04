import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Kebijakan Cookie" };

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
      <table>
        <thead>
          <tr>
            <th>Jenis</th>
            <th>Tujuan</th>
            <th>Contoh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Esensial</strong></td>
            <td>Agar situs berfungsi (keamanan, preferensi bahasa).</td>
            <td>Sesi, token CSRF</td>
          </tr>
          <tr>
            <td><strong>Analitik</strong></td>
            <td>Memahami kunjungan secara agregat dan anonim.</td>
            <td>Statistik halaman</td>
          </tr>
          <tr>
            <td><strong>Preferensi</strong></td>
            <td>Menyimpan pilihan Anda.</td>
            <td>Bahasa, tema</td>
          </tr>
        </tbody>
      </table>
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
