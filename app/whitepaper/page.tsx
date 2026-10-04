import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Accordion, Button, Icon } from "@kahade/ui";
import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Whitepaper", description: "Dokumen resmi visi, model bisnis, dan rencana Kahade — 17 bab." };

const CHAPTERS: [string, string][] = [
  ["1. Ringkasan Eksekutif", "Gambaran Kahade: jual-beli P2P ala media sosial, model bisnis biaya 2,5% + Kahade Plus, target 1.000 pengguna pertama dan 1 juta transaksi dalam 6 bulan, serta kebutuhan pre-seed Rp100–500 juta."],
  ["2. Latar Belakang & Masalah", "Jual-beli via DM rawan penipuan, marketplace membosankan seperti katalog 2010, dan kategori terbatas yang mengecualikan jasa serta produk digital."],
  ["3. Solusi: Kahade", "Menggabungkan pengalaman sosial yang seru dengan keamanan transaksi setara marketplace — penemuan organik lewat feed, bukan katalog."],
  ["4. Produk & Fitur", "Feed sosial commerce, etalase produk, chat transaksi, pembayaran via Kahade, sistem reputasi, serta fitur patungan dan jastip."],
  ["5. Pengalaman Pengguna", "Alur dari scroll, like, komen, chat dengan penjual, hingga tombol “Beli via Kahade” — dirancang sebersih dan seintuitif mungkin."],
  ["6. Model Bisnis", "Biaya transaksi 2,5% (min Rp2.500, maks Rp250.000) dan langganan Kahade Plus Rp99.000/bulan atau Rp899.000/tahun dengan potongan 50% biaya dan kuota gratis Rp990.000."],
  ["7. Analisis Pasar", "Pasar social commerce Indonesia: jutaan anak muda sudah jual-beli via DM Instagram, X, dan WhatsApp setiap hari."],
  ["8. Kompetitor & Positioning", "Dibandingkan TikTok Shop, Shopee, dan perantara manual komunitas — Kahade menempati celah C2C sosial yang belum dikuasai."],
  ["9. Keunggulan Kompetitif", "Network effect komunitas, kepercayaan organik, dan innovator dilemma: marketplace besar tak akan membunuh model katalognya sendiri."],
  ["10. Strategi Go-to-Market", "Launch ke komunitas (thrift, sneakers, K-pop merch, kampus); 1.000 transaksi pertama gratis biaya."],
  ["11. Traksi & Roadmap", "Produk sudah jadi dan siap launch 8 Desember 2026; roadmap menuju 1 juta transaksi dalam 6 bulan."],
  ["12. Visi Jangka Panjang", "Ekspansi regional dan ekosistem blockchain sendiri dengan smart contract di fase berikutnya."],
  ["13. Tim & Organisasi", "Didirikan Muhammad Agung Kurniawan (CTO) yang membangun seluruh sistem sendirian; rekrutmen tim awal tanpa gaji dengan skema equity."],
  ["14. Legalitas & Kepatuhan", "PT Kawal Hak Dengan Aman — NIB & NPWP terdaftar; kepatuhan UU PDP, perlindungan konsumen, dan kesiapan audit."],
  ["15. Pendanaan", "Pre-seed Rp100–500 juta untuk akuisisi pengguna awal, tim inti, dan operasional menjelang dan sesudah launch."],
  ["16. Risiko & Mitigasi", "Risiko chicken-and-egg, satu kasus penipuan besar di awal, dan ketergantungan payment gateway — beserta mitigasinya."],
  ["17. Lampiran", "Data pendukung, glosarium, dan referensi."],
];

export default function WhitepaperPage() {
  return (
    <DocShell
      title="Whitepaper Kahade"
      description="Dokumen resmi visi, model bisnis, dan rencana Kahade — versi 1.0, Oktober 2026, diterbitkan PT Kawal Hak Dengan Aman."
    >
      <div className="mb-8">
        <a href="/Whitepaper-Kahade-v1.0.pdf" download>
          <Button leftIcon={DownloadSimple}>
            Unduh PDF (17 bab, 48 halaman)
          </Button>
        </a>
        <p className="mt-3 text-sm text-neutral-500">
          Whitepaper adalah sumber kebenaran tunggal untuk semua produk dan
          bahasa Kahade.
        </p>
      </div>
      <h2>Ringkasan 17 bab</h2>
      <Accordion
        items={CHAPTERS.map(([title, desc], i) => ({
          id: `bab-${i + 1}`,
          title,
          content: <p className="!mb-0">{desc}</p>,
        }))}
      />
      <p className="mt-8">
        <Link href="/tentang" className="font-semibold text-black underline">
          Baca juga: Tentang Kahade
        </Link>
      </p>
    </DocShell>
  );
}
