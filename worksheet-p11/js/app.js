import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

// Inisialisasi awal aplikasi
render(state);
pasangPendengar();

console.log("Aplikasi berhasil dirakit dengan 5 modul!");
