<script setup>
import { computed } from "vue";
import { state } from "../state.js";

const proyekTampil = computed(() => {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter((p) => p.kategori === state.kategoriAktif);
});
</script>

<template>
  <div class="project-list">
    <div v-for="proyek in proyekTampil" :key="proyek.id" class="card">
      <img
        v-if="proyek.gambar"
        :src="proyek.gambar"
        :alt="proyek.judul"
        class="gambar-proyek"
      />
      <h3>{{ proyek.judul }}</h3>
      <p>{{ proyek.deskripsi }}</p>
    </div>
  </div>
</template>
