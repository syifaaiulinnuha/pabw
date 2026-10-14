// js/events.js
import { state, pilihKategori } from "./state.js";
import { tandaiTombolAktif } from "./dom.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      const kategori = tombol.dataset.kategori;
      tandaiTombolAktif(tombol);

      // Mengubah state lewat fungsi pengubah (yang otomatis merender ulang)
      pilihKategori(kategori);
    });
  }
}
