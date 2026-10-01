# Laporan Praktikum Pengembangan Aplikasi Berbasis Web (PABW)

Repositori ini berisi catatan, laporan, dan kode sumber pengerjaan tugas praktikum Pengembangan Aplikasi Berbasis Web (SIF302)

## Identitas Mahasiswa

- **Nama:** Muhammad Syifaai Ulin Nuha
- **NIM:** 25523214
- **Program Studi:** Informatika
- **Universitas:** Universitas Islam Indonesia (UII)

---

## Rekapitulasi Progres Praktikum

### 1. Praktikum P04 — Design Token untuk Halaman Profil Saya

- **Arah Visual & Desain:** Mengusung gaya tegas, teknis, dan bersih bernuansa dokumentasi modern dengan warna utama Teal (`#0D9488`) dan sistem design token dua lapis (nilai mentah + peran).
- **Struktur Tambahan Semantik:** Menambahkan tiga bagian baru di dalam `<main>` untuk memenuhi kriteria asesmen:
  1. **Lini Masa (`#lini-masa`):** Menggunakan `<ol>` dan `<time>` untuk riwayat kronologis akademik dan pemrograman.
  2. **Keterampilan (`#keterampilan`):** Menggunakan `<dl>`, `<dt>`, dan `<dd>` untuk pemetaan keahlian teknis.
  3. **Tanya Jawab (`#tanya-jawab`):** Menggunakan `<details>` dan `<summary>` untuk interaksi FAQ murni berbasis CSS.
- **Arsitektur 5 Berkas CSS:** Menyusun `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css` sesuai urutan pemuatan _cascade_.

### 2. Praktikum P5 — Layout Modern: Flexbox dan Grid

- Menerapkan arsitektur CSS modular multi-layer untuk penataan tata letak halaman makro menggunakan CSS Grid dan navigasi/komponen mikro menggunakan Flexbox[cite: 1, 3, 5, 8].
- Menerapkan galeri adaptif serta pengaturan tema gelap profesional dengan aksen oranye hangat yang selaras dengan identitas visual profil[cite: 11].
- Memastikan tata letak tetap aman dan rapi pada pengujian rentang layar kecil hingga layar lebar[cite: 7].

### 3. Praktikum P6 — Responsif Mobile-First

- **Baris Meta Viewport:** Memasang baris `<meta name="viewport" content="width=device-width, initial-scale=1.0">` pada berkas HTML agar skala peramban seluler tampil optimal[cite: 3, 5, 6].
- **Gaya Dasar Layar Sempit (`responsif.css`):** Menuliskan aturan dasar tata letak satu kolom untuk layar sempit tanpa menggunakan _media query_[cite: 3, 6].
- **Titik Henti (_Breakpoint_):** Menambahkan aturan adaptif berbasis `min-width` menggunakan satuan `rem`[cite: 3, 7]:
  - **48rem:** Penyesuaian galeri menjadi dua kolom[cite: 7].
  - **60rem:** Penataan ulang tata letak utama dengan menyandingkan _sidebar_ dan konten[cite: 7].
- **Optimasi Media & Tabel:** Membatasi gambar dengan `max-width: 100%` serta membungkus tabel lebar dengan wadah gulir mandiri (`overflow-x: auto`) guna mencegah terjadinya luapan (_overflow_) atau gulir mendatar pada layar kecil[cite: 3, 8].

---

## Struktur Berkas Proyek

- `profil.html` atau `kerangka-profil.html` — Berkas utama halaman web HTML5 semantik[cite: 3, 6].
- `css/tokens.css` — Variabel design token global[cite: 3].
- `css/base.css` — Pengaturan dasar elemen HTML[cite: 3].
- `css/layout.css` — Struktur tata letak utama halaman[cite: 3].
- `css/komponen.css` — Gaya visual komponen (formulir, fokus, dll)[cite: 3].
- `css/tema.css` — Pengaturan skema warna, tema gelap, dan tombol pengalih[cite: 3].
- `css/responsif.css` — Aturan desain responsif _mobile-first_ dan _breakpoint_[cite: 3, 6].
- `media/` — Aset gambar dan penunjang visual profil[cite: 3].
- `bukti/` — Folder penyimpanan tangkapan layar hasil pengujian.
