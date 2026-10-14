// js/state.js
import { daftarProyek } from "./data.js";
import { muat, simpan } from "./storage.js";

// Muat simpanan atau gunakan nilai bawaan ("semua")
const simpananLama = muat();

export const state = {
  kategoriAktif: simpananLama?.kategoriAktif ?? "semua",
  daftarProyek: daftarProyek,
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state); // Simpan ke localStorage setiap berubah
}
