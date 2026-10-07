// js/dom.js
import { daftarProyek } from "./app.js";

// 1. Memilih elemen di halaman (Lembar A)
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// 2. Fungsi untuk membuat satu elemen kartu proyek (Lembar B)
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // Mengisi teks dengan aman (mencegah XSS)[cite: 18]
  return li;
}

// 3. Fungsi render utama untuk menampilkan daftar proyek (Lembar D)
function render(daftar) {
  // Kosongkan wadah terlebih dahulu agar kartu tidak bertumpuk/berlipat (Lembar B.2)[cite: 18]
  wadah.textContent = "";

  // Periksa apakah data kosong, lalu tampilkan pesan kosong jika ya (Lembar D.1)[cite: 22]
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  // Sembunyikan pesan kosong dan isi ulang wadah dengan kartu proyek[cite: 22]
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// Render awal saat halaman pertama kali dimuat (menampilkan semua proyek)
render(daftarProyek);

// Fungsi untuk menandai tombol filter yang sedang aktif (Lembar C.2)[cite: 20]
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// 4. Event Delegation untuk tombol filter (Lembar C.1)[cite: 20]
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Abaikan jika yang diklik bukan tombol di dalam filter

  const kategori = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);

  // Saring data berdasarkan kategori yang dipilih ("semua" atau kategori spesifik)[cite: 20]
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );

  render(terpilih);
});
// 5. Validasi dan Penanganan Form (Lembar D)
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    // Mencegah halaman dimuat ulang saat form dikirim (Lembar D.2)
    event.preventDefault();

    const inputNama = document.querySelector("#nama");
    const inputEmail = document.querySelector("#email");
    const inputNim = document.querySelector("#nim");
    const inputPesan = document.querySelector("#pesan");

    let formSah = true;

    // Contoh validasi sederhana: periksa apakah nama kosong atau hanya berisi spasi (Lembar D.2)
    if (inputNama.value.trim() === "") {
      inputNama.setAttribute("aria-invalid", "true");
      formSah = false;
    } else {
      inputNama.removeAttribute("aria-invalid");
    }

    // Periksa email
    if (inputEmail.value.trim() === "") {
      inputEmail.setAttribute("aria-invalid", "true");
      formSah = false;
    } else {
      inputEmail.removeAttribute("aria-invalid");
    }

    // Jika seluruh kolom sah, form siap diproses
    if (formSah) {
      console.log("Form berhasil dikirim tanpa memuat ulang halaman!");
      // Anda bisa menambahkan reset form atau pesan sukses di sini
      form.reset();
    }
  });
}
