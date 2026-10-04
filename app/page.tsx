import Link from "next/link";
import {
  Bank,
  BookOpen,
  Buildings,
  CaretRight,
  Cookie,
  EnvelopeSimple,
  FileText,
  Handshake,
  LockKey,
  Palette,
  Archive,
  ShieldCheck,
  Ticket,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Card, Icon } from "@kahade/ui";

export const metadata = {
  title: { absolute: "Legalitas & Kebijakan — Kahade" },
  description:
    "Jelajahi seluruh dokumen resmi Kahade: kebijakan privasi, syarat & ketentuan, kebijakan transaksi, pedoman komunitas, brand guidelines, dan whitepaper.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Legalitas & Kebijakan — Kahade",
    description:
      "Jelajahi seluruh dokumen resmi Kahade: kebijakan privasi, syarat & ketentuan, kebijakan transaksi, pedoman komunitas, brand guidelines, dan whitepaper.",
  },
};

const DOCS: {
  href: string;
  icon: typeof FileText;
  title: string;
  desc: string;
}[] = [
  {
    href: "/tentang",
    icon: Buildings,
    title: "Tentang Kahade",
    desc: "Profil perusahaan dan fakta kunci PT Kawal Hak Dengan Aman.",
  },
  {
    href: "/brand",
    icon: Palette,
    title: "Brand Guidelines",
    desc: "Logo, warna, tipografi, dan aturan penggunaan brand.",
  },
  {
    href: "/kontak",
    icon: EnvelopeSimple,
    title: "Kontak Legal / DPO",
    desc: "Hubungi tim legal dan petugas perlindungan data kami.",
  },
  {
    href: "/whitepaper",
    icon: BookOpen,
    title: "Whitepaper",
    desc: "Dokumen resmi visi, model bisnis, dan rencana Kahade.",
  },
  {
    href: "/privasi",
    icon: LockKey,
    title: "Kebijakan Privasi",
    desc: "Data yang kami kumpulkan dan hak Anda atas data tersebut.",
  },
  {
    href: "/syarat-ketentuan",
    icon: FileText,
    title: "Syarat & Ketentuan",
    desc: "Aturan penggunaan aplikasi Kahade.",
  },
  {
    href: "/transaksi",
    icon: Handshake,
    title: "Kebijakan Transaksi & Dana",
    desc: "Biaya, Kahade Plus, pembayaran, dan pengembalian dana.",
  },
  {
    href: "/pedoman-komunitas",
    icon: UsersThree,
    title: "Pedoman Komunitas",
    desc: "Etika berinteraksi dan barang yang dilarang.",
  },
  {
    href: "/keamanan",
    icon: ShieldCheck,
    title: "Kebijakan Keamanan",
    desc: "Komitmen keamanan dan responsible disclosure.",
  },
  {
    href: "/referral-promo",
    icon: Ticket,
    title: "Ketentuan Referral & Promo",
    desc: "Syarat program referral, voucher, dan promo.",
  },
  {
    href: "/cookie",
    icon: Cookie,
    title: "Kebijakan Cookie",
    desc: "Jenis cookie yang kami gunakan dan cara mengelolanya.",
  },
  {
    href: "/arsip",
    icon: Archive,
    title: "Arsip Perubahan",
    desc: "Riwayat versi seluruh dokumen legal.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:py-20">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-semibold text-neutral-700">
          <Icon icon={Bank} size={15} />
          PT Kawal Hak Dengan Aman
        </div>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-black md:text-5xl">
          Legalitas Kahade
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-neutral-500">
          Pusat dokumen resmi Kahade — aplikasi jual-beli pengguna ke pengguna
          yang tampilannya seperti media sosial. Semua ketentuan ditulis dengan
          bahasa yang jelas, tanpa biaya tersembunyi.
        </p>
      </div>

      <div id="dokumen" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DOCS.map((doc) => (
          <Link key={doc.href} href={doc.href} className="group">
            <Card
              interactive
              className="flex h-full flex-col p-6 transition-transform"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                <Icon icon={doc.icon} size={22} />
              </div>
              <h2 className="mt-4 text-[17px] font-bold tracking-tight text-black">
                {doc.title}
              </h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">
                {doc.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-black">
                Baca
                <Icon
                  icon={CaretRight}
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
