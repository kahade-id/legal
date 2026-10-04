import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Kebijakan Transaksi & Pengembalian Dana" };

export default function TransaksiPage() {
  return (
    <DocShell
      title="Kebijakan Transaksi & Pengembalian Dana"
      description="Biaya, alur pembayaran, dan kapan dana kembali — transparan sejak awal, tanpa biaya tersembunyi."
    >
      <h2>1. Biaya transaksi</h2>
      <p>
        Setiap transaksi yang pembayarannya diproses melalui Kahade dikenakan
        biaya sebesar <strong>2,5%</strong> dari nilai transaksi, dengan batas
        minimum <strong>Rp2.500</strong> dan maksimum{" "}
        <strong>Rp250.000</strong> per transaksi. Biaya selalu ditampilkan
        sebelum Anda menekan tombol <strong>“Beli via Kahade”</strong>.
      </p>
      <h2>2. Kahade Plus</h2>
      <p>
        Langganan opsional <strong>Rp99.000/bulan</strong> atau{" "}
        <strong>Rp899.000/tahun</strong>. Member Plus mendapatkan:
      </p>
      <ul>
        <li>Potongan 50% biaya transaksi.</li>
        <li>Kuota pembebasan biaya Rp990.000 per periode.</li>
        <li>Prioritas layanan pelanggan.</li>
        <li>Badge Plus di profil.</li>
      </ul>
      <p>
        Langganan dapat dibatalkan kapan saja; manfaat berlaku hingga akhir
        periode berjalan dan tidak dapat diuangkan kembali secara prorata,
        kecuali diwajibkan hukum.
      </p>
      <h2>3. Alur pembayaran</h2>
      <ol>
        <li>Pembeli menekan <strong>“Beli via Kahade”</strong> dan membayar melalui kanal yang tersedia (mis. DANA).</li>
        <li>Dana pembayaran tercatat di sistem Kahade untuk melindungi kedua pihak.</li>
        <li>Penjual mengirim barang/jasa sesuai kesepakatan.</li>
        <li>Pembeli mengonfirmasi penerimaan — atau batas waktu perlindungan tercapai.</li>
        <li>Dana diteruskan ke penjual.</li>
      </ol>
      <h2>4. Batas waktu penjual</h2>
      <p>
        Penjual wajib mengirimkan barang/jasa dalam <strong>2 hari</strong>{" "}
        setelah pembayaran terkonfirmasi. Bila melewati batas tanpa kabar,
        pesanan dapat dibatalkan otomatis dan dana dikembalikan ke pembeli.
      </p>
      <h2>5. Syarat pengembalian dana (refund)</h2>
      <p>Dana dikembalikan ke pembeli bila:</p>
      <ul>
        <li>Pesanan dibatalkan sebelum dikirim.</li>
        <li>Penjual melewati batas waktu pengiriman.</li>
        <li>Barang tidak dikirim / jasa tidak dikerjakan.</li>
        <li>Hasil sengketa memenangkan pembeli.</li>
      </ul>
      <p>
        Refund diproses ke sumber pembayaran asal atau saldo yang dapat
        ditarik, maksimal <strong>7 hari kerja</strong> setelah disetujui.
      </p>
      <h2>6. Penyelesaian sengketa</h2>
      <ol>
        <li>Pembeli/penjual membuka sengketa dari halaman transaksi dengan bukti (foto, chat).</li>
        <li>Tim Trust & Safety Kahade meninjau maksimal 3 hari kerja.</li>
        <li>Keputusan bersifat final untuk penyelesaian di platform: dana diteruskan ke penjual atau dikembalikan ke pembeli.</li>
      </ol>
      <p>
        Keputusan ini tidak menghilangkan hak Anda menempuh jalur hukum di
        luar platform.
      </p>
      <h2>7. Perlindungan penjual</h2>
      <ul>
        <li>Kepastian pembayaran untuk pesanan yang sah dan terkirim.</li>
        <li>Perlindungan dari klaim palsu melalui verifikasi bukti.</li>
        <li>Pembeli yang terbukti curang dapat dibatasi atau diblokir.</li>
      </ul>
    </DocShell>
  );
}
