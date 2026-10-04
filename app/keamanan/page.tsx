import { DocShell } from "@/components/DocShell";
import { Card, CopyButton } from "@kahade/ui";

export const metadata = { title: "Kebijakan Keamanan", description: "Komitmen keamanan Kahade: enkripsi, autentikasi berlapis, dan responsible disclosure." };

export default function KeamananPage() {
  return (
    <DocShell
      title="Kebijakan Keamanan"
      description="Komitmen kami melindungi akun, data, dan dana Anda — serta cara melaporkan celah keamanan."
    >
      <h2>1. Komitmen kami</h2>
      <ul>
        <li><strong>Enkripsi data sensitif</strong> — PII dienkripsi dengan AES-GCM; koneksi selalu TLS.</li>
        <li><strong>Autentikasi berlapis</strong> — OTP via WhatsApp, 2FA TOTP, dan PIN untuk aksi sensitif.</li>
        <li><strong>Akses minimal</strong> — data hanya dapat diakses berdasarkan peran, dan setiap akses diaudit.</li>
        <li><strong>Pemantauan</strong> — deteksi aktivitas mencurigakan (login perangkat baru, pola transaksi abnormal).</li>
        <li><strong>Pemisahan dana</strong> — dana operasional perusahaan dipisahkan dari dana transaksi pengguna.</li>
      </ul>
      <h2>2. Yang kami minta dari Anda</h2>
      <ul>
        <li>Gunakan PIN yang kuat dan jangan bagikan OTP ke siapa pun — termasuk yang mengaku staf Kahade.</li>
        <li>Aktifkan 2FA dan kunci layar perangkat Anda.</li>
        <li>Lakukan semua pembayaran melalui tombol <strong>“Beli via Kahade”</strong>; jangan transfer langsung ke penjual.</li>
      </ul>
      <h2>3. Responsible disclosure</h2>
      <p>
        Menemukan celah keamanan? Laporkan secara bertanggung jawab —{" "}
        <strong>jangan</strong> mengeksploitasi, menyebarkan, atau mengakses
        data pengguna lain.
      </p>
      <Card className="mb-6 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <code className="rounded-lg bg-neutral-100 px-3 py-2 font-mono text-sm font-semibold text-black">
            security@kahade.id
          </code>
          <CopyButton text="security@kahade.id" label="Salin email" />
        </div>
        <p className="!mb-0 mt-3 text-sm text-neutral-500">
          Sertakan deskripsi, langkah reproduksi, dan dampak potensial. Kami
          menargetkan respons awal dalam 2 hari kerja.
        </p>
      </Card>
      <h2>4. Saat insiden terjadi</h2>
      <ol>
        <li>Kami mengisolasi dampak dan mengamankan sistem terlebih dahulu.</li>
        <li>Pengguna yang terdampak diberi tahu melalui kanal resmi.</li>
        <li>Insiden yang diwajibkan peraturan dilaporkan ke otoritas terkait.</li>
        <li>Hasil evaluasi dipublikasikan di{" "}
          <a href="https://status.kahade.id">
            halaman Status Layanan
          </a>
          .</li>
      </ol>
      <p>
        Kahade tidak akan pernah meminta password, OTP, atau PIN Anda melalui
        telepon, chat, atau email.
      </p>
    </DocShell>
  );
}
