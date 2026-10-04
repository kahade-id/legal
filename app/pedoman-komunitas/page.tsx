import { DocShell } from "@/components/DocShell";

export const metadata = {
  title: "Pedoman Komunitas",
  description: "Etika komunitas Kahade: barang dan konten yang dilarang, serta sanksi pelanggaran.",
  alternates: { canonical: "/pedoman-komunitas" },
  openGraph: {
    title: "Pedoman Komunitas",
    description: "Etika komunitas Kahade: barang dan konten yang dilarang, serta sanksi pelanggaran.",
  },
};

export default function PedomanPage() {
  return (
    <DocShell
      title="Pedoman Komunitas"
      description="Aturan bersama agar Kahade tetap aman dan menyenangkan untuk semua."
    >
      <h2>1. Prinsip dasar</h2>
      <ul>
        <li><strong>Jujur.</strong> Deskripsikan barang/jasa apa adanya.</li>
        <li><strong>Hormat.</strong> Berkomunikasi dengan sopan di chat, komentar, dan ulasan.</li>
        <li><strong>Aman.</strong> Semua pembayaran wajib melalui sistem Kahade.</li>
      </ul>
      <h2>2. Barang & jasa yang dilarang</h2>
      <ul>
        <li>Narkotika, psikotropika, dan obat tanpa izin edar.</li>
        <li>Senjata api, senjata tajam, dan bahan peledak.</li>
        <li>Barang curian, palsu, atau hasil kejahatan.</li>
        <li>Data pribadi orang lain, akun bajakan, dan alat kejahatan siber.</li>
        <li>Layanan ilegal: judi, prostitusi, dan sejenisnya.</li>
        <li>Hewan yang dilindungi undang-undang.</li>
        <li>Barang/jasa lain yang dilarang peraturan perundang-undangan Indonesia.</li>
      </ul>
      <h2>3. Konten yang dilarang</h2>
      <ul>
        <li>Ujaran kebencian, SARA, pornografi, dan kekerasan.</li>
        <li>Penipuan, phishing, dan tautan berbahaya.</li>
        <li>Spam, termasuk promosi berulang yang tidak diminta.</li>
        <li>Pelanggaran hak cipta atau merek dagang pihak lain.</li>
      </ul>
      <h2>4. Praktik yang dilarang</h2>
      <ul>
        <li>Mengalihkan pembayaran ke luar Kahade.</li>
        <li>Manipulasi ulasan, like, atau reputasi (termasuk jual-beli ulasan).</li>
        <li>Membuat banyak akun untuk menyalahgunakan promo.</li>
        <li>Menyamar sebagai pihak lain atau sebagai staf Kahade.</li>
      </ul>
      <h2>5. Sanksi bertingkat</h2>
      <ol>
        <li><strong>Peringatan</strong> — untuk pelanggaran ringan pertama.</li>
        <li><strong>Pembatasan fitur</strong> — mis. tidak bisa mengunggah etalase selama periode tertentu.</li>
        <li><strong>Penangguhan akun</strong> — untuk pelanggaran berulang atau sedang.</li>
        <li><strong>Pemblokiran permanen</strong> — untuk penipuan, barang ilegal, atau pelanggaran berat.</li>
      </ol>
      <p>
        Pelanggaran berat (penipuan, barang ilegal) dapat langsung berujung
        pemblokiran permanen dan pelaporan ke aparat penegak hukum.
      </p>
      <h2>6. Melaporkan pelanggaran</h2>
      <p>
        Gunakan tombol <strong>Laporkan</strong> pada konten, akun, atau
        transaksi yang mencurigakan. Setiap laporan ditinjau tim Trust &
        Safety; identitas pelapor dilindungi.
      </p>
    </DocShell>
  );
}
