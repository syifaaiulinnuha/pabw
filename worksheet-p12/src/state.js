import { reactive } from "vue";
import { daftarProyek } from "./data.js";

export const state = reactive({
  daftarProyek: daftarProyek,
  kategoriAktif: "semua",
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  // Di Vue, kita tidak perlu memanggil render() manual lagi!
}
