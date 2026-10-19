// js/events.js
import { state, pilihKategori } from "./state.js";
import { render, tandaiTombolAktif } from "./dom.js";
import { aturUlang } from "./storage.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      // Tangani tombol atur ulang
      if (tombol.id === "atur-ulang") {
        aturUlang();
        pilihKategori("semua");
        render(state);
        return;
      }

      const kategori = tombol.dataset.kategori;
      tandaiTombolAktif(tombol);
      pilihKategori(kategori);
      render(state);
    });
  }
}
