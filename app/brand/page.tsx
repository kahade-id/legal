import { DocShell } from "@/components/DocShell";
import { Logo, LogoTile } from "@kahade/ui";

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
  { hex: "#000000", name: "Hitam", usage: "Teks utama, tombol utama, mark di latar terang." },
  { hex: "#FFFFFF", name: "Putih", usage: "Latar utama semua materi.", border: true },
  { hex: "#F3F4F6", name: "Abu muda", usage: "Latar seksi sekunder dan footer.", border: true },
  { hex: "#525252", name: "Abu tua", usage: "Teks sekunder dan keterangan." },
  {
    hex: "#FFD200",
    name: "Kuning Kahade",
    usage: "HANYA untuk mark logo. Jangan dipakai untuk tombol, teks, atau dekorasi lain.",
  },
];

const RULES_OK = [
  "Gunakan logo apa adanya — hanya dalam varian warna resmi, tanpa mengubah proporsi atau bentuknya.",
  "Beri ruang kosong di sekeliling logo minimal setinggi satu lengkung zigzag.",
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
      <p>
        Mark Kahade adalah zigzag dua lengkung yang melambangkan gerakan dan
        penemuan — semangat scroll yang menjadi inti pengalaman Kahade. Mark
        dipakai tanpa wordmark dan tersedia dalam tiga varian warna resmi.
      </p>
      <div className="not-prose grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
        <figure className="flex flex-col bg-surface">
          <div className="flex h-40 items-center justify-center">
            <Logo size={64} tone="ink" title="Mark Kahade hitam" />
          </div>
          <figcaption className="border-t border-line px-5 py-4 text-small">
            <span className="block font-semibold text-fg">Hitam</span>
            <span className="text-fg-muted">Di atas latar putih/terang.</span>
          </figcaption>
        </figure>
        <figure className="flex flex-col bg-surface">
          <div className="flex h-40 items-center justify-center bg-black">
            <Logo size={64} tone="brand" title="Mark Kahade kuning" />
          </div>
          <figcaption className="border-t border-line px-5 py-4 text-small">
            <span className="block font-semibold text-fg">Kuning</span>
            <span className="text-fg-muted">Di atas latar hitam/gelap.</span>
          </figcaption>
        </figure>
        <figure className="flex flex-col bg-surface">
          <div className="flex h-40 items-center justify-center bg-surface-2">
            <LogoTile size={72} title="Ikon aplikasi Kahade" />
          </div>
          <figcaption className="border-t border-line px-5 py-4 text-small">
            <span className="block font-semibold text-fg">Ikon aplikasi</span>
            <span className="text-fg-muted">Mark kuning di ubin hitam.</span>
          </figcaption>
        </figure>
      </div>
      <h2>Warna</h2>
      <div className="not-prose overflow-hidden rounded-panel border border-line">
        {COLORS.map((c) => (
          <div key={c.hex} className="flex items-center gap-4 border-b border-line px-5 py-4 last:border-b-0">
            <span
              aria-hidden="true"
              className={`h-10 w-10 shrink-0 rounded-full ${c.border ? "border border-line-strong" : ""}`}
              style={{ backgroundColor: c.hex }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-small font-semibold text-fg">
                {c.name} <span className="ml-2 font-normal tabular-nums text-fg-subtle">{c.hex}</span>
              </p>
              <p className="mt-0.5 text-small text-fg-muted">{c.usage}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Tipografi</h2>
      <p>
        Typeface resmi Kahade adalah <strong>Plus Jakarta Sans</strong> —
        typeface karya desainer Indonesia yang modern dan mudah dibaca.
        Gunakan untuk semua materi komunikasi, dengan bobot 400 untuk teks
        isi, 600 untuk penekanan, dan 700 untuk judul.
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
