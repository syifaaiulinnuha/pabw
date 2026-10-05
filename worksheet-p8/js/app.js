const profil = {
  nama: "Muhammad Syifaai Ulin Nuha",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
console.log(profil); // Tambahkan ini agar objek profil tercetak di Console
// 1. Fungsi murni untuk menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} ${peran}`;
}

// 2. Fungsi murni untuk merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(". ");

// Menguji fungsi di Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
// Tambahkan array of object untuk daftar proyek
const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
  { judul: "Sistem Manajemen Kopi", tahun: 2026, selesai: true },
];

// Cetak ke tabel di Console
console.table(profil.keahlian);
console.table(daftarProyek);

// Menggunakan filter untuk mengambil proyek yang sudah selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// Menggunakan find untuk mencari proyek tertentu
const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk",
);
console.log(katalog);
