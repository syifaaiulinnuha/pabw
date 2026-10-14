// js/storage.js
const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    return null; // Simpanan rusak: pakai nilai bawaan
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}
