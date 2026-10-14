// js/state.js
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
  kategoriAktif: "semua",
  daftarProyek: daftarProyek,
};

// Satu pintu masuk untuk setiap perubahan state
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state); // Setiap state berubah, tampilan otomatis digambar ulang
}
