<script setup>
import { state, pilihKategori } from "../state.js";
</script>

<template>
  <div class="filter-container">
    <button
      @click="pilihKategori('semua')"
      :class="{ active: state.kategoriAktif === 'semua' }"
    >
      Semua
    </button>
    <button
      @click="pilihKategori('katalog')"
      :class="{ active: state.kategoriAktif === 'katalog' }"
    >
      Katalog Produk
    </button>
    <button
      @click="pilihKategori('manajemen')"
      :class="{ active: state.kategoriAktif === 'manajemen' }"
    >
      Sistem Manajemen Kopi
    </button>
  </div>
</template>
