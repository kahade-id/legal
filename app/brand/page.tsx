import { DocShell } from "@/components/DocShell";
import { Card, Logo } from "@kahade/ui";

export const metadata = {
  title: "Brand Guidelines",
  description: "Logo, warna, tipografi Plus Jakarta Sans, dan aturan penggunaan brand Kahade.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Brand Guidelines",
    description: "Logo, warna, tipografi Plus Jakarta Sans, dan aturan penggunaan brand Kahade.",
  },
};

const COLORS = [
  { hex: "#000000", name: "Hitam", usage: "Warna utama teks dan elemen." },
  { hex: "#FFFFFF", name: "Putih", usage: "Warna latar utama.", border: true },
  {
    hex: "#FFD200",
    name: "Kuning Kahade",
    usage: "HANYA untuk mark logo. Jangan dipakai untuk tombol, teks, atau dekorasi lain.",
  },
];

const RULES_OK = [
  "Gunakan logo apa adanya — jangan ubah warna, proporsi, atau bentuknya.",
  "Beri ruang kosong di sekeliling logo minimal setinggi satu segitiga zigzag.",
  "Gunakan warna hitam untuk teks dan putih untuk latar di semua materi.",
];

const RULES_NO = [
  "Jangan memakai kuning #FFD200 untuk elemen selain logo.",
  "Jangan memutar, meregangkan, atau memberi efek (bayangan, outline) pada logo.",
  "Jangan menaruh logo di atas latar yang ramai sehingga sulit dibaca.",
  "Jangan membuat logo turunan atau menggabungkannya dengan logo lain.",
];

export default function BrandPage() {
  return (
    <DocShell
      title="Brand Guidelines"
      description="Aturan penggunaan identitas visual Kahade untuk partner, media, dan publik."
    >
      <h2>Logo</h2>
      <Card className="mb-6 flex items-center justify-center bg-neutral-50 p-10">
        <Logo size={72} />
      </Card>
      <p>
        Mark Kahade adalah segitiga zigzag berwarna kuning{" "}
        <strong>#FFD200</strong>. Logo melambangkan gerakan dan penemuan —
        semangat scroll yang menjadi inti pengalaman Kahade.
      </p>
      <h2>Warna</h2>
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {COLORS.map((c) => (
          <Card key={c.hex} className="p-5">
            <div
              className={`h-16 rounded-xl ${c.border ? "border border-neutral-200" : ""}`}
              style={{ backgroundColor: c.hex }}
            />
            <p className="mt-3 font-bold text-black">{c.name}</p>
            <p className="font-mono text-sm text-neutral-500">{c.hex}</p>
            <p className="mt-1.5 text-sm text-neutral-500">{c.usage}</p>
          </Card>
        ))}
      </div>
      <h2>Tipografi</h2>
      <p>
        Typeface resmi Kahade adalah <strong>Plus Jakarta Sans</strong> —
        typeface karya desainer Indonesia yang modern dan mudah dibaca.
        Gunakan untuk semua materi komunikasi, dengan bobot 400 untuk teks
        isi, 600–700 untuk penekanan, dan 800 untuk judul besar.
      </p>
      <h2>Aturan pakai</h2>
      <ul>
        {RULES_OK.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <h2>Larangan</h2>
      <ul>
        {RULES_NO.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p>
        Untuk kebutuhan materi resmi (press kit), hubungi tim legal kami
        melalui halaman Kontak Legal.
      </p>
    </DocShell>
  );
}
