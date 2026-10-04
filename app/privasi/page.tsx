import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Kebijakan Privasi" };

export default function PrivasiPage() {
  return (
    <DocShell
      title="Kebijakan Privasi"
      description="Bagaimana Kahade mengumpulkan, menggunakan, dan melindungi data pribadi Anda — sesuai UU Perlindungan Data Pribadi No. 27 Tahun 2022."
    >
      <h2>1. Data yang kami kumpulkan</h2>
      <h3>Data yang Anda berikan</h3>
      <ul>
        <li>Nomor HP, nama pengguna, dan email (untuk akun).</li>
        <li>Foto profil, bio, dan konten yang Anda unggah (etalase, ulasan).</li>
        <li>Data transaksi: riwayat pembelian, penjualan, dan pembayaran.</li>
        <li>Data verifikasi identitas bila Anda mengajukan verifikasi akun.</li>
      </ul>
      <h3>Data yang dikumpulkan otomatis</h3>
      <ul>
        <li>Data perangkat (model, sistem operasi, pengenal perangkat).</li>
        <li>Data penggunaan (halaman yang dibuka, interaksi, log aktivitas).</li>
        <li>Lokasi presisi saat login, registrasi, dan pemulihan akun (untuk keamanan).</li>
      </ul>
      <h2>2. Tujuan penggunaan</h2>
      <p>Kami menggunakan data Anda untuk:</p>
      <ul>
        <li>Menyediakan dan mengoperasikan aplikasi Kahade.</li>
        <li>Memproses transaksi dan mencegah penipuan.</li>
        <li>Mengirim notifikasi penting (OTP, status transaksi).</li>
        <li>Meningkatkan keamanan, termasuk deteksi login mencurigakan.</li>
        <li>Mematuhi kewajiban hukum yang berlaku.</li>
      </ul>
      <p>Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak mana pun.</p>
      <h2>3. Dasar hukum</h2>
      <p>
        Pemrosesan data pribadi didasarkan pada persetujuan Anda, pelaksanaan
        kontrak layanan, kewajiban hukum, dan kepentingan sah kami untuk
        keamanan platform — sebagaimana diatur dalam UU PDP No. 27/2022.
      </p>
      <h2>4. Hak Anda atas data</h2>
      <p>Anda berhak untuk:</p>
      <ul>
        <li><strong>Akses</strong> — meminta salinan data pribadi Anda.</li>
        <li><strong>Koreksi</strong> — memperbaiki data yang tidak akurat.</li>
        <li><strong>Penghapusan</strong> — meminta penghapusan data (dengan pengecualian kewajiban hukum, mis. catatan transaksi).</li>
        <li><strong>Penarikan persetujuan</strong> — menarik persetujuan pemrosesan kapan saja.</li>
        <li><strong>Pembatasan & keberatan</strong> — membatasi atau menolak pemrosesan tertentu.</li>
      </ul>
      <p>
        Ajukan permintaan melalui halaman Kontak Legal/DPO. Kami akan
        memverifikasi identitas Anda terlebih dahulu.
      </p>
      <h2>5. Retensi data</h2>
      <p>
        Data disimpan selama akun Anda aktif dan dihapus atau dianonimkan
        setelah tidak lagi diperlukan, kecuali diwajibkan hukum untuk disimpan
        lebih lama (mis. catatan transaksi untuk keperluan audit dan pajak).
      </p>
      <h2>6. Keamanan</h2>
      <ul>
        <li>Data sensitif (PII) dienkripsi dengan AES-GCM.</li>
        <li>Akses data dibatasi berdasarkan peran dan setiap akses diaudit.</li>
        <li>Autentikasi berlapis: OTP via WhatsApp, 2FA TOTP, dan PIN.</li>
      </ul>
      <h2>7. Pembagian data</h2>
      <p>Data dibagikan hanya kepada:</p>
      <ul>
        <li>Penyedia pembayaran (mis. DANA) untuk memproses transaksi.</li>
        <li>Penyedia infrastruktur yang terikat perjanjian kerahasiaan.</li>
        <li>Aparat penegak hukum bila diwajibkan peraturan perundang-undangan.</li>
      </ul>
      <h2>8. Perubahan kebijakan</h2>
      <p>
        Perubahan material akan diumumkan di aplikasi minimal 14 hari sebelum
        berlaku. Penggunaan aplikasi setelah tanggal berlaku dianggap sebagai
        persetujuan Anda.
      </p>
    </DocShell>
  );
}
