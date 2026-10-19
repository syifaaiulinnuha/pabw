<script setup>
import { ref } from "vue";
const namaPengirim = ref("");
const pesanPengirim = ref("");

function kirimPesan(e) {
  e.preventDefault();
  alert(`Terima kasih, ${namaPengirim.value}! Pesan Anda telah dikirim.`);
  namaPengirim.value = "";
  pesanPengirim.value = "";
}
</script>

<template>
  <form @submit="kirimPesan" class="contact-form">
    <input
      type="text"
      v-model="namaPengirim"
      placeholder="Nama Anda"
      required
    />
    <textarea
      v-model="pesanPengirim"
      placeholder="Pesan Anda"
      required
    ></textarea>
    <button type="submit">Kirim</button>
  </form>
</template>
