<script setup>
import { onMounted, watch } from "vue";
import { state } from "./state.js";
import { muat, simpan, aturUlang } from "./simpanan.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";

const identitas = {
  nama: "Muhammad Syifaai Ulin Nuha",
  peran: "Mahasiswa Informatika",
  foto: "/media/profil.jpg", // Sesuaikan dengan nama berkas foto Anda di public/media/
};

onMounted(() => {
  const isi = muat();
  if (isi && isi.kategoriAktif) {
    state.kategoriAktif = isi.kategoriAktif;
  }
});

watch(
  state,
  (nilaiBaru) => {
    simpan(nilaiBaru);
  },
  { deep: true },
);

function handleAturUlang() {
  aturUlang();
  state.kategoriAktif = "semua";
}
</script>

<template>
  <div class="container">
    <KepalaProfil :profil="identitas" />
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />

    <div style="margin-top: 2rem">
      <button @click="handleAturUlang" class="btn-reset">
        Atur Ulang Pilihan
      </button>
    </div>
  </div>
</template>
