// worksheet-p10/js/app.js
import { ambilNotisia } from "./api.js";

const wadah = document.querySelector("#daftar");

function gambar(daftar) {
  wadah.textContent = ""; // Kosongkan wadah sebelum digambar ulang
  daftar.forEach(function (n) {
    const kartu = document.createElement("article");
    kartu.className = "kartu-notisia"; // Berikan kelas CSS agar berbentuk kartu rapi

    const judul = document.createElement("h3");
    judul.textContent = n.title; // Menggunakan textContent agar aman dari XSS

    const isi = document.createElement("p");
    isi.textContent = n.body; // Menampilkan deskripsi karya

    kartu.appendChild(judul);
    kartu.appendChild(isi);
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
