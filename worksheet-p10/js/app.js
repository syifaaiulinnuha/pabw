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

// Tambahkan export dan kategori untuk kebutuhan render & filter di dom.js
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
// worksheet-p10/js/app.js
import { ambilNotisia } from "./api.js";

const wadah = document.querySelector("#daftar");

function gambar(daftar) {
  wadah.textContent = ""; // Kosongkan wadah sebelum digambar ulang
  daftar.forEach(function (n) {
    const kartu = document.createElement("article");
    const judul = document.createElement("h3");
    judul.textContent = n.title; // Menggunakan textContent agar aman dari XSS
    kartu.appendChild(judul);
    wadah.appendChild(kartu);
  });
}

async function tampilkan() {
  wadah.textContent = "Memuat..."; // Keadaan memuat
  try {
    const daftar = await ambilNotisia();
    if (daftar.length === 0) {
      wadah.textContent = "Belum ada notisia"; // Keadaan kosong
      return;
    }
    gambar(daftar); // Keadaan berhasil
  } catch (galat) {
    wadah.textContent = "Gagal memuat data: " + galat.message; // Keadaan gagal
  }
}

tampilkan();
