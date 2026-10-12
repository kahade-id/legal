/**
 * Daftar dokumen legal — satu sumber untuk indeks beranda, navigasi,
 * dan "dokumen terkait" di halaman dokumen.
 */

export interface LegalDoc {
  href: string;
  title: string;
  desc: string;
}

export interface LegalDocGroup {
  id: string;
  title: string;
  desc: string;
  docs: LegalDoc[];
}

/** Tanggal & versi berlaku seluruh dokumen (lihat /arsip). */
export const EFFECTIVE_DATE = "4 Oktober 2026";
export const DOC_VERSION = "1.0";

export const DOC_GROUPS: LegalDocGroup[] = [
  {
    id: "pengguna",
    title: "Untuk pengguna",
    desc: "Ketentuan yang berlaku saat Anda memakai aplikasi Kahade.",
    docs: [
      {
        href: "/syarat-ketentuan",
        title: "Syarat & Ketentuan",
        desc: "Aturan penggunaan aplikasi Kahade: hak, kewajiban, dan larangan.",
      },
      {
        href: "/privasi",
        title: "Kebijakan Privasi",
        desc: "Data yang kami kumpulkan dan hak Anda atas data tersebut.",
      },
      {
        href: "/transaksi",
        title: "Kebijakan Transaksi & Dana",
        desc: "Biaya, Kahade Plus, pembayaran, dan pengembalian dana.",
      },
      {
        href: "/pedoman-komunitas",
        title: "Pedoman Komunitas",
        desc: "Etika berinteraksi dan barang yang dilarang.",
      },
      {
        href: "/referral-promo",
        title: "Ketentuan Referral & Promo",
        desc: "Syarat program referral, voucher, dan promo.",
      },
      {
        href: "/cookie",
        title: "Kebijakan Cookie",
        desc: "Jenis cookie yang kami gunakan dan cara mengelolanya.",
      },
    ],
  },
  {
    id: "perusahaan",
    title: "Perusahaan",
    desc: "Profil penyelenggara, dokumen resmi, dan identitas brand.",
    docs: [
      {
        href: "/tentang",
        title: "Tentang Kahade",
        desc: "Profil perusahaan dan fakta kunci PT Kawal Hak Dengan Aman.",
      },
      {
        href: "/whitepaper",
        title: "Whitepaper",
        desc: "Dokumen resmi visi, model bisnis, dan rencana Kahade.",
      },
      {
        href: "/brand",
        title: "Brand Guidelines",
        desc: "Logo, warna, tipografi, dan aturan penggunaan brand.",
      },
    ],
  },
  {
    id: "keamanan",
    title: "Keamanan & kontak",
    desc: "Pelaporan kerentanan, kontak resmi, dan riwayat perubahan.",
    docs: [
      {
        href: "/keamanan",
        title: "Kebijakan Keamanan",
        desc: "Komitmen keamanan dan responsible disclosure.",
      },
      {
        href: "/kontak",
        title: "Kontak Legal / DPO",
        desc: "Hubungi tim legal dan petugas perlindungan data kami.",
      },
      {
        href: "/arsip",
        title: "Arsip Perubahan",
        desc: "Riwayat versi seluruh dokumen legal.",
      },
    ],
  },
];

export const ALL_DOCS: LegalDoc[] = DOC_GROUPS.flatMap((g) => g.docs);
