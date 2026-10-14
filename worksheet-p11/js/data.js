// Rembang / UII Profil Data & Pure Functions
export const profil = {
  nama: "Muhammad Syifaai Ulin Nuha",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true, kategori: "web" },
  { judul: "Katalog Produk", tahun: 2026, selesai: false, kategori: "web" },
  {
    judul: "Sistem Manajemen Kopi",
    tahun: 2026,
    selesai: true,
    kategori: "data",
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(". ");
