// js/dom.js
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// 1. Fungsi saring membaca dari state.kategoriAktif, bukan dari dataset tombol DOM
function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif,
  );
}

// 2. Fungsi render menerima objek state dengan urutan 3 pekerjaan tetap
export function render(state) {
  wadah.textContent = ""; // 1. Kosongkan wadah

  const tampil = saring(state);

  if (tampil.length === 0) {
    // 2. Periksa keadaan kosong
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek))); // 3. Isi ulang dari state
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
