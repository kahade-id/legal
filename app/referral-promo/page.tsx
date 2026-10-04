import { DocShell } from "@/components/DocShell";

export const metadata = {
  title: "Ketentuan Referral, Voucher & Promo",
  description: "Syarat dan ketentuan program referral, voucher, dan promo Kahade.",
  alternates: { canonical: "/referral-promo" },
  openGraph: {
    title: "Ketentuan Referral, Voucher & Promo",
    description: "Syarat dan ketentuan program referral, voucher, dan promo Kahade.",
  },
};

export default function ReferralPage() {
  return (
    <DocShell
      title="Ketentuan Referral, Voucher & Promo"
      description="Syarat umum yang berlaku untuk semua program referral, voucher, dan promo Kahade."
    >
      <h2>1. Syarat umum</h2>
      <ul>
        <li>Program hanya berlaku untuk akun yang valid dan terverifikasi.</li>
        <li>Satu orang berhak atas satu hadiah per program (satu akun, satu perangkat, satu nomor HP).</li>
        <li>Hadiah tidak dapat diuangkan, dipindahtangankan, atau digabung dengan promo lain kecuali dinyatakan sebaliknya.</li>
        <li>Kahade dapat mengubah atau menghentikan program dengan pemberitahuan di aplikasi.</li>
      </ul>
      <h2>2. Referral</h2>
      <ul>
        <li>Kode referral hanya sah bila dibagikan melalui fitur resmi di aplikasi.</li>
        <li>Hadiah diberikan setelah teman yang diundang memenuhi syarat program (mis. menyelesaikan transaksi pertama).</li>
        <li>Undangan ke akun milik sendiri atau akun fiktif dianggap kecurangan.</li>
      </ul>
      <h2>3. Voucher</h2>
      <ul>
        <li>Setiap voucher memiliki masa berlaku, nilai, dan syarat minimum transaksi yang tercantum saat diterbitkan.</li>
        <li>Voucher yang kedaluwarsa tidak dapat diperpanjang.</li>
        <li>Voucher hanya dapat dipakai untuk pembayaran melalui sistem Kahade.</li>
      </ul>
      <h2>4. Anti-fraud</h2>
      <p>
        Kami memantau penyalahgunaan secara otomatis dan manual. Bentuk
        kecurangan — termasuk akun ganda, manipulasi perangkat, dan
        pemalsuan aktivitas — berakibat pada:
      </p>
      <ul>
        <li>Pembatalan hadiah/voucher yang diperoleh secara curang.</li>
        <li>Pembatasan atau penutupan akun pelaku.</li>
      </ul>
      <h2>5. Sengketa program</h2>
      <p>
        Keputusan Kahade atas kelayakan peserta dan pemberian hadiah bersifat
        final untuk penyelesaian di platform. Pertanyaan dapat diajukan
        melalui{" "}
        <a href="https://bantuan.kahade.id">
          Pusat Bantuan
        </a>
        .
      </p>
    </DocShell>
  );
}
