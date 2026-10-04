import { DocShell } from "@/components/DocShell";

export const metadata = {
  title: "Syarat & Ketentuan",
  description: "Aturan penggunaan aplikasi Kahade: hak, kewajiban, dan larangan pengguna.",
  alternates: { canonical: "/syarat-ketentuan" },
  openGraph: {
    title: "Syarat & Ketentuan",
    description: "Aturan penggunaan aplikasi Kahade: hak, kewajiban, dan larangan pengguna.",
  },
};

export default function SyaratPage() {
  return (
    <DocShell
      title="Syarat & Ketentuan"
      description="Aturan penggunaan aplikasi Kahade. Dengan membuat akun, Anda menyetujui seluruh ketentuan ini."
    >
      <h2>1. Definisi</h2>
      <ul>
        <li><strong>Kahade</strong> — aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial, dioperasikan PT Kawal Hak Dengan Aman.</li>
        <li><strong>Pengguna</strong> — setiap orang yang membuat akun Kahade.</li>
        <li><strong>Pembeli / Penjual</strong> — Pengguna yang melakukan pembelian / penjualan.</li>
        <li><strong>Transaksi</strong> — jual-beli yang pembayarannya diproses melalui sistem Kahade.</li>
      </ul>
      <h2>2. Kelayakan</h2>
      <ul>
        <li>Anda berusia minimal 17 tahun atau sudah menikah.</li>
        <li>Registrasi hanya menggunakan nomor HP yang valid dan milik Anda.</li>
        <li>Satu orang hanya boleh memiliki satu akun, kecuali diizinkan tertulis.</li>
      </ul>
      <h2>3. Akun Anda</h2>
      <ul>
        <li>Anda bertanggung jawab menjaga kerahasiaan kredensial dan PIN Anda.</li>
        <li>Segala aktivitas dari akun Anda dianggap dilakukan oleh Anda, kecuali terbukti sebaliknya melalui proses resmi.</li>
        <li>Segera laporkan bila mencurigai akun Anda disalahgunakan.</li>
      </ul>
      <h2>4. Posisi Kahade sebagai platform</h2>
      <p>
        Kahade adalah <strong>platform</strong> yang mempertemukan pembeli dan
        penjual. Kahade <strong>bukan penjual</strong> barang/jasa yang
        tercantum di aplikasi, kecuali dinyatakan sebaliknya secara tertulis.
        Kontrak jual-beli terjadi antara pembeli dan penjual; Kahade
        menyediakan sistem pembayaran, perlindungan transaksi, dan penyelesaian
        sengketa.
      </p>
      <h2>5. Kewajiban pengguna</h2>
      <ul>
        <li>Memberikan informasi yang benar, akurat, dan tidak menyesatkan.</li>
        <li>Penjual wajib mendeskripsikan kondisi barang/jasa dengan jujur, termasuk cacat yang diketahui.</li>
        <li>Tidak melakukan penipuan, pemalsuan, atau manipulasi ulasan/reputasi.</li>
        <li>Mematuhi Pedoman Komunitas dan seluruh peraturan perundang-undangan.</li>
      </ul>
      <h2>6. Larangan</h2>
      <ul>
        <li>Menjual barang/jasa ilegal atau yang dilarang Pedoman Komunitas.</li>
        <li>Mengalihkan transaksi ke luar sistem Kahade untuk menghindari biaya.</li>
        <li>Menyalahgunakan promo, voucher, atau program referral.</li>
        <li>Mengganggu keamanan sistem, melakukan scraping massal, atau reverse engineering.</li>
      </ul>
      <h2>7. Biaya</h2>
      <p>
        Biaya transaksi sebesar <strong>2,5%</strong> per transaksi (minimum
        Rp2.500, maksimum Rp250.000) dan biaya langganan Kahade Plus
        ditampilkan dengan jelas sebelum Anda membayar. Tidak ada biaya
        tersembunyi.
      </p>
      <h2>8. Penghentian</h2>
      <ul>
        <li>Kahade dapat membatasi, menangguhkan, atau menutup akun yang melanggar ketentuan ini.</li>
        <li>Anda dapat menutup akun kapan saja melalui pengaturan aplikasi.</li>
        <li>Penutupan akun tidak menghapus kewajiban yang sudah timbul (mis. transaksi berjalan).</li>
      </ul>
      <h2>9. Penyelesaian sengketa</h2>
      <p>
        Sengketa antara pengguna diselesaikan terlebih dahulu melalui mekanisme
        di aplikasi. Bila tidak tercapai kesepakatan, sengketa diselesaikan
        secara musyawarah; bila gagal, melalui pengadilan yang berwenang di
        Indonesia.
      </p>
      <h2>10. Batasan tanggung jawab</h2>
      <p>
        Sepanjang diizinkan hukum, tanggung jawab Kahade terbatas pada nilai
        transaksi yang bersangkutan. Kahade tidak bertanggung jawab atas
        kerugian tidak langsung yang timbul dari penggunaan aplikasi.
      </p>
      <h2>11. Perubahan ketentuan</h2>
      <p>
        Kami dapat memperbarui ketentuan ini; perubahan material diumumkan di
        aplikasi minimal 14 hari sebelum berlaku.
      </p>
    </DocShell>
  );
}
